"use client";

import React, { useState, useMemo } from "react";
import { Save, X, AlertCircle, Trash2 } from "lucide-react";
import { Project, TeamMember } from "@/lib/types";
import { useProducts } from "@/lib/ProductContext";

const STATUSES = [
  { value: "draft", label: "Drafting", color: "bg-blue-100 text-blue-800 border-blue-300" },
  { value: "cleanup", label: "Cleanup", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  { value: "planning", label: "Planning", color: "bg-purple-100 text-purple-800 border-purple-300" },
  { value: "production", label: "Production", color: "bg-orange-100 text-orange-800 border-orange-300" },
  { value: "complete", label: "Complete", color: "bg-green-100 text-green-800 border-green-300" },
];

const QUARTERS = ["Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "Q1 2027", "Q2 2027"];

interface EditableProductGridProps {
  teamRoster: TeamMember[];
}

/**
 * EditableProductGrid - Interactive product management table
 * 
 * DESIGN NOTES FOR CHECKMARKS/SELECTION:
 * - Checkboxes in the first column are BULK SELECTORS ONLY
 * - They enable batch operations (future: bulk delete, bulk status update)
 * - Completion status is indicated SOLELY through the Status column
 * - Users should NOT confuse checkboxes with "completed" projects
 * - If a project is "Completed", this is shown clearly in the Status dropdown
 * - Strikethrough styling is NOT used to avoid confusion
 */
export function EditableProductGrid({ teamRoster }: EditableProductGridProps) {
  const { products, updateProductField, saveProductChanges, discardProductChanges, getPendingChangesForProject, hasUnsavedChanges } =
    useProducts();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const teamOptions = useMemo(
    () => teamRoster.map((t) => ({ id: t.id, name: t.name })),
    [teamRoster]
  );

  const handleToggleSelection = (projectId: number) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === products.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(products.map((p) => p.id)));
    }
  };

  const handleFieldChange = (projectId: number, field: keyof Project, value: unknown) => {
    updateProductField(projectId, field, value);
  };

  const handleSave = async (projectId: number) => {
    await saveProductChanges(projectId);
    setEditingId(null);
  };

  const handleCancel = (projectId: number) => {
    discardProductChanges(projectId);
    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-200">
              <th className="px-3 py-3">
                <input
                  type="checkbox"
                  checked={selectedIds.size === products.length && products.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 cursor-pointer"
                  title="Select/deselect all products for bulk actions"
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Project Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Description</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Owner</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Launch Window</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Word Count</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.map((project) => {
              const isEditing = editingId === project.id;
              const hasPendingChanges = hasUnsavedChanges(project.id);
              const isSelected = selectedIds.has(project.id);
              const pendingData = getPendingChangesForProject(project.id);
              const displayData = pendingData ? { ...project, ...pendingData } : project;
              const rowClass = hasPendingChanges ? "bg-yellow-50 border-l-4 border-yellow-400" : "";

              return (
                <tr key={project.id} className={`${rowClass} hover:bg-slate-50 transition-colors`}>
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggleSelection(project.id)}
                      className="w-4 h-4 cursor-pointer"
                      title="Select this product for bulk actions"
                    />
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="text"
                        value={displayData.name}
                        onChange={(e) => handleFieldChange(project.id, "name", e.target.value)}
                        className="w-full px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    ) : (
                      <span className={`text-sm font-medium ${hasPendingChanges ? "text-yellow-900" : "text-slate-900"}`}>
                        {displayData.name}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="text"
                        value={displayData.type}
                        onChange={(e) => handleFieldChange(project.id, "type", e.target.value)}
                        className="w-full px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    ) : (
                      <span className="text-sm text-slate-600">{displayData.type}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <select
                        value={displayData.assignedTo}
                        onChange={(e) => handleFieldChange(project.id, "assignedTo", e.target.value)}
                        className="w-full px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="">Unassigned</option>
                        {teamOptions.map((team) => (
                          <option key={team.id} value={team.id}>
                            {team.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-sm text-slate-600">
                        {teamRoster.find((t) => t.id === displayData.assignedTo)?.name || "Unassigned"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <select
                        value={displayData.internalStatus}
                        onChange={(e) => handleFieldChange(project.id, "internalStatus", e.target.value)}
                        className="w-full px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        {STATUSES.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className={`inline-block px-2 py-1 rounded text-xs font-medium border ${
                        STATUSES.find((s) => s.value === displayData.internalStatus)?.color || "bg-slate-100 text-slate-800 border-slate-300"
                      }`}>
                        {STATUSES.find((s) => s.value === displayData.internalStatus)?.label || displayData.internalStatus}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <select
                        value={displayData.launchWindow}
                        onChange={(e) => handleFieldChange(project.id, "launchWindow", e.target.value)}
                        className="w-full px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        {QUARTERS.map((quarter) => (
                          <option key={quarter} value={quarter}>
                            {quarter}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-sm text-slate-600">{displayData.launchWindow}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-sm font-medium text-slate-900">{displayData.targetWords?.toLocaleString() || "—"}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {!isEditing ? (
                      <button
                        onClick={() => setEditingId(project.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-teal-50 text-teal-700 rounded hover:bg-teal-100 transition-colors font-medium"
                      >
                        Edit
                      </button>
                    ) : (
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleSave(project.id)}
                          className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100 transition-colors"
                          title="Save changes"
                        >
                          <Save className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleCancel(project.id)}
                          className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-rose-50 text-rose-700 rounded hover:bg-rose-100 transition-colors"
                          title="Discard changes"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {products.some((p) => hasUnsavedChanges(p.id)) && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-yellow-900">Unsaved Changes</p>
            <p className="text-xs text-yellow-700 mt-1">
              You have {products.filter((p) => hasUnsavedChanges(p.id)).length} product(s) with pending changes. 
              Click the save icon on each row to publish your updates.
            </p>
          </div>
        </div>
      )}

      {selectedIds.size > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
          <p className="text-sm font-medium text-blue-900">
            {selectedIds.size} product(s) selected
          </p>
          <button
            className="px-3 py-1 text-sm bg-red-50 text-red-700 hover:bg-red-100 rounded transition-colors flex items-center gap-2"
            title="Delete selected products (feature coming soon)"
          >
            <Trash2 className="w-4 h-4" />
            Delete Selected
          </button>
        </div>
      )}
    </div>
  );
}
