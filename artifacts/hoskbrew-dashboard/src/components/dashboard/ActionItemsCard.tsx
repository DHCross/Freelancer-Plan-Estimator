import { useMemo } from "react";
import { AlertTriangle, Calendar, Clock, ChevronRight, Bell, CheckCircle2 } from "lucide-react";
import type { DisplayProject } from "@/lib/types";

interface ActionItem {
  id: string;
  severity: "critical" | "warning" | "info";
  icon: typeof AlertTriangle;
  title: string;
  detail: string;
  action: { label: string; tab: string; subTab?: string };
}

interface ActionItemsCardProps {
  projects: DisplayProject[];
  onNavigate?: (tab: string, subTab?: string) => void;
}

function todayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

function daysSince(iso: string): number {
  return Math.round((parseLocalDate(todayISO()).getTime() - parseLocalDate(iso).getTime()) / (1000 * 60 * 60 * 24));
}

function daysUntil(iso: string): number {
  return Math.round((parseLocalDate(iso).getTime() - parseLocalDate(todayISO()).getTime()) / (1000 * 60 * 60 * 24));
}

interface InvoiceLite { id: string; invoiceNumber: string; clientName: string; amount: number; dueDate: string; status: string; }
interface LeadLite { id: string; clientName: string; status: string; lastContactDate: string; nextAction?: string; nextActionDate?: string; }

export function ActionItemsCard({ projects, onNavigate }: ActionItemsCardProps) {
  const items = useMemo<ActionItem[]>(() => {
    const out: ActionItem[] = [];

    // Overdue invoices (from forge_invoices)
    try {
      const raw = localStorage.getItem("forge_invoices");
      if (raw) {
        const invoices: InvoiceLite[] = JSON.parse(raw);
        const overdue = invoices.filter(i => i.status === "sent" && i.dueDate < todayISO());
        if (overdue.length > 0) {
          const total = overdue.reduce((s, i) => s + i.amount, 0);
          out.push({
            id: "overdue-invoices",
            severity: "critical",
            icon: AlertTriangle,
            title: `${overdue.length} overdue invoice${overdue.length === 1 ? "" : "s"}`,
            detail: `$${total.toLocaleString()} past due. Send reminders to ${[...new Set(overdue.map(i => i.clientName))].slice(0, 2).join(", ")}${overdue.length > 2 ? "…" : ""}.`,
            action: { label: "View invoices", tab: "finance", subTab: "cash-flow" },
          });
        }
      }
    } catch {}

    // Stale leads (from forge_leads)
    try {
      const raw = localStorage.getItem("forge_leads");
      if (raw) {
        const leads: LeadLite[] = JSON.parse(raw);
        const stale = leads.filter(l => l.status !== "won" && l.status !== "lost" && daysSince(l.lastContactDate) > 14);
        if (stale.length > 0) {
          out.push({
            id: "stale-leads",
            severity: "warning",
            icon: Clock,
            title: `${stale.length} stale lead${stale.length === 1 ? "" : "s"}`,
            detail: `${stale.slice(0, 2).map(l => l.clientName).join(", ")}${stale.length > 2 ? "…" : ""} haven't heard from you in 14+ days.`,
            action: { label: "Open pipeline", tab: "team", subTab: "pipeline" },
          });
        }

        // Next actions due today/overdue
        const dueActions = leads.filter(l => l.nextActionDate && l.nextAction && l.nextActionDate <= todayISO() && l.status !== "won" && l.status !== "lost");
        if (dueActions.length > 0) {
          out.push({
            id: "lead-actions",
            severity: "warning",
            icon: Bell,
            title: `${dueActions.length} follow-up${dueActions.length === 1 ? "" : "s"} due`,
            detail: dueActions[0].nextAction ? `"${dueActions[0].nextAction}" for ${dueActions[0].clientName}${dueActions.length > 1 ? ` and ${dueActions.length - 1} more` : ""}` : "Lead actions due today.",
            action: { label: "Take action", tab: "team", subTab: "pipeline" },
          });
        }
      }
    } catch {}

    // Upcoming deadlines (next 7 days)
    const upcoming = projects
      .filter(p => p.targetDate && p.lifecycleState === "Production")
      .filter(p => {
        const days = daysUntil(p.targetDate!);
        return days >= 0 && days <= 7;
      })
      .sort((a, b) => new Date(a.targetDate!).getTime() - new Date(b.targetDate!).getTime());

    if (upcoming.length > 0) {
      out.push({
        id: "deadlines-week",
        severity: upcoming.some(p => daysUntil(p.targetDate!) <= 2) ? "critical" : "warning",
        icon: Calendar,
        title: `${upcoming.length} deadline${upcoming.length === 1 ? "" : "s"} this week`,
        detail: `${upcoming[0].name} is due in ${daysUntil(upcoming[0].targetDate!)} day${daysUntil(upcoming[0].targetDate!) === 1 ? "" : "s"}${upcoming.length > 1 ? `, plus ${upcoming.length - 1} more` : ""}.`,
        action: { label: "View timeline", tab: "planning", subTab: "products" },
      });
    }

    return out;
  }, [projects]);

  if (items.length === 0) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center gap-3">
        <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="font-semibold text-emerald-900">You're all clear.</p>
          <p className="text-sm text-emerald-700">No overdue invoices, stale leads, or deadlines this week. Keep going.</p>
        </div>
      </div>
    );
  }

  const severityStyles = {
    critical: { bg: "bg-red-50", border: "border-red-200", icon: "text-red-600", iconBg: "bg-red-100" },
    warning: { bg: "bg-amber-50", border: "border-amber-200", icon: "text-amber-600", iconBg: "bg-amber-100" },
    info: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", iconBg: "bg-blue-100" },
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
        <Bell className="w-4 h-4 text-slate-600" />
        <h3 className="font-semibold text-slate-900">Needs Your Attention</h3>
        <span className="text-xs text-slate-400 ml-auto">{items.length} item{items.length === 1 ? "" : "s"}</span>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map(item => {
          const Icon = item.icon;
          const s = severityStyles[item.severity];
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.action.tab, item.action.subTab)}
              className={`w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-slate-50 transition group`}
            >
              <div className={`${s.iconBg} p-2 rounded-lg shrink-0`}>
                <Icon className={`w-4 h-4 ${s.icon}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-600 truncate">{item.detail}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-slate-900 shrink-0">
                {item.action.label}
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
