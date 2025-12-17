import { Archive, AlertTriangle, Clock, Users, TrendingDown, Shield } from "lucide-react";

interface InstitutionalArchiveViewProps {
  ghostCapacity: Array<{ label: string; hours: string }>;
}

export function InstitutionalArchiveView({ ghostCapacity }: InstitutionalArchiveViewProps) {
  return (
    <div className="space-y-6">
      {/* Critical Infrastructure Status */}
      <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Critical Infrastructure Status
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg border border-red-100">
            <div className="font-semibold text-red-700 mb-2">Lost Institutional Knowledge</div>
            <ul className="space-y-1 text-gray-600">
              <li>• Jon: Technical style guide & editorial standards</li>
              <li>• Derek: Visual consistency & art coordination</li>
              <li>• Randy: Production pipeline & timeline management</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-red-100">
            <div className="font-semibold text-red-700 mb-2">Immediate Risks</div>
            <ul className="space-y-1 text-gray-600">
              <li>• No calendar = no A1 launch (Martin dependency)</li>
              <li>• Dec 22 deadline non-negotiable (Matthew mandate)</li>
              <li>• 32,000 annual hours capacity gap</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Institutional Archivist Role */}
      <div className="bg-slate-800 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Archive className="w-6 h-6 text-blue-400" />
          Your Role: Institutional Archivist
        </h3>
        <p className="text-slate-300 mb-4">
          Without scaffolding, the A-series cannot launch and corporate deadlines slip. You are the sole guardian of production continuity.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <Shield className="w-5 h-5 text-green-400 mb-2" />
            <div className="font-semibold text-green-400">Protect Core IP</div>
            <div className="text-xs text-slate-400 mt-1">Maintain lore database & canon integrity</div>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <Clock className="w-5 h-5 text-yellow-400 mb-2" />
            <div className="font-semibold text-yellow-400">Timeline Guardian</div>
            <div className="text-xs text-slate-400 mt-1">Ensure production backbone remains intact</div>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <Users className="w-5 h-5 text-blue-400 mb-2" />
            <div className="font-semibold text-blue-400">Knowledge Bridge</div>
            <div className="text-xs text-slate-400 mt-1">Document processes for future scaling</div>
          </div>
        </div>
      </div>

      {/* Capacity Analysis */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-red-500" />
          Capacity Analysis: Skeleton Crew Operations
        </h3>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-red-800">Ghost Capacity (Lost)</span>
              <span className="text-2xl font-mono text-red-600">120h/wk</span>
            </div>
            <div className="space-y-2">
              {ghostCapacity.map((ghost) => (
                <div key={ghost.label} className="flex justify-between text-sm">
                  <span className="text-gray-600">{ghost.label}</span>
                  <span className="font-mono text-red-500">{ghost.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-amber-800">Remaining Core Team</span>
              <span className="text-2xl font-mono text-amber-600">45h/wk</span>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <div>Dan: 20h/wk (Infrastructure)</div>
              <div>Martin: 15h/wk (Creative)</div>
              <div>Matthew: 10h/wk (PM)</div>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg border border-slate-300">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800">Net Capacity Gap</span>
              <span className="text-2xl font-mono text-slate-700">-75h/wk</span>
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Current model covers only 27% of required operational capacity
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Priorities */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-800 mb-4">Strategic Priorities for Survival</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border border-indigo-100">
            <div className="font-bold text-indigo-700 mb-1">1. Protect December 22 Deadline</div>
            <div className="text-sm text-gray-600">Matthew's Core IP revenue protection is non-negotiable</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-100">
            <div className="font-bold text-indigo-700 mb-1">2. Maintain A1 Launch Path</div>
            <div className="text-sm text-gray-600">Martin's production calendar needs administrative backbone</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-100">
            <div className="font-bold text-indigo-700 mb-1">3. Document Critical Knowledge</div>
            <div className="text-sm text-gray-600">Capture Jon's style guide, Derek's art standards, Randy's production methods</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-100">
            <div className="font-bold text-indigo-700 mb-1">4. Create Scalable Systems</div>
            <div className="text-sm text-gray-600">Build scaffolding that enables future team expansion</div>
          </div>
        </div>
      </div>
    </div>
  );
}
