"use client";

import { useState, useMemo } from "react";
import { Edit3, Save, X, Split } from "lucide-react";
import { Project, ExecutionTask } from "@/lib/types";
import { LaborSplitModal } from "./LaborSplitModal";
import { TEAM_ROSTER } from "@/lib/constants";
import { UnifiedProjectModel } from "@/lib/unified-project-model";

interface ProjectEditorProps {
  project: Project;
  onUpdate: (field: keyof Project, value: any) => void;
  clientMode?: boolean;
}

export function ProjectEditor({ project, onUpdate, clientMode = false }: ProjectEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState<Partial<Project>>({});

  const [taskToSplit, setTaskToSplit] = useState<ExecutionTask | null>(null);

  const handleSplitTask = (task: ExecutionTask) => {
    setTaskToSplit(task);
  };

  const handleSaveSplit = (taskA: ExecutionTask, taskB: ExecutionTask) => {
    if (!project.tasks) return;

    // Replace the original task with Task A, and append Task B
    const updatedTasks = project.tasks.map(t =>
      t.id === taskA.id ? taskA : t
    );
    updatedTasks.push(taskB);

    onUpdate("tasks", updatedTasks);

    // Notify unified model to recalculate
    const model = UnifiedProjectModel.getInstance();
    const currentState = model.getState();
    const currentProjects = currentState.resourceValidation.flatMap(rv => rv.assignedProjects);
    // Note: A full implementation would update the global project list.
    // Here we're assuming the parent component handling `onUpdate` will push this to the global state
    // and re-trigger a UnifiedProjectModel.updateProjectAssignments.
  };

  const handleEdit = () => {
    setEditValues({
      targetWords: project.targetWords,
      manualHours: project.manualHours,
      assignedTo: project.assignedTo,
      internalStatus: project.internalStatus,
      clientStatus: project.clientStatus,
      launchWindow: project.launchWindow,
      budgetType: project.budgetType,
      dependency: project.dependency,
      revenuePotential: project.revenuePotential,
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    Object.entries(editValues).forEach(([field, value]) => {
      if (value !== undefined && value !== project[field as keyof Project]) {
        onUpdate(field as keyof Project, value);
      }
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValues({});
    setIsEditing(false);
  };

  const handleFieldChange = (field: keyof Project, value: any) => {
    setEditValues(prev => ({ ...prev, [field]: value }));
  };

  if (clientMode) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-slate-900">{project.name}</h4>
          <p className="text-sm text-slate-500">{project.type}</p>
        </div>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <Edit3 className="w-3 h-3" />
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <Save className="w-3 h-3" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors"
            >
              <X className="w-3 h-3" />
              Cancel
            </button>
          </div>
        )}
      </div>

      {isEditing && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Target Words</label>
            <input
              type="number"
              value={editValues.targetWords || ""}
              onChange={(e) => handleFieldChange("targetWords", parseInt(e.target.value) || 0)}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Manual Hours</label>
            <input
              type="number"
              value={editValues.manualHours || ""}
              onChange={(e) => handleFieldChange("manualHours", parseInt(e.target.value) || undefined)}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Assigned To</label>
            <select
              value={editValues.assignedTo || ""}
              onChange={(e) => handleFieldChange("assignedTo", e.target.value)}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="dan">Dan</option>
              <option value="martin">Martin</option>
              <option value="matthew">Matthew</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Internal Status</label>
            <input
              type="text"
              value={editValues.internalStatus || ""}
              onChange={(e) => handleFieldChange("internalStatus", e.target.value)}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Launch Window</label>
            <input
              type="text"
              value={editValues.launchWindow || ""}
              onChange={(e) => handleFieldChange("launchWindow", e.target.value)}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Budget Type</label>
            <input
              type="text"
              value={editValues.budgetType || ""}
              onChange={(e) => handleFieldChange("budgetType", e.target.value)}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">Dependency</label>
            <input
              type="text"
              value={editValues.dependency || ""}
              onChange={(e) => handleFieldChange("dependency", e.target.value || null)}
              placeholder="None"
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      {/* Execution Tasks Section */}
      {project.tasks && project.tasks.length > 0 && (
        <div className="mt-6 pt-4 border-t border-slate-100">
          <h5 className="text-sm font-semibold text-slate-900 mb-3">Execution Tasks</h5>
          <div className="space-y-2">
            {project.tasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                <div>
                  <div className="font-medium text-slate-800">{task.name || `Task ${task.id}`}</div>
                  <div className="text-xs text-slate-500 flex gap-3 mt-1">
                    <span>Assignee: {TEAM_ROSTER.find(m => m.id === task.assigneeId)?.name || task.assigneeId}</span>
                    <span>Category: {task.laborCategory?.replace("_", " ") || "Standard"}</span>
                    {task.dependencyIds && task.dependencyIds.length > 0 && (
                      <span className="text-amber-600">Depends on: {task.dependencyIds.join(", ")}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-semibold text-slate-700">{task.remainingHours}h</div>
                  <button
                    onClick={() => handleSplitTask(task)}
                    className="p-1.5 text-indigo-600 hover:bg-indigo-100 rounded transition-colors"
                    title="Split by Labor Type"
                  >
                    <Split className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
