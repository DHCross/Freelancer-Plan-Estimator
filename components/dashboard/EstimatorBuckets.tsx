"use client";

import { useMemo } from "react";
import { Users, Clock, Trash2 } from "lucide-react";

import type { EstimationBucketEntry } from "@/lib/types";

interface EstimatorBucketsProps {
  entries: EstimationBucketEntry[];
  onRemove?: (id: string) => void;
  onClear?: () => void;
  clientMode?: boolean;
}

export function EstimatorBuckets({ entries, onRemove, onClear, clientMode = false }: EstimatorBucketsProps) {
  const projects = useMemo(() => {
    const map: Record<string, EstimationBucketEntry[]> = {};
    for (const entry of entries) {
      const key = entry.projectName || "(Unlabeled Project)";
      if (!map[key]) map[key] = [];
      map[key].push(entry);
    }
    return map;
  }, [entries]);

  if (entries.length === 0) {
    return (
      <div className="bg-slate-100 border border-dashed border-slate-300 rounded-2xl p-4 text-sm text-slate-500">
        No estimator runs saved yet. Use the estimator above and tag runs with a project and role to build a per-project effort bucket.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-600 text-sm">
          <Users className="w-4 h-4 text-indigo-500" />
          <span>Estimator Buckets (by project & role)</span>
        </div>
        {!clientMode && onClear && (
          <button
            onClick={onClear}
            className="text-xs px-2 py-1 rounded border border-slate-200 text-slate-500 hover:bg-slate-100"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(projects).map(([projectName, items]) => {
          const totalHours = items.reduce((sum, e) => sum + e.hours, 0);
          const totalDays = items.reduce((sum, e) => sum + e.days, 0);

          const roles = items.reduce<Record<string, { hours: number; days: number; entries: EstimationBucketEntry[] }>>(
            (acc, entry) => {
              const key = entry.roleLabel || "Unspecified";
              if (!acc[key]) {
                acc[key] = { hours: 0, days: 0, entries: [] };
              }
              acc[key].hours += entry.hours;
              acc[key].days += entry.days;
              acc[key].entries.push(entry);
              return acc;
            },
            {}
          );

          return (
            <div key={projectName} className="bg-white border border-slate-200 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 truncate">{projectName}</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {Math.round(totalHours)} hrs • {Math.round(totalDays)} days
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {Object.entries(roles).map(([role, summary]) => (
                  <div key={role} className="border border-slate-100 rounded-lg p-2 bg-slate-50/60">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-slate-800">{role}</span>
                      <span className="text-slate-600">{Math.round(summary.hours)}h</span>
                    </div>
                    <ul className="space-y-0.5">
                      {summary.entries.map((entry) => (
                        <li key={entry.id} className="flex justify-between items-center">
                          <span className="text-slate-600 truncate">
                            {entry.teamMemberName || "Unassigned"} — {entry.activity}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-slate-500">{Math.round(entry.hours)}h</span>
                            {!clientMode && onRemove && (
                              <button
                                onClick={() => onRemove(entry.id)}
                                className="text-rose-400 hover:text-rose-600"
                                title="Remove this estimate from the bucket"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
