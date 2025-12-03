"use client";

import { useMemo, useState } from "react";
import { Clock, Zap } from "lucide-react";

import { runEstimator } from "@/lib/calculations";
import { TeamMember } from "@/lib/types";

const SIZES = [
  { label: "Quick Hit", words: 2000, desc: "Item, Spell, Blog Post" },
  { label: "Chapter", words: 8000, desc: "Subclass, Short Adventure" },
  { label: "Major Section", words: 25000, desc: "Act 1, Bestiary" },
];

const COMPLEXITY = [
  { label: "Standard", multiplier: 1, desc: "Narrative, basic rules" },
  { label: "Heavy", multiplier: 0.7, desc: "Stat blocks, mechanics" },
];

export function QuickEstimator({ teamRoster }: { teamRoster: TeamMember[] }) {
  const defaultMember = teamRoster[0]?.id ?? "";
  const [selectedSize, setSize] = useState(SIZES[0]);
  const [selectedComplexity, setComplexity] = useState(COMPLEXITY[0]);
  const [selectedMember, setMember] = useState(defaultMember);

  const member = useMemo(() => teamRoster.find((m) => m.id === selectedMember), [selectedMember, teamRoster]);
  const speed = member ? Math.max(50, Math.round(member.draftSpeed * selectedComplexity.multiplier)) : 200;

  const result = runEstimator({
    activity: `${selectedSize.label} estimate`,
    totalWords: selectedSize.words,
    draftSpeed: speed,
    bufferPercent: member?.chaosBuffer ?? 15,
    dailyHours: 4,
    teamMemberId: member?.id,
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-amber-500" />
        <h3 className="text-lg font-bold text-slate-900">Quick Estimator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs font-bold uppercase text-slate-400">Who is doing it?</p>
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {teamRoster.map((m) => (
              <button
                key={m.id}
                onClick={() => setMember(m.id)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  selectedMember === m.id
                    ? "bg-indigo-600 text-white font-medium shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {m.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase text-slate-400">How big is it?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {SIZES.map((size) => {
              const isActive = selectedSize.label === size.label;
              return (
                <button
                  key={size.label}
                  onClick={() => setSize(size)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isActive
                      ? "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500"
                      : "bg-white border-slate-200 hover:border-emerald-300"
                  }`}
                >
                  <div className={`font-semibold ${isActive ? "text-emerald-900" : "text-slate-800"}`}>{size.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{size.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase text-slate-400">How crunchy?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {COMPLEXITY.map((complexity) => {
              const isActive = selectedComplexity.label === complexity.label;
              return (
                <button
                  key={complexity.label}
                  onClick={() => setComplexity(complexity)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isActive
                      ? "bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500"
                      : "bg-white border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  <div className={`font-semibold ${isActive ? "text-indigo-900" : "text-slate-800"}`}>{complexity.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{complexity.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wider">Estimated time</p>
            <div className="text-3xl font-bold mt-1 text-emerald-400 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {result.hours} hrs
            </div>
            <p className="text-slate-400 text-sm mt-1">≈ {result.days} working days</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-xs uppercase tracking-wider">Finish by</p>
            <div className="text-xl font-bold mt-1 text-white">{result.date}</div>
            {member && (
              <p className="text-xs text-slate-400 mt-1">
                Includes {member.chaosBuffer}% chaos buffer
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
