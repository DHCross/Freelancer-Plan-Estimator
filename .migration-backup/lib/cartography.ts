import {
  CartographySummary,
  MapTicket,
  TeamMember,
} from "./types";
import { CARTOGRAPHY_DEFAULT } from "./constants";

interface CartographyEstimateOptions {
  teamRoster?: TeamMember[];
  globalCartographerRate?: number;
}

export function runCartographyEstimate(
  tickets: MapTicket[],
  options: CartographyEstimateOptions = {}
): CartographySummary {
  let totalMaps = 0;
  let totalCartographerHours = 0;
  let totalInternalSupportHours = 0;
  let totalCartographyCost = 0;
  let mapCriticalPathDays = 0;

  const { teamRoster = [], globalCartographerRate = CARTOGRAPHY_DEFAULT } = options;

  tickets.forEach((ticket) => {
    totalMaps++;

    // 1. Cartographer Hours
    const artistHours =
      ticket.baseDraftHours +
      ticket.baseRevisionHours * ticket.expectedRevisions;

    totalCartographerHours += artistHours;

    // 2. Internal Support Hours
    const internalHours =
      ticket.internalBriefingHours +
      ticket.internalReviewHoursPerPass * (1 + ticket.expectedRevisions) +
      ticket.integrationHours;

    totalInternalSupportHours += internalHours;

    // 3. Cost
    let cost = 0;
    if (ticket.flatMapFee !== null && ticket.flatMapFee !== undefined && ticket.flatMapFee > 0) {
      cost = ticket.flatMapFee;
    } else {
      let rate = ticket.contractorRate;

      // If no explicit rate on ticket, check if we have a roleId to lookup
      if (!rate && ticket.cartographerRoleId) {
        const member = teamRoster.find((m) => m.id === ticket.cartographerRoleId);
        if (member) {
          rate = member.hourlyRate;
        }
      }

      // Fallback to global default if still no rate
      if (!rate) {
        // If it's an external cartographer, use the passed in global rate (or default constant)
        // If it's internal, we might technically say "cost" is $0 or salary, but for budgeting
        // often we apply a rate. Let's assume we apply the rate if it's external.
        if (ticket.isExternalCartographer) {
            // Note: CARTOGRAPHY_DEFAULT in constants is likely a per-map avg, not hourly.
            // But here we are doing hours * rate.
            // Let's assume a reasonable default hourly rate for cartography if not specified.
            // Use the option passed in or fallback to a reasonable default (e.g. 50 if CARTOGRAPHY_DEFAULT is weird)
            // Ideally globalCartographerRate should be an hourly rate.
            rate = globalCartographerRate || 50;
        } else {
            // Internal cost might be tracked differently, but let's stick to rate * hours
            rate = 0;
        }
      }

      cost = artistHours * rate;
    }
    totalCartographyCost += cost;

    // 4. Duration (simplistic)
    // Assume a cartographer works ~5 hours a day on maps effectively?
    // This is for critical path estimation.
    const effectiveDailyHours = 5;
    const days = Math.ceil(artistHours / effectiveDailyHours);
    if (days > mapCriticalPathDays) {
      mapCriticalPathDays = days;
    }
  });

  return {
    totalMaps,
    totalCartographerHours,
    totalInternalSupportHours,
    totalCartographyCost,
    mapCriticalPathDays,
  };
}
