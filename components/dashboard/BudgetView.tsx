
"use client";

import { useEffect, useState, useMemo } from "react";
import { DollarSign, ShieldAlert, Calendar } from "lucide-react";
import { formatCurrency, getPublished, setPublished } from "@/lib/utils";
import type { DisplayProject, QuarterBuckets, Project } from "@/lib/types";

interface BudgetViewProps {
  analysis: DisplayProject[];
  quarters: QuarterBuckets;
  clientMode: boolean;
  onProjectUpdate?: (projectId: number, field: keyof Project, value: any) => void;
}

const QUARTERS = ["Q1", "Q2", "Q3", "Q4", "Dec 22 Deadline", "Ongoing"];

export function BudgetView({ analysis, quarters, clientMode, onProjectUpdate }: BudgetViewProps) {
  // Convert analysis to local state for editing in internal mode
  const [items, setItems] = useState<DisplayProject[]>(analysis);

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
    setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    // Also update parent data if handler provided
    if (onProjectUpdate) {
      onProjectUpdate(id, field as keyof Project, value);
    }
  };

  // Helper to add new project
  const addProject = () => {
    const newProject: DisplayProject = {
      id: Math.max(...items.map(p => p.id), 0) + 1,
      name: "New Project",
      type: "Custom",
      clientType: "Internal",
      targetWords: 25000,
      assignedTo: "dan",
      internalStatus: "Planning",
      clientStatus: "Internal",
      stakeholder: "Dan",
      launchWindow: "Q2 2026",
      budgetType: "Custom",
      dependency: null,
      revenuePotential: "TBD",
      total: 0,
      estCost: 0
    };
    setItems(prev => [...prev, newProject]);
    if (onProjectUpdate) {
      onProjectUpdate(newProject.id, 'name', newProject.name);
    }
  };

  // Helper to delete project
  const deleteProject = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
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
      <div className={`p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${clientMode ? "bg-slate-900 text-white" : "bg-indigo-900 text-white border-b-4 border-indigo-500"}`}>
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
        <div className="text-right">
          <div className="text-4xl font-mono font-bold text-green-400">
            ${totalBudget.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Total {clientMode ? "Investment" : "Exposure"}</div>
        </div>
        {!clientMode && (
          <div className="flex items-center gap-3">
            <button
              onClick={addProject}
              className="text-xs px-3 py-2 bg-green-50 text-green-700 rounded border border-green-100 hover:bg-green-100"
            >
              + Add Project
            </button>
            <button
              className="text-xs px-3 py-2 bg-indigo-50 text-indigo-700 rounded border border-indigo-100"
              onClick={handlePublishAll}
            >
              Publish All
            </button>
          </div>
        )}
      </div>
      {publishMessage && (
        <div className="text-sm text-emerald-600">
          {publishMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {QUARTERS.map(q => (
          <div key={q} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <h4 className="font-bold text-slate-700 mb-3 border-b pb-2 flex justify-between items-center">
              {q} 2026
              <span className="text-xs font-normal text-slate-400">
                {groupedItems[q]?.length || 0} items
              </span>
            </h4>
            <div className="space-y-3 flex-1">
              {groupedItems[q]?.map(item => {
                const cost = item.estCost ?? 0;
                return (
                  <div key={item.id} className={`rounded-lg border-l-4 p-3 text-sm transition-all ${clientMode ? "border-indigo-500 bg-white" : "border-slate-400 bg-slate-50"}`}>
                    {clientMode ? (
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
                      <div className="space-y-3">
                        <div className="flex justify-between items-center mb-1 border-b border-slate-200 pb-1">
                          <input
                            type="text"
                            value={item.name}
                            onChange={e => updateItem(item.id, "name", e.target.value)}
                            className="font-bold text-indigo-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none px-1 truncate pr-2"
                          />
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-green-600">${Math.round(cost).toLocaleString()}</span>
                            <button
                              onClick={() => deleteProject(item.id)}
                              className="text-rose-500 hover:text-rose-700 text-xs"
                              title="Delete project"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-slate-500 uppercase font-bold">Hours</label>
                            <input
                              type="number"
                              value={item.total}
                              onChange={e => updateItem(item.id, "total", Number(e.target.value))}
                              className="w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                            />
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
                            <input
                              type="number"
                              value={item.targetWords}
                              onChange={e => updateItem(item.id, "targetWords", Number(e.target.value))}
                              className="w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                            />
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
                  </div>
                );
              })}
              {(!groupedItems[q] || groupedItems[q].length === 0) && (
                <div className="text-center py-4 text-xs text-slate-400 italic">No allocation</div>
              )}
            </div>
          </div>
        ))}
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
