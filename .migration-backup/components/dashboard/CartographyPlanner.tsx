"use client";

import React, { useState, useMemo } from "react";
import {
  MapTicket,
  MapComplexity,
  MapType,
  CartographySummary,
  TeamMember,
  Project
} from "@/lib/types";
import { MAP_COMPLEXITY_DEFAULTS, TEAM_ROSTER } from "@/lib/constants";
import { runCartographyEstimate } from "@/lib/cartography";
import { Plus, Trash2, Map as MapIcon, Calendar, DollarSign, Clock } from "lucide-react";

interface CartographyPlannerProps {
  project?: Project;
}

export function CartographyPlanner({ project }: CartographyPlannerProps) {
  // Local state for tickets. In a real app, this might come from a DB or context.
  const [tickets, setTickets] = useState<MapTicket[]>([]);

  // Derived Summary
  const summary: CartographySummary = useMemo(() => {
    return runCartographyEstimate(tickets, { teamRoster: TEAM_ROSTER });
  }, [tickets]);

  const addTicket = () => {
    const newTicket: MapTicket = {
      id: Math.random().toString(36).substr(2, 9),
      projectId: project?.id.toString() || "generic",
      name: "New Map",
      type: "battle",
      complexityTier: "M",
      isExternalCartographer: true,
      cartographerRoleId: null,
      baseDraftHours: MAP_COMPLEXITY_DEFAULTS["M"].baseDraftHours,
      baseRevisionHours: MAP_COMPLEXITY_DEFAULTS["M"].baseRevisionHours,
      expectedRevisions: MAP_COMPLEXITY_DEFAULTS["M"].expectedRevisions,
      internalBriefingHours: MAP_COMPLEXITY_DEFAULTS["M"].internalBriefingHours,
      internalReviewHoursPerPass: MAP_COMPLEXITY_DEFAULTS["M"].internalReviewHoursPerPass,
      integrationHours: MAP_COMPLEXITY_DEFAULTS["M"].integrationHours,
      contractorRate: 50, // Default hourly
      flatMapFee: null,
      dependencies: [],
    };
    setTickets([...tickets, newTicket]);
  };

  const updateTicket = (id: string, updates: Partial<MapTicket>) => {
    setTickets(tickets.map(t => {
      if (t.id !== id) return t;

      const updated = { ...t, ...updates };

      // If complexity changed, reset defaults unless explicitly overridden?
      // For simplicity, let's just apply defaults if complexity changed.
      if (updates.complexityTier && updates.complexityTier !== t.complexityTier) {
        const defaults = MAP_COMPLEXITY_DEFAULTS[updates.complexityTier];
        updated.baseDraftHours = defaults.baseDraftHours;
        updated.baseRevisionHours = defaults.baseRevisionHours;
        updated.expectedRevisions = defaults.expectedRevisions;
        updated.internalBriefingHours = defaults.internalBriefingHours;
        updated.internalReviewHoursPerPass = defaults.internalReviewHoursPerPass;
        updated.integrationHours = defaults.integrationHours;
      }

      return updated;
    }));
  };

  const removeTicket = (id: string) => {
    setTickets(tickets.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Production Module
          </p>
          <h2 className="text-2xl font-bold text-slate-900">Cartography Planner</h2>
          <p className="text-sm text-slate-600 mt-2">
            Plan map assets, estimate costs, and track internal bottlenecks.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-50 rounded-full">
            <MapIcon className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Ticket List */}
        <div className="lg:col-span-2 space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={ticket.name}
                      onChange={(e) => updateTicket(ticket.id, { name: e.target.value })}
                      className="font-semibold text-slate-900 border-none p-0 focus:ring-0 w-full"
                      placeholder="Map Name"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-500">Type:</span>
                      <select
                        value={ticket.type}
                        onChange={(e) => updateTicket(ticket.id, { type: e.target.value as MapType })}
                        className="bg-slate-50 border-none rounded py-0 pl-2 pr-6 text-sm"
                      >
                        <option value="battle">Battle</option>
                        <option value="dungeon">Dungeon</option>
                        <option value="regional">Regional</option>
                        <option value="world">World</option>
                        <option value="tactical">Tactical</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-slate-500">Complexity:</span>
                      <select
                        value={ticket.complexityTier}
                        onChange={(e) => updateTicket(ticket.id, { complexityTier: e.target.value as MapComplexity })}
                        className="bg-slate-50 border-none rounded py-0 pl-2 pr-6 text-sm"
                      >
                        <option value="S">Small (S)</option>
                        <option value="M">Medium (M)</option>
                        <option value="L">Large (L)</option>
                        <option value="XL">Extra Large (XL)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-slate-500">Source:</span>
                      <select
                        value={ticket.isExternalCartographer ? "external" : "internal"}
                        onChange={(e) => updateTicket(ticket.id, { isExternalCartographer: e.target.value === "external" })}
                        className="bg-slate-50 border-none rounded py-0 pl-2 pr-6 text-sm"
                      >
                        <option value="external">External Contractor</option>
                        <option value="internal">Internal Team</option>
                      </select>
                    </div>
                  </div>

                  {/* Advanced/Detailed inputs could go in a collapsible section, keeping it simple for now */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                        <label className="text-xs text-slate-500">Draft Hours</label>
                        <input
                            type="number"
                            className="block w-20 text-sm border-slate-200 rounded"
                            value={ticket.baseDraftHours}
                            onChange={(e) => updateTicket(ticket.id, { baseDraftHours: Number(e.target.value) })}
                        />
                    </div>
                     <div>
                        <label className="text-xs text-slate-500">Revisions</label>
                        <input
                            type="number"
                            className="block w-20 text-sm border-slate-200 rounded"
                            value={ticket.expectedRevisions}
                            onChange={(e) => updateTicket(ticket.id, { expectedRevisions: Number(e.target.value) })}
                        />
                    </div>
                  </div>

                </div>
                <button
                  onClick={() => removeTicket(ticket.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addTicket}
            className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-medium hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Map Ticket
          </button>
        </div>

        {/* Summary Panel */}
        <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Estimate Summary</h3>

                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm font-medium uppercase tracking-wider">Est. Cost</span>
                        </div>
                        <div className="text-3xl font-bold text-emerald-400">
                            ${summary.totalCartographyCost.toLocaleString()}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-slate-400 mb-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-medium uppercase">Artist Hours</span>
                            </div>
                            <div className="text-xl font-semibold">
                                {summary.totalCartographerHours} h
                            </div>
                        </div>
                         <div>
                            <div className="flex items-center gap-2 text-slate-400 mb-1">
                                <Calendar className="w-4 h-4" />
                                <span className="text-xs font-medium uppercase">Internal Support</span>
                            </div>
                            <div className="text-xl font-semibold">
                                {summary.totalInternalSupportHours} h
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                             <span className="text-slate-400 text-sm">Map Count</span>
                             <span className="font-semibold">{summary.totalMaps}</span>
                        </div>
                        <div className="flex justify-between items-center">
                             <span className="text-slate-400 text-sm">Longest Pole (Days)</span>
                             <span className="font-semibold text-amber-400">{summary.mapCriticalPathDays} days</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <p className="font-semibold mb-1">Planning Note:</p>
                <p>
                    Ensure internal support hours ({summary.totalInternalSupportHours}h) are accounted for in the internal capacity plan.
                    High revision counts significantly impact internal review bandwidth.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
