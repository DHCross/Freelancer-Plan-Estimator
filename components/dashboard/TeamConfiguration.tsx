"use client";

import { Users, DollarSign, Clock, Settings } from "lucide-react";
import { useState } from "react";

interface TeamRole {
  title: string;
  hourlyRate: number;
  weeklyHours: number;
  productivity: number; // words per hour
  responsibilities: string[];
}

interface TeamMember {
  role: TeamRole;
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

export function TeamConfiguration({ clientMode = false }: { clientMode?: boolean }) {
  const [team, setTeam] = useState<TeamMember[]>([
    { role: teamRoles.lead_writer, quantity: 1 },
    { role: teamRoles.writer, quantity: 1 },
    { role: teamRoles.editor, quantity: 1 },
    { role: teamRoles.layout_artist, quantity: 1 },
    { role: teamRoles.project_manager, quantity: 1 }
  ]);

  const [projectSize, setProjectSize] = useState(50000); // words
  const [timeline, setTimeline] = useState(6); // months

  const calculateTeamMetrics = () => {
    const totalWeeklyCost = team.reduce((sum, member) => 
      sum + (member.role.hourlyRate * member.role.weeklyHours * member.quantity), 0
    );

    const totalMonthlyCost = totalWeeklyCost * 4.33; // Average weeks per month
    const totalProjectCost = totalMonthlyCost * timeline;

    // Calculate writing productivity
    const totalWeeklyWords = team
      .filter(member => member.role.productivity > 0)
      .reduce((sum, member) => 
        sum + (member.role.productivity * member.role.weeklyHours * member.quantity), 0
      );

    const weeksNeeded = projectSize / totalWeeklyWords;
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
      feasible: adjustedTimeline <= timeline,
      teamSize: totalPeople,
      coordinationOverhead
    };
  };

  const metrics = calculateTeamMetrics();

  const updateTeamMember = (roleKey: string, quantity: number) => {
    setTeam(prev => {
      const role = teamRoles[roleKey];
      const existingIndex = prev.findIndex(m => m.role.title === role.title);
      
      if (quantity === 0) {
        return prev.filter((_, i) => i !== existingIndex);
      }
      
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity };
        return updated;
      } else {
        return [...prev, { role, quantity }];
      }
    });
  };

  if (clientMode) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-slate-900">Team Configuration Model</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Builder */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-slate-800">Build Your Team</h4>
          
          {Object.entries(teamRoles).map(([key, role]) => {
            const currentMember = team.find(m => m.role.title === role.title);
            const quantity = currentMember?.quantity || 0;
            
            return (
              <div key={key} className="border border-slate-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-medium text-slate-800">{role.title}</h5>
                    <p className="text-sm text-slate-500">${role.hourlyRate}/hr • {role.weeklyHours}hrs/week</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateTeamMember(key, Math.max(0, quantity - 1))}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => updateTeamMember(key, quantity + 1)}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
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
              value={projectSize}
              onChange={(e) => setProjectSize(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg"
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
              min="1"
              max="12"
              value={timeline}
              onChange={(e) => setTimeline(parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg"
            />
          </div>

          {/* Metrics Display */}
          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <h5 className="font-medium text-slate-800">Team Metrics</h5>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Team Size:</span>
              <span className="font-semibold">{metrics.teamSize} people</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Weekly Output:</span>
              <span className="font-semibold">{metrics.weeklyWords.toLocaleString()} words</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Weekly Cost:</span>
              <span className="font-semibold">${Math.round(metrics.weeklyCost).toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Monthly Cost:</span>
              <span className="font-semibold">${Math.round(metrics.monthlyCost).toLocaleString()}</span>
            </div>

            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Project Duration:</span>
                <span className={`font-semibold ${metrics.feasible ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {Math.round(metrics.monthsNeeded)} months
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Project Cost:</span>
                <span className="font-bold text-slate-900">${Math.round(metrics.projectCost).toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Coordination Overhead:</span>
                <span className="font-semibold">{Math.round(metrics.coordinationOverhead * 100)}%</span>
              </div>
            </div>
          </div>

          {!metrics.feasible && (
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
              <p className="text-sm text-rose-700">
                ⚠️ Timeline not feasible. Need {Math.round(metrics.monthsNeeded)} months for {projectSize.toLocaleString()} words.
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
