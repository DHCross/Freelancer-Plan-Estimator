"use client";

import React, { useState, useMemo } from "react";
import { FileText, Download, Copy, Check, FileDown, Printer } from "lucide-react";
import { DisplayProject, Metrics, TeamMember } from "@/lib/types";
import { generateProductionPlanMarkdown, generateProductionPlanHTML, ReportConfig } from "@/lib/report-generator";
import { COVER_ART_RATE_DEFAULT, INTERIOR_SPOT_DEFAULT, INTERIOR_FULL_DEFAULT, REGIONAL_MAP_DEFAULT, ENCOUNTER_MAP_DEFAULT, A1_ART_BASELINE, ART_DENSITY_PRESETS, ArtDensityPreset } from "@/lib/constants";
import { estimateProjectArt } from "@/lib/calculations";

interface ReportExportProps {
  projects: DisplayProject[];
  metrics: Metrics;
  teamRoster: TeamMember[];
  clientMode?: boolean;
}

export function ReportExport({ projects, metrics, teamRoster, clientMode = false }: ReportExportProps) {
  const [copied, setCopied] = useState(false);
  const [reportTitle, setReportTitle] = useState("2026 A-Series Integrated Production Plan");
  const [reportSubtitle, setReportSubtitle] = useState("Based on the A-Series Project Dossier, the following roadmap outlines the publishing strategy, sequencing, and production execution for fiscal year 2026. A1 remains the anchor deliverable and sets the production cadence for all supporting modules.");
  // A1 Manuscript Reality Baseline (audited from A1: Problem of Possibility 4.1.25)
  const [regionalMaps, setRegionalMaps] = useState(A1_ART_BASELINE.regionalMaps);
  const [encounterMaps, setEncounterMaps] = useState(A1_ART_BASELINE.encounterMaps);
  const [interiorIllustrations, setInteriorIllustrations] = useState(A1_ART_BASELINE.interiorIllustrations);
  const [spotArt, setSpotArt] = useState(A1_ART_BASELINE.spotArt);
  const [npcPortraits, setNpcPortraits] = useState(A1_ART_BASELINE.npcPortraits);
  const [covers, setCovers] = useState(A1_ART_BASELINE.covers);
  const [investmentLow, setInvestmentLow] = useState(8500);
  const [investmentHigh, setInvestmentHigh] = useState(12000);
  const [generatedMarkdown, setGeneratedMarkdown] = useState("");
  const [danWeeklyHours, setDanWeeklyHours] = useState(18);
  const [martinWeeklyHours, setMartinWeeklyHours] = useState(30);
  const [workingWeeksPerYear, setWorkingWeeksPerYear] = useState(48);
  const [narrativeLead, setNarrativeLead] = useState("Martin");
  const [systemsLead, setSystemsLead] = useState("Dan");
  const [productionArbiter, setProductionArbiter] = useState("Dan");
  const [finalEditor, setFinalEditor] = useState("Dan");
  const [assetCoordinator, setAssetCoordinator] = useState("TBD");
  const [projectManagerRole, setProjectManagerRole] = useState("Dan");
  const [marketPreset, setMarketPreset] = useState<ArtDensityPreset>("osr");
  const [showMarketComparison, setShowMarketComparison] = useState(true);

  const reportConfig: ReportConfig = useMemo(() => ({
    title: reportTitle,
    subtitle: reportSubtitle,
    projects,
    metrics,
    teamRoster,
    artBudget: {
      regionalMaps,
      encounterMaps,
      interiorIllustrations,
      spotArt,
      npcPortraits,
      covers,
      regionalMapCost: regionalMaps * REGIONAL_MAP_DEFAULT,
      encounterMapCost: encounterMaps * ENCOUNTER_MAP_DEFAULT,
      interiorCost: interiorIllustrations * INTERIOR_FULL_DEFAULT,
      spotCost: spotArt * INTERIOR_SPOT_DEFAULT,
      portraitCost: npcPortraits * 250,
      coverCost: covers * COVER_ART_RATE_DEFAULT,
      totalPieces: regionalMaps + encounterMaps + interiorIllustrations + spotArt + npcPortraits + covers,
    },
    investmentRange: {
      low: investmentLow,
      high: investmentHigh,
    },
    teamCapacity: {
      danWeeklyHours,
      martinWeeklyHours,
      workingWeeksPerYear,
    },
    roleOwnership: {
      narrativeLead,
      systemsLead,
      productionArbiter,
      finalEditor,
      assetCoordinator,
      projectManager: projectManagerRole,
    },
    marketPreset,
    showMarketComparison,
  }), [
    reportTitle,
    reportSubtitle,
    projects,
    metrics,
    teamRoster,
    regionalMaps,
    encounterMaps,
    interiorIllustrations,
    spotArt,
    npcPortraits,
    covers,
    investmentLow,
    investmentHigh,
    danWeeklyHours,
    martinWeeklyHours,
    workingWeeksPerYear,
    narrativeLead,
    systemsLead,
    productionArbiter,
    finalEditor,
    assetCoordinator,
    projectManagerRole,
    marketPreset,
    showMarketComparison,
  ]);

  // Calculate market comparison estimates for A1 (97k words)
  const marketComparison = useMemo(() => {
    const a1Words = 97000;
    return {
      osr: estimateProjectArt(a1Words, "Large Adventure", "osr"),
      "5e": estimateProjectArt(a1Words, "Large Adventure", "5e"),
      pathfinder: estimateProjectArt(a1Words, "Large Adventure", "pathfinder"),
    };
  }, []);

  const capacitySnapshot = useMemo(() => {
    const combinedWeekly = danWeeklyHours + martinWeeklyHours;
    const annualCapacity = combinedWeekly * workingWeeksPerYear;
    return {
      combinedWeekly,
      annualCapacity,
    };
  }, [danWeeklyHours, martinWeeklyHours, workingWeeksPerYear]);

  const totalArtBudget = useMemo(() => {
    return (regionalMaps * REGIONAL_MAP_DEFAULT) + 
           (encounterMaps * ENCOUNTER_MAP_DEFAULT) + 
           (interiorIllustrations * INTERIOR_FULL_DEFAULT) + 
           (spotArt * INTERIOR_SPOT_DEFAULT) + 
           (npcPortraits * 250) + 
           (covers * COVER_ART_RATE_DEFAULT);
  }, [regionalMaps, encounterMaps, interiorIllustrations, spotArt, npcPortraits, covers]);

  const totalPieces = useMemo(() => {
    return regionalMaps + encounterMaps + interiorIllustrations + spotArt + npcPortraits + covers;
  }, [regionalMaps, encounterMaps, interiorIllustrations, spotArt, npcPortraits, covers]);

  const handleGenerate = () => {
    const markdown = generateProductionPlanMarkdown(reportConfig);
    setGeneratedMarkdown(markdown);
  };

  const handleCopyMarkdown = async () => {
    if (!generatedMarkdown) return;
    try {
      await navigator.clipboard.writeText(generatedMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownloadMarkdown = () => {
    if (!generatedMarkdown) return;
    const blob = new Blob([generatedMarkdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, "_")}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadHTML = () => {
    const html = generateProductionPlanHTML(reportConfig);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, "_")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintPDF = () => {
    const html = generateProductionPlanHTML(reportConfig);
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  if (clientMode) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Professional Export</p>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Production Plan Report
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-2">
              Generate a professional production plan report matching the format you sent to Martin. Export as Markdown, HTML, or print to PDF.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Team Capacity Reality</p>

            <div className="grid grid-cols-3 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Dan hrs/week</span>
                <input
                  type="number"
                  value={danWeeklyHours}
                  onChange={(e) => setDanWeeklyHours(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Martin hrs/week</span>
                <input
                  type="number"
                  value={martinWeeklyHours}
                  onChange={(e) => setMartinWeeklyHours(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Working weeks</span>
                <input
                  type="number"
                  value={workingWeeksPerYear}
                  onChange={(e) => setWorkingWeeksPerYear(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="bg-slate-50 rounded-lg p-3 text-sm">
              <p className="text-slate-600 flex justify-between">
                <span>Combined weekly capacity</span>
                <span className="font-semibold text-slate-900">{capacitySnapshot.combinedWeekly} hrs/week</span>
              </p>
              <p className="text-slate-600 flex justify-between mt-1">
                <span>Annualized (realistic)</span>
                <span className="font-semibold text-slate-900">{capacitySnapshot.annualCapacity.toLocaleString()} hrs/year</span>
              </p>
              <p className="text-xs text-slate-500 mt-2">
                These values drive the Capacity Reality Check section of the report.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Role Ownership</p>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Narrative Lead</span>
                <input
                  type="text"
                  value={narrativeLead}
                  onChange={(e) => setNarrativeLead(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Systems Lead</span>
                <input
                  type="text"
                  value={systemsLead}
                  onChange={(e) => setSystemsLead(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Production Arbiter</span>
                <input
                  type="text"
                  value={productionArbiter}
                  onChange={(e) => setProductionArbiter(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Final Editor</span>
                <input
                  type="text"
                  value={finalEditor}
                  onChange={(e) => setFinalEditor(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Asset Coordinator</span>
                <input
                  type="text"
                  value={assetCoordinator}
                  onChange={(e) => setAssetCoordinator(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Project Manager</span>
                <input
                  type="text"
                  value={projectManagerRole}
                  onChange={(e) => setProjectManagerRole(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <p className="text-xs text-slate-500">
              These assignments drive the Role Ownership & Decision Authority section.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleGenerate}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              <FileText className="w-4 h-4" />
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-4 lg:col-span-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Report Settings</p>
              
              <label className="block mb-3">
                <span className="text-sm font-medium text-slate-700">Report Title</span>
                <input
                  type="text"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Subtitle / Introduction</span>
                <textarea
                  value={reportSubtitle}
                  onChange={(e) => setReportSubtitle(e.target.value)}
                  rows={3}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </label>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Art Budget (A1 Manuscript Reality)</p>
            <p className="text-xs text-slate-500">Audited from A1: Problem of Possibility 4.1.25 — corrected from previous 38-piece assumption</p>
            
            <div className="grid grid-cols-3 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Regional Maps</span>
                <input
                  type="number"
                  value={regionalMaps}
                  onChange={(e) => setRegionalMaps(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-slate-400">${REGIONAL_MAP_DEFAULT}/ea</span>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Encounter Maps</span>
                <input
                  type="number"
                  value={encounterMaps}
                  onChange={(e) => setEncounterMaps(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-slate-400">${ENCOUNTER_MAP_DEFAULT}/ea</span>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Interior Illustrations</span>
                <input
                  type="number"
                  value={interiorIllustrations}
                  onChange={(e) => setInteriorIllustrations(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-slate-400">${INTERIOR_FULL_DEFAULT}/ea</span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Spot Art/Openers</span>
                <input
                  type="number"
                  value={spotArt}
                  onChange={(e) => setSpotArt(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-slate-400">${INTERIOR_SPOT_DEFAULT}/ea</span>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">NPC Portraits</span>
                <input
                  type="number"
                  value={npcPortraits}
                  onChange={(e) => setNpcPortraits(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-slate-400">$250/ea</span>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Covers</span>
                <input
                  type="number"
                  value={covers}
                  onChange={(e) => setCovers(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-slate-400">${COVER_ART_RATE_DEFAULT}/ea</span>
              </label>
            </div>

            <div className="bg-slate-50 rounded-lg p-3 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Pieces:</span>
                <span className="font-bold text-slate-900">{totalPieces}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Art Budget:</span>
                <span className="font-bold text-slate-900">${totalArtBudget.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Market Comparison</p>
            <p className="text-xs text-slate-500">Compare your art budget against industry standards</p>
            
            <label className="block">
              <span className="text-xs font-medium text-slate-600">Target Market Aesthetic</span>
              <select
                value={marketPreset}
                onChange={(e) => setMarketPreset(e.target.value as ArtDensityPreset)}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white"
              >
                <option value="osr">{ART_DENSITY_PRESETS.osr.label}</option>
                <option value="5e">{ART_DENSITY_PRESETS["5e"].label}</option>
                <option value="pathfinder">{ART_DENSITY_PRESETS.pathfinder.label}</option>
              </select>
              <p className="text-xs text-slate-400 mt-1">{ART_DENSITY_PRESETS[marketPreset].description}</p>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showMarketComparison}
                onChange={(e) => setShowMarketComparison(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-600">Include market comparison in report</span>
            </label>

            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-slate-700">Quick Comparison (A1: 97k words)</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className={`p-2 rounded ${marketPreset === 'osr' ? 'bg-indigo-100 border border-indigo-300' : 'bg-white'}`}>
                  <p className="font-medium">OSR/Indie</p>
                  <p className="text-slate-600">{marketComparison.osr.totalPieces} pieces</p>
                  <p className="text-slate-600">${marketComparison.osr.totalCost.toLocaleString()}</p>
                </div>
                <div className={`p-2 rounded ${marketPreset === '5e' ? 'bg-indigo-100 border border-indigo-300' : 'bg-white'}`}>
                  <p className="font-medium">5E Standard</p>
                  <p className="text-slate-600">{marketComparison["5e"].totalPieces} pieces</p>
                  <p className="text-slate-600">${marketComparison["5e"].totalCost.toLocaleString()}</p>
                </div>
                <div className={`p-2 rounded ${marketPreset === 'pathfinder' ? 'bg-indigo-100 border border-indigo-300' : 'bg-white'}`}>
                  <p className="font-medium">Pathfinder</p>
                  <p className="text-slate-600">{marketComparison.pathfinder.totalPieces} pieces</p>
                  <p className="text-slate-600">${marketComparison.pathfinder.totalCost.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Investment Range</p>
            
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Low ($)</span>
                <input
                  type="number"
                  value={investmentLow}
                  onChange={(e) => setInvestmentLow(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">High ($)</span>
                <input
                  type="number"
                  value={investmentHigh}
                  onChange={(e) => setInvestmentHigh(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Export Options</p>
            
            <button
              onClick={handleDownloadMarkdown}
              disabled={!generatedMarkdown}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Download Markdown (.md)
            </button>

            <button
              onClick={handleDownloadHTML}
              disabled={!generatedMarkdown}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown className="w-4 h-4" />
              Download HTML
            </button>

            <button
              onClick={handlePrintPDF}
              disabled={!generatedMarkdown}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-950 text-slate-50 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[600px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Report Preview</p>
                <p className="text-xs text-slate-400 mt-1">
                  {generatedMarkdown ? "Edit the markdown below or copy/download" : "Click 'Generate Report' to create your production plan"}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyMarkdown}
                disabled={!generatedMarkdown}
                className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-full border transition ${
                  generatedMarkdown
                    ? "border-emerald-400 text-emerald-200 hover:bg-emerald-500/10"
                    : "border-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <textarea
              className="flex-1 w-full bg-transparent text-xs font-mono px-4 py-3 resize-none outline-none"
              value={generatedMarkdown}
              onChange={(e) => setGeneratedMarkdown(e.target.value)}
              placeholder="Click 'Generate Report' to produce your 2026 A-Series Integrated Production Plan..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
