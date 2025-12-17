"use client";

import { Calculator, AlertTriangle, Clock, DollarSign, ArrowRight, Link2 } from "lucide-react";
import { useState, useEffect } from "react";
import { UnifiedProjectModel } from "@/lib/unified-project-model";

interface IntegratedScenarioEngineProps {
  clientMode?: boolean;
}

export function IntegratedScenarioEngine({ clientMode = false }: IntegratedScenarioEngineProps) {
  const [unifiedModel] = useState(() => UnifiedProjectModel.getInstance());
  const [scenario, setScenario] = useState(unifiedModel.getProjectScenario());
  const [teamConfig, setTeamConfig] = useState(unifiedModel.getTeamConfiguration());
  const [resourceValidation, setResourceValidation] = useState(unifiedModel.getResourceValidation());

  useEffect(() => {
    setScenario(unifiedModel.getProjectScenario());
    setTeamConfig(unifiedModel.getTeamConfiguration());
    setResourceValidation(unifiedModel.getResourceValidation());
  }, [unifiedModel]);

  const bottleneck = resourceValidation.length > 0 
    ? resourceValidation.reduce((max, current) => 
        current.loadPercentage > max.loadPercentage ? current : max
      )
    : null;

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case "low": return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "medium": return "text-amber-600 bg-amber-50 border-amber-200";
      case "high": return "text-rose-600 bg-rose-50 border-rose-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  if (clientMode) return null;

  return (
    <div className="space-y-6">
      {/* Data Flow Indicator */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 flex items-center justify-center gap-3 text-sm">
        <span className="font-medium text-slate-600">Team Builder</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-slate-600">Resource Validation</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">Scenario Engine</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-slate-600">Financial Model</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-slate-900">Project Scenario Engine</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link2 className="w-3 h-3" />
            <span>Data from Team Builder &amp; Resource Validation</span>
          </div>
        </div>

        {/* Input Panel - Now shows Target vs Validated */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Target Inputs (from Team Builder) */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-4">Target Inputs (from Team Builder)</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Target Budget</span>
                <span className="font-mono font-semibold text-slate-900">
                  ${Math.round(scenario.targetBudget).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Target Timeline</span>
                <span className="font-mono font-semibold text-slate-900">
                  {scenario.targetTimeline} months
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Team Size</span>
                <span className="font-mono font-semibold text-slate-900">
                  {teamConfig.members.length} people
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Project Size</span>
                <span className="font-mono font-semibold text-slate-900">
                  {teamConfig.projectSize.toLocaleString()} words
                </span>
              </div>
            </div>
          </div>

          {/* Validated Results (from Resource Validation) */}
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-4">Validated Results (from Resource Validation)</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">Total Cost</span>
                <span className="font-mono font-bold text-blue-900">
                  ${Math.round(scenario.validatedBudget).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">Timeline</span>
                <span className={`font-mono font-bold ${scenario.validatedTimeline > scenario.targetTimeline ? "text-red-600" : "text-blue-900"}`}>
                  {scenario.validatedTimeline} months
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">Coordination Overhead</span>
                <span className="font-mono font-semibold text-blue-900">
                  {Math.round(teamConfig.coordinationOverhead * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">Feasibility</span>
                <span className={`font-semibold ${scenario.feasible ? "text-emerald-600" : "text-red-600"}`}>
                  {scenario.feasible ? "✓ Feasible" : "✗ At Risk"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className={`p-4 rounded-lg border ${getRiskColor(scenario.riskLevel)}`}>
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              {scenario.feasible ? "✅ Project Feasible" : "❌ Project At Risk"}
            </span>
            <span className="px-2 py-1 rounded text-xs font-medium uppercase">
              {scenario.riskLevel} RISK
            </span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-600 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">Total Cost</span>
            </div>
            <div className="text-xl font-bold text-slate-900">
              ${Math.round(scenario.validatedBudget).toLocaleString()}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              vs ${Math.round(scenario.targetBudget).toLocaleString()} target
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-600 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Timeline</span>
            </div>
            <div className={`text-xl font-bold ${scenario.validatedTimeline > scenario.targetTimeline ? "text-red-600" : "text-slate-900"}`}>
              {scenario.validatedTimeline} months
            </div>
            <div className="text-xs text-slate-500 mt-1">
              vs {scenario.targetTimeline} months target
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-600 mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Bottlenecks</span>
            </div>
            <div className="text-xl font-bold text-slate-900">
              {scenario.bottlenecks.length}
            </div>
            <div className="text-xs text-slate-500 mt-1">critical issues</div>
          </div>
        </div>

        {/* Bottleneck Details */}
        {scenario.bottlenecks.length > 0 && (
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
            <h4 className="font-semibold text-rose-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Bottlenecks (from Resource Validation)
            </h4>
            <ul className="text-sm text-rose-700 space-y-1">
              {scenario.bottlenecks.map((bottleneck, i) => (
                <li key={i}>• {bottleneck}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Data Source Explanation */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
          <h4 className="font-semibold text-slate-800 mb-2">How This Works</h4>
          <ul className="space-y-1">
            <li>• <strong>Target Budget/Timeline</strong> are pulled from your Team Builder configuration</li>
            <li>• <strong>Total Cost</strong> is calculated from Team Builder&apos;s Total Project Cost</li>
            <li>• <strong>Timeline</strong> is validated by the Who Does What page based on the longest critical path</li>
            <li>• <strong>Bottleneck</strong> warnings come directly from overloaded team members in Resource Validation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
