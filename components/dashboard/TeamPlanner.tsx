"use client";

import { Lock, AlertTriangle, Info } from "lucide-react";
import { WriterLoad } from "@/lib/types";
import { useTeamLoad } from "@/lib/TeamLoadContext";
import { formatNumber } from "@/lib/utils";

interface TeamPlannerProps {
  writers: WriterLoad[];
  clientMode?: boolean;
}

export function TeamPlanner({ writers, clientMode = false }: TeamPlannerProps) {
  const { getTeamTotalHours } = useTeamLoad();
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
      {/* Bottleneck Warning Banner */}
      {hasBottleneck && !clientMode && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-red-800">Resource Bottleneck Detected</h4>
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
                    {/* Injected hours from Product Builder */}
                    {injected > 0 && (
                      <div className="text-xs text-indigo-600 mt-1">
                        +{formatNumber(injected)}h injected via Product Builder
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        <h4 className="font-semibold text-slate-900 mb-1">How load % is calculated</h4>
        <p>
          Each card compares the hours currently assigned to a person to their annual capacity
          (weekly capacity × 48 working weeks). For example, someone with 40 hrs/week capacity has
          <strong> 1,920 hrs</strong> available per year. If projects add up to 805 hrs, their card shows
          <strong> 42%</strong> load (805 ÷ 1,920). Bars turn red only when assigned hours exceed that capacity.
        </p>
      </div>
    </div>
  );
}
