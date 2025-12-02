import { DEFAULT_METRICS, STAKEHOLDER_COLORS, TEAM_ROSTER } from "./constants";
import {
  DefenseAnalysisResult,
  EstimatorInput,
  EstimatorResult,
  Metrics,
  Project,
  ProjectAnalysis,
  QuarterBuckets,
  ScenarioRow,
  Stakeholder,
  StakeholderDemand,
  WriterLoad,
  IncomeScenario,
} from "./types";

export function calculateAnnualLoad(projects: Project[]): WriterLoad[] {
  const writers: Record<string, WriterLoad> = {};

  TEAM_ROSTER.forEach((member) => {
    writers[member.id] = {
      ...member,
      projects: [],
      totalHours: 0,
      annualCapacity: member.weeklyCapacity * 48,
    };
  });

  projects.forEach((project) => {
    const writer = writers[project.assignedTo];
    if (!writer) return;

    let hours = 0;
    if (project.manualHours) {
      hours = project.manualHours;
    } else {
      const raw = project.targetWords / (writer.draftSpeed || 200);
      hours = raw * (1 + writer.chaosBuffer / 100);
    }

    writer.projects.push({ ...project, calculatedHours: hours });
    writer.totalHours += hours;
  });

  return Object.values(writers);
}

export function calculateProjectAnalysis(
  projects: Project[],
  metrics: Metrics = DEFAULT_METRICS
): ProjectAnalysis[] {
  return projects.map((project) => {
    if (project.manualHours) {
      const estCost = project.manualHours * metrics.blendedHourlyRate;
      return { ...project, total: project.manualHours, estCost };
    }

    const writing = (project.targetWords / 1000) * metrics.writingRate;
    const pages = project.targetWords / metrics.wordsPerPage;
    const layout = pages * metrics.layoutHoursPerPage;
    const coreWork = project.internalStatus === "Layout" ? layout : writing + layout;
    const pm = coreWork * metrics.pmOverheadPercent;
    const subtotal = coreWork + pm;
    const contingency = subtotal * metrics.contingencyPercent;
    const total = Math.round(subtotal + contingency);
    const estCost = total * metrics.blendedHourlyRate;

    return { ...project, total, estCost };
  });
}

export function calculateStakeholderDemand(
  analysis: ProjectAnalysis[]
): StakeholderDemand[] {
  const load: Record<string, number> = { Martin: 0, Matthew: 0, Dan: 0 };

  analysis.forEach((project) => {
    load[project.stakeholder] += project.total;
  });

  const labelMap: Record<string, { internal: string; client: string }> = {
    Martin: { internal: "Martin's Demand", client: "A-Series Initiative" },
    Matthew: { internal: "Matthew's Demand", client: "Eldritch Initiative" },
    Dan: { internal: "Dan (Architecture)", client: "Production Engine" },
  };

  return Object.entries(load).map(([stakeholderKey, hours]) => {
    const key = stakeholderKey as Stakeholder;
    return {
      stakeholder: key,
      internalLabel: labelMap[stakeholderKey]?.internal ?? stakeholderKey,
      clientLabel: labelMap[stakeholderKey]?.client ?? stakeholderKey,
      hours,
      fill: STAKEHOLDER_COLORS[key],
    };
  });
}

export function bucketByQuarter(analysis: ProjectAnalysis[]): QuarterBuckets {
  return analysis.reduce<QuarterBuckets>((acc, project) => {
    if (!acc[project.launchWindow]) {
      acc[project.launchWindow] = [];
    }
    acc[project.launchWindow].push(project);
    return acc;
  }, {});
}

export function calculateDefenseAnalysis(
  defendHourlyRate: number,
  defendWPH: number,
  marketPerWord: number,
  annualWords = 200_000
): DefenseAnalysisResult {
  const myCostPerWord = defendHourlyRate / defendWPH;
  const savingsPerWord = marketPerWord - myCostPerWord;
  const savingsPercent = (savingsPerWord / marketPerWord) * 100;
  const marketCost = annualWords * marketPerWord;
  const myCost = annualWords * myCostPerWord;

  return { myCostPerWord, savingsPerWord, savingsPercent, marketCost, myCost };
}

export function buildScenarioRows(
  scenarios: IncomeScenario[],
  wordRate: number,
  capacityWordsPerYear: number
): ScenarioRow[] {
  return scenarios.map((scenario) => {
    const wordsNeeded = wordRate > 0 ? scenario.desiredIncome / wordRate : 0;
    const feasible = capacityWordsPerYear >= wordsNeeded;
    return { ...scenario, wordsNeeded, feasible };
  });
}

export function runEstimator({
  activity,
  totalWords,
  draftSpeed,
  bufferPercent,
  dailyHours,
}: EstimatorInput): EstimatorResult {
  const hours = (totalWords / draftSpeed) * (1 + bufferPercent / 100);
  const days = hours / dailyHours;
  const date = new Date();
  date.setDate(date.getDate() + Math.ceil(days));

  return {
    hours: Math.round(hours),
    days: Math.ceil(days),
    date: date.toISOString().slice(0, 10),
    mgrText: `This task "${activity}" requires approx. ${Math.round(
      hours
    )} hours, targeting completion around ${date
      .toISOString()
      .slice(0, 10)} (w/ ${bufferPercent}% buffer).`,
  };
}
