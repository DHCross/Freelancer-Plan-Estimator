"use client";

import { Timer, Users } from "lucide-react";

import { EstimatorResult, TeamMember } from "@/lib/types";
import { TEAM_ROSTER } from "@/lib/constants";

interface EstimatorInputs {
  activity: string;
  totalWords: number;
  draftSpeed: number;
  bufferPercent: number;
  dailyHours: number;
  teamMemberId?: string;
}

interface EstimatorViewProps {
  inputs: EstimatorInputs;
  onChange: (field: keyof EstimatorInputs, value: string | number) => void;
  onEstimate: () => void;
  result: EstimatorResult | null;
  clientMode?: boolean;
}

export function EstimatorView({ inputs, onChange, onEstimate, result, clientMode = false }: EstimatorViewProps) {
  const selectedTeamMember = TEAM_ROSTER.find(member => member.id === inputs.teamMemberId);
  
  const handleTeamMemberChange = (teamMemberId: string) => {
    const member = TEAM_ROSTER.find(m => m.id === teamMemberId);
    if (member) {
      // Auto-populate draft speed when team member is selected
      onChange("teamMemberId", teamMemberId);
      onChange("draftSpeed", member.draftSpeed);
      onChange("bufferPercent", member.chaosBuffer);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {clientMode ? "Schedule Assurance" : "Reality Check"}
          </p>
          <h2 className="text-2xl font-bold text-slate-900">Team-Aware Estimator</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            {clientMode
              ? "See how different team members affect delivery timelines."
              : "Generate accurate estimates based on individual team member capabilities and work styles."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-10 h-10 text-indigo-500" />
          {selectedTeamMember && (
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">{selectedTeamMember.name}</p>
              <p className="text-xs text-slate-500">{selectedTeamMember.role}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="space-y-3">
            <label className="block text-sm">
              <span className="text-slate-500">Team Member</span>
              <select
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={inputs.teamMemberId || ""}
                onChange={(e) => handleTeamMemberChange(e.target.value)}
              >
                <option value="">Individual estimation (no team member)</option>
                {TEAM_ROSTER.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name} - {member.role} ({member.draftSpeed} w/hr)
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="text-slate-500">Activity label</span>
              <input
                type="text"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={inputs.activity}
                onChange={(e) => onChange("activity", e.target.value)}
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-500">Total words</span>
              <input
                type="number"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={inputs.totalWords}
                min={1000}
                onChange={(e) => onChange("totalWords", Number(e.target.value))}
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="text-slate-500">Draft speed (words/hr)</span>
                <input
                  type="number"
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                  value={inputs.draftSpeed}
                  min={50}
                  onChange={(e) => onChange("draftSpeed", Number(e.target.value))}
                />
              </label>
              <label className="block text-sm">
                <span className="text-slate-500">Buffer %</span>
                <input
                  type="number"
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                  value={inputs.bufferPercent}
                  min={0}
                  onChange={(e) => onChange("bufferPercent", Number(e.target.value))}
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="text-slate-500">Daily available hours</span>
              <input
                type="number"
                className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2"
                value={inputs.dailyHours}
                min={1}
                onChange={(e) => onChange("dailyHours", Number(e.target.value))}
              />
            </label>
          </div>
          <button
            onClick={onEstimate}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg font-semibold transition"
          >
            Calculate Safe Deadline
          </button>
        </div>

        <div className="space-y-4">
          {result ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">
                {result.teamMember ? `${result.teamMember.name} - Team Estimate` : 'Manager Hand-off'}
              </p>
              <p className="text-lg font-semibold text-emerald-900">{result.hours} hrs • {result.days} days</p>
              <p className="text-sm text-emerald-800">Target completion: {result.date}</p>
              {result.teamMember && (
                <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-700">
                  <p>Based on {result.teamMember.name}'s profile:</p>
                  <p>• Role: {result.teamMember.role}</p>
                  <p>• Draft Speed: {result.teamMember.draftSpeed} words/hr</p>
                  <p>• Chaos Buffer: {result.teamMember.chaosBuffer}%</p>
                  {result.roleAdjusted && <p>• Adjusted for role-specific factors</p>}
                </div>
              )}
              <div className="bg-white border border-emerald-100 rounded-lg p-4 text-sm text-slate-700 italic">
                &ldquo;{result.mgrText}&rdquo;
              </div>
            </div>
          ) : (
            <div className="bg-slate-100 border border-dashed border-slate-300 rounded-2xl p-6 text-sm text-slate-500">
              {selectedTeamMember 
                ? `Enter task parameters to generate ${selectedTeamMember.name}'s delivery estimate.`
                : "Select a team member and enter task parameters to generate an accurate estimate."
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
