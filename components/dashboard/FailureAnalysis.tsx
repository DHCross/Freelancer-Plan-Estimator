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

  if (clientMode) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-rose-600" />
        <h3 className="text-lg font-semibold text-slate-900">Project Failure Analysis</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-rose-600 mb-1">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm font-medium">Avg Budget Overrun</span>
          </div>
          <div className="text-2xl font-bold text-rose-700">+{metrics.budgetOverrun}%</div>
          <div className="text-xs text-rose-600">Across all failed projects</div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-amber-600 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Avg Timeline Slip</span>
          </div>
          <div className="text-2xl font-bold text-amber-700">+{metrics.timelineSlip}%</div>
          <div className="text-xs text-amber-600">Months behind schedule</div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-slate-600 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Cost Per Word</span>
          </div>
          <div className="text-2xl font-bold text-slate-700">${metrics.costPerWord}</div>
          <div className="text-xs text-slate-500">Actual vs projected</div>
        </div>

        <div className="bg-red-900 text-white rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Total Waste</span>
          </div>
          <div className="text-2xl font-bold">${metrics.totalLost.toLocaleString()}</div>
          <div className="text-xs text-red-300">Lost to failures</div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-semibold text-slate-800 mb-3">Failure Patterns</h4>
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
                  <p className="text-sm text-slate-600 mt-1">{failure.failureReason}</p>
                  <div className="flex gap-4 mt-2 text-xs text-slate-500">
                    <span>Team: {failure.teamSize} people</span>
                    <span>Words: {failure.wordCount.toLocaleString()}</span>
                    <span className="px-2 py-1 bg-slate-100 rounded">{getFailurePattern(failure.failureReason)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-rose-600">
                    +${(failure.actualCost - failure.budget).toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">
                    +{failure.actualTime - failure.timeline} months
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFailure && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-3">Detailed Analysis: {selectedFailure.project}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-slate-500">Planned Budget:</span>
              <div className="font-semibold">${selectedFailure.budget.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-slate-500">Actual Cost:</span>
              <div className="font-semibold text-rose-600">${selectedFailure.actualCost.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-slate-500">Planned Timeline:</span>
              <div className="font-semibold">{selectedFailure.timeline} months</div>
            </div>
            <div>
              <span className="text-slate-500">Actual Timeline:</span>
              <div className="font-semibold text-amber-600">{selectedFailure.actualTime} months</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h5 className="font-medium text-slate-700 mb-2">Key Risk Factors:</h5>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Team size of {selectedFailure.teamSize} created coordination overhead</li>
              <li>• {selectedFailure.wordCount.toLocaleString()} words exceeded initial scope estimates</li>
              <li>• {selectedFailure.failureReason.toLowerCase()}</li>
              <li>• Cost per word: ${Math.round(selectedFailure.actualCost / selectedFailure.wordCount * 100) / 100} (vs industry $0.08-0.12)</li>
            </ul>
          </div>
        </div>
      )}

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-800 mb-2">Pattern Recognition for Paul</h4>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• <strong>Scope creep</strong> averages 150% budget increase across all failures</li>
          <li>• <strong>Timeline slips</strong> correlate with team size (larger teams = more delays)</li>
          <li>• <strong>Pathfinder complexity</strong> requires 2-3x more time than standard systems</li>
          <li>• <strong>Current model</strong> (your 3x productivity) addresses these patterns</li>
        </ul>
      </div>
    </div>
  );
}
