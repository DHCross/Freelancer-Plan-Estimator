"use client";

import { useState } from "react";
import { 
  Brain, 
  Users, 
  Handshake, 
  Timer, 
  CheckSquare, 
  AlertCircle,
  FileEdit,
  Map as MapIcon,
  Palette,
  Sword,
  MessageSquare,
  ArrowRightCircle
} from "lucide-react";

type WorkloadCategory = {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  items: string[];
};

const WORKLOAD_CATEGORIES: WorkloadCategory[] = [
  {
    id: "creative",
    title: "Creative Core",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    description: "Narrative transitions, salvage audits, and world-building research.",
    items: [
      "Scrubbing back-half narrative transitions",
      "Auditing 'Jon's' legacy material",
      "Drafting Act 3 Sewer Trial notes",
      "Researching Portuguese flora for realism"
    ]
  },
  {
    id: "mechanics",
    title: "NPC & Mechanics",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
    description: "Hero Lab conversions and 'living world' stat calibration.",
    items: [
      "Converting Survivors to Hero Lab",
      "Calibrating 'Watchful Rest' proprietor stats",
      "Tuning Keruc’Tuk ambush encounters"
    ]
  },
  {
    id: "external",
    title: "External & Assets",
    icon: Handshake,
    color: "bg-emerald-100 text-emerald-700",
    description: "Publisher coordination and art direction.",
    items: [
      "Liaison with William (Publisher)",
      "Coordinating Cover Art (Augusta)",
      "Commissioning Isometric & Blue-Ink Maps"
    ]
  },
  {
    id: "strategy",
    title: "Strategic Pace",
    icon: Timer,
    color: "bg-rose-100 text-rose-700",
    description: "Enforcing deadlines and major narrative logistics.",
    items: [
      "Enforcing Jan 31st 'Ready to Print'",
      "Simplify logistics (Arlo's move to Docks)"
    ]
  }
];

type ActionItem = {
  id: string;
  label: string;
  status: "pending" | "completed" | "delegated";
  icon: any;
};

const ACTION_ITEMS: ActionItem[] = [
  { id: "npc", label: "Continue Hero Lab NPC conversions", status: "pending", icon: Users },
  { id: "dungeon", label: "Draft Act 3 Sewer Trial notes", status: "pending", icon: FileEdit },
  { id: "tables", label: "Finalize Random Encounter Tables", status: "pending", icon: Sword },
  { id: "art", label: "Coordinate Cover Art & Isometric Maps", status: "pending", icon: Palette },
  { id: "worm", label: "Draft 'Scythe Worm' (Big Trouble style)", status: "pending", icon: AlertCircle },
  { id: "william", label: "Follow up with William (Website/Dossier)", status: "pending", icon: MessageSquare },
  { id: "sewer", label: "Finalize Sewer Map for cartographer", status: "pending", icon: MapIcon },
  { id: "campfire", label: "Campfire & Cuddles Prompts (Reassigned to Dan)", status: "delegated", icon: ArrowRightCircle },
];

export function MartinWorkloadView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-xl text-indigo-300">
            <Brain className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Martin's Role: The Creative Engine</h2>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed max-w-3xl">
              "He views himself as the high-level visionary... trying to translate 30 years of imagination into a functional Pathfinder product. He is focusing on the 'World of Consequence', leaving the technical durability to the Workbench."
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Four Pillars of Work */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-slate-400" />
            Core Responsibilities
          </h3>
          <div className="grid gap-4">
            {WORKLOAD_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${cat.color}`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">{cat.title}</h4>
                </div>
                <p className="text-xs text-slate-500 mb-3 italic">{cat.description}</p>
                <ul className="space-y-1">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-slate-300 mt-1.5 text-[0.6rem]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Current Action Items */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Timer className="w-5 h-5 text-slate-400" />
            Current Priority Queue
          </h3>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="divide-y divide-slate-100">
               {ACTION_ITEMS.map((item) => (
                 <div key={item.id} className={`p-4 flex items-center gap-3 ${item.status === 'delegated' ? 'bg-slate-50' : 'hover:bg-indigo-50/30'}`}>
                   <div className={`p-2 rounded-lg ${
                     item.status === 'delegated' ? 'bg-slate-100 text-slate-400' : 'bg-indigo-50 text-indigo-600'
                   }`}>
                     <item.icon className="w-4 h-4" />
                   </div>
                   <div className="flex-1">
                     <div className={`text-sm font-medium ${item.status === 'delegated' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                       {item.label}
                     </div>
                   </div>
                   {item.status === 'delegated' && (
                     <span className="text-xs font-semibold bg-slate-200 text-slate-500 px-2 py-1 rounded">Re-assigned</span>
                   )}
                 </div>
               ))}
             </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-amber-800 text-sm">
            <strong>Note on Deadlines:</strong> Martin manages the strategic clock. The January 31st deadline is a "hard lock" he imposed to force completion, bypassing technical feasibility warnings.
          </div>
        </div>
      </div>
    </div>
  );
}
