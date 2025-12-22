"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Calendar, Clock, ArrowRight, Save, AlertCircle } from "lucide-react";
import { DisplayProject, TeamMember, Metrics } from "@/lib/types";
import { calculateProjectAnalysis } from "@/lib/calculations";
import { format, addWeeks, parseISO, isValid } from "date-fns";

interface DeadlineEstimatorProps {
  projects: DisplayProject[];
  teamRoster: TeamMember[];
  metrics: Metrics;
  onUpdateProject: (projectId: number, field: string, value: string) => void;
}

export function DeadlineEstimator({
  projects,
  teamRoster,
  metrics,
  onUpdateProject,
}: DeadlineEstimatorProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [selectedMemberId, setSelectedMemberId] = useState<string>("");
  const [customWeeklyCapacity, setCustomWeeklyCapacity] = useState<number>(0);
  const [saved, setSaved] = useState(false);

  // Get the full analysis for the selected project to get accurate hours
  const selectedProjectAnalysis = useMemo(() => {
    if (!selectedProjectId) return null;
    const project = projects.find((p) => p.id === selectedProjectId);
    if (!project) return null;
    
    // We wrap in array to reuse the calculation function
    const analysis = calculateProjectAnalysis([project], metrics);
    return analysis[0];
  }, [selectedProjectId, projects, metrics]);

  // Update defaults when project changes
  useEffect(() => {
    if (selectedProjectAnalysis) {
      const assignee = teamRoster.find(
        (m) => m.id === selectedProjectAnalysis.assignedTo || m.name === selectedProjectAnalysis.assignedTo
      );
      
      if (assignee) {
        setSelectedMemberId(assignee.id);
        setCustomWeeklyCapacity(assignee.weeklyCapacity);
      } else {
        // Default to first member or generic
        const first = teamRoster[0];
        if (first) {
          setSelectedMemberId(first.id);
          setCustomWeeklyCapacity(first.weeklyCapacity);
        }
      }
      
      // Reset saved state
      setSaved(false);
    }
  }, [selectedProjectAnalysis, teamRoster]);

  // Handle member change to update capacity
  const handleMemberChange = (memberId: string) => {
    setSelectedMemberId(memberId);
    const member = teamRoster.find((m) => m.id === memberId);
    if (member) {
      setCustomWeeklyCapacity(member.weeklyCapacity);
    }
  };

  // Calculate results
  const calculation = useMemo(() => {
    if (!selectedProjectAnalysis || customWeeklyCapacity <= 0) return null;

    const totalHours = selectedProjectAnalysis.total;
    const weeks = totalHours / customWeeklyCapacity;
    const days = weeks * 7;
    
    let endDate: Date;
    try {
      endDate = addWeeks(parseISO(startDate), weeks);
    } catch (e) {
      return null;
    }

    return {
      totalHours,
      weeks,
      endDate,
    };
  }, [selectedProjectAnalysis, customWeeklyCapacity, startDate]);

  const handleSave = () => {
    if (selectedProjectId && calculation && isValid(calculation.endDate)) {
      onUpdateProject(selectedProjectId, "targetDate", calculation.endDate.toISOString());
      onUpdateProject(selectedProjectId, "displayDate", format(calculation.endDate, "MMM yyyy"));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Planning Tool</p>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-6 h-6 text-indigo-600" />
            Deadline Estimator
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Calculate realistic completion dates based on project scope and team capacity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Project</label>
            <select
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedProjectId || ""}
              onChange={(e) => setSelectedProjectId(Number(e.target.value))}
            >
              <option value="">Select a project...</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.targetWords.toLocaleString()} words)
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
              <input
                type="date"
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Assigned To</label>
              <select
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedMemberId}
                onChange={(e) => handleMemberChange(e.target.value)}
              >
                {teamRoster.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Weekly Capacity (Hours)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={customWeeklyCapacity}
                onChange={(e) => setCustomWeeklyCapacity(Number(e.target.value))}
              />
              <span className="text-sm text-slate-500 whitespace-nowrap">hrs / week</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Adjusting this overrides the team member's default capacity for this calculation only.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center">
          {!selectedProjectAnalysis ? (
            <div className="text-center text-slate-400">
              <Calendar className="w-12 h-12 mx-auto mb-2 opacity-20" />
              <p>Select a project to see estimates</p>
            </div>
          ) : calculation ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Total Effort</p>
                  <p className="text-xl font-bold text-slate-900">
                    {Math.round(calculation.totalHours)} <span className="text-sm font-normal text-slate-500">hours</span>
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Duration</p>
                  <p className="text-xl font-bold text-slate-900">
                    {calculation.weeks.toFixed(1)} <span className="text-sm font-normal text-slate-500">weeks</span>
                  </p>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-slate-500">Estimated Completion Date</p>
                <div className="text-3xl font-bold text-indigo-600">
                  {isValid(calculation.endDate) ? format(calculation.endDate, "MMMM d, yyyy") : "Invalid Date"}
                </div>
                {isValid(calculation.endDate) && (
                  <p className="text-sm text-slate-600">
                    ({format(calculation.endDate, "'Q'Q yyyy")})
                  </p>
                )}
              </div>

              <button
                onClick={handleSave}
                disabled={saved}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                  saved
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow"
                }`}
              >
                {saved ? (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Saved to Project
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Apply Deadline to Project
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="text-center text-slate-400">
              <p>Invalid configuration</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
