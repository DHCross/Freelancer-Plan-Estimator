import { DEFAULT_METRICS, STAKEHOLDER_COLORS } from "./constants";
import {
  DefenseAnalysisResult,
  EstimatorInput,
  EstimatorResult,
  EstimatorInputV2,
  EstimatorOutputV2,
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
  PaceScenario,
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

export function computeEffectiveWords(totalWords: number, existingWords: number = 0): number {
  return Math.max(0, totalWords - existingWords);
}

export function todayISO(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addWorkingDays(startISO: string, days: number, includeWeekends: boolean): string {
  if (!startISO) return "";

  const [y, m, d] = startISO.split("-").map((part) => parseInt(part, 10));
  if (!y || !m || !d) return startISO;

  // Use UTC at midday to avoid DST/offset drift
  const date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));

  if (days <= 0) {
    return date.toISOString().slice(0, 10);
  }

  let remaining = Math.ceil(days);
  while (remaining > 0) {
    date.setUTCDate(date.getUTCDate() + 1);
    const dayOfWeek = date.getUTCDay();
    if (includeWeekends || (dayOfWeek !== 0 && dayOfWeek !== 6)) {
      remaining -= 1;
    }
  }

  return date.toISOString().slice(0, 10);
}

export function computePaceScenario({
  effectiveWords,
  speed,
  chaosPercent,
  pacingMode,
  dailyHours,
  weeklyHours,
  includeWeekends,
  startDate,
}: {
  effectiveWords: number;
  speed: number;
  chaosPercent: number;
  pacingMode: "daily" | "weekly";
  dailyHours: number;
  weeklyHours?: number;
  includeWeekends: boolean;
  startDate: string;
}): PaceScenario {
  if (effectiveWords <= 0 || speed <= 0) {
    return {
      hours: 0,
      days: 0,
      finishDate: startDate || todayISO(),
    };
  }

  const chaosMult = 1 + (chaosPercent || 0) / 100;
  const rawHours = (effectiveWords / speed) * chaosMult;

  let hoursPerDay: number;
  if (pacingMode === "daily") {
    hoursPerDay = dailyHours > 0 ? dailyHours : 1;
  } else {
    const weekly = weeklyHours && weeklyHours > 0 ? weeklyHours : dailyHours * 5;
    hoursPerDay = weekly / 7;
  }

  const rawDays = hoursPerDay > 0 ? rawHours / hoursPerDay : 0;
  const roundedHours = Math.round(rawHours);
  const roundedDays = Math.ceil(rawDays);
  const finishDate = addWorkingDays(startDate || todayISO(), rawDays, includeWeekends);

  return {
    hours: roundedHours,
    days: roundedDays,
    finishDate,
  };
}

export function getDefaultDraftSpeedForRole(roleId?: string | null): number {
  if (!roleId) return 175;
  const key = roleId.toLowerCase();
  if (key === "dan" || key === "dan-cross") return 200;
  if (key === "martin") return 150;
  return 175;
}

export function runEstimatorV2(
  input: EstimatorInputV2,
  teamRoster: TeamMember[] = []
): EstimatorOutputV2 {
  const effectiveWords = computeEffectiveWords(input.totalWords, input.existingWords ?? 0);

  const pacingMode = input.pacingMode || "daily";
  const baseStart = input.startDate || todayISO();

  const member = input.roleId
    ? teamRoster.find((m) => m.id === input.roleId)
    : undefined;

  const draftSpeed =
    input.draftSpeed || member?.draftSpeed || getDefaultDraftSpeedForRole(input.roleId);

  const compileSpeed =
    input.compileSpeed || member?.compileSpeed || 0;

  const chaosPercent =
    input.bufferPercent ?? (member?.chaosBuffer ?? 0);

  const draftScenario = computePaceScenario({
    effectiveWords,
    speed: draftSpeed,
    chaosPercent,
    pacingMode,
    dailyHours: input.dailyHours,
    weeklyHours: input.weeklyHours,
    includeWeekends: input.includeWeekends,
    startDate: baseStart,
  });

  const compileScenario = compileSpeed > 0
    ? computePaceScenario({
        effectiveWords,
        speed: compileSpeed,
        chaosPercent,
        pacingMode,
        dailyHours: input.dailyHours,
        weeklyHours: input.weeklyHours,
        includeWeekends: input.includeWeekends,
        startDate: baseStart,
      })
    : {
        hours: 0,
        days: 0,
        finishDate: baseStart,
      };

  const managerParts: string[] = [];
  managerParts.push(
    `"${input.activity}" at ${Math.round(draftSpeed)} w/hr with ${chaosPercent}% buffer and ${input.dailyHours} hrs/day is about ${draftScenario.hours} hours (${draftScenario.days} working days), finishing around ${draftScenario.finishDate}.`
  );

  if (compileSpeed > 0 && compileScenario.hours > 0) {
    managerParts.push(
      `With compile support at ${Math.round(compileSpeed)} w/hr, full draft+compile time is about ${compileScenario.hours} hours (${compileScenario.days} days), finishing around ${compileScenario.finishDate}.`
    );
  }

  const managerText = managerParts.join(" ");

  const selfText = [
    `Effective words: ${effectiveWords.toLocaleString()}.`,
    `Draft-only: ${draftScenario.hours}h over ${draftScenario.days} day(s), finish ${draftScenario.finishDate}.`,
    compileSpeed > 0 && compileScenario.hours > 0
      ? `Draft+compile: ${compileScenario.hours}h over ${compileScenario.days} day(s), finish ${compileScenario.finishDate}.`
      : `No compile speed configured; draft-only scenario is primary.`,
  ].join(" ");

  return {
    effectiveWords,
    draftScenario,
    compileScenario,
    managerText,
    selfText,
  };
}

export function runEstimator(
  input: EstimatorInput,
  teamRoster: TeamMember[] = []
): EstimatorResult {
  const mapped: EstimatorInputV2 = {
    activity: input.activity,
    totalWords: input.totalWords,
    existingWords: 0,
    draftSpeed: input.draftSpeed,
    compileSpeed: 0,
    bufferPercent: input.bufferPercent,
    pacingMode: "daily",
    dailyHours: input.dailyHours,
    weeklyHours: undefined,
    includeWeekends: true,
    startDate: todayISO(),
    roleId: input.teamMemberId,
  };

  const v2 = runEstimatorV2(mapped, teamRoster);

  const hours = v2.draftScenario.hours;
  const days = v2.draftScenario.days;
  const date = v2.draftScenario.finishDate;

  const teamMember = input.teamMemberId
    ? teamRoster.find((m) => m.id === input.teamMemberId)
    : undefined;

  const mgrText = v2.managerText;

  return {
    hours,
    days,
    date,
    mgrText,
    teamMember,
    roleAdjusted: false,
  };
}
