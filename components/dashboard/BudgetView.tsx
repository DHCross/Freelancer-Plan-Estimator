
"use client";

import { useEffect, useState, useMemo } from "react";
import { DollarSign, ShieldAlert, Calendar, Plus, Upload, RotateCcw, Copy, Edit2, Save, X, Check, ChevronDown } from "lucide-react";
import { formatCurrency, getPublished, setPublished } from "@/lib/utils";
import type { DisplayProject, QuarterBuckets, Project } from "@/lib/types";

interface BudgetViewProps {
  analysis: DisplayProject[];
  quarters: QuarterBuckets;
  clientMode: boolean;
  onProjectUpdate?: (projectId: number, field: keyof Project, value: any) => void;
}

interface ProjectTemplate {
  name: string;
  type: string;
  targetWords: number;
  estimatedHours: number;
  budgetType: string;
}

const PROJECT_TEMPLATES: ProjectTemplate[] = [
  { name: "Small Adventure", type: "Small Adventure", targetWords: 20000, estimatedHours: 80, budgetType: "Revenue Generator" },
  { name: "Large Adventure", type: "Large Adventure", targetWords: 97000, estimatedHours: 388, budgetType: "Revenue Generator" },
  { name: "Player Sourcebook", type: "Player Sourcebook", targetWords: 75000, estimatedHours: 300, budgetType: "Flagship Release" },
  { name: "Lore/Structure", type: "Lore/Structure", targetWords: 30000, estimatedHours: 120, budgetType: "CapEx (Enabler)" },
  { name: "Custom Project", type: "Custom", targetWords: 25000, estimatedHours: 100, budgetType: "Custom" },
];

interface EditState {
  [projectId: number]: boolean;
}

interface SelectionState {
  [projectId: number]: boolean;
}

const QUARTERS = ["Q1", "Q2", "Q3", "Q4", "Dec 22 Deadline", "Ongoing"];

export function BudgetView({ analysis, quarters, clientMode, onProjectUpdate }: BudgetViewProps) {
  // Convert analysis to local state for editing in internal mode
  const [items, setItems] = useState<DisplayProject[]>(analysis);
  const [editStates, setEditStates] = useState<EditState>({});
  const [selectionStates, setSelectionStates] = useState<SelectionState>({});
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<ProjectTemplate>(PROJECT_TEMPLATES[0]);
  const [history, setHistory] = useState<DisplayProject[][]>([]);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [undoMessage, setUndoMessage] = useState<string | null>(null);

  useEffect(() => {
    const merged = analysis.map((p) => {
      const published = getPublished(p.id);
      return {
        ...p,
        estCost: published?.estCost ?? p.estCost,
        displayDate: published?.displayDate ?? p.displayDate ?? p.launchWindow,
      } as DisplayProject;
    });
    setItems(merged);
  }, [analysis]);

  // Helper to update a specific item
  const updateItem = (id: number, field: keyof DisplayProject, value: string | number) => {
    // Save to history before change
    setHistory(prev => [...prev.slice(-9), [...items]]);
    
    setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    // Also update parent data if handler provided
    if (onProjectUpdate) {
      onProjectUpdate(id, field as keyof Project, value);
    }
    // Show save feedback
    setSaveMessage("Changes saved");
    setTimeout(() => setSaveMessage(null), 2000);
  };

  // Helper to add new project
  const addProject = (template?: ProjectTemplate, targetQuarter?: string) => {
    const newProject: DisplayProject = {
      id: Math.max(...items.map(p => p.id), 0) + 1,
      name: template?.name ?? "New Project",
      type: template?.type ?? "Custom",
      clientType: "Internal",
      targetWords: template?.targetWords ?? 25000,
      total: template?.estimatedHours ?? 100,
      assignedTo: "dan",
      internalStatus: "Planning",
      clientStatus: "Internal",
      stakeholder: "Dan",
      launchWindow: targetQuarter ?? "Q2 2026",
      displayDate: targetQuarter ?? "Q2 2026",
      budgetType: template?.budgetType ?? "Custom",
      dependency: null,
      revenuePotential: "TBD",
      estCost: (template?.estimatedHours ?? 100) * 20
    };
    setItems(prev => [...prev, newProject]);
    if (onProjectUpdate) {
      onProjectUpdate(newProject.id, 'name', newProject.name);
    }
    setSaveMessage("Project added");
    setTimeout(() => setSaveMessage(null), 2000);
  };

  // Helper to delete project
  const deleteProject = (id: number) => {
    setHistory(prev => [...prev.slice(-9), [...items]]);
    setItems(prev => prev.filter(item => item.id !== id));
    setSaveMessage("Project deleted");
    setTimeout(() => setSaveMessage(null), 2000);
  };

  // Helper to clone project
  const cloneProject = (id: number) => {
    const original = items.find(item => item.id === id);
    if (!original) return;
    
    const cloned: DisplayProject = {
      ...original,
      id: Math.max(...items.map(p => p.id), 0) + 1,
      name: `${original.name} (Copy)`,
    };
    setItems(prev => [...prev, cloned]);
    setSaveMessage("Project cloned");
    setTimeout(() => setSaveMessage(null), 2000);
  };

  // Helper to undo last change
  const undoLastChange = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setItems(previousState);
    setHistory(prev => prev.slice(0, -1));
    setUndoMessage("Changes undone");
    setTimeout(() => setUndoMessage(null), 2000);
  };

  // Toggle edit state for a project
  const toggleEdit = (id: number) => {
    setEditStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle selection for bulk operations
  const toggleSelection = (id: number) => {
    setSelectionStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Select all projects
  const selectAll = () => {
    const allSelected = items.every(item => selectionStates[item.id]);
    const newSelection: SelectionState = {};
    items.forEach(item => {
      newSelection[item.id] = !allSelected;
    });
    setSelectionStates(newSelection);
  };

  // Bulk delete selected projects
  const bulkDelete = () => {
    const selectedIds = Object.entries(selectionStates).filter(([_, selected]) => selected).map(([id]) => Number(id));
    if (selectedIds.length === 0) return;
    if (!confirm(`Delete ${selectedIds.length} selected projects?`)) return;
    
    setHistory(prev => [...prev.slice(-9), [...items]]);
    setItems(prev => prev.filter(item => !selectedIds.includes(item.id)));
    setSelectionStates({});
    setSaveMessage(`${selectedIds.length} projects deleted`);
    setTimeout(() => setSaveMessage(null), 2000);
  };

  // Move selected projects to a different quarter
  const bulkMoveToQuarter = (targetQuarter: string) => {
    const selectedIds = Object.entries(selectionStates).filter(([_, selected]) => selected).map(([id]) => Number(id));
    if (selectedIds.length === 0) return;
    
    setHistory(prev => [...prev.slice(-9), [...items]]);
    setItems(prev => prev.map(item => 
      selectedIds.includes(item.id) 
        ? { ...item, displayDate: targetQuarter, launchWindow: targetQuarter }
        : item
    ));
    setSelectionStates({});
    setSaveMessage(`${selectedIds.length} projects moved to ${targetQuarter}`);
    setTimeout(() => setSaveMessage(null), 2000);
  };

  // Calculate total budget
  const totalBudget = useMemo(() => {
    return items.reduce((acc, item) => acc + (item.estCost ?? 0), 0);
  }, [items]);

  // Group items by quarter
  const groupedItems = useMemo(() => {
    const groups: Record<string, DisplayProject[]> = {};
    QUARTERS.forEach(q => groups[q] = []);
    items.forEach(item => {
      const key = QUARTERS.find(q => (item.displayDate ?? item.launchWindow ?? "").includes(q)) || "Q4";
      groups[key].push(item);
    });
    return groups;
  }, [items]);

  const [publishMessage, setPublishMessage] = useState<string | null>(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePublishAll = () => {
    if (!confirm("Publish all current internal changes to client view? This will overwrite current client values.")) return;
    items.forEach((item) => {
      setPublished(item.id, { estCost: item.estCost, displayDate: item.displayDate ?? item.launchWindow });
    });
    setPublishMessage("All items published to Client view.");
    setTimeout(() => setPublishMessage(null), 3000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header with actions */}
      <div className={`p-6 rounded-xl shadow-lg ${clientMode ? "bg-slate-900 text-white" : "bg-indigo-900 text-white border-b-4 border-indigo-500"}`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-1">
              <DollarSign className="w-6 h-6 text-green-400" />
              {clientMode ? "2026 Budget Roadmap" : "Internal Cost Controller"}
            </h3>
            <p className="text-slate-300 text-sm opacity-80">
              {clientMode
                ? "Projected capital requirements aligned with launch windows."
                : "Adjust hours, risk buffers, and timing below to hit target budget."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-green-400">
                ${totalBudget.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Total {clientMode ? "Investment" : "Exposure"}</div>
            </div>
            {!clientMode && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAddDialog(true)}
                  className="flex items-center gap-1 px-3 py-2 bg-green-50 text-green-700 rounded border border-green-100 hover:bg-green-100 transition-colors"
                  title="Add a new project"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Project</span>
                </button>
                <button
                  onClick={handlePublishAll}
                  className="flex items-center gap-1 px-3 py-2 bg-indigo-50 text-indigo-700 rounded border border-indigo-100 hover:bg-indigo-100 transition-colors"
                  title="Publish all changes to client view"
                >
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline">Publish All</span>
                </button>
                <button
                  onClick={undoLastChange}
                  disabled={history.length === 0}
                  className="flex items-center gap-1 px-3 py-2 bg-slate-50 text-slate-700 rounded border border-slate-100 hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Undo last change"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Undo</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Toast notifications */}
      {(saveMessage || undoMessage || publishMessage) && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {saveMessage && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Check className="w-4 h-4" />
              {saveMessage}
            </div>
          )}
          {undoMessage && (
            <div className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              {undoMessage}
            </div>
          )}
          {publishMessage && (
            <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Upload className="w-4 h-4" />
              {publishMessage}
            </div>
          )}
        </div>
      )}

      {/* Add Project Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Project</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Template</label>
                <select
                  value={selectedTemplate.name}
                  onChange={(e) => {
                    const template = PROJECT_TEMPLATES.find(t => t.name === e.target.value);
                    if (template) setSelectedTemplate(template);
                  }}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {PROJECT_TEMPLATES.map(template => (
                    <option key={template.name} value={template.name}>{template.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Target Quarter</label>
                <select
                  value="Q2 2026"
                  onChange={(e) => {
                    // Will use this when adding the project
                  }}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {QUARTERS.map(q => (
                    <option key={q} value={q}>{q} 2026</option>
                  ))}
                </select>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-slate-700 mb-2">Template Preview</h4>
                <div className="text-xs space-y-1 text-slate-600">
                  <div><strong>Type:</strong> {selectedTemplate.type}</div>
                  <div><strong>Words:</strong> {selectedTemplate.targetWords.toLocaleString()}</div>
                  <div><strong>Hours:</strong> {selectedTemplate.estimatedHours}</div>
                  <div><strong>Budget Type:</strong> {selectedTemplate.budgetType}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  addProject(selectedTemplate, "Q2 2026");
                  setShowAddDialog(false);
                }}
                className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Add Project
              </button>
              <button
                onClick={() => setShowAddDialog(false)}
                className="flex-1 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Actions Bar */}
      {!clientMode && Object.values(selectionStates).some(selected => selected) && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-indigo-700">
              {Object.values(selectionStates).filter(selected => selected).length} projects selected
            </span>
            <div className="flex gap-2">
              <button
                onClick={bulkDelete}
                className="px-3 py-1 bg-red-50 text-red-700 rounded border border-red-100 hover:bg-red-100 transition-colors text-sm"
              >
                Delete Selected
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-100 hover:bg-indigo-100 transition-colors text-sm flex items-center gap-1"
                >
                  Move to <ChevronDown className="w-3 h-3" />
                </button>
                {showBulkActions && (
                  <div className="absolute top-full mt-1 left-0 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                    {QUARTERS.map(q => (
                      <button
                        key={q}
                        onClick={() => {
                          bulkMoveToQuarter(q);
                          setShowBulkActions(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50 transition-colors"
                      >
                        {q} 2026
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setSelectionStates({})}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Clear Selection
          </button>
        </div>
      )}

      {/* Quarter Columns */}
      <div className={`${isMobile ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
        {QUARTERS.map(q => {
          const quarterItems = groupedItems[q] || [];
          return (
            <div key={q} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Quarter Header */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-700">
                    {q} 2026
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${quarterItems.length > 0 ? "text-slate-500 bg-slate-200" : "text-slate-400 bg-slate-100"}`}>
                      {quarterItems.length > 0 ? `${quarterItems.length} items` : "Available"}
                    </span>
                    {!clientMode && (
                      <button
                        onClick={() => addProject(undefined, q)}
                        className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors"
                        title={`Add project to ${q}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Quarter Content */}
              <div className={`p-4 ${isMobile ? 'space-y-3' : 'space-y-3'} min-h-[200px]`}>
                {quarterItems.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full min-h-[160px] text-center">
                    <div className="text-slate-300 text-4xl mb-2">📋</div>
                    <p className="text-sm text-slate-400">No projects scheduled</p>
                    {!clientMode && (
                      <button
                        onClick={() => addProject(undefined, q)}
                        className="mt-3 text-xs text-indigo-600 hover:text-indigo-800 underline"
                      >
                        + Add first project
                      </button>
                    )}
                  </div>
                )}
                {quarterItems.map(item => {
                  const cost = item.estCost ?? 0;
                  const isEditing = editStates[item.id];
                  const isSelected = selectionStates[item.id];
                  
                  return (
                    <div 
                      key={item.id} 
                      className={`rounded-lg border-l-4 p-3 text-sm transition-all relative ${
                        clientMode 
                          ? "border-indigo-500 bg-white" 
                          : isSelected
                          ? "border-amber-500 bg-amber-50"
                          : "border-slate-400 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      {/* Project Content */}
                      <div>
                        {clientMode ? (
                          // Client view - read-only
                          <div>
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-bold text-slate-800">{item.name}</span>
                              <span className="font-mono font-bold text-slate-600">${Math.round(cost).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mt-2">
                              <span className="text-[10px] uppercase font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                                {item.budgetType}
                              </span>
                              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {getPublished(item.id)?.displayDate ?? item.displayDate ?? item.launchWindow}
                              </span>
                            </div>
                          </div>
                        ) : (
                          // Internal view - with edit controls
                          <div className="space-y-2">
                            {/* Project Header with Edit Toggle */}
                            <div className="flex justify-between items-center mb-2 border-b border-slate-200 pb-1 gap-2">
                              {isEditing ? (
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  {!clientMode && (
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => toggleSelection(item.id)}
                                      className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                                      title="Select for bulk actions"
                                    />
                                  )}
                                  <input
                                    type="text"
                                    value={item.name}
                                    onChange={e => updateItem(item.id, "name", e.target.value)}
                                    className="font-bold text-indigo-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none px-1 truncate pr-2 flex-1"
                                  />
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  {!clientMode && (
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => toggleSelection(item.id)}
                                      className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                                      title="Select for bulk actions"
                                    />
                                  )}
                                  <span className="font-bold text-indigo-900 truncate flex-1">{item.name}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <span className="font-mono font-bold text-green-600 text-xs">${Math.round(cost).toLocaleString()}</span>
                                <button
                                  onClick={() => toggleEdit(item.id)}
                                  className={`p-1 rounded transition-colors ${isEditing ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                  title={isEditing ? "Save edits" : "Edit project"}
                                >
                                  {isEditing ? <Save className="w-3 h-3" /> : <Edit2 className="w-3 h-3" />}
                                </button>
                                <button
                                  onClick={() => cloneProject(item.id)}
                                  className="p-1 bg-slate-100 text-slate-600 rounded hover:bg-slate-200 transition-colors"
                                  title="Clone project"
                                >
                                  <Copy className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => deleteProject(item.id)}
                                  className="p-1 bg-rose-100 text-rose-600 rounded hover:bg-rose-200 transition-colors"
                                  title="Delete project"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            {isEditing && (
                              <div className="space-y-2">
                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="text-[10px] text-slate-500 uppercase font-bold">Hours</label>
                                    <div className="flex items-center">
                                      <button
                                        type="button"
                                        onClick={() => updateItem(item.id, "total", Math.max(0, item.total - 10))}
                                        className="p-1 bg-slate-100 hover:bg-slate-200 rounded-l border border-slate-300"
                                      >
                                        <ChevronDown className="w-3 h-3" />
                                      </button>
                                      <input
                                        type="number"
                                        value={item.total}
                                        onChange={e => updateItem(item.id, "total", Number(e.target.value))}
                                        className="flex-1 text-xs p-1 border-t border-b border-slate-300 text-center focus:ring-1 focus:ring-indigo-500"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => updateItem(item.id, "total", item.total + 10)}
                                        className="p-1 bg-slate-100 hover:bg-slate-200 rounded-r border border-slate-300"
                                      >
                                        <ChevronDown className="w-3 h-3 rotate-180" />
                                      </button>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-[10px] text-slate-500 uppercase font-bold">Rate</label>
                                    <div className="relative">
                                      <span className="absolute left-1 top-1 text-xs text-slate-400">$</span>
                                      <input
                                        type="number"
                                        value={item.total > 0 ? Math.round(item.estCost / item.total) : 20}
                                        onChange={e => updateItem(item.id, "estCost", Number(e.target.value) * item.total)}
                                        className="w-full text-xs p-1 pl-4 border rounded focus:ring-1 focus:ring-indigo-500"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="text-[10px] text-slate-500 uppercase font-bold">Words</label>
                                    <div className="flex items-center">
                                      <button
                                        type="button"
                                        onClick={() => updateItem(item.id, "targetWords", Math.max(0, item.targetWords - 1000))}
                                        className="p-1 bg-slate-100 hover:bg-slate-200 rounded-l border border-slate-300"
                                      >
                                        <ChevronDown className="w-3 h-3" />
                                      </button>
                                      <input
                                        type="number"
                                        value={item.targetWords}
                                        onChange={e => updateItem(item.id, "targetWords", Number(e.target.value))}
                                        className="flex-1 text-xs p-1 border-t border-b border-slate-300 text-center focus:ring-1 focus:ring-indigo-500"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => updateItem(item.id, "targetWords", item.targetWords + 1000)}
                                        className="p-1 bg-slate-100 hover:bg-slate-200 rounded-r border border-slate-300"
                                      >
                                        <ChevronDown className="w-3 h-3 rotate-180" />
                                      </button>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-[10px] text-slate-500 uppercase font-bold">Type</label>
                                    <select
                                      value={item.type}
                                      onChange={e => updateItem(item.id, "type", e.target.value)}
                                      className="w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                                    >
                                      <option value="Corporate Mandate">Corporate Mandate</option>
                                      <option value="Small Adventure">Small Adventure</option>
                                      <option value="Large Adventure">Large Adventure</option>
                                      <option value="Lore/Structure">Lore/Structure</option>
                                      <option value="Custom">Custom</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="text-[10px] text-slate-500 uppercase font-bold">Assigned To</label>
                                    <select
                                      value={item.assignedTo}
                                      onChange={e => updateItem(item.id, "assignedTo", e.target.value)}
                                      className="w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                                    >
                                      <option value="dan">Dan</option>
                                      <option value="martin">Martin</option>
                                      <option value="matthew">Matthew</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label className="text-[10px] text-slate-500 uppercase font-bold">Status</label>
                                    <select
                                      value={item.internalStatus}
                                      onChange={e => updateItem(item.id, "internalStatus", e.target.value)}
                                      className="w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                                    >
                                      <option value="Priority">Priority</option>
                                      <option value="Critical">Critical</option>
                                      <option value="Drafting">Drafting</option>
                                      <option value="Layout">Layout</option>
                                      <option value="Planning">Planning</option>
                                    </select>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-[10px] text-slate-500 uppercase font-bold">Launch Window</label>
                                  <input
                                    type="text"
                                    value={item.displayDate || item.launchWindow}
                                    onChange={e => updateItem(item.id, "displayDate", e.target.value)}
                                    className="w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => {
                                      setPublished(item.id, { estCost: item.estCost, displayDate: item.displayDate ?? item.launchWindow });
                                    }}
                                    className="text-xs px-2 py-1 rounded bg-emerald-50 border border-emerald-100 text-emerald-600"
                                  >
                                    Publish
                                  </button>
                                </div>
                              </div>
                            )}
                            
                            {/* Quick Actions (always visible) */}
                            {!isEditing && (
                              <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                                <span>{item.type} • {item.assignedTo}</span>
                                <span>{item.internalStatus}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                {quarterItems.length === 0 && (
                  <div className="text-center py-8">
                    <div className="text-xs text-slate-400 italic mb-3">No projects in this quarter</div>
                    {!clientMode && (
                      <button
                        onClick={() => addProject(undefined, q)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-600 rounded border border-indigo-100 hover:bg-indigo-100 transition-colors text-xs"
                      >
                        <Plus className="w-3 h-3" />
                        Add project to {q}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!clientMode && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            Budget Risk Analysis
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-slate-500">Contingency Buffer:</span>
              <div className="font-semibold">15% standard</div>
            </div>
            <div>
              <span className="text-slate-500">Risk Level:</span>
              <div className="font-semibold text-amber-600">Moderate</div>
            </div>
            <div>
              <span className="text-slate-500">Margin Safety:</span>
              <div className="font-semibold text-emerald-600">Within targets</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
