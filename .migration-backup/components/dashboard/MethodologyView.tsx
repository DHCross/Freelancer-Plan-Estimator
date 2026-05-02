import { useState } from "react";
import { Cpu } from "lucide-react";
import { ProductionPhase } from "@/lib/types";

interface MethodologyViewProps {
  phases: ProductionPhase[];
  clientMode?: boolean;
  portfolioAssemblyHours?: number;
  teamWeeklyCapacity?: number;
}

export function MethodologyView({
  phases,
  clientMode = false,
  portfolioAssemblyHours,
  teamWeeklyCapacity,
}: MethodologyViewProps) {
  const [scope, setScope] = useState<"single" | "portfolio">("single");

  const effectiveWeeklyCapacity = teamWeeklyCapacity && teamWeeklyCapacity > 0 ? teamWeeklyCapacity : 40;

  const formatDuration = (hours: number) => {
    if (!hours || !Number.isFinite(hours) || effectiveWeeklyCapacity <= 0) return "";
    const weeks = hours / effectiveWeeklyCapacity;
    const months = weeks / 4;
    const days = weeks * 5; // assuming 5 working days/week
    return `${Math.round(days)} days • ${weeks.toFixed(1)} weeks • ${months.toFixed(1)} months`;
  };

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
        <div className="flex items-center gap-4">
          <div className="bg-slate-800 rounded-full p-1 text-xs flex items-center">
            <button
              type="button"
              onClick={() => setScope("single")}
              className={`px-3 py-1 rounded-full transition-colors ${
                scope === "single" ? "bg-emerald-400 text-slate-900" : "text-slate-300"
              }`}
            >
              One project
            </button>
            <button
              type="button"
              onClick={() => setScope("portfolio")}
              className={`px-3 py-1 rounded-full transition-colors ${
                scope === "portfolio" ? "bg-emerald-400 text-slate-900" : "text-slate-300"
              }`}
            >
              All projects
            </button>
          </div>
          <Cpu className="w-12 h-12 text-emerald-400" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {phases.map((phase) => {
          let hours = phase.effortHours;

          // For the Assembly phase, optionally show all-project effort
          if (scope === "portfolio" && phase.id === "assembly" && portfolioAssemblyHours && portfolioAssemblyHours > 0) {
            hours = portfolioAssemblyHours;
          }

          const durationLabel = formatDuration(hours);

          return (
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
                  <p className="text-xl font-bold text-slate-900">{Math.round(hours)}</p>
                  <p className="text-xs text-slate-500 mt-1">{phase.formula}</p>
                  {durationLabel && (
                    <p className="text-xs text-slate-500 mt-1">
                      {durationLabel}
                      {teamWeeklyCapacity && teamWeeklyCapacity > 0 && (
                        <> @ {teamWeeklyCapacity} hrs/week team capacity</>
                      )}
                    </p>
                  )}
                  {!clientMode && (
                    <p className="text-xs text-indigo-600 mt-1">Sourced from Estimator</p>
                  )}
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
          );
        })}
      </div>
    </div>
  );
}
