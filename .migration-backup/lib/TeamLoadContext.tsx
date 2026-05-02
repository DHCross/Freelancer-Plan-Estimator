"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { TeamMember } from "./types";

export interface TeamLoadUpdate {
  teamMemberId: string;
  projectId: string;
  additionalHours: number;
  roleLabel?: string;
  primaryRole?: string; // The product's primary role (Writing, Editing, Layout, etc.)
}

interface TeamLoadContextType {
  teamLoads: Map<string, TeamLoadUpdate[]>; // Map of teamMemberId -> array of loads
  updateTeamLoad: (teamMemberId: string, projectId: string, hours: number, roleLabel?: string, primaryRole?: string) => void;
  getTeamTotalHours: (teamMemberId: string, roleFilter?: string) => number;
  getTeamLoadPercent: (teamMemberId: string, teamMember: TeamMember, roleFilter?: string) => number;
}

const TeamLoadContext = createContext<TeamLoadContextType | undefined>(undefined);

export function TeamLoadProvider({ children }: { children: ReactNode }) {
  const [teamLoads, setTeamLoads] = useState<Map<string, TeamLoadUpdate[]>>(new Map());

  const updateTeamLoad = useCallback(
    (teamMemberId: string, projectId: string, hours: number, roleLabel?: string, primaryRole?: string) => {
      setTeamLoads((prev) => {
        const newMap = new Map(prev);
        const loads = newMap.get(teamMemberId) || [];

        // Remove existing load for this project
        const filtered = loads.filter((l) => l.projectId !== projectId);

        // Add new load if hours > 0
        if (hours > 0) {
          filtered.push({ teamMemberId, projectId, additionalHours: hours, roleLabel, primaryRole });
        }

        if (filtered.length > 0) {
          newMap.set(teamMemberId, filtered);
        } else {
          newMap.delete(teamMemberId);
        }

        // Persist to localStorage
        if (typeof window !== "undefined") {
          const loadData = Array.from(newMap.entries()).reduce(
            (acc, [key, value]) => {
              acc[key] = value;
              return acc;
            },
            {} as Record<string, TeamLoadUpdate[]>
          );
          localStorage.setItem("hoskbrew_team_loads", JSON.stringify(loadData));
        }

        return newMap;
      });
    },
    []
  );

  const getTeamTotalHours = useCallback(
    (teamMemberId: string, roleFilter?: string): number => {
      const loads = teamLoads.get(teamMemberId) || [];
      const filtered = roleFilter
        ? loads.filter((load) => load.primaryRole === roleFilter)
        : loads;
      return filtered.reduce((sum, load) => sum + load.additionalHours, 0);
    },
    [teamLoads]
  );

  const getTeamLoadPercent = useCallback(
    (teamMemberId: string, teamMember: TeamMember, roleFilter?: string): number => {
      const totalHours = getTeamTotalHours(teamMemberId, roleFilter);
      const memberWeeklyCapacity = teamMember.weeklyCapacity || 40;
      // Calculate as percentage of their personal capacity
      return Math.round((totalHours / (memberWeeklyCapacity * 4)) * 100); // 4 weeks per month
    },
    [getTeamTotalHours]
  );

  const value: TeamLoadContextType = {
    teamLoads,
    updateTeamLoad,
    getTeamTotalHours,
    getTeamLoadPercent,
  };

  return (
    <TeamLoadContext.Provider value={value}>
      {children}
    </TeamLoadContext.Provider>
  );
}

export function useTeamLoad() {
  const context = useContext(TeamLoadContext);
  if (!context) {
    throw new Error("useTeamLoad must be used within TeamLoadProvider");
  }
  return context;
}
