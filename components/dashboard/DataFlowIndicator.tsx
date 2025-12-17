"use client";

import { ArrowRight, CheckCircle, AlertTriangle, Circle } from "lucide-react";

type FlowStep = "team-builder" | "resource-validation" | "scenario-engine" | "financial-model" | "estimator";

interface DataFlowIndicatorProps {
  activeStep: FlowStep;
  showBottleneckWarning?: boolean;
  compact?: boolean;
}

const STEPS: { id: FlowStep; label: string; shortLabel: string }[] = [
  { id: "team-builder", label: "Team Builder", shortLabel: "Team" },
  { id: "resource-validation", label: "Resource Validation", shortLabel: "Resources" },
  { id: "scenario-engine", label: "Scenario Engine", shortLabel: "Scenario" },
  { id: "financial-model", label: "Financial Model", shortLabel: "Finance" },
];

export function DataFlowIndicator({ 
  activeStep, 
  showBottleneckWarning = false,
  compact = false 
}: DataFlowIndicatorProps) {
  const activeIndex = STEPS.findIndex(s => s.id === activeStep);

  return (
    <div className={`bg-slate-100 border border-slate-200 rounded-lg ${compact ? "p-2" : "p-3"} flex items-center justify-center gap-2 text-sm overflow-x-auto`}>
      {STEPS.map((step, index) => {
        const isActive = step.id === activeStep;
        const isPast = index < activeIndex;
        const isFuture = index > activeIndex;
        const isBottleneck = step.id === "resource-validation" && showBottleneckWarning;

        return (
          <div key={step.id} className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1.5 px-2 py-1 rounded transition-all ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-bold ring-1 ring-indigo-300"
                  : isPast
                  ? "text-emerald-600"
                  : "text-slate-500"
              }`}
            >
              {isPast && <CheckCircle className="w-3 h-3" />}
              {isActive && (
                isBottleneck 
                  ? <AlertTriangle className="w-3 h-3 text-red-500" />
                  : <Circle className="w-3 h-3 fill-current" />
              )}
              <span className={compact ? "hidden sm:inline" : ""}>
                {compact ? step.shortLabel : step.label}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <ArrowRight className={`w-4 h-4 ${isPast ? "text-emerald-400" : "text-slate-300"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function DataFlowMini({ activeStep }: { activeStep: FlowStep }) {
  return (
    <div className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
      <span className="font-medium">Data from:</span>
      {activeStep === "resource-validation" && <span>Team Builder</span>}
      {activeStep === "scenario-engine" && <span>Team Builder + Resource Validation</span>}
      {activeStep === "financial-model" && <span>Team Builder (Project Cost)</span>}
      {activeStep === "estimator" && <span>Team Builder (Member Profiles)</span>}
    </div>
  );
}
