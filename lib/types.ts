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
  primaryRole?: string; // Primary role/lane: Writing, Editing, Layout, etc.
  benchmarkNotes?: string; // Layout benchmark or other analysis notes
  estimatedPages?: { min: number; max: number }; // Page range estimates
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
  numRegionalMaps: number;
  numEncounterMaps: number;
}

export interface ArtBudgetBreakdown {
  coverCost: number;
  spotCost: number;
  halfPageCost: number;
  fullPageCost: number;
  portraitCost: number;
  regionalMapCost: number;
  encounterMapCost: number;
  totalArtCost: number;
}

export type DistributionChannelType = "direct" | "kickstarter" | "distributor_standard" | "distributor_hybrid";

export interface DistributionChannel {
  id: DistributionChannelType;
  label: string;
  discountPercent: number; // e.g. 60 for 60% off MSRP
  fulfillmentFeePerUnit: number; // e.g. $2.00 pick & pack
  platformFeePercent: number; // e.g. 5% for KS
}

export interface PrintRunConfig {
  quantity: number;
  unitCost: number;
  freightPerUnit: number;
  warehousingPerUnit: number;
  tariffPercent: number; // e.g. 7.5
}

export interface ProductPricing {
  msrp: number;
}

export interface RoiResult {
  channelId: DistributionChannelType;
  netRevenuePerUnit: number;
  totalRevenue: number;
  totalCogs: number; // Cost of Goods Sold (Print + Freight + Fees)
  grossMargin: number;
  netProfit: number; // Gross Margin - Dev Cost
  breakEvenUnits: number;
  roiPercent: number;
}

export type MapType = "battle" | "dungeon" | "regional" | "world" | "tactical" | "other";
export type MapComplexity = "S" | "M" | "L" | "XL";

export interface MapTicket {
  id: string;
  projectId: string;
  name: string;
  type: MapType;
  complexityTier: MapComplexity;
  isExternalCartographer: boolean;
  cartographerRoleId: string | null; // ID of the team member or contractor role
  baseDraftHours: number;
  baseRevisionHours: number;
  expectedRevisions: number;
  internalBriefingHours: number;
  internalReviewHoursPerPass: number;
  integrationHours: number;
  contractorRate: number | null; // explicit hourly rate if known
  flatMapFee: number | null; // if fixed price
  dependencies: string[];
}

export interface CartographySummary {
  totalMaps: number;
  totalCartographerHours: number;
  totalInternalSupportHours: number;
  totalCartographyCost: number;
  mapCriticalPathDays: number;
}
