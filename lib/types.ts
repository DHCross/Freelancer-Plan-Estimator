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
  layoutHours?: number;
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
  teamMemberId?: string;
  projectName?: string;
  roleLabel?: string;
}

export interface EstimatorResult {
  hours: number;
  days: number;
  date: string;
  mgrText: string;
  teamMember?: TeamMember;
  roleAdjusted?: boolean;
}

export interface EstimationBucketEntry {
  id: string;
  projectName: string;
  activity: string;
  roleLabel: string;
  teamMemberId?: string;
  teamMemberName?: string;
  hours: number;
  days: number;
}

export interface EstimatorInputV2 {
  activity: string;
  totalWords: number;
  existingWords?: number; // default 0
  draftSpeed: number; // words per hour
  compileSpeed: number; // words per hour, 0 if not applicable
  bufferPercent: number; // chaos buffer percentage
  pacingMode: "daily" | "weekly";
  dailyHours: number; // used when pacingMode === "daily"
  weeklyHours?: number; // optional, for future weekly pacing
  includeWeekends: boolean;
  startDate: string; // ISO date string (e.g. 2025-12-02)
  roleId?: string; // optional role or person identifier
}

export interface PaceScenario {
  hours: number;
  days: number;
  finishDate: string; // ISO date string
}

export interface EstimatorOutputV2 {
  effectiveWords: number;
  draftScenario: PaceScenario;
  compileScenario: PaceScenario;
  managerText: string;
  selfText: string;
}

export type ArtTier = "BEGINNER" | "EMERGING" | "MID_PRO" | "ESTABLISHED" | "PREMIUM";

export interface ArtTierConfig {
  id: ArtTier;
  label: string;
  min: number;
  max: number;
  default: number;
  notes: string;
}

export interface ArtModuleInput {
  artTier: ArtTier;
  numSpots: number;
  numHalfPage: number;
  numFullPage: number;
  numPortraits: number;
  numCovers: number;
}

export interface ArtBudgetBreakdown {
  coverCost: number;
  spotCost: number;
  halfPageCost: number;
  fullPageCost: number;
  portraitCost: number;
  totalArtCost: number;
}
