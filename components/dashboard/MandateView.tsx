"use client";

import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { DisplayProject } from "@/lib/types";
import { setProjectOverride, getProjectOverride, setPublished, getPublished, getQuarterLabel } from "@/lib/utils";
import { runEstimator } from "@/lib/calculations";
import { TEAM_ROSTER } from "@/lib/constants";


interface MandateViewProps {
  projects: DisplayProject[];
  clientMode?: boolean;
}

export function MandateView({ projects, clientMode = false }: MandateViewProps) {
  const [items, setItems] = useState<DisplayProject[]>(projects);

  useEffect(() => {
    const merged = projects.map((p) => {
      const override = getProjectOverride(p.id);
      const published = getPublished(p.id);
      const display = override?.displayDate ?? published?.displayDate ?? p.displayDate ?? p.launchWindow;
      return {
        ...p,
        displayDate: display,
      } as DisplayProject;
    });
    setItems(merged);
  }, [projects]);

  const handleWindowChange = (id: number, value: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, displayDate: value } : item)));
  };

  const [publishMessage, setPublishMessage] = useState<string | null>(null);

  const handlePublishAll = () => {
    if (!confirm("Publish all current internal launch windows to client view?")) return;
    items.forEach((item) => {
      setPublished(item.id, { displayDate: item.displayDate ?? item.launchWindow });
    });
    setPublishMessage("Mandates published to Client view.");
    setTimeout(() => setPublishMessage(null), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mandates</p>
          <h2 className="text-2xl font-bold text-slate-900">Strategic Workload List</h2>
          <p className="text-sm text-slate-600 mt-2">
            Single source of truth for every in-flight or queued deliverable, showing stakeholder ownership and window.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!clientMode && (
            <button
              className="text-xs px-3 py-2 bg-indigo-50 text-indigo-700 rounded border border-indigo-100"
              onClick={handlePublishAll}
            >
              Publish All
            </button>
          )}
          <Briefcase className="w-10 h-10 text-slate-500" />
        </div>
      </div>
      {publishMessage && (
        <div className="text-sm text-emerald-600 ml-4">{publishMessage}</div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Project</th>
              <th className="px-4 py-3 text-left">Owner</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Launch Window</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <p className="font-semibold text-slate-800">{project.name}</p>
                  <p className="text-xs text-slate-500">{project.revenuePotential}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">{project.stakeholder}</td>
                <td className="px-4 py-3 text-slate-600">{project.displayType ?? project.type}</td>
                <td className="px-4 py-3">
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 rounded-full px-2 py-1">
                    {project.displayStatus ?? project.internalStatus}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  {clientMode ? (
                    (getPublished(project.id)?.displayDate ?? project.displayDate ?? project.launchWindow)
                  ) : (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={project.displayDate ?? project.launchWindow}
                        onChange={e => handleWindowChange(project.id, e.target.value)}
                        className="w-full p-1 border rounded bg-white text-xs"
                      />
                      <button
                        type="button"
                        title="Suggest Timeline"
                        onClick={() => {
                          const writer = TEAM_ROSTER.find((m) => m.id === project.assignedTo);
                          const draftSpeed = writer?.draftSpeed ?? 200;
                          const est = runEstimator({
                            activity: project.name,
                            totalWords: project.targetWords ?? 20000,
                            draftSpeed,
                            bufferPercent: 15,
                            dailyHours: 4,
                          });
                          const q = getQuarterLabel(est.date);
                          handleWindowChange(project.id, q);
                        }}
                        className="text-xs px-2 py-1 rounded bg-indigo-50 border border-indigo-100 text-indigo-600"
                      >
                        Suggest
                      </button>
                      <button
                        type="button"
                        title="Publish to Client"
                        onClick={() => {
                          setPublished(project.id, { displayDate: project.displayDate });
                        }}
                        className="text-xs px-2 py-1 rounded bg-emerald-50 border border-emerald-100 text-emerald-600"
                      >
                        Publish
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
