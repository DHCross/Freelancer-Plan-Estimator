"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { Project, TeamMember, EstimatorResult } from "@/lib/types";
import { EstimatorView } from "./EstimatorView";
import { useTeamLoad } from "@/lib/TeamLoadContext";

type EstimatorField =
  | "activity"
  | "totalWords"
  | "draftSpeed"
  | "bufferPercent"
  | "dailyHours"
  | "teamMemberId"
  | "projectName"
  | "roleLabel";

interface EnhancedEstimatorToolsProps {
  projects: Project[];
  teamRoster: TeamMember[];
  estimatorInputs: {
    activity: string;
    totalWords: number;
    draftSpeed: number;
    bufferPercent: number;
    dailyHours: number;
    teamMemberId?: string;
    projectName?: string;
    roleLabel?: string;
  };
  estimatorResult: EstimatorResult | null;
  onInputChange: (field: EstimatorField, value: string | number) => void;
  onEstimate: () => void;
}

export function EnhancedEstimatorTools({
  projects,
  teamRoster,
  estimatorInputs,
  estimatorResult,
  onInputChange,
  onEstimate,
}: EnhancedEstimatorToolsProps) {
  const { updateTeamLoad } = useTeamLoad();
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [projectSearchTerm, setProjectSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    if (!projectSearchTerm.trim()) return projects;
    return projects.filter((p) =>
      p.name.toLowerCase().includes(projectSearchTerm.toLowerCase())
    );
  }, [projects, projectSearchTerm]);

  const handleProjectSelect = (project: Project) => {
    onInputChange("projectName", project.name);
    onInputChange("totalWords", project.targetWords || 0);

    // Auto-fill role based on owner
    if (project.assignedTo) {
      const owner = teamRoster.find((t) => t.id === project.assignedTo);
      if (owner) {
        onInputChange("teamMemberId", owner.id);
        onInputChange("draftSpeed", owner.draftSpeed);
        onInputChange("bufferPercent", owner.chaosBuffer);
        onInputChange("roleLabel", owner.role);
      }
    }

    setShowProjectDropdown(false);
    setProjectSearchTerm("");
  };

  const selectedProject = projects.find((p) => p.name === estimatorInputs.projectName);

  const handleUpdateProductRecord = useCallback(() => {
    if (!estimatorResult || !selectedProject || !estimatorInputs.teamMemberId) return;

    // Update team load via context
    updateTeamLoad(
      estimatorInputs.teamMemberId,
      String(selectedProject.id),
      estimatorResult.hours,
      estimatorInputs.roleLabel,
      selectedProject.primaryRole // Pass the product's primary role
    );
  }, [estimatorResult, selectedProject, estimatorInputs, updateTeamLoad]);

  return (
    <div className="space-y-6">
      {/* Project Injection Component */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Product Integration</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">Quick Product Lookup</h3>
          <p className="text-sm text-slate-600 mt-2">
            Select an existing product to auto-populate scope and team assignments.
          </p>
        </div>

        <div className="mt-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={projectSearchTerm}
              onChange={(e) => setProjectSearchTerm(e.target.value)}
              onFocus={() => setShowProjectDropdown(true)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <ChevronDown
              className={`absolute right-3 top-3.5 w-5 h-5 text-slate-400 pointer-events-none transition-transform ${
                showProjectDropdown ? "rotate-180" : ""
              }`}
            />
          </div>

          {showProjectDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
              {filteredProjects.length ? (
                filteredProjects.map((project) => {
                  const owner = teamRoster.find((t) => t.id === project.assignedTo);
                  return (
                    <button
                      key={project.id}
                      onClick={() => handleProjectSelect(project)}
                      className={`w-full text-left px-4 py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                        estimatorInputs.projectName === project.name ? "bg-teal-50" : ""
                      }`}
                    >
                      <div className="font-semibold text-slate-900">{project.name}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        {project.targetWords?.toLocaleString()} words • Owner: {owner?.name || "Unassigned"}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-3 text-sm text-slate-500">No products found</div>
              )}
            </div>
          )}
        </div>

        {selectedProject && (
          <div className="mt-4 p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-sm font-medium text-teal-900">✓ Loaded: {selectedProject.name}</p>
            <p className="text-xs text-teal-700 mt-1">
              {selectedProject.targetWords?.toLocaleString()} words
              {selectedProject.assignedTo &&
                ` • Assigned to ${teamRoster.find((t) => t.id === selectedProject.assignedTo)?.name || "Unknown"}`}
            </p>
          </div>
        )}
      </div>

      {/* Enhanced Estimator View */}
      <EstimatorView
        inputs={estimatorInputs}
        onChange={onInputChange}
        onEstimate={onEstimate}
        result={estimatorResult}
        teamRoster={teamRoster}
      />

      {/* Feedback Loop: Update Product Record */}
      {estimatorResult && selectedProject && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <p className="text-sm font-medium text-emerald-900 mb-3">
            Want to update {selectedProject.name} with these calculations?
          </p>
          <button
            onClick={handleUpdateProductRecord}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Update Product Record
          </button>
          <p className="text-xs text-emerald-700 mt-2">
            This will save the estimated hours ({estimatorResult.hours}h) and update team member load automatically.
          </p>
        </div>
      )}
    </div>
  );
}
