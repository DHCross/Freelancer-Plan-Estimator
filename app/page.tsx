"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import {
  AlertTriangle,
  Briefcase,
  Calculator,
  Calendar,
  ClipboardList,
  DollarSign,
  FileText,
  Ghost,
  Users,
  Gauge,
  BarChart3,
  BookOpen,
  Lightbulb,
  Wrench,
  Map as MapIcon,
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

// Layout Components
import { AppLayout, PrimaryTab } from "@/components/layout";
import { TabSidebar, HelpLink } from "@/components/layout/TabSidebar";

// Dashboard Components
import {
  BudgetView,
  CapacityGapView,
  DashboardView,
  EfficiencyView,
  MethodologyView,
  ProjectStatusView,
  PurgeView,
  TeamPlanner,
  DossierView,
  CartographyPlanner,
} from "@/components/dashboard";
import { ScenarioWorkspace } from "@/components/dashboard/scenarios/ScenarioWorkspace";
import { FailureAnalysis } from "@/components/dashboard/FailureAnalysis";
import { TeamConfiguration } from "@/components/dashboard/TeamConfiguration";
import { TeamManagement } from "@/components/dashboard/TeamManagement";
import { QuickEstimator } from "@/components/dashboard/QuickEstimator";
import { EstimatorBuckets } from "@/components/dashboard/EstimatorBuckets";
import { FinancialModel } from "@/components/dashboard/FinancialModel";
import { ReportExport } from "@/components/dashboard/ReportExport";
import { EmployeeEstimateReport } from "@/components/dashboard/EmployeeEstimateReport";
import { ResourceValidationHub } from "@/components/dashboard/ResourceValidationHub";
import { IntegratedScenarioEngine } from "@/components/dashboard/IntegratedScenarioEngine";
import { IntegratedFinancialModel } from "@/components/dashboard/IntegratedFinancialModel";
import { ProductProvider } from "@/lib/ProductContext";
import { ProductListingView } from "@/components/dashboard/ProductListingView";
import { EnhancedEstimatorTools } from "@/components/dashboard/EnhancedEstimatorTools";
import { DeadlineEstimator } from "@/components/dashboard/DeadlineEstimator";
import { TeamLoadProvider, useTeamLoad } from "@/lib/TeamLoadContext";

// ============================================================================
// SIDEBAR CONFIGURATION BY TAB
// ============================================================================

const getSidebarConfig = (primaryTab: PrimaryTab, isClientMode: boolean, bottleneckCount: number) => {
  switch (primaryTab) {
    case "dashboard":
      return null; // No sidebar for dashboard

    case "planning":
      return {
        sections: [
          {
            id: "planning-tools",
            label: "Planning Tools",
            description: "Resource allocation and scheduling",
            items: [
              { id: "integrated", label: "Resource Validation", icon: Gauge, description: "Team capacity & conflicts" },
              { id: "scenarios", label: "Scenario Engine", icon: Lightbulb, description: "What-if analysis" },
              { id: "status", label: "Task Board", icon: ClipboardList, description: "Execution Kanban" },
            ],
            defaultExpanded: true,
          },
          {
            id: "projects",
            label: "Projects",
            description: "Product catalog and budgets",
            items: [
              { id: "products", label: "Product Listing", icon: Briefcase },
              { id: "budget", label: "Budget & Timeline", icon: Calendar },
              { id: "cartography", label: "Cartography", icon: MapIcon },
            ],
            defaultExpanded: true,
          },
        ],
      };

    case "team":
      return {
        sections: [
          {
            id: "team-overview",
            label: "Team Overview",
            items: [
              { 
                id: "team-overview", 
                label: "Who Does What", 
                icon: Users,
                badge: bottleneckCount > 0 ? bottleneckCount.toString() : undefined,
                badgeColor: "red" as const,
              },
              { id: "teambuilder", label: "Team Builder", icon: Wrench },
              { 
                id: "team-health", 
                label: "Team Health", 
                icon: isClientMode ? AlertTriangle : Ghost,
              },
            ],
            defaultExpanded: true,
          },
          ...(!isClientMode ? [{
            id: "estimation",
            label: "Estimation Tools",
            items: [
              { id: "estimator-tools", label: "Estimator Tools", icon: Calculator },
              { id: "my-estimate", label: "My Estimate", icon: BarChart3 },
            ],
            defaultExpanded: true,
          }] : []),
        ],
      };

    case "finance":
      return {
        sections: [
          {
            id: "financial",
            label: "Financial Analysis",
            items: [
              { id: "financial-model", label: "Financial Model", icon: DollarSign },
              { id: "cost-savings", label: "Cost Savings", icon: Calculator },
            ],
            defaultExpanded: true,
          },
        ],
      };

    case "reports":
      return {
        sections: [
          {
            id: "outputs",
            label: "Reports & Exports",
            description: "Client-ready outputs and retrospectives",
            items: [
              { id: "dossier", label: "Dossier", icon: BookOpen },
              { id: "deadline-estimator", label: "Deadline Estimator", icon: Calendar },
              { id: "export-report", label: "Export Report", icon: FileText },
              { id: "lessons-learned", label: "Lessons Learned", icon: Lightbulb },
            ],
            defaultExpanded: true,
          },
        ],
      };

    default:
      return null;
  }
};

// ============================================================================
// DEFAULT SUB-VIEWS PER TAB
// ============================================================================

const DEFAULT_SUBVIEWS: Record<PrimaryTab, string> = {
  dashboard: "dashboard",
  planning: "integrated",
  team: "team-overview",
  finance: "financial-model",
  reports: "dossier",
};

// ============================================================================
// ESTIMATOR DEFAULTS
// ============================================================================

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
];

// ============================================================================
// STATUS COLUMN CONFIG
// ============================================================================

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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function DashboardPageContent() {
  // ========== AUTH STATE ==========
  const passcode = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD ?? "hoskbrew";
  const [isAuthed, setIsAuthed] = useState(() => {
    if (process.env.NODE_ENV === "development") return true;
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("hoskbrew_authed") === "true";
  });
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  // ========== MODE & NAVIGATION STATE ==========
  const [isClientMode, setIsClientMode] = useState(false);
  const [primaryTab, setPrimaryTab] = useState<PrimaryTab>("dashboard");
  const [subView, setSubView] = useState("dashboard");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  // ========== DATA STATE ==========
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

  // ========== ESTIMATOR STATE ==========
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

  // Team workspace view state
  const [teamWorkspaceView, setTeamWorkspaceView] = useState<"quick" | "advanced">("quick");

  // ========== TEAM LOAD CONTEXT ==========
  const { getTeamTotalHours } = useTeamLoad();

  // ========== COMPUTED VALUES ==========
  const projectsWithDisplay = useMemo<ProjectWithDisplay[]>(
    () =>
      projects.map((project: Project) => ({
        ...project,
        displayStatus: isClientMode ? project.clientStatus : project.internalStatus,
        displayType: isClientMode ? project.clientType : project.type,
      })),
    [projects, isClientMode]
  );

  const writerLoad = useMemo(
    () => calculateAnnualLoad(projectsWithDisplay, teamRoster),
    [projectsWithDisplay, teamRoster]
  );

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

  const teamWeeklyCapacity = useMemo(
    () => teamRoster.reduce((sum, member) => sum + (member.weeklyCapacity || 0), 0),
    [teamRoster]
  );

  const totalAssemblyHours = useMemo(
    () => writerLoad.reduce((sum, writer) => sum + writer.totalHours, 0),
    [writerLoad]
  );

  // Calculate bottleneck count for sidebar badges
  const bottleneckCount = useMemo(() => {
    return writerLoad.filter((member) => {
      const injected = getTeamTotalHours(member.id);
      const percent = member.annualCapacity
        ? ((member.totalHours + injected) / member.annualCapacity) * 100
        : 0;
      return percent > 100;
    }).length;
  }, [writerLoad, getTeamTotalHours]);

  // ========== HANDLERS ==========
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

  const handleModeToggle = () => {
    setIsTransitioning(true);
    setIsClientMode((prev) => !prev);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleTabChange = (tab: PrimaryTab) => {
    setPrimaryTab(tab);
    setSubView(DEFAULT_SUBVIEWS[tab]);
  };

  const handleNavigate = useCallback((tab: string, subTab?: string) => {
    const validTab = tab as PrimaryTab;
    if (["dashboard", "planning", "team", "finance", "reports"].includes(tab)) {
      setPrimaryTab(validTab);
      if (subTab) {
        setSubView(subTab);
      } else {
        setSubView(DEFAULT_SUBVIEWS[validTab]);
      }
    }
  }, []);

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

  const handleProjectUpdate = (projectId: number, field: keyof Project, value: string | number) => {
    setProjects((prev: Project[]) =>
      prev.map((project: Project) =>
        project.id === projectId ? { ...project, [field]: value } : project
      )
    );
  };

  const handleMetricsUpdate = (field: keyof Metrics, value: number) => {
    setMetrics((prev: Metrics) => ({ ...prev, [field]: value }));
  };

  // ========== PERSISTENCE ==========
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

  // ========== SIDEBAR CONFIGURATION ==========
  const sidebarConfig = getSidebarConfig(primaryTab, isClientMode, bottleneckCount);

  const renderSidebar = () => {
    if (!sidebarConfig) return null;

    return (
      <TabSidebar
        sections={sidebarConfig.sections}
        activeItem={subView}
        onItemChange={setSubView}
        footer={
          <HelpLink onClick={() => handleNavigate("planning", "methodology")} />
        }
      />
    );
  };

  // ========== AUTH SCREEN ==========
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
              This dashboard contains sensitive staffing and budget data.
            </p>
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

  // ========== MAIN CONTENT RENDER ==========
  const renderContent = () => {
    const contentClass = `transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`;

    // Dashboard Tab
    if (primaryTab === "dashboard") {
      return (
        <div className={contentClass}>
          <DashboardView
            writers={writerLoad}
            analysis={analysisWithDisplay}
            clientMode={isClientMode}
            getInjectedHours={getTeamTotalHours}
            onNavigate={handleNavigate}
            totalBudgetExposure={analysis.reduce((sum, p) => sum + (p.estCost || 0), 0)}
          />
        </div>
      );
    }

    // Planning Tab
    if (primaryTab === "planning") {
      return (
        <div className={contentClass}>
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-4">
            <span>Planning</span>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">
              {subView === "integrated" && "Resource Validation"}
              {subView === "scenarios" && "Scenario Engine"}
              {subView === "status" && "Task Board"}
              {subView === "products" && "Product Listing"}
              {subView === "budget" && "Budget & Timeline"}
              {subView === "methodology" && "How We Build"}
              {subView === "cartography" && "Cartography Planner"}
            </span>
          </div>

          {subView === "methodology" && (
            <MethodologyView
              phases={PRODUCTION_PHASES}
              clientMode={isClientMode}
              portfolioAssemblyHours={totalAssemblyHours}
              teamWeeklyCapacity={teamWeeklyCapacity}
            />
          )}

          {subView === "integrated" && (
            <div className="space-y-8">
              <ResourceValidationHub clientMode={isClientMode} />
              <IntegratedScenarioEngine clientMode={isClientMode} />
              <IntegratedFinancialModel clientMode={isClientMode} />
            </div>
          )}

          {subView === "scenarios" && <ScenarioWorkspace clientMode={isClientMode} projects={projects} />}

          {subView === "status" && (
            <ProjectStatusView
              columns={statusColumns}
              statusBuckets={statusBuckets}
              orphanedAssets={ORPHANED_ASSETS}
            />
          )}

          {subView === "products" && (
            <ProductProvider initialProducts={projects} onProductsChange={(p) => setProjects(p)}>
              <ProductListingView teamRoster={teamRoster} />
            </ProductProvider>
          )}

          {subView === "budget" && (
            <BudgetView
              analysis={analysisWithDisplay}
              quarters={quarterBuckets}
              clientMode={isClientMode}
              onProjectUpdate={handleProjectUpdate}
            />
          )}

          {subView === "cartography" && (
            <CartographyPlanner />
          )}
        </div>
      );
    }

    // Team Tab
    if (primaryTab === "team") {
      return (
        <div className={contentClass}>
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-4">
            <span>Team</span>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">
              {subView === "team-overview" && "Who Does What"}
              {subView === "teambuilder" && "Team Builder"}
              {subView === "team-health" && "Team Health"}
              {subView === "estimator-tools" && "Estimator Tools"}
              {subView === "my-estimate" && "My Estimate"}
            </span>
          </div>

          {subView === "team-overview" && (
            <TeamPlanner writers={writerLoad} clientMode={isClientMode} />
          )}

          {subView === "teambuilder" && (
            <div className="space-y-6">
              <TeamManagement
                teamMembers={teamRoster}
                onUpdateTeamMembers={handleTeamMemberUpdate}
                clientMode={isClientMode}
              />
              <TeamConfiguration clientMode={isClientMode} />
            </div>
          )}

          {subView === "team-health" && (
            isClientMode ? (
              <CapacityGapView {...CAPACITY_GAP_STATS} />
            ) : (
              <PurgeView ghostCapacity={LEGACY_GHOST_CAPACITY} />
            )
          )}

          {subView === "estimator-tools" && !isClientMode && (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-64 w-full">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estimator</p>
                    <h4 className="text-lg font-semibold text-slate-900 mt-1">Plan • Staff • Estimate</h4>
                  </div>
                  <div className="space-y-2">
                    {[
                      { id: "quick" as const, label: "Quick Estimate", description: "Push button • Get timeline" },
                      { id: "advanced" as const, label: "Advanced Estimate", description: "Dial in scope, roles, and exports" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setTeamWorkspaceView(item.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          teamWorkspaceView === item.id
                            ? "bg-indigo-50 border-indigo-200 text-indigo-900"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <div className="font-semibold">{item.label}</div>
                        <p className="text-sm mt-1 text-slate-500">{item.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                {teamWorkspaceView === "quick" && <QuickEstimator teamRoster={teamRoster} />}
                {teamWorkspaceView === "advanced" && (
                  <div className="space-y-6">
                    <EnhancedEstimatorTools
                      projects={projects}
                      teamRoster={teamRoster}
                      estimatorInputs={estimatorInputs}
                      estimatorResult={estimatorResult}
                      onInputChange={handleEstimatorChange}
                      onEstimate={handleEstimate}
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

          {subView === "my-estimate" && !isClientMode && (
            <EmployeeEstimateReport
              projects={analysisWithDisplay}
              metrics={metrics}
              teamRoster={teamRoster}
              clientMode={isClientMode}
            />
          )}
        </div>
      );
    }

    // Finance Tab
    if (primaryTab === "finance") {
      return (
        <div className={contentClass}>
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-4">
            <span>Finance</span>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">
              {subView === "financial-model" && "Financial Model"}
              {subView === "cost-savings" && "Cost Savings"}
            </span>
          </div>

          {subView === "financial-model" && <FinancialModel defaultDevCost={20000} />}

          {subView === "cost-savings" && (
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
        </div>
      );
    }

    // Reports Tab
    if (primaryTab === "reports") {
      return (
        <div className={contentClass}>
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-4">
            <span>Reports</span>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">
              {subView === "dossier" && "Dossier"}
              {subView === "deadline-estimator" && "Deadline Estimator"}
              {subView === "export-report" && "Export Report"}
              {subView === "lessons-learned" && "Lessons Learned"}
            </span>
          </div>

          {subView === "dossier" && (
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

          {subView === "deadline-estimator" && (
            <DeadlineEstimator
              projects={analysisWithDisplay}
              teamRoster={teamRoster}
              metrics={metrics}
              onUpdateProject={handleProjectUpdate}
            />
          )}

          {subView === "export-report" && (
            <ReportExport
              projects={analysisWithDisplay}
              metrics={metrics}
              teamRoster={teamRoster}
              clientMode={isClientMode}
            />
          )}

          {subView === "lessons-learned" && <FailureAnalysis clientMode={isClientMode} />}
        </div>
      );
    }

    return null;
  };

  // ========== MAIN RENDER ==========
  return (
    <AppLayout
      activeTab={primaryTab}
      onTabChange={handleTabChange}
      isClientMode={isClientMode}
      onModeToggle={handleModeToggle}
      onExport={handleExportData}
      onImport={handleImportData}
      sidebar={renderSidebar()}
      isPresentationMode={isPresentationMode}
      onTogglePresentation={() => setIsPresentationMode(!isPresentationMode)}
    >
      {renderContent()}
    </AppLayout>
  );
}

// ============================================================================
// WRAPPER WITH PROVIDERS
// ============================================================================

export default function DashboardPage() {
  return (
    <TeamLoadProvider>
      <DashboardPageContent />
    </TeamLoadProvider>
  );
}
