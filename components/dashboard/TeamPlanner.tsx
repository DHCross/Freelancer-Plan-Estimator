"use client";

import { Lock, AlertTriangle, HelpCircle, Edit2, Wrench } from "lucide-react";
import { WriterLoad } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Tooltip } from "./Tooltip";
import { useWorkGraph } from "@/lib/WorkGraphContext";
import { useMemo } from "react";

interface TeamPlannerProps {
  // Legacy props kept for compatibility but largely ignored in favor of WorkGraph
  writers?: WriterLoad[];
  clientMode?: boolean;
  onEditMember?: (memberId: string) => void;
  onNavigateToTeamBuilder?: () => void;
}

export function TeamPlanner({ writers: legacyWriters, clientMode = false, onEditMember, onNavigateToTeamBuilder }: TeamPlannerProps) {

  const { teamMembers, getPersonLoad, workPackages } = useWorkGraph();

  // Compute load based on WorkGraph
  const teamLoadStats = useMemo(() => {
    return teamMembers.map(member => {
        const totalHours = getPersonLoad(member.id);
        const annualCapacity = member.weeklyCapacity * 48; // 48 weeks
        const percent = annualCapacity > 0 ? Math.round((totalHours / annualCapacity) * 100) : 0;

        // Find assigned packages
        const assignedPackages = workPackages.filter(wp => wp.assignedPersonId === member.id);

        return {
            ...member,
            totalHours,
            percent,
            annualCapacity,
            packages: assignedPackages
        };
    });
  }, [teamMembers, getPersonLoad, workPackages]);

  // Find the highest overloaded person for the warning banner
  const mostOverloaded = teamLoadStats.reduce((max, member) => {
    return member.percent > max.percent ? member : max;
  }, teamLoadStats[0]);
  
  const hasBottleneck = mostOverloaded?.percent > 100;

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
              <strong>{mostOverloaded.name}</strong> is at <strong>{mostOverloaded.percent}%</strong> capacity
              ({formatNumber(mostOverloaded.totalHours)}h assigned vs {formatNumber(mostOverloaded.annualCapacity)}h available annually).
            </p>
            <p className="text-xs text-red-600 mt-2">
              <strong>Impact:</strong> Projects will take {Math.round(mostOverloaded.percent / 100)}x longer than planned.
            </p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {teamLoadStats.map((member) => {
          const isOver = member.percent > 100;
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
              key={member.id}
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
                  <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {member.role}
                  </p>
                </div>
                <div className={`text-xl font-bold ${isOver ? "text-red-600" : "text-slate-700"}`}>
                  {member.percent}%
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full ${barColor}`}
                  style={{ width: `${Math.min(member.percent, 100)}%` }}
                />
              </div>
              
              {/* Edit Details Button */}
              {!clientMode && (
                <>
                  {onEditMember ? (
                    <button
                      onClick={() => onEditMember(member.id)}
                      className="w-full mb-4 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-200"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit Details</span>
                    </button>
                  ) : onNavigateToTeamBuilder ? (
                    <button
                      onClick={onNavigateToTeamBuilder}
                      className="w-full mb-4 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-200"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit Details</span>
                    </button>
                  ) : null}
                </>
              )}

              <div className="space-y-2">
                {member.packages.map((wp) => (
                  <div
                    key={wp.id}
                    className="text-sm border-l-2 pl-2 py-1 border-slate-200"
                  >
                    <div className="font-medium text-slate-700 flex justify-between">
                      <span>{wp.title}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                          {formatNumber(Math.round(wp.estimatedHours))}h • {wp.endDate || "Unscheduled"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
