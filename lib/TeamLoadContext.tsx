"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { TeamMember } from "./types";

export interface TeamLoadUpdate {
  teamMemberId: string;
  projectId: string;
  additionalHours: number;
  roleLabel?: string;
}

interface TeamLoadContextType {
  teamLoads: Map<string, TeamLoadUpdate[]>; // Map of teamMemberId -> array of loads
  updateTeamLoad: (teamMemberId: string, projectId: string, hours: number, roleLabel?: string) => void;
  getTeamTotalHours: (teamMemberId: string) => number;
  getTeamLoadPercent: (teamMemberId: string, teamMember: TeamMember) => number;
}

const TeamLoadContext = createContext<TeamLoadContextType | undefined>(undefined);

export function TeamLoadProvider({ children }: { children: ReactNode }) {
  const [teamLoads, setTeamLoads] = useState<Map<string, TeamLoadUpdate[]>>(new Map());

  const updateTeamLoad = useCallback(
    (teamMemberId: string, projectId: string, hours: number, roleLabel?: string) => {
      setTeamLoads((prev) => {
        const newMap = new Map(prev);
        const loads = newMap.get(teamMemberId) || [];

        // Remove existing load for this project
        const filtered = loads.filter((l) => l.projectId !== projectId);

        // Add new load if hours > 0
        if (hours > 0) {
          filtered.push({ teamMemberId, projectId, additionalHours: hours, roleLabel });
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
    (teamMemberId: string): number => {
      const loads = teamLoads.get(teamMemberId) || [];
      return loads.reduce((sum, load) => sum + load.additionalHours, 0);
    },
    [teamLoads]
  );

  const getTeamLoadPercent = useCallback(
    (teamMemberId: string, teamMember: TeamMember): number => {
      const totalHours = getTeamTotalHours(teamMemberId);
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
