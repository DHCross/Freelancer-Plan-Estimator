"use client";

import React, { useState, useMemo } from "react";
import { Save, X, AlertCircle, Trash2, Filter, ChevronDown } from "lucide-react";
import { Project, TeamMember } from "@/lib/types";
import { useProducts } from "@/lib/ProductContext";
import { PRODUCT_LINES } from "@/lib/constants";

const STATUSES = [
  { value: "draft", label: "Drafting", color: "bg-blue-100 text-blue-800 border-blue-300", priority: 2 },
  { value: "cleanup", label: "Cleanup", color: "bg-yellow-100 text-yellow-800 border-yellow-300", priority: 3 },
  { value: "planning", label: "Planning", color: "bg-purple-100 text-purple-800 border-purple-300", priority: 4 },
  { value: "production", label: "Production", color: "bg-orange-100 text-orange-800 border-orange-300", priority: 1 },
  { value: "complete", label: "Complete", color: "bg-green-100 text-green-800 border-green-300", priority: 5 },
];

const QUARTERS = ["Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "Q1 2027", "Q2 2027"];

// Filter options for quick filtering
const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "draft", label: "Drafting" },
  { value: "cleanup", label: "Cleanup" },
  { value: "planning", label: "Planning" },
  { value: "production", label: "Production" },
  { value: "complete", label: "Complete" },
];

interface EditableProductGridProps {
  teamRoster: TeamMember[];
  onNavigateToProductLines?: (productLineId?: string) => void;
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
export function EditableProductGrid({ teamRoster, onNavigateToProductLines }: EditableProductGridProps) {
  const { products, updateProductField, saveProductChanges, discardProductChanges, getPendingChangesForProject, hasUnsavedChanges } =
    useProducts();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [ownerFilter, setOwnerFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [productLineFilter, setProductLineFilter] = useState<string>("all");
  const [isCompact, setIsCompact] = useState(false);

  const teamOptions = useMemo(
    () => teamRoster.map((t) => ({ id: t.id, name: t.name })),
    [teamRoster]
  );

  const uniqueTypes = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.type));
    return ["all", ...Array.from(set)];
  }, [products]);

  const productLineByProjectId = useMemo(() => {
    const map = new Map<number, string>();
    PRODUCT_LINES.forEach((line) => {
      line.productIds.forEach((pid) => map.set(pid, line.id));
    });
    return map;
  }, []);

  const productLineOptions = useMemo(() => {
    return [
      { value: "all", label: "All" },
      ...PRODUCT_LINES.map((line) => ({ value: line.id, label: line.label })),
    ];
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(p => p.internalStatus === statusFilter);
    }

    // Apply owner filter
    if (ownerFilter !== "all") {
      filtered = filtered.filter((p) => p.assignedTo === ownerFilter);
    }

    // Apply type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((p) => p.type === typeFilter);
    }

    // Apply product line filter (by membership in PRODUCT_LINES)
    if (productLineFilter !== "all") {
      filtered = filtered.filter((p) => productLineByProjectId.get(p.id) === productLineFilter);
    }
    
    // Sort by launch window ascending, then by status priority (production first)
    return [...filtered].sort((a, b) => {
      // First sort by launch window
      const quarterOrder = QUARTERS.indexOf(a.launchWindow) - QUARTERS.indexOf(b.launchWindow);
      if (quarterOrder !== 0) return quarterOrder;
      
      // Then by status priority
      const aPriority = STATUSES.find(s => s.value === a.internalStatus)?.priority ?? 99;
      const bPriority = STATUSES.find(s => s.value === b.internalStatus)?.priority ?? 99;
      return aPriority - bPriority;
    });
  }, [products, statusFilter, ownerFilter, typeFilter, productLineFilter, productLineByProjectId]);

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
    if (selectedIds.size === filteredAndSortedProducts.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredAndSortedProducts.map((p) => p.id)));
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
      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="font-medium">Filters</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Status</label>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none pr-8 pl-3 py-2 text-xs border border-slate-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {FILTER_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Owner</label>
            <div className="relative">
              <select
                value={ownerFilter}
                onChange={(e) => setOwnerFilter(e.target.value)}
                className="appearance-none pr-8 pl-3 py-2 text-xs border border-slate-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="all">All</option>
                {teamOptions.map((team) => (
                  <option key={team.id} value={team.id}>{team.name}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Type</label>
            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="appearance-none pr-8 pl-3 py-2 text-xs border border-slate-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>{type === "all" ? "All" : type}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Product Line</label>
            <div className="relative">
              <select
                value={productLineFilter}
                onChange={(e) => setProductLineFilter(e.target.value)}
                className="appearance-none pr-8 pl-3 py-2 text-xs border border-slate-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {productLineOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => {
              setStatusFilter("all");
              setOwnerFilter("all");
              setTypeFilter("all");
              setProductLineFilter("all");
            }}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
            title="Clear all filters"
          >
            Reset
          </button>
          <button
            onClick={() => setIsCompact(!isCompact)}
            className="text-xs text-slate-500 hover:text-slate-700 px-2 py-1 rounded hover:bg-slate-100"
          >
            {isCompact ? "Comfortable" : "Compact"} view
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10">
            <tr className="bg-slate-50 border-b-2 border-slate-200">
              <th className={`px-3 ${isCompact ? "py-2" : "py-3"}`}>
                <input
                  type="checkbox"
                  checked={selectedIds.size === filteredAndSortedProducts.length && filteredAndSortedProducts.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 cursor-pointer"
                  title="Select/deselect all products for bulk actions"
                />
              </th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-left text-xs font-semibold text-slate-600 uppercase`}>Project Name</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-left text-xs font-semibold text-slate-600 uppercase`}>Description</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-left text-xs font-semibold text-slate-600 uppercase`}>Product Line</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-left text-xs font-semibold text-slate-600 uppercase`}>Owner</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-left text-xs font-semibold text-slate-600 uppercase`}>Status</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-left text-xs font-semibold text-slate-600 uppercase`}>Launch Window</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-center text-xs font-semibold text-slate-600 uppercase`}>Word Count</th>
              <th className={`px-4 ${isCompact ? "py-2" : "py-3"} text-center text-xs font-semibold text-slate-600 uppercase`}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredAndSortedProducts.map((project) => {
              const isEditing = editingId === project.id;
              const hasPendingChanges = hasUnsavedChanges(project.id);
              const isSelected = selectedIds.has(project.id);
              const pendingData = getPendingChangesForProject(project.id);
              const displayData = pendingData ? { ...project, ...pendingData } : project;
              const rowClass = hasPendingChanges ? "bg-yellow-50 border-l-4 border-yellow-400" : "";

              return (
                <tr key={project.id} className={`${rowClass} hover:bg-slate-50 transition-colors`}>
                  <td className={`px-3 ${isCompact ? "py-2" : "py-3"}`}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggleSelection(project.id)}
                      className="w-4 h-4 cursor-pointer"
                      title="Select this product for bulk actions"
                    />
                  </td>
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"}`}>
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
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"}`}>
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
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"}`}>
                    <span className="text-sm text-slate-600">
                      {productLineByProjectId.get(project.id)
                        ? PRODUCT_LINES.find((pl) => pl.id === productLineByProjectId.get(project.id))?.label
                        : "—"}
                    </span>
                    {!isEditing && onNavigateToProductLines && productLineByProjectId.get(project.id) && (
                      <button
                        className="block text-[11px] text-indigo-600 hover:text-indigo-800 mt-1"
                        onClick={() => onNavigateToProductLines(productLineByProjectId.get(project.id) as string)}
                      >
                        View line
                      </button>
                    )}
                  </td>
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"}`}>
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
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"}`}>
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
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"}`}>
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
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"} text-center`}>
                    <span className="text-sm font-medium text-slate-900">{displayData.targetWords?.toLocaleString() || "—"}</span>
                  </td>
                  <td className={`px-4 ${isCompact ? "py-2" : "py-3"} text-center`}>
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

      {/* Empty state for filtered results */}
      {filteredAndSortedProducts.length === 0 && statusFilter !== "all" && (
        <div className="text-center py-8 text-slate-500">
          <p>No products with status "{FILTER_OPTIONS.find(f => f.value === statusFilter)?.label}"</p>
          <button
            onClick={() => setStatusFilter("all")}
            className="mt-2 text-blue-600 hover:underline text-sm"
          >
            Clear filter
          </button>
        </div>
      )}

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
