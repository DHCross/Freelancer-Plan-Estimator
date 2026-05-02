import { ClipboardList, Clock, Info } from "lucide-react";
import { DisplayProject, OrphanedAsset } from "@/lib/types";
import { Tooltip } from "./Tooltip";

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

const getPriorityColor = (status: string) => {
  const s = status.toLowerCase();
  if (s.includes("critical")) return "bg-rose-100 text-rose-800";
  if (s.includes("priority")) return "bg-amber-100 text-amber-800";
  return "bg-slate-100 text-slate-800";
};

const getDeadlineStatus = (dateStr?: string) => {
  if (!dateStr) return { color: "text-slate-400", urgent: false };

  const today = new Date();
  const deadline = new Date(dateStr);
  const diffTime = deadline.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return { color: "text-rose-700 bg-rose-50 px-1 rounded", urgent: true, label: "Overdue" };
  if (diffDays <= 7) return { color: "text-rose-600 font-medium", urgent: true, label: "Due soon" };
  return { color: "text-slate-400", urgent: false };
};

export function ProjectStatusView({ columns, statusBuckets, orphanedAssets }: ProjectStatusViewProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Reality Tracker</p>
          <h2 className="text-2xl font-bold text-slate-900">Task Board</h2>
          <p className="text-sm text-slate-600 mt-2">
            Active execution workflow.
          </p>
        </div>
        <ClipboardList className="w-10 h-10 text-slate-500" />
      </div>

      {/* Main Swimlane: Active Execution */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => {
          const items = statusBuckets[column.id] ?? [];
          return (
            <div key={column.id} className={`bg-white border ${items.length === 0 ? 'border-dashed border-slate-300 bg-slate-50/50' : 'border-slate-200'} rounded-2xl p-4 shadow-sm flex flex-col h-full`}>
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{column.label}</h3>
                  <Tooltip content={column.description}>
                    <Info className="w-4 h-4 text-slate-400 hover:text-indigo-600 cursor-help" />
                  </Tooltip>
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{items.length}</span>
              </div>

              <div className="space-y-3 flex-1">
                {items.length ? (
                  items.map((project) => {
                    const status = project.displayStatus ?? project.internalStatus;
                    const dateInfo = getDeadlineStatus(project.targetDate || project.launchWindow); // trying targetDate first

                    return (
                      <div key={project.id} className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${getPriorityColor(status)}`}>
                             {status}
                           </span>
                        </div>
                        <p className="font-semibold text-slate-800 text-sm mb-2">{project.name}</p>

                        <div className={`flex items-center gap-1.5 text-xs ${dateInfo.color}`}>
                          <Clock className="w-3.5 h-3.5" />
                          <span>{project.displayDate || project.launchWindow}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                   <div className="h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center min-h-[100px]">
                      <div className="border-2 border-dashed border-slate-200 rounded-lg w-12 h-16 mb-2"></div>
                      <p className="text-xs italic">No items</p>
                   </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Swimlane: Orphaned Assets */}
      <div className="border-t-2 border-slate-100 pt-8 mt-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-rose-100 p-2 rounded-lg">
                <ClipboardList className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                 <h3 className="text-lg font-bold text-slate-900">Orphaned Assets</h3>
                 <p className="text-xs text-slate-500">Items waiting for architecture or a home.</p>
              </div>
            </div>
            <span className="text-xs font-bold bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full">{orphanedAssets.length} items</span>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            {orphanedAssets.map((asset) => (
              <div key={asset.id} className="border border-rose-200 rounded-xl p-4 bg-white hover:border-rose-300 transition-colors shadow-sm">
                <div className="flex justify-between items-start mb-2">
                   <p className="font-bold text-slate-900 line-clamp-1" title={asset.name}>{asset.name}</p>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Status</span>
                      <span className="font-medium text-rose-600">{asset.status}</span>
                   </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Risk</span>
                      <span className="font-medium text-slate-700">{asset.risk}</span>
                   </div>
                    <div className="mt-2 pt-2 border-t border-rose-50 text-xs text-slate-600">
                      <strong>Ask:</strong> {asset.ask}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
