import { useState } from "react";
import { 
  Users, 
  AlertTriangle, 
  Clock, 
  Target, 
  TrendingUp,
  FileText,
  CheckCircle,
  Activity,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { generateSurvivalPlan } from "../../lib/skeleton-crew-plan";

export function SkeletonCrewPlanView() {
  const [isExpanded, setIsExpanded] = useState(false);
  const plan = generateSurvivalPlan();

  return (
    <div className="space-y-4">
      <div
        className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm cursor-pointer select-none"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-xl">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Contractor Planning</h2>
              <p className="text-sm text-slate-500">
                Identify projects that need subcontracting and plan which work to hand off.
              </p>
            </div>
          </div>
          <div className="ml-4 text-slate-400">
            {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-orange-900">
              <Users className="w-6 h-6" />
              Subcontracting Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Current Workload</h3>
                <p className="text-sm text-orange-700 mb-3">{plan.executiveSummary.situation}</p>
                <div className="bg-white border border-orange-200 p-3 rounded">
                  <div className="text-xs text-orange-600">Work Covered Solo</div>
                  <div className="text-2xl font-bold text-orange-800">{plan.capacityAnalysis.coveragePercentage.toFixed(1)}%</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Why Subcontract?</h3>
                <p className="text-sm text-orange-700 mb-3">{plan.executiveSummary.immediateRisk}</p>
                <div className="bg-white border border-orange-200 p-3 rounded">
                  <div className="text-xs text-orange-600">Planning Window</div>
                  <div className="text-2xl font-bold text-orange-800">{plan.executiveSummary.timeHorizon}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-amber-500" />
              Capacity at a Glance
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="text-xs text-amber-700 uppercase tracking-wider">Hours to Outsource</div>
                <div className="text-2xl font-bold text-amber-700">{plan.capacityAnalysis.totalLostHours}h/wk</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-xs text-blue-700 uppercase tracking-wider">Your Available Hours</div>
                <div className="text-2xl font-bold text-blue-700">{plan.capacityAnalysis.remainingCapacity}h/wk</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="text-xs text-slate-600 uppercase tracking-wider">Shortfall</div>
                <div className="text-2xl font-bold text-slate-700">{plan.capacityAnalysis.netGap}h/wk</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-xs text-green-700 uppercase tracking-wider">Planning Window</div>
                <div className="text-2xl font-bold text-green-700">{plan.survivalMetrics.weeksOfRunway} weeks</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Projects That May Need Contractor Support
            </h3>
            <div className="space-y-3">
              {plan.criticalDependencies.map((dep) => (
                <div 
                  key={dep.projectId}
                  className={`p-4 rounded-lg border ${
                    dep.riskLevel === "critical" 
                      ? "bg-amber-50 border-amber-200" 
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-slate-800">{dep.projectName}</div>
                      <div className="text-sm text-slate-600">Client: {dep.stakeholder}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs px-2 py-1 rounded ${
                        dep.riskLevel === "critical" 
                          ? "bg-amber-200 text-amber-800" 
                          : "bg-slate-200 text-slate-700"
                      }`}>
                        {dep.riskLevel === "critical" ? "Delegate" : "Monitor"}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">{dep.deadline}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-700 mb-1">Work to hand off:</div>
                    {dep.missingCapabilities.map((capability, idx) => (
                      <div key={idx} className="ml-2">• {capability}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-500" />
              Recommended Hand-offs
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
                        <span className="font-medium">Contractor type:</span> {strategy.assignee} | 
                        <span className="font-medium ml-2">Hours:</span> {strategy.hoursReallocated}h/wk
                      </div>
                      <div className="text-sm text-gray-600 mt-2">{strategy.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              Subcontracting Readiness
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">Weeks to Plan</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.weeksOfRunway}</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">Priority Projects</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.criticalPathCoverage}</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">Briefing Tasks</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.documentationTasks}</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">Setup Tasks</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{plan.survivalMetrics.systemBuildingTasks}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
