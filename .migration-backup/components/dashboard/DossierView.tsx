"use client";

import React, { useState, useMemo } from "react";
import { ClipboardList, FileText, Copy, Settings, Users, Briefcase, ArrowRight, Lock } from "lucide-react";
import { DisplayProject, Metrics, DefenseAnalysisResult } from "@/lib/types";
import { generateDossierMarkdown, DossierTone } from "@/lib/dossier-generator";
import { formatNumber, formatCurrency } from "@/lib/utils";

interface DossierViewProps {
  analysis: DisplayProject[];
  metrics: Metrics;
  defense: DefenseAnalysisResult;
  defendHourlyRate: number;
  defendWPH: number;
  marketPerWord: number;
  teamWeeklyCapacity: number;
  onNavigateToProducts?: () => void;
  onNavigateToTeamBuilder?: () => void;
  onNavigateToProductionReadiness?: () => void;
}

export function DossierView({
  analysis,
  metrics,
  defense,
  defendHourlyRate,
  defendWPH,
  marketPerWord,
  teamWeeklyCapacity,
  onNavigateToProducts,
  onNavigateToTeamBuilder,
  onNavigateToProductionReadiness,
}: DossierViewProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(() => {
    const a1 = analysis.find((p) => p.name.toLowerCase().includes("problem of possibil"));
    return a1?.id ?? (analysis[0]?.id ?? null);
  });

  const [tone, setTone] = useState<DossierTone>("internal");
  const [meetingNotes, setMeetingNotes] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedProject = useMemo(
    () => analysis.find((p) => p.id === selectedProjectId) ?? analysis[0] ?? null,
    [analysis, selectedProjectId]
  );

  const handleGenerate = () => {
    if (!selectedProject) return;

    const markdown = generateDossierMarkdown(
      {
        project: selectedProject,
        metrics,
        defense,
        defendHourlyRate,
        defendWPH,
        marketPerWord,
        teamWeeklyCapacity,
        meetingNotes,
        // Simple A-series default: if this looks like A1, assume a 4-book arc ~158k words
        seriesBooks: selectedProject.name.startsWith("A1:") ? 4 : undefined,
        seriesWords: selectedProject.name.startsWith("A1:") ? 158000 : undefined,
      },
      tone
    );

    setOutput(markdown);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no-op
    }
  };

  if (!selectedProject) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <p className="text-sm text-slate-600">No projects available to generate a dossier.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Edit Assumptions Panel */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Settings className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900">Report Assumptions</h3>
              <p className="text-sm text-amber-700 mt-1">
                This report pulls from your current project and team settings. Edit them before generating.
              </p>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-white/60 rounded-lg px-3 py-2 border border-amber-200">
                  <div className="text-amber-600 font-medium">Projects</div>
                  <div className="text-amber-900 font-bold">{analysis.length} loaded</div>
                </div>
                <div className="bg-white/60 rounded-lg px-3 py-2 border border-amber-200">
                  <div className="text-amber-600 font-medium">Hourly Rate</div>
                  <div className="text-amber-900 font-bold">{formatCurrency(defendHourlyRate)}/hr</div>
                </div>
                <div className="bg-white/60 rounded-lg px-3 py-2 border border-amber-200">
                  <div className="text-amber-600 font-medium">Words/Hour</div>
                  <div className="text-amber-900 font-bold">{formatNumber(defendWPH)} w/hr</div>
                </div>
                <div className="bg-white/60 rounded-lg px-3 py-2 border border-amber-200">
                  <div className="text-amber-600 font-medium">Team Capacity</div>
                  <div className="text-amber-900 font-bold">{formatNumber(teamWeeklyCapacity)} hrs/wk</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {onNavigateToProductionReadiness && (
              <button
                onClick={onNavigateToProductionReadiness}
                className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap"
              >
                <Lock className="w-4 h-4" />
                Lock Structure
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
            {onNavigateToProducts && (
              <button
                onClick={onNavigateToProducts}
                className="flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap"
              >
                <Briefcase className="w-4 h-4" />
                Edit Products
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
            {onNavigateToTeamBuilder && (
              <button
                onClick={onNavigateToTeamBuilder}
                className="flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md whitespace-nowrap"
              >
                <Users className="w-4 h-4" />
                Edit Team & Rates
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Narrative Export</p>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-indigo-600" />
            Dossier Generator
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-2">
            Compile a markdown dossier for any project using current Production Engine assumptions. Generate internal planning documents or
            publisher-ready summaries.
          </p>
        </div>
        <FileText className="w-10 h-10 text-indigo-500" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-4 lg:col-span-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Project</p>
              <label className="block mt-2">
                <span className="text-sm text-slate-600">Select project</span>
                <select
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  value={selectedProjectId ?? ""}
                  onChange={(e) => setSelectedProjectId(Number(e.target.value))}
                >
                  {analysis.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Tone</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTone("internal")}
                  className={`px-3 py-2 text-xs rounded-lg border ${
                    tone === "internal"
                      ? "bg-slate-900 text-slate-50 border-slate-900"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  Internal (Analytical)
                </button>
                <button
                  type="button"
                  onClick={() => setTone("external")}
                  className={`px-3 py-2 text-xs rounded-lg border ${
                    tone === "external"
                      ? "bg-emerald-600 text-emerald-50 border-emerald-600"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  External (Publisher-Safe)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Meeting Notes / Transcript</p>
            <textarea
              className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm min-h-[160px]"
              placeholder="Paste raw notes or a transcript summary here. The generator will fold this into PART I of the dossier."
              value={meetingNotes}
              onChange={(e) => setMeetingNotes(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2.5 rounded-lg shadow-sm"
          >
            Generate Dossier
          </button>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-950 text-slate-50 rounded-2xl border border-slate-800 flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Markdown Output</p>
                <p className="text-xs text-slate-400 mt-1">Copy this into your notes, email drafts, or publisher docs.</p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!output}
                className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-full border transition ${
                  output
                    ? "border-emerald-400 text-emerald-200 hover:bg-emerald-500/10"
                    : "border-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                <Copy className="w-3 h-3" />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <textarea
              className="flex-1 w-full bg-transparent text-xs font-mono px-4 py-3 resize-none outline-none"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Click 'Generate Dossier' to produce a report."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
