

import { Calculator, TrendingUp } from "lucide-react";
import { DefenseAnalysisResult, ReplacementRole, Metrics } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { MetricsEditor } from "./MetricsEditor";

interface EfficiencyViewProps {
  defense: DefenseAnalysisResult;
  defendHourlyRate: number;
  defendWPH: number;
  marketPerWord: number;
  onRateChange: (value: number) => void;
  onWphChange: (value: number) => void;
  onMarketChange: (value: number) => void;
  replacementRoles: ReplacementRole[];
  metrics?: Metrics;
  onMetricsUpdate?: (field: keyof Metrics, value: number) => void;
  clientMode?: boolean;
}

const ANNUAL_WORD_TARGETS = [
  { label: "Light year", words: 80_000 },
  { label: "Steady pace", words: 150_000 },
  { label: "Full output", words: 250_000 },
  { label: "High gear", words: 400_000 },
];

export function EfficiencyView({
  defense,
  defendHourlyRate,
  defendWPH,
  marketPerWord,
  onRateChange,
  onWphChange,
  onMarketChange,
  replacementRoles,
  metrics,
  onMetricsUpdate,
  clientMode = false,
}: EfficiencyViewProps) {
  const myPerWord = defendWPH > 0 ? defendHourlyRate / defendWPH : 0;
  const myPerWordFormatted = myPerWord.toFixed(3);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Rate Calculator</p>
          <h2 className="text-2xl font-bold text-slate-900">My Word Rate</h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-2">
            See how much you earn per word written, how that compares to market rate, and what your annual income looks like at different output levels.
          </p>
        </div>
        <TrendingUp className="w-12 h-12 text-emerald-500" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Calculator className="w-4 h-4 text-indigo-500" /> Your Rates
          </div>
          <div className="space-y-4">
            <label className="block text-sm">
              <span className="text-slate-500">Your hourly rate ($)</span>
              <input
                type="number"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={defendHourlyRate}
                min={1}
                onChange={(e) => onRateChange(Number(e.target.value))}
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-500">My words/hour</span>
              <input
                type="number"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={defendWPH}
                min={50}
                onChange={(e) => onWphChange(Number(e.target.value))}
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-500">Market per-word rate ($)</span>
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
              <p className="text-xs uppercase text-slate-500">Your earnings / word</p>
              <p className="text-2xl font-bold text-slate-900">${myPerWordFormatted}</p>
              <p className="text-xs text-slate-400 mt-1">based on rate ÷ speed</p>
            </div>
            {(() => {
              const diff = myPerWord - marketPerWord;
              const pct = marketPerWord > 0 ? Math.abs(diff / marketPerWord) * 100 : 0;
              const above = diff > 0;
              const atMarket = Math.abs(diff) < 0.001;
              return (
                <div className={`rounded-xl p-4 border ${atMarket ? "bg-slate-50 border-slate-200" : above ? "bg-emerald-50 border-emerald-100" : "bg-amber-50 border-amber-200"}`}>
                  <p className={`text-xs uppercase ${atMarket ? "text-slate-500" : above ? "text-emerald-700" : "text-amber-700"}`}>vs. market rate</p>
                  <p className={`text-2xl font-bold ${atMarket ? "text-slate-700" : above ? "text-emerald-700" : "text-amber-700"}`}>
                    {atMarket ? "At market" : above ? `+${Math.round(pct)}% above` : `${Math.round(pct)}% below`}
                  </p>
                  {!above && !atMarket && (
                    <p className="text-xs text-amber-600 mt-1">Consider raising your hourly rate</p>
                  )}
                  {above && (
                    <p className="text-xs text-emerald-600 mt-1">You're earning above market</p>
                  )}
                </div>
              );
            })()}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Annual Income Projection</h3>
            <span className="text-xs uppercase tracking-wide text-slate-400">At your current rate</span>
          </div>
          <ul className="divide-y divide-slate-100 text-sm">
            {ANNUAL_WORD_TARGETS.map((target) => {
              const annualIncome = myPerWord * target.words;
              const marketIncome = marketPerWord * target.words;
              const diff = annualIncome - marketIncome;
              return (
                <li key={target.label} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">{target.label}</p>
                    <p className="text-xs text-slate-500">{target.words.toLocaleString()} words/year</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{formatCurrency(annualIncome)}</p>
                    <p className={`text-xs ${diff >= 0 ? "text-emerald-600" : "text-amber-600"}`}>
                      {diff >= 0 ? "+" : ""}{formatCurrency(diff)} vs market
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Market per-word rate</p>
              <p className="text-2xl font-bold">${marketPerWord.toFixed(3)}</p>
            </div>
            <span className="text-xs text-emerald-300">industry benchmark</span>
          </div>
        </div>
      </div>

      {metrics && onMetricsUpdate && (
        <MetricsEditor 
          metrics={metrics} 
          onMetricsUpdate={onMetricsUpdate}
          clientMode={clientMode}
        />
      )}
    </div>
  );
}
