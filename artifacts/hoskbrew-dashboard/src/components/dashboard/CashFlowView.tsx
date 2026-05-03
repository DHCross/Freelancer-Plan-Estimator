import { useState, useMemo, useEffect } from "react";
import {
  Plus, Trash2, Edit2, Save, X, FileText, AlertTriangle, CheckCircle2,
  Clock, TrendingUp, PiggyBank, DollarSign, Calendar, Send, ExternalLink
} from "lucide-react";
import type { TeamMember, Project } from "@/lib/types";

type InvoiceStatus = "draft" | "sent" | "paid";

interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  projectName?: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  paidDate?: string;
  status: InvoiceStatus;
  notes?: string;
}

interface CashFlowSettings {
  taxRate: number;
  defaultNetDays: number;
}

const INVOICES_KEY = "forge_invoices";
const SETTINGS_KEY = "forge_cashflow_settings";

const DEFAULT_SETTINGS: CashFlowSettings = {
  taxRate: 25,
  defaultNetDays: 30,
};

function loadInvoices(): Invoice[] {
  try {
    const saved = localStorage.getItem(INVOICES_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
}

function loadSettings(): CashFlowSettings {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  } catch {}
  return DEFAULT_SETTINGS;
}

function fmtCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function todayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDaysISO(iso: string, days: number): string {
  const [y, m, day] = iso.split("-").map(Number);
  const d = new Date(y, (m || 1) - 1, (day || 1) + days);
  const yy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / (1000 * 60 * 60 * 24));
}

function isOverdue(inv: Invoice): boolean {
  return inv.status === "sent" && inv.dueDate < todayISO();
}

interface CashFlowViewProps {
  teamMembers: TeamMember[];
  projects: Project[];
}

export function CashFlowView({ teamMembers, projects }: CashFlowViewProps) {
  const [invoices, setInvoicesRaw] = useState<Invoice[]>(loadInvoices);
  const [settings, setSettingsRaw] = useState<CashFlowSettings>(loadSettings);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState<Partial<Invoice>>({});
  const [filter, setFilter] = useState<"all" | "outstanding" | "overdue" | "paid">("all");

  const setInvoices = (updater: Invoice[] | ((p: Invoice[]) => Invoice[])) => {
    setInvoicesRaw(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem(INVOICES_KEY, JSON.stringify(next));
      return next;
    });
  };

  const setSettings = (s: CashFlowSettings) => {
    setSettingsRaw(s);
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  };

  // Computed: outstanding, overdue, paid totals
  const stats = useMemo(() => {
    const outstanding = invoices.filter(i => i.status === "sent");
    const overdue = invoices.filter(isOverdue);
    const paidThisYear = invoices.filter(i => i.status === "paid" && i.paidDate && new Date(i.paidDate).getFullYear() === new Date().getFullYear());
    const draft = invoices.filter(i => i.status === "draft");

    const outstandingTotal = outstanding.reduce((s, i) => s + i.amount, 0);
    const overdueTotal = overdue.reduce((s, i) => s + i.amount, 0);
    const paidYTD = paidThisYear.reduce((s, i) => s + i.amount, 0);
    const draftTotal = draft.reduce((s, i) => s + i.amount, 0);
    const taxOwed = paidYTD * (settings.taxRate / 100);

    return { outstanding, overdue, paidThisYear, draft, outstandingTotal, overdueTotal, paidYTD, draftTotal, taxOwed };
  }, [invoices, settings]);

  // Cash flow forecast: 30/60/90 days
  const forecast = useMemo(() => {
    const today = todayISO();
    const day30 = addDaysISO(today, 30);
    const day60 = addDaysISO(today, 60);
    const day90 = addDaysISO(today, 90);

    const inWindow = (inv: Invoice, end: string) => inv.status === "sent" && inv.dueDate <= end;

    return {
      next30: stats.outstanding.filter(i => inWindow(i, day30)).reduce((s, i) => s + i.amount, 0),
      next60: stats.outstanding.filter(i => inWindow(i, day60)).reduce((s, i) => s + i.amount, 0),
      next90: stats.outstanding.filter(i => inWindow(i, day90)).reduce((s, i) => s + i.amount, 0),
    };
  }, [stats.outstanding]);

  const filteredInvoices = useMemo(() => {
    let list = invoices;
    if (filter === "outstanding") list = stats.outstanding;
    else if (filter === "overdue") list = stats.overdue;
    else if (filter === "paid") list = invoices.filter(i => i.status === "paid");
    return [...list].sort((a, b) => (b.issueDate || "").localeCompare(a.issueDate || ""));
  }, [invoices, filter, stats]);

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    const today = todayISO();
    const nextNum = `INV-${String(invoices.length + 1).padStart(4, "0")}`;
    setDraft({
      invoiceNumber: nextNum,
      amount: 0,
      issueDate: today,
      dueDate: addDaysISO(today, settings.defaultNetDays),
      status: "draft",
      clientId: teamMembers[0]?.id || "",
      clientName: teamMembers[0]?.name || "",
    });
  };

  const startEdit = (inv: Invoice) => {
    setEditingId(inv.id);
    setIsAdding(false);
    setDraft({ ...inv });
  };

  const cancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setDraft({});
  };

  const save = () => {
    if (!draft.invoiceNumber || !draft.clientId) return;
    const client = teamMembers.find(m => m.id === draft.clientId);
    const payload: Invoice = {
      id: editingId || `inv_${Date.now()}`,
      invoiceNumber: draft.invoiceNumber!,
      clientId: draft.clientId!,
      clientName: client?.name || draft.clientName || "Unknown",
      projectName: draft.projectName,
      amount: Number(draft.amount) || 0,
      issueDate: draft.issueDate || todayISO(),
      dueDate: draft.dueDate || addDaysISO(todayISO(), settings.defaultNetDays),
      paidDate: draft.status === "paid" ? (draft.paidDate || todayISO()) : undefined,
      status: (draft.status as InvoiceStatus) || "draft",
      notes: draft.notes,
    };
    if (isAdding) setInvoices(prev => [...prev, payload]);
    else setInvoices(prev => prev.map(i => i.id === editingId ? payload : i));
    cancel();
  };

  const remove = (id: string) => setInvoices(prev => prev.filter(i => i.id !== id));

  const markStatus = (id: string, status: InvoiceStatus) => {
    setInvoices(prev => prev.map(i => i.id === id ? {
      ...i,
      status,
      paidDate: status === "paid" ? (i.paidDate || todayISO()) : undefined,
    } : i));
  };

  const StatusBadge = ({ inv }: { inv: Invoice }) => {
    if (isOverdue(inv)) return <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">Overdue</span>;
    if (inv.status === "paid") return <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">Paid</span>;
    if (inv.status === "sent") return <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">Sent</span>;
    return <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">Draft</span>;
  };

  const InvoiceForm = () => (
    <div className="space-y-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Invoice #</label>
          <input className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.invoiceNumber || ""} onChange={e => setDraft(d => ({ ...d, invoiceNumber: e.target.value }))} />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">Client</label>
          <select className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.clientId || ""} onChange={e => {
            const c = teamMembers.find(m => m.id === e.target.value);
            setDraft(d => ({ ...d, clientId: e.target.value, clientName: c?.name }));
          }}>
            <option value="">Select client…</option>
            {teamMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Project (optional)</label>
          <select className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.projectName || ""} onChange={e => setDraft(d => ({ ...d, projectName: e.target.value || undefined }))}>
            <option value="">— None —</option>
            {projects.filter(p => !draft.clientId || p.assignedTo === draft.clientId).map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Amount ($)</label>
          <input type="number" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.amount || ""} onChange={e => setDraft(d => ({ ...d, amount: Number(e.target.value) }))} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Issue Date</label>
          <input type="date" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.issueDate || ""} onChange={e => setDraft(d => ({ ...d, issueDate: e.target.value }))} />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Due Date</label>
          <input type="date" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.dueDate || ""} onChange={e => setDraft(d => ({ ...d, dueDate: e.target.value }))} />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Status</label>
          <select className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.status || "draft"} onChange={e => setDraft(d => ({ ...d, status: e.target.value as InvoiceStatus }))}>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">Notes</label>
        <input className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.notes || ""} onChange={e => setDraft(d => ({ ...d, notes: e.target.value }))} placeholder="e.g. Deposit, milestone, deliverable" />
      </div>
      <div className="flex justify-end gap-2 pt-1">
        <button onClick={cancel} className="flex items-center gap-1 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-200 rounded-lg transition">
          <X className="w-3.5 h-3.5" /> Cancel
        </button>
        <button onClick={save} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-500 rounded-lg transition">
          <Save className="w-3.5 h-3.5" /> Save
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-100 p-2 rounded-lg"><DollarSign className="w-6 h-6 text-blue-600" /></div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Cash Flow & Invoices</h2>
            <p className="text-sm text-slate-600">Track invoices, forecast incoming cash, and stay ahead on taxes.</p>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-1.5 mb-1"><Clock className="w-3.5 h-3.5 text-blue-600" /><p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Outstanding</p></div>
          <p className="text-2xl font-bold text-slate-900">{fmtCurrency(stats.outstandingTotal)}</p>
          <p className="text-xs text-slate-500 mt-1">{stats.outstanding.length} unpaid invoices</p>
        </div>
        <div className={`border rounded-xl p-4 shadow-sm ${stats.overdueTotal > 0 ? "bg-red-50 border-red-200" : "bg-white border-slate-200"}`}>
          <div className="flex items-center gap-1.5 mb-1"><AlertTriangle className={`w-3.5 h-3.5 ${stats.overdueTotal > 0 ? "text-red-600" : "text-slate-400"}`} /><p className={`text-xs font-semibold uppercase tracking-wider ${stats.overdueTotal > 0 ? "text-red-700" : "text-slate-500"}`}>Overdue</p></div>
          <p className={`text-2xl font-bold ${stats.overdueTotal > 0 ? "text-red-900" : "text-slate-900"}`}>{fmtCurrency(stats.overdueTotal)}</p>
          <p className="text-xs text-slate-500 mt-1">{stats.overdue.length} past due date</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-1.5 mb-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Paid YTD</p></div>
          <p className="text-2xl font-bold text-emerald-900">{fmtCurrency(stats.paidYTD)}</p>
          <p className="text-xs text-emerald-600 mt-1">{stats.paidThisYear.length} invoices in {new Date().getFullYear()}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-1.5 mb-1"><PiggyBank className="w-3.5 h-3.5 text-amber-700" /><p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Tax Vault</p></div>
          <p className="text-2xl font-bold text-amber-900">{fmtCurrency(stats.taxOwed)}</p>
          <p className="text-xs text-amber-700 mt-1">Set aside {settings.taxRate}% of paid income</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cash Flow Forecast */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <h3 className="text-base font-semibold text-slate-800">Cash Flow Forecast</h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">Expected cash from sent invoices, by due date.</p>
          <div className="space-y-3">
            {[
              { label: "Next 30 days", value: forecast.next30, color: "bg-blue-500" },
              { label: "Next 60 days", value: forecast.next60, color: "bg-indigo-500" },
              { label: "Next 90 days", value: forecast.next90, color: "bg-violet-500" },
            ].map(row => (
              <div key={row.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-slate-700">{row.label}</span>
                  <span className="text-sm font-bold text-slate-900">{fmtCurrency(row.value)}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className={`h-full ${row.color} rounded-full transition-all`} style={{ width: `${forecast.next90 > 0 ? (row.value / forecast.next90) * 100 : 0}%` }} />
                </div>
              </div>
            ))}
            {forecast.next90 === 0 && (
              <p className="text-xs text-slate-400 italic pt-2">No outstanding invoices — add and send some to forecast cash.</p>
            )}
          </div>
        </div>

        {/* Tax Vault Settings */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="w-4 h-4 text-amber-700" />
            <h3 className="text-base font-semibold text-amber-900">Tax Set-Aside</h3>
          </div>
          <p className="text-xs text-amber-800 mb-4">Quarterly estimated taxes are real. Save a slice of every payment.</p>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-amber-800 mb-1">Tax rate (%)</label>
              <input
                type="number"
                min={0}
                max={50}
                value={settings.taxRate}
                onChange={e => setSettings({ ...settings, taxRate: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg text-sm bg-white"
              />
              <p className="text-[11px] text-amber-700 mt-1">Self-employed in the US: 25-30% is a typical buffer.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-amber-200">
              <p className="text-xs text-amber-700 mb-1">Reserve from {fmtCurrency(stats.paidYTD)} paid YTD:</p>
              <p className="text-2xl font-bold text-amber-900">{fmtCurrency(stats.taxOwed)}</p>
              <p className="text-xs text-amber-700 mt-1">Take-home: {fmtCurrency(stats.paidYTD - stats.taxOwed)}</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-amber-800 mb-1">Default Net days</label>
              <input
                type="number"
                value={settings.defaultNetDays}
                onChange={e => setSettings({ ...settings, defaultNetDays: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg text-sm bg-white"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white">
          <h3 className="text-base font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button onClick={startAdd} className="w-full flex items-center gap-2 px-3 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition">
              <Plus className="w-4 h-4" /> New Invoice
            </button>
            <button onClick={() => setFilter("overdue")} className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition">
              <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-400" /> View overdue</span>
              <span className="text-red-400 font-semibold">{stats.overdue.length}</span>
            </button>
            <button onClick={() => setFilter("outstanding")} className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> All outstanding</span>
              <span className="text-blue-400 font-semibold">{stats.outstanding.length}</span>
            </button>
            <button onClick={() => setFilter("all")} className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition">
              <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-slate-400" /> View all</span>
              <span className="text-slate-400 font-semibold">{invoices.length}</span>
            </button>
          </div>
          {stats.draftTotal > 0 && (
            <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-700">
              {stats.draft.length} draft{stats.draft.length === 1 ? "" : "s"} totaling {fmtCurrency(stats.draftTotal)} — ready to send
            </p>
          )}
        </div>
      </div>

      {/* Invoice List */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-800">Invoices</h3>
            <div className="flex gap-1 mt-2">
              {(["all", "outstanding", "overdue", "paid"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs px-2.5 py-1 rounded-full transition capitalize ${filter === f ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <button onClick={startAdd} className="flex items-center gap-1 text-sm px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-500 rounded-lg transition">
            <Plus className="w-3.5 h-3.5" /> New Invoice
          </button>
        </div>

        {isAdding && <div className="p-4 border-b border-slate-100"><InvoiceForm /></div>}

        {filteredInvoices.length === 0 ? (
          <div className="p-10 text-center text-slate-400">
            <FileText className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="text-sm">{filter === "all" ? "No invoices yet. Click New Invoice to start tracking." : `No ${filter} invoices.`}</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredInvoices.map(inv => (
              <div key={inv.id}>
                {editingId === inv.id ? (
                  <div className="p-4"><InvoiceForm /></div>
                ) : (
                  <div className="px-5 py-3 hover:bg-slate-50 transition group">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs text-slate-400">{inv.invoiceNumber}</span>
                          <span className="font-medium text-slate-900 text-sm">{inv.clientName}</span>
                          <StatusBadge inv={inv} />
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                          {inv.projectName && <span>{inv.projectName}</span>}
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Due {inv.dueDate}</span>
                          {isOverdue(inv) && <span className="text-red-600 font-medium">{Math.abs(daysBetween(inv.dueDate, todayISO()))} days late</span>}
                          {inv.status === "paid" && inv.paidDate && <span className="text-emerald-600">Paid {inv.paidDate}</span>}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-base font-bold text-slate-900 font-mono">{fmtCurrency(inv.amount)}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition">
                        {inv.status === "draft" && (
                          <button onClick={() => markStatus(inv.id, "sent")} className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-500" title="Mark as sent" aria-label={`Mark invoice ${inv.invoiceNumber} as sent`}>
                            <Send className="w-3 h-3" />
                          </button>
                        )}
                        {inv.status === "sent" && (
                          <button onClick={() => markStatus(inv.id, "paid")} className="text-xs px-2 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-500" title="Mark as paid" aria-label={`Mark invoice ${inv.invoiceNumber} as paid`}>
                            <CheckCircle2 className="w-3 h-3" />
                          </button>
                        )}
                        <button onClick={() => startEdit(inv)} className="text-slate-400 hover:text-slate-700 p-1" aria-label={`Edit invoice ${inv.invoiceNumber}`} title="Edit"><Edit2 className="w-3.5 h-3.5" /></button>
                        <button onClick={() => remove(inv.id)} className="text-slate-400 hover:text-red-500 p-1" aria-label={`Delete invoice ${inv.invoiceNumber}`} title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
