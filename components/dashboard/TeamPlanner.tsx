"use client";

import { Lock, AlertTriangle, HelpCircle, Edit2 } from "lucide-react";
import { WriterLoad } from "@/lib/types";
import { useTeamLoad } from "@/lib/TeamLoadContext";
import { formatNumber } from "@/lib/utils";
import { Tooltip } from "./Tooltip";
import { Wrench } from "lucide-react";

interface TeamPlannerProps {
  writers: WriterLoad[];
  clientMode?: boolean;
  onNavigateToTeamBuilder?: () => void;
}

export function TeamPlanner({ writers, clientMode = false, onNavigateToTeamBuilder }: TeamPlannerProps) {
  const { getTeamTotalHours, teamLoads } = useTeamLoad();
  // Find the highest overloaded person for the warning banner
  const mostOverloaded = writers.reduce((max, writer) => {
    const injected = getTeamTotalHours(writer.id);
    const percent = writer.annualCapacity ? ((writer.totalHours + injected) / writer.annualCapacity) * 100 : 0;
    const maxPercent = max.annualCapacity ? (max.totalHours / max.annualCapacity) * 100 : 0;
    return percent > maxPercent ? writer : max;
  }, writers[0]);
  
  const mostOverloadedPercent = mostOverloaded?.annualCapacity 
    ? Math.round((mostOverloaded.totalHours / mostOverloaded.annualCapacity) * 100) 
    : 0;
  const hasBottleneck = mostOverloadedPercent > 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Who Does What</h2>
          <p className="text-slate-600 mt-1">
            {clientMode 
              ? "Team allocation and workload distribution across contributors."
              : "Monitor workload and bottlenecks across all contributors."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {!clientMode && onNavigateToTeamBuilder && (
            <button 
              onClick={onNavigateToTeamBuilder}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <Wrench className="w-4 h-4" />
              <span>Edit Team</span>
            </button>
          )}
          {!clientMode && (
            <Tooltip 
              content="Load = assigned hours ÷ annual capacity (weekly hours × 48 weeks). Bars turn red when assigned hours exceed capacity."
              position="left"
            >
              <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>How load % works</span>
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Bottleneck Warning Banner */}
      {hasBottleneck && !clientMode && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-red-800">Resource Bottleneck Detected</h4>
              {onNavigateToTeamBuilder && (
                <button 
                  onClick={onNavigateToTeamBuilder}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Resolve in Team Builder</span>
                </button>
              )}
            </div>
            <p className="text-sm text-red-700 mt-1">
              <strong>{mostOverloaded.name}</strong> is at <strong>{mostOverloadedPercent}%</strong> capacity 
              ({formatNumber(mostOverloaded.totalHours)}h assigned vs {formatNumber(mostOverloaded.annualCapacity)}h available annually).
            </p>
            <p className="text-xs text-red-600 mt-2">
              <strong>Impact:</strong> Projects will take {Math.round(mostOverloadedPercent / 100)}x longer than planned, 
              or require redistributing {formatNumber(mostOverloaded.totalHours - mostOverloaded.annualCapacity)}h to other team members.
            </p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {writers.map((writer) => {
          const injected = getTeamTotalHours(writer.id);
          const percent = writer.annualCapacity
            ? Math.round(((writer.totalHours + injected) / writer.annualCapacity) * 100)
            : 0;
          const isOver = writer.totalHours > writer.annualCapacity;
          const statusClass = isOver
            ? clientMode
              ? "border-amber-500"
              : "border-red-600"
            : "border-emerald-500";
          const barColor = isOver
            ? clientMode
              ? "bg-amber-500"
              : "bg-red-600"
            : "bg-emerald-500";

          return (
            <div
              key={writer.id}
              className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${statusClass} relative`}
            >
              {isOver && (
                <div
                  className={`absolute top-0 right-0 text-[10px] font-bold px-2 py-1 uppercase ${
                    clientMode
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {clientMode ? "High Load" : "Bottleneck"}
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{writer.name}</h4>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {writer.role}
                  </p>
                </div>
                <div className={`text-xl font-bold ${isOver ? "text-red-600" : "text-slate-700"}`}>
                  {percent}%
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full ${barColor}`}
                  style={{ width: `${Math.min(percent, 100)}%` }}
                />
              </div>
              
              {/* Edit Details Button */}
              {!clientMode && onNavigateToTeamBuilder && (
                <button
                  onClick={onNavigateToTeamBuilder}
                  className="w-full mb-4 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-200"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>Edit Details</span>
                </button>
              )}

              <div className="space-y-2">
                {writer.projects.map((project) => (
                  <div
                    key={project.id}
                    className={`text-sm border-l-2 pl-2 py-1 ${
                      project.launchWindow.includes("Deadline")
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="font-medium text-slate-700 flex justify-between">
                      <span>{project.name}</span>
                      {project.launchWindow.includes("Deadline") && (
                        <Lock className="w-3 h-3 text-indigo-500" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400">
                          {formatNumber(Math.round(project.calculatedHours))}h • {project.launchWindow}
                    </div>
                  </div>
                ))}
                {/* Injected hours from Product Builder with role breakdown */}
                {injected > 0 && (
                  <div className="text-xs bg-indigo-50 border border-indigo-200 rounded p-2 mt-2">
                    <div className="font-semibold text-indigo-900">
                      +{formatNumber(injected)}h from Product Builder
                    </div>
                    {(() => {
                      const loads = teamLoads.get(writer.id) || [];
                      const roleBreakdown = loads.reduce((acc, load) => {
                        const role = load.primaryRole || "Unassigned";
                        acc[role] = (acc[role] || 0) + load.additionalHours;
                        return acc;
                      }, {} as Record<string, number>);
                      return Object.entries(roleBreakdown).map(([role, hours]) => (
                        <div key={role} className="text-indigo-700 flex justify-between">
                          <span>{role}:</span>
                          <span>{formatNumber(hours)}h</span>
                        </div>
                      ));
                    })()}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
