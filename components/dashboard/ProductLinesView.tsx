"use client";

import { useMemo, useState } from "react";
import { BookOpen, Clock, Users, Activity, CalendarClock, Target } from "lucide-react";
import { TeamMember, DisplayProject } from "@/lib/types";
import { PRODUCT_LINES } from "@/lib/constants";
import { calculateAnnualLoad, runEstimator, addWorkingDays } from "@/lib/calculations";
import { useTeamLoad } from "@/lib/TeamLoadContext";
import { getQuarterLabel } from "@/lib/utils";

interface ProductLinesViewProps {
  projects: DisplayProject[];
  teamRoster: TeamMember[];
}

function formatDate(iso: string | undefined) {
  if (!iso) return "TBD";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export function ProductLinesView({ projects, teamRoster }: ProductLinesViewProps) {
  const { getTeamTotalHours } = useTeamLoad();
  const [selectedOwner, setSelectedOwner] = useState<string>(teamRoster[0]?.id ?? "");

  const rosterById = useMemo(() => new Map(teamRoster.map((m) => [m.id, m])), [teamRoster]);

  const writerLoads = useMemo(() => calculateAnnualLoad(projects, teamRoster), [projects, teamRoster]);
  const loadById = useMemo(() => new Map(writerLoads.map((w) => [w.id, w])), [writerLoads]);

  const linesWithProjects = useMemo(() => {
    return PRODUCT_LINES.map((line) => {
      const lineProjects = projects.filter((p) => line.productIds.includes(p.id));
      const totalHours = lineProjects.reduce((sum, project) => sum + (project.total ?? 0), 0);
      const locked = lineProjects.filter((p) => p.isLocked);
      return { ...line, projects: lineProjects, totalHours, locked };
    });
  }, [projects]);

  const myAssignments = useMemo(() => {
    if (!selectedOwner) return [] as DisplayProject[];
    return projects.filter((p) => p.assignedTo === selectedOwner);
  }, [projects, selectedOwner]);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Planning</p>
          <h2 className="text-2xl font-bold text-slate-900">Product Lines & Assignments</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            See every product grouped by line, who owns it, their load %, and a realistic finish window adjusted for bandwidth.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm text-slate-600">Show assignments for</label>
          <select
            value={selectedOwner}
            onChange={(e) => setSelectedOwner(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm"
          >
            {teamRoster.map((member) => (
              <option key={member.id} value={member.id}>{member.name}</option>
            ))}
          </select>
        </div>
      </div>

      {myAssignments.length > 0 && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <div className="flex items-center gap-2 text-indigo-900 mb-2">
            <Users className="w-4 h-4" />
            <span className="font-semibold">Projects assigned to {rosterById.get(selectedOwner)?.name}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {myAssignments.map((project) => {
              const owner = rosterById.get(project.assignedTo);
              const load = loadById.get(project.assignedTo);
              const injected = getTeamTotalHours(project.assignedTo);
              const percent = owner?.weeklyCapacity
                ? Math.round(((load?.totalHours ?? 0) + injected) / (owner.weeklyCapacity * 48) * 100)
                : 0;

              const est = runEstimator({
                activity: project.name,
                totalWords: project.targetWords,
                draftSpeed: owner?.draftSpeed || 250,
                bufferPercent: owner?.chaosBuffer || 15,
                dailyHours: Math.max(2, Math.min(6, (owner?.weeklyCapacity ?? 20) / 5)),
                teamMemberId: owner?.id,
                projectName: project.name,
                roleLabel: owner?.role ?? project.primaryRole ?? "Unassigned",
              }, teamRoster);

              const slipWeeks = percent > 100 ? Math.ceil((percent - 100) / 20) : 0;
              const realisticFinish = addWorkingDays(est.date, slipWeeks * 5, true);

              return (
                <div key={project.id} className="bg-white border border-indigo-100 rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">{project.displayType ?? project.type}</p>
                      <p className="font-semibold text-slate-900">{project.name}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${project.isLocked ? "border-indigo-300 text-indigo-700" : "border-slate-200 text-slate-500"}`}>
                      {project.isLocked ? "Locked" : project.displayStatus ?? project.internalStatus}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-slate-600 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5" />
                    <span>{project.targetWords.toLocaleString()} words</span>
                    <span className="mx-1">•</span>
                    <span>{percent}% load</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-600 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimate: {est.hours.toFixed(0)}h / {Math.ceil(est.days)} days</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-600 flex items-center gap-2">
                    <CalendarClock className="w-3.5 h-3.5" />
                    <span>Realistic finish {formatDate(realisticFinish)} ({getQuarterLabel(realisticFinish || est.date)})</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid gap-6">
        {linesWithProjects.map((line) => {
          const owner = teamRoster.find((m) => m.name.startsWith(line.owner) || m.id === line.owner.toLowerCase());
          return (
            <div key={line.id} id={`product-line-${line.id}`} className="bg-white border border-slate-200 rounded-2xl shadow-sm scroll-mt-16">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-6 border-b border-slate-100" style={{ borderTop: `4px solid ${line.color}` }}>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Product Line</p>
                  <h3 className="text-xl font-bold text-slate-900">{line.label}</h3>
                  <p className="text-sm text-slate-600 max-w-2xl">{line.description}</p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>Owner: {owner?.name ?? line.owner}</span>
                    <span className="mx-1">•</span>
                    <span>Total scheduled: {Math.round(line.totalHours)}h</span>
                    {line.locked.length > 0 && (
                      <span className="flex items-center gap-1 text-indigo-700">
                        <Target className="w-3.5 h-3.5" />
                        {line.locked.length} locked deadline(s)
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <BookOpen className="w-5 h-5 text-slate-500" />
                  <span>{line.projects.length} products</span>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {line.projects.map((project) => {
                  const assignee = rosterById.get(project.assignedTo);
                  const load = loadById.get(project.assignedTo);
                  const injected = getTeamTotalHours(project.assignedTo);
                  const percent = assignee?.weeklyCapacity
                    ? Math.round(((load?.totalHours ?? 0) + injected) / (assignee.weeklyCapacity * 48) * 100)
                    : 0;

                  const est = runEstimator({
                    activity: project.name,
                    totalWords: project.targetWords,
                    draftSpeed: assignee?.draftSpeed || 250,
                    bufferPercent: assignee?.chaosBuffer || 15,
                    dailyHours: Math.max(2, Math.min(6, (assignee?.weeklyCapacity ?? 20) / 5)),
                    teamMemberId: assignee?.id,
                    projectName: project.name,
                    roleLabel: assignee?.role ?? project.primaryRole ?? "Unassigned",
                  }, teamRoster);

                  const slipWeeks = percent > 100 ? Math.ceil((percent - 100) / 20) : 0;
                  const realisticFinish = addWorkingDays(est.date, slipWeeks * 5, true);

                  return (
                    <div key={project.id} className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900">{project.name}</span>
                          {project.isLocked && (
                            <span className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">Locked</span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500">
                          {project.displayType ?? project.type} • {project.revenuePotential}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">
                          Launch window: {project.displayDate ?? project.launchWindow} • Target words: {project.targetWords.toLocaleString()}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-sm text-slate-700">
                        <div className="min-w-[180px]">
                          <div className="font-semibold">{assignee?.name ?? "Unassigned"}</div>
                          <div className="text-xs text-slate-500">{assignee?.role ?? "Assign a role"}</div>
                          <div className="text-xs mt-1">Load: {percent}% ({Math.round((load?.totalHours ?? 0) + injected)}h)</div>
                        </div>
                        <div className="min-w-[200px] text-xs text-slate-600">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{est.hours.toFixed(0)}h • {Math.ceil(est.days)} days</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <CalendarClock className="w-3.5 h-3.5" />
                            <span>Realistic finish {formatDate(realisticFinish)} ({getQuarterLabel(realisticFinish || est.date)})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
