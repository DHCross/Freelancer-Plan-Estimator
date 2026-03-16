"use client";

import React, { useState } from "react";
import { useWorkGraph } from "@/lib/WorkGraphContext";
import { WorkPackage, WorkPhase, ScopeType } from "@/lib/work-package";
import {
    Plus,
    Trash2,
    Link as LinkIcon,
    Calendar,
    DollarSign,
    User,
    ArrowRight
} from "lucide-react";

export function WorkPackagePlanner() {
    const { workPackages, projects, teamMembers, addWorkPackage, updateWorkPackage, deleteWorkPackage } = useWorkGraph();
    const [selectedProject, setSelectedProject] = useState<number | "all">("all");

    // Form State for new Package
    const [isCreating, setIsCreating] = useState(false);
    const [newPackage, setNewPackage] = useState<Partial<WorkPackage>>({
        phase: "Draft",
        scopeType: "fixed",
        scopeQuantity: 1,
        productivityRate: 1,
        estimatedHours: 10,
        teamScope: "Internal",
        costRate: 0,
        dependencies: []
    });

    const filteredPackages = workPackages.filter(wp =>
        selectedProject === "all" || wp.projectId === selectedProject
    );

    const handleCreate = () => {
        if (!newPackage.title || !newPackage.projectId) return;

        const wp: WorkPackage = {
            id: `wp-${Date.now()}`,
            projectId: newPackage.projectId,
            title: newPackage.title,
            phase: newPackage.phase as WorkPhase,
            scopeType: newPackage.scopeType as ScopeType,
            scopeQuantity: newPackage.scopeQuantity || 0,
            productivityRate: newPackage.productivityRate || 1,
            estimatedHours: newPackage.estimatedHours || 0,
            requiredRole: newPackage.requiredRole || "Writer",
            assignedPersonId: newPackage.assignedPersonId,
            teamScope: "Internal",
            costRate: newPackage.costRate || 0,
            dependencies: [],
            precedenceType: "FS",
            lag: 0
        };

        addWorkPackage(wp);
        setIsCreating(false);
        setNewPackage({
            phase: "Draft",
            scopeType: "fixed",
            scopeQuantity: 1,
            productivityRate: 1,
            estimatedHours: 10,
            teamScope: "Internal",
            costRate: 0,
            dependencies: []
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Work Packages</h2>
                    <p className="text-sm text-slate-500">Manage the atomic units of work.</p>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        className="px-3 py-2 border border-slate-200 rounded-lg text-sm"
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(e.target.value === "all" ? "all" : Number(e.target.value))}
                    >
                        <option value="all">All Projects</option>
                        {projects.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                    <button
                        onClick={() => setIsCreating(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                        <Plus className="w-4 h-4" />
                        New Package
                    </button>
                </div>
            </div>

            {/* Creation Form */}
            {isCreating && (
                <div className="bg-slate-50 p-6 rounded-xl border border-indigo-200 space-y-4">
                    <h3 className="font-semibold text-indigo-900">Create New Work Package</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-600">Project</label>
                            <select
                                className="w-full mt-1 px-3 py-2 border rounded-lg"
                                value={newPackage.projectId || ""}
                                onChange={(e) => setNewPackage({...newPackage, projectId: Number(e.target.value)})}
                            >
                                <option value="">Select Project...</option>
                                {projects.map(p => (
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-600">Title</label>
                            <input
                                type="text"
                                className="w-full mt-1 px-3 py-2 border rounded-lg"
                                value={newPackage.title || ""}
                                onChange={(e) => setNewPackage({...newPackage, title: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-600">Phase</label>
                            <select
                                className="w-full mt-1 px-3 py-2 border rounded-lg"
                                value={newPackage.phase}
                                onChange={(e) => setNewPackage({...newPackage, phase: e.target.value as WorkPhase})}
                            >
                                <option value="Draft">Draft</option>
                                <option value="Edit">Edit</option>
                                <option value="Layout">Layout</option>
                                <option value="Art">Art</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-600">Assignee</label>
                            <select
                                className="w-full mt-1 px-3 py-2 border rounded-lg"
                                value={newPackage.assignedPersonId || ""}
                                onChange={(e) => {
                                    const member = teamMembers.find(m => m.id === e.target.value);
                                    setNewPackage({
                                        ...newPackage,
                                        assignedPersonId: e.target.value,
                                        costRate: member ? member.hourlyRate : 0
                                    });
                                }}
                            >
                                <option value="">Unassigned</option>
                                {teamMembers.map(m => (
                                    <option key={m.id} value={m.id}>{m.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-600">Est. Hours</label>
                            <input
                                type="number"
                                className="w-full mt-1 px-3 py-2 border rounded-lg"
                                value={newPackage.estimatedHours}
                                onChange={(e) => setNewPackage({...newPackage, estimatedHours: Number(e.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={() => setIsCreating(false)} className="px-4 py-2 text-slate-600">Cancel</button>
                        <button onClick={handleCreate} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Create</button>
                    </div>
                </div>
            )}

            {/* List */}
            <div className="grid gap-4">
                {filteredPackages.map(wp => (
                    <div key={wp.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                                    wp.phase === "Draft" ? "bg-blue-100 text-blue-700" :
                                    wp.phase === "Layout" ? "bg-purple-100 text-purple-700" :
                                    "bg-slate-100 text-slate-700"
                                }`}>
                                    {wp.phase}
                                </span>
                                <h3 className="font-semibold text-slate-900">{wp.title}</h3>
                            </div>
                            <div className="text-xs text-slate-500 flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {teamMembers.find(m => m.id === wp.assignedPersonId)?.name || "Unassigned"}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {wp.startDate ? `${wp.startDate} → ${wp.endDate}` : "Not Scheduled"}
                                </span>
                                <span className="flex items-center gap-1">
                                    <DollarSign className="w-3 h-3" />
                                    ${wp.computedCost?.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        {/* Dependencies */}
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                             {wp.dependencies.length > 0 ? (
                                 <span className="flex items-center gap-1">
                                     <LinkIcon className="w-3 h-3" />
                                     Depends on {wp.dependencies.length} task(s)
                                 </span>
                             ) : (
                                 <span className="opacity-50">No deps</span>
                             )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                             {/* Dependency Linker (Simplified for now) */}
                             <select
                                className="w-32 text-xs border rounded p-1"
                                onChange={(e) => {
                                    if(e.target.value) {
                                        const newDeps = [...wp.dependencies, e.target.value];
                                        updateWorkPackage(wp.id, { dependencies: newDeps });
                                    }
                                }}
                                value=""
                             >
                                <option value="">Add Dep...</option>
                                {workPackages
                                    .filter(cand => cand.id !== wp.id && cand.projectId === wp.projectId && !cand.dependencies.includes(wp.id)) // prevent simple cycle
                                    .map(cand => (
                                    <option key={cand.id} value={cand.id}>{cand.title}</option>
                                ))}
                             </select>

                             <button
                                onClick={() => deleteWorkPackage(wp.id)}
                                className="p-2 text-slate-400 hover:text-red-500 transition"
                             >
                                <Trash2 className="w-4 h-4" />
                             </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
