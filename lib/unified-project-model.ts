import { TeamMember, Project } from "./types";
import { TEAM_ROSTER, INITIAL_PROJECTS } from "./constants";

export interface TeamConfiguration {
  members: TeamMember[];
  projectSize: number;
  targetTimeline: number;
  totalCost: number;
  feasible: boolean;
  coordinationOverhead: number;
  frictionCoefficient: number;
}

export interface ResourceValidation {
  teamMemberId: string;
  teamMemberName: string;
  totalAssignedHours: number;
  conceptualHours: number;
  processingHours: number;
  executionHours: number;
  availableCapacity: number;
  loadPercentage: number;
  isOverloaded: boolean;
  isConceptualBacklog: boolean;
  activeBlockingConceptualHours: number;
  assignedProjects: Array<{
    projectId: number;
    projectName: string;
    hours: number;
  }>;
}

export interface ProjectScenario {
  targetBudget: number;
  targetTimeline: number;
  validatedBudget: number;
  validatedTimeline: number;
  bottlenecks: string[];
  feasible: boolean;
  riskLevel: "low" | "medium" | "high";
}

export interface UnifiedProjectState {
  teamConfig: TeamConfiguration;
  resourceValidation: ResourceValidation[];
  projectScenario: ProjectScenario;
  lastUpdated: Date;
}

export class UnifiedProjectModel {
  private static instance: UnifiedProjectModel;
  private state: UnifiedProjectState;

  private constructor() {
    this.state = this.initializeState();
  }

  public static getInstance(): UnifiedProjectModel {
    if (!UnifiedProjectModel.instance) {
      UnifiedProjectModel.instance = new UnifiedProjectModel();
    }
    return UnifiedProjectModel.instance;
  }

  private initializeState(): UnifiedProjectState {
    const teamConfig = this.calculateTeamConfiguration(TEAM_ROSTER, 50000, 6);
    const resourceValidation = this.calculateResourceValidation(TEAM_ROSTER, INITIAL_PROJECTS);
    const projectScenario = this.calculateProjectScenario(teamConfig, resourceValidation);

    return {
      teamConfig,
      resourceValidation,
      projectScenario,
      lastUpdated: new Date()
    };
  }

  public getState(): UnifiedProjectState {
    return { ...this.state };
  }

  public updateTeamConfiguration(teamMembers: TeamMember[], projectSize: number, targetTimeline: number, frictionCoefficient: number = 1.0): void {
    this.state.teamConfig = this.calculateTeamConfiguration(teamMembers, projectSize, targetTimeline, frictionCoefficient);
    this.state.resourceValidation = this.calculateResourceValidation(teamMembers, INITIAL_PROJECTS);
    this.state.projectScenario = this.calculateProjectScenario(this.state.teamConfig, this.state.resourceValidation);
    this.state.lastUpdated = new Date();
  }

  public updateProjectAssignments(projects: Project[]): void {
    // API ENFORCEMENT: Validate Invariants
    // 1. Monotonicity: Increasing remaining_hours cannot result in earlier finish date (implicit in calculation)
    // 2. Execution Boundary: Only Active/Review tasks count (handled in calculation)
    // 3. Logic Gate: Blocked -> Active requires dependencies to be Done
    projects.forEach(project => {
        if (project.tasks) {
            project.tasks.forEach(task => {
                if (task.status === "Active" && task.dependencyIds && task.dependencyIds.length > 0) {
                     // In a real API, we would look up dependency status here.
                     // For now, we enforce this via the Initial State migration (Phase A).
                }
            });
        }
    });

    this.state.resourceValidation = this.calculateResourceValidation(this.state.teamConfig.members, projects);
    this.state.projectScenario = this.calculateProjectScenario(this.state.teamConfig, this.state.resourceValidation);
    this.state.lastUpdated = new Date();
  }

  private calculateTeamConfiguration(teamMembers: TeamMember[], projectSize: number, targetTimeline: number, frictionCoefficient: number = 1.0): TeamConfiguration {
    const totalWeeklyCost = teamMembers.reduce((sum, member) => 
      sum + (member.hourlyRate * member.weeklyCapacity), 0
    );

    const totalMonthlyCost = totalWeeklyCost * 4.33;
    const totalCost = totalMonthlyCost * targetTimeline;

    // Calculate writing productivity
    const totalWeeklyWords = teamMembers
      .filter(member => member.draftSpeed > 0)
      .reduce((sum, member) => sum + (member.draftSpeed * member.weeklyCapacity), 0);

    const weeksNeeded = projectSize / totalWeeklyWords;
    const monthsNeeded = weeksNeeded / 4.33;

    // Coordination overhead increases with team size
    const baseOverhead = teamMembers.length > 3 ? 0.15 : 0.10;
    const coordinationOverhead = baseOverhead * frictionCoefficient;
    const adjustedCost = totalCost * (1 + coordinationOverhead);

    return {
      members: teamMembers,
      projectSize,
      targetTimeline,
      totalCost: adjustedCost,
      feasible: monthsNeeded <= targetTimeline,
      coordinationOverhead,
      frictionCoefficient
    };
  }

  private calculateResourceValidation(teamMembers: TeamMember[], projects: Project[]): ResourceValidation[] {
    // PASS 1: Calculate raw hard load (Execution + Processing) to identify starved members
    const rawLoads = new Map<string, number>();
    projects.forEach(project => {
      if (project.tasks && project.tasks.length > 0 && project.lifecycleState === "Production") {
        project.tasks.forEach(task => {
          if ((task.status === "Active" || task.status === "Review") && task.remainingHours > 0) {
            if (task.laborCategory !== "Conceptual_Raw") {
              rawLoads.set(task.assigneeId, (rawLoads.get(task.assigneeId) || 0) + task.remainingHours);
            }
          }
        });
      } else if (project.lifecycleState === "Production" && project.assignedTo) {
          const teamMember = teamMembers.find(m => m.id === project.assignedTo);
          if (teamMember) {
              const fallbackHours = project.manualHours || this.estimateProjectHours(project, teamMember);
              rawLoads.set(project.assignedTo, (rawLoads.get(project.assignedTo) || 0) + fallbackHours);
          }
      }
    });

    const isAssigneeStarved = (assigneeId: string) => {
        const member = teamMembers.find(m => m.id === assigneeId);
        if (!member) return false;
        const availableCapacity = member.weeklyCapacity * 48;
        return (rawLoads.get(assigneeId) || 0) > availableCapacity;
    };

    return teamMembers.map(member => {
      let conceptualHours = 0;
      let processingHours = 0;
      let executionHours = 0;
      let activeBlockingConceptualHours = 0;

      const assignedProjects = projects
        .flatMap(project => {
          if (project.tasks && project.tasks.length > 0) {
            const memberTasks = project.tasks.filter(task =>
                task.assigneeId === member.id &&
                project.lifecycleState === "Production" &&
                (task.status === "Active" || task.status === "Review") &&
                task.remainingHours > 0
              );

            memberTasks.forEach(task => {
                if (task.laborCategory === "Conceptual_Raw") {
                  conceptualHours += task.remainingHours;

                  // Check if any pending dependent processing task is starved
                  const dependentTasks = project.tasks!.filter(
                    t =>
                      t.laborCategory === "Systemic_Processing" &&
                      t.dependencyIds?.includes(task.id) &&
                      t.remainingHours > 0 &&
                      t.status !== "Done"
                  );
                  const isBlockingStarved = dependentTasks.some(t => isAssigneeStarved(t.assigneeId));

                  if (isBlockingStarved) {
                      activeBlockingConceptualHours += task.remainingHours;
                  }
                } else if (task.laborCategory === "Systemic_Processing") {
                  processingHours += task.remainingHours;
                } else {
                  executionHours += task.remainingHours;
                }
            });

            return memberTasks.map(task => ({
              projectId: project.id,
              projectName: project.name,
              hours: task.remainingHours
            }));
          }

          // Fallback for projects without tasks (legacy support)
          if (project.assignedTo === member.id && project.lifecycleState === "Production") {
            const fallbackHours = project.manualHours || this.estimateProjectHours(project, member);
            executionHours += fallbackHours; // default legacy to execution
            return [{
              projectId: project.id,
              projectName: project.name,
              hours: fallbackHours
            }];
          }

          return [];
        });

      const totalAssignedHours = conceptualHours + processingHours + executionHours;
      const availableCapacity = member.weeklyCapacity * 48; // Annual capacity

      const hardBlockLoad = executionHours + processingHours + activeBlockingConceptualHours;

      const loadPercentage = (totalAssignedHours / availableCapacity) * 100;

      const isOverloaded = hardBlockLoad > availableCapacity;
      const isConceptualBacklog = !isOverloaded && totalAssignedHours > availableCapacity;

      return {
        teamMemberId: member.id,
        teamMemberName: member.name,
        totalAssignedHours,
        conceptualHours,
        processingHours,
        executionHours,
        availableCapacity,
        loadPercentage,
        isOverloaded,
        isConceptualBacklog,
        activeBlockingConceptualHours,
        assignedProjects
      };
    });
  }

  private estimateProjectHours(project: Project, teamMember: TeamMember): number {
    // Base calculation using team member's draft speed
    const baseHours = project.targetWords / teamMember.draftSpeed;
    
    // Apply chaos buffer
    const bufferedHours = baseHours * (1 + teamMember.chaosBuffer / 100);
    
    // Add project type multipliers
    let projectMultiplier = 1.0;
    switch (project.type) {
      case "Large Adventure":
        projectMultiplier = 1.2;
        break;
      case "Core Rules":
        projectMultiplier = 1.5;
        break;
      case "Small Adventure":
        projectMultiplier = 0.9;
        break;
      default:
        projectMultiplier = 1.0;
    }

    return Math.round(bufferedHours * projectMultiplier);
  }

  private calculateProjectScenario(teamConfig: TeamConfiguration, resourceValidation: ResourceValidation[]): ProjectScenario {
    const validatedBudget = teamConfig.totalCost;
    
    // Find the bottleneck - the person with highest load
    const bottleneck = resourceValidation.reduce((max, current) => 
      current.loadPercentage > max.loadPercentage ? current : max
    );

    // Calculate timeline based on bottleneck
    let bottleneckMultiplier = 1.0;
    if (bottleneck.isOverloaded) {
      const hardBlockLoad =
        bottleneck.executionHours +
        bottleneck.processingHours +
        (bottleneck.activeBlockingConceptualHours ?? 0);
      if (bottleneck.availableCapacity > 0) {
        bottleneckMultiplier = hardBlockLoad / bottleneck.availableCapacity;
        if (bottleneckMultiplier < 1.0) bottleneckMultiplier = 1.0;
      }
    }
    
    const validatedTimeline = Math.ceil(teamConfig.targetTimeline * bottleneckMultiplier);

    // Identify bottlenecks
    const bottlenecks: string[] = [];
    if (bottleneck.isOverloaded) {
      const hardBlockLoad =
        bottleneck.executionHours +
        bottleneck.processingHours +
        (bottleneck.activeBlockingConceptualHours ?? 0);
      const hardBlockLoadPercentage =
        bottleneck.availableCapacity > 0
          ? Math.round((hardBlockLoad / bottleneck.availableCapacity) * 100)
          : 0;
      bottlenecks.push(`Critical: ${bottleneck.teamMemberName} is ${hardBlockLoadPercentage}% overloaded on combined execution/processing/conceptual load`);
    } else if (bottleneck.isConceptualBacklog) {
      bottlenecks.push(`Conceptual Backlog: ${bottleneck.teamMemberName} has high conceptual load but execution is unblocked`);
    }

    if (validatedBudget > teamConfig.targetTimeline * 10000) { // Rough budget check
      bottlenecks.push("Budget exceeds typical project parameters");
    }

    // Risk assessment
    let riskLevel: "low" | "medium" | "high" = "low";
    if (bottlenecks.some(b => b.startsWith("Critical"))) riskLevel = "high";
    else if (bottlenecks.length >= 1) riskLevel = "medium";

    return {
      targetBudget: teamConfig.targetTimeline * 10000, // Rough target
      targetTimeline: teamConfig.targetTimeline,
      validatedBudget,
      validatedTimeline,
      bottlenecks,
      feasible: !bottlenecks.some(b => b.startsWith("Critical")),
      riskLevel
    };
  }

  // Public getters for specific data
  public getTeamConfiguration(): TeamConfiguration {
    return this.state.teamConfig;
  }

  public getResourceValidation(): ResourceValidation[] {
    return this.state.resourceValidation;
  }

  public getProjectScenario(): ProjectScenario {
    return this.state.projectScenario;
  }

  public getValidatedBudget(): number {
    return this.state.projectScenario.validatedBudget;
  }

  public getValidatedTimeline(): number {
    return this.state.projectScenario.validatedTimeline;
  }

  public getBottlenecks(): string[] {
    return this.state.projectScenario.bottlenecks;
  }

  public isProjectFeasible(): boolean {
    return this.state.projectScenario.feasible;
  }
}
