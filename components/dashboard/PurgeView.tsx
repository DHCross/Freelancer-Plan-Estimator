import { Ghost, Skull, Target } from "lucide-react";

interface GhostCapacityItem {
  label: string;
  hours: string;
}

interface PurgeViewProps {
  ghostCapacity: GhostCapacityItem[];
}

export function PurgeView({ ghostCapacity }: PurgeViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg border-l-8 border-red-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
            <Skull className="w-8 h-8 text-red-400" /> The Great Remote Purge
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl">
            <strong>16 Staff Removed.</strong> Entire TTRPG division downsized. Current
            Operational Status: <span className="text-red-400 font-bold uppercase">Skeleton Crew</span>.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500 uppercase tracking-widest">Capacity Loss</div>
          <div className="text-3xl font-bold text-red-400">-32,000 hrs/yr</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" /> The Strategic Pivot
          </h4>
          <p className="text-sm text-slate-600 mb-4">
            You are now the <strong>Institutional Archivist</strong>. Without scaffolding, the
            A-series cannot launch and corporate deadlines slip.
          </p>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-emerald-50 border border-emerald-100 rounded text-emerald-800">
              <strong>For Martin:</strong> &ldquo;Admin&rdquo; time is the production backbone. No calendar
              = no A1 launch.
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded text-blue-800">
              <strong>For Matthew:</strong> &ldquo;Dec 22nd is non-negotiable. I am protecting the Core IP revenue.&rdquo;
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Ghost className="w-5 h-5 text-slate-400" /> Ghost Capacity
          </h4>
          <div className="text-xs text-slate-500 mb-2">Workload previously handled by fired staff:</div>
          <ul className="space-y-2 text-sm text-slate-600">
            {ghostCapacity.map((ghost) => (
              <li key={ghost.label} className="flex justify-between border-b border-slate-200 pb-1">
                <span>{ghost.label}</span>
                <span className="font-mono text-red-500">{ghost.hours}</span>
              </li>
            ))}
            <li className="flex justify-between pt-2 font-bold text-slate-800">
              <span>Total Deficit</span>
              <span className="font-mono text-red-600">120h/wk</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
