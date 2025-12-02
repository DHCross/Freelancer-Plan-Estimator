import { DisplayProject, QuarterBuckets } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface BudgetViewProps {
  analysis: DisplayProject[];
  quarters: QuarterBuckets;
}

const QUARTER_ORDER = ["Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "Dec 22 Deadline", "Ongoing"];

export function BudgetView({ analysis, quarters }: BudgetViewProps) {
  const total = analysis.reduce((sum, project) => sum + project.estCost, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-1">2026 Budget Roadmap</h3>
          <p className="text-slate-300 text-sm">Aligning labor costs against revenue events for stakeholders.</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-emerald-400">{formatCurrency(total)}</div>
          <div className="text-xs uppercase text-slate-400 tracking-wide">Total Est. Labor Budget</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUARTER_ORDER.map((quarter) => {
          const items = (quarters[quarter] ?? []) as DisplayProject[];
          return (
            <div key={quarter} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-3 border-b pb-2">{quarter}</h4>
              <div className="space-y-2">
                {items.length > 0 ? (
                  items.map((project) => (
                    <div key={project.id} className="text-sm p-2 bg-slate-50 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-slate-800">{project.name}</div>
                      <div className="text-xs text-slate-500 flex justify-between">
                        <span>{project.displayType ?? project.type}</span>
                        <span>{project.displayStatus ?? project.internalStatus}</span>
                      </div>
                      <div className="text-xs text-slate-400">{formatCurrency(project.estCost)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-300 italic">No items</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
