"use client";

import { useState } from "react";
import { Plus, LayoutGrid, Columns, ArrowRightLeft } from "lucide-react";
import { ScenarioCard, ScenarioConfig, ScenarioResult } from "./ScenarioCard";
import { Project } from "@/lib/types";

interface ScenarioWorkspaceProps {
  clientMode?: boolean;
  projects?: Project[];
}

interface ScenarioData {
  id: string;
  config: ScenarioConfig;
  result: ScenarioResult | null;
}

const DEFAULT_CONFIG: ScenarioConfig = {
  name: "New Scenario",
  teamSize: 2,
  budget: 25000,
  timeline: 6,
  wordCount: 50000,
  complexity: "standard",
  quality: "professional",
};

export function ScenarioWorkspace({ clientMode = false, projects = [] }: ScenarioWorkspaceProps) {
  const [scenarios, setScenarios] = useState<ScenarioData[]>([
    { id: "1", config: DEFAULT_CONFIG, result: null }
  ]);
  const [viewMode, setViewMode] = useState<"grid" | "compare">("grid");

  const addScenario = () => {
    const newId = (scenarios.length + 1).toString() + "-" + Date.now();
    setScenarios([...scenarios, { id: newId, config: DEFAULT_CONFIG, result: null }]);
  };

  const duplicateScenario = (id: string) => {
    const original = scenarios.find(s => s.id === id);
    if (original) {
        const newId = (scenarios.length + 1).toString() + "-" + Date.now();
        setScenarios([...scenarios, { ...original, id: newId }]);
    }
  }

  const removeScenario = (id: string) => {
      if (scenarios.length > 1) {
          setScenarios(scenarios.filter(s => s.id !== id));
      }
  };

  const updateScenario = (id: string, config: ScenarioConfig, result: ScenarioResult | null) => {
    setScenarios(scenarios.map(s => s.id === id ? { ...s, config, result } : s));
  };

  if (clientMode) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <div>
            <h2 className="text-2xl font-bold text-slate-900">Scenario Workspace</h2>
            <p className="text-slate-600">Compare different production strategies side-by-side.</p>
         </div>
         <div className="flex gap-2">
            <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-white shadow text-indigo-600" : "text-slate-500 hover:text-slate-700"}`}
                    title="Grid View"
                >
                    <LayoutGrid className="w-5 h-5" />
                </button>
                 <button
                    onClick={() => setViewMode("compare")}
                    className={`p-2 rounded ${viewMode === "compare" ? "bg-white shadow text-indigo-600" : "text-slate-500 hover:text-slate-700"}`}
                    title="Comparison Table"
                >
                    <Columns className="w-5 h-5" />
                </button>
            </div>
            <button
                onClick={addScenario}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
                <Plus className="w-5 h-5" />
                Add Scenario
            </button>
         </div>
      </div>

      {viewMode === "grid" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
                <ScenarioCard
                    key={scenario.id}
                    id={scenario.id}
                    config={scenario.config}
                    result={scenario.result}
                    onUpdate={updateScenario}
                    onDelete={scenarios.length > 1 ? removeScenario : undefined}
                    onDuplicate={duplicateScenario}
                    projects={projects}
                    baselineConfig={scenarios.length > 1 && scenarios[0].id !== scenario.id ? scenarios[0].config : undefined}
                />
            ))}
          </div>
      ) : (
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-700 font-medium">
                        <tr>
                            <th className="p-4 border-b">Metric</th>
                            {scenarios.map((s, i) => (
                                <th key={s.id} className="p-4 border-b min-w-[200px]">
                                    {s.config.name || `Scenario ${i + 1}`}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                         <tr>
                            <td className="p-4 font-medium text-slate-900">Config: Team Size</td>
                            {scenarios.map(s => <td key={s.id} className="p-4 text-slate-600">{s.config.teamSize} people</td>)}
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-slate-900">Config: Budget</td>
                            {scenarios.map(s => <td key={s.id} className="p-4 text-slate-600">${s.config.budget.toLocaleString()}</td>)}
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-slate-900">Config: Timeline</td>
                            {scenarios.map(s => <td key={s.id} className="p-4 text-slate-600">{s.config.timeline} months</td>)}
                        </tr>
                         <tr>
                            <td className="p-4 font-medium text-slate-900">Config: Word Count</td>
                            {scenarios.map(s => <td key={s.id} className="p-4 text-slate-600">{s.config.wordCount.toLocaleString()}</td>)}
                        </tr>
                        <tr className="bg-slate-50/50">
                            <td className="p-4 font-medium text-slate-900">Result: Total Cost</td>
                            {scenarios.map(s => (
                                <td key={s.id} className={`p-4 font-bold ${s.result && s.result.totalCost > s.config.budget ? "text-rose-600" : "text-emerald-600"}`}>
                                    {s.result ? `$${Math.round(s.result.totalCost).toLocaleString()}` : "-"}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-slate-50/50">
                            <td className="p-4 font-medium text-slate-900">Result: Calculated Timeline</td>
                            {scenarios.map(s => (
                                <td key={s.id} className={`p-4 font-bold ${s.result && s.result.timeline > s.config.timeline ? "text-rose-600" : "text-emerald-600"}`}>
                                    {s.result ? `${s.result.timeline} months` : "-"}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-slate-50/50">
                            <td className="p-4 font-medium text-slate-900">Result: Feasibility</td>
                            {scenarios.map(s => (
                                <td key={s.id} className="p-4">
                                    {s.result ? (
                                        <span className={`inline-flex px-2 py-1 rounded text-xs font-semibold ${s.result.feasible ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                                            {s.result.feasible ? "Feasible" : "Not Feasible"}
                                        </span>
                                    ) : "-"}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
              </div>
          </div>
      )}
    </div>
  );
}
