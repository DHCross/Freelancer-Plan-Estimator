"use client";

import { Lock, AlertTriangle, TrendingUp, Users, ArrowRight } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { UnifiedProjectModel, ResourceValidation } from "@/lib/unified-project-model";
import { useState, useEffect } from "react";

interface ResourceValidationHubProps {
  clientMode?: boolean;
}

export function ResourceValidationHub({ clientMode = false }: ResourceValidationHubProps) {
  const [unifiedModel] = useState(() => UnifiedProjectModel.getInstance());
  const [resourceValidation, setResourceValidation] = useState<ResourceValidation[]>([]);
  const [scenario, setScenario] = useState(unifiedModel.getProjectScenario());

  useEffect(() => {
    setResourceValidation(unifiedModel.getResourceValidation());
    setScenario(unifiedModel.getProjectScenario());
  }, [unifiedModel]);

  // Find the bottleneck (highest load percentage)
  const bottleneck = resourceValidation.length > 0 
    ? resourceValidation.reduce((max, current) => 
        current.loadPercentage > max.loadPercentage ? current : max
      )
    : null;

  if (clientMode) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Data Flow Indicator */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 flex items-center justify-center gap-3 text-sm">
        <span className="font-medium text-slate-600">Team Builder</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">Resource Validation</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-slate-600">Scenario Engine</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-slate-600">Financial Model</span>
      </div>

      {/* Resource Validation Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-bold text-blue-900">Who Does What: Resource Validation Hub</h3>
          </div>
          {bottleneck?.isOverloaded && (
            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-2 rounded-lg">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-semibold">Bottleneck Detected</span>
            </div>
          )}
        </div>
        <p className="text-sm text-blue-700">
          Pulls team members, capacity, and hourly rates from Team Builder. 
          Load calculations dynamically feed project timeline adjustments to the Scenario Engine.
        </p>
      </div>

      {/* Bottleneck Alert */}
      {bottleneck?.isOverloaded && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-800">Critical Resource Constraint</h4>
              <p className="text-sm text-red-700 mt-1">
                <span className="font-semibold">{bottleneck.teamMemberName}</span> is operating at{" "}
                <span className="font-bold">{Math.round(bottleneck.loadPercentage)}%</span> capacity.
                This extends the overall project timeline.
              </p>
              <div className="mt-2 text-xs text-red-600">
                Projects: {bottleneck.assignedProjects.map(p => p.projectName).join(", ")}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Load Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {resourceValidation.map((validation) => {
          const isOver = validation.isOverloaded;
          const statusClass = isOver ? "border-red-600" : "border-emerald-500";
          const barColor = isOver ? "bg-red-600" : "bg-emerald-500";

          return (
            <div
              key={validation.teamMemberId}
              className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${statusClass} relative`}
            >
              {isOver && (
                <div className="absolute top-0 right-0 text-[10px] font-bold px-2 py-1 uppercase bg-red-100 text-red-600">
                  Bottleneck
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{validation.teamMemberName}</h4>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {validation.assignedProjects.length} projects
                  </p>
                </div>
                <div className={`text-xl font-bold ${isOver ? "text-red-600" : "text-slate-700"}`}>
                  {Math.round(validation.loadPercentage)}%
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full ${barColor}`}
                  style={{ width: `${Math.min(validation.loadPercentage, 100)}%` }}
                />
              </div>
              <div className="space-y-2">
                {validation.assignedProjects.map((project) => (
                  <div
                    key={project.projectId}
                    className="text-sm border-l-2 pl-2 py-1 border-slate-200"
                  >
                    <div className="font-medium text-slate-700 flex justify-between">
                      <span className="truncate">{project.projectName}</span>
                      {project.projectName.includes("Deadline") && (
                        <Lock className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400">
                      {formatNumber(Math.round(project.hours))}h
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Assigned: {formatNumber(Math.round(validation.totalAssignedHours))}h</span>
                  <span>Capacity: {formatNumber(validation.availableCapacity)}h</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline Impact Analysis */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          Timeline Impact Analysis
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="text-sm text-slate-600 mb-2">Target Timeline (from Team Builder)</div>
            <div className="text-2xl font-bold text-slate-900">
              {scenario.targetTimeline} months
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-600 mb-2">Validated Timeline (with bottlenecks)</div>
            <div className={`text-2xl font-bold ${bottleneck?.isOverloaded ? "text-red-600" : "text-emerald-600"}`}>
              {scenario.validatedTimeline} months
            </div>
            {bottleneck?.isOverloaded && (
              <div className="text-xs text-red-600 mt-1">
                +{scenario.validatedTimeline - scenario.targetTimeline} months due to constraints
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        <h4 className="font-semibold text-slate-900 mb-1">How Resource Validation Works</h4>
        <p>
          This hub pulls team member capacity from the Team Builder and validates project assignments.
          When a team member exceeds 100% capacity, the system flags them as a bottleneck and
          adjusts the overall project timeline in the Scenario Engine.
        </p>
      </div>
    </div>
  );
}
