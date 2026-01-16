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
  ArtTierConfig,
  MapComplexity,
  ProductLine,
} from "./types";

export const TEAM_ROSTER: TeamMember[] = [
  {
    id: "dan",
    name: "Dan Cross",
    role: "Creative Infrastructure Lead / Setting Expert",
    hourlyRate: 20,
    weeklyCapacity: 20,
    draftSpeed: 200,
    compileSpeed: 2500,
    chaosBuffer: 15,
  },
  {
    id: "martin",
    name: "Martin",
    role: "Visionary Lead / Creative Engine / Primary Author",
    hourlyRate: 50,
    weeklyCapacity: 15,
    draftSpeed: 400,
    compileSpeed: 500,
    chaosBuffer: 30,
  },
  {
    id: "matthew",
    name: "Matthew",
    role: "Project Manager / Production Lead",
    hourlyRate: 0,
    weeklyCapacity: 10,
    draftSpeed: 0,
    compileSpeed: 0,
    chaosBuffer: 0,
  },
];

export const ROLE_TEMPLATES = {
  "Creative Infrastructure Lead": {
    hourlyRate: 20,
    weeklyCapacity: 20,
    draftSpeed: 200,
    compileSpeed: 2500,
    chaosBuffer: 15,
    description: "Steward of canon, narrative consistency, worldbuilding integrity, and production pipeline management"
  },
  "Marketing & Creative Strategy Lead": {
    hourlyRate: 50,
    weeklyCapacity: 15,
    draftSpeed: 400,
    compileSpeed: 500,
    chaosBuffer: 30,
    description: "External-facing strategies, product positioning, brand development, audience engagement"
  },
  "Primary Narrative Author": {
    hourlyRate: 45,
    weeklyCapacity: 20,
    draftSpeed: 350,
    compileSpeed: 1000,
    chaosBuffer: 25,
    description: "Develops core storylines, establishes setting lore, crafts character arcs and thematic elements"
  },
  "Narrative Coordinator": {
    hourlyRate: 35,
    weeklyCapacity: 15,
    draftSpeed: 250,
    compileSpeed: 800,
    chaosBuffer: 20,
    description: "Ensures narrative consistency, manages writer contributions, maintains canon alignment"
  },
  "Developmental Editor": {
    hourlyRate: 25,
    weeklyCapacity: 15,
    draftSpeed: 300,
    compileSpeed: 1200,
    chaosBuffer: 15,
    description: "Refines structure, pacing, clarity; addresses inconsistencies and scope issues"
  },
  "Copy Editor": {
    hourlyRate: 18,
    weeklyCapacity: 20,
    draftSpeed: 500,
    compileSpeed: 2000,
    chaosBuffer: 10,
    description: "Ensures grammar, stylistic consistency, readability, and professional standards"
  },
  "Layout Designer": {
    hourlyRate: 22,
    weeklyCapacity: 15,
    draftSpeed: 0,
    compileSpeed: 3000,
    chaosBuffer: 10,
    description: "Integrates text, artwork, and maps into cohesive, user-friendly documents"
  },
  "Art Coordinator": {
    hourlyRate: 20,
    weeklyCapacity: 10,
    draftSpeed: 0,
    compileSpeed: 0,
    chaosBuffer: 15,
    description: "Oversees commissioning and selection of artwork and maps, ensures visual consistency"
  },
  "Project Manager": {
    hourlyRate: 30,
    weeklyCapacity: 25,
    draftSpeed: 0,
    compileSpeed: 0,
    chaosBuffer: 10,
    description: "Tracks timelines, manages milestones, facilitates communication, budget adherence"
  },
  "QA & Playtest Coordinator": {
    hourlyRate: 15,
    weeklyCapacity: 12,
    draftSpeed: 0,
    compileSpeed: 0,
    chaosBuffer: 5,
    description: "Organizes playtesting sessions, compiles feedback, provides revision recommendations"
  },
  "Lead Writer": {
    hourlyRate: 40,
    weeklyCapacity: 20,
    draftSpeed: 300,
    compileSpeed: 1500,
    chaosBuffer: 20,
    description: "Crafts detailed narrative content, drafts and revises textual elements"
  },
  "Technical Writer": {
    hourlyRate: 22,
    weeklyCapacity: 20,
    draftSpeed: 250,
    compileSpeed: 1800,
    chaosBuffer: 15,
    description: "Specialized tasks like stat blocks, mechanics, rules systems"
  },
  "Cartographer": {
    hourlyRate: 40,
    weeklyCapacity: 15,
    draftSpeed: 0,
    compileSpeed: 0,
    chaosBuffer: 20,
    description: "Creates maps and cartographic assets"
  }
};

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: "chaos-rising",
    label: "Chaos Rising (A-Series)",
    owner: "Martin",
    color: "#f97316",
    description: "Flagship narrative line spanning A0–A4 plus supporting canon.",
    productIds: [6, 7, 11, 12, 13, 15, 16, 17, 14],
  },
  {
    id: "eldritch",
    label: "Eldritch 2E + Core IP",
    owner: "Matthew",
    color: "#3b82f6",
    description: "Core IP protection, Dec 22 launch window, non-negotiable milestones.",
    productIds: [1],
  },
  {
    id: "infrastructure",
    label: "Infrastructure & Scaffolding",
    owner: "Dan",
    color: "#10b981",
    description: "Scaffolding and system reliability that unblock the A-series schedule.",
    productIds: [2, 3, 4, 5],
  },
];

export const INITIAL_PROJECTS: Project[] = [
  // Martin's Chaos Rising Product Line
  {
    id: 6,
    name: "A0: Caravan's End",
    type: "Small Adventure",
    clientType: "Revenue Accelerator",
    targetWords: 20000,
    assignedTo: "dan",
    internalStatus: "Layout",
    clientStatus: "Urgent",
    stakeholder: "Martin",
    launchWindow: "Jan 2026",
    targetDate: "2026-01-31",
    displayDate: "Jan 31st (Hard)",
    isLocked: true,
    budgetType: "Revenue Generator",
    dependency: "Chaos Rising Framework",
    revenuePotential: "Quick Win Hook",
    manualHours: 32, // Based on Audit: 2h + 6h + 24h
    layoutHours: 40, // Based on Audit: 40h
    benchmarkNotes: "Urgent fix: Survival Mode active (See A0 Checklist). NotebookLM audit confirmed.",
    lifecycleState: "Production",
    tasks: [{
      id: "task-6-1",
      projectId: 6,
      assigneeId: "dan",
      remainingHours: 32,
      status: "Active",
      dependencyIds: [],
      sortOrder: 1
    }]
  },
  {
    id: 7,
    name: "A1: The Problem of Possibilities (Complete)",
    type: "Large Adventure",
    clientType: "Flagship Release",
    targetWords: 97000,
    assignedTo: "martin",
    internalStatus: "Cleanup",
    clientStatus: "In Production",
    stakeholder: "Martin",
    launchWindow: "Q2 2026",
    targetDate: "2026-05-31",
    displayDate: "End of May",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "A0: Caravan's End",
    revenuePotential: "Core Mandate",
    manualHours: 388,
    layoutHours: 240,
    lifecycleState: "Complete",
    tasks: [{
      id: "task-7-1",
      projectId: 7,
      assigneeId: "martin",
      remainingHours: 0,
      status: "Done",
      dependencyIds: [],
      sortOrder: 1
    }]
  },
  {
    id: 11,
    name: "Players Guide for Chaos Rising",
    type: "Player Sourcebook",
    clientType: "Flagship Release",
    targetWords: 25000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Planned",
    stakeholder: "Martin",
    launchWindow: "Q1 2026",
    targetDate: "2026-03-31",
    displayDate: "End of March",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "A1: The Problem of Possibilities",
    revenuePotential: "Lore Foundation",
    manualHours: 100,
    layoutHours: 64,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-11-1",
      projectId: 11,
      assigneeId: "martin",
      remainingHours: 100,
      status: "Ready",
      dependencyIds: ["task-7-1"],
      sortOrder: 1
    }]
  },
  {
    id: 12,
    name: "Tales of the Ancient Path (Battle Maps)",
    type: "Battle Maps",
    clientType: "Revenue Accelerator",
    targetWords: 30000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Planned",
    stakeholder: "Martin",
    launchWindow: "Q3 2026",
    targetDate: undefined,
    displayDate: "Q3 2026",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "A1: The Problem of Possibilities",
    revenuePotential: "Modular Encounters",
    manualHours: undefined,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-12-1",
      projectId: 12,
      assigneeId: "martin",
      remainingHours: 150,
      status: "Ready",
      dependencyIds: ["task-7-1"],
      sortOrder: 1
    }]
  },
  {
    id: 13,
    name: "Ravenous Coast Setting Book",
    type: "Setting Sourcebook",
    clientType: "Flagship Release",
    targetWords: 60000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Planned",
    stakeholder: "Martin",
    launchWindow: "2026",
    targetDate: undefined,
    displayDate: "2026",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "Chaos Rising Framework",
    revenuePotential: "World Canon",
    manualHours: undefined,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-13-1",
      projectId: 13,
      assigneeId: "martin",
      remainingHours: 300,
      status: "Ready",
      dependencyIds: [],
      sortOrder: 1
    }]
  },
  {
    id: 15,
    name: "A2: The Problem of Possibilities - Part 2",
    type: "Large Adventure",
    clientType: "Flagship Release",
    targetWords: 80000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Planned",
    stakeholder: "Martin",
    launchWindow: "Q3 2026",
    targetDate: "2026-09-30",
    displayDate: "September 30",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "A1: The Problem of Possibilities",
    revenuePotential: "Series Continuation",
    manualHours: 320,
    layoutHours: 200,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-15-1",
      projectId: 15,
      assigneeId: "martin",
      remainingHours: 320,
      status: "Ready",
      dependencyIds: ["task-7-1"],
      sortOrder: 1
    }]
  },
  {
    id: 16,
    name: "A3: The Problem of Possibilities - Part 3",
    type: "Large Adventure",
    clientType: "Flagship Release",
    targetWords: 80000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Planned",
    stakeholder: "Martin",
    launchWindow: "Q4 2026",
    targetDate: "2026-12-15",
    displayDate: "December 15",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "A2: The Problem of Possibilities - Part 2",
    revenuePotential: "Series Continuation",
    manualHours: 320,
    layoutHours: 200,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-16-1",
      projectId: 16,
      assigneeId: "martin",
      remainingHours: 320,
      status: "Blocked",
      dependencyIds: ["task-15-1"],
      sortOrder: 1
    }]
  },
  {
    id: 17,
    name: "A4: The Problem of Possibilities - Part 4",
    type: "Large Adventure",
    clientType: "Flagship Release",
    targetWords: 80000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Planned",
    stakeholder: "Martin",
    launchWindow: "Q4 2026",
    targetDate: undefined,
    displayDate: "Q4 2026",
    isLocked: false,
    budgetType: "Revenue Generator",
    dependency: "A3: The Problem of Possibilities - Part 3",
    revenuePotential: "Series Conclusion",
    manualHours: 320,
    layoutHours: 200,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-17-1",
      projectId: 17,
      assigneeId: "martin",
      remainingHours: 320,
      status: "Blocked",
      dependencyIds: ["task-16-1"],
      sortOrder: 1
    }]
  },
  {
    id: 14,
    name: "Grimdark Ruleset (Skeleton Draft)",
    type: "Core Rules",
    clientType: "Strategic Asset",
    targetWords: 50000,
    assignedTo: "martin",
    internalStatus: "Planning",
    clientStatus: "Contingent",
    stakeholder: "Martin",
    launchWindow: "Q4 2026",
    targetDate: undefined,
    displayDate: "Q4 2026",
    isLocked: false,
    budgetType: "CapEx (Enabler)",
    dependency: "A-Series Success",
    revenuePotential: "Creative Control Reward",
    manualHours: undefined,
    lifecycleState: "Planning",
    tasks: [{
      id: "task-14-1",
      projectId: 14,
      assigneeId: "martin",
      remainingHours: 250,
      status: "Ready",
      dependencyIds: [],
      sortOrder: 1
    }]
  },

  // Matthew's Eldritch Product Line (Separate Pipeline)
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
    targetDate: "2025-12-22",
    displayDate: "Dec 22 Deadline",
    isLocked: true,
    budgetType: "Revenue Protection",
    dependency: "Print Queue Slot",
    revenuePotential: "Core IP Stability",
    manualHours: undefined,
    lifecycleState: "Production",
    tasks: [{
      id: "task-1-1",
      projectId: 1,
      assigneeId: "dan",
      remainingHours: 300,
      status: "Active",
      dependencyIds: [],
      sortOrder: 1
    }]
  },

  // Infrastructure Projects (Support Both Lines)
  {
    id: 2,
    name: "Production Pipeline Framework",
    type: "Lore/Structure",
    clientType: "System Reliability",
    targetWords: 5000,
    manualHours: 20,
    assignedTo: "dan",
    internalStatus: "Critical",
    clientStatus: "High Priority",
    stakeholder: "Dan",
    launchWindow: "Q1 2026",
    targetDate: undefined,
    displayDate: "Q1 2026",
    isLocked: false,
    budgetType: "CapEx (Enabler)",
    dependency: "Previous Scaffolding",
    revenuePotential: "Unlocks Martin",
    lifecycleState: "Production",
    tasks: [{
      id: "task-2-1",
      projectId: 2,
      assigneeId: "dan",
      remainingHours: 20,
      status: "Active",
      dependencyIds: [],
      sortOrder: 1
    }]
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
    targetDate: undefined,
    displayDate: "Q1 2026",
    isLocked: false,
    budgetType: "CapEx (Enabler)",
    dependency: "Previous Scaffolding",
    revenuePotential: "Unlocks Martin",
    lifecycleState: "Production",
    tasks: [{
      id: "task-3-1",
      projectId: 3,
      assigneeId: "dan",
      remainingHours: 30,
      status: "Active",
      dependencyIds: [],
      sortOrder: 1
    }]
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
    targetDate: undefined,
    displayDate: "Q1 2026",
    isLocked: false,
    budgetType: "CapEx (Enabler)",
    dependency: null,
    revenuePotential: "Prevents Lore Break",
    lifecycleState: "Production",
    tasks: [{
      id: "task-4-1",
      projectId: 4,
      assigneeId: "dan",
      remainingHours: 25,
      status: "Active",
      dependencyIds: [],
      sortOrder: 1
    }]
  },
  {
    id: 5,
    name: "Template System Overhaul",
    type: "Lore/Structure",
    clientType: "System Reliability",
    targetWords: 8000,
    manualHours: 15,
    assignedTo: "dan",
    internalStatus: "Priority",
    clientStatus: "Planned",
    stakeholder: "Dan",
    launchWindow: "Q1 2026",
    targetDate: undefined,
    displayDate: "Q1 2026",
    isLocked: false,
    budgetType: "CapEx (Enabler)",
    dependency: "Previous Scaffolding",
    revenuePotential: "Unlocks Martin",
    lifecycleState: "Production",
    tasks: [{
      id: "task-5-1",
      projectId: 5,
      assigneeId: "dan",
      remainingHours: 15,
      status: "Active",
      dependencyIds: [],
      sortOrder: 1
    }]
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

export const ART_TIER_CONFIGS: ArtTierConfig[] = [
  {
    id: "BEGINNER",
    label: "Beginner / Hobbyist",
    min: 100,
    max: 400,
    default: 250,
    notes: "Simple character sketches, icons, or small commissions",
  },
  {
    id: "EMERGING",
    label: "Emerging Artist",
    min: 400,
    max: 1200,
    default: 800,
    notes: "Character portraits, basic environments, maps",
  },
  {
    id: "MID_PRO",
    label: "Mid-Level Professional",
    min: 1200,
    max: 3500,
    default: 2000,
    notes: "Full color portraits, complex maps, multi-piece illustrations",
  },
  {
    id: "ESTABLISHED",
    label: "Established Artist",
    min: 3500,
    max: 7500,
    default: 5000,
    notes: "Covers and major flagship illustrations",
  },
  {
    id: "PREMIUM",
    label: "Premium / High Profile",
    min: 7500,
    max: 20000,
    default: 12000,
    notes: "High-profile covers and exclusive assets",
  },
];

export const COVER_ART_RATE_DEFAULT = 1400;
export const CARTOGRAPHY_DEFAULT = 2500;
export const INTERIOR_SPOT_DEFAULT = 120;
export const INTERIOR_HALF_DEFAULT = 250;
export const INTERIOR_FULL_DEFAULT = 400;
export const PORTRAIT_DEFAULT = 250;
export const REGIONAL_MAP_DEFAULT = 800;
export const ENCOUNTER_MAP_DEFAULT = 400;

// A1 Manuscript Reality Baseline (audited from A1: Problem of Possibilities 4.1.25)
// Total: 23 pieces (not 38 as previously assumed)
export const A1_ART_BASELINE = {
  regionalMaps: 1,        // REQUIRED - Essential for campaign orientation
  encounterMaps: 3,       // REQUIRED - Necessary for combat/exploration areas
  interiorIllustrations: 7, // REQUIRED/ENHANCING - Core scene-setting pieces
  spotArt: 12,            // COSMETIC - Chapter/section openers for layout consistency
  npcPortraits: 0,        // N/A - No structural requirement in A1 text
  covers: 1,              // REQUIRED - Standard cover commission
  totalPieces: 23,        // Corrected from previous 38-piece assumption
  wordCount: 97000,       // A1 reference word count for scaling
};

// Art Density Market Presets
// Based on industry research comparing A1 baseline to major publishers
export type ArtDensityPreset = "osr" | "5e" | "pathfinder";

export interface ArtDensityConfig {
  id: ArtDensityPreset;
  label: string;
  description: string;
  wordsPerPiece: number;           // Overall density target
  encounterMapsPerWord: number;
  illustrationsPerWord: number;
  spotArtPerWord: number;
  portraitsPerWord: number;        // 0 = disabled by default
  regionalMapsPerBook: number;
  coversPerBook: number;
  costMultiplier: number;          // Relative to OSR baseline
}

export const ART_DENSITY_PRESETS: Record<ArtDensityPreset, ArtDensityConfig> = {
  // OSR / A1 Baseline (your current model)
  // ~1 piece per 4,200 words, 23 pieces for 97k words
  osr: {
    id: "osr",
    label: "OSR / Indie (A1 Baseline)",
    description: "Conservative, text-dense. Aligns with classic TSR-era modules and indie publisher standards.",
    wordsPerPiece: 4200,
    encounterMapsPerWord: 3 / 97000,      // ~1 per 32k words
    illustrationsPerWord: 7 / 97000,      // ~1 per 14k words
    spotArtPerWord: 12 / 97000,           // ~1 per 8k words
    portraitsPerWord: 0,                  // Not standard in OSR
    regionalMapsPerBook: 1,
    coversPerBook: 1,
    costMultiplier: 1.0,
  },
  
  // 5E Standard (WotC hardcover adventures)
  // ~1 piece per 2,800-3,200 words, 32-38 pieces for 97k words
  "5e": {
    id: "5e",
    label: "5E Standard (WotC Style)",
    description: "Market expectation for 5E adventures. More NPC portraits, chapter splashes, decorative elements.",
    wordsPerPiece: 3000,
    encounterMapsPerWord: 6 / 97000,      // ~1 per 16k words (50-100% more maps)
    illustrationsPerWord: 12 / 97000,     // ~1 per 8k words (+71% more)
    spotArtPerWord: 15 / 97000,           // ~1 per 6.5k words
    portraitsPerWord: 5 / 97000,          // ~1 per 19k words (major NPCs)
    regionalMapsPerBook: 1,
    coversPerBook: 1,
    costMultiplier: 1.5,                  // ~50% higher art budget
  },
  
  // Pathfinder Premium (Paizo Adventure Paths)
  // ~1 piece per 1,400-1,900 words, 50-70 pieces for 97k words
  pathfinder: {
    id: "pathfinder",
    label: "Pathfinder Premium (Paizo Style)",
    description: "Lavish illustration as competitive differentiator. Heavy NPC portraits, multiple map scales, spot art every 2-3 pages.",
    wordsPerPiece: 1600,
    encounterMapsPerWord: 10 / 97000,     // ~1 per 10k words (100-200% more maps)
    illustrationsPerWord: 20 / 97000,     // ~1 per 5k words (+185% more)
    spotArtPerWord: 25 / 97000,           // ~1 per 4k words
    portraitsPerWord: 12 / 97000,         // ~1 per 8k words (8-15 per volume)
    regionalMapsPerBook: 2,               // Regional + local scale
    coversPerBook: 1,
    costMultiplier: 2.5,                  // ~150% higher art budget
  },
};

// Default to OSR/A1 baseline
export const ART_SCALING_RATIOS = ART_DENSITY_PRESETS.osr;

// Project type multipliers for art density
// Some project types need more/less art relative to word count
export const PROJECT_TYPE_ART_MULTIPLIERS: Record<string, number> = {
  "Large Adventure": 1.0,       // A1 baseline
  "Small Adventure": 1.1,       // Slightly higher density (shorter = more visual)
  "Player Sourcebook": 0.8,     // More text-heavy, fewer scenes
  "Setting Sourcebook": 0.9,    // Moderate illustration needs
  "Battle Maps": 2.0,           // Map-heavy by definition
  "Core Rules": 0.6,            // Text/diagram heavy
  "Lore/Structure": 0.3,        // Minimal art needs
  "Lore Infrastructure": 0.2,   // Internal docs, minimal art
  "Corporate Mandate": 0.7,     // Varies, conservative default
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

// Human-friendly workflow categories
export const WORKFLOW_CATEGORIES = {
  PRIME_DIRECTIVE: {
    id: "prime_directive",
    label: "Prime Directive",
    description: "Must ship to protect revenue, reputation, or contracts",
    color: "red",
    priority: 0
  },
  ACTIVELY_WORKING: {
    id: "actively_working", 
    label: "Actively Working",
    description: "Someone is touching this week",
    color: "blue",
    priority: 1
  },
  READY_TO_ADVANCE: {
    id: "ready_to_advance",
    label: "Ready to Advance", 
    description: "Clear to work, waiting for capacity",
    color: "green",
    priority: 2
  },
  BLOCKED: {
    id: "blocked",
    label: "Blocked",
    description: "Needs input/approval/asset",
    color: "orange", 
    priority: 3
  },
  DORMANT: {
    id: "dormant",
    label: "Dormant Projects",
    description: "Real, but unstaffed or on ice",
    color: "purple",
    priority: 4
  },
  TRASH_FIRE: {
    id: "trash_fire",
    label: "Trash Fire Watchlist",
    description: "At risk or needs truth-telling",
    color: "red",
    priority: 5
  },
  SANDBOX: {
    id: "sandbox",
    label: "Optional Sandbox",
    description: "Explorations and experiments",
    color: "gray",
    priority: 6
  }
};

export const PRODUCTION_PHASES: ProductionPhase[] = [
  {
    id: "architecture",
    title: "Phase 1 — Architecture",
    description: "Systems building, lore scaffolding, calendars, and workflow design that make high velocity possible.",
    investmentType: "Capital Expense (Preventive)",
    effortHours: 180,
    formula: "(12 Key Deliverables × 15 hrs each)",
    breakdown: [
      "Lore Database: 20 hrs",
      "Timeline Engineering: 40 hrs",
      "Governance Protocols: 30 hrs",
      "Style Guide: 15 hrs",
      "Calendar System: 15 hrs",
      "Risk Playbook: 15 hrs",
      "Asset Registry: 15 hrs",
      "Workflow Design: 15 hrs",
      "Documentation: 10 hrs",
      "Review & QA: 10 hrs",
      "Integration: 10 hrs",
      "Finalization: 5 hrs"
    ],
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
    formula: "(60,000 Words × 7.25 hrs/word)",
    breakdown: [
      "Drafting: 200 hrs",
      "Editing: 100 hrs",
      "Layout: 60 hrs",
      "QA & Review: 40 hrs",
      "Stakeholder Coordination: 35 hrs"
    ],
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

export const MAP_COMPLEXITY_DEFAULTS: Record<MapComplexity, {
  baseDraftHours: number;
  baseRevisionHours: number;
  expectedRevisions: number;
  internalBriefingHours: number;
  internalReviewHoursPerPass: number;
  integrationHours: number;
}> = {
  S: {
    baseDraftHours: 5,
    baseRevisionHours: 2.5,
    expectedRevisions: 1.5,
    internalBriefingHours: 1.5,
    internalReviewHoursPerPass: 0.75,
    integrationHours: 1.5,
  },
  M: {
    baseDraftHours: 10,
    baseRevisionHours: 3.5,
    expectedRevisions: 2,
    internalBriefingHours: 1.5,
    internalReviewHoursPerPass: 0.75,
    integrationHours: 1.5,
  },
  L: {
    baseDraftHours: 20,
    baseRevisionHours: 5,
    expectedRevisions: 2.5,
    internalBriefingHours: 2,
    internalReviewHoursPerPass: 1,
    integrationHours: 2,
  },
  XL: {
    baseDraftHours: 36,
    baseRevisionHours: 7,
    expectedRevisions: 3,
    internalBriefingHours: 2,
    internalReviewHoursPerPass: 1.5,
    integrationHours: 3,
  },
};
