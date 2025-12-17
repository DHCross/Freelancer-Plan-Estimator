"use client";

import React, { useState, useMemo } from "react";
import { FileText, Download, Copy, Check, FileDown, Printer } from "lucide-react";
import { DisplayProject, Metrics, TeamMember } from "@/lib/types";
import { generateProductionPlanMarkdown, generateProductionPlanHTML, ReportConfig } from "@/lib/report-generator";
import { COVER_ART_RATE_DEFAULT, CARTOGRAPHY_DEFAULT, INTERIOR_SPOT_DEFAULT } from "@/lib/constants";

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
  const [interiorPieces, setInteriorPieces] = useState(38);
  const [interiorCostPerPiece, setInteriorCostPerPiece] = useState(INTERIOR_SPOT_DEFAULT);
  const [cartographyCost, setCartographyCost] = useState(CARTOGRAPHY_DEFAULT);
  const [coverCost, setCoverCost] = useState(COVER_ART_RATE_DEFAULT);
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

  const reportConfig: ReportConfig = useMemo(() => ({
    title: reportTitle,
    subtitle: reportSubtitle,
    projects,
    metrics,
    teamRoster,
    artBudget: {
      interiorPieces,
      interiorCost: interiorPieces * interiorCostPerPiece,
      cartographyCost,
      coverCost,
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
  }), [
    reportTitle,
    reportSubtitle,
    projects,
    metrics,
    teamRoster,
    interiorPieces,
    interiorCostPerPiece,
    cartographyCost,
    coverCost,
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
  ]);

  const capacitySnapshot = useMemo(() => {
    const combinedWeekly = danWeeklyHours + martinWeeklyHours;
    const annualCapacity = combinedWeekly * workingWeeksPerYear;
    return {
      combinedWeekly,
      annualCapacity,
    };
  }, [danWeeklyHours, martinWeeklyHours, workingWeeksPerYear]);

  const totalArtBudget = useMemo(() => {
    return (interiorPieces * interiorCostPerPiece) + cartographyCost + coverCost;
  }, [interiorPieces, interiorCostPerPiece, cartographyCost, coverCost]);

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
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Art Budget Configuration</p>
            
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Interior Pieces</span>
                <input
                  type="number"
                  value={interiorPieces}
                  onChange={(e) => setInteriorPieces(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Cost per Piece ($)</span>
                <input
                  type="number"
                  value={interiorCostPerPiece}
                  onChange={(e) => setInteriorCostPerPiece(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Cartography ($)</span>
                <input
                  type="number"
                  value={cartographyCost}
                  onChange={(e) => setCartographyCost(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Cover Art ($)</span>
                <input
                  type="number"
                  value={coverCost}
                  onChange={(e) => setCoverCost(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="bg-slate-50 rounded-lg p-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Art Budget:</span>
                <span className="font-bold text-slate-900">${totalArtBudget.toLocaleString()}</span>
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
