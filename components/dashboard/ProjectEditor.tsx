"use client";

import { useState } from "react";
import { Edit3, Save, X } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectEditorProps {
  project: Project;
  onUpdate: (field: keyof Project, value: any) => void;
  clientMode?: boolean;
}

export function ProjectEditor({ project, onUpdate, clientMode = false }: ProjectEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState<Partial<Project>>({});

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
        <div className several="grid grid-cols-1 md:grid-cols-2 gap-3">
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
    </div>
  );
}
