

import { useMemo, useState, useEffect } from "react";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Target,
  Clock,
  Briefcase,
  Pencil
} from "lucide-react";
import { WriterLoad, DisplayProject } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { MetricCard, MetricStrip } from "./MetricCard";
import { BottleneckAlert, AlertBanner } from "./AlertBanner";
import { TeamGrid } from "./CollapsibleTeamCard";

interface DashboardViewProps {
  writers: WriterLoad[];
  analysis: DisplayProject[];
  clientMode?: boolean;
  getInjectedHours?: (memberId: string) => number;
  onNavigate?: (tab: string, subTab?: string) => void;
  // Financial data
  totalBudgetExposure?: number;
}

export function DashboardView({
  writers,
  analysis,
  clientMode = false,
  getInjectedHours,
  onNavigate,
  totalBudgetExposure = 0,
}: DashboardViewProps) {
  // Check for active execution set
  const hasActiveExecution = useMemo(() => {
    // Logic: Products in lifecycle_state = Production
    // Note: We don't have direct access to task status here easily without deep inspection,
    // but the primary gate is 'Production' lifecycle state.
    return analysis.some(p => p.lifecycleState === "Production");
  }, [analysis]);

  // First-run onboarding hint
  const [showOnboarding, setShowOnboarding] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = localStorage.getItem("production_health_onboarding_dismissed");
      if (!dismissed) {
        setShowOnboarding(true);
      }
    }
  }, []);

  const handleDismissOnboarding = () => {
    localStorage.setItem("production_health_onboarding_dismissed", "true");
    setShowOnboarding(false);
  };

  // Calculate key metrics
  const teamMetrics = useMemo((): {
    overallLoad: number;
    bottleneckMember: WriterLoad | null;
    bottleneckPercent: number;
    bottleneckCount: number;
    hasBottleneck: boolean;
  } => {
    let totalCapacity = 0;
    let totalAssigned = 0;
    let bottleneckMember: WriterLoad | null = null;
    let bottleneckPercent = 0;
    let bottleneckCount = 0;

    writers.forEach((member) => {
      const injected = getInjectedHours?.(member.id) || 0;
      const assigned = member.committedHours + injected;
      const capacity = member.annualCapacity || 0;
      const percent = capacity > 0 ? (assigned / capacity) * 100 : 0;

      totalCapacity += capacity;
      totalAssigned += assigned;

      if (percent > 100) {
        bottleneckCount++;
      }

      if (percent > bottleneckPercent) {
        bottleneckPercent = percent;
        bottleneckMember = member;
      }
    });

    const overallLoad = totalCapacity > 0 ? Math.round((totalAssigned / totalCapacity) * 100) : 0;

    return {
      overallLoad,
      bottleneckMember,
      bottleneckPercent: Math.round(bottleneckPercent),
      bottleneckCount,
      hasBottleneck: bottleneckPercent > 100,
    };
  }, [writers, getInjectedHours]);

  // Find nearest deadline for ACTIVE production items only
  const nearestDeadline = useMemo((): { project: DisplayProject; daysUntil: number } | null => {
    if (!hasActiveExecution) return null;

    const now = new Date();
    let nearestProject: DisplayProject | null = null;
    let nearestDays = Infinity;

    analysis.forEach((project) => {
      // Only consider Production projects for deadlines in this dashboard
      if (project.lifecycleState === "Production" && project.targetDate) {
        const target = new Date(project.targetDate);
        const daysUntil = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysUntil > 0 && daysUntil < nearestDays) {
          nearestDays = daysUntil;
          nearestProject = project;
        }
      }
    });

    return nearestProject ? { project: nearestProject, daysUntil: nearestDays } : null;
  }, [analysis, hasActiveExecution]);

  // Calculate timeline extension if there's a bottleneck
  const timelineExtension = useMemo(() => {
    if (teamMetrics.bottleneckPercent > 100) {
      const baselineMonths = 12;
      return Math.round(((teamMetrics.bottleneckPercent - 100) / 100) * baselineMonths);
    }
    return 0;
  }, [teamMetrics.bottleneckPercent]);

  // Capacity status
  const capacityStatus = teamMetrics.overallLoad > 100 
    ? "critical" 
    : teamMetrics.overallLoad > 80 
    ? "warning" 
    : "healthy";

  // Personal capacity bar: total weekly hours available vs committed
  const personalCapacity = useMemo(() => {
    const total = writers.reduce((sum, w) => sum + w.weeklyCapacity, 0);
    // committedHours is annual, divide by 52 for weekly
    const committed = writers.reduce((sum, w) => {
      const injected = getInjectedHours?.(w.id) || 0;
      return sum + (w.committedHours + injected) / 52;
    }, 0);
    const pct = total > 0 ? Math.round((committed / total) * 100) : 0;
    return { total, committed, pct };
  }, [writers, getInjectedHours]);

  // Monthly income from active project pipeline — rateType-aware
  const TTRPG_PER_WORD_RATE = 0.08; // $0.08/word: standard TTRPG freelance rate
  const projectIncomeBreakdown = useMemo(() => {
    const active = analysis.filter(p => p.lifecycleState === "Production");
    let earned = 0;   // invoiceStatus === "paid"
    let pending = 0;  // invoiced or not-invoiced
    for (const p of active) {
      const client = writers.find(w => w.id === p.assignedTo);
      const hourlyRate = client?.hourlyRate ?? 0;
      let projectTotal = 0;
      if (p.rateType === "per-word") {
        // Use explicit per-word rate if set, otherwise fall back to TTRPG standard
        const perWordRate = p.rateAmount ?? TTRPG_PER_WORD_RATE;
        projectTotal = (p.targetWords || 0) * perWordRate / 12;
      } else if (p.rateType === "flat-fee") {
        // Use explicit flat-fee amount if set, otherwise estimate from hours × rate / 12
        projectTotal = p.rateAmount != null ? p.rateAmount / 12 : ((p.manualHours || 0) * hourlyRate) / 12;
      } else {
        // "hourly" — hours × rate / 12
        projectTotal = ((p.manualHours || 0) * (p.rateAmount ?? hourlyRate)) / 12;
      }
      if (p.invoiceStatus === "paid") {
        earned += projectTotal;
      } else {
        pending += projectTotal;
      }
    }
    return { earned, pending, total: earned + pending, count: active.length };
  }, [analysis, writers]);
  const projectMonthlyIncome = projectIncomeBreakdown.total;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header with Mode Badge */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">My Dashboard</h2>
            <div className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wide">
              Active Work Only
            </div>
          </div>
          <p className="text-slate-600 mt-1">
            {clientMode
              ? "Overview of project timelines and delivery confidence."
              : "Monitor your capacity, upcoming deadlines, and active client workload."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate?.("planning", "art-orders")}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
          >
            <Pencil className="w-4 h-4 text-slate-500" />
            Art Order Assembler
          </button>
        </div>
      </div>

      {/* Onboarding Hint */}
      {showOnboarding && !clientMode && (
        <AlertBanner
          severity="info"
          title="Welcome to Freelance Forge"
          description="This dashboard shows your active projects and client workload. Planning items don't consume capacity or budget until you move them to Production."
          dismissible
          onDismiss={handleDismissOnboarding}
        />
      )}

      {/* Empty State Banner - when no active execution */}
      {!hasActiveExecution && !clientMode && (
        <AlertBanner
          severity="info"
          title="No active projects yet."
          description="Planning items don't consume capacity or deadlines. Move a project to Production when you start work on it."
          icon={<Briefcase className="w-5 h-5 text-blue-600" />}
          actions={[
            {
              label: "View my projects",
              onClick: () => onNavigate?.("planning", "products"),
              primary: true
            }
          ]}
        />
      )}

      {/* Critical Alert Banner (only if we have execution or bottlenecks that matter) */}
      {teamMetrics.hasBottleneck && teamMetrics.bottleneckMember && (
        <BottleneckAlert
          memberName={teamMetrics.bottleneckMember.name}
          loadPercentage={teamMetrics.bottleneckPercent}
          timelineExtension={timelineExtension}
          onReassign={() => onNavigate?.("planning", "integrated")}
          onHire={() => onNavigate?.("team", "teambuilder")}
          onExtendTimeline={() => onNavigate?.("planning", "budget")}
          clientMode={clientMode}
        />
      )}

      {/* Key Metrics Strip */}
      <MetricStrip>
        <MetricCard
          title="Your Load"
          value={personalCapacity.total > 0 ? `${personalCapacity.pct}%` : "0%"}
          subtitle={
            personalCapacity.total === 0
              ? "Add clients to track your workload"
              : personalCapacity.pct > 100
              ? `Overcommitted · ${Math.round(personalCapacity.committed - personalCapacity.total)}h/wk over capacity`
              : `${Math.round(personalCapacity.committed)}h / ${Math.round(personalCapacity.total)}h per week`
          }
          icon={Users}
          status={!hasActiveExecution ? "healthy" : capacityStatus}
          onClick={() => onNavigate?.("team", "team-overview")}
        />

        <MetricCard
          title="Pipeline Words"
          value={(() => {
            const total = analysis.reduce((sum, p) => sum + (p.targetWords || 0), 0);
            return total > 0 ? `${Math.round(total / 1000)}k` : "—";
          })()}
          subtitle={(() => {
            const active = analysis.filter(p => p.lifecycleState === "Production");
            const total = analysis.reduce((sum, p) => sum + (p.targetWords || 0), 0);
            if (total === 0) return "No projects in pipeline";
            return `${active.length} active · ${analysis.length} total project${analysis.length === 1 ? "" : "s"} · View list →`;
          })()}
          icon={Pencil}
          status="healthy"
          onClick={() => onNavigate?.("planning", "products")}
        />

        <MetricCard
          title="Monthly Income"
          value={projectMonthlyIncome > 0 ? `$${formatNumber(Math.round(projectMonthlyIncome))}` : "—"}
          subtitle={
            writers.length === 0
              ? "Add clients to see income projection"
              : projectIncomeBreakdown.count === 0
              ? "No active projects contributing income yet"
              : projectIncomeBreakdown.earned > 0
              ? `$${formatNumber(Math.round(projectIncomeBreakdown.earned))} earned · $${formatNumber(Math.round(projectIncomeBreakdown.pending))} pending`
              : `$${formatNumber(Math.round(projectIncomeBreakdown.pending))} pending · ${projectIncomeBreakdown.count} active project${projectIncomeBreakdown.count === 1 ? "" : "s"}`
          }
          icon={DollarSign}
          status="healthy"
          onClick={() => onNavigate?.("team", "team-overview")}
        />

        <MetricCard
          title="Active Clients"
          value={(() => {
            const active = new Set(analysis.filter(p => p.lifecycleState === "Production").map(p => p.assignedTo).filter(Boolean));
            return active.size > 0 ? active.size.toString() : "0";
          })()}
          subtitle={(() => {
            const prodProjects = analysis.filter(p => p.lifecycleState === "Production");
            const activeClients = new Set(prodProjects.map(p => p.assignedTo).filter(Boolean)).size;
            return activeClients > 0
              ? `${prodProjects.length} project${prodProjects.length === 1 ? "" : "s"} across ${activeClients} client${activeClients === 1 ? "" : "s"} · View clients →`
              : "No projects in production yet";
          })()}
          icon={Target}
          status="healthy"
          onClick={() => onNavigate?.("team", "team-overview")}
        />
      </MetricStrip>

      {/* Personal Capacity Bar */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Your Weekly Workload</h3>
            <p className="text-sm text-slate-500">Hours committed across all active projects and clients</p>
          </div>
          <button
            onClick={() => onNavigate?.("team", "team-overview")}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            View by client →
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          {personalCapacity.total === 0 ? (
            <p className="text-sm text-slate-400">No clients configured. Add clients to track your capacity.</p>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Total committed</span>
                <span className="text-sm font-semibold text-slate-900">
                  {Math.round(personalCapacity.committed)}h / {Math.round(personalCapacity.total)}h per week
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 mb-2">
                <div
                  className={`h-3 rounded-full transition-all ${
                    personalCapacity.pct > 100 ? "bg-red-500" : personalCapacity.pct > 80 ? "bg-amber-400" : "bg-emerald-500"
                  }`}
                  style={{ width: `${Math.min(personalCapacity.pct, 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                <span>{personalCapacity.pct}% utilised</span>
                <span>{Math.max(0, Math.round(personalCapacity.total - personalCapacity.committed))}h/wk remaining</span>
              </div>

              {writers.filter(w => w.committedHours > 0).length > 0 && (
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Hours by client</p>
                  {writers.filter(w => w.committedHours > 0).map(w => {
                    const weeklyHrs = Math.round((w.committedHours / 52) * 10) / 10;
                    const clientPct = personalCapacity.total > 0 ? (weeklyHrs / personalCapacity.total) * 100 : 0;
                    return (
                      <div key={w.id} className="flex items-center gap-3">
                        <span className="text-xs text-slate-600 w-36 truncate font-medium">{w.name}</span>
                        <div className="flex-1 bg-slate-100 rounded-full h-2">
                          <div className="bg-indigo-400 h-2 rounded-full" style={{ width: `${Math.min(clientPct, 100)}%` }} />
                        </div>
                        <span className="text-xs text-slate-500 w-20 text-right">{weeklyHrs}h/wk</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Quick Timeline Preview (optional, for visual context) */}
      {!clientMode && analysis.some(p => p.lifecycleState === "Production") && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-lg">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900">Upcoming Milestones</h4>
            </div>
            <button
              onClick={() => onNavigate?.("planning", "budget")}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              View full timeline →
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {analysis
              .filter((p) => p.lifecycleState === "Production" && p.targetDate)
              .sort((a, b) => new Date(a.targetDate!).getTime() - new Date(b.targetDate!).getTime())
              .slice(0, 3)
              .map((project) => (
                <button
                  key={project.id}
                  onClick={() => onNavigate?.("planning", "products")}
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-slate-50 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        project.internalStatus?.toLowerCase().includes("critical")
                          ? "bg-red-500"
                          : project.internalStatus?.toLowerCase().includes("draft")
                          ? "bg-blue-500"
                          : "bg-slate-300"
                      }`}
                    />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-700">
                    {project.displayDate || project.launchWindow}
                  </span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
