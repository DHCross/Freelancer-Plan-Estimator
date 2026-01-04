"use client";

import { useMemo } from "react";
import { AlertTriangle, Gauge, ShieldCheck, CalendarClock, Activity, Users } from "lucide-react";
import { DisplayProject, TeamMember, WriterLoad } from "@/lib/types";
import { useTeamLoad } from "@/lib/TeamLoadContext";
import { getQuarterLabel } from "@/lib/utils";

interface TeamHealthDashboardProps {
  writers: WriterLoad[];
  projects: DisplayProject[];
  teamRoster: TeamMember[];
}

function formatDate(iso?: string) {
  if (!iso) return "TBD";
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export function TeamHealthDashboard({ writers, projects, teamRoster }: TeamHealthDashboardProps) {
  const { getTeamTotalHours } = useTeamLoad();

  const overloads = useMemo(() => {
    return writers
      .map((writer) => {
        const injected = getTeamTotalHours(writer.id);
        const percent = writer.annualCapacity
          ? Math.round(((writer.totalHours + injected) / writer.annualCapacity) * 100)
          : 0;
        return { ...writer, injected, percent };
      })
      .sort((a, b) => b.percent - a.percent);
  }, [writers, getTeamTotalHours]);

  const lockedDeadlines = useMemo(() => {
    return projects
      .filter((p) => p.isLocked)
      .map((p) => ({
        ...p,
        assignee: teamRoster.find((m) => m.id === p.assignedTo),
      }))
      .sort((a, b) => (a.targetDate && b.targetDate ? a.targetDate.localeCompare(b.targetDate) : 0));
  }, [projects, teamRoster]);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Team Health</p>
          <h2 className="text-2xl font-bold text-slate-900">Live Bottlenecks & Deadlines</h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-2">
            Focus on present risk: overloaded people, locked corporate dates, and where to re-route work before deadlines slip.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{lockedDeadlines.length} locked commitments • {overloads.filter((o) => o.percent > 100).length} bottleneck(s)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-amber-700 mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-semibold">Bottlenecks (sorted by load)</span>
          </div>
          <div className="space-y-3">
            {overloads.map((writer) => (
              <div key={writer.id} className="flex items-start justify-between p-3 rounded-lg border border-slate-100 bg-slate-50">
                <div>
                  <p className="font-semibold text-slate-900">{writer.name}</p>
                  <p className="text-xs text-slate-500">{writer.role}</p>
                  <p className="text-xs text-slate-600 mt-1">{writer.projects.length} active projects</p>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${writer.percent > 100 ? "text-red-600" : "text-emerald-700"}`}>
                    {writer.percent}%
                  </div>
                  <div className="text-[11px] text-slate-500">{Math.round(writer.totalHours + writer.injected)}h / {Math.round(writer.annualCapacity)}h</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-700 mb-3">
            <CalendarClock className="w-4 h-4" />
            <span className="font-semibold">Locked Deadlines</span>
          </div>
          {lockedDeadlines.length === 0 ? (
            <p className="text-sm text-slate-500">No locked dates right now.</p>
          ) : (
            <div className="space-y-3">
              {lockedDeadlines.map((project) => (
                <div key={project.id} className="p-3 rounded-lg border border-indigo-100 bg-indigo-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{project.name}</p>
                      <p className="text-xs text-slate-600">{project.assignee?.name ?? "Unassigned"}</p>
                    </div>
                    <div className="text-xs text-indigo-700 px-2 py-1 rounded-full bg-white border border-indigo-200">
                      {formatDate(project.targetDate)} ({getQuarterLabel(project.targetDate || project.displayDate || project.launchWindow)})
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">{project.revenuePotential}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 text-slate-800 mb-3">
          <Gauge className="w-4 h-4" />
          <span className="font-semibold">Where to shift work</span>
        </div>
        <p className="text-sm text-slate-600 mb-3">Match high-load owners to lower-load teammates before scheduling new work.</p>
        <div className="grid md:grid-cols-3 gap-3">
          {overloads.map((writer) => (
            <div key={writer.id} className="p-3 rounded-lg border border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-500" />
                <span className="font-semibold text-slate-900">{writer.name}</span>
              </div>
              <div className="text-xs text-slate-600 mt-1">Load {writer.percent}% • {writer.projects.length} projects</div>
              {writer.projects.slice(0, 2).map((project) => (
                <div key={project.id} className="mt-2 text-xs text-slate-600 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-slate-500" />
                  <span>{project.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
