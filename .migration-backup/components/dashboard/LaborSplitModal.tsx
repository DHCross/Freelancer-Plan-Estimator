"use client";

import { useState } from "react";
import { ExecutionTask, TeamMember } from "@/lib/types";
import { X, Split, AlertTriangle } from "lucide-react";

interface LaborSplitModalProps {
  task: ExecutionTask;
  teamMembers: TeamMember[];
  isOpen: boolean;
  onClose: () => void;
  onSave: (taskA: ExecutionTask, taskB: ExecutionTask) => void;
}

export function LaborSplitModal({ task, teamMembers, isOpen, onClose, onSave }: LaborSplitModalProps) {
  const [splitPercent, setSplitPercent] = useState(20); // 20% Conceptual, 80% Processing
  const [assigneeIdB, setAssigneeIdB] = useState<string>(task.assigneeId ?? "");

  if (!isOpen) return null;

  const handleSave = () => {
    const totalHours = task.remainingHours;
    let conceptualHours = Math.round((totalHours * splitPercent) / 100);
    let processingHours = totalHours - conceptualHours;

    // Prevent creating 0-hour tasks. For very small totals, block the split entirely.
    if (totalHours < 2 && (conceptualHours === 0 || processingHours === 0)) {
      window.alert("Cannot split a task with so few remaining hours. Please adjust the hours or split percentage.");
      return;
    }

    // Clamp so both tasks have at least 1 hour when possible.
    if (conceptualHours === 0) {
      conceptualHours = 1;
      processingHours = totalHours - 1;
    } else if (processingHours === 0) {
      processingHours = 1;
      conceptualHours = totalHours - 1;
    }

    const taskA: ExecutionTask = {
      ...task,
      remainingHours: conceptualHours,
      laborCategory: "Conceptual_Raw",
      name: task.name ? `${task.name} (Conceptual)` : "Conceptual Generation",
    };

    const taskB: ExecutionTask = {
      id: `${task.id}-split-${Date.now()}`,
      projectId: task.projectId,
      name: task.name ? `${task.name} (Processing)` : "Systemic Processing",
      assigneeId: assigneeIdB || task.assigneeId || "",
      remainingHours: processingHours,
      status: "Blocked", // Starts blocked until Conceptual is Done
      laborCategory: "Systemic_Processing",
      dependencyIds: [task.id, ...(task.dependencyIds || [])], // Task B depends on Task A
      sortOrder: task.sortOrder + 1,
    };

    onSave(taskA, taskB);
    onClose();
  };

  const currentAssignee = teamMembers.find(m => m.id === task.assigneeId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden animate-fade-in">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Split className="w-5 h-5 text-indigo-600" />
            Split by Labor Type
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-sm text-amber-800">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
            <p>
              Splitting this task will separate the raw conceptual generation from the structural processing.
              This prevents false bottlenecks while accurately visualizing the true engine of production.
            </p>
          </div>

          <div>
            <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Original Task Hours:</span>
              <span className="text-slate-900">{task.remainingHours}h</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Task A Configuration */}
            <div className="p-4 rounded-lg border border-indigo-100 bg-indigo-50/50">
              <h4 className="font-semibold text-indigo-900 text-sm mb-3 flex justify-between">
                <span>Task A: Conceptual_Raw</span>
                <span>{Math.round((task.remainingHours * splitPercent) / 100)}h ({splitPercent}%)</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Assignee</label>
                  <div className="text-sm font-medium text-slate-700">
                    {currentAssignee?.name || task.assigneeId}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Split Percentage</label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="5"
                    value={splitPercent}
                    onChange={(e) => setSplitPercent(Number(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
              </div>
            </div>

            {/* Task B Configuration */}
            <div className="p-4 rounded-lg border border-emerald-100 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-900 text-sm mb-3 flex justify-between">
                <span>Task B: Systemic_Processing</span>
                <span>{Math.round((task.remainingHours * (100 - splitPercent)) / 100)}h ({100 - splitPercent}%)</span>
              </h4>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Assignee for Processing</label>
                <select
                  value={assigneeIdB}
                  onChange={(e) => setAssigneeIdB(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-emerald-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">-- Select Assignee (Optional) --</option>
                  {teamMembers.map(member => (
                    <option key={member.id} value={member.id}>{member.name} ({member.role})</option>
                  ))}
                </select>
                <p className="text-xs text-emerald-700 mt-2">
                  Task B will automatically be set as dependent on Task A.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2"
          >
            <Split className="w-4 h-4" />
            Split Task
          </button>
        </div>
      </div>
    </div>
  );
}
