"use client";

import React, { useState, useMemo } from "react";
import { FileText, Download, Copy, Check, FileDown, Printer, User, Calendar, Clock } from "lucide-react";
import { DisplayProject, Metrics, TeamMember } from "@/lib/types";
import { 
  generateEmployeeEstimateMarkdown, 
  generateEmployeeEstimateHTML, 
  calculateEmployeeEstimate,
  EmployeeEstimateConfig 
} from "@/lib/employee-estimate-generator";
import { todayISO } from "@/lib/calculations";
import { DocumentWordCounter } from "./DocumentWordCounter";

interface EmployeeEstimateReportProps {
  projects: DisplayProject[];
  metrics: Metrics;
  teamRoster: TeamMember[];
  clientMode?: boolean;
}

export function EmployeeEstimateReport({ projects, metrics, teamRoster, clientMode = false }: EmployeeEstimateReportProps) {
  const [copied, setCopied] = useState(false);
  const [generatedMarkdown, setGeneratedMarkdown] = useState("");

  // Employee info
  const [employeeName, setEmployeeName] = useState("Dan Cross");
  const [employeeRole, setEmployeeRole] = useState("Creative Infrastructure Lead");
  const [recipientName, setRecipientName] = useState("Martin");
  const [recipientTitle, setRecipientTitle] = useState("Marketing & Creative Strategy Lead");

  // Project selection
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(() => {
    const a1 = projects.find((p) => p.name.toLowerCase().includes("a1"));
    return a1?.id ?? (projects[0]?.id ?? null);
  });

  // Scope inputs
  const [totalWords, setTotalWords] = useState(20000);
  const [existingWords, setExistingWords] = useState(0);

  // Pacing inputs
  const [draftSpeed, setDraftSpeed] = useState(200);
  const [compileSpeed, setCompileSpeed] = useState(0);
  const [chaosBuffer, setChaosBuffer] = useState(15);
  const [dailyHours, setDailyHours] = useState(4);
  const [includeWeekends, setIncludeWeekends] = useState(false);
  const [startDate, setStartDate] = useState(todayISO());

  // Optional notes
  const [assumptions, setAssumptions] = useState("");
  const [risks, setRisks] = useState("");
  const [dependencies, setDependencies] = useState("");

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? projects[0] ?? null,
    [projects, selectedProjectId]
  );

  // Auto-populate from selected project
  const handleProjectChange = (projectId: number) => {
    setSelectedProjectId(projectId);
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setTotalWords(project.targetWords || 20000);
    }
  };

  // Auto-populate from team member
  const handleTeamMemberSelect = (memberId: string) => {
    const member = teamRoster.find((m) => m.id === memberId);
    if (member) {
      setEmployeeName(member.name);
      setEmployeeRole(member.role);
      setDraftSpeed(member.draftSpeed || 200);
      setCompileSpeed(member.compileSpeed || 0);
      setChaosBuffer(member.chaosBuffer || 15);
    }
  };

  const estimateConfig: EmployeeEstimateConfig = useMemo(() => ({
    employeeName,
    employeeRole,
    recipientName,
    recipientTitle,
    project: selectedProject,
    metrics,
    totalWords,
    existingWords,
    draftSpeed,
    compileSpeed,
    chaosBuffer,
    dailyHours,
    includeWeekends,
    startDate,
    assumptions: assumptions || undefined,
    risks: risks || undefined,
    dependencies: dependencies || undefined,
  }), [
    employeeName, employeeRole, recipientName, recipientTitle, selectedProject, metrics,
    totalWords, existingWords, draftSpeed, compileSpeed, chaosBuffer, dailyHours,
    includeWeekends, startDate, assumptions, risks, dependencies
  ]);

  const liveEstimate = useMemo(() => {
    if (!selectedProject) return null;
    return calculateEmployeeEstimate(estimateConfig);
  }, [estimateConfig, selectedProject]);

  const handleGenerate = () => {
    if (!selectedProject) return;
    const markdown = generateEmployeeEstimateMarkdown(estimateConfig);
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
    const filename = `Estimate_${selectedProject?.name.replace(/[^a-zA-Z0-9]/g, "_")}_${startDate}.md`;
    const blob = new Blob([generatedMarkdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadHTML = () => {
    if (!selectedProject) return;
    const html = generateEmployeeEstimateHTML(estimateConfig);
    const filename = `Estimate_${selectedProject.name.replace(/[^a-zA-Z0-9]/g, "_")}_${startDate}.html`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintPDF = () => {
    if (!selectedProject) return;
    const html = generateEmployeeEstimateHTML(estimateConfig);
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
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Individual Estimate</p>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-600" />
              Employee Project Estimate
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-2">
              Generate a professional time estimate for a specific project to send to your manager. Based on word count, your working pace, and scope parameters.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleGenerate}
              disabled={!selectedProject}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileText className="w-4 h-4" />
              Generate Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Live Preview Card */}
      {liveEstimate && selectedProject && (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-emerald-900">Live Estimate Preview</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Words Remaining</div>
              <div className="text-2xl font-bold text-slate-900">{liveEstimate.effectiveWords.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Total Hours</div>
              <div className="text-2xl font-bold text-emerald-600">{liveEstimate.totalHours}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Working Days</div>
              <div className="text-2xl font-bold text-slate-900">{liveEstimate.totalDays}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Finish Date</div>
              <div className="text-lg font-bold text-slate-900">
                {new Date(liveEstimate.estimatedFinishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-4 lg:col-span-1">
          {/* People Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">People</p>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Quick Fill from Team</label>
              <div className="relative">
                <select
                  onChange={(e) => handleTeamMemberSelect(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm appearance-none cursor-pointer transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                >
                  <option value="">Select team member...</option>
                  {teamRoster.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.name} ({member.role})
                    </option>
                  ))}
                </select>
                {teamRoster.find(m => m.id === employeeName) && (
                  <div className="absolute right-2 top-2.5 text-xs text-emerald-600 font-medium">
                    ✓ Auto-filled
                  </div>
                )}
              </div>
              
              {/* Validation indicators */}
              {teamRoster.find(m => m.id === employeeName) && (
                <div className="mt-2 p-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="text-xs text-emerald-700">
                    <span className="font-semibold">Auto-populated from Team Builder:</span> {employeeName}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-emerald-600">Rate:</span>
                      <span className="font-medium text-emerald-800">${teamRoster.find(m => m.id === employeeName)?.hourlyRate}/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-600">Hours:</span>
                      <span className="font-medium text-emerald-800">{teamRoster.find(m => m.id === employeeName)?.weeklyCapacity}hrs/wk</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Your Name</span>
                <input
                  type="text"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Your Role</span>
                <input
                  type="text"
                  value={employeeRole}
                  onChange={(e) => setEmployeeRole(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Recipient Name</span>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Recipient Title</span>
                <input
                  type="text"
                  value={recipientTitle}
                  onChange={(e) => setRecipientTitle(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          {/* Project Selection */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Project</p>
            
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Select Project</span>
              <select
                value={selectedProjectId ?? ""}
                onChange={(e) => handleProjectChange(Number(e.target.value))}
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Total Words</span>
                <input
                  type="number"
                  value={totalWords}
                  onChange={(e) => setTotalWords(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Already Done</span>
                <input
                  type="number"
                  value={existingWords}
                  onChange={(e) => setExistingWords(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>
            
            {/* Document Word Counter */}
            <DocumentWordCounter
              label="Calculate from Files"
              onApplyTotal={(wordCount) => setExistingWords(wordCount)}
            />
          </div>

          {/* Pacing Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Pacing & Schedule</p>
            
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Draft Speed (w/hr)</span>
                <div className="relative">
                  <input
                    type="number"
                    value={draftSpeed}
                    onChange={(e) => setDraftSpeed(Number(e.target.value))}
                    className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    min="50"
                    max="500"
                  />
                  {teamRoster.find(m => m.id === employeeName) && draftSpeed !== (teamRoster.find(m => m.id === employeeName)?.draftSpeed || 200) && (
                    <div className="absolute right-2 top-2 text-xs text-amber-600 font-medium">
                      Custom
                    </div>
                  )}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {teamRoster.find(m => m.id === employeeName) && draftSpeed !== (teamRoster.find(m => m.id === employeeName)?.draftSpeed || 200) 
                    ? `Using custom rate (Team Builder: ${teamRoster.find(m => m.id === employeeName)?.draftSpeed || 200} w/hr)`
                    : 'Typical range: 100-300 w/hr (industry: 150-200)'
                  }
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Compile Speed (w/hr)</span>
                <input
                  type="number"
                  value={compileSpeed}
                  onChange={(e) => setCompileSpeed(Number(e.target.value))}
                  placeholder="0 = skip"
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Daily Hours</span>
                <div className="relative">
                  <input
                    type="number"
                    value={dailyHours}
                    onChange={(e) => setDailyHours(Number(e.target.value))}
                    className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    min="1"
                    max="16"
                  />
                  {teamRoster.find(m => m.id === employeeName) && dailyHours !== ((teamRoster.find(m => m.id === employeeName)?.weeklyCapacity || 40) / 5) && (
                    <div className="absolute right-2 top-2 text-xs text-amber-600 font-medium">
                      Custom
                    </div>
                  )}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {teamRoster.find(m => m.id === employeeName) && dailyHours !== ((teamRoster.find(m => m.id === employeeName)?.weeklyCapacity || 40) / 5) 
                    ? `Using custom hours (Team Builder: ${Math.round(((teamRoster.find(m => m.id === employeeName)?.weeklyCapacity) || 20) / 5)} hrs/day)`
                    : 'Recommended: 4-8 hrs/day for sustainable pace'
                  }
                </div>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Chaos Buffer (%)</span>
                <input
                  type="number"
                  value={chaosBuffer}
                  onChange={(e) => setChaosBuffer(Number(e.target.value))}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-slate-600">Start Date</span>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </label>
              <label className="flex items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  checked={includeWeekends}
                  onChange={(e) => setIncludeWeekends(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 border-slate-300 rounded"
                />
                <span className="text-sm text-slate-700">Include Weekends</span>
              </label>
            </div>
          </div>

          {/* Optional Notes */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Optional Notes</p>
            
            <label className="block">
              <span className="text-xs font-medium text-slate-600">Custom Assumptions</span>
              <textarea
                value={assumptions}
                onChange={(e) => setAssumptions(e.target.value)}
                rows={2}
                placeholder="Leave blank for defaults..."
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-slate-600">Dependencies</span>
              <textarea
                value={dependencies}
                onChange={(e) => setDependencies(e.target.value)}
                rows={2}
                placeholder="What do you need from others?"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Export Options</p>
            
            <button
              onClick={handleDownloadMarkdown}
              disabled={!selectedProject}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Download Markdown (.md)
            </button>

            <button
              onClick={handleDownloadHTML}
              disabled={!selectedProject}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown className="w-4 h-4" />
              Download HTML
            </button>

            <button
              onClick={handlePrintPDF}
              disabled={!selectedProject}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-950 text-slate-50 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[700px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Estimate Preview</p>
                <p className="text-xs text-slate-400 mt-1">
                  {generatedMarkdown ? "Edit the markdown below or copy/download" : "Click 'Generate Estimate' to create your report"}
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
              placeholder="Click 'Generate Estimate' to produce your project time estimate..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
