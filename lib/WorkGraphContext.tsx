"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from "react";
import { WorkPackage, computeSchedule, computeWorkPackageHours, computeWorkPackageCost } from "./work-package";
import { TeamMember, Project } from "./types";
import { INITIAL_PROJECTS, TEAM_ROSTER } from "./constants";

// Migration Logic
function migrateProjectsToWorkPackages(projects: Project[], teamRoster: TeamMember[]): WorkPackage[] {
  const packages: WorkPackage[] = [];

  projects.forEach(p => {
    // 1. Manual Hours (Development)
    if (p.manualHours && p.manualHours > 0) {
       const assignee = teamRoster.find(m => m.id === p.assignedTo);
       packages.push({
         id: `wp-${p.id}-dev`,
         projectId: p.id,
         title: `${p.name} - Development`,
         phase: "Draft",
         scopeType: "fixed",
         scopeQuantity: 1,
         productivityRate: 1,
         estimatedHours: p.manualHours,
         requiredRole: assignee?.role || "Writer",
         assignedPersonId: p.assignedTo,
         teamScope: "Internal",
         costRate: assignee?.hourlyRate || 0,
         dependencies: [],
         precedenceType: "FS",
         lag: 0
       });
    } else if (p.targetWords > 0) {
        // Estimate based on words if no manual hours
       const assignee = teamRoster.find(m => m.id === p.assignedTo);
       const rate = assignee?.draftSpeed || 200;
       const estimatedHours = p.targetWords / rate;

       packages.push({
         id: `wp-${p.id}-dev`,
         projectId: p.id,
         title: `${p.name} - Drafting`,
         phase: "Draft",
         scopeType: "words",
         scopeQuantity: p.targetWords,
         productivityRate: rate,
         estimatedHours: estimatedHours,
         requiredRole: assignee?.role || "Writer",
         assignedPersonId: p.assignedTo,
         teamScope: "Internal",
         costRate: assignee?.hourlyRate || 0,
         dependencies: [],
         precedenceType: "FS",
         lag: 0
       });
    }

    // 2. Layout
    if (p.layoutHours && p.layoutHours > 0) {
        packages.push({
            id: `wp-${p.id}-layout`,
            projectId: p.id,
            title: `${p.name} - Layout`,
            phase: "Layout",
            scopeType: "fixed",
            scopeQuantity: 1,
            productivityRate: 1,
            estimatedHours: p.layoutHours,
            requiredRole: "Layout Designer",
            assignedPersonId: null, // Often unassigned in initial data
            teamScope: "Internal",
            costRate: 40, // Default layout rate
            dependencies: [`wp-${p.id}-dev`], // Layout depends on Dev
            precedenceType: "FS",
            lag: 0
        });
    }
  });

  return packages;
}

interface WorkGraphContextType {
  workPackages: WorkPackage[];
  projects: Project[]; // Legacy container
  teamMembers: TeamMember[];

  // Actions
  addWorkPackage: (wp: WorkPackage) => void;
  updateWorkPackage: (id: string, updates: Partial<WorkPackage>) => void;
  deleteWorkPackage: (id: string) => void;

  // Derived
  getProjectPackages: (projectId: number) => WorkPackage[];
  getPersonLoad: (personId: string) => number; // Total hours
  getProjectCost: (projectId: number) => number;
  totalDevelopmentCost: number;
}

const WorkGraphContext = createContext<WorkGraphContextType | undefined>(undefined);

export function WorkGraphProvider({ children }: { children: ReactNode }) {
  const [workPackages, setWorkPackages] = useState<WorkPackage[]>([]);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(TEAM_ROSTER);

  // Initial Migration / Load
  useEffect(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem("hoskbrew_work_packages");
        if (saved) {
            setWorkPackages(JSON.parse(saved));
        } else {
            // Migrate
            const migrated = migrateProjectsToWorkPackages(INITIAL_PROJECTS, TEAM_ROSTER);
            setWorkPackages(migrated);
        }
    }
  }, []);

  // Persistence
  useEffect(() => {
    if (typeof window !== "undefined" && workPackages.length > 0) {
        localStorage.setItem("hoskbrew_work_packages", JSON.stringify(workPackages));
    }
  }, [workPackages]);

  // Actions
  const addWorkPackage = useCallback((wp: WorkPackage) => {
    setWorkPackages(prev => [...prev, wp]);
  }, []);

  const updateWorkPackage = useCallback((id: string, updates: Partial<WorkPackage>) => {
    setWorkPackages(prev => prev.map(wp => {
        if (wp.id === id) {
            const updated = { ...wp, ...updates };
            // Recompute estimated hours if scope/rate changed
            if (updates.scopeQuantity !== undefined || updates.productivityRate !== undefined || updates.scopeType !== undefined) {
                 updated.estimatedHours = computeWorkPackageHours(updated);
            }
            return updated;
        }
        return wp;
    }));
  }, []);

  const deleteWorkPackage = useCallback((id: string) => {
    setWorkPackages(prev => prev.filter(wp => wp.id !== id));
  }, []);

  // Computation: Schedule & Dates
  // We compute this on every render (or useMemo) and inject back into WPs?
  // For now, let's just make the "Computed" fields available on the objects returned by the context?
  // Or keep the raw state pure and return "enriched" packages.

  const enrichedPackages = useMemo(() => {
      const schedule = computeSchedule(workPackages, teamMembers);
      return workPackages.map(wp => {
          const s = schedule.get(wp.id);
          const cost = computeWorkPackageCost(wp);
          return {
              ...wp,
              startDate: s?.startDate,
              endDate: s?.endDate,
              computedCost: cost
          };
      });
  }, [workPackages, teamMembers]);

  const getProjectPackages = useCallback((projectId: number) => {
      return enrichedPackages.filter(wp => wp.projectId === projectId);
  }, [enrichedPackages]);

  const getPersonLoad = useCallback((personId: string) => {
      return enrichedPackages
        .filter(wp => wp.assignedPersonId === personId)
        .reduce((sum, wp) => sum + (wp.estimatedHours || 0), 0);
  }, [enrichedPackages]);

  const getProjectCost = useCallback((projectId: number) => {
      return enrichedPackages
        .filter(wp => wp.projectId === projectId)
        .reduce((sum, wp) => sum + (wp.computedCost || 0), 0);
  }, [enrichedPackages]);

  const totalDevelopmentCost = useMemo(() => {
      return enrichedPackages.reduce((sum, wp) => sum + (wp.computedCost || 0), 0);
  }, [enrichedPackages]);

  const value: WorkGraphContextType = {
      workPackages: enrichedPackages,
      projects,
      teamMembers,
      addWorkPackage,
      updateWorkPackage,
      deleteWorkPackage,
      getProjectPackages,
      getPersonLoad,
      getProjectCost,
      totalDevelopmentCost
  };

  return (
    <WorkGraphContext.Provider value={value}>
      {children}
    </WorkGraphContext.Provider>
  );
}

export function useWorkGraph() {
  const context = useContext(WorkGraphContext);
  if (!context) {
    throw new Error("useWorkGraph must be used within WorkGraphProvider");
  }
  return context;
}
