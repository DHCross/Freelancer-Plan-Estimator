"use client";

import { AlertTriangle, TrendingDown, Target, Zap, Clock } from "lucide-react";
import { useState } from "react";

interface ProjectFailure {
  project: string;
  teamSize: number;
  budget: number;
  timeline: number;
  actualCost: number;
  actualTime: number;
  failureReason: string;
  wordCount: number;
}

const failureData: ProjectFailure[] = [
  {
    project: "Ravenous Coast A1",
    teamSize: 4,
    budget: 85000,
    timeline: 8,
    actualCost: 120000,
    actualTime: 12,
    failureReason: "Scope creep (17k → 158k words)",
    wordCount: 158000
  },
  {
    project: "Pathfinder Conversion",
    teamSize: 3,
    budget: 45000,
    timeline: 6,
    actualCost: 62000,
    actualTime: 9,
    failureReason: "System complexity underestimated",
    wordCount: 75000
  },
  {
    project: "Video Game RPG",
    teamSize: 5,
    budget: 120000,
    timeline: 10,
    actualCost: 180000,
    actualTime: 14,
    failureReason: "Coordination breakdown",
    wordCount: 200000
  }
];

export function FailureAnalysis({ clientMode = false }: { clientMode?: boolean }) {
  const [selectedFailure, setSelectedFailure] = useState<ProjectFailure | null>(null);

  const calculateMetrics = () => {
    const avgBudgetOverrun = failureData.reduce((sum, f) => sum + ((f.actualCost - f.budget) / f.budget), 0) / failureData.length;
    const avgTimelineSlip = failureData.reduce((sum, f) => sum + ((f.actualTime - f.timeline) / f.timeline), 0) / failureData.length;
    const avgCostPerWord = failureData.reduce((sum, f) => sum + (f.actualCost / f.wordCount), 0) / failureData.length;
    
    return {
      budgetOverrun: Math.round(avgBudgetOverrun * 100),
      timelineSlip: Math.round(avgTimelineSlip * 100),
      costPerWord: Math.round(avgCostPerWord * 100) / 100,
      totalLost: failureData.reduce((sum, f) => sum + (f.actualCost - f.budget), 0)
    };
  };

  const metrics = calculateMetrics();

  const getFailurePattern = (reason: string) => {
    if (reason.includes("scope")) return "Scope Creep";
    if (reason.includes("complex")) return "Technical Debt";
    if (reason.includes("coordination")) return "Team Breakdown";
    return "Unknown";
  };

  const getSuccessPattern = (reason: string) => {
    if (reason.includes("scope")) return "Scope Control";
    if (reason.includes("complex")) return "Complexity Planning";
    if (reason.includes("coordination")) return "Team Coordination";
    return "Process Improvement";
  };

  const getPreventionStrategy = (reason: string) => {
    if (reason.includes("scope")) return "Implement early scope checkpoints";
    if (reason.includes("complex")) return "Conduct thorough complexity assessment";
    if (reason.includes("coordination")) return "Optimize team communication protocols";
    return "Establish clear project governance";
  };

  const getOptimalTeamSize = (currentSize: number) => {
    if (currentSize > 4) return "3-4 people";
    if (currentSize < 3) return "3 people";
    return "current size";
  };

  const getSpecificStrategy = (reason: string) => {
    if (reason.includes("scope")) return "Set clear scope boundaries at 25% intervals";
    if (reason.includes("complex")) return "Allocate 2-3x time for complex system conversions";
    if (reason.includes("coordination")) return "Implement daily standups and clear role definitions";
    return "Use agile milestones with regular review points";
  };

  if (clientMode) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-emerald-600" />
        <h3 className="text-lg font-semibold text-slate-900">Project Success Insights</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-emerald-600 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Budget Accuracy Target</span>
          </div>
          <div className="text-2xl font-bold text-emerald-700">±15%</div>
          <div className="text-xs text-emerald-600">Achievable with proper scope control</div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Timeline Precision</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">±10%</div>
          <div className="text-xs text-blue-600">With team size optimization</div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-indigo-600 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Efficiency Goal</span>
          </div>
          <div className="text-2xl font-bold text-indigo-700">$0.10</div>
          <div className="text-xs text-indigo-500">Cost per word with optimized workflow</div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Potential Savings</span>
          </div>
          <div className="text-2xl font-bold text-purple-700">${metrics.totalLost.toLocaleString()}</div>
          <div className="text-xs text-purple-500">Available through better planning</div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-semibold text-slate-800 mb-3">Learning Opportunities & Prevention Strategies</h4>
        <div className="space-y-3">
          {failureData.map((failure, i) => (
            <div 
              key={i}
              className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 cursor-pointer transition-colors"
              onClick={() => setSelectedFailure(failure)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold text-slate-800">{failure.project}</h5>
                  <p className="text-sm text-emerald-600 mt-1">Key lesson: {getPreventionStrategy(failure.failureReason)}</p>
                  <div className="flex gap-4 mt-2 text-xs text-slate-500">
                    <span>Team: {failure.teamSize} people</span>
                    <span>Words: {failure.wordCount.toLocaleString()}</span>
                    <span className="px-2 py-1 bg-emerald-100 rounded text-emerald-700">{getSuccessPattern(failure.failureReason)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-emerald-600">
                    Save ${(failure.actualCost - failure.budget).toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">
                    Preventable with better planning
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFailure && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-800 mb-3">Success Strategy: {selectedFailure.project}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-slate-500">Target Budget:</span>
              <div className="font-semibold">${selectedFailure.budget.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-slate-500">Avoidable Cost:</span>
              <div className="font-semibold text-emerald-600">${(selectedFailure.actualCost - selectedFailure.budget).toLocaleString()}</div>
            </div>
            <div>
              <span className="text-slate-500">Target Timeline:</span>
              <div className="font-semibold">{selectedFailure.timeline} months</div>
            </div>
            <div>
              <span className="text-slate-500">Preventable Delay:</span>
              <div className="font-semibold text-emerald-600">{selectedFailure.actualTime - selectedFailure.timeline} months</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-emerald-200">
            <h5 className="font-medium text-emerald-700 mb-2">Prevention Strategies:</h5>
            <ul className="text-sm text-emerald-600 space-y-1">
              <li>• Optimize team size to {getOptimalTeamSize(selectedFailure.teamSize)} for better coordination</li>
              <li>• Implement scope checkpoints for projects over {Math.round(selectedFailure.wordCount * 0.8).toLocaleString()} words</li>
              <li>• {getSpecificStrategy(selectedFailure.failureReason)}</li>
              <li>• Target cost per word: $0.08-0.12 (vs current ${Math.round(selectedFailure.actualCost / selectedFailure.wordCount * 100) / 100})</li>
            </ul>
          </div>
        </div>
      )}

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <h4 className="font-semibold text-emerald-800 mb-2">Success Patterns for Future Projects</h4>
        <ul className="text-sm text-emerald-700 space-y-1">
          <li>• <strong>Scope management</strong> can prevent 150% budget increases through early checkpoints</li>
          <li>• <strong>Team optimization</strong> (3-4 people max) reduces timeline delays by 40%</li>
          <li>• <strong>Complexity assessment</strong> for systems like Pathfinder requires 2-3x time allocation</li>
          <li>• <strong>Current workflow model</strong> (3x productivity) successfully addresses these patterns</li>
        </ul>
      </div>
    </div>
  );
}
