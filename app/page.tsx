"use client";

import { useMemo, useState, useEffect } from "react";
import {
  AlertTriangle,
  Briefcase,
  Calculator,
  ClipboardList,
  Cpu,
  DollarSign,
  Download,
  FileText,
  Ghost,
  Timer,
  Upload,
  User,
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
  TEAM_ROSTER,
} from "@/lib/constants";
import {
  bucketByQuarter,
  calculateAnnualLoad,
  calculateDefenseAnalysis,
  calculateProjectAnalysis,
  runEstimator,
} from "@/lib/calculations";
import type { DisplayProject, EstimatorResult, ProjectWithDisplay, Project, Metrics, TeamMember, EstimationBucketEntry } from "@/lib/types";
import { MainNav } from "@/components/MainNav";
import {
  BudgetView,
  CapacityGapView,
  EfficiencyView,
  EstimatorView,
  MandateView,
  MethodologyView,
  ProjectStatusView,
  PurgeView,
  TeamPlanner,
  DossierView,
} from "@/components/dashboard";
import { ScenarioEngine } from "@/components/dashboard/ScenarioEngine";
import { FailureAnalysis } from "@/components/dashboard/FailureAnalysis";
import { TeamConfiguration } from "@/components/dashboard/TeamConfiguration";
import { TeamManagement } from "@/components/dashboard/TeamManagement";
import { QuickEstimator } from "@/components/dashboard/QuickEstimator";
import { EstimatorBuckets } from "@/components/dashboard/EstimatorBuckets";
import { FinancialModel } from "@/components/dashboard/FinancialModel";
import { ReportExport } from "@/components/dashboard/ReportExport";
import { EmployeeEstimateReport } from "@/components/dashboard/EmployeeEstimateReport";

const INTERNAL_TAB_STYLES = {
  methodology: "text-indigo-700 bg-indigo-50 border-indigo-600",
  team: "text-blue-700 bg-blue-50 border-blue-600",
  products: "text-teal-700 bg-teal-50 border-teal-600",
  efficiency: "text-purple-700 bg-purple-50 border-purple-600",
  status: "text-rose-700 bg-rose-50 border-rose-600",
  resourcing: "text-red-700 bg-red-50 border-red-600",
  scenarios: "text-emerald-700 bg-emerald-50 border-emerald-600",
  failures: "text-amber-700 bg-amber-50 border-amber-600",
  teamworkspace: "text-cyan-700 bg-cyan-50 border-cyan-600",
  financials: "text-emerald-900 bg-emerald-100 border-emerald-600",
  report: "text-violet-700 bg-violet-50 border-violet-600",
  estimate: "text-teal-700 bg-teal-50 border-teal-600",
};

const CLIENT_TAB_STYLES = {
  ...INTERNAL_TAB_STYLES,
  resourcing: "text-amber-700 bg-amber-50 border-amber-600",
};

type TeamWorkspaceView = "quick" | "advanced";

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
    internalLabel: "Critical Product Lines",
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

const DEFAULT_ESTIMATION_BUCKETS: EstimationBucketEntry[] = [
  {
    id: "example-a1-martin-writing",
    projectName: "A1: Narrative Finish",
    activity: "Draft new scenes (Martin)",
    roleLabel: "Writing",
    teamMemberId: "martin",
    teamMemberName: "Martin",
    hours: 120,
    days: 30,
  },
  {
    id: "example-a1-dan-editing",
    projectName: "A1: Narrative Finish",
    activity: "Development edit pass (Dan)",
    roleLabel: "Editing",
    teamMemberId: "dan",
    teamMemberName: "Dan",
    hours: 40,
    days: 10,
  },
  {
    id: "example-gmguide-dan-writing",
    projectName: "Core System GM Guide",
    activity: "Draft GM tools chapter (Dan)",
    roleLabel: "Writing",
    teamMemberId: "dan",
    teamMemberName: "Dan",
    hours: 80,
    days: 20,
  },
];

export default function DashboardPage() {
  const passcode = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD ?? "hoskbrew";
  const [isClientMode, setIsClientMode] = useState(false);
  const [activeTab, setActiveTab] = useState("methodology");
  const [teamWorkspaceView, setTeamWorkspaceView] = useState<TeamWorkspaceView>("quick");

  // Load saved data from localStorage on mount
  const [projects, setProjects] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hoskbrew_projects");
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    }
    return INITIAL_PROJECTS;
  });

  const [metrics, setMetrics] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hoskbrew_metrics");
      return saved ? JSON.parse(saved) : DEFAULT_METRICS;
    }
    return DEFAULT_METRICS;
  });
  const [isAuthed, setIsAuthed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("hoskbrew_authed") === "true";
  });
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [defendHourlyRate, setDefendHourlyRate] = useState(20);
  const [defendWPH, setDefendWPH] = useState(250);
  const [marketPerWord, setMarketPerWord] = useState(0.08);

  const [estimatorInputs, setEstimatorInputs] = useState({
    activity: "A1: Draft new section",
    totalWords: 20000,
    draftSpeed: 400,
    bufferPercent: 30,
    dailyHours: 4,
    teamMemberId: "martin",
    projectName: "A1: Narrative Finish",
    roleLabel: "Writing",
  });
  const [estimatorResult, setEstimatorResult] = useState<EstimatorResult | null>(null);

  // Dynamic team roster state
  const [teamRoster, setTeamRoster] = useState<TeamMember[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hoskbrew_team_roster");
      return saved ? JSON.parse(saved) : TEAM_ROSTER;
    }
    return TEAM_ROSTER;
  });

  const [estimationBuckets, setEstimationBuckets] = useState<EstimationBucketEntry[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hoskbrew_estimation_buckets");
      return saved ? JSON.parse(saved) : DEFAULT_ESTIMATION_BUCKETS;
    }
    return DEFAULT_ESTIMATION_BUCKETS;
  });

  const handleAuth = (event: React.FormEvent) => {
    event.preventDefault();
    if (password.trim() === passcode) {
      setIsAuthed(true);
      setAuthError(null);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("hoskbrew_authed", "true");
      }
    } else {
      setAuthError("Incorrect password.");
    }
  };

  const projectsWithDisplay = useMemo<ProjectWithDisplay[]>(
    () =>
      projects.map((project: Project) => ({
        ...project,
        displayStatus: isClientMode ? project.clientStatus : project.internalStatus,
        displayType: isClientMode ? project.clientType : project.type,
      })),
    [projects, isClientMode]
  );

  const writerLoad = useMemo(() => calculateAnnualLoad(projectsWithDisplay, teamRoster), [projectsWithDisplay, teamRoster]);

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

  // Aggregate total execution hours across all active projects (assembly load)
  const totalAssemblyHours = useMemo(
    () => writerLoad.reduce((sum, writer) => sum + writer.totalHours, 0),
    [writerLoad]
  );

  // Current team weekly capacity (used for converting hours into weeks/months)
  const teamWeeklyCapacity = useMemo(
    () => teamRoster.reduce((sum, member) => sum + (member.weeklyCapacity || 0), 0),
    [teamRoster]
  );

  // Baseline scenario configuration for Scenario Engine, derived from current plan
  const baselineScenarioConfig = useMemo(() => {
    // Aggregate total words across active projects
    const totalWords = projects.reduce((sum: number, project: Project) => sum + (project.targetWords || 0), 0);

    // Sum estimated cost from analysis (already includes contingency + blended rate)
    const totalEstCost = analysis.reduce((sum, project) => sum + (project.estCost || 0), 0);
    const baselineBudget = Math.round(totalEstCost);

    // Derive timeline from total hours vs team weekly capacity
    const totalHours = writerLoad.reduce((sum, writer) => sum + writer.totalHours, 0);
    const totalWeeklyCapacity = writerLoad.reduce((sum, writer) => sum + (writer.weeklyCapacity || 0), 0);

    let timelineMonths = 6;
    if (totalWeeklyCapacity > 0 && totalHours > 0) {
      const weeksNeeded = totalHours / totalWeeklyCapacity;
      timelineMonths = Math.max(1, Math.ceil(weeksNeeded / 4));
    }

    // Team size = active contributors with non-zero weekly capacity
    const teamSize = teamRoster.filter((member) => member.weeklyCapacity > 0).length || 1;

    // Snap word count to the buckets used by ScenarioEngine's selector
    const wordBuckets = [
      { value: 15000, max: 30000 },
      { value: 50000, max: 75000 },
      { value: 100000, max: 130000 },
      { value: 150000, max: Infinity },
    ];

    const snappedWordCount = (() => {
      if (!totalWords) return 50000;
      const bucket = wordBuckets.find((b) => totalWords <= b.max);
      return bucket?.value ?? 150000;
    })();

    // Complexity heuristic based on total scope
    const complexity: "simple" | "standard" | "complex" =
      totalWords <= 30000 ? "simple" : totalWords <= 100000 ? "standard" : "complex";

    // Default to professional quality as baseline from your compensation docs
    const quality: "basic" | "professional" | "premium" = "professional";

    return {
      teamSize,
      budget: baselineBudget || 25000,
      timeline: timelineMonths,
      wordCount: snappedWordCount,
      complexity,
      quality,
    };
  }, [projects, analysis, writerLoad, teamRoster]);

  const defenseAnalysis = useMemo(
    () => calculateDefenseAnalysis(defendHourlyRate, defendWPH, marketPerWord),
    [defendHourlyRate, defendWPH, marketPerWord]
  );

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
    { id: "methodology", label: "How We Build", icon: Cpu },
    { id: "team", label: "Who Does What", icon: Users },
    { id: "products", label: "Product Listing", icon: Briefcase },
    { id: "budget", label: "Budget & Plan", icon: DollarSign },
    { id: "efficiency", label: "Cost Savings", icon: Calculator },
    {
      id: "resourcing",
      label: "Team Health",
      icon: isClientMode ? AlertTriangle : Ghost,
    },
    // Internal-only deep-dive tabs
    ...(!isClientMode
      ? [
        { id: "status", label: "Task Board", icon: ClipboardList },
        { id: "scenarios", label: "What-If Lab", icon: Calculator },
        { id: "failures", label: "Lessons Learned", icon: AlertTriangle },
        { id: "teambuilder", label: "Team Builder", icon: Users },
        { id: "teamworkspace", label: "Estimator Tools", icon: Users },
        { id: "dossier", label: "Dossier", icon: ClipboardList },
        { id: "financials", label: "Financial Model", icon: DollarSign },
        { id: "estimate", label: "My Estimate", icon: User },
        { id: "report", label: "Export Report", icon: FileText },
      ]
      : []),
  ];

  const teamWorkspaceNav: { id: TeamWorkspaceView; label: string; description: string }[] = [
    {
      id: "quick",
      label: "Quick Estimate",
      description: "Push button • Get timeline",
    },
    {
      id: "advanced",
      label: "Advanced Estimate",
      description: "Dial in scope, roles, and exports",
    },
  ];

  const tabStyles = isClientMode ? CLIENT_TAB_STYLES : INTERNAL_TAB_STYLES;

  const handleEstimatorChange = (field: keyof typeof estimatorInputs, value: string | number) => {
    setEstimatorInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleEstimate = () => {
    const result = runEstimator(estimatorInputs, teamRoster);
    setEstimatorResult(result);

    const member = estimatorInputs.teamMemberId
      ? teamRoster.find((m) => m.id === estimatorInputs.teamMemberId)
      : undefined;

    const projectName = (estimatorInputs.projectName || estimatorInputs.activity || "Untitled Project").trim();
    const roleLabel = (estimatorInputs.roleLabel || member?.role || "Unspecified").trim();

    const entry: EstimationBucketEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      projectName,
      activity: estimatorInputs.activity,
      roleLabel,
      teamMemberId: estimatorInputs.teamMemberId,
      teamMemberName: member?.name,
      hours: result.hours,
      days: result.days,
    };

    setEstimationBuckets((prev) => {
      return [
        ...prev.filter(
          (e) =>
            !(
              e.projectName === entry.projectName &&
              e.roleLabel === entry.roleLabel &&
              (e.teamMemberId || "") === (entry.teamMemberId || "")
            )
        ),
        entry,
      ];
    });
  };

  const handleTeamMemberUpdate = (updatedTeamMembers: TeamMember[]) => {
    setTeamRoster(updatedTeamMembers);
  };

  const handleProjectUpdate = (projectId: number, field: keyof Project, value: any) => {
    setProjects((prev: Project[]) => prev.map((project: Project) =>
      project.id === projectId ? { ...project, [field]: value } : project
    ));
  };

  const handleMetricsUpdate = (field: keyof Metrics, value: number) => {
    setMetrics((prev: Metrics) => ({ ...prev, [field]: value }));
  };

  const handleExportData = () => {
    const data = {
      projects,
      metrics,
      defendHourlyRate,
      defendWPH,
      marketPerWord,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hoskbrew-dashboard-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.projects) setProjects(data.projects);
        if (data.metrics) setMetrics(data.metrics);
        if (data.defendHourlyRate !== undefined) setDefendHourlyRate(data.defendHourlyRate);
        if (data.defendWPH !== undefined) setDefendWPH(data.defendWPH);
        if (data.marketPerWord !== undefined) setMarketPerWord(data.marketPerWord);
      } catch (error) {
        console.error("Failed to import data:", error);
        alert("Invalid file format. Please export a valid dashboard file first.");
      }
    };
    reader.readAsText(file);
  };

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hoskbrew_projects", JSON.stringify(projects));
    }
  }, [projects]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hoskbrew_metrics", JSON.stringify(metrics));
    }
  }, [metrics]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hoskbrew_team_roster", JSON.stringify(teamRoster));
    }
  }, [teamRoster]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hoskbrew_estimation_buckets", JSON.stringify(estimationBuckets));
    }
  }, [estimationBuckets]);

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
        <form
          onSubmit={handleAuth}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-sm space-y-6 shadow-2xl"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Hoskbrew Access</p>
            <h1 className="text-2xl font-bold mt-2">Enter the production passcode</h1>
            <p className="text-sm text-slate-400 mt-1">
              This dashboard contains sensitive staffing and budget data. Share the passphrase only with cleared partners.
            </p>
            <div className="mt-4 flex items-center gap-3 bg-white border border-slate-200 rounded-full px-3 py-2 w-max">
              <span className={`text-xs font-semibold ${!isClientMode ? "text-slate-900" : "text-slate-400"}`}>
                Internal
              </span>
              <button
                onClick={() => setIsClientMode((prev) => !prev)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${isClientMode ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                aria-label="Toggle client mode"
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-all duration-300 ${isClientMode ? "translate-x-7" : "translate-x-0"
                    }`}
                />
              </button>
              <span className={`text-xs font-semibold ${isClientMode ? "text-slate-900" : "text-slate-400"}`}>
                Client
              </span>
            </div>
          </div>
          <label className="block text-sm font-medium text-slate-200">
            Passcode
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </label>
          {authError && <p className="text-sm text-rose-400">{authError}</p>}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-2.5 rounded-lg transition"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

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
          {!isClientMode && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                <span className={`text-xs font-semibold text-slate-900`}>Internal</span>
                <button
                  onClick={() => setIsClientMode((prev) => !prev)}
                  className={`relative w-14 h-7 rounded-full transition-colors bg-slate-300`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform translate-x-0`}
                  />
                </button>
                <span className={`text-xs font-semibold text-slate-400`}>Client</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm">
                <button
                  onClick={handleExportData}
                  className="flex items-center gap-1 px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100 transition-colors"
                  title="Export dashboard data"
                >
                  <Download className="w-3 h-3" />
                  Export
                </button>

                <label className="flex items-center gap-1 px-2 py-1 text-xs bg-emerald-50 text-emerald-600 rounded hover:bg-emerald-100 transition-colors cursor-pointer" title="Import dashboard data">
                  <Upload className="w-3 h-3" />
                  Import
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportData}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </header>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-64 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/50 p-4">
              <MainNav
                tabs={tabs.map((tab) => ({
                  ...tab,
                  accentClass: tabStyles[tab.id as keyof typeof tabStyles],
                }))}
                activeTab={activeTab}
                onChange={setActiveTab}
                orientation="vertical"
              />
            </div>

            <div className="flex-1 p-6 md:p-8 bg-slate-50/50 min-h-[500px] space-y-6">
              {activeTab === "methodology" && (
                <MethodologyView
                  phases={PRODUCTION_PHASES}
                  clientMode={isClientMode}
                  portfolioAssemblyHours={totalAssemblyHours}
                  teamWeeklyCapacity={teamWeeklyCapacity}
                />
              )}

              {activeTab === "team" && <TeamPlanner writers={writerLoad} clientMode={isClientMode} />}

              {activeTab === "products" && (
                <MandateView projects={analysisWithDisplay} clientMode={isClientMode} />
              )}

              {activeTab === "budget" && (
                <BudgetView
                  analysis={analysisWithDisplay}
                  quarters={quarterBuckets}
                  clientMode={isClientMode}
                  onProjectUpdate={handleProjectUpdate}
                />
              )}

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
                  metrics={metrics}
                  onMetricsUpdate={handleMetricsUpdate}
                />
              )}

              {/* Only show Reality Tracker/Execution Kanban in Internal mode */}
              {!isClientMode && activeTab === "status" && (
                <ProjectStatusView
                  columns={statusColumns}
                  statusBuckets={statusBuckets}
                  orphanedAssets={ORPHANED_ASSETS}
                />
              )}

              {activeTab === "resourcing" && (
                isClientMode ? (
                  <CapacityGapView {...CAPACITY_GAP_STATS} />
                ) : (
                  <PurgeView ghostCapacity={LEGACY_GHOST_CAPACITY} />
                )
              )}

              {/* New analysis tabs - internal only */}
              {!isClientMode && activeTab === "scenarios" && (
                <ScenarioEngine clientMode={isClientMode} initialConfig={baselineScenarioConfig} />
              )}

              {!isClientMode && activeTab === "failures" && (
                <FailureAnalysis clientMode={isClientMode} />
              )}

              {!isClientMode && activeTab === "teambuilder" && (
                <div className="space-y-6">
                  <TeamManagement
                    teamMembers={teamRoster}
                    onUpdateTeamMembers={handleTeamMemberUpdate}
                    clientMode={isClientMode}
                  />
                  <TeamConfiguration clientMode={isClientMode} />
                </div>
              )}

              {!isClientMode && activeTab === "teamworkspace" && (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-64 w-full">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 space-y-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Team Workspace</p>
                        <h4 className="text-lg font-semibold text-slate-900 mt-1">Plan • Staff • Estimate</h4>
                      </div>
                      <div className="space-y-2">
                        {teamWorkspaceNav.map((item) => {
                          const isActive = teamWorkspaceView === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => setTeamWorkspaceView(item.id)}
                              className={`w-full text-left p-4 rounded-xl border transition-all ${isActive
                                ? "bg-indigo-50 border-indigo-200 text-indigo-900"
                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                }`}
                            >
                              <div className="font-semibold">{item.label}</div>
                              <p className="text-sm mt-1 text-slate-500">{item.description}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    {teamWorkspaceView === "quick" && <QuickEstimator teamRoster={teamRoster} />}
                    {teamWorkspaceView === "advanced" && (
                      <div className="space-y-6">
                        <EstimatorView
                          inputs={estimatorInputs}
                          onChange={handleEstimatorChange}
                          onEstimate={handleEstimate}
                          result={estimatorResult}
                          clientMode={isClientMode}
                          teamRoster={teamRoster}
                        />
                        <EstimatorBuckets
                          entries={estimationBuckets}
                          onRemove={(id: string) =>
                            setEstimationBuckets((prev) => prev.filter((entry) => entry.id !== id))
                          }
                          onClear={() => setEstimationBuckets([])}
                          clientMode={isClientMode}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {!isClientMode && activeTab === "dossier" && (
                <DossierView
                  analysis={analysisWithDisplay}
                  metrics={metrics}
                  defense={defenseAnalysis}
                  defendHourlyRate={defendHourlyRate}
                  defendWPH={defendWPH}
                  marketPerWord={marketPerWord}
                  teamWeeklyCapacity={teamWeeklyCapacity}
                />
              )}

              {!isClientMode && activeTab === "financials" && (
                <FinancialModel defaultDevCost={20000} />
              )}

              {!isClientMode && activeTab === "report" && (
                <ReportExport
                  projects={analysisWithDisplay}
                  metrics={metrics}
                  teamRoster={teamRoster}
                  clientMode={isClientMode}
                />
              )}

              {!isClientMode && activeTab === "estimate" && (
                <EmployeeEstimateReport
                  projects={analysisWithDisplay}
                  metrics={metrics}
                  teamRoster={teamRoster}
                  clientMode={isClientMode}
                />
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
