"use client";

import { Settings } from "lucide-react";
import { Metrics } from "@/lib/types";

interface MetricsEditorProps {
  metrics: Metrics;
  onMetricsUpdate: (field: keyof Metrics, value: number) => void;
  clientMode?: boolean;
}

export function MetricsEditor({ metrics, onMetricsUpdate, clientMode = false }: MetricsEditorProps) {
  if (clientMode) return null;

  const metricFields: Array<{
    key: keyof Metrics;
    label: string;
    unit: string;
    step?: number;
    min?: number;
    max?: number;
    description: string;
  }> = [
    {
      key: "writingRate",
      label: "Writing Rate",
      unit: "hrs/1k words",
      step: 0.1,
      min: 0.1,
      description: "Hours required to write 1,000 words"
    },
    {
      key: "editingPagesPerHour",
      label: "Editing Speed",
      unit: "pages/hr",
      step: 0.5,
      min: 0.5,
      description: "Pages edited per hour"
    },
    {
      key: "wordsPerPage",
      label: "Words per Page",
      unit: "words",
      step: 10,
      min: 100,
      description: "Average words per page"
    },
    {
      key: "layoutHoursPerPage",
      label: "Layout Speed",
      unit: "hrs/page",
      step: 0.1,
      min: 0.1,
      description: "Hours required for layout per page"
    },
    {
      key: "pmOverheadPercent",
      label: "PM Overhead",
      unit: "%",
      step: 0.01,
      min: 0,
      max: 1,
      description: "Project management overhead percentage"
    },
    {
      key: "contingencyPercent",
      label: "Contingency",
      unit: "%",
      step: 0.01,
      min: 0,
      max: 1,
      description: "Contingency buffer percentage"
    },
    {
      key: "blendedHourlyRate",
      label: "Blended Rate",
      unit: "$/hr",
      step: 1,
      min: 0,
      description: "Blended hourly rate for calculations"
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Settings className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-slate-900">Production Metrics</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metricFields.map(({ key, label, unit, step = 1, min = 0, max, description }) => (
          <div key={key} className="space-y-2">
            <div className="flex justify-between items-start">
              <label className="text-sm font-medium text-slate-700">
                {label}
              </label>
              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {unit}
              </span>
            </div>
            <input
              type="number"
              value={metrics[key]}
              onChange={(e) => onMetricsUpdate(key, parseFloat(e.target.value) || 0)}
              step={step}
              min={min}
              max={max}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-xs text-slate-500">{description}</p>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          💡 Adjust these metrics to see real-time impact on project estimates and capacity planning.
        </p>
      </div>
    </div>
  );
}
