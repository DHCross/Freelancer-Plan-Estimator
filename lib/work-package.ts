import { TeamMember } from "./types";

export type WorkPhase = "Draft" | "Edit" | "Layout" | "Art" | "Integration" | "Review";
export type ScopeType = "words" | "pages" | "pieces" | "fixed";
export type PrecedenceType = "FS" | "SS" | "FF";
export type TeamScope = "Internal" | "Contractor" | "Publisher";

export interface WorkPackage {
  id: string;
  projectId: number;
  title: string;
  phase: WorkPhase;
  description?: string;

  // Scope & Effort
  scopeType: ScopeType;
  scopeQuantity: number;
  productivityRate: number; // units per hour
  estimatedHours: number; // derived (scope/rate) or manual override

  // Resources
  requiredRole: string;
  assignedPersonId?: string | null;
  teamScope: TeamScope;
  costRate: number; // $/hr

  // Dependencies
  dependencies: string[]; // IDs
  precedenceType: PrecedenceType;
  lag: number; // hours

  // Computed (Transient)
  computedCost?: number;
  startDate?: string; // ISO Date
  endDate?: string; // ISO Date
  criticalPath?: boolean;
}

export interface ComputedSchedule {
  startDate: string;
  endDate: string;
  durationDays: number;
}

// --- Computation Engine ---

export function computeWorkPackageHours(wp: WorkPackage): number {
  if (wp.scopeType === "fixed") {
    return wp.estimatedHours;
  }
  if (wp.productivityRate <= 0) return wp.estimatedHours; // Avoid division by zero
  return wp.scopeQuantity / wp.productivityRate;
}

export function computeWorkPackageCost(wp: WorkPackage): number {
  const hours = computeWorkPackageHours(wp);
  return hours * wp.costRate;
}

/**
 * Basic scheduling implementation.
 * Assumes infinite capacity for Critical Path Method (CPM).
 * Resource leveling is a separate step (not fully implemented here, keeping it simple as per prompt "Apply resource constraints (hours/week per person)" -> likely just duration stretching).
 */
export function computeSchedule(
    packages: WorkPackage[],
    teamMembers: TeamMember[],
    projectStartDate: string = new Date().toISOString().split('T')[0]
): Map<string, ComputedSchedule> {
  const schedule = new Map<string, ComputedSchedule>();
  const packageMap = new Map(packages.map(p => [p.id, p]));

  // Topological Sort / Leveling
  // 1. Calculate duration in DAYS for each package based on assignee's capacity
  const durations = new Map<string, number>(); // in working days

  for (const wp of packages) {
    const hours = computeWorkPackageHours(wp);
    let dailyCapacity = 8; // default

    if (wp.assignedPersonId) {
      const person = teamMembers.find(m => m.id === wp.assignedPersonId);
      if (person && person.weeklyCapacity > 0) {
        // Simple heuristic: distribute weekly capacity over 5 days
        dailyCapacity = person.weeklyCapacity / 5;
      }
    }

    const days = Math.ceil(hours / dailyCapacity);
    durations.set(wp.id, Math.max(1, days)); // Minimum 1 day
  }

  // 2. Forward Pass (ES, EF)
  // We need to visit nodes in dependency order.
  const visited = new Set<string>();
  const earlyStart = new Map<string, number>(); // Days from project start
  const earlyFinish = new Map<string, number>();

  // Helper to get finish day of a dependency
  const getDependencyFinish = (depId: string): number => {
    return earlyFinish.get(depId) || 0;
  };

  let changed = true;
  while (changed) {
    changed = false;
    for (const wp of packages) {
      if (visited.has(wp.id)) continue;

      const allDepsProcessed = wp.dependencies.every(d => visited.has(d));
      if (allDepsProcessed) {
        let maxDepFinish = 0;
        for (const depId of wp.dependencies) {
            // Assuming FS (Finish-to-Start) for now with 0 lag
            maxDepFinish = Math.max(maxDepFinish, getDependencyFinish(depId));
        }

        const startDay = maxDepFinish;
        const duration = durations.get(wp.id) || 1;
        const finishDay = startDay + duration;

        earlyStart.set(wp.id, startDay);
        earlyFinish.set(wp.id, finishDay);
        visited.add(wp.id);
        changed = true;
      }
    }
  }

  // 3. Convert relative days to Dates
  // Using a simple helper to add working days (skipping weekends)
  const addWorkingDays = (startDate: string, days: number): string => {
      const date = new Date(startDate);
      let added = 0;
      while (added < days) {
          date.setDate(date.getDate() + 1);
          if (date.getDay() !== 0 && date.getDay() !== 6) {
              added++;
          }
      }
      return date.toISOString().split('T')[0];
  };

  for (const wp of packages) {
      const startDay = earlyStart.get(wp.id) || 0;
      const duration = durations.get(wp.id) || 1;

      const startDate = addWorkingDays(projectStartDate, startDay);
      // End date is start date + duration - 1 (inclusive)
      // But let's verify logic. If start is day 0, duration 1. End is day 0.
      // addWorkingDays(start, 0) -> start.
      // So addWorkingDays(projectStartDate, startDay + duration) would be the start of the NEXT task.
      const endDate = addWorkingDays(projectStartDate, startDay + duration - 1);

      schedule.set(wp.id, {
          startDate,
          endDate,
          durationDays: duration
      });
  }

  return schedule;
}

export function computeProjectFinance(packages: WorkPackage[]) {
    let totalCost = 0;
    for (const wp of packages) {
        totalCost += computeWorkPackageCost(wp);
    }
    return {
        totalCost
    };
}
