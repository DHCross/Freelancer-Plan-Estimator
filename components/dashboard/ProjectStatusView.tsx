import { ClipboardList } from "lucide-react";

import { DisplayProject, OrphanedAsset } from "@/lib/types";

interface StatusColumn {
  id: string;
  label: string;
  description: string;
}

interface ProjectStatusViewProps {
  columns: StatusColumn[];
  statusBuckets: Record<string, DisplayProject[]>;
  orphanedAssets: OrphanedAsset[];
}

export function ProjectStatusView({ columns, statusBuckets, orphanedAssets }: ProjectStatusViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Reality Tracker</p>
          <h2 className="text-2xl font-bold text-slate-900">Execution Kanban + Orphaned Assets</h2>
          <p className="text-sm text-slate-600 mt-2">
            Shows which promises are actively staffed, which are at risk, and what is waiting for the Production Engine to catch up.
          </p>
        </div>
        <ClipboardList className="w-10 h-10 text-slate-500" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => {
          const items = statusBuckets[column.id] ?? [];
          return (
            <div key={column.id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs uppercase text-slate-400">{column.description}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{column.label}</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">{items.length}</span>
              </div>
              <div className="space-y-3">
                {items.length ? (
                  items.map((project) => (
                    <div key={project.id} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <p className="font-semibold text-slate-800 text-sm">{project.name}</p>
                      <p className="text-xs text-slate-500">{project.displayStatus ?? project.internalStatus}</p>
                      <p className="text-xs text-slate-400 mt-1">{project.launchWindow}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic">No items</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-rose-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-rose-500">Orphaned Assets</p>
            <h3 className="text-lg font-semibold text-slate-900">Waiting for Architecture</h3>
          </div>
          <span className="text-xs font-semibold text-rose-500">{orphanedAssets.length}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {orphanedAssets.map((asset) => (
            <div key={asset.id} className="border border-rose-100 rounded-xl p-4 bg-rose-50/60">
              <p className="font-semibold text-rose-900">{asset.name}</p>
              <p className="text-xs text-rose-600">{asset.status}</p>
              <p className="text-xs text-slate-600 mt-2"><strong>Risk:</strong> {asset.risk}</p>
              <p className="text-xs text-slate-600 mt-1"><strong>Ask:</strong> {asset.ask}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
