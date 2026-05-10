module.exports = [
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A1_ART_BASELINE",
    ()=>A1_ART_BASELINE,
    "ART_DENSITY_PRESETS",
    ()=>ART_DENSITY_PRESETS,
    "ART_SCALING_RATIOS",
    ()=>ART_SCALING_RATIOS,
    "ART_TIER_CONFIGS",
    ()=>ART_TIER_CONFIGS,
    "CAPACITY_GAP_STATS",
    ()=>CAPACITY_GAP_STATS,
    "CARTOGRAPHY_DEFAULT",
    ()=>CARTOGRAPHY_DEFAULT,
    "COVER_ART_RATE_DEFAULT",
    ()=>COVER_ART_RATE_DEFAULT,
    "DEFAULT_METRICS",
    ()=>DEFAULT_METRICS,
    "ENCOUNTER_MAP_DEFAULT",
    ()=>ENCOUNTER_MAP_DEFAULT,
    "INCOME_SCENARIOS",
    ()=>INCOME_SCENARIOS,
    "INITIAL_PROJECTS",
    ()=>INITIAL_PROJECTS,
    "INTERIOR_FULL_DEFAULT",
    ()=>INTERIOR_FULL_DEFAULT,
    "INTERIOR_HALF_DEFAULT",
    ()=>INTERIOR_HALF_DEFAULT,
    "INTERIOR_SPOT_DEFAULT",
    ()=>INTERIOR_SPOT_DEFAULT,
    "LEGACY_GHOST_CAPACITY",
    ()=>LEGACY_GHOST_CAPACITY,
    "MAP_COMPLEXITY_DEFAULTS",
    ()=>MAP_COMPLEXITY_DEFAULTS,
    "ORPHANED_ASSETS",
    ()=>ORPHANED_ASSETS,
    "PORTRAIT_DEFAULT",
    ()=>PORTRAIT_DEFAULT,
    "PRODUCTION_PHASES",
    ()=>PRODUCTION_PHASES,
    "PRODUCT_LINES",
    ()=>PRODUCT_LINES,
    "PROJECT_TYPE_ART_MULTIPLIERS",
    ()=>PROJECT_TYPE_ART_MULTIPLIERS,
    "RATE_PRESETS",
    ()=>RATE_PRESETS,
    "REGIONAL_MAP_DEFAULT",
    ()=>REGIONAL_MAP_DEFAULT,
    "REPLACEMENT_ROLES",
    ()=>REPLACEMENT_ROLES,
    "ROLE_TEMPLATES",
    ()=>ROLE_TEMPLATES,
    "STAKEHOLDER_COLORS",
    ()=>STAKEHOLDER_COLORS,
    "TASK_RATES",
    ()=>TASK_RATES,
    "TEAM_ROSTER",
    ()=>TEAM_ROSTER,
    "WORKFLOW_CATEGORIES",
    ()=>WORKFLOW_CATEGORIES
]);
const TEAM_ROSTER = [
    {
        id: "dan",
        name: "Dan Cross",
        role: "Creative Infrastructure Lead / Setting Expert",
        hourlyRate: 20,
        weeklyCapacity: 20,
        draftSpeed: 200,
        compileSpeed: 2500,
        chaosBuffer: 15
    },
    {
        id: "martin",
        name: "Martin",
        role: "Visionary Lead / Creative Engine / Primary Author",
        hourlyRate: 50,
        weeklyCapacity: 15,
        draftSpeed: 400,
        compileSpeed: 500,
        chaosBuffer: 30
    },
    {
        id: "matthew",
        name: "Matthew",
        role: "Project Manager / Production Lead",
        hourlyRate: 0,
        weeklyCapacity: 10,
        draftSpeed: 0,
        compileSpeed: 0,
        chaosBuffer: 0
    }
];
const ROLE_TEMPLATES = {
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
const PRODUCT_LINES = [
    {
        id: "chaos-rising",
        label: "Chaos Rising (A-Series)",
        owner: "Martin",
        color: "#f97316",
        description: "Flagship narrative line spanning A0–A4 plus supporting canon.",
        productIds: [
            6,
            7,
            11,
            12,
            13,
            15,
            16,
            17,
            14
        ]
    },
    {
        id: "eldritch",
        label: "Eldritch 2E + Core IP",
        owner: "Matthew",
        color: "#3b82f6",
        description: "Core IP protection, Dec 22 launch window, non-negotiable milestones.",
        productIds: [
            1
        ]
    },
    {
        id: "infrastructure",
        label: "Infrastructure & Scaffolding",
        owner: "Dan",
        color: "#10b981",
        description: "Scaffolding and system reliability that unblock the A-series schedule.",
        productIds: [
            2,
            3,
            4,
            5
        ]
    }
];
const INITIAL_PROJECTS = [
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
        manualHours: 32,
        layoutHours: 40,
        benchmarkNotes: "Urgent fix: Survival Mode active (See A0 Checklist). NotebookLM audit confirmed.",
        lifecycleState: "Production",
        tasks: [
            {
                id: "task-6-1",
                projectId: 6,
                assigneeId: "dan",
                remainingHours: 32,
                status: "Active",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-7-1",
                projectId: 7,
                assigneeId: "martin",
                remainingHours: 0,
                status: "Done",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-11-1",
                projectId: 11,
                assigneeId: "martin",
                remainingHours: 100,
                status: "Ready",
                dependencyIds: [
                    "task-7-1"
                ],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-12-1",
                projectId: 12,
                assigneeId: "martin",
                remainingHours: 150,
                status: "Ready",
                dependencyIds: [
                    "task-7-1"
                ],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-13-1",
                projectId: 13,
                assigneeId: "martin",
                remainingHours: 300,
                status: "Ready",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-15-1",
                projectId: 15,
                assigneeId: "martin",
                remainingHours: 320,
                status: "Ready",
                dependencyIds: [
                    "task-7-1"
                ],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-16-1",
                projectId: 16,
                assigneeId: "martin",
                remainingHours: 320,
                status: "Blocked",
                dependencyIds: [
                    "task-15-1"
                ],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-17-1",
                projectId: 17,
                assigneeId: "martin",
                remainingHours: 320,
                status: "Blocked",
                dependencyIds: [
                    "task-16-1"
                ],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-14-1",
                projectId: 14,
                assigneeId: "martin",
                remainingHours: 250,
                status: "Ready",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-1-1",
                projectId: 1,
                assigneeId: "dan",
                remainingHours: 300,
                status: "Active",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-2-1",
                projectId: 2,
                assigneeId: "dan",
                remainingHours: 20,
                status: "Active",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-3-1",
                projectId: 3,
                assigneeId: "dan",
                remainingHours: 30,
                status: "Active",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-4-1",
                projectId: 4,
                assigneeId: "dan",
                remainingHours: 25,
                status: "Active",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
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
        tasks: [
            {
                id: "task-5-1",
                projectId: 5,
                assigneeId: "dan",
                remainingHours: 15,
                status: "Active",
                dependencyIds: [],
                sortOrder: 1
            }
        ]
    }
];
const STAKEHOLDER_COLORS = {
    Martin: "#f97316",
    Matthew: "#3b82f6",
    Dan: "#10b981"
};
const TASK_RATES = [
    {
        task: "Technical Writing",
        range: "$0.030 – $0.040",
        hourly: "$15 – $20",
        notes: "Stat blocks, mechanics"
    },
    {
        task: "Creative Development",
        range: "$0.030 – $0.040",
        hourly: "$15 – $20",
        notes: "Narrative innovation"
    },
    {
        task: "Dev Editing",
        range: "$0.025 – $0.035",
        hourly: "$12 – $17",
        notes: "Refining ideas"
    },
    {
        task: "Rules Checking",
        range: "$0.025 – $0.035",
        hourly: "$12 – $17",
        notes: "System balance"
    }
];
const DEFAULT_METRICS = {
    writingRate: 5.5,
    editingPagesPerHour: 10,
    wordsPerPage: 500,
    layoutHoursPerPage: 1.25,
    pmOverheadPercent: 0.15,
    contingencyPercent: 0.2,
    blendedHourlyRate: 20
};
const RATE_PRESETS = {
    low: {
        label: "Low (3 cents/word)",
        rate: 0.03
    },
    medium: {
        label: "Medium (8 cents/word)",
        rate: 0.08
    },
    high: {
        label: "High (12 cents/word)",
        rate: 0.12
    }
};
const ART_TIER_CONFIGS = [
    {
        id: "BEGINNER",
        label: "Beginner / Hobbyist",
        min: 100,
        max: 400,
        default: 250,
        notes: "Simple character sketches, icons, or small commissions"
    },
    {
        id: "EMERGING",
        label: "Emerging Artist",
        min: 400,
        max: 1200,
        default: 800,
        notes: "Character portraits, basic environments, maps"
    },
    {
        id: "MID_PRO",
        label: "Mid-Level Professional",
        min: 1200,
        max: 3500,
        default: 2000,
        notes: "Full color portraits, complex maps, multi-piece illustrations"
    },
    {
        id: "ESTABLISHED",
        label: "Established Artist",
        min: 3500,
        max: 7500,
        default: 5000,
        notes: "Covers and major flagship illustrations"
    },
    {
        id: "PREMIUM",
        label: "Premium / High Profile",
        min: 7500,
        max: 20000,
        default: 12000,
        notes: "High-profile covers and exclusive assets"
    }
];
const COVER_ART_RATE_DEFAULT = 1400;
const CARTOGRAPHY_DEFAULT = 2500;
const INTERIOR_SPOT_DEFAULT = 120;
const INTERIOR_HALF_DEFAULT = 250;
const INTERIOR_FULL_DEFAULT = 400;
const PORTRAIT_DEFAULT = 250;
const REGIONAL_MAP_DEFAULT = 800;
const ENCOUNTER_MAP_DEFAULT = 400;
const A1_ART_BASELINE = {
    regionalMaps: 1,
    encounterMaps: 3,
    interiorIllustrations: 7,
    spotArt: 12,
    npcPortraits: 0,
    covers: 1,
    totalPieces: 23,
    wordCount: 97000
};
const ART_DENSITY_PRESETS = {
    // OSR / A1 Baseline (your current model)
    // ~1 piece per 4,200 words, 23 pieces for 97k words
    osr: {
        id: "osr",
        label: "OSR / Indie (A1 Baseline)",
        description: "Conservative, text-dense. Aligns with classic TSR-era modules and indie publisher standards.",
        wordsPerPiece: 4200,
        encounterMapsPerWord: 3 / 97000,
        illustrationsPerWord: 7 / 97000,
        spotArtPerWord: 12 / 97000,
        portraitsPerWord: 0,
        regionalMapsPerBook: 1,
        coversPerBook: 1,
        costMultiplier: 1.0
    },
    // 5E Standard (WotC hardcover adventures)
    // ~1 piece per 2,800-3,200 words, 32-38 pieces for 97k words
    "5e": {
        id: "5e",
        label: "5E Standard (WotC Style)",
        description: "Market expectation for 5E adventures. More NPC portraits, chapter splashes, decorative elements.",
        wordsPerPiece: 3000,
        encounterMapsPerWord: 6 / 97000,
        illustrationsPerWord: 12 / 97000,
        spotArtPerWord: 15 / 97000,
        portraitsPerWord: 5 / 97000,
        regionalMapsPerBook: 1,
        coversPerBook: 1,
        costMultiplier: 1.5
    },
    // Pathfinder Premium (Paizo Adventure Paths)
    // ~1 piece per 1,400-1,900 words, 50-70 pieces for 97k words
    pathfinder: {
        id: "pathfinder",
        label: "Pathfinder Premium (Paizo Style)",
        description: "Lavish illustration as competitive differentiator. Heavy NPC portraits, multiple map scales, spot art every 2-3 pages.",
        wordsPerPiece: 1600,
        encounterMapsPerWord: 10 / 97000,
        illustrationsPerWord: 20 / 97000,
        spotArtPerWord: 25 / 97000,
        portraitsPerWord: 12 / 97000,
        regionalMapsPerBook: 2,
        coversPerBook: 1,
        costMultiplier: 2.5
    }
};
const ART_SCALING_RATIOS = ART_DENSITY_PRESETS.osr;
const PROJECT_TYPE_ART_MULTIPLIERS = {
    "Large Adventure": 1.0,
    "Small Adventure": 1.1,
    "Player Sourcebook": 0.8,
    "Setting Sourcebook": 0.9,
    "Battle Maps": 2.0,
    "Core Rules": 0.6,
    "Lore/Structure": 0.3,
    "Lore Infrastructure": 0.2,
    "Corporate Mandate": 0.7
};
const INCOME_SCENARIOS = [
    {
        id: "freelance_modest",
        label: "Modest Freelance Year",
        desiredIncome: 20000
    },
    {
        id: "freelance_full",
        label: "Full-Time Freelance",
        desiredIncome: 50000
    },
    {
        id: "studio_push",
        label: "Aggressive Studio Push",
        desiredIncome: 80000
    }
];
const LEGACY_GHOST_CAPACITY = [
    {
        label: "Jon (Writing/Editing)",
        hours: "40h/wk"
    },
    {
        label: "Derek (Art/Visuals)",
        hours: "40h/wk"
    },
    {
        label: "Randy (Production Lead)",
        hours: "40h/wk"
    }
];
const WORKFLOW_CATEGORIES = {
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
const PRODUCTION_PHASES = [
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
            "Risk mitigation playbooks"
        ]
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
            "Stakeholder-ready deliverables"
        ]
    }
];
const REPLACEMENT_ROLES = [
    {
        label: "Lead Writer",
        marketRate: "$0.08/word",
        annualCost: "$80,000",
        notes: "Requires full story bible + revisions"
    },
    {
        label: "Development Editor",
        marketRate: "$0.05/word",
        annualCost: "$50,000",
        notes: "Needs systems context to avoid rework"
    },
    {
        label: "Production PM",
        marketRate: "$45/hr",
        annualCost: "$70,000",
        notes: "Coordinates freelancers + QA"
    }
];
const CAPACITY_GAP_STATS = {
    headline: "Current model covers 48% of required hours.",
    gapHours: 1600,
    description: "Without additional investment, 2026 delivery slips by two quarters. Funding the Production Engine closes the deficit without adding headcount."
};
const ORPHANED_ASSETS = [
    {
        id: "stormvik",
        name: "Stormvik Outpost",
        status: "On Ice",
        risk: "Translation backlog causes partner churn",
        ask: "Fund bilingual rewrite sprint"
    },
    {
        id: "merit-matrix",
        name: "Merit Matrix",
        status: "Unstaffed",
        risk: "Lost visibility into promotion paths",
        ask: "Assign analyst once scaffolding clears"
    }
];
const MAP_COMPLEXITY_DEFAULTS = {
    S: {
        baseDraftHours: 5,
        baseRevisionHours: 2.5,
        expectedRevisions: 1.5,
        internalBriefingHours: 1.5,
        internalReviewHoursPerPass: 0.75,
        integrationHours: 1.5
    },
    M: {
        baseDraftHours: 10,
        baseRevisionHours: 3.5,
        expectedRevisions: 2,
        internalBriefingHours: 1.5,
        internalReviewHoursPerPass: 0.75,
        integrationHours: 1.5
    },
    L: {
        baseDraftHours: 20,
        baseRevisionHours: 5,
        expectedRevisions: 2.5,
        internalBriefingHours: 2,
        internalReviewHoursPerPass: 1,
        integrationHours: 2
    },
    XL: {
        baseDraftHours: 36,
        baseRevisionHours: 7,
        expectedRevisions: 3,
        internalBriefingHours: 2,
        internalReviewHoursPerPass: 1.5,
        integrationHours: 3
    }
};
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/calculations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWorkingDays",
    ()=>addWorkingDays,
    "bucketByQuarter",
    ()=>bucketByQuarter,
    "buildScenarioRows",
    ()=>buildScenarioRows,
    "calculateAnnualLoad",
    ()=>calculateAnnualLoad,
    "calculateDefenseAnalysis",
    ()=>calculateDefenseAnalysis,
    "calculateProjectAnalysis",
    ()=>calculateProjectAnalysis,
    "calculateRoi",
    ()=>calculateRoi,
    "calculateStakeholderDemand",
    ()=>calculateStakeholderDemand,
    "computeEffectiveWords",
    ()=>computeEffectiveWords,
    "computePaceScenario",
    ()=>computePaceScenario,
    "estimateProjectArt",
    ()=>estimateProjectArt,
    "getDefaultDraftSpeedForRole",
    ()=>getDefaultDraftSpeedForRole,
    "runArtBudget",
    ()=>runArtBudget,
    "runEstimator",
    ()=>runEstimator,
    "runEstimatorV2",
    ()=>runEstimatorV2,
    "todayISO",
    ()=>todayISO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)");
;
function calculateAnnualLoad(projects, teamRoster = []) {
    const writers = {};
    teamRoster.forEach((member)=>{
        writers[member.id] = {
            ...member,
            projects: [],
            totalHours: 0,
            committedHours: 0,
            annualCapacity: member.weeklyCapacity * 48
        };
    });
    projects.forEach((project)=>{
        const writer = writers[project.assignedTo];
        if (!writer) return;
        let hours = 0;
        if (project.manualHours) {
            hours = project.manualHours;
        } else {
            const raw = project.targetWords / (writer.draftSpeed || 200);
            hours = raw * (1 + writer.chaosBuffer / 100);
        }
        writer.projects.push({
            ...project,
            calculatedHours: hours
        });
        writer.totalHours += hours;
        if (project.lifecycleState === "Production") {
            if (project.tasks && project.tasks.length > 0) {
                project.tasks.forEach((t)=>{
                    if ((t.status === "Active" || t.status === "Review") && t.remainingHours > 0) {
                        const assignee = writers[t.assigneeId];
                        if (assignee) {
                            assignee.committedHours += t.remainingHours;
                        }
                    }
                });
            } else {
                writer.committedHours += hours;
            }
        }
    });
    return Object.values(writers);
}
function calculateProjectAnalysis(projects, metrics = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_METRICS"]) {
    return projects.map((project)=>{
        let total = 0;
        let estCost = 0;
        if (project.manualHours) {
            estCost = project.manualHours * metrics.blendedHourlyRate;
            total = project.manualHours;
        } else {
            const writing = project.targetWords / 1000 * metrics.writingRate;
            const pages = project.targetWords / metrics.wordsPerPage;
            const layout = pages * metrics.layoutHoursPerPage;
            const coreWork = project.internalStatus === "Layout" ? layout : writing + layout;
            const pm = coreWork * metrics.pmOverheadPercent;
            const subtotal = coreWork + pm;
            const contingency = subtotal * metrics.contingencyPercent;
            total = Math.round(subtotal + contingency);
            estCost = total * metrics.blendedHourlyRate;
        }
        // Calculate Committed Cost (Execution Boundary)
        let committedCost = 0;
        if (project.lifecycleState === "Production") {
            let activeHours = 0;
            if (project.tasks && project.tasks.length > 0) {
                activeHours = project.tasks.filter((t)=>(t.status === "Active" || t.status === "Review") && t.remainingHours > 0).reduce((sum, t)=>sum + t.remainingHours, 0);
            } else {
                // Fallback: If in Production but no tasks, assume total estimate is active
                activeHours = total;
            }
            // Apply contingency to remaining work
            const contingency = activeHours * metrics.contingencyPercent;
            committedCost = (activeHours + contingency) * metrics.blendedHourlyRate;
        }
        return {
            ...project,
            total,
            estCost,
            committedCost
        };
    });
}
function calculateStakeholderDemand(analysis) {
    const load = {
        Martin: 0,
        Matthew: 0,
        Dan: 0
    };
    analysis.forEach((project)=>{
        load[project.stakeholder] += project.total;
    });
    const labelMap = {
        Martin: {
            internal: "Martin's Demand",
            client: "A-Series Initiative"
        },
        Matthew: {
            internal: "Matthew's Demand",
            client: "Eldritch Initiative"
        },
        Dan: {
            internal: "Dan (Architecture)",
            client: "Production Engine"
        }
    };
    return Object.entries(load).map(([stakeholderKey, hours])=>{
        const key = stakeholderKey;
        return {
            stakeholder: key,
            internalLabel: labelMap[stakeholderKey]?.internal ?? stakeholderKey,
            clientLabel: labelMap[stakeholderKey]?.client ?? stakeholderKey,
            hours,
            fill: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAKEHOLDER_COLORS"][key]
        };
    });
}
function bucketByQuarter(analysis) {
    return analysis.reduce((acc, project)=>{
        if (!acc[project.launchWindow]) {
            acc[project.launchWindow] = [];
        }
        acc[project.launchWindow].push(project);
        return acc;
    }, {});
}
function calculateDefenseAnalysis(defendHourlyRate, defendWPH, marketPerWord, annualWords = 200_000) {
    const myCostPerWord = defendHourlyRate / defendWPH;
    const savingsPerWord = marketPerWord - myCostPerWord;
    const savingsPercent = savingsPerWord / marketPerWord * 100;
    const marketCost = annualWords * marketPerWord;
    const myCost = annualWords * myCostPerWord;
    return {
        myCostPerWord,
        savingsPerWord,
        savingsPercent,
        marketCost,
        myCost
    };
}
function buildScenarioRows(scenarios, wordRate, capacityWordsPerYear) {
    return scenarios.map((scenario)=>{
        const wordsNeeded = wordRate > 0 ? scenario.desiredIncome / wordRate : 0;
        const feasible = capacityWordsPerYear >= wordsNeeded;
        return {
            ...scenario,
            wordsNeeded,
            feasible
        };
    });
}
function computeEffectiveWords(totalWords, existingWords = 0) {
    return Math.max(0, totalWords - existingWords);
}
function todayISO() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
}
function addWorkingDays(startISO, days, includeWeekends) {
    if (!startISO) return "";
    const [y, m, d] = startISO.split("-").map((part)=>parseInt(part, 10));
    if (!y || !m || !d) return startISO;
    // Use UTC at midday to avoid DST/offset drift
    const date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
    if (days <= 0) {
        return date.toISOString().slice(0, 10);
    }
    let remaining = Math.ceil(days);
    while(remaining > 0){
        date.setUTCDate(date.getUTCDate() + 1);
        const dayOfWeek = date.getUTCDay();
        if (includeWeekends || dayOfWeek !== 0 && dayOfWeek !== 6) {
            remaining -= 1;
        }
    }
    return date.toISOString().slice(0, 10);
}
function computePaceScenario({ effectiveWords, speed, chaosPercent, pacingMode, dailyHours, weeklyHours, includeWeekends, startDate }) {
    if (effectiveWords <= 0 || speed <= 0) {
        return {
            hours: 0,
            days: 0,
            finishDate: startDate || todayISO()
        };
    }
    const chaosMult = 1 + (chaosPercent || 0) / 100;
    const rawHours = effectiveWords / speed * chaosMult;
    let hoursPerDay;
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
        finishDate
    };
}
function getDefaultDraftSpeedForRole(roleId) {
    if (!roleId) return 175;
    const key = roleId.toLowerCase();
    if (key === "dan" || key === "dan-cross") return 200;
    if (key === "martin") return 150;
    return 175;
}
function runEstimatorV2(input, teamRoster = []) {
    const effectiveWords = computeEffectiveWords(input.totalWords, input.existingWords ?? 0);
    const pacingMode = input.pacingMode || "daily";
    const baseStart = input.startDate || todayISO();
    const member = input.roleId ? teamRoster.find((m)=>m.id === input.roleId) : undefined;
    const draftSpeed = input.draftSpeed || member?.draftSpeed || getDefaultDraftSpeedForRole(input.roleId);
    const compileSpeed = input.compileSpeed || member?.compileSpeed || 0;
    const chaosPercent = input.bufferPercent ?? member?.chaosBuffer ?? 0;
    const draftScenario = computePaceScenario({
        effectiveWords,
        speed: draftSpeed,
        chaosPercent,
        pacingMode,
        dailyHours: input.dailyHours,
        weeklyHours: input.weeklyHours,
        includeWeekends: input.includeWeekends,
        startDate: baseStart
    });
    const compileScenario = compileSpeed > 0 ? computePaceScenario({
        effectiveWords,
        speed: compileSpeed,
        chaosPercent,
        pacingMode,
        dailyHours: input.dailyHours,
        weeklyHours: input.weeklyHours,
        includeWeekends: input.includeWeekends,
        startDate: baseStart
    }) : {
        hours: 0,
        days: 0,
        finishDate: baseStart
    };
    const managerParts = [];
    managerParts.push(`"${input.activity}" at ${Math.round(draftSpeed)} w/hr with ${chaosPercent}% buffer and ${input.dailyHours} hrs/day is about ${draftScenario.hours} hours (${draftScenario.days} working days), finishing around ${draftScenario.finishDate}.`);
    if (compileSpeed > 0 && compileScenario.hours > 0) {
        managerParts.push(`With compile support at ${Math.round(compileSpeed)} w/hr, full draft+compile time is about ${compileScenario.hours} hours (${compileScenario.days} days), finishing around ${compileScenario.finishDate}.`);
    }
    const managerText = managerParts.join(" ");
    const selfText = [
        `Effective words: ${effectiveWords.toLocaleString()}.`,
        `Draft-only: ${draftScenario.hours}h over ${draftScenario.days} day(s), finish ${draftScenario.finishDate}.`,
        compileSpeed > 0 && compileScenario.hours > 0 ? `Draft+compile: ${compileScenario.hours}h over ${compileScenario.days} day(s), finish ${compileScenario.finishDate}.` : `No compile speed configured; draft-only scenario is primary.`
    ].join(" ");
    return {
        effectiveWords,
        draftScenario,
        compileScenario,
        managerText,
        selfText
    };
}
function runEstimator(input, teamRoster = []) {
    const mapped = {
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
        roleId: input.teamMemberId
    };
    const v2 = runEstimatorV2(mapped, teamRoster);
    const hours = v2.draftScenario.hours;
    const days = v2.draftScenario.days;
    const date = v2.draftScenario.finishDate;
    const teamMember = input.teamMemberId ? teamRoster.find((m)=>m.id === input.teamMemberId) : undefined;
    const mgrText = v2.managerText;
    return {
        hours,
        days,
        date,
        mgrText,
        teamMember,
        roleAdjusted: false
    };
}
function estimateProjectArt(wordCount, projectType = "Large Adventure", marketPreset = "osr") {
    const density = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ART_DENSITY_PRESETS"][marketPreset];
    const typeMultiplier = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECT_TYPE_ART_MULTIPLIERS"][projectType] ?? 1.0;
    // Fixed assets (per book, scaled by density preset)
    const regionalMaps = density.regionalMapsPerBook;
    const covers = density.coversPerBook;
    // Variable assets scaled by word count, project type, and market density
    const encounterMaps = Math.max(1, Math.round(wordCount * density.encounterMapsPerWord * typeMultiplier));
    const interiorIllustrations = Math.max(1, Math.round(wordCount * density.illustrationsPerWord * typeMultiplier));
    const spotArt = Math.max(1, Math.round(wordCount * density.spotArtPerWord * typeMultiplier));
    const npcPortraits = Math.max(0, Math.round(wordCount * density.portraitsPerWord * typeMultiplier));
    const totalPieces = regionalMaps + encounterMaps + interiorIllustrations + spotArt + npcPortraits + covers;
    // Calculate costs
    const regionalMapCost = regionalMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONAL_MAP_DEFAULT"];
    const encounterMapCost = encounterMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCOUNTER_MAP_DEFAULT"];
    const interiorCost = interiorIllustrations * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_FULL_DEFAULT"];
    const spotCost = spotArt * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_SPOT_DEFAULT"];
    const portraitCost = npcPortraits * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PORTRAIT_DEFAULT"];
    const coverCost = covers * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVER_ART_RATE_DEFAULT"];
    const totalCost = regionalMapCost + encounterMapCost + interiorCost + spotCost + portraitCost + coverCost;
    return {
        regionalMaps,
        encounterMaps,
        interiorIllustrations,
        spotArt,
        npcPortraits,
        covers,
        totalPieces,
        regionalMapCost,
        encounterMapCost,
        interiorCost,
        spotCost,
        portraitCost,
        coverCost,
        totalCost,
        projectType,
        wordCount,
        multiplier: typeMultiplier,
        marketPreset,
        marketLabel: density.label
    };
}
function runArtBudget(input) {
    const safe = (n)=>n && n > 0 ? n : 0;
    const numCovers = safe(input.numCovers);
    const numSpots = safe(input.numSpots);
    const numHalf = safe(input.numHalfPage);
    const numFull = safe(input.numFullPage);
    const numPortraits = safe(input.numPortraits);
    const numRegionalMaps = safe(input.numRegionalMaps);
    const numEncounterMaps = safe(input.numEncounterMaps);
    const coverCost = numCovers * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVER_ART_RATE_DEFAULT"];
    const spotCost = numSpots * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_SPOT_DEFAULT"];
    const halfPageCost = numHalf * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_HALF_DEFAULT"];
    const fullPageCost = numFull * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_FULL_DEFAULT"];
    const portraitCost = numPortraits * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PORTRAIT_DEFAULT"];
    const regionalMapCost = numRegionalMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONAL_MAP_DEFAULT"];
    const encounterMapCost = numEncounterMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCOUNTER_MAP_DEFAULT"];
    const totalArtCost = coverCost + spotCost + halfPageCost + fullPageCost + portraitCost + regionalMapCost + encounterMapCost;
    return {
        coverCost,
        spotCost,
        halfPageCost,
        fullPageCost,
        portraitCost,
        regionalMapCost,
        encounterMapCost,
        totalArtCost
    };
}
function calculateRoi(devCost, printRun, pricing, channel) {
    const quantity = Math.max(0, printRun.quantity || 0);
    const msrp = Math.max(0, pricing.msrp || 0);
    if (quantity === 0 || msrp === 0) {
        return {
            channelId: channel.id,
            netRevenuePerUnit: 0,
            totalRevenue: 0,
            totalCogs: 0,
            grossMargin: 0,
            netProfit: -devCost,
            breakEvenUnits: devCost > 0 ? Number.POSITIVE_INFINITY : 0,
            roiPercent: 0
        };
    }
    const discountMult = 1 - (channel.discountPercent || 0) / 100;
    const platformFeeMult = (channel.platformFeePercent || 0) / 100;
    const grossPerUnit = msrp * discountMult;
    const platformFeePerUnit = grossPerUnit * platformFeeMult;
    const tariffMult = 1 + (printRun.tariffPercent || 0) / 100;
    const printAndFreightPerUnit = (printRun.unitCost || 0) * tariffMult + (printRun.freightPerUnit || 0) + (printRun.warehousingPerUnit || 0);
    const fulfillmentPerUnit = channel.fulfillmentFeePerUnit || 0;
    const cogsPerUnit = printAndFreightPerUnit + fulfillmentPerUnit + platformFeePerUnit;
    const netRevenuePerUnit = grossPerUnit - cogsPerUnit;
    const totalRevenue = grossPerUnit * quantity;
    const totalCogs = cogsPerUnit * quantity;
    const grossMargin = totalRevenue - totalCogs;
    const netProfit = grossMargin - devCost;
    const breakEvenUnits = netRevenuePerUnit > 0 ? Math.ceil(devCost / netRevenuePerUnit) : Number.POSITIVE_INFINITY;
    const roiPercent = devCost > 0 ? netProfit / devCost * 100 : 0;
    return {
        channelId: channel.id,
        netRevenuePerUnit,
        totalRevenue,
        totalCogs,
        grossMargin,
        netProfit,
        breakEvenUnits,
        roiPercent
    };
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useKeyboardShortcuts(shortcuts) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            // Ignore if typing in an input or textarea
            if (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement) {
                return;
            }
            shortcuts.forEach((shortcut)=>{
                if (event.key.toLowerCase() === shortcut.key.toLowerCase() && !!event.ctrlKey === !!shortcut.ctrlKey && !!event.metaKey === !!shortcut.metaKey && !!event.shiftKey === !!shortcut.shiftKey && !!event.altKey === !!shortcut.altKey) {
                    event.preventDefault();
                    shortcut.action();
                }
            });
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        shortcuts
    ]);
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency,
    "formatNumber",
    ()=>formatNumber,
    "getProjectOverride",
    ()=>getProjectOverride,
    "getPublished",
    ()=>getPublished,
    "getQuarterLabel",
    ()=>getQuarterLabel,
    "loadOverrides",
    ()=>loadOverrides,
    "loadPublished",
    ()=>loadPublished,
    "saveOverrides",
    ()=>saveOverrides,
    "savePublished",
    ()=>savePublished,
    "setProjectOverride",
    ()=>setProjectOverride,
    "setPublished",
    ()=>setPublished
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatNumber(value) {
    if (!Number.isFinite(value)) return "-";
    return value.toLocaleString(undefined, {
        maximumFractionDigits: 0
    });
}
function formatCurrency(value) {
    if (!Number.isFinite(value)) return "-";
    return value.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
}
function loadOverrides() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function saveOverrides(overrides) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getProjectOverride(projectId) {
    const overrides = loadOverrides();
    return overrides[projectId] ?? null;
}
function setProjectOverride(projectId, patch) {
    const overrides = loadOverrides();
    overrides[projectId] = {
        ...overrides[projectId] ?? {},
        ...patch
    };
    saveOverrides(overrides);
    return overrides[projectId];
}
function loadPublished() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function savePublished(published) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getPublished(projectId) {
    const published = loadPublished();
    return published[projectId] ?? null;
}
function setPublished(projectId, patch) {
    const published = loadPublished();
    published[projectId] = {
        ...published[projectId] ?? {},
        ...patch
    };
    savePublished(published);
    return published[projectId];
}
function getQuarterLabel(dateStr) {
    try {
        const d = new Date(dateStr);
        const q = Math.floor(d.getMonth() / 3) + 1;
        const y = d.getFullYear();
        return `Q${q} ${y}`;
    } catch  {
        return dateStr;
    }
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/TeamLoadContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamLoadProvider",
    ()=>TeamLoadProvider,
    "useTeamLoad",
    ()=>useTeamLoad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TeamLoadContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TeamLoadProvider({ children }) {
    const [teamLoads, setTeamLoads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const updateTeamLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((teamMemberId, projectId, hours, roleLabel, primaryRole)=>{
        setTeamLoads((prev)=>{
            const newMap = new Map(prev);
            const loads = newMap.get(teamMemberId) || [];
            // Remove existing load for this project
            const filtered = loads.filter((l)=>l.projectId !== projectId);
            // Add new load if hours > 0
            if (hours > 0) {
                filtered.push({
                    teamMemberId,
                    projectId,
                    additionalHours: hours,
                    roleLabel,
                    primaryRole
                });
            }
            if (filtered.length > 0) {
                newMap.set(teamMemberId, filtered);
            } else {
                newMap.delete(teamMemberId);
            }
            // Persist to localStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return newMap;
        });
    }, []);
    const getTeamTotalHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((teamMemberId, roleFilter)=>{
        const loads = teamLoads.get(teamMemberId) || [];
        const filtered = roleFilter ? loads.filter((load)=>load.primaryRole === roleFilter) : loads;
        return filtered.reduce((sum, load)=>sum + load.additionalHours, 0);
    }, [
        teamLoads
    ]);
    const getTeamLoadPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((teamMemberId, teamMember, roleFilter)=>{
        const totalHours = getTeamTotalHours(teamMemberId, roleFilter);
        const memberWeeklyCapacity = teamMember.weeklyCapacity || 40;
        // Calculate as percentage of their personal capacity
        return Math.round(totalHours / (memberWeeklyCapacity * 4) * 100); // 4 weeks per month
    }, [
        getTeamTotalHours
    ]);
    const value = {
        teamLoads,
        updateTeamLoad,
        getTeamTotalHours,
        getTeamLoadPercent
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamLoadContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/TeamLoadContext.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function useTeamLoad() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TeamLoadContext);
    if (!context) {
        throw new Error("useTeamLoad must be used within TeamLoadProvider");
    }
    return context;
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/dossier-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_DOSSIER_TEMPLATE",
    ()=>DEFAULT_DOSSIER_TEMPLATE,
    "RPG_ADVENTURE_TEMPLATE",
    ()=>RPG_ADVENTURE_TEMPLATE
]);
const DEFAULT_DOSSIER_TEMPLATE = {
    id: 'default-project-dossier',
    name: 'Project Dossier Template',
    description: 'Comprehensive project analysis with financial modeling and risk assessment',
    sections: [
        {
            id: 'executive_summary',
            title: 'Executive Summary',
            type: 'executive_summary',
            order: 1,
            required: true,
            template: `# {projectName}

## Strategic Overview
{projectScope}

## Key Findings
{keyFindings}

## Risk Assessment
{riskLevel}

## Strategic Alignment
{strategicAlignment}`
        },
        {
            id: 'transcript',
            title: 'Meeting Transcript & Notes',
            type: 'transcript',
            order: 2,
            required: false
        },
        {
            id: 'financial_modeling',
            title: 'Financial & Production Modeling',
            type: 'financial_modeling',
            order: 3,
            required: true
        },
        {
            id: 'timeline',
            title: 'Timeline & Critical Path',
            type: 'timeline',
            order: 4,
            required: true
        },
        {
            id: 'risk_assessment',
            title: 'Risk Assessment',
            type: 'risk_assessment',
            order: 5,
            required: true
        },
        {
            id: 'strategic_outlook',
            title: 'Strategic Series Outlook',
            type: 'strategic_outlook',
            order: 6,
            required: false
        }
    ]
};
const RPG_ADVENTURE_TEMPLATE = {
    id: 'rpg-adventure-path',
    name: 'RPG Adventure Path Dossier',
    description: 'Specialized template for TTRPG adventure path projects',
    sections: [
        {
            id: 'executive_summary',
            title: 'Executive Summary',
            type: 'executive_summary',
            order: 1,
            required: true,
            template: `# {projectName} PROJECT DOSSIER
Integrated Transcript + Strategic Production Report

## Executive Summary
This document consolidates the full scope, timeline, financial modeling, and structural insight surrounding {projectName}.
It utilizes data from:
- Direct transcript synthesis from team meetings
- Industry-aligned production data for printing, art, labor valuation, distribution economics, and timelines

The combined analysis confirms:
{keyFindings}`
        },
        {
            id: 'transcript',
            title: 'PART I — Transcript Reconstruction',
            type: 'transcript',
            order: 2,
            required: false
        },
        {
            id: 'financial_modeling',
            title: 'PART II — Integrated Financial & Production Modeling',
            type: 'financial_modeling',
            order: 3,
            required: true
        },
        {
            id: 'timeline',
            title: 'Timeline Validation',
            type: 'timeline',
            order: 4,
            required: true
        },
        {
            id: 'strategic_outlook',
            title: 'PART III — Strategic Series Outlook',
            type: 'strategic_outlook',
            order: 5,
            required: true
        },
        {
            id: 'risk_assessment',
            title: 'PART IV — Consolidated Findings & Risk Assessment',
            type: 'risk_assessment',
            order: 6,
            required: true
        }
    ]
};
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/dossier-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateDossierMarkdown",
    ()=>generateDossierMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$dossier$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/dossier-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/calculations.ts [app-ssr] (ecmascript)");
;
;
;
function safeMetrics(metrics) {
    return metrics ?? __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_METRICS"];
}
function formatCurrency(value) {
    if (!Number.isFinite(value ?? NaN)) return "-";
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
}
function formatNumber(value) {
    if (!Number.isFinite(value ?? NaN)) return "-";
    return Math.round(value).toLocaleString("en-US");
}
function generateDossierMarkdown(ctx, tone = "internal") {
    const { project } = ctx;
    const metrics = safeMetrics(ctx.metrics);
    const meetingNotes = (ctx.meetingNotes ?? "").trim();
    const totalWords = project.targetWords ?? 0;
    const pages = totalWords > 0 ? totalWords / metrics.wordsPerPage : 0;
    const estimatedPages = Math.round(pages || 0);
    // A1 Manuscript Reality Baseline (audited from A1: Problem of Possibilities 4.1.25)
    // Total: 23 pieces - NOT the old 1 piece per 3 pages formula which overstated needs
    const artBaseline = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"];
    const artPieces = artBaseline.totalPieces;
    // Calculate costs using proper categorization
    const mapCost = artBaseline.regionalMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONAL_MAP_DEFAULT"] + artBaseline.encounterMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCOUNTER_MAP_DEFAULT"];
    const illustrationCost = artBaseline.interiorIllustrations * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_FULL_DEFAULT"];
    const spotCost = artBaseline.spotArt * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_SPOT_DEFAULT"];
    const portraitCost = artBaseline.npcPortraits * 250; // $0 for A1 since no portraits needed
    const coverCost = artBaseline.covers * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVER_ART_RATE_DEFAULT"];
    const artLow = Math.round((mapCost + illustrationCost + spotCost + portraitCost + coverCost) * 0.85);
    const artMid = mapCost + illustrationCost + spotCost + portraitCost + coverCost;
    const artHigh = Math.round((mapCost + illustrationCost + spotCost + portraitCost + coverCost) * 1.2);
    const actualHours = project.total ?? project.manualHours ?? 0;
    // Derive market vs internal cost from defense analysis when available
    let internalCost = project.estCost ?? 0;
    let marketCost = 0;
    let subsidy = 0;
    if (ctx.defense && totalWords > 0) {
        const marketPerWord = ctx.defense.myCostPerWord + ctx.defense.savingsPerWord;
        internalCost = ctx.defense.myCostPerWord * totalWords;
        marketCost = marketPerWord * totalWords;
        subsidy = Math.max(0, marketCost - internalCost);
    }
    const subsidyLabel = subsidy > 0 ? formatCurrency(subsidy) : "~$0";
    const industryHours = actualHours ? actualHours * 1.5 : 0;
    const teamWeeklyCapacity = ctx.teamWeeklyCapacity && ctx.teamWeeklyCapacity > 0 ? ctx.teamWeeklyCapacity : 0;
    let totalWeeks = 0;
    if (teamWeeklyCapacity > 0 && actualHours > 0) {
        totalWeeks = actualHours / teamWeeklyCapacity;
    }
    const roundedWeeks = totalWeeks ? Math.round(totalWeeks) : 0;
    const minWeeks = roundedWeeks ? Math.max(1, roundedWeeks - 2) : 0;
    const maxWeeks = roundedWeeks ? roundedWeeks + 2 : 0;
    const isSeries = (ctx.seriesBooks ?? 0) > 1;
    const seriesWords = ctx.seriesWords ?? 0;
    const template = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$dossier$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RPG_ADVENTURE_TEMPLATE"];
    const keyFindings = [
        isSeries ? `${project.name} sits inside a ${ctx.seriesBooks}-book arc (~${formatNumber(seriesWords)} words total).` : `${project.name} is modeled as a standalone product in this dossier.`,
        subsidy > 0 ? `Your labor on this project currently embeds approximately ${subsidyLabel} of unbilled studio-equivalent value.` : "Labor valuation for this project is modeled but subsidy calculations require refinement.",
        roundedWeeks ? `With current team capacity, the modeled execution window is approximately ${minWeeks || roundedWeeks}–${maxWeeks || roundedWeeks} weeks from greenlight to print-ready files.` : "Timeline modeling depends on confirmed weekly capacity inputs.",
        artPieces ? `Art is the primary variable cost driver: ${formatNumber(artPieces)} pieces (${artBaseline.regionalMaps} regional map, ${artBaseline.encounterMaps} encounter maps, ${artBaseline.interiorIllustrations} illustrations, ${artBaseline.spotArt} spot art), with a working budget band of ${formatCurrency(artLow)}–${formatCurrency(artHigh)}.` : "Art budget scaffolding is present, but page count/asset density need to be confirmed."
    ];
    const projectScope = `This dossier covers ${project.name} as modeled in the Production Engine dashboard, using current assumptions for scope, staffing, and efficiency.`;
    const strategicAlignmentInternal = `This project is treated as part of the Production Engine roadmap. The purpose of this dossier is to align scope, staffing, and financial reality so that future negotiations, print runs, and distribution choices are grounded in the same shared numbers.`;
    const strategicAlignmentExternal = `This project is positioned as part of your 2026 publishing roadmap. The purpose of this dossier is to clarify scope, budget bands, and production timing so that stakeholders can make informed decisions without reopening prior negotiations.`;
    const strategicAlignment = tone === "internal" ? strategicAlignmentInternal : strategicAlignmentExternal;
    const riskLevel = subsidy > 0 ? "high" : "medium";
    const executiveSummary = `# ${project.name} PROJECT DOSSIER
Integrated Transcript + Strategic Production Report

## Executive Summary
This document consolidates the full scope, timeline, financial modeling, and structural insight surrounding **${project.name}**.

It utilizes data from:
- Direct transcript or meeting-note synthesis (where available)
- The Production Engine's labor, scope, and efficiency modeling
- Industry-aligned production assumptions for art, layout, and printing

The combined analysis confirms:

${keyFindings.map((f)=>`- ${f}`).join("\n")}

### Strategic Overview
${projectScope}

### Structural Risk Profile
- Modeled risk level: **${riskLevel.toUpperCase()}**
- Primary volatility drivers: **art budget**, **print run strategy**, and **distribution channel mix**

### Strategic Alignment
${strategicAlignment}
`;
    const transcriptSection = `## PART I — Transcript Reconstruction
(Adapted to narrative form, preserving intent and tone)

${meetingNotes || "_TODO: Paste or synthesize meeting notes/transcript excerpts here. Focus on decisions, tradeoffs, and scope clarification._"}
`;
    const laborTable = `Category | Your Work | Industry Studio | Delta
---|---|---|---
Hours | ${actualHours ? formatNumber(actualHours) : "TODO"} | ${industryHours ? formatNumber(industryHours) : "TODO"} | ${actualHours && industryHours ? `${formatNumber(industryHours - actualHours)} h` : "TODO"}
Cost | ${internalCost ? formatCurrency(internalCost) : "TODO"} | ${marketCost ? formatCurrency(marketCost) : "TODO"} | ${marketCost && internalCost ? formatCurrency(marketCost - internalCost) : "TODO"}
`;
    const financialSection = `## PART II — Integrated Financial & Production Modeling

### 1. Labor Valuation & Efficiency Benchmark

${laborTable}

> Note: Industry studio cost is derived from the market-per-word assumptions in the Efficiency model. Adjust those sliders there; this dossier will inherit the updated numbers.

### 2. Art Budget Scaffolding (A1 Manuscript Reality)

- Estimated pages: **${estimatedPages || "TODO"}**
- Total pieces (audited): **${artPieces}** (corrected from previous 38-piece assumption)

**Art Asset Breakdown:**
| Category | Count | Classification | Est. Cost |
|----------|-------|----------------|----------|
| Regional Maps | ${artBaseline.regionalMaps} | REQUIRED | ${formatCurrency(artBaseline.regionalMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONAL_MAP_DEFAULT"])} |
| Encounter Maps | ${artBaseline.encounterMaps} | REQUIRED | ${formatCurrency(artBaseline.encounterMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCOUNTER_MAP_DEFAULT"])} |
| Interior Illustrations | ${artBaseline.interiorIllustrations} | REQUIRED/ENHANCING | ${formatCurrency(artBaseline.interiorIllustrations * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_FULL_DEFAULT"])} |
| Spot Art/Chapter Openers | ${artBaseline.spotArt} | COSMETIC | ${formatCurrency(artBaseline.spotArt * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_SPOT_DEFAULT"])} |
| NPC Portraits | ${artBaseline.npcPortraits} | N/A | ${formatCurrency(artBaseline.npcPortraits * 250)} |
| Cover Art | ${artBaseline.covers} | REQUIRED | ${formatCurrency(artBaseline.covers * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVER_ART_RATE_DEFAULT"])} |

**Art budget bands:**
- Low band (lean execution): **${artLow ? formatCurrency(artLow) : "TODO"}**
- Mid band (baseline): **${artMid ? formatCurrency(artMid) : "TODO"}**
- High band (flagship treatment): **${artHigh ? formatCurrency(artHigh) : "TODO"}**

> Note: Previous plan assumed 8 NPC portraits and 12 interior illustrations where A1 text requires 0 portraits and 7 illustrations. Budget reallocated to maps and protected structural assets.

### 2b. Market Comparison Analysis

How does your art budget compare to industry standards?

| Market Tier | Total Pieces | Est. Cost | Words/Piece | Notes |
|-------------|--------------|-----------|-------------|-------|
| **OSR/Indie (Current)** | ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(totalWords || 97000, "Large Adventure", "osr").totalPieces} | ${formatCurrency((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(totalWords || 97000, "Large Adventure", "osr").totalCost)} | ~4,200 | ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ART_DENSITY_PRESETS"].osr.description} |
| **5E Standard** | ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(totalWords || 97000, "Large Adventure", "5e").totalPieces} | ${formatCurrency((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(totalWords || 97000, "Large Adventure", "5e").totalCost)} | ~3,000 | ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ART_DENSITY_PRESETS"]["5e"].description} |
| **Pathfinder Premium** | ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(totalWords || 97000, "Large Adventure", "pathfinder").totalPieces} | ${formatCurrency((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(totalWords || 97000, "Large Adventure", "pathfinder").totalCost)} | ~1,600 | ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ART_DENSITY_PRESETS"].pathfinder.description} |

> Your current model aligns with **OSR/Indie** standards. To match 5E expectations, budget ~50% more. For Pathfinder-level presentation, budget ~150% more.

### 3. Timeline Validation

- Modeled execution hours: **${actualHours ? formatNumber(actualHours) : "TODO"} h**
- Current weekly capacity (team total): **${teamWeeklyCapacity ? formatNumber(teamWeeklyCapacity) : "TODO"} h/week**
- Implied production window: **${roundedWeeks ? `${minWeeks}–${maxWeeks} weeks` : "TODO"}**

> This is a blended estimate from the Production Engine. For printing lead times and freight, use the dedicated Financials tab and append those specifics here.
`;
    const seriesSection = `## PART III — Strategic Series Outlook

$${isSeries ? `This project is modeled as part of a multi-book arc (~${formatNumber(seriesWords)} words total across ~${ctx.seriesBooks} volumes). Use this section to articulate how this individual volume unlocks or derisks the rest of the line.` : "This project can be positioned either as a flagship standalone or as the first node in a future line. Use this section to describe follow-on products it enables (adventure paths, sourcebooks, or system expansions)."}

- Capital requirements across the line: **TODO**
- Recommended funding path (Kickstarter, hybrid, direct): **TODO**
- Distribution reality (break-even units, discount structures): **TODO**
`;
    const findingsInternal = `## PART IV — Consolidated Findings & Planning Notes

This dossier provides a comprehensive view of project scope, labor investment, and financial considerations to support informed decision-making.

**Key areas covered:**
- Labor estimates and resource allocation
- Scope clarification and project classification
- Financial planning and distribution considerations

**Document Purpose:**

This analysis consolidates planning data to help align expectations across stakeholders. It's designed to:
- Provide clear visibility into project requirements
- Support realistic timeline and budget planning
- Identify areas that may need further discussion

**Recommended next steps:**
- Review key figures with relevant stakeholders
- Identify any items requiring clarification before sharing externally
- Prepare a streamlined summary for publisher or client communications if needed
`;
    const findingsExternal = `## PART IV — Consolidated Findings (External / Publisher-Safe)

This section is safe to use as the backbone of a publisher-facing or stakeholder-facing summary. It should:

- Emphasize **future alignment** and shared clarity
- Focus on **budget bands**, **timelines**, and **risk mitigation**, not past mis-scoping
- Present labor valuation as a tool for **de-risking delivery**, not as a compensation argument

Suggested framing:
- "This dossier exists so that we can make clean forward decisions without reopening every prior assumption."
- "Numbers here are designed as planning bands, not ultimatums."
`;
    const findingsSection = tone === "internal" ? findingsInternal : findingsExternal;
    return [
        executiveSummary.trim(),
        "",
        transcriptSection.trim(),
        "",
        financialSection.trim(),
        "",
        seriesSection.trim(),
        "",
        findingsSection.trim()
    ].join("\n\n");
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/report-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateProductionPlanHTML",
    ()=>generateProductionPlanHTML,
    "generateProductionPlanMarkdown",
    ()=>generateProductionPlanMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/calculations.ts [app-ssr] (ecmascript)");
;
;
const ROMAN_NUMERALS = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X"
];
function getRomanNumeral(index) {
    return ROMAN_NUMERALS[index - 1] || `${index}`;
}
function formatCurrency(value) {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
}
function formatNumber(value) {
    return Math.round(value).toLocaleString("en-US");
}
function calculateCapacityAnalysis(config, totalHours) {
    const capacity = config.teamCapacity;
    if (!capacity) return null;
    const { danWeeklyHours, martinWeeklyHours, workingWeeksPerYear } = capacity;
    // Calculate actual capacity
    const combinedWeeklyHours = danWeeklyHours + martinWeeklyHours;
    const annualCapacity = combinedWeeklyHours * workingWeeksPerYear;
    // Calculate gaps
    const hourGap = totalHours - annualCapacity;
    const weeklyGap = hourGap / workingWeeksPerYear;
    const isOverallocated = hourGap > 0;
    // Calculate equivalent team size
    const equivalentTeamSize = totalHours / (workingWeeksPerYear * 40); // 40 = standard full-time week
    return {
        danWeeklyHours,
        martinWeeklyHours,
        combinedWeeklyHours,
        annualCapacity,
        totalHours,
        hourGap,
        weeklyGap,
        isOverallocated,
        equivalentTeamSize,
        workingWeeksPerYear
    };
}
function generateCapacityAnalysisSection(analysis) {
    if (!analysis) return "";
    const { danWeeklyHours, martinWeeklyHours, combinedWeeklyHours, annualCapacity, totalHours, hourGap, weeklyGap, isOverallocated, equivalentTeamSize, workingWeeksPerYear } = analysis;
    const gapDescription = isOverallocated ? `**Gap:** Short ${formatNumber(Math.abs(hourGap))} hours (${weeklyGap.toFixed(1)} hrs/week) — roughly a third teammate at halftime.` : `**Surplus:** ${formatNumber(Math.abs(hourGap))} hours of slack capacity.`;
    const cleanFixes = [
        "Push one Q4 deliverable (e.g., Grimdark Skeleton) into Q1 2027.",
        "De-scope Ravenous Coast to a Phase 1 book (regional core + bastions).",
        "Serialize A2 development — outline in Q3, full production after A1 ship."
    ];
    const cleanFixList = cleanFixes.map((item)=>`- ${item}`).join("\n");
    return `
**Actual capacity (realistic):**
- Dan: ${danWeeklyHours} hrs/week
- Martin: ${martinWeeklyHours} hrs/week
- Combined: ${combinedWeeklyHours} hrs/week × ${workingWeeksPerYear} working weeks ≈ ${formatNumber(annualCapacity)} hrs/year

**Plan demand:** ${formatNumber(totalHours)} hrs/year (${Math.round(totalHours / workingWeeksPerYear)} hrs/week equivalent)

${gapDescription}

**Equivalent team size implied by plan:** ${equivalentTeamSize.toFixed(1)} FTE (plan assumes ~${Math.round(totalHours / workingWeeksPerYear)} hrs/week).

**Where load concentrates:**
1. **Q3 overlap:** A1 polish + Players Guide + Maps + A2 ramp assume parallel throughput you don't have.
2. **Q4 stack:** Ravenous Coast + Grimdark Skeleton double-book the same window; ~${formatNumber(Math.max(0, hourGap))} missing hours live here.

**Cleanest fixes (no heroics):**
${cleanFixList}
`;
}
function generateRoleOwnershipAnalysis(roles, headingNumeral = "V") {
    if (!roles) return "";
    const { narrativeLead, systemsLead, productionArbiter, finalEditor, assetCoordinator, projectManager } = roles;
    return `## ${headingNumeral}. Role Ownership & Decision Authority

### Explicit Role Coverage

**1. Creative Lead / Setting Architect — ${narrativeLead || "Martin"}**
- Primary narrative authoring
- Tone, theme, and scene conception
- Module-level storytelling momentum

**2. Systems & Structure Lead — ${systemsLead || "Dan"}**
- Rules translation & system fluency
- Structural consistency across books
- Layout-aware writing and editorial hygiene
- Long-horizon continuity thinking

**3. Production Arbiter — ${productionArbiter || "Dan"}**
- Final calls on scope cuts
- Priority conflict resolution
- "Good enough" threshold decisions
- Completion sign-off authority

**4. Final Editor & Integrator — ${finalEditor || "Dan"}**
- Editorial enforcement phase
- Cross-project consistency
- Layout integration oversight

**5. Asset Coordinator — ${assetCoordinator || "TBD"}**
- Art brief preparation
- Map dependency tracking
- Layout question triage
- External creator liaison

**6. Project Manager / Throughput Guardian — ${projectManager || "Dan"}**
- Calendar vs reality monitoring
- Early slippage detection
- Capacity bottleneck identification

### Identified Gaps & Mitigations

**GAP 1: Explicit Project Ownership**
- **Risk:** Polite deadlocks, quiet rework, scope creep by omission
- **Mitigation:** Single Final Arbiter per deliverable (not globally)

**GAP 2: Production Management**
- **Risk:** Discovering overload at worst possible moment
- **Mitigation:** Named throughput guardian role

**GAP 3: Editorial Phase Distinction**
- **Risk:** Late-stage quality panic, tone drift, layout friction
- **Mitigation:** Dedicated editorial pass boundary

**GAP 4: Asset Coordination**
- **Risk:** Last-minute scrambling, art mismatches, layout bottlenecks
- **Mitigation:** Lightweight coordinator role (5 hrs/week)

### Decision Authority Matrix

| Decision Area | Primary Authority | Backup Authority | Escalation |
|---------------|-------------------|------------------|------------|
| Narrative Content | ${narrativeLead || "Martin"} | ${systemsLead || "Dan"} | Joint discussion |
| Rules & Systems | ${systemsLead || "Dan"} | ${narrativeLead || "Martin"} | ${productionArbiter || "Dan"} final call |
| Scope & Priority | ${productionArbiter || "Dan"} | ${narrativeLead || "Martin"} | Joint discussion |
| Editorial Quality | ${finalEditor || "Dan"} | ${narrativeLead || "Martin"} | ${productionArbiter || "Dan"} final call |
| Asset Integration | ${assetCoordinator || "TBD"} | ${finalEditor || "Dan"} | ${projectManager || "Dan"} escalation |

---
`;
}
function getQuarterFromProject(project) {
    const display = project.displayDate || project.launchWindow || "";
    if (display.includes("March") || display.includes("Q1")) return "Q1";
    if (display.includes("May") || display.includes("June") || display.includes("Q2")) return "Q2";
    if (display.includes("September") || display.includes("Q3")) return "Q3";
    if (display.includes("December") || display.includes("Q4")) return "Q4";
    return "2026";
}
function groupProjectsByQuarter(projects) {
    const groups = {
        "Q1": [],
        "Q2": [],
        "Q3": [],
        "Q4": [],
        "2026": []
    };
    projects.forEach((project)=>{
        const quarter = getQuarterFromProject(project);
        if (groups[quarter]) {
            groups[quarter].push(project);
        } else {
            groups["2026"].push(project);
        }
    });
    return Object.entries(groups).filter(([_, projects])=>projects.length > 0).map(([quarter, projects])=>({
            quarter,
            projects,
            totalHours: projects.reduce((sum, p)=>sum + (p.total || p.manualHours || 0), 0),
            totalCost: projects.reduce((sum, p)=>sum + (p.estCost || 0), 0)
        }));
}
function getQuarterLabel(quarter) {
    const labels = {
        "Q1": "Q1 (Jan–Mar) – Preparation & Foundation Build-Out",
        "Q2": "Q2 (Apr–Jun) – Flagship Execution and Manufacturing",
        "Q3": "Q3 (Jul–Sep) – Series Continuation",
        "Q4": "Q4 (Oct–Dec) – Year-End Production Cycle",
        "2026": "2026 – Confirmed Release"
    };
    return labels[quarter] || quarter;
}
function generateProductionPlanMarkdown(config) {
    const { title, subtitle, projects, metrics, teamRoster, artBudget, investmentRange, generatedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) } = config;
    const quarterGroups = groupProjectsByQuarter(projects);
    const totalBudget = projects.reduce((sum, p)=>sum + (p.estCost || 0), 0);
    const totalHours = projects.reduce((sum, p)=>sum + (p.total || p.manualHours || 0), 0);
    // Calculate capacity analysis
    const capacityAnalysis = calculateCapacityAnalysis(config, totalHours);
    // Calculate art budget if not provided - uses A1 manuscript reality baseline
    const calculatedArtBudget = artBudget || {
        regionalMaps: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].regionalMaps,
        encounterMaps: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].encounterMaps,
        interiorIllustrations: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].interiorIllustrations,
        spotArt: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].spotArt,
        npcPortraits: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].npcPortraits,
        covers: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].covers,
        regionalMapCost: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].regionalMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONAL_MAP_DEFAULT"],
        encounterMapCost: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].encounterMaps * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCOUNTER_MAP_DEFAULT"],
        interiorCost: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].interiorIllustrations * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_FULL_DEFAULT"],
        spotCost: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].spotArt * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERIOR_SPOT_DEFAULT"],
        portraitCost: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].npcPortraits * 250,
        coverCost: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].covers * __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVER_ART_RATE_DEFAULT"],
        totalPieces: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].totalPieces
    };
    const totalArtBudget = calculatedArtBudget.regionalMapCost + calculatedArtBudget.encounterMapCost + calculatedArtBudget.interiorCost + calculatedArtBudget.spotCost + calculatedArtBudget.portraitCost + calculatedArtBudget.coverCost;
    // Calculate investment range if not provided
    const calculatedInvestmentRange = investmentRange || {
        low: Math.round(totalArtBudget * 0.85),
        high: Math.round(totalArtBudget * 1.2)
    };
    // Find flagship project (A1)
    const flagshipProject = projects.find((p)=>p.name.toLowerCase().includes("a1") && p.name.toLowerCase().includes("problem"));
    const flagshipHours = flagshipProject?.total || flagshipProject?.manualHours || 400;
    let sectionIndex = 1;
    const nextHeading = (title)=>`## ${getRomanNumeral(sectionIndex++)}. ${title}`;
    const sections = [];
    // Header
    sections.push(`# ${title}

${subtitle || ""}

**Generated:** ${generatedDate}

---
`);
    // Strategic Priorities
    sections.push(`${nextHeading("Strategic Priorities")}

### Primary Deliverable
The A-Series Adventure Path (A0–A4) represents the core publishing initiative for the year.

### Release Window
The target for A1: The Problem of Possibilities is late Q2 (May–June print and distribution window).

### Operational Continuity
Layout and asset integration will remain centralized to ensure consistency in styling, pacing, formatting, and data reliability.

### Manufacturing Model
Primary print strategy will use domestic offset printing (runs in 1k–2k units) to secure competitive per-unit cost and maintain margin strength.

---
`);
    // Release Calendar
    sections.push(`${nextHeading("Release Calendar")}

| Title | Format | Target Date | Notes |
|-------|--------|-------------|-------|`);
    projects.filter((p)=>p.stakeholder === "Martin" || p.name.toLowerCase().includes("a0") || p.name.toLowerCase().includes("a1") || p.name.toLowerCase().includes("a2") || p.name.toLowerCase().includes("a3") || p.name.toLowerCase().includes("a4") || p.name.toLowerCase().includes("player") || p.name.toLowerCase().includes("ravenous")).sort((a, b)=>{
        const dateA = a.targetDate || a.displayDate || a.launchWindow || "";
        const dateB = b.targetDate || b.displayDate || b.launchWindow || "";
        return dateA.localeCompare(dateB);
    }).forEach((project)=>{
        const format = project.type || "Module";
        const targetDate = project.displayDate || project.launchWindow || "2026";
        const notes = project.name.toLowerCase().includes("a1") ? "Flagship release" : project.name.toLowerCase().includes("player") ? "Promotional lead-in" : project.name.toLowerCase().includes("a0") ? "Intro module" : project.name.toLowerCase().includes("ravenous") ? "Confirmed release" : "Serialized follow-through";
        sections.push(`| ${project.name} | ${format} | ${targetDate} | ${notes} |`);
    });
    sections.push(`
---
`);
    // Quarterly Execution Path
    sections.push(`${nextHeading("Quarterly Execution Path")}
`);
    quarterGroups.forEach((group)=>{
        sections.push(`### ${getQuarterLabel(group.quarter)}
`);
        if (group.quarter === "Q1") {
            sections.push(`- Commission A1 art and contracts
- Deliver Player's Guide and A0
- Finalize template systems, layout framework, and encounter formatting
- **Target completion point:** March 31
`);
        } else if (group.quarter === "Q2") {
            sections.push(`**Sequence:**
- Art and maps delivered mid-April
- Full layout execution
- Print-ready file handoff

**Milestone Outcome:** A1 print and release in the May–June window
`);
        } else if (group.quarter === "Q3") {
            sections.push(`- Full development run on A2 using established conventions
- **Release target:** September 30
`);
        } else if (group.quarter === "Q4") {
            sections.push(`- Production cycle begins mid-August to protect year-end deadlines
- **Release target:** December 15
`);
        }
        if (group.projects.length > 0) {
            sections.push(`**Projects in this quarter:**`);
            group.projects.forEach((p)=>{
                sections.push(`- ${p.name} (${p.total || p.manualHours || 0} hours, ${formatCurrency(p.estCost || 0)})`);
            });
            sections.push(``);
        }
    });
    sections.push(`---
`);
    // Budget & Resourcing
    sections.push(`${nextHeading("Budget & Resourcing (A1-Centered)")}

**Recommended investment range:** ${formatCurrency(calculatedInvestmentRange.low)}–${formatCurrency(calculatedInvestmentRange.high)}

### Art Asset Breakdown (A1 Manuscript Reality - ${calculatedArtBudget.totalPieces} pieces total):

| Category | Count | Classification | Allocation |
|----------|-------|----------------|------------|
| Regional Maps | ${calculatedArtBudget.regionalMaps} | REQUIRED | ~${formatCurrency(calculatedArtBudget.regionalMapCost)} |
| Encounter Maps | ${calculatedArtBudget.encounterMaps} | REQUIRED | ~${formatCurrency(calculatedArtBudget.encounterMapCost)} |
| Interior Illustrations | ${calculatedArtBudget.interiorIllustrations} | REQUIRED/ENHANCING | ~${formatCurrency(calculatedArtBudget.interiorCost)} |
| Spot Art/Chapter Openers | ${calculatedArtBudget.spotArt} | COSMETIC | ~${formatCurrency(calculatedArtBudget.spotCost)} |
| NPC Portraits | ${calculatedArtBudget.npcPortraits} | N/A | ~${formatCurrency(calculatedArtBudget.portraitCost)} |
| Cover Art | ${calculatedArtBudget.covers} | REQUIRED | ~${formatCurrency(calculatedArtBudget.coverCost)} |
| **A1 Art Subtotal** | **${calculatedArtBudget.totalPieces}** | **TOTAL** | **~${formatCurrency(calculatedArtBudget.regionalMapCost + calculatedArtBudget.encounterMapCost + calculatedArtBudget.interiorCost + calculatedArtBudget.spotCost + calculatedArtBudget.portraitCost + calculatedArtBudget.coverCost)}** |

This tier prioritizes consistent execution at predictable schedules and quality.

### Efficiency Note
Approximately ${formatNumber(flagshipHours)} hours invested into A1 development directly reduce production time on A2-A4 due to:

- Reusable style systems
- Encounter framework established
- Proven pacing structure
- Finalized layout mechanics

---
`);
    // Market Comparison Section (if enabled)
    if (config.showMarketComparison !== false) {
        const a1Words = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A1_ART_BASELINE"].wordCount;
        const osrEstimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(a1Words, "Large Adventure", "osr");
        const fiveEEstimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(a1Words, "Large Adventure", "5e");
        const pfEstimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateProjectArt"])(a1Words, "Large Adventure", "pathfinder");
        const currentPreset = config.marketPreset || "osr";
        const currentLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ART_DENSITY_PRESETS"][currentPreset].label;
        sections.push(`${nextHeading("Market Comparison Analysis")}

This section compares your current art budget against industry standards for different market segments.

### A1 Art Density Comparison (${formatNumber(a1Words)} words)

| Category | OSR/Indie (Current) | 5E Standard | Pathfinder Premium |
|----------|---------------------|-------------|--------------------|
| Regional Maps | ${osrEstimate.regionalMaps} | ${fiveEEstimate.regionalMaps} | ${pfEstimate.regionalMaps} |
| Encounter Maps | ${osrEstimate.encounterMaps} | ${fiveEEstimate.encounterMaps} | ${pfEstimate.encounterMaps} |
| Interior Illustrations | ${osrEstimate.interiorIllustrations} | ${fiveEEstimate.interiorIllustrations} | ${pfEstimate.interiorIllustrations} |
| Spot Art/Openers | ${osrEstimate.spotArt} | ${fiveEEstimate.spotArt} | ${pfEstimate.spotArt} |
| NPC Portraits | ${osrEstimate.npcPortraits} | ${fiveEEstimate.npcPortraits} | ${pfEstimate.npcPortraits} |
| **Total Pieces** | **${osrEstimate.totalPieces}** | **${fiveEEstimate.totalPieces}** | **${pfEstimate.totalPieces}** |
| **Est. Art Cost** | **${formatCurrency(osrEstimate.totalCost)}** | **${formatCurrency(fiveEEstimate.totalCost)}** | **${formatCurrency(pfEstimate.totalCost)}** |

### Market Positioning

**Current Selection:** ${currentLabel}

| Market Tier | Words/Piece | Budget Multiplier | Best For |
|-------------|-------------|-------------------|----------|
| OSR / Indie | ~4,200 | 1.0× | Classic TSR aesthetic, budget-conscious, text-dense |
| 5E Standard | ~3,000 | 1.5× | WotC market expectations, NPC portraits, chapter splashes |
| Pathfinder Premium | ~1,600 | 2.5× | Lavish illustration, competitive differentiator |

> **Note:** Your current A1 model (${calculatedArtBudget.totalPieces} pieces) aligns with the **${currentLabel}** tier. To match 5E expectations, budget ~50% more. For Pathfinder-level presentation, budget ~150% more.

---
`);
    }
    if (capacityAnalysis) {
        sections.push(`${nextHeading("Capacity Reality Check")}

${generateCapacityAnalysisSection(capacityAnalysis)}
---
`);
    }
    if (config.roleOwnership) {
        sections.push(generateRoleOwnershipAnalysis(config.roleOwnership, getRomanNumeral(sectionIndex++)));
    }
    // Immediate Action Items
    sections.push(`${nextHeading("Immediate Action Items")}

To maintain Q2 release readiness:

### 1. Approve art staffing and send contracts
Secures availability and begins scheduling window.

### 2. Initiate commissioning and sketch review sequence
Expected execution window: 6–8 weeks.

### 3. Confirm layout readiness and asset transfer timing
Final files should be routed mid-April for uninterrupted layout flow.

---
`);
    // Footer
    sections.push(`${nextHeading("Summary")}

This plan forms the baseline working schedule, financial model, and operational sequencing for full execution of the A-Series cycle in 2026. Additional downstream planning—as marketing timing, distribution routing, and sales cadence—is available upon request.

---

**Total Projects:** ${projects.length}
**Total Estimated Hours:** ${formatNumber(totalHours)}
**Total Estimated Budget:** ${formatCurrency(totalBudget)}
`);
    return sections.join("\n");
}
function generateProductionPlanHTML(config) {
    const markdown = generateProductionPlanMarkdown(config);
    // Convert markdown to basic HTML for PDF generation
    let html = markdown.replace(/^# (.+)$/gm, '<h1>$1</h1>').replace(/^## (.+)$/gm, '<h2>$1</h2>').replace(/^### (.+)$/gm, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/^- (.+)$/gm, '<li>$1</li>').replace(/\n\n/g, '</p><p>').replace(/\|(.+)\|/g, (match)=>{
        const cells = match.split('|').filter((c)=>c.trim());
        if (cells.some((c)=>c.includes('---'))) return '';
        const isHeader = cells.some((c)=>c.includes('Title') || c.includes('Category'));
        const tag = isHeader ? 'th' : 'td';
        return `<tr>${cells.map((c)=>`<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    });
    // Wrap lists
    html = html.replace(/(<li>.+<\/li>\n?)+/g, '<ul>$&</ul>');
    // Wrap tables
    html = html.replace(/(<tr>.+<\/tr>\n?)+/g, '<table border="1" cellpadding="8" cellspacing="0">$&</table>');
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${config.title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #1e293b;
    }
    h1 { color: #0f172a; border-bottom: 3px solid #4f46e5; padding-bottom: 10px; }
    h2 { color: #1e40af; margin-top: 2em; }
    h3 { color: #3730a3; }
    table { width: 100%; border-collapse: collapse; margin: 1em 0; }
    th { background: #f1f5f9; text-align: left; }
    td, th { padding: 8px 12px; border: 1px solid #e2e8f0; }
    ul { margin: 1em 0; }
    li { margin: 0.5em 0; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
    strong { color: #0f172a; }
    .footer { margin-top: 3em; padding-top: 1em; border-top: 2px solid #e2e8f0; font-size: 0.9em; color: #64748b; }
  </style>
</head>
<body>
${html}
</body>
</html>`;
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/colors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Semantic Color System for Freelancer Plan Estimator
 * Provides consistent, meaningful color usage across the application
 */ // Status Colors - Based on capacity and risk levels
__turbopack_context__.s([
    "actionColors",
    ()=>actionColors,
    "chartColors",
    ()=>chartColors,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getBudgetColor",
    ()=>getBudgetColor,
    "getCapacityColor",
    ()=>getCapacityColor,
    "getRiskColor",
    ()=>getRiskColor,
    "getTimelineColor",
    ()=>getTimelineColor,
    "infoColors",
    ()=>infoColors,
    "statusColors",
    ()=>statusColors,
    "workflowColors",
    ()=>workflowColors
]);
const statusColors = {
    // Capacity-based colors
    healthy: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        textLight: 'text-emerald-700',
        textDark: 'text-emerald-800',
        fill: 'bg-emerald-500',
        fillLight: 'bg-emerald-100'
    },
    caution: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        textLight: 'text-amber-700',
        textDark: 'text-amber-800',
        fill: 'bg-amber-500',
        fillLight: 'bg-amber-100'
    },
    warning: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        textLight: 'text-orange-700',
        textDark: 'text-orange-800',
        fill: 'bg-orange-500',
        fillLight: 'bg-orange-100'
    },
    critical: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-600',
        textLight: 'text-red-700',
        textDark: 'text-red-800',
        fill: 'bg-red-500',
        fillLight: 'bg-red-100'
    },
    neutral: {
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        text: 'text-slate-600',
        textLight: 'text-slate-700',
        textDark: 'text-slate-800',
        fill: 'bg-slate-500',
        fillLight: 'bg-slate-100'
    }
};
const actionColors = {
    primary: {
        bg: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        text: 'text-white',
        border: 'border-blue-600',
        ring: 'ring-blue-200'
    },
    secondary: {
        bg: 'bg-slate-600',
        bgHover: 'hover:bg-slate-700',
        text: 'text-white',
        border: 'border-slate-600',
        ring: 'ring-slate-200'
    },
    success: {
        bg: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        text: 'text-white',
        border: 'border-emerald-600',
        ring: 'ring-emerald-200'
    },
    destructive: {
        bg: 'bg-red-600',
        bgHover: 'hover:bg-red-700',
        text: 'text-white',
        border: 'border-red-600',
        ring: 'ring-red-200'
    }
};
const infoColors = {
    revenue: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        fill: 'bg-emerald-500'
    },
    expense: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-700',
        fill: 'bg-red-500'
    },
    planning: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        fill: 'bg-blue-500'
    },
    analysis: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        fill: 'bg-purple-500'
    }
};
const getCapacityColor = (percentage)=>{
    if (percentage < 80) return statusColors.healthy;
    if (percentage < 100) return statusColors.caution;
    if (percentage < 150) return statusColors.warning;
    return statusColors.critical;
};
const getRiskColor = (risk)=>{
    switch(risk){
        case 'low':
            return statusColors.healthy;
        case 'medium':
            return statusColors.caution;
        case 'high':
            return statusColors.warning;
        case 'critical':
            return statusColors.critical;
        default:
            return statusColors.neutral;
    }
};
const getTimelineColor = (isValid)=>{
    return isValid ? statusColors.healthy : statusColors.critical;
};
const getBudgetColor = (isUnderBudget)=>{
    return isUnderBudget ? statusColors.healthy : statusColors.critical;
};
const workflowColors = {
    complete: {
        bg: 'bg-emerald-500',
        text: 'text-white',
        border: 'border-emerald-500',
        fill: 'bg-emerald-500'
    },
    current: {
        bg: 'bg-indigo-600',
        text: 'text-white',
        border: 'border-indigo-600',
        ring: 'ring-indigo-200',
        fill: 'bg-indigo-600'
    },
    next: {
        bg: 'bg-slate-300',
        text: 'text-slate-600',
        border: 'border-slate-300',
        fill: 'bg-slate-300'
    }
};
const chartColors = {
    primary: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6',
        '#EC4899'
    ],
    success: [
        '#10B981',
        '#34D399',
        '#6EE7B7'
    ],
    warning: [
        '#F59E0B',
        '#FBBF24',
        '#FCD34D'
    ],
    error: [
        '#EF4444',
        '#F87171',
        '#FCA5A5'
    ]
};
const __TURBOPACK__default__export__ = {
    statusColors,
    actionColors,
    infoColors,
    getCapacityColor,
    getRiskColor,
    getTimelineColor,
    getBudgetColor,
    workflowColors,
    chartColors
};
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/employee-estimate-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateEmployeeEstimate",
    ()=>calculateEmployeeEstimate,
    "generateEmployeeEstimateHTML",
    ()=>generateEmployeeEstimateHTML,
    "generateEmployeeEstimateMarkdown",
    ()=>generateEmployeeEstimateMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/calculations.ts [app-ssr] (ecmascript)");
;
function formatCurrency(value) {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });
}
function formatNumber(value) {
    return Math.round(value).toLocaleString("en-US");
}
function formatDate(isoDate) {
    if (!isoDate) return "TBD";
    const [year, month, day] = isoDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
function formatShortDate(isoDate) {
    if (!isoDate) return "TBD";
    const [year, month, day] = isoDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
function calculateEmployeeEstimate(config) {
    const effectiveWords = Math.max(0, config.totalWords - (config.existingWords || 0));
    const draftScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computePaceScenario"])({
        effectiveWords,
        speed: config.draftSpeed,
        chaosPercent: config.chaosBuffer,
        pacingMode: "daily",
        dailyHours: config.dailyHours,
        weeklyHours: config.weeklyHours,
        includeWeekends: config.includeWeekends,
        startDate: config.startDate
    });
    let compileScenario;
    if (config.compileSpeed && config.compileSpeed > 0) {
        compileScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computePaceScenario"])({
            effectiveWords,
            speed: config.compileSpeed,
            chaosPercent: config.chaosBuffer,
            pacingMode: "daily",
            dailyHours: config.dailyHours,
            weeklyHours: config.weeklyHours,
            includeWeekends: config.includeWeekends,
            startDate: config.startDate
        });
    }
    const totalHours = draftScenario.hours + (compileScenario?.hours || 0);
    const totalDays = draftScenario.days + (compileScenario?.days || 0);
    const estimatedFinishDate = compileScenario?.finishDate || draftScenario.finishDate;
    const estimatedCost = totalHours * config.metrics.blendedHourlyRate;
    return {
        effectiveWords,
        draftScenario,
        compileScenario,
        totalHours,
        totalDays,
        estimatedFinishDate,
        estimatedCost
    };
}
function generateEmployeeEstimateMarkdown(config) {
    const result = calculateEmployeeEstimate(config);
    const { employeeName, employeeRole, recipientName, recipientTitle, project, totalWords, existingWords, draftSpeed, compileSpeed, chaosBuffer, dailyHours, includeWeekends, startDate, assumptions, risks, dependencies, generatedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) } = config;
    const sections = [];
    // Header
    sections.push(`# Project Time Estimate

**Project:** ${project.name}
**Prepared by:** ${employeeName} (${employeeRole})
**Prepared for:** ${recipientName}${recipientTitle ? ` (${recipientTitle})` : ""}
**Date:** ${generatedDate}

---
`);
    // Executive Summary
    sections.push(`## Executive Summary

This document provides a time and effort estimate for completing **${project.name}**.

| Metric | Value |
|--------|-------|
| Total Words | ${formatNumber(totalWords)} |
| Words Remaining | ${formatNumber(result.effectiveWords)} |
| Estimated Hours | **${formatNumber(result.totalHours)} hours** |
| Estimated Working Days | **${result.totalDays} days** |
| Target Completion | **${formatDate(result.estimatedFinishDate)}** |
| Estimated Cost | ${formatCurrency(result.estimatedCost)} |

---
`);
    // Scope Details
    sections.push(`## Scope Details

### Word Count Analysis

| Category | Count |
|----------|-------|
| Total Target Words | ${formatNumber(totalWords)} |
| Existing/Completed Words | ${formatNumber(existingWords || 0)} |
| **Remaining Words** | **${formatNumber(result.effectiveWords)}** |

### Project Classification

- **Project Type:** ${project.type}
- **Current Status:** ${project.internalStatus}
- **Target Launch:** ${project.displayDate || project.launchWindow || "TBD"}
- **Stakeholder:** ${project.stakeholder}

---
`);
    // Timeline Breakdown
    sections.push(`## Timeline Breakdown

### Work Schedule Assumptions

| Parameter | Value |
|-----------|-------|
| Start Date | ${formatDate(startDate)} |
| Daily Hours | ${dailyHours} hours/day |
| Weekend Work | ${includeWeekends ? "Included" : "Excluded"} |
| Draft Speed | ${formatNumber(draftSpeed)} words/hour |
${compileSpeed ? `| Compile Speed | ${formatNumber(compileSpeed)} words/hour |` : ""}
| Chaos Buffer | ${chaosBuffer}% |

### Phase Estimates

#### Drafting Phase
- **Hours Required:** ${formatNumber(result.draftScenario.hours)} hours
- **Working Days:** ${result.draftScenario.days} days
- **Target Completion:** ${formatShortDate(result.draftScenario.finishDate)}
`);
    if (result.compileScenario && result.compileScenario.hours > 0) {
        sections.push(`
#### Compile/Review Phase
- **Hours Required:** ${formatNumber(result.compileScenario.hours)} hours
- **Working Days:** ${result.compileScenario.days} days
- **Target Completion:** ${formatShortDate(result.compileScenario.finishDate)}
`);
    }
    sections.push(`
### Total Timeline

| Phase | Hours | Days | Finish Date |
|-------|-------|------|-------------|
| Drafting | ${result.draftScenario.hours} | ${result.draftScenario.days} | ${formatShortDate(result.draftScenario.finishDate)} |
${result.compileScenario ? `| Compile/Review | ${result.compileScenario.hours} | ${result.compileScenario.days} | ${formatShortDate(result.compileScenario.finishDate)} |` : ""}
| **Total** | **${result.totalHours}** | **${result.totalDays}** | **${formatShortDate(result.estimatedFinishDate)}** |

---
`);
    // Assumptions
    if (assumptions) {
        sections.push(`## Assumptions

${assumptions}

---
`);
    } else {
        sections.push(`## Assumptions

- Work will proceed without major interruptions or competing priorities
- Source materials and references are available as needed
- Feedback cycles will be timely (within 48 hours)
- No significant scope changes after estimate approval
- ${chaosBuffer}% buffer accounts for typical revision cycles and unforeseen complexity

---
`);
    }
    // Dependencies
    if (dependencies) {
        sections.push(`## Dependencies

${dependencies}

---
`);
    }
    // Risks
    if (risks) {
        sections.push(`## Risks & Mitigation

${risks}

---
`);
    } else {
        sections.push(`## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep | Timeline extension | Clear scope boundaries, change request process |
| Competing priorities | Delayed completion | Protected work blocks, priority alignment |
| Technical complexity | Additional hours | ${chaosBuffer}% buffer built into estimate |
| Feedback delays | Schedule slip | Defined review windows, async communication |

---
`);
    }
    // Sign-off
    sections.push(`## Approval

This estimate is provided in good faith based on current project understanding and available information. Actual time may vary based on factors discovered during execution.

**Prepared by:** ${employeeName}
**Date:** ${generatedDate}

---

_This estimate was generated using the Production Engine Estimator. For questions or clarifications, please contact ${employeeName}._
`);
    return sections.join("\n");
}
function generateEmployeeEstimateHTML(config) {
    const markdown = generateEmployeeEstimateMarkdown(config);
    // Convert markdown to basic HTML
    let html = markdown.replace(/^# (.+)$/gm, '<h1>$1</h1>').replace(/^## (.+)$/gm, '<h2>$1</h2>').replace(/^### (.+)$/gm, '<h3>$1</h3>').replace(/^#### (.+)$/gm, '<h4>$1</h4>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/^- (.+)$/gm, '<li>$1</li>').replace(/\n\n/g, '</p><p>').replace(/\|(.+)\|/g, (match)=>{
        const cells = match.split('|').filter((c)=>c.trim());
        if (cells.some((c)=>c.includes('---'))) return '';
        const isHeader = cells.some((c)=>c.includes('Metric') || c.includes('Category') || c.includes('Parameter') || c.includes('Phase') || c.includes('Risk'));
        const tag = isHeader ? 'th' : 'td';
        return `<tr>${cells.map((c)=>`<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    });
    // Wrap lists
    html = html.replace(/(<li>.+<\/li>\n?)+/g, '<ul>$&</ul>');
    // Wrap tables
    html = html.replace(/(<tr>.+<\/tr>\n?)+/g, '<table border="1" cellpadding="8" cellspacing="0">$&</table>');
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Project Estimate: ${config.project.name}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #1e293b;
    }
    h1 { 
      color: #0f172a; 
      border-bottom: 3px solid #4f46e5; 
      padding-bottom: 10px; 
    }
    h2 { 
      color: #1e40af; 
      margin-top: 2em;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 0.5em;
    }
    h3 { color: #3730a3; }
    h4 { color: #4338ca; font-size: 1em; }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin: 1em 0; 
    }
    th { 
      background: #f1f5f9; 
      text-align: left; 
      font-weight: 600;
    }
    td, th { 
      padding: 10px 14px; 
      border: 1px solid #e2e8f0; 
    }
    tr:nth-child(even) td {
      background: #f8fafc;
    }
    ul { margin: 1em 0; }
    li { margin: 0.5em 0; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
    strong { color: #0f172a; }
    .summary-box {
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 1em;
      margin: 1em 0;
    }
    @media print {
      body { padding: 20px; }
      h1 { page-break-after: avoid; }
      h2, h3 { page-break-after: avoid; }
      table { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/skeleton-crew-plan.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeCapacityGap",
    ()=>analyzeCapacityGap,
    "generateReallocationStrategy",
    ()=>generateReallocationStrategy,
    "generateSurvivalPlan",
    ()=>generateSurvivalPlan,
    "identifyCriticalDependencies",
    ()=>identifyCriticalDependencies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)");
;
function analyzeCapacityGap() {
    const lostHours = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEGACY_GHOST_CAPACITY"].reduce((sum, ghost)=>{
        const weeklyHours = parseInt(ghost.hours.replace('h/wk', ''));
        return sum + weeklyHours;
    }, 0);
    const remainingCapacity = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEAM_ROSTER"].reduce((sum, member)=>sum + member.weeklyCapacity, 0);
    const netGap = lostHours - remainingCapacity;
    const coveragePercentage = remainingCapacity / (lostHours + remainingCapacity) * 100;
    return {
        totalLostHours: lostHours,
        remainingCapacity,
        netGap,
        coveragePercentage
    };
}
function identifyCriticalDependencies() {
    const criticalProjects = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_PROJECTS"].filter((project)=>project.isLocked || project.stakeholder === "Matthew" || project.stakeholder === "Martin" && project.internalStatus === "Critical");
    return criticalProjects.map((project)=>({
            projectId: project.id,
            projectName: project.name,
            stakeholder: project.stakeholder,
            deadline: project.displayDate || project.launchWindow || "TBD",
            riskLevel: project.isLocked ? "critical" : project.stakeholder === "Matthew" ? "critical" : "high",
            missingCapabilities: getMissingCapabilities(project)
        }));
}
function getMissingCapabilities(project) {
    const missing = [];
    // Based on fired staff capabilities
    if (project.type.includes("Adventure") || project.type.includes("Sourcebook")) {
        missing.push("Writing/Editing (Jon's expertise)");
    }
    if (project.type.includes("Large Adventure") || project.type.includes("Battle Maps")) {
        missing.push("Art Coordination (Derek's visual standards)");
    }
    if (project.manualHours || project.layoutHours) {
        missing.push("Production Pipeline Management (Randy's oversight)");
    }
    return missing;
}
function generateReallocationStrategy() {
    return [
        {
            priority: 1,
            action: "Protect Dec 22 Eldritch 2E deadline",
            assignee: "Dan Cross",
            hoursReallocated: 20,
            impact: "Matthew's Core IP revenue protection - non-negotiable"
        },
        {
            priority: 2,
            action: "Maintain A1 production calendar",
            assignee: "Martin",
            hoursReallocated: 15,
            impact: "Without admin backbone, A1 launch fails"
        },
        {
            priority: 3,
            action: "Document Jon's technical style guide",
            assignee: "Dan Cross",
            hoursReallocated: 10,
            impact: "Prevents editorial standards loss"
        },
        {
            priority: 4,
            action: "Capture Derek's art coordination standards",
            assignee: "Martin",
            hoursReallocated: 5,
            impact: "Maintains visual consistency for A-series"
        },
        {
            priority: 5,
            action: "Preserve Randy's production pipeline methods",
            assignee: "Matthew",
            hoursReallocated: 5,
            impact: "Timeline management continuity"
        },
        {
            priority: 6,
            action: "Create scalable scaffolding systems",
            assignee: "Dan Cross",
            hoursReallocated: 15,
            impact: "Enables future team expansion"
        }
    ];
}
function generateSurvivalPlan() {
    const capacity = analyzeCapacityGap();
    const dependencies = identifyCriticalDependencies();
    const reallocations = generateReallocationStrategy();
    return {
        executiveSummary: {
            situation: "Great Remote Purge eliminated 16 staff, removing 120h/wk operational capacity",
            currentStatus: "Skeleton crew operations with 27% coverage of required hours",
            immediateRisk: "A1 launch failure and Dec 22 deadline breach",
            timeHorizon: "90 days to stabilize or accept major delays"
        },
        capacityAnalysis: capacity,
        criticalDependencies: dependencies,
        reallocationStrategy: reallocations,
        survivalMetrics: {
            weeksOfRunway: Math.floor(capacity.remainingCapacity / 40),
            criticalPathCoverage: `${dependencies.filter((d)=>d.riskLevel === "critical").length} critical projects`,
            documentationTasks: reallocations.filter((r)=>r.action.includes("Document")).length,
            systemBuildingTasks: reallocations.filter((r)=>r.action.includes("scaffolding")).length
        }
    };
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/strategic-pivot-report.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPivotReportAsMarkdown",
    ()=>formatPivotReportAsMarkdown,
    "generateStrategicPivotReport",
    ()=>generateStrategicPivotReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$skeleton$2d$crew$2d$plan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/skeleton-crew-plan.ts [app-ssr] (ecmascript)");
;
function generateStrategicPivotReport() {
    const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$skeleton$2d$crew$2d$plan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSurvivalPlan"])();
    return {
        executiveSummary: {
            situation: "The Great Remote Purge eliminated 16 staff members, removing 120 hours/week of operational capacity and leaving the TTRPG division as a skeleton crew operation.",
            decision: "Strategic pivot to Institutional Archivist model with focus on knowledge preservation, critical path protection, and scalable system building.",
            timeline: "90-day stabilization window with immediate focus on Dec 22 deadline and A1 launch continuity.",
            impact: "Current operational model covers only 27% of required capacity. Without immediate intervention, major revenue streams and strategic initiatives face significant delays or cancellation."
        },
        stakeholderMandates: {
            matthew: "Dec 22nd is non-negotiable. I am protecting the Core IP revenue. Eldritch 2E: Curses to Prose must ship to maintain financial stability.",
            martin: "Admin time is the production backbone. No calendar = no A1 launch. A-series production pipeline requires administrative scaffolding to prevent collapse.",
            dan: "Without scaffolding, the A-series cannot launch and corporate deadlines slip. Institutional knowledge preservation is critical for future scaling."
        },
        operationalRealities: {
            capacityLoss: "32,000 annual hours eliminated. Ghost capacity from Jon (writing/editing), Derek (art/visuals), and Randy (production lead) creates 120h/wk deficit.",
            criticalPathRisk: "A1 flagship launch (End of May) and Eldritch 2E deadline (Dec 22) both at risk. Production pipeline collapse threatens entire 2026 revenue plan.",
            survivalHorizon: "Current runway of approximately 11 weeks at reduced capacity. Immediate action required to prevent cascade failures."
        },
        strategicRecommendations: {
            immediate: [
                "Protect Dec 22 Eldritch 2E deadline - allocate 20h/wk to Matthew's Core IP",
                "Maintain A1 production calendar - allocate 15h/wk to Martin's administrative backbone",
                "Document Jon's technical style guide - capture editorial standards before knowledge loss",
                "Preserve Derek's art coordination standards - maintain visual consistency protocols",
                "Capture Randy's production pipeline methods - ensure timeline management continuity"
            ],
            shortTerm: [
                "Create scalable scaffolding systems for future team expansion",
                "Implement automated documentation processes for institutional knowledge",
                "Establish critical path monitoring systems for early risk detection",
                "Develop contingency plans for key personnel dependencies",
                "Build modular production workflows that can operate with minimal oversight"
            ],
            longTerm: [
                "Design organization structure resilient to single-point failures",
                "Implement knowledge management systems for institutional memory",
                "Create cross-training programs to reduce key person dependencies",
                "Establish strategic partnerships for specialized capabilities",
                "Build financial models that account for capacity volatility"
            ]
        }
    };
}
function formatPivotReportAsMarkdown() {
    const report = generateStrategicPivotReport();
    return `# Strategic Pivot Report: Great Remote Purge Response

## Executive Summary

**Situation:** ${report.executiveSummary.situation}

**Decision:** ${report.executiveSummary.decision}

**Timeline:** ${report.executiveSummary.timeline}

**Impact:** ${report.executiveSummary.impact}

---

## Stakeholder Mandates

### Matthew: Core IP Protection
> "${report.stakeholderMandates.matthew}"

### Martin: Production Backbone
> "${report.stakeholderMandates.martin}"

### Dan: Institutional Architecture
> "${report.stakeholderMandates.dan}"

---

## Operational Realities

### Capacity Loss
${report.operationalRealities.capacityLoss}

### Critical Path Risk
${report.operationalRealities.criticalPathRisk}

### Survival Horizon
${report.operationalRealities.survivalHorizon}

---

## Strategic Recommendations

### Immediate Actions (Next 30 Days)
${report.strategicRecommendations.immediate.map((item, idx)=>`${idx + 1}. ${item}`).join('\n')}

### Short-Term Initiatives (30-90 Days)
${report.strategicRecommendations.shortTerm.map((item, idx)=>`${idx + 1}. ${item}`).join('\n')}

### Long-Term Strategy (90+ Days)
${report.strategicRecommendations.longTerm.map((item, idx)=>`${idx + 1}. ${item}`).join('\n')}

---

## Survival Metrics Dashboard

- **Operational Coverage:** 27% of required capacity
- **Critical Projects:** 3 high-risk initiatives
- **Documentation Tasks:** 3 knowledge preservation priorities
- **System Building:** 1 scalable architecture requirement
- **Runway:** 11 weeks at current capacity

---

## Conclusion

The Great Remote Purge represents both a crisis and an opportunity. By embracing the Institutional Archivist role and implementing this strategic pivot, we can:

1. **Protect immediate revenue** through deadline adherence
2. **Preserve critical knowledge** before permanent loss
3. **Build resilient systems** for future growth
4. **Maintain strategic momentum** despite capacity constraints

Success requires immediate execution of the 90-day stabilization plan while simultaneously building the foundation for long-term organizational resilience.

---

*Report generated on ${new Date().toLocaleDateString()}*
*Prepared by: Institutional Archivist*
*Classification: Internal Leadership Communication*`;
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/unified-project-model.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnifiedProjectModel",
    ()=>UnifiedProjectModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)");
;
class UnifiedProjectModel {
    static instance;
    state;
    constructor(){
        this.state = this.initializeState();
    }
    static getInstance() {
        if (!UnifiedProjectModel.instance) {
            UnifiedProjectModel.instance = new UnifiedProjectModel();
        }
        return UnifiedProjectModel.instance;
    }
    initializeState() {
        const teamConfig = this.calculateTeamConfiguration(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEAM_ROSTER"], 50000, 6);
        const resourceValidation = this.calculateResourceValidation(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEAM_ROSTER"], __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_PROJECTS"]);
        const projectScenario = this.calculateProjectScenario(teamConfig, resourceValidation);
        return {
            teamConfig,
            resourceValidation,
            projectScenario,
            lastUpdated: new Date()
        };
    }
    getState() {
        return {
            ...this.state
        };
    }
    updateTeamConfiguration(teamMembers, projectSize, targetTimeline) {
        this.state.teamConfig = this.calculateTeamConfiguration(teamMembers, projectSize, targetTimeline);
        this.state.resourceValidation = this.calculateResourceValidation(teamMembers, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_PROJECTS"]);
        this.state.projectScenario = this.calculateProjectScenario(this.state.teamConfig, this.state.resourceValidation);
        this.state.lastUpdated = new Date();
    }
    updateProjectAssignments(projects) {
        // API ENFORCEMENT: Validate Invariants
        // 1. Monotonicity: Increasing remaining_hours cannot result in earlier finish date (implicit in calculation)
        // 2. Execution Boundary: Only Active/Review tasks count (handled in calculation)
        // 3. Logic Gate: Blocked -> Active requires dependencies to be Done
        projects.forEach((project)=>{
            if (project.tasks) {
                project.tasks.forEach((task)=>{
                    if (task.status === "Active" && task.dependencyIds && task.dependencyIds.length > 0) {
                    // In a real API, we would look up dependency status here.
                    // For now, we enforce this via the Initial State migration (Phase A).
                    }
                });
            }
        });
        this.state.resourceValidation = this.calculateResourceValidation(this.state.teamConfig.members, projects);
        this.state.projectScenario = this.calculateProjectScenario(this.state.teamConfig, this.state.resourceValidation);
        this.state.lastUpdated = new Date();
    }
    calculateTeamConfiguration(teamMembers, projectSize, targetTimeline) {
        const totalWeeklyCost = teamMembers.reduce((sum, member)=>sum + member.hourlyRate * member.weeklyCapacity, 0);
        const totalMonthlyCost = totalWeeklyCost * 4.33;
        const totalCost = totalMonthlyCost * targetTimeline;
        // Calculate writing productivity
        const totalWeeklyWords = teamMembers.filter((member)=>member.draftSpeed > 0).reduce((sum, member)=>sum + member.draftSpeed * member.weeklyCapacity, 0);
        const weeksNeeded = projectSize / totalWeeklyWords;
        const monthsNeeded = weeksNeeded / 4.33;
        // Coordination overhead increases with team size
        const coordinationOverhead = teamMembers.length > 3 ? 0.15 : 0.10;
        const adjustedCost = totalCost * (1 + coordinationOverhead);
        return {
            members: teamMembers,
            projectSize,
            targetTimeline,
            totalCost: adjustedCost,
            feasible: monthsNeeded <= targetTimeline,
            coordinationOverhead
        };
    }
    calculateResourceValidation(teamMembers, projects) {
        return teamMembers.map((member)=>{
            const assignedProjects = projects.flatMap((project)=>{
                // If project has tasks, use them for granular validation
                if (project.tasks && project.tasks.length > 0) {
                    return project.tasks.filter((task)=>task.assigneeId === member.id && project.lifecycleState === "Production" && (task.status === "Active" || task.status === "Review") && task.remainingHours > 0).map((task)=>({
                            projectId: project.id,
                            projectName: project.name,
                            hours: task.remainingHours
                        }));
                }
                // Fallback for projects without tasks (legacy support)
                // Only count if in Production state
                if (project.assignedTo === member.id && project.lifecycleState === "Production") {
                    return [
                        {
                            projectId: project.id,
                            projectName: project.name,
                            hours: project.manualHours || this.estimateProjectHours(project, member)
                        }
                    ];
                }
                return [];
            });
            const totalAssignedHours = assignedProjects.reduce((sum, project)=>sum + project.hours, 0);
            // Use a shorter horizon for "Now Mode" validation?
            // The prompt asks to remove fake overload. Keeping annual capacity but filtering work will do that.
            // Ideally this should be matched against a "Quarterly" or "Sprint" horizon, but
            // sticking to existing logic with filtered data is the safest first step.
            const availableCapacity = member.weeklyCapacity * 48; // Annual capacity
            const loadPercentage = totalAssignedHours / availableCapacity * 100;
            return {
                teamMemberId: member.id,
                teamMemberName: member.name,
                totalAssignedHours,
                availableCapacity,
                loadPercentage,
                isOverloaded: totalAssignedHours > availableCapacity,
                assignedProjects
            };
        });
    }
    estimateProjectHours(project, teamMember) {
        // Base calculation using team member's draft speed
        const baseHours = project.targetWords / teamMember.draftSpeed;
        // Apply chaos buffer
        const bufferedHours = baseHours * (1 + teamMember.chaosBuffer / 100);
        // Add project type multipliers
        let projectMultiplier = 1.0;
        switch(project.type){
            case "Large Adventure":
                projectMultiplier = 1.2;
                break;
            case "Core Rules":
                projectMultiplier = 1.5;
                break;
            case "Small Adventure":
                projectMultiplier = 0.9;
                break;
            default:
                projectMultiplier = 1.0;
        }
        return Math.round(bufferedHours * projectMultiplier);
    }
    calculateProjectScenario(teamConfig, resourceValidation) {
        const validatedBudget = teamConfig.totalCost;
        // Find the bottleneck - the person with highest load
        const bottleneck = resourceValidation.reduce((max, current)=>current.loadPercentage > max.loadPercentage ? current : max);
        // Calculate timeline based on bottleneck
        const bottleneckMultiplier = bottleneck.isOverloaded ? bottleneck.loadPercentage / 100 : 1.0;
        const validatedTimeline = Math.ceil(teamConfig.targetTimeline * bottleneckMultiplier);
        // Identify bottlenecks
        const bottlenecks = [];
        if (bottleneck.isOverloaded) {
            bottlenecks.push(`Critical: ${bottleneck.teamMemberName} is ${Math.round(bottleneck.loadPercentage)}% overloaded`);
        }
        if (validatedBudget > teamConfig.targetTimeline * 10000) {
            bottlenecks.push("Budget exceeds typical project parameters");
        }
        // Risk assessment
        let riskLevel = "low";
        if (bottlenecks.length >= 2) riskLevel = "high";
        else if (bottlenecks.length >= 1) riskLevel = "medium";
        return {
            targetBudget: teamConfig.targetTimeline * 10000,
            targetTimeline: teamConfig.targetTimeline,
            validatedBudget,
            validatedTimeline,
            bottlenecks,
            feasible: bottlenecks.length === 0,
            riskLevel
        };
    }
    // Public getters for specific data
    getTeamConfiguration() {
        return this.state.teamConfig;
    }
    getResourceValidation() {
        return this.state.resourceValidation;
    }
    getProjectScenario() {
        return this.state.projectScenario;
    }
    getValidatedBudget() {
        return this.state.projectScenario.validatedBudget;
    }
    getValidatedTimeline() {
        return this.state.projectScenario.validatedTimeline;
    }
    getBottlenecks() {
        return this.state.projectScenario.bottlenecks;
    }
    isProjectFeasible() {
        return this.state.projectScenario.feasible;
    }
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ProductContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductProvider",
    ()=>ProductProvider,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ProductContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ProductProvider({ children, initialProducts = [], onProductsChange }) {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProducts);
    const [pendingChanges, setPendingChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const updateProductField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((projectId, field, value)=>{
        setPendingChanges((prev)=>{
            const newMap = new Map(prev);
            const current = newMap.get(projectId) || {};
            newMap.set(projectId, {
                ...current,
                [field]: value
            });
            return newMap;
        });
    }, []);
    const saveProductChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (projectId)=>{
        const changes = pendingChanges.get(projectId);
        if (!changes) return;
        let updatedProducts = [];
        setProducts((prev)=>{
            const next = prev.map((p)=>p.id === projectId ? {
                    ...p,
                    ...changes
                } : p);
            updatedProducts = next;
            return next;
        });
        // Persist to localStorage for now
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Propagate to parent if provided
        if (onProductsChange && updatedProducts.length) {
            onProductsChange(updatedProducts);
        }
        setPendingChanges((prev)=>{
            const newMap = new Map(prev);
            newMap.delete(projectId);
            return newMap;
        });
    }, [
        pendingChanges,
        onProductsChange
    ]);
    const discardProductChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((projectId)=>{
        setPendingChanges((prev)=>{
            const newMap = new Map(prev);
            newMap.delete(projectId);
            return newMap;
        });
    }, []);
    const getPendingChangesForProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((projectId)=>{
        return pendingChanges.get(projectId) || null;
    }, [
        pendingChanges
    ]);
    const hasUnsavedChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((projectId)=>{
        return pendingChanges.has(projectId);
    }, [
        pendingChanges
    ]);
    const value = {
        products,
        pendingChanges,
        setProducts,
        updateProductField,
        saveProductChanges,
        discardProductChanges,
        getPendingChangesForProject,
        hasUnsavedChanges
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ProductContext.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function useProducts() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within ProductProvider");
    }
    return context;
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/productInsights.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInsightsForProduct",
    ()=>getInsightsForProduct
]);
const INSIGHTS = {
    // Normalize key to lowercase for flexible matching
    "a0: caravan's end": {
        targetWords: 60000,
        estimatedPages: {
            min: 75,
            max: 90
        },
        layoutHours: {
            min: 45,
            mid: 50,
            max: 55
        }
    }
};
function getInsightsForProduct(name) {
    const key = name.trim().toLowerCase();
    if (INSIGHTS[key]) return INSIGHTS[key];
    // fuzzy: startsWith A0 or contains caravan
    if (key.startsWith("a0") || key.includes("caravan")) {
        return INSIGHTS["a0: caravan's end"]; // best-effort match
    }
    return null;
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/cartography.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runCartographyEstimate",
    ()=>runCartographyEstimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/constants.ts [app-ssr] (ecmascript)");
;
function runCartographyEstimate(tickets, options = {}) {
    let totalMaps = 0;
    let totalCartographerHours = 0;
    let totalInternalSupportHours = 0;
    let totalCartographyCost = 0;
    let mapCriticalPathDays = 0;
    const { teamRoster = [], globalCartographerRate = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARTOGRAPHY_DEFAULT"] } = options;
    tickets.forEach((ticket)=>{
        totalMaps++;
        // 1. Cartographer Hours
        const artistHours = ticket.baseDraftHours + ticket.baseRevisionHours * ticket.expectedRevisions;
        totalCartographerHours += artistHours;
        // 2. Internal Support Hours
        const internalHours = ticket.internalBriefingHours + ticket.internalReviewHoursPerPass * (1 + ticket.expectedRevisions) + ticket.integrationHours;
        totalInternalSupportHours += internalHours;
        // 3. Cost
        let cost = 0;
        if (ticket.flatMapFee !== null && ticket.flatMapFee !== undefined && ticket.flatMapFee > 0) {
            cost = ticket.flatMapFee;
        } else {
            let rate = ticket.contractorRate;
            // If no explicit rate on ticket, check if we have a roleId to lookup
            if (!rate && ticket.cartographerRoleId) {
                const member = teamRoster.find((m)=>m.id === ticket.cartographerRoleId);
                if (member) {
                    rate = member.hourlyRate;
                }
            }
            // Fallback to global default if still no rate
            if (!rate) {
                // If it's an external cartographer, use the passed in global rate (or default constant)
                // If it's internal, we might technically say "cost" is $0 or salary, but for budgeting
                // often we apply a rate. Let's assume we apply the rate if it's external.
                if (ticket.isExternalCartographer) {
                    // Note: CARTOGRAPHY_DEFAULT in constants is likely a per-map avg, not hourly.
                    // But here we are doing hours * rate.
                    // Let's assume a reasonable default hourly rate for cartography if not specified.
                    // Use the option passed in or fallback to a reasonable default (e.g. 50 if CARTOGRAPHY_DEFAULT is weird)
                    // Ideally globalCartographerRate should be an hourly rate.
                    rate = globalCartographerRate || 50;
                } else {
                    // Internal cost might be tracked differently, but let's stick to rate * hours
                    rate = 0;
                }
            }
            cost = artistHours * rate;
        }
        totalCartographyCost += cost;
        // 4. Duration (simplistic)
        // Assume a cartographer works ~5 hours a day on maps effectively?
        // This is for critical path estimation.
        const effectiveDailyHours = 5;
        const days = Math.ceil(artistHours / effectiveDailyHours);
        if (days > mapCriticalPathDays) {
            mapCriticalPathDays = days;
        }
    });
    return {
        totalMaps,
        totalCartographerHours,
        totalInternalSupportHours,
        totalCartographyCost,
        mapCriticalPathDays
    };
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ingest-notebook-lm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataIngestionService",
    ()=>DataIngestionService
]);
class DataIngestionService {
    /**
   * Transforms a raw NotebookLM JSON export into the internal UnifiedProjectState.
   */ static ingest(data, _currentModel) {
        const project = DataIngestionService.mapProject(data);
        const team = DataIngestionService.mapTeam(data.resources);
        // In a real implementation, we would update the model state directly
        // based on the tasks and recalculated financials.
        return {
            teamConfig: {
                members: team,
                projectSize: data.tasks.length,
                targetTimeline: data.milestones.length * 7,
                totalCost: data.financials.budget_total?.amount || 0,
                feasible: !data.schedule.urgent,
                coordinationOverhead: 0.15 // Default 15%
            },
            resourceValidation: [],
            projectScenario: {
                targetBudget: data.financials.budget_total?.amount || 0,
                targetTimeline: data.schedule.slack_days ? Object.keys(data.schedule.slack_days).length * 14 : 30,
                validatedBudget: data.schedule.projected_cost.amount,
                validatedTimeline: 0,
                bottlenecks: data.risk_contingency?.high_risk_tasks.map((t)=>t.id) || [],
                feasible: !data.schedule.urgent,
                riskLevel: data.schedule.urgent ? "high" : "medium"
            },
            lastUpdated: new Date()
        };
    }
    // @ts-ignore
    static mapProject(data) {
        return {
            id: 999,
            name: data.project.name,
            type: "TRPG Adventure",
            clientType: "Internal",
            targetWords: 50000,
            assignedTo: "Dan Cross",
            internalStatus: "Active",
            clientStatus: "In Progress",
            stakeholder: "Dan",
            launchWindow: data.project.hard_deadline || "2026-01-31",
            budgetType: "Fixed",
            dependency: null,
            revenuePotential: "Medium"
        };
    }
    static mapTeam(resources) {
        return resources.map((r, index)=>({
                id: `imported_${index}`,
                name: r.name,
                role: r.role,
                hourlyRate: r.hourly_rate?.amount || 0,
                weeklyCapacity: r.available_hours_per_week || 40,
                draftSpeed: 500,
                compileSpeed: 10,
                chaosBuffer: 1.2
            }));
    }
}
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UI Feedback System for Freelancer Plan Estimator
 * Provides consistent loading states, validation feedback, and user guidance
 */ __turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "FieldFeedback",
    ()=>FieldFeedback,
    "LoadingSpinner",
    ()=>LoadingSpinner,
    "ProgressBar",
    ()=>ProgressBar,
    "ValidationFeedback",
    ()=>ValidationFeedback,
    "commonValidationRules",
    ()=>commonValidationRules,
    "useDebouncedValidation",
    ()=>useDebouncedValidation,
    "validateField",
    ()=>validateField,
    "validateForm",
    ()=>validateForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>");
;
;
;
const validateField = (value, rules)=>{
    for (const rule of rules){
        if (rule.required && (!value || value === '')) {
            return `${rule.field} is required`;
        }
        if (rule.minLength && value && value.length < rule.minLength) {
            return `${rule.field} must be at least ${rule.minLength} characters`;
        }
        if (rule.maxLength && value && value.length > rule.maxLength) {
            return `${rule.field} must be no more than ${rule.maxLength} characters`;
        }
        if (rule.min !== undefined && value !== undefined && value !== null && Number(value) < rule.min) {
            return `${rule.field} must be at least ${rule.min}`;
        }
        if (rule.max !== undefined && value !== undefined && value !== null && Number(value) > rule.max) {
            return `${rule.field} must be no more than ${rule.max}`;
        }
        if (rule.pattern && value && !rule.pattern.test(value)) {
            return `${rule.field} format is invalid`;
        }
        if (rule.custom) {
            const customError = rule.custom(value);
            if (customError) return customError;
        }
    }
    return null;
};
const validateForm = (data, rules)=>{
    const errors = {};
    const warnings = {};
    let isValid = true;
    for (const [field, fieldRules] of Object.entries(rules)){
        const value = data[field];
        const error = validateField(value, fieldRules);
        if (error) {
            errors[field] = error;
            isValid = false;
        }
        // Add warnings for common issues
        if (field === 'dailyHours' && value && (Number(value) < 2 || Number(value) > 12)) {
            warnings[field] = 'Daily hours outside recommended range (2-12 hrs)';
        }
        if (field === 'draftSpeed' && value && (Number(value) < 50 || Number(value) > 500)) {
            warnings[field] = 'Draft speed outside typical range (50-500 words/hr)';
        }
        if (field === 'chaosBuffer' && value && (Number(value) < 5 || Number(value) > 50)) {
            warnings[field] = 'Chaos buffer outside recommended range (5-50%)';
        }
    }
    return {
        isValid,
        errors,
        warnings
    };
};
const LoadingSpinner = ({ size = 'md', message })=>{
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: `animate-spin text-slate-400 ${sizeClasses[size]}`
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-slate-600",
                children: message
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 110,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ValidationFeedback = ({ validation, showErrors = true, showWarnings = true })=>{
    if (validation.isValid && Object.keys(validation.warnings).length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-emerald-600 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "All fields valid"
                }, void 0, false, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            showErrors && Object.keys(validation.errors).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-rose-50 border border-rose-200 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-rose-700 text-sm font-medium mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Please fix these errors:"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-rose-600 space-y-1",
                        children: Object.values(validation.errors).map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-rose-400",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showWarnings && Object.keys(validation.warnings).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-50 border border-amber-200 rounded-lg p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-amber-700 text-sm font-medium mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Recommendations:"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-amber-600 space-y-1",
                        children: Object.values(validation.warnings).map((warning, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-400",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: warning
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FieldFeedback = ({ error, warning, showIcon = true })=>{
    if (!error && !warning) return null;
    const isError = !!error;
    const bgColor = isError ? 'bg-rose-50 border-rose-200' : 'bg-amber-50 border-amber-200';
    const textColor = isError ? 'text-rose-700' : 'text-amber-700';
    const Icon = isError ? __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"] : __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mt-1 p-2 rounded-lg border ${bgColor}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-2 text-sm ${textColor}`,
            children: [
                showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-4 h-4 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                    lineNumber: 185,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: error || warning
                }, void 0, false, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EmptyState = ({ icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], title, description, action })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "w-16 h-16 mx-auto mb-4 text-slate-300"
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-slate-700 mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-500 mb-6 max-w-md mx-auto",
                children: description
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: action
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 204,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ProgressBar = ({ progress, showPercentage = true, size = 'md' })=>{
    const sizeClasses = {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            showPercentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm text-slate-600 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Progress"
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            Math.round(progress),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full bg-slate-200 rounded-full overflow-hidden ${sizeClasses[size]}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out",
                    style: {
                        width: `${Math.min(100, Math.max(0, progress))}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/ui-feedback.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const commonValidationRules = {
    projectName: [
        {
            field: 'Project name',
            required: true,
            minLength: 3,
            maxLength: 100
        }
    ],
    teamMemberName: [
        {
            field: 'Team member name',
            required: true,
            minLength: 2,
            maxLength: 50
        }
    ],
    hourlyRate: [
        {
            field: 'Hourly rate',
            required: true,
            min: 15,
            max: 500
        }
    ],
    weeklyHours: [
        {
            field: 'Weekly hours',
            required: true,
            min: 1,
            max: 80
        }
    ],
    dailyHours: [
        {
            field: 'Daily hours',
            required: true,
            min: 1,
            max: 16
        }
    ],
    draftSpeed: [
        {
            field: 'Draft speed',
            required: true,
            min: 50,
            max: 500
        }
    ],
    projectSize: [
        {
            field: 'Project size',
            required: true,
            min: 1000,
            max: 1000000
        }
    ],
    timeline: [
        {
            field: 'Timeline',
            required: true,
            min: 1,
            max: 24
        }
    ],
    budget: [
        {
            field: 'Budget',
            required: true,
            min: 1000,
            max: 1000000
        }
    ]
};
const useDebouncedValidation = (value, rules, delay = 300)=>{
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>clearTimeout(timer);
    }, [
        value,
        delay
    ]);
    const validationError = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>validateField(debouncedValue, rules), [
        debouncedValue,
        rules
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useLayoutEffect(()=>{
        setError(validationError);
    }, [
        validationError
    ]);
    return error;
};
}),
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/tooltips.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tooltip System for Freelancer Plan Estimator
 * Provides contextual help for jargon and complex concepts
 */ __turbopack_context__.s([
    "HelpSection",
    ()=>HelpSection,
    "QuickTooltip",
    ()=>QuickTooltip,
    "Tooltip",
    ()=>Tooltip,
    "emptyStateMessages",
    ()=>emptyStateMessages,
    "tooltipContent",
    ()=>tooltipContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
;
;
const tooltipContent = {
    // Project Management Terms
    'coordination-overhead': {
        title: 'Coordination Overhead',
        content: 'Time added to project timeline for team meetings, communication, and management. Larger teams need more coordination time.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        category: 'planning'
    },
    'critical-path': {
        title: 'Critical Path',
        content: 'The longest sequence of dependent tasks that determines the minimum project duration. Any delay here delays the entire project.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        category: 'planning'
    },
    'bottleneck': {
        title: 'Bottleneck',
        content: 'A team member or resource that is overloaded and limiting project progress. Resolving bottlenecks often speeds up the entire project.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        category: 'planning'
    },
    'resource-validation': {
        title: 'Resource Validation',
        content: 'Checking if your team has enough capacity to complete the project within the timeline based on their availability and workload.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        category: 'planning'
    },
    // Financial Terms
    'break-even': {
        title: 'Break-Even Point',
        content: 'The number of units you need to sell to cover all costs (development + printing). After this point, each sale generates profit.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        category: 'financial'
    },
    'cogs': {
        title: 'Cost of Goods Sold (COGS)',
        content: 'Direct costs to produce each unit: printing, shipping, fulfillment, and platform fees. Doesn\'t include development costs.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        category: 'financial'
    },
    'msrp': {
        title: 'MSRP',
        content: 'Manufacturer\'s Suggested Retail Price - the recommended selling price to customers before any discounts.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        category: 'financial'
    },
    'distribution-channel': {
        title: 'Distribution Channel',
        content: 'How you sell your product to customers. Different channels have different fees, discounts, and fulfillment requirements.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        category: 'financial'
    },
    // Team Roles
    'lead-writer': {
        title: 'Lead Writer',
        content: 'Primary writer responsible for story structure, world-building, and maintaining consistency across the project.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        category: 'roles'
    },
    'writer': {
        title: 'Writer',
        content: 'Creates content for specific sections, chapters, or adventures following the lead writer\'s guidelines.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        category: 'roles'
    },
    'editor': {
        title: 'Editor',
        content: 'Reviews and improves content for clarity, consistency, grammar, and style. Ensures quality standards are met.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        category: 'roles'
    },
    'layout-artist': {
        title: 'Layout Artist',
        content: 'Designs the visual layout of pages, integrates text and images, and ensures professional presentation.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        category: 'roles'
    },
    'project-manager': {
        title: 'Project Manager',
        content: 'Coordinates team members, manages schedules, tracks progress, and handles communication and risk management.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        category: 'roles'
    },
    // Production Terms
    'draft-speed': {
        title: 'Draft Speed',
        content: 'Words per hour you can write in first draft quality. Typical range: 100-300 w/hr for creative writing.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        category: 'production'
    },
    'compile-speed': {
        title: 'Compile Speed',
        content: 'Words per hour for editing and revising. Usually slower than drafting due to the detailed work involved.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        category: 'production'
    },
    'chaos-buffer': {
        title: 'Chaos Buffer',
        content: 'Extra time added to account for unexpected delays, revisions, and real-world complications. 15% is typical.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        category: 'production'
    },
    // Industry Terms
    'ttrpg': {
        title: 'TTRPG',
        content: 'Tabletop Role-Playing Game - games where players use dice, character sheets, and imagination to tell collaborative stories.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        category: 'industry'
    },
    'rpg': {
        title: 'RPG',
        content: 'Role-Playing Game - games where players take on characters and make decisions that affect the story.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        category: 'industry'
    }
};
const Tooltip = ({ term, children, size = 'md', position = 'top', delay = 500, className = '' })=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeoutId, setTimeoutId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const content = tooltipContent[term];
    if (!content) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
    const sizeClasses = {
        sm: 'w-48 p-2 text-xs',
        md: 'w-64 p-3 text-sm',
        lg: 'w-80 p-4 text-base'
    };
    const positionClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
    };
    const categoryColors = {
        planning: 'bg-blue-50 border-blue-200 text-blue-800',
        financial: 'bg-emerald-50 border-emerald-200 text-emerald-800',
        roles: 'bg-purple-50 border-purple-200 text-purple-800',
        production: 'bg-amber-50 border-amber-200 text-amber-800',
        industry: 'bg-slate-50 border-slate-200 text-slate-800'
    };
    const showTooltip = ()=>{
        if (timeoutId) clearTimeout(timeoutId);
        const id = setTimeout(()=>setIsVisible(true), delay);
        setTimeoutId(id);
    };
    const hideTooltip = ()=>{
        if (timeoutId) clearTimeout(timeoutId);
        setIsVisible(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (tooltipRef.current && !tooltipRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
                hideTooltip();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        timeoutId,
        hideTooltip
    ]);
    const Icon = content.icon;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: "relative inline-block"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        ref: triggerRef,
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onClick: ()=>setIsVisible(!isVisible),
        className: `cursor-help inline-flex items-center gap-1 ${className}`
    }, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
        className: "w-3 h-3 text-slate-400 hover:text-slate-600 transition-colors"
    })), isVisible && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        ref: tooltipRef,
        className: `absolute z-50 ${sizeClasses[size]} ${positionClasses[position]} ${categoryColors[content.category]} border rounded-lg shadow-lg transition-all duration-200`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: "flex items-start gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Icon, {
        className: "w-4 h-4 mt-0.5 flex-shrink-0"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('h4', {
        className: "font-semibold mb-1"
    }, content.title), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('p', {
        className: "leading-relaxed"
    }, content.content))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: `absolute ${position === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 -mt-1' : position === 'bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 -mb-1' : position === 'left' ? 'left-full top-1/2 transform -translate-y-1/2 -ml-1' : 'right-full top-1/2 transform -translate-y-1/2 -mr-1'}`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: `w-2 h-2 ${categoryColors[content.category]} border rotate-45`
    }))));
};
const QuickTooltip = ({ content, children, className = '' })=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: `relative inline-block ${className}`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        onMouseEnter: ()=>setIsVisible(true),
        onMouseLeave: ()=>setIsVisible(false),
        className: "cursor-help"
    }, children), isVisible && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: "absolute z-50 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-1"
    }, content, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: "absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: "w-2 h-2 bg-slate-800 rotate-45"
    }))));
};
const emptyStateMessages = {
    noTeamMembers: {
        title: 'Build Your Team',
        description: 'Add team members to calculate project costs and timeline. Start with essential roles like writers and editors.',
        action: 'Add Team Member',
        guidance: [
            'Every project needs at least one writer',
            'Editors ensure quality and consistency',
            'Layout artists handle visual presentation',
            'Project managers keep everything on track'
        ]
    },
    noProjects: {
        title: 'Create Your First Project',
        description: 'Set up a project to estimate costs, timeline, and resource requirements.',
        action: 'New Project',
        guidance: [
            'Start with a realistic word count',
            'Consider your team\'s availability',
            'Plan for unexpected delays',
            'Review industry standards for similar projects'
        ]
    },
    noScenarios: {
        title: 'Save Scenarios to Compare',
        description: 'Save different configurations to analyze various approaches and find the optimal balance.',
        action: 'Save Current Scenario',
        guidance: [
            'Compare budget vs timeline trade-offs',
            'Test different team compositions',
            'Evaluate risk levels',
            'Plan for contingencies'
        ]
    },
    validationErrors: {
        title: 'Configuration Needs Attention',
        description: 'Some values need adjustment before proceeding.',
        action: 'Fix Issues',
        guidance: [
            'Check all required fields are filled',
            'Ensure values are within reasonable ranges',
            'Verify team capacity matches project scope',
            'Review timeline feasibility'
        ]
    },
    noData: {
        title: 'No Data Available',
        description: 'Start by entering your project details or loading a saved configuration.',
        action: 'Get Started',
        guidance: [
            'Import existing data if available',
            'Use templates for common project types',
            'Start with estimates and refine as you go',
            'Consult industry benchmarks'
        ]
    }
};
const HelpSection = ({ category, className = '' })=>{
    const [expandedTerm, setExpandedTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const terms = category === 'all' ? Object.entries(tooltipContent) : Object.entries(tooltipContent).filter(([_, content])=>content.category === category);
    const categoryTitles = {
        planning: 'Project Planning Terms',
        financial: 'Financial & Business Terms',
        roles: 'Team Roles & Responsibilities',
        production: 'Production & Workflow Terms',
        industry: 'Industry & Game Terms',
        all: 'All Terms & Concepts'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: `bg-white rounded-xl border border-slate-200 p-6 ${className}`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('h3', {
        className: "text-lg font-semibold text-slate-900 mb-4"
    }, categoryTitles[typeof category === 'string' ? category : 'all']), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        className: "space-y-3"
    }, terms.map(([term, content])=>{
        const Icon = content.icon;
        const isExpanded = expandedTerm === term;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
            key: term,
            className: "border border-slate-100 rounded-lg"
        });
    })));
};
}),
];

//# sourceMappingURL=Dev_GitHub_Freelancer-Plan-Estimator_lib_6ab083c4._.js.map