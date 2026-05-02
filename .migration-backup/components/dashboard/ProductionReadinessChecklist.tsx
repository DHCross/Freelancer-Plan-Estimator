"use client";

import { useState } from "react";
import { CheckCircle, Lock, Unlock, AlertCircle, FileText, Shield } from "lucide-react";

type DecisionItem = {
  id: string;
  label: string;
  description: string;
  placeholder: string;
  value: string;
  isLocked: boolean;
};

const INITIAL_DECISIONS: DecisionItem[] = [
  {
    id: "hierarchy",
    label: "Scene / Day / Encounter Hierarchy",
    description: "How are days and scenes organized? (e.g., Day 1 > Scene 1 > Encounter A)",
    placeholder: "e.g., Chronological Days, Scenes reset per Day...",
    value: "",
    isLocked: false,
  },
  {
    id: "numbering",
    label: "Encounter Numbering Scheme",
    description: "Do encounters reset per day or run continuously?",
    placeholder: "e.g., Continuous (E1 - E45) or Reset (D1.E1)...",
    value: "",
    isLocked: false,
  },
  {
    id: "headers",
    label: "Section Header Conventions",
    description: "Standard format for Act, Chapter, and Scene headers.",
    placeholder: "e.g., H1 for Acts, H2 for Days, H3 for Scenes...",
    value: "",
    isLocked: false,
  },
  {
    id: "monsters",
    label: "Monster Stat Block Strategy",
    description: "Policy for new vs. modified monsters.",
    placeholder: "e.g., Only modify existing, list changes clearly...",
    value: "",
    isLocked: false,
  },
  {
    id: "art-placeholders",
    label: "Art Placeholder Format",
    description: "How are art gaps indicated in the text for layout?",
    placeholder: "e.g., [ART: Description] centered in red...",
    value: "",
    isLocked: false,
  },
];

export function ProductionReadinessChecklist() {
  const [decisions, setDecisions] = useState<DecisionItem[]>(INITIAL_DECISIONS);

  const handleUpdate = (id: string, newValue: string) => {
    setDecisions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  const toggleLock = (id: string) => {
    setDecisions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isLocked: !item.isLocked } : item))
    );
  };

  const allLocked = decisions.every((d) => d.isLocked && d.value.trim().length > 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${allLocked ? "bg-emerald-100 text-emerald-600" : "bg-indigo-100 text-indigo-600"}`}>
              {allLocked ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Production Readiness Checklist</h2>
              <p className="text-slate-500 mt-1">
                Lock these structural decisions <strong>once</strong> to prevent downstream layout issues.
              </p>
            </div>
          </div>
          {allLocked && (
            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border border-emerald-200">
              <CheckCircle className="w-4 h-4" />
              Ready for Layout
            </div>
          )}
        </div>
      </div>

      {/* Decisions List */}
      <div className="grid gap-4">
        {decisions.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl border transition-all ${
              item.isLocked
                ? "border-emerald-200 bg-emerald-50/30"
                : "border-slate-200 shadow-sm hover:border-indigo-300"
            }`}
          >
            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className={`font-semibold ${item.isLocked ? "text-emerald-900" : "text-slate-900"}`}>
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                </div>
                <button
                  onClick={() => toggleLock(item.id)}
                  disabled={!item.value.trim()}
                  className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium ${
                    item.isLocked
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : !item.value.trim()
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item.isLocked ? (
                    <>
                      <Lock className="w-4 h-4" />
                      Locked
                    </>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      Lock Decision
                    </>
                  )}
                </button>
              </div>

              {item.isLocked ? (
                <div className="bg-white border border-emerald-100 rounded-lg p-3 text-slate-800 font-medium">
                  {item.value}
                </div>
              ) : (
                <textarea
                  value={item.value}
                  onChange={(e) => handleUpdate(item.id, e.target.value)}
                  placeholder={item.placeholder}
                  className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[80px] text-sm resize-y"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900">
          <strong>Martin's Directive:</strong> These decisions are prerequisites for the "Content Lock" phase. 
          Changing them after layout begins will cause significant rework and jeopardize the Jan 31 deadline.
        </div>
      </div>
    </div>
  );
}
