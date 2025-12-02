"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Briefcase,
  Calculator,
  ClipboardList,
  Cpu,
  DollarSign,
  Ghost,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  CAPACITY_GAP_STATS,
  DEFAULT_METRICS,
  INITIAL_PROJECTS,
  LEGACY_GHOST_CAPACITY,
  ORPHANED_ASSETS,
  PRODUCTION_PHASES,
  REPLACEMENT_ROLES,
} from "@/lib/constants";
import {
  bucketByQuarter,
  calculateAnnualLoad,
  calculateDefenseAnalysis,
  calculateProjectAnalysis,
  calculateStakeholderDemand,
  runEstimator,
} from "@/lib/calculations";
import type { DisplayProject, EstimatorResult, ProjectWithDisplay } from "@/lib/types";
import { MainNav } from "@/components/MainNav";
import {
  BudgetView,
  CapacityGapView,
  EfficiencyView,
  EstimatorView,
  MandateView,
  MethodologyView,
  PoliticsView,
  ProjectStatusView,
  PurgeView,
  TeamPlanner,
} from "@/components/dashboard";

const INTERNAL_TAB_STYLES = {
  methodology: "text-indigo-700 bg-indigo-50 border-indigo-600",
  team: "text-blue-700 bg-blue-50 border-blue-600",
  budget: "text-green-700 bg-green-50 border-green-600",
  efficiency: "text-purple-700 bg-purple-50 border-purple-600",
  politics: "text-orange-700 bg-orange-50 border-orange-600",
  mandates: "text-slate-700 bg-slate-50 border-slate-600",
  status: "text-rose-700 bg-rose-50 border-rose-600",
  estimator: "text-indigo-700 bg-indigo-50 border-indigo-600",
  resourcing: "text-red-700 bg-red-50 border-red-600",
};

const CLIENT_TAB_STYLES = {
  ...INTERNAL_TAB_STYLES,
  resourcing: "text-amber-700 bg-amber-50 border-amber-600",
};

type StatusColumnConfig = {
  id: string;
  internalLabel: string;
  clientLabel: string;
  description: string;
  matcher: (status: string, project: DisplayProject) => boolean;
};

const STATUS_COLUMN_CONFIG: StatusColumnConfig[] = [
  {
    id: "critical",
    internalLabel: "Critical Mandates",
    clientLabel: "Strategic Priorities",
    description: "Non-negotiable revenue protection",
    matcher: (status) => /priority|critical/.test(status),
  },
  {
    id: "assembly",
    internalLabel: "Assembly Floor",
    clientLabel: "In Production",
    description: "Actively drafting or finishing",
    matcher: (status) => /draft|production|layout|finishing/.test(status),
  },
  {
    id: "blocked",
    internalLabel: "Dependencies",
    clientLabel: "Dependency Review",
    description: "Needs enabling work or approvals",
    matcher: (_status, project) => Boolean(project.dependency),
  },
  {
    id: "queued",
    internalLabel: "Queued + Waiting",
    clientLabel: "Upcoming Windows",
    description: "Approved once scaffolding clears",
    matcher: (_status, project) => project.launchWindow.toLowerCase().includes("q"),
  },
];

export default function DashboardPage() {
  const [isClientMode, setIsClientMode] = useState(false);
  const [activeTab, setActiveTab] = useState("methodology");
  const [projects] = useState(INITIAL_PROJECTS);
  const [metrics] = useState(DEFAULT_METRICS);

  const [defendHourlyRate, setDefendHourlyRate] = useState(20);
  const [defendWPH, setDefendWPH] = useState(250);
  const [marketPerWord, setMarketPerWord] = useState(0.08);

  const [estimatorInputs, setEstimatorInputs] = useState({
    activity: "New Request",
    totalWords: 20000,
    draftSpeed: 200,
    bufferPercent: 15,
    dailyHours: 4,
  });
  const [estimatorResult, setEstimatorResult] = useState<EstimatorResult | null>(null);

  const projectsWithDisplay = useMemo<ProjectWithDisplay[]>(
    () =>
      projects.map((project) => ({
        ...project,
        displayStatus: isClientMode ? project.clientStatus : project.internalStatus,
        displayType: isClientMode ? project.clientType : project.type,
      })),
    [projects, isClientMode]
  );

  const writerLoad = useMemo(() => calculateAnnualLoad(projectsWithDisplay), [projectsWithDisplay]);

  const analysis = useMemo(
    () => calculateProjectAnalysis(projectsWithDisplay, metrics),
    [projectsWithDisplay, metrics]
  );

  const analysisWithDisplay = useMemo<DisplayProject[]>(
    () =>
      analysis.map((project) => ({
        ...project,
        displayStatus: isClientMode ? project.clientStatus : project.internalStatus,
        displayType: isClientMode ? project.clientType : project.type,
      })),
    [analysis, isClientMode]
  );

  const quarterBuckets = useMemo(() => {
    const baseBuckets = bucketByQuarter(analysis);
    const formatted: Record<string, DisplayProject[]> = {};
    Object.entries(baseBuckets).forEach(([quarter, items]) => {
      formatted[quarter] = items.map((project) => ({
        ...project,
        displayStatus: isClientMode ? project.clientStatus : project.internalStatus,
        displayType: isClientMode ? project.clientType : project.type,
      }));
    });
    return formatted;
  }, [analysis, isClientMode]);

  const defenseAnalysis = useMemo(
    () => calculateDefenseAnalysis(defendHourlyRate, defendWPH, marketPerWord),
    [defendHourlyRate, defendWPH, marketPerWord]
  );

  const stakeholderLoad = useMemo(() => calculateStakeholderDemand(analysis), [analysis]);

  const statusBuckets = useMemo(() => {
    const base = STATUS_COLUMN_CONFIG.reduce<Record<string, DisplayProject[]>>((acc, column) => {
      acc[column.id] = [];
      return acc;
    }, {});

    analysisWithDisplay.forEach((project) => {
      const statusText = (project.displayStatus ?? project.internalStatus).toLowerCase();
      const matched = STATUS_COLUMN_CONFIG.find((column) => column.matcher(statusText, project));
      const bucketId = matched?.id ?? "queued";
      base[bucketId] = base[bucketId] || [];
      base[bucketId].push(project);
    });

    return base;
  }, [analysisWithDisplay]);

  const statusColumns = STATUS_COLUMN_CONFIG.map((column) => ({
    id: column.id,
    label: isClientMode ? column.clientLabel : column.internalLabel,
    description: column.description,
  }));

  const tabs = [
    { id: "methodology", label: "Production Engine", icon: Cpu },
    { id: "team", label: isClientMode ? "Capacity Plan" : "Team Load", icon: Users },
    { id: "budget", label: "Budget 2026", icon: DollarSign },
    { id: "efficiency", label: "Studio Value", icon: Calculator },
    { id: "politics", label: isClientMode ? "Stakeholder Map" : "Politics", icon: TrendingUp },
    { id: "mandates", label: "Mandates", icon: Briefcase },
    {
      id: "status",
      label: isClientMode ? "Delivery Tracker" : "Reality Tracker",
      icon: ClipboardList,
    },
    { id: "estimator", label: "Estimator", icon: Timer },
    {
      id: "resourcing",
      label: isClientMode ? "Capacity Gap" : "The Purge",
      icon: isClientMode ? AlertTriangle : Ghost,
    },
  ];

  const tabStyles = isClientMode ? CLIENT_TAB_STYLES : INTERNAL_TAB_STYLES;

  const handleEstimatorChange = (field: keyof typeof estimatorInputs, value: string | number) => {
    setEstimatorInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleEstimate = () => {
    setEstimatorResult(runEstimator(estimatorInputs));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hoskbrew Strategic Board</p>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Production Engine Dashboard
            </h1>
            <p className="text-slate-500 mt-1">
              Toggle between War Room status and Client-ready narrative before walking into the budget meeting.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <span className={`text-xs font-semibold ${!isClientMode ? "text-slate-900" : "text-slate-400"}`}>
              Internal
            </span>
            <button
              onClick={() => setIsClientMode((prev) => !prev)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isClientMode ? "bg-emerald-500" : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  isClientMode ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${isClientMode ? "text-slate-900" : "text-slate-400"}`}>
              Client
            </span>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <MainNav
            tabs={tabs.map((tab) => ({
              ...tab,
              accentClass: tabStyles[tab.id as keyof typeof tabStyles],
            }))}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="p-6 md:p-8 bg-slate-50/50 min-h-[500px] space-y-6">
            {activeTab === "methodology" && <MethodologyView phases={PRODUCTION_PHASES} />}

            {activeTab === "team" && <TeamPlanner writers={writerLoad} clientMode={isClientMode} />}

            {activeTab === "budget" && <BudgetView analysis={analysisWithDisplay} quarters={quarterBuckets} />}

            {activeTab === "efficiency" && (
              <EfficiencyView
                defense={defenseAnalysis}
                defendHourlyRate={defendHourlyRate}
                defendWPH={defendWPH}
                marketPerWord={marketPerWord}
                onRateChange={setDefendHourlyRate}
                onWphChange={setDefendWPH}
                onMarketChange={setMarketPerWord}
                replacementRoles={REPLACEMENT_ROLES}
              />
            )}

            {activeTab === "politics" && (
              <PoliticsView stakeholderLoad={stakeholderLoad} clientMode={isClientMode} />
            )}

            {activeTab === "mandates" && <MandateView projects={analysisWithDisplay} />}

            {activeTab === "status" && (
              <ProjectStatusView
                columns={statusColumns}
                statusBuckets={statusBuckets}
                orphanedAssets={ORPHANED_ASSETS}
              />
            )}

            {activeTab === "estimator" && (
              <EstimatorView
                inputs={estimatorInputs}
                onChange={handleEstimatorChange}
                onEstimate={handleEstimate}
                result={estimatorResult}
                clientMode={isClientMode}
              />
            )}

            {activeTab === "resourcing" && (
              isClientMode ? (
                <CapacityGapView {...CAPACITY_GAP_STATS} />
              ) : (
                <PurgeView ghostCapacity={LEGACY_GHOST_CAPACITY} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
