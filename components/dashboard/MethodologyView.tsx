import { Cpu } from "lucide-react";
import { ProductionPhase } from "@/lib/types";

interface MethodologyViewProps {
  phases: ProductionPhase[];
}

export function MethodologyView({ phases }: MethodologyViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg flex justify-between items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Production Engine</p>
          <h2 className="text-2xl font-bold mt-1">Architecture → Assembly</h2>
          <p className="text-sm text-slate-300 max-w-2xl mt-2">
            The studio only achieves high-velocity drafting because the architectural work front-loads the risk. This view articulates
            the CapEx → OpEx hand-off that justifies the Architect-Writer rate.
          </p>
        </div>
        <Cpu className="w-12 h-12 text-emerald-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {phases.map((phase) => (
          <div key={phase.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {phase.investmentType}
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">{phase.description}</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="text-xs uppercase text-slate-400">Effort (hrs)</p>
                <p className="text-xl font-bold text-slate-900">{phase.effortHours}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <p className="text-xs uppercase text-slate-400">Outputs</p>
                <p className="text-lg font-semibold text-emerald-600">{phase.outcomes.length}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {phase.outcomes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
