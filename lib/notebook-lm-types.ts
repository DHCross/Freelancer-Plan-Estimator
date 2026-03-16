export interface NotebookLMProject {
  project_id: string;
  name: string;
  hard_deadline: string | null;
  time_zone: string | null;
}

export interface NotebookLMMilestone {
  id: string;
  title: string;
  type: string;
  target_date: string | null;
  duration_days_est: number | null;
  depends_on: string[];
  owner: string | null;
  confidence: number;
  sources: NotebookLMSource[];
}

export interface NotebookLMTask {
  id: string;
  title: string;
  milestone_id: string | null;
  role: string;
  effort_hours_est: number | null;
  effort_hours_done: number | null;
  assignee: string | null;
  start_earliest: string | null;
  start_latest: string | null;
  dependencies: string[];
  cost_rate: { currency: string; amount: number } | null;
  fixed_cost: { currency: string; amount: number } | null;
  complexity?: "low" | "medium" | "high";
  confidence: number;
  sources: NotebookLMSource[];
}

export interface NotebookLMResource {
  name: string;
  role: string;
  available_hours_per_week: number | null;
  hourly_rate: { currency: string; amount: number } | null;
}

export interface NotebookLMFinancials {
  currency: string;
  budget_total: { currency: string; amount: number } | null;
  budget_used: { currency: string; amount: number } | null;
  budget_remaining: { currency: string; amount: number } | null;
  cost_breakdown: {
    writing: number;
    editing: number;
    layout: number;
    art: number;
    development: number;
    qa: number;
    licenses: number;
    printing: number;
    contingency: number;
  };
}

export interface NotebookLMSchedule {
  projected_cost: { currency: string; amount: number };
  project_start_date: string | null;
  project_end_date: string | null;
  critical_path: string[];
  slack_days: Record<string, number>;
  urgent?: boolean;
}

export interface NotebookLMCashflow {
  date: string;
  net_cash: { currency: string; amount: number };
}

export interface NotebookLMInvoice {
  id: string;
  due_date: string;
  percent_of_budget: number;
  amount: { currency: string; value: number };
}

export interface NotebookLMRiskContingency {
  contingency_percent: number;
  contingency_amount: number;
  high_risk_tasks: Array<{
    id: string;
    reason: string;
    mitigation: string;
  }>;
}

export interface NotebookLMRisk {
  id: string;
  description: string;
  likelihood: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  mitigation: string;
}

export interface NotebookLMAssumption {
  id: string;
  description: string;
  confidence: number;
}

export interface NotebookLMSource {
  path: string;
  lines: string;
  snippet: string;
}

export interface NotebookLMSecurityNote {
  issue: string;
  path: string;
  lines: string;
}

export interface NotebookLMMeta {
  overall_confidence: number;
  generated_at: string;
  urgent: boolean;
}

export interface NotebookLMExport {
  project: NotebookLMProject;
  milestones: NotebookLMMilestone[];
  tasks: NotebookLMTask[];
  resources: NotebookLMResource[];
  financials: NotebookLMFinancials;
  schedule: NotebookLMSchedule;
  cashflow?: NotebookLMCashflow[];
  invoices?: NotebookLMInvoice[];
  risk_contingency?: NotebookLMRiskContingency;
  risks?: NotebookLMRisk[];
  assumptions?: NotebookLMAssumption[];
  security_notes?: NotebookLMSecurityNote[] | string;
  questions?: string[];
  meta: NotebookLMMeta;
}
