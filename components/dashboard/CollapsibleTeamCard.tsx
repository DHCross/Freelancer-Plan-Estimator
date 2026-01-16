"use client";

import { useState } from "react";
import { ChevronDown, Lock, HelpCircle } from "lucide-react";
import { WriterLoad } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Tooltip } from "./Tooltip";

interface CollapsibleTeamCardProps {
  member: WriterLoad;
  clientMode?: boolean;
  injectedHours?: number;
  initialExpanded?: boolean;
  maxVisibleProjects?: number;
}

export function CollapsibleTeamCard({
  member,
  clientMode = false,
  injectedHours = 0,
  initialExpanded = false,
  maxVisibleProjects = 2,
}: CollapsibleTeamCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded);

  // Use committedHours for the gauge to reflect "Now Mode"
  const displayHours = member.committedHours + injectedHours;
  const percent = member.annualCapacity
    ? Math.round((displayHours / member.annualCapacity) * 100)
    : 0;
  const isOver = displayHours > member.annualCapacity;
  
  // Determine status colors
  const getStatusConfig = () => {
    if (isOver) {
      return clientMode
        ? { border: "border-amber-500", bar: "bg-amber-500", badge: "bg-amber-100 text-amber-700", label: "Timeline Extended" }
        : { border: "border-red-600", bar: "bg-red-600", badge: "bg-red-100 text-red-700", label: "Bottleneck" };
    }
    if (percent > 80) {
      return clientMode
        ? { border: "border-amber-400", bar: "bg-amber-500", badge: "bg-amber-100 text-amber-700", label: "Busy" }
        : { border: "border-amber-400", bar: "bg-amber-500", badge: "bg-amber-100 text-amber-700", label: "Near Capacity" };
    }
    return { border: "border-emerald-500", bar: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700", label: clientMode ? "On Track" : "Healthy" };
  };

  const status = getStatusConfig();
  const visibleProjects = expanded ? member.projects : member.projects.slice(0, maxVisibleProjects);
  const hiddenCount = member.projects.length - maxVisibleProjects;

  // Calculate stats for "Assigned vs Executing"
  const executingCount = member.projects.filter(p => p.lifecycleState === "Production").length;
  // Note: displayHours is derived from committedHours which should only include active execution logic
  // if the backend is strict.

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border-l-4 ${status.border} overflow-hidden`}
    >
      {/* Header */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-slate-900 truncate">{member.name}</h4>
              {isOver && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${status.badge}`}>
                  {status.label}
                </span>
              )}
            </div>
            <Tooltip content={member.role}>
              <p className="text-xs text-slate-500 truncate mt-0.5 cursor-help">{member.role}</p>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            {/* In client mode, hide raw percentage for overloaded members */}
            {clientMode && isOver ? (
              <div className="text-sm text-amber-700 max-w-[100px] text-right">
                Adjusted
              </div>
            ) : (
              <div className={`text-2xl font-bold ${isOver ? "text-red-600" : "text-slate-700"}`}>
                {percent}%
              </div>
            )}
            {!clientMode && (
              <Tooltip content="Load = assigned hours ÷ annual capacity (weekly hours × 48 weeks)">
                <button className="p-1 hover:bg-slate-100 rounded-full">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                </button>
              </Tooltip>
            )}
          </div>
        </div>

        {/* Progress Bar - Only show if there is active execution load */}
        {displayHours > 0 && (
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
            <div
              className={`h-full ${status.bar} transition-all duration-300`}
              style={{ width: `${Math.min(percent, 100)}%` }}
            />
          </div>
        )}

        {/* Quick Stats - Updated Language */}
        <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
          <span>{member.projects.length} assigned · {executingCount} executing</span>
          <span className="font-medium">{formatNumber(displayHours)}h executing / {formatNumber(member.annualCapacity)}h available</span>
        </div>
      </div>

      {/* Projects List */}
      <div className="border-t border-slate-100">
        <div className="divide-y divide-slate-50">
          {visibleProjects.map((project) => {
            const isExecuting = project.lifecycleState === "Production";
            const opacityClass = isExecuting ? "" : "opacity-60 grayscale";

            return (
              <div
                key={project.id}
                className={`px-4 py-2.5 ${
                  project.isLocked ? "bg-indigo-50/50" : ""
                } ${opacityClass}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {project.isLocked && (
                      <Lock className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium text-slate-700 truncate">
                      {project.name}
                    </span>
                    {!isExecuting && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 text-slate-500 border border-slate-200">
                        {project.lifecycleState || "Planning"}
                      </span>
                    )}
                  </div>
                  {isExecuting ? (
                    <span className="text-xs text-slate-400 whitespace-nowrap">
                      {formatNumber(Math.round(project.calculatedHours))}h
                    </span>
                  ) : (
                    <span className="text-xs text-slate-300 whitespace-nowrap">
                      —
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {project.displayDate || project.launchWindow}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand/Collapse Toggle */}
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full px-4 py-2 text-xs font-medium text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-1 transition-colors"
          >
            {expanded ? (
              <>
                <span>Show less</span>
                <ChevronDown className="w-3 h-3 rotate-180" />
              </>
            ) : (
              <>
                <span>Show all {member.projects.length} assignments</span>
                <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}

        {/* Injected Hours Notice */}
        {injectedHours > 0 && (
          <div className="px-4 py-2 text-xs text-indigo-600 bg-indigo-50 border-t border-indigo-100">
            +{formatNumber(injectedHours)}h from Product Builder scenarios
          </div>
        )}
      </div>
    </div>
  );
}

interface TeamGridProps {
  members: WriterLoad[];
  clientMode?: boolean;
  getInjectedHours?: (memberId: string) => number;
}

export function TeamGrid({ members, clientMode = false, getInjectedHours }: TeamGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member) => (
        <CollapsibleTeamCard
          key={member.id}
          member={member}
          clientMode={clientMode}
          injectedHours={getInjectedHours?.(member.id)}
        />
      ))}
    </div>
  );
}
