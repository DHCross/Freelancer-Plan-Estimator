"use client";

import { Calculator, AlertTriangle, Clock, DollarSign, ArrowRight, Link2, Users, Save, FolderOpen, GitBranch, Plus, X, Check, Trash2, Wrench } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { UnifiedProjectModel } from "@/lib/unified-project-model";
import { getCapacityColor, getBudgetColor, getTimelineColor, actionColors } from "@/lib/colors";

interface IntegratedScenarioEngineProps {
  clientMode?: boolean;
  onNavigateToTeamBuilder?: () => void;
}

export function IntegratedScenarioEngine({ clientMode = false, onNavigateToTeamBuilder }: IntegratedScenarioEngineProps) {
  const [savedScenarios, setSavedScenarios] = useState<any[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [scenarioName, setScenarioName] = useState("");
  const [showSaveDialog, setShowSaveDialog] = useState(false);
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
      {/* Enhanced Data Flow Indicator with Progress */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-600">Integrated Planning Workflow</span>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
            Step 3 of 4
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium mb-1">
                ✓
              </div>
              <span className="text-xs font-medium text-slate-700">1. Team Builder</span>
              <span className="text-xs text-emerald-600">Complete</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-emerald-500"></div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium mb-1">
                ✓
              </div>
              <span className="text-xs font-medium text-slate-700">2. Resource Validation</span>
              <span className="text-xs text-emerald-600">Complete</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-emerald-500"></div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium mb-1 ring-2 ring-indigo-200 ring-offset-2">
                3
              </div>
              <span className="text-xs font-bold text-indigo-700">3. Scenario Engine</span>
              <span className="text-xs font-medium text-indigo-600">Current</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-slate-300"></div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-medium mb-1">
                4
              </div>
              <span className="text-xs font-medium text-slate-600">4. Financial Model</span>
              <span className="text-xs text-slate-500">Next</span>
            </div>
          </div>
        </div>
        <div className="mt-3 bg-indigo-50 border border-indigo-200 rounded-lg p-2">
          <p className="text-xs text-indigo-700">
            <span className="font-medium">Current Step:</span> Analyzing project feasibility and identifying bottlenecks. Validating timeline against team capacity.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-slate-900">Project Scenario Engine</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link2 className="w-3 h-3" />
              <span>Data from Team Builder &amp; Resource Validation</span>
            </div>
            {onNavigateToTeamBuilder && (
              <button
                onClick={onNavigateToTeamBuilder}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <Wrench className="w-3 h-3" />
                <span>Edit Team</span>
              </button>
            )}
          </div>
        </div>

        {/* Enhanced Input/Output Panel with Impact Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Target Inputs (from Team Builder) */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-4">Target Inputs</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Target Budget</span>
                <span className="font-mono font-bold text-lg text-slate-900">
                  ${Math.round(scenario.targetBudget).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Target Timeline</span>
                <span className="font-mono font-bold text-lg text-slate-900">
                  {scenario.targetTimeline} months
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Team Size</span>
                <span className="font-mono font-bold text-lg text-slate-900">
                  {teamConfig.members.length} people
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Project Size</span>
                <span className="font-mono font-bold text-lg text-slate-900">
                  {teamConfig.projectSize.toLocaleString()} words
                </span>
              </div>
            </div>
          </div>

          {/* Validated Results (from Resource Validation) */}
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-4">Validated Results</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">Total Cost</span>
                <span className="font-mono font-bold text-lg text-blue-900">
                  ${Math.round(scenario.validatedBudget).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">Timeline</span>
                <span className={`font-mono font-bold text-lg ${scenario.validatedTimeline > scenario.targetTimeline ? "text-red-600" : "text-blue-900"}`}>
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

          {/* NEW: Impact Analysis Column */}
          <div className={`${scenario.feasible ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'} p-4 rounded-xl border`}>
            <h4 className={`font-semibold ${scenario.feasible ? 'text-emerald-700' : 'text-amber-700'} mb-4`}>Impact Analysis</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${scenario.validatedBudget <= scenario.targetBudget ? 'bg-emerald-500' : 'bg-red-500'}`}>
                  {scenario.validatedBudget <= scenario.targetBudget ? '✓' : '✗'}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-700">Budget</div>
                  <div className={`text-xs ${scenario.validatedBudget <= scenario.targetBudget ? 'text-emerald-600' : 'text-red-600'}`}>
                    {scenario.validatedBudget <= scenario.targetBudget 
                      ? `Under by $${Math.round(scenario.targetBudget - scenario.validatedBudget).toLocaleString()}`
                      : `Over by $${Math.round(scenario.validatedBudget - scenario.targetBudget).toLocaleString()}`
                    }
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${scenario.validatedTimeline <= scenario.targetTimeline ? 'bg-emerald-500' : 'bg-red-500'}`}>
                  {scenario.validatedTimeline <= scenario.targetTimeline ? '✓' : '✗'}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-700">Timeline</div>
                  <div className={`text-xs ${scenario.validatedTimeline <= scenario.targetTimeline ? 'text-emerald-600' : 'text-red-600'}`}>
                    {scenario.validatedTimeline <= scenario.targetTimeline 
                      ? `On track (${scenario.validatedTimeline}/${scenario.targetTimeline} months)`
                      : `Over by ${scenario.validatedTimeline - scenario.targetTimeline} months`
                    }
                  </div>
                </div>
              </div>
              
              {/* Risk Explanation */}
              <div className={`p-2 rounded text-xs ${scenario.feasible ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                <div className="font-semibold mb-1">Risk Assessment:</div>
                {scenario.feasible ? (
                  <div>✅ Project meets budget and timeline constraints</div>
                ) : (
                  <div>
                    ⚠️ Timeline extension will increase labor costs over time.
                    Current bottlenecks need resolution to meet targets.
                  </div>
                )}
              </div>
              
              {/* Action Items */}
              {!scenario.feasible && (
                <div className="bg-slate-100 rounded p-2">
                  <div className="text-xs font-semibold text-slate-700 mb-1">Recommended Actions:</div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>• Resolve team bottlenecks in Resource Validation</div>
                    <div>• Consider extending timeline or hiring contractors</div>
                    <div>• Reallocate projects from overloaded team members</div>
                  </div>
                </div>
              )}
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
            <div className="text-3xl font-bold text-slate-900 tabular-nums">
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
            <div className={`text-3xl font-bold tabular-nums ${scenario.validatedTimeline > scenario.targetTimeline ? "text-red-600" : "text-slate-900"}`}>
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
            <div className="text-3xl font-bold text-slate-900 tabular-nums">
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

        {/* Save Scenario Section */}
        {!clientMode && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Save className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900">Scenario Management</h3>
              </div>
              <button
                onClick={() => setShowSaveDialog(true)}
                className={`${actionColors.primary.bg} ${actionColors.primary.bgHover} ${actionColors.primary.text} px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2`}
              >
                <Plus className="w-4 h-4" />
                Save Current Scenario
              </button>
            </div>

            {/* Saved Scenarios List */}
            <div className="space-y-3">
              {savedScenarios.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <FolderOpen className="w-12 h-12 mx-auto mb-3 text-slate-400" />
                  <p className="text-sm">No saved scenarios yet</p>
                  <p className="text-xs mt-1">Save your current configuration to compare different approaches</p>
                </div>
              ) : (
                <div className="grid gap-3">
                  {savedScenarios.map((saved, index) => (
                    <div key={saved.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-slate-900">{saved.name}</h4>
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                              {new Date(saved.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-xs">
                            <div>
                              <span className="text-slate-500">Budget:</span>
                              <div className="font-medium text-slate-900">${saved.data.validatedBudget.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-slate-500">Timeline:</span>
                              <div className="font-medium text-slate-900">{saved.data.validatedTimeline} months</div>
                            </div>
                            <div>
                              <span className="text-slate-500">Team:</span>
                              <div className="font-medium text-slate-900">{saved.data.teamSize} people</div>
                            </div>
                            <div>
                              <span className="text-slate-500">Issues:</span>
                              <div className="font-medium text-slate-900">{saved.data.bottlenecks.length}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => {
                              // Load scenario logic would go here
                              console.log('Load scenario:', saved);
                            }}
                            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                          >
                            Load
                          </button>
                          <button
                            onClick={() => {
                              const updated = savedScenarios.filter(s => s.id !== saved.id);
                              setSavedScenarios(updated);
                            }}
                            className="text-rose-600 hover:text-rose-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Comparison Toggle */}
            {savedScenarios.length > 1 && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className={`${actionColors.secondary.bg} ${actionColors.secondary.bgHover} ${actionColors.secondary.text} px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2 w-full justify-center`}
                >
                  <GitBranch className="w-4 h-4" />
                  {showComparison ? 'Hide' : 'Show'} Scenario Comparison
                </button>
              </div>
            )}
          </div>
        )}

        {/* Scenario Comparison */}
        {showComparison && savedScenarios.length > 1 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">Scenario Comparison</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3 font-medium text-slate-700">Scenario</th>
                    <th className="text-right py-2 px-3 font-medium text-slate-700">Budget</th>
                    <th className="text-right py-2 px-3 font-medium text-slate-700">Timeline</th>
                    <th className="text-right py-2 px-3 font-medium text-slate-700">Team Size</th>
                    <th className="text-right py-2 px-3 font-medium text-slate-700">Bottlenecks</th>
                    <th className="text-center py-2 px-3 font-medium text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {savedScenarios.map((saved, index) => (
                    <tr key={saved.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-3">
                        <div className="font-medium text-slate-900">{saved.name}</div>
                        <div className="text-xs text-slate-500">{new Date(saved.timestamp).toLocaleDateString()}</div>
                      </td>
                      <td className="text-right py-3 px-3 font-mono">${saved.data.validatedBudget.toLocaleString()}</td>
                      <td className="text-right py-3 px-3 font-mono">{saved.data.validatedTimeline} months</td>
                      <td className="text-right py-3 px-3 font-mono">{saved.data.teamSize}</td>
                      <td className="text-right py-3 px-3 font-mono">{saved.data.bottlenecks.length}</td>
                      <td className="text-center py-3 px-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          saved.data.bottlenecks.length === 0 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {saved.data.bottlenecks.length === 0 ? 'Optimal' : 'Has Issues'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Save Scenario Dialog */}
        {showSaveDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Save Scenario</h3>
                <button
                  onClick={() => setShowSaveDialog(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Scenario Name</label>
                  <input
                    type="text"
                    value={scenarioName}
                    onChange={(e) => setScenarioName(e.target.value)}
                    placeholder="e.g., &quot;Conservative Budget&quot;, &quot;Aggressive Timeline&quot;"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-600">
                  <div className="font-medium mb-2">Scenario Summary:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>• Budget: ${scenario.validatedBudget.toLocaleString()}</div>
                    <div>• Timeline: {scenario.validatedTimeline} months</div>
                    <div>• Team: {teamConfig.members.length} people</div>
                    <div>• Issues: {scenario.bottlenecks.length}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (scenarioName.trim()) {
                        const newScenario = {
                          id: Date.now().toString(),
                          name: scenarioName,
                          timestamp: new Date().toISOString(),
                          data: {
                            validatedBudget: scenario.validatedBudget,
                            validatedTimeline: scenario.validatedTimeline,
                            teamSize: teamConfig.members.length,
                            bottlenecks: scenario.bottlenecks
                          }
                        };
                        setSavedScenarios([...savedScenarios, newScenario]);
                        setScenarioName('');
                        setShowSaveDialog(false);
                      }
                    }}
                    disabled={!scenarioName.trim()}
                    className={`flex-1 ${actionColors.success.bg} ${actionColors.success.bgHover} ${actionColors.success.text} px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    <Check className="w-4 h-4" />
                    Save Scenario
                  </button>
                  <button
                    onClick={() => {
                      setScenarioName('');
                      setShowSaveDialog(false);
                    }}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
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
            <li>• <strong>Scenarios</strong> can be saved and compared to analyze different approaches</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
