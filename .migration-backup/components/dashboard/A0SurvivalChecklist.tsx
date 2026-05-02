"use client";

import { useState } from "react";
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  FileCode, 
  Users, 
  Eye, 
  Gem, 
  FileText, 
  CheckCircle, 
  Circle 
} from "lucide-react";

type SurvivalTask = {
  id: string;
  category: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "High" | "Critical";
  icon: any;
};

const INITIAL_TASKS: SurvivalTask[] = [
  {
    id: "system-integrity",
    category: "Infrastructure",
    title: "System Integrity",
    description: "Maintain the TRPG Workbench to bridge the gap between creative drafts and layout-ready files.",
    completed: true,
    priority: "Critical",
    icon: FileCode,
  },
  {
    id: "content-protection",
    category: "Safety",
    title: "Content Protection",
    description: "Use the Content Loss Detector to ensure no narrative detail is 'parked' or lost during normalization passes.",
    completed: false,
    priority: "Critical",
    icon: Shield,
  },
  {
    id: "deadline-management",
    category: "Planning",
    title: "Deadline Management",
    description: "Use the Layout-Safe Deadline Calculator to work backward from January 31st and protect the final layout week.",
    completed: true,
    priority: "Critical",
    icon: Clock,
  },
  {
    id: "struct-standard",
    category: "Formatting",
    title: "Structural Standardization",
    description: "Replace all legacy tags (like {#section-6}) with H3 headers to prevent InDesign formatting errors.",
    completed: false,
    priority: "High",
    icon: FileCode, // Or specialized icon
  },
  {
    id: "npc-consolidation",
    category: "Data",
    title: "NPC Consolidation",
    description: "Compile every survivor into a single master document to support Martin’s Hero Lab conversion.",
    completed: false,
    priority: "High",
    icon: Users,
  },
  {
    id: "visual-audit",
    category: "Quality",
    title: "Visual Audit",
    description: "Ensure all stat blocks match the 'Martin Standard' by stripping code tags and using bold, all-caps headers.",
    completed: false,
    priority: "High",
    icon: Eye,
  },
  {
    id: "loot-restoration",
    category: "Content",
    title: "Loot Restoration",
    description: "Reintegrate the full descriptive blocks for the dwarven treasures to ensure craftsmanship details remain inline.",
    completed: false,
    priority: "High",
    icon: Gem,
  },
  {
    id: "dossier-reporting",
    category: "Management",
    title: "Dossier Reporting",
    description: "Prepare the data-backed summary for William that emphasizes time estimates and velocity over budget diagnostics.",
    completed: false,
    priority: "Critical",
    icon: FileText,
  },
];

export function A0SurvivalChecklist() {
  const [tasks, setTasks] = useState<SurvivalTask[]>(INITIAL_TASKS);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      {/* Header with Context */}
      <div className="bg-amber-50 rounded-2xl p-6 shadow-sm border border-amber-200">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100 p-3 rounded-xl text-amber-700">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-amber-900">A0: Survival Architecture & Checklists</h2>
              <span className="text-amber-800 text-sm font-mono bg-amber-100 px-2 py-1 rounded">
                Deadline: Jan 31st (Hard)
              </span>
            </div>
            <p className="text-amber-800/80 mt-2 text-sm leading-relaxed">
              "This isn’t about being a programmer; it’s about survival architecture. I need a system that can detect a Resource Bottleneck because I am the resource being squeezed."
            </p>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex-1 bg-amber-200/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-600 h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-amber-900">{progress}% Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="grid gap-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`
              group relative flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all
              ${task.completed 
                ? "bg-slate-50 border-slate-200 opacity-75" 
                : "bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md"
              }
            `}
          >
            <div className={`mt-1 transition-colors ${task.completed ? "text-emerald-500" : "text-slate-300 group-hover:text-indigo-400"}`}>
              {task.completed ? <CheckCircle className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  task.completed 
                    ? "bg-slate-200 text-slate-500"
                    : task.priority === "Critical" 
                      ? "bg-red-100 text-red-700" 
                      : "bg-indigo-50 text-indigo-700"
                }`}>
                  {task.category}
                </span>
                {task.priority === "Critical" && !task.completed && (
                  <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Critical
                  </span>
                )}
              </div>
              
              <h3 className={`font-semibold text-lg ${task.completed ? "text-slate-500 line-through" : "text-slate-900"}`}>
                {task.title}
              </h3>
              <p className={`text-sm mt-1 leading-relaxed ${task.completed ? "text-slate-400" : "text-slate-600"}`}>
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
