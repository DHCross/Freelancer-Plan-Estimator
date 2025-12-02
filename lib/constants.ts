import {
  IncomeScenario,
  Metrics,
  ProductionPhase,
  Project,
  RatePreset,
  Stakeholder,
  TaskRate,
  TeamMember,
  ReplacementRole,
  OrphanedAsset,
} from "./types";

export const TEAM_ROSTER: TeamMember[] = [
  {
    id: "dan",
    name: "Dan Cross",
    role: "Setting Expert / Archivist",
    hourlyRate: 20,
    weeklyCapacity: 20,
    draftSpeed: 200,
    compileSpeed: 2500,
    chaosBuffer: 15,
  },
  {
    id: "martin",
    name: "Martin",
    role: "Lead Creative (A-Series)",
    hourlyRate: 50,
    weeklyCapacity: 15,
    draftSpeed: 400,
    compileSpeed: 500,
    chaosBuffer: 30,
  },
  {
    id: "matthew",
    name: "Matthew",
    role: "PM / Production Lead",
    hourlyRate: 0,
    weeklyCapacity: 10,
    draftSpeed: 0,
    compileSpeed: 0,
    chaosBuffer: 0,
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    name: "Eldritch 2E: Curses to Prose",
    type: "Corporate Mandate",
    clientType: "Strategic Priority",
    targetWords: 60000,
    assignedTo: "dan",
    internalStatus: "Priority",
    clientStatus: "Strategic Priority",
    stakeholder: "Matthew",
    launchWindow: "Dec 22 Deadline",
    budgetType: "Revenue Protection",
    dependency: "Print Queue Slot",
    revenuePotential: "Core IP Stability",
    manualHours: undefined,
  },
  {
    id: 3,
    name: "A1: Scaffolding Maintenance",
    type: "Lore/Structure",
    clientType: "Infrastructure Investment",
    targetWords: 15000,
    manualHours: 30,
    assignedTo: "dan",
    internalStatus: "Critical",
    clientStatus: "High Priority",
    stakeholder: "Dan",
    launchWindow: "Q1 2026",
    budgetType: "CapEx (Enabler)",
    dependency: "Previous Scaffolding",
    revenuePotential: "Unlocks Martin",
  },
  {
    id: 4,
    name: "Deities & Calendar Fix",
    type: "Lore Infrastructure",
    clientType: "System Reliability",
    targetWords: 10000,
    manualHours: 25,
    assignedTo: "dan",
    internalStatus: "Critical",
    clientStatus: "High Priority",
    stakeholder: "Dan",
    launchWindow: "Q1 2026",
    budgetType: "CapEx (Enabler)",
    dependency: null,
    revenuePotential: "Prevents Lore Break",
  },
  {
    id: 6,
    name: "A0: Caravans End",
    type: "Small Adventure",
    clientType: "Revenue Accelerator",
    targetWords: 20000,
    assignedTo: "martin",
    internalStatus: "Drafting",
    clientStatus: "In Production",
    stakeholder: "Martin",
    launchWindow: "Q2 2026",
    budgetType: "Revenue Generator",
    dependency: "A0 Scaffolding (Dan)",
    revenuePotential: "Quick Win",
    manualHours: undefined,
  },
  {
    id: 7,
    name: "A1: Narrative Finish",
    type: "Large Adventure",
    clientType: "Flagship Release",
    targetWords: 158000,
    assignedTo: "martin",
    internalStatus: "Layout",
    clientStatus: "In Finishing",
    stakeholder: "Martin",
    launchWindow: "Q4 2026",
    budgetType: "Revenue Generator",
    dependency: "A1 Scaffolding (Dan)",
    revenuePotential: "Flagship Release",
    manualHours: undefined,
  },
];

export const STAKEHOLDER_COLORS: Record<Stakeholder, string> = {
  Martin: "#f97316",
  Matthew: "#3b82f6",
  Dan: "#10b981",
};

export const TASK_RATES: TaskRate[] = [
  { task: "Technical Writing", range: "$0.030 – $0.040", hourly: "$15 – $20", notes: "Stat blocks, mechanics" },
  { task: "Creative Development", range: "$0.030 – $0.040", hourly: "$15 – $20", notes: "Narrative innovation" },
  { task: "Dev Editing", range: "$0.025 – $0.035", hourly: "$12 – $17", notes: "Refining ideas" },
  { task: "Rules Checking", range: "$0.025 – $0.035", hourly: "$12 – $17", notes: "System balance" },
];

export const DEFAULT_METRICS: Metrics = {
  writingRate: 5.5,
  editingPagesPerHour: 10,
  wordsPerPage: 500,
  layoutHoursPerPage: 1.25,
  pmOverheadPercent: 0.15,
  contingencyPercent: 0.2,
  blendedHourlyRate: 20,
};

export const RATE_PRESETS: Record<string, RatePreset> = {
  low: { label: "Low (3 cents/word)", rate: 0.03 },
  medium: { label: "Medium (8 cents/word)", rate: 0.08 },
  high: { label: "High (12 cents/word)", rate: 0.12 },
};

export const INCOME_SCENARIOS: IncomeScenario[] = [
  { id: "freelance_modest", label: "Modest Freelance Year", desiredIncome: 20000 },
  { id: "freelance_full", label: "Full-Time Freelance", desiredIncome: 50000 },
  { id: "studio_push", label: "Aggressive Studio Push", desiredIncome: 80000 },
];

export const LEGACY_GHOST_CAPACITY = [
  { label: "Jon (Writing/Editing)", hours: "40h/wk" },
  { label: "Derek (Art/Visuals)", hours: "40h/wk" },
  { label: "Randy (Production Lead)", hours: "40h/wk" },
];

export const PRODUCTION_PHASES: ProductionPhase[] = [
  {
    id: "architecture",
    title: "Phase 1 — Architecture",
    description: "Systems building, lore scaffolding, calendars, and workflow design that make high velocity possible.",
    investmentType: "Capital Expense (Preventive)",
    effortHours: 180,
    formula: "(12 Core Assets × 15h avg)",
    outcomes: [
      "Lore databases + style guides",
      "Production-ready calendars",
      "Risk mitigation playbooks",
    ],
  },
  {
    id: "assembly",
    title: "Phase 2 — Assembly",
    description: "Deployment of the architecture to produce narrative content at scale with predictable timelines.",
    investmentType: "Operating Expense (Revenue Generating)",
    effortHours: 435,
    formula: "(60k Words @ High-Velocity Rate)",
    outcomes: [
      "High-velocity drafting",
      "Coordinated editing + layout",
      "Stakeholder-ready deliverables",
    ],
  },
];

export const REPLACEMENT_ROLES: ReplacementRole[] = [
  {
    label: "Lead Writer",
    marketRate: "$0.08/word",
    annualCost: "$80,000",
    notes: "Requires full story bible + revisions",
  },
  {
    label: "Development Editor",
    marketRate: "$0.05/word",
    annualCost: "$50,000",
    notes: "Needs systems context to avoid rework",
  },
  {
    label: "Production PM",
    marketRate: "$45/hr",
    annualCost: "$70,000",
    notes: "Coordinates freelancers + QA",
  },
];

export const CAPACITY_GAP_STATS = {
  headline: "Current model covers 48% of required hours.",
  gapHours: 1600,
  description:
    "Without additional investment, 2026 delivery slips by two quarters. Funding the Production Engine closes the deficit without adding headcount.",
};

export const ORPHANED_ASSETS: OrphanedAsset[] = [
  {
    id: "stormvik",
    name: "Stormvik Outpost",
    status: "On Ice",
    risk: "Translation backlog causes partner churn",
    ask: "Fund bilingual rewrite sprint",
  },
  {
    id: "merit-matrix",
    name: "Merit Matrix",
    status: "Unstaffed",
    risk: "Lost visibility into promotion paths",
    ask: "Assign analyst once scaffolding clears",
  },
];
