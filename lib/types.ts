export type Stakeholder = "Dan" | "Martin" | "Matthew";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  hourlyRate: number;
  weeklyCapacity: number;
  draftSpeed: number;
  compileSpeed: number;
  chaosBuffer: number;
}

export interface Project {
  id: number;
  name: string;
  type: string;
  clientType: string;
  targetWords: number;
  manualHours?: number;
  assignedTo: string;
  internalStatus: string;
  clientStatus: string;
  stakeholder: Stakeholder;
  launchWindow: string; // deprecated, use displayDate
  targetDate?: string; // ISO string for sorting
  displayDate?: string; // free-form label for UI
  isLocked?: boolean; // true if deadline is externally dictated
  budgetType: string;
  dependency: string | null;
  revenuePotential: string;
}

export interface TaskRate {
  task: string;
  range: string;
  hourly: string;
  notes: string;
}

export interface Metrics {
  writingRate: number; // hours per 1k words
  editingPagesPerHour: number;
  wordsPerPage: number;
  layoutHoursPerPage: number;
  pmOverheadPercent: number;
  contingencyPercent: number;
  blendedHourlyRate: number;
}

export interface RatePreset {
  label: string;
  rate: number;
}

export interface IncomeScenario {
  id: string;
  label: string;
  desiredIncome: number;
}

export interface AnnualLoadProject extends Project {
  calculatedHours: number;
}

export interface WriterLoad extends TeamMember {
  projects: AnnualLoadProject[];
  totalHours: number;
  annualCapacity: number;
}

export interface ProjectAnalysis extends Project {
  total: number;
  estCost: number;
}

export interface StakeholderDemand {
  stakeholder: Stakeholder;
  internalLabel: string;
  clientLabel: string;
  hours: number;
  fill: string;
}

export interface QuarterBuckets {
  [quarter: string]: ProjectAnalysis[];
}

export interface ProductionPhase {
  id: "architecture" | "assembly";
  title: string;
  description: string;
  investmentType: string;
  effortHours: number;
  formula: string;
  breakdown: string[];
  outcomes: string[];
}

export interface ReplacementRole {
  label: string;
  marketRate: string;
  annualCost: string;
  notes: string;
}

export interface OrphanedAsset {
  id: string;
  name: string;
  status: string;
  risk: string;
  ask: string;
}

export type ProjectWithDisplay = Project & {
  displayStatus?: string;
  displayType?: string;
};

export type DisplayProject = ProjectAnalysis & {
  displayStatus?: string;
  displayType?: string;
};

export interface DefenseAnalysisResult {
  myCostPerWord: number;
  savingsPerWord: number;
  savingsPercent: number;
  marketCost: number;
  myCost: number;
}

export interface ScenarioRow extends IncomeScenario {
  wordsNeeded: number;
  feasible: boolean;
}

export interface EstimatorInput {
  activity: string;
  totalWords: number;
  draftSpeed: number;
  bufferPercent: number;
  dailyHours: number;
}

export interface EstimatorResult {
  hours: number;
  days: number;
  date: string;
  mgrText: string;
}
