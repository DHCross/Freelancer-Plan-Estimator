"use client";

import React, { useState, useMemo } from "react";
import { Users, DollarSign, Clock, Settings, Plus, Minus, TrendingUp, AlertTriangle } from "lucide-react";
import { TeamMember as TeamMemberType } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { validateForm, FieldFeedback, LoadingSpinner, commonValidationRules, EmptyState } from "@/lib/ui-feedback";
import { Tooltip, emptyStateMessages } from "@/lib/tooltips";

interface TeamRole {
  title: string;
  hourlyRate: number;
  weeklyHours: number;
  productivity: number; // words per hour
  responsibilities: string[];
}

interface TeamMember {
  id: string;
  roleId: string;
  role: TeamRole;
  hourlyRate: number;
  weeklyHours: number;
  quantity: number;
}

const teamRoles: Record<string, TeamRole> = {
  lead_writer: {
    title: "Lead Writer",
    hourlyRate: 25,
    weeklyHours: 20,
    productivity: 150,
    responsibilities: ["Core narrative", "System design", "Canon management"]
  },
  writer: {
    title: "Writer",
    hourlyRate: 20,
    weeklyHours: 20,
    productivity: 175,
    responsibilities: ["Chapter writing", "Stat blocks", "Background content"]
  },
  editor: {
    title: "Development Editor",
    hourlyRate: 22,
    weeklyHours: 15,
    productivity: 0, // Measured in pages, not words
    responsibilities: ["Structure editing", "Continuity", "Rules review"]
  },
  layout_artist: {
    title: "Layout Artist",
    hourlyRate: 30,
    weeklyHours: 15,
    productivity: 0, // Measured in pages/hour
    responsibilities: ["Page design", "Affinity Publisher", "Print readiness"]
  },
  cartographer: {
    title: "Cartographer",
    hourlyRate: 35,
    weeklyHours: 10,
    productivity: 0,
    responsibilities: ["Map creation", "Regional design", "Battle maps"]
  },
  project_manager: {
    title: "Project Manager",
    hourlyRate: 40,
    weeklyHours: 10,
    productivity: 0,
    responsibilities: ["Scheduling", "Coordination", "Risk management"]
  }
};

interface TeamConfigType {
  members: TeamMember[];
  projectSize: number;
  timeline: number;
  coordinationOverhead: number;
}

export function TeamConfiguration({ clientMode = false }: { clientMode?: boolean }) {
  const [teamConfig, setTeamConfig] = useState<TeamConfigType>(() => ({
    members: [],
    projectSize: 50000,
    timeline: 6,
    coordinationOverhead: 0.15,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(() => validateForm(teamConfig, {
    projectSize: commonValidationRules.projectSize,
    timeline: commonValidationRules.timeline
  }));

  const [team, setTeam] = useState<TeamMember[]>([
    { id: 'lead-writer', roleId: 'lead_writer', role: teamRoles.lead_writer, hourlyRate: teamRoles.lead_writer.hourlyRate, weeklyHours: teamRoles.lead_writer.weeklyHours, quantity: 1 },
    { id: 'writer', roleId: 'writer', role: teamRoles.writer, hourlyRate: teamRoles.writer.hourlyRate, weeklyHours: teamRoles.writer.weeklyHours, quantity: 1 },
    { id: 'editor', roleId: 'editor', role: teamRoles.editor, hourlyRate: teamRoles.editor.hourlyRate, weeklyHours: teamRoles.editor.weeklyHours, quantity: 1 },
    { id: 'layout-artist', roleId: 'layout_artist', role: teamRoles.layout_artist, hourlyRate: teamRoles.layout_artist.hourlyRate, weeklyHours: teamRoles.layout_artist.weeklyHours, quantity: 1 },
    { id: 'project-manager', roleId: 'project_manager', role: teamRoles.project_manager, hourlyRate: teamRoles.project_manager.hourlyRate, weeklyHours: teamRoles.project_manager.weeklyHours, quantity: 1 }
  ]);

  const calculateTeamMetrics = () => {
    const totalWeeklyCost = team.reduce((sum, member) => 
      sum + (member.role.hourlyRate * member.role.weeklyHours * member.quantity), 0
    );

    const totalMonthlyCost = totalWeeklyCost * 4.33; // Average weeks per month
    const totalProjectCost = totalMonthlyCost * teamConfig.timeline;

    // Calculate writing productivity
    const totalWeeklyWords = team
      .filter(member => member.role.productivity > 0)
      .reduce((sum, member) => 
        sum + (member.role.productivity * member.role.weeklyHours * member.quantity), 0
      );

    const weeksNeeded = teamConfig.projectSize / totalWeeklyWords;
    const monthsNeeded = weeksNeeded / 4.33;

    // Coordination overhead (meetings increase with team size)
    const totalPeople = team.reduce((sum, member) => sum + member.quantity, 0);
    const coordinationOverhead = totalPeople > 3 ? 0.15 : 0.10; // 15% vs 10% overhead

    const adjustedTimeline = monthsNeeded * (1 + coordinationOverhead);
    const adjustedCost = totalProjectCost * (1 + coordinationOverhead);

    return {
      weeklyCost: totalWeeklyCost,
      monthlyCost: totalMonthlyCost,
      projectCost: adjustedCost,
      weeklyWords: totalWeeklyWords,
      monthsNeeded: adjustedTimeline,
      feasible: adjustedTimeline <= teamConfig.timeline,
      teamSize: totalPeople,
      coordinationOverhead
    };
  };

  const metrics = calculateTeamMetrics();

  // Update team member with validation
  const updateTeamMember = (roleId: string, quantity: number) => {
    setIsLoading(true);
    const updatedMembers = teamConfig.members.filter(m => m.roleId !== roleId);
    
    if (quantity > 0) {
      const role = teamRoles[roleId];
      updatedMembers.push({
        id: Date.now().toString(),
        roleId,
        role: role,
        hourlyRate: role.hourlyRate,
        weeklyHours: role.weeklyHours,
        quantity,
      });
    }
    
    const newConfig = { ...teamConfig, members: updatedMembers };
    setTeamConfig(newConfig);
    setValidation(validateForm(newConfig, {
      projectSize: commonValidationRules.projectSize,
      timeline: commonValidationRules.timeline
    }));
    
    // Simulate async operation
    setTimeout(() => setIsLoading(false), 300);
  };

  const updateProjectParameter = (param: string, value: number) => {
    const newConfig = { ...teamConfig, [param]: value };
    setTeamConfig(newConfig);
    setValidation(validateForm(newConfig, {
      projectSize: commonValidationRules.projectSize,
      timeline: commonValidationRules.timeline
    }));
  };

  if (clientMode) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-slate-900">Team Configuration Model</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Builder */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-slate-800">Team Roles</h4>
          <p className="text-sm text-slate-600">
            Add team members to calculate project costs and timeline.
            <Tooltip term="coordination-overhead" className="ml-1">
              <span className="text-indigo-600 underline">Larger teams need more coordination time.</span>
            </Tooltip>
          </p>
          
          {Object.entries(teamRoles).map(([key, role]) => {
            const currentMember = team.find(m => m.role.title === role.title);
            const quantity = currentMember?.quantity || 0;
            
            return (
              <div key={key} className="border border-slate-200 rounded-lg p-3 transition-all duration-200 hover:shadow-sm hover:border-slate-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-medium text-slate-800">{role.title}</h5>
                    <p className="text-sm text-slate-500">${role.hourlyRate}/hr • {role.weeklyHours}hrs/week</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateTeamMember(key, Math.max(0, quantity - 1))}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all duration-200 hover:scale-110 hover:shadow-sm"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => updateTeamMember(key, quantity + 1)}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all duration-200 hover:scale-110 hover:shadow-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-xs text-slate-600">
                  {role.responsibilities.map((resp, i) => (
                    <span key={i} className="inline-block bg-slate-100 rounded px-2 py-1 mr-1 mb-1">
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Parameters */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-slate-800">Project Parameters</h4>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Project Size</label>
            <select
              value={teamConfig.projectSize}
              onChange={(e) => updateProjectParameter('projectSize', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:opacity-50"
              disabled={isLoading}
            >
              <option value={15000}>Micro Module (15k words)</option>
              <option value={50000}>Small Adventure (50k words)</option>
              <option value={100000}>Large Adventure (100k words)</option>
              <option value={150000}>Core Rulebook (150k words)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Target Timeline (months)</label>
            <input
              type="number"
              value={teamConfig.timeline}
              onChange={(e) => updateProjectParameter('timeline', parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:opacity-50"
              min="1"
              max="24"
              disabled={isLoading}
            />
            {validation.errors.timeline && (
              <FieldFeedback error={validation.errors.timeline} />
            )}
            {validation.warnings.timeline && (
              <FieldFeedback warning={validation.warnings.timeline} />
            )}
          </div>

          {/* Metrics Display */}
          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <h5 className="font-medium text-slate-800">Team Metrics</h5>
            
            {metrics.teamSize === 0 ? (
              <EmptyState
                title={emptyStateMessages.noTeamMembers.title}
                description={emptyStateMessages.noTeamMembers.description}
                action={
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    {emptyStateMessages.noTeamMembers.action}
                  </button>
                }
              />
            ) : (
              <>
                {/* Team Metrics Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Team Size:</span>
                    <span className="font-semibold">{metrics.teamSize} people</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Weekly Words:</span>
                    <span className="font-semibold">{formatNumber(metrics.weeklyWords)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Weekly Cost:</span>
                    <span className="font-semibold">${Math.round(metrics.weeklyCost).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Monthly Cost:</span>
                    <span className="font-semibold">${Math.round(metrics.monthlyCost).toLocaleString()}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {!metrics.feasible && (
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
              <p className="text-sm text-rose-700">
                ⚠️ Timeline not feasible. Need {Math.round(metrics.monthsNeeded)} months for {teamConfig.projectSize.toLocaleString()} words.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h4 className="font-medium text-slate-800 mb-3">Monthly Cost Breakdown</h4>
        <div className="space-y-2">
          {team.filter(member => member.quantity > 0).map((member, i) => (
            <div key={i} className="flex justify-between items-center text-sm">
              <span>{member.quantity}x {member.role.title}</span>
              <span className="font-medium">
                ${Math.round(member.role.hourlyRate * member.role.weeklyHours * 4.33 * member.quantity).toLocaleString()}/mo
              </span>
            </div>
          ))}
          <div className="border-t pt-2 flex justify-between items-center font-semibold">
            <span>Total Monthly</span>
            <span>${Math.round(metrics.monthlyCost).toLocaleString()}/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
