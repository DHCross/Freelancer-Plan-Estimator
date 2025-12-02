import { DEFAULT_METRICS, STAKEHOLDER_COLORS } from "./constants";
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
  TeamMember,
} from "./types";

export function calculateAnnualLoad(projects: Project[], teamRoster: TeamMember[] = []): WriterLoad[] {
  const writers: Record<string, WriterLoad> = {};

  teamRoster.forEach((member) => {
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
  teamMemberId,
}: EstimatorInput, teamRoster: TeamMember[] = []): EstimatorResult {
  // Get team member if specified
  const teamMember = teamMemberId ? teamRoster.find(m => m.id === teamMemberId) : undefined;
  
  // Use team member's specific values if available, otherwise use provided inputs
  const actualDraftSpeed = teamMember?.draftSpeed || draftSpeed;
  const actualBufferPercent = teamMember?.chaosBuffer || bufferPercent;
  
  // Apply role-based adjustments
  let roleAdjusted = false;
  let adjustedDraftSpeed = actualDraftSpeed;
  
  if (teamMember) {
    // Role-specific adjustments
    if (teamMember.role.includes("Lead Creative") || teamMember.role.includes("A-Series")) {
      // Martin (Lead Creative) might be slower on technical writing but faster on creative work
      if (activity.toLowerCase().includes("technical") || activity.toLowerCase().includes("mechanics")) {
        adjustedDraftSpeed = actualDraftSpeed * 0.8; // 20% slower on technical work
        roleAdjusted = true;
      } else if (activity.toLowerCase().includes("creative") || activity.toLowerCase().includes("narrative")) {
        adjustedDraftSpeed = actualDraftSpeed * 1.2; // 20% faster on creative work
        roleAdjusted = true;
      }
    } else if (teamMember.role.includes("Setting Expert") || teamMember.role.includes("Archivist")) {
      // Dan (Setting Expert) might be faster on lore/setting work
      if (activity.toLowerCase().includes("setting") || activity.toLowerCase().includes("lore") || activity.toLowerCase().includes("scaffolding")) {
        adjustedDraftSpeed = actualDraftSpeed * 1.3; // 30% faster on setting/lore work
        roleAdjusted = true;
      }
    }
  }
  
  const hours = (totalWords / adjustedDraftSpeed) * (1 + actualBufferPercent / 100);
  const days = hours / dailyHours;
  const date = new Date();
  date.setDate(date.getDate() + Math.ceil(days));

  const baseText = `This task "${activity}" requires approx. ${Math.round(hours)} hours, targeting completion around ${date.toISOString().slice(0, 10)} (w/ ${actualBufferPercent}% buffer)`;
  
  let mgrText = baseText;
  if (teamMember) {
    mgrText = `${teamMember.name} estimates ${Math.round(hours)} hours for "${activity}", targeting ${date.toISOString().slice(0, 10)} (using ${teamMember.name}'s ${adjustedDraftSpeed} w/hr speed with ${actualBufferPercent}% buffer)`;
    if (roleAdjusted) {
      mgrText += ` [Adjusted for ${teamMember.role} expertise]`;
    }
  }

  return {
    hours: Math.round(hours),
    days: Math.ceil(days),
    date: date.toISOString().slice(0, 10),
    mgrText,
    teamMember,
    roleAdjusted,
  };
}
