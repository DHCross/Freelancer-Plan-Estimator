import { AlertTriangle } from "lucide-react";

interface CapacityGapViewProps {
  headline: string;
  gapHours: number;
  description: string;
}

export function CapacityGapView({ headline, gapHours, description }: CapacityGapViewProps) {
  return (
    <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-amber-100 text-amber-700 rounded-full p-3">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-500">Resource Gap Analysis</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{headline}</h3>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">{description}</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs uppercase text-slate-500">Hours unfunded</p>
              <p className="text-2xl font-bold text-slate-900">{gapHours.toLocaleString()} hrs</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <p className="text-xs uppercase text-amber-600">Remedy</p>
              <p className="text-sm text-amber-800">
                Fund the Production Engine line item to cover architecture + assembly without adding headcount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
