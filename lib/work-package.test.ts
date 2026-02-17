import { computeSchedule, WorkPackage, computeWorkPackageHours } from "./work-package";
import { TeamMember } from "./types";

const mockTeamMembers: TeamMember[] = [
    {
        id: "u1",
        name: "User 1",
        role: "Writer",
        hourlyRate: 50,
        weeklyCapacity: 40,
        draftSpeed: 1000,
        compileSpeed: 1000,
        chaosBuffer: 0
    },
    {
        id: "u2",
        name: "User 2",
        role: "Editor",
        hourlyRate: 60,
        weeklyCapacity: 20, // Part time
        draftSpeed: 1000,
        compileSpeed: 1000,
        chaosBuffer: 0
    }
];

describe("Work Package Computation", () => {
    it("computes hours correctly for fixed scope", () => {
        const wp: WorkPackage = {
            id: "1",
            projectId: 1,
            title: "Task 1",
            phase: "Draft",
            scopeType: "fixed",
            scopeQuantity: 1,
            productivityRate: 1,
            estimatedHours: 10,
            requiredRole: "Writer",
            teamScope: "Internal",
            costRate: 50,
            dependencies: [],
            precedenceType: "FS",
            lag: 0
        };
        expect(computeWorkPackageHours(wp)).toBe(10);
    });

    it("computes hours correctly for calculated scope", () => {
        const wp: WorkPackage = {
            id: "1",
            projectId: 1,
            title: "Task 1",
            phase: "Draft",
            scopeType: "words",
            scopeQuantity: 1000,
            productivityRate: 100, // 100 words/hr
            estimatedHours: 0, // Should be ignored
            requiredRole: "Writer",
            teamScope: "Internal",
            costRate: 50,
            dependencies: [],
            precedenceType: "FS",
            lag: 0
        };
        expect(computeWorkPackageHours(wp)).toBe(10);
    });

    it("computes schedule with dependencies", () => {
        const wp1: WorkPackage = {
            id: "1",
            projectId: 1,
            title: "Task 1",
            phase: "Draft",
            scopeType: "fixed",
            scopeQuantity: 1,
            productivityRate: 1,
            estimatedHours: 8, // 1 day (8 hours / 8 hours capacity)
            requiredRole: "Writer",
            assignedPersonId: "u1",
            teamScope: "Internal",
            costRate: 50,
            dependencies: [],
            precedenceType: "FS",
            lag: 0
        };

        const wp2: WorkPackage = {
            id: "2",
            projectId: 1,
            title: "Task 2",
            phase: "Edit",
            scopeType: "fixed",
            scopeQuantity: 1,
            productivityRate: 1,
            estimatedHours: 4, // 1 day (4 hours / 4 hours capacity for u2)
            requiredRole: "Editor",
            assignedPersonId: "u2", // 20 hours/week -> 4 hours/day
            teamScope: "Internal",
            costRate: 60,
            dependencies: ["1"],
            precedenceType: "FS",
            lag: 0
        };

        const startDate = "2023-01-02"; // Monday
        const schedule = computeSchedule([wp1, wp2], mockTeamMembers, startDate);

        const s1 = schedule.get("1");
        const s2 = schedule.get("2");

        // Task 1: 8 hours. U1 capacity 40/5 = 8h/day. Duration = 1 day.
        // Start: Mon Jan 02. End: Mon Jan 02.
        expect(s1?.startDate).toBe("2023-01-02");
        expect(s1?.endDate).toBe("2023-01-02");
        expect(s1?.durationDays).toBe(1);

        // Task 2: 4 hours. U2 capacity 20/5 = 4h/day. Duration = 1 day.
        // Dependency on 1. Start after 1 finishes.
        // Start: Tue Jan 03. End: Tue Jan 03.
        expect(s2?.startDate).toBe("2023-01-03");
        expect(s2?.endDate).toBe("2023-01-03");
        expect(s2?.durationDays).toBe(1);
    });

     it("handles weekends in schedule", () => {
        const wp1: WorkPackage = {
            id: "1",
            projectId: 1,
            title: "Task 1",
            phase: "Draft",
            scopeType: "fixed",
            scopeQuantity: 1,
            productivityRate: 1,
            estimatedHours: 40, // 5 days for U1
            requiredRole: "Writer",
            assignedPersonId: "u1",
            teamScope: "Internal",
            costRate: 50,
            dependencies: [],
            precedenceType: "FS",
            lag: 0
        };

        const startDate = "2023-01-06"; // Friday
        const schedule = computeSchedule([wp1], mockTeamMembers, startDate);

        const s1 = schedule.get("1");

        // Duration 5 days.
        // Fri (1), Mon (2), Tue (3), Wed (4), Thu (5).
        // End Date should be Thu Jan 12.

        expect(s1?.startDate).toBe("2023-01-06");
        // Fri 6, Sat 7 (skip), Sun 8 (skip), Mon 9, Tue 10, Wed 11, Thu 12.
        expect(s1?.endDate).toBe("2023-01-12");
        expect(s1?.durationDays).toBe(5);
    });
});
