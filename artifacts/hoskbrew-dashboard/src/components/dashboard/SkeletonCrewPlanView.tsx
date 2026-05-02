import { 
  Users, 
  AlertTriangle, 
  Clock, 
  Target, 
  TrendingDown,
  FileText,
  Shield,
  Activity
} from "lucide-react";
import { generateSurvivalPlan } from "../../lib/skeleton-crew-plan";

export function SkeletonCrewPlanView() {
  const plan = generateSurvivalPlan();

  return (
    <div className="space-y-6">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Shield className="w-8 h-8" />
          Skeleton Crew Survival Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-red-100 mb-2">Current Situation</h3>
            <p className="text-sm text-red-50 mb-3">{plan.executiveSummary.situation}</p>
            <div className="bg-red-700 bg-opacity-50 p-3 rounded">
              <div className="text-xs text-red-200">Operational Coverage</div>
              <div className="text-2xl font-bold">{plan.capacityAnalysis.coveragePercentage.toFixed(1)}%</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-red-100 mb-2">Immediate Risk</h3>
            <p className="text-sm text-red-50 mb-3">{plan.executiveSummary.immediateRisk}</p>
            <div className="bg-red-700 bg-opacity-50 p-3 rounded">
              <div className="text-xs text-red-200">Time Horizon</div>
              <div className="text-2xl font-bold">{plan.executiveSummary.timeHorizon}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Capacity Analysis */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-red-500" />
          Capacity Analysis
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-xs text-red-600 uppercase tracking-wider">Lost Hours</div>
            <div className="text-2xl font-bold text-red-600">{plan.capacityAnalysis.totalLostHours}h/wk</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="text-xs text-amber-600 uppercase tracking-wider">Remaining</div>
            <div className="text-2xl font-bold text-amber-600">{plan.capacityAnalysis.remainingCapacity}h/wk</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="text-xs text-slate-600 uppercase tracking-wider">Net Gap</div>
            <div className="text-2xl font-bold text-slate-700">-{plan.capacityAnalysis.netGap}h/wk</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-xs text-green-600 uppercase tracking-wider">Runway</div>
            <div className="text-2xl font-bold text-green-600">{plan.survivalMetrics.weeksOfRunway} weeks</div>
          </div>
        </div>
      </div>

      {/* Critical Dependencies */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-orange-500" />
          Critical Dependencies
        </h3>
        <div className="space-y-3">
          {plan.criticalDependencies.map((dep) => (
            <div 
              key={dep.projectId}
              className={`p-4 rounded-lg border ${
                dep.riskLevel === "critical" 
                  ? "bg-red-50 border-red-200" 
                  : "bg-orange-50 border-orange-200"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold text-slate-800">{dep.projectName}</div>
                  <div className="text-sm text-slate-600">Stakeholder: {dep.stakeholder}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs px-2 py-1 rounded ${
                    dep.riskLevel === "critical" 
                      ? "bg-red-200 text-red-800" 
                      : "bg-orange-200 text-orange-800"
                  }`}>
                    {dep.riskLevel.toUpperCase()}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{dep.deadline}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-medium text-gray-700 mb-1">Missing Capabilities:</div>
                {dep.missingCapabilities.map((capability, idx) => (
                  <div key={idx} className="ml-2">• {capability}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reallocation Strategy */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-500" />
          Capacity Reallocation Strategy
        </h3>
        <div className="space-y-3">
          {plan.reallocationStrategy.map((strategy, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {strategy.priority}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">{strategy.action}</div>
                  <div className="text-sm text-slate-600 mt-1">
                    <span className="font-medium">Assignee:</span> {strategy.assignee} | 
                    <span className="font-medium ml-2">Hours:</span> {strategy.hoursReallocated}h/wk
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{strategy.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Survival Metrics */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6" />
          Survival Metrics Dashboard
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Operational Runway</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.weeksOfRunway} weeks</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Critical Projects</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.criticalPathCoverage}</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Documentation Tasks</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.documentationTasks}</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">System Building</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.systemBuildingTasks}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
