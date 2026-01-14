import { UnifiedProjectModel, UnifiedProjectState } from "./unified-project-model";
import type { NotebookLMExport, NotebookLMTask, NotebookLMResource } from "./notebook-lm-types";
import type { Project, TeamMember, TaskRate } from "./types";

export class DataIngestionService {
  /**
   * Transforms a raw NotebookLM JSON export into the internal UnifiedProjectState.
   */
  public static ingest(data: NotebookLMExport, _currentModel: UnifiedProjectModel): UnifiedProjectState {
    const project = DataIngestionService.mapProject(data);
    const team = DataIngestionService.mapTeam(data.resources);
    
    // In a real implementation, we would update the model state directly
    // based on the tasks and recalculated financials.
    
    return {
      teamConfig: {
        members: team,
        projectSize: data.tasks.length,
        targetTimeline: data.milestones.length * 7, // Rough estimate if days missing
        totalCost: data.financials.budget_total?.amount || 0,
        feasible: !data.schedule.urgent,
        coordinationOverhead: 0.15 // Default 15%
      },
      resourceValidation: [], // Would require recalculation logic
      projectScenario: {
        targetBudget: data.financials.budget_total?.amount || 0,
        targetTimeline: data.schedule.slack_days ? Object.keys(data.schedule.slack_days).length * 14 : 30,
        validatedBudget: data.schedule.projected_cost.amount,
        validatedTimeline: 0,
        bottlenecks: data.risk_contingency?.high_risk_tasks.map((t: { id: string }) => t.id) || [],
        feasible: !data.schedule.urgent,
        riskLevel: data.schedule.urgent ? "high" : "medium"
      },
      lastUpdated: new Date()
    };
  }

  private static mapProject(data: NotebookLMExport): Project {
    return {
      id: 999, // Temporary ID for injected project
      name: data.project.name,
      type: "TRPG Adventure",
      clientType: "Internal",
      targetWords: 50000, // Default assumption if missing
      assignedTo: "Dan Cross", // Default owner
      internalStatus: "Active",
      clientStatus: "In Progress",
      stakeholder: "Dan",
      launchWindow: data.project.hard_deadline || "2026-01-31",
      budgetType: "Fixed",
      dependency: null,
      revenuePotential: "Medium"
    };
  }

  private static mapTeam(resources: NotebookLMResource[]): TeamMember[] {
    return resources.map((r, index) => ({
      id: `imported_${index}`,
      name: r.name,
      role: r.role,
      hourlyRate: r.hourly_rate?.amount || 0,
      weeklyCapacity: r.available_hours_per_week || 40,
      draftSpeed: 500, // Default words/hour
      compileSpeed: 10, // Default pages/hour
      chaosBuffer: 1.2
    }));
  }
}
