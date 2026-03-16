"use client";

import { useState } from "react";
import { ChevronDown, Lock, HelpCircle, Split } from "lucide-react";
import { WriterLoad, ExecutionTask } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Tooltip } from "./Tooltip";
import { LaborSplitModal } from "./LaborSplitModal";
import { TEAM_ROSTER } from "@/lib/constants";
import { UnifiedProjectModel } from "@/lib/unified-project-model";

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
  const [taskToSplit, setTaskToSplit] = useState<ExecutionTask | null>(null);

  const handleSaveSplit = (taskA: ExecutionTask, taskB: ExecutionTask) => {
    // In a real application, you would dispatch an action here or use a Context
    // to update the global INITIAL_PROJECTS or the database.
    // Since we are mocking the frontend, we will mutate the local instance of
    // the project inside the unified model to simulate the immediate re-balancing.

    const model = UnifiedProjectModel.getInstance();
    const currentState = model.getState();

    // We need to find the project this task belongs to in the original source
    // to correctly update the tasks list.
    const allProjects = member.projects; // In a real app, this should be the global project list
    const projectIndex = allProjects.findIndex(p => p.tasks?.some(t => t.id === taskA.id));

    if (projectIndex >= 0) {
      const project = allProjects[projectIndex];
      if (project.tasks) {
        // Find and replace Task A (it now has reduced hours and is Conceptual)
        const taskAIndex = project.tasks.findIndex(t => t.id === taskA.id);
        if (taskAIndex >= 0) {
          project.tasks[taskAIndex] = taskA;
        }

        // Add Task B
        project.tasks.push(taskB);

        // Force an update to the global model to trigger recalculations
        model.updateProjectAssignments(allProjects);

        // Note: For React to instantly reflect this without a full global context provider
        // wrapped around the dashboard, you would typically rely on the parent component
        // re-rendering. Since this is a demo environment, logging it is acceptable,
        // but the model update above ensures if other components pull from the model, it is correct.
      }
    }

    console.log(`Split task ${taskA.id}. Task B assigned to ${taskB.assigneeId}`);

    // We clear the modal
    setTaskToSplit(null);
  };

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

  // Calculate Breakdown
  const totalConceptual = member.projects.reduce((sum, p) =>
    sum + (p.tasks?.filter(t => t.assigneeId === member.id && t.laborCategory === 'Conceptual_Raw').reduce((s, t) => s + t.remainingHours, 0) || 0)
  , 0);
  const totalProcessing = member.projects.reduce((sum, p) =>
    sum + (p.tasks?.filter(t => t.assigneeId === member.id && t.laborCategory === 'Systemic_Processing').reduce((s, t) => s + t.remainingHours, 0) || 0)
  , 0);
  const totalExecution = displayHours - totalConceptual - totalProcessing;

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
          <span className="font-medium">{formatNumber(displayHours)}h Total / {formatNumber(member.annualCapacity)}h Capacity</span>
        </div>

        {/* Labor Category Breakdown */}
        {displayHours > 0 && (
          <div className="mt-2 text-xs flex items-center gap-2 flex-wrap border-t border-slate-100 pt-2">
            <span className="text-slate-500 font-medium whitespace-nowrap">{formatNumber(displayHours)}h Total</span>
            <span className="text-slate-300">|</span>
            {totalConceptual > 0 && (
              <span className="text-indigo-600 whitespace-nowrap">{formatNumber(totalConceptual)}h Conceptual</span>
            )}
            {totalProcessing > 0 && (
              <>
                {totalConceptual > 0 && <span className="text-slate-300">|</span>}
                <span className="text-emerald-600 whitespace-nowrap">{formatNumber(totalProcessing)}h Processing</span>
              </>
            )}
            {totalExecution > 0 && (
              <>
                {(totalConceptual > 0 || totalProcessing > 0) && <span className="text-slate-300">|</span>}
                <span className="text-slate-600 whitespace-nowrap">{formatNumber(totalExecution)}h Execution</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Projects List */}
      <div className="border-t border-slate-100">
        <div className="divide-y divide-slate-50">
          {visibleProjects.map((project) => {
            const isExecuting = project.lifecycleState === "Production";
            const opacityClass = isExecuting ? "" : "opacity-60 grayscale";

            // If the project has explicit ExecutionTasks assigned to this member, display them inside the project block
            const memberTasks = project.tasks?.filter(t => t.assigneeId === member.id) || [];

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

                {/* Task-Level details (allows splitting right from the team card) */}
                {memberTasks.length > 0 ? (
                  <div className="mt-2 pl-4 border-l-2 border-slate-200 space-y-1">
                    {memberTasks.map(task => (
                      <div key={task.id} className="flex items-center justify-between text-xs group">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className={`w-1.5 h-1.5 rounded-full ${task.laborCategory === 'Conceptual_Raw' ? 'bg-indigo-400' : task.laborCategory === 'Systemic_Processing' ? 'bg-emerald-400' : 'bg-slate-300'}`} />
                          <span className="text-slate-600 truncate">{task.name || `Task ${task.id}`}</span>
                          <span className="text-slate-400 ml-1">({task.remainingHours}h)</span>
                        </div>
                        {!clientMode && (
                          <button
                            onClick={() => setTaskToSplit(task)}
                            className="p-1 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-indigo-50 rounded"
                            title="Split Task by Labor Type"
                          >
                            <Split className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 mt-0.5">
                    {project.displayDate || project.launchWindow}
                  </div>
                )}
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

      {taskToSplit && (
        <LaborSplitModal
          task={taskToSplit}
          teamMembers={TEAM_ROSTER}
          isOpen={!!taskToSplit}
          onClose={() => setTaskToSplit(null)}
          onSave={handleSaveSplit}
        />
      )}
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
