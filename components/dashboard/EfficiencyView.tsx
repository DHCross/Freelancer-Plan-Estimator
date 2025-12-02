"use client";

import { Calculator, ShieldCheck } from "lucide-react";
import { DefenseAnalysisResult, ReplacementRole } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface EfficiencyViewProps {
  defense: DefenseAnalysisResult;
  defendHourlyRate: number;
  defendWPH: number;
  marketPerWord: number;
  onRateChange: (value: number) => void;
  onWphChange: (value: number) => void;
  onMarketChange: (value: number) => void;
  replacementRoles: ReplacementRole[];
}

export function EfficiencyView({
  defense,
  defendHourlyRate,
  defendWPH,
  marketPerWord,
  onRateChange,
  onWphChange,
  onMarketChange,
  replacementRoles,
}: EfficiencyViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Studio Value</p>
          <h2 className="text-2xl font-bold text-slate-900">Replacement Cost Calculator</h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-2">
            Demonstrates that the Production Engine is cheaper than hiring three separate vendors. Adjust assumptions to show Paul how quickly
            the internal model beats market rates.
          </p>
        </div>
        <ShieldCheck className="w-12 h-12 text-emerald-500" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Calculator className="w-4 h-4 text-indigo-500" /> Assumptions
          </div>
          <div className="space-y-4">
            <label className="block text-sm">
              <span className="text-slate-500">Internal hourly rate</span>
              <input
                type="number"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={defendHourlyRate}
                min={1}
                onChange={(e) => onRateChange(Number(e.target.value))}
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-500">Words/hour (architecture-enabled)</span>
              <input
                type="number"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={defendWPH}
                min={50}
                onChange={(e) => onWphChange(Number(e.target.value))}
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-500">Market per-word rate</span>
              <input
                type="number"
                step="0.01"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={marketPerWord}
                min={0.01}
                onChange={(e) => onMarketChange(Number(e.target.value))}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <p className="text-xs uppercase text-slate-500">Internal cost / word</p>
              <p className="text-2xl font-bold text-slate-900">{defense.myCostPerWord.toFixed(3)}$</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <p className="text-xs uppercase text-emerald-700">Savings vs market</p>
              <p className="text-2xl font-bold text-emerald-700">{Math.round(defense.savingsPercent)}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Market Replacement Stack</h3>
            <span className="text-xs uppercase tracking-wide text-slate-400">External spend</span>
          </div>
          <ul className="divide-y divide-slate-100 text-sm">
            {replacementRoles.map((role) => (
              <li key={role.label} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-800">{role.label}</p>
                  <p className="text-xs text-slate-500">{role.notes}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{role.annualCost}</p>
                  <p className="text-xs text-slate-400">{role.marketRate}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">External annual cost</p>
              <p className="text-2xl font-bold">{formatCurrency(200000)}</p>
            </div>
            <span className="text-xs text-emerald-300">vs. $20/hr Production Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
