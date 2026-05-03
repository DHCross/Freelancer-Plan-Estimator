import { useState, useMemo } from "react";
import {
  Plus, Trash2, Edit2, Save, X, Target, TrendingUp, AlertCircle,
  Trophy, XCircle, Phone, Mail, Calendar, ArrowRight, ChevronRight
} from "lucide-react";

type LeadStatus = "lead" | "pitched" | "negotiating" | "won" | "lost";

interface Lead {
  id: string;
  clientName: string;
  contactName?: string;
  contactEmail?: string;
  description: string;
  estimatedValue: number;
  probability: number;
  status: LeadStatus;
  expectedCloseDate?: string;
  lastContactDate: string;
  nextActionDate?: string;
  nextAction?: string;
  source?: string;
  notes?: string;
}

const STORAGE_KEY = "forge_leads";

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string; border: string; defaultProb: number }> = {
  lead: { label: "Lead", color: "text-slate-700", bg: "bg-slate-100", border: "border-slate-300", defaultProb: 10 },
  pitched: { label: "Pitched", color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-300", defaultProb: 35 },
  negotiating: { label: "Negotiating", color: "text-amber-700", bg: "bg-amber-100", border: "border-amber-300", defaultProb: 65 },
  won: { label: "Won", color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-300", defaultProb: 100 },
  lost: { label: "Lost", color: "text-slate-500", bg: "bg-slate-100", border: "border-slate-300", defaultProb: 0 },
};

const SOURCE_PRESETS = ["Referral", "Cold outreach", "Past client", "Inbound", "Crowdfunding update", "Discord/community", "Conference", "Portfolio", "Other"];

function loadLeads(): Lead[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
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

function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

function daysSince(iso: string): number {
  return Math.round((parseLocalDate(todayISO()).getTime() - parseLocalDate(iso).getTime()) / (1000 * 60 * 60 * 24));
}

function isStale(lead: Lead): boolean {
  if (lead.status === "won" || lead.status === "lost") return false;
  return daysSince(lead.lastContactDate) > 14;
}

export function PipelineView() {
  const [leads, setLeadsRaw] = useState<Lead[]>(loadLeads);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState<Partial<Lead>>({});
  const [view, setView] = useState<"kanban" | "list">("kanban");

  const setLeads = (updater: Lead[] | ((p: Lead[]) => Lead[])) => {
    setLeadsRaw(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const stats = useMemo(() => {
    const active = leads.filter(l => l.status !== "won" && l.status !== "lost");
    const won = leads.filter(l => l.status === "won");
    const stale = leads.filter(isStale);
    const pipelineValue = active.reduce((s, l) => s + l.estimatedValue, 0);
    const weightedValue = active.reduce((s, l) => s + (l.estimatedValue * l.probability / 100), 0);
    const wonValue = won.reduce((s, l) => s + l.estimatedValue, 0);
    const winRate = (won.length + leads.filter(l => l.status === "lost").length) > 0
      ? (won.length / (won.length + leads.filter(l => l.status === "lost").length)) * 100
      : 0;
    return { active, won, stale, pipelineValue, weightedValue, wonValue, winRate };
  }, [leads]);

  const byStatus = useMemo(() => {
    const map: Record<LeadStatus, Lead[]> = { lead: [], pitched: [], negotiating: [], won: [], lost: [] };
    leads.forEach(l => map[l.status].push(l));
    return map;
  }, [leads]);

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setDraft({
      clientName: "",
      description: "",
      estimatedValue: 0,
      probability: 10,
      status: "lead",
      lastContactDate: todayISO(),
    });
  };

  const startEdit = (lead: Lead) => {
    setEditingId(lead.id);
    setIsAdding(false);
    setDraft({ ...lead });
  };

  const cancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setDraft({});
  };

  const save = () => {
    if (!draft.clientName?.trim()) return;
    const payload: Lead = {
      id: editingId || `lead_${Date.now()}`,
      clientName: draft.clientName!,
      contactName: draft.contactName,
      contactEmail: draft.contactEmail,
      description: draft.description || "",
      estimatedValue: Number(draft.estimatedValue) || 0,
      probability: Number(draft.probability) || 10,
      status: (draft.status as LeadStatus) || "lead",
      expectedCloseDate: draft.expectedCloseDate,
      lastContactDate: draft.lastContactDate || todayISO(),
      nextActionDate: draft.nextActionDate,
      nextAction: draft.nextAction,
      source: draft.source,
      notes: draft.notes,
    };
    if (isAdding) setLeads(prev => [...prev, payload]);
    else setLeads(prev => prev.map(l => l.id === editingId ? payload : l));
    cancel();
  };

  const remove = (id: string) => setLeads(prev => prev.filter(l => l.id !== id));

  const advanceStatus = (id: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? {
      ...l,
      status,
      probability: STATUS_CONFIG[status].defaultProb,
      lastContactDate: todayISO(),
    } : l));
  };

  const LeadForm = () => (
    <div className="space-y-3 p-4 bg-violet-50 border border-violet-200 rounded-lg">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Client / Company *</label>
          <input className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.clientName || ""} onChange={e => setDraft(d => ({ ...d, clientName: e.target.value }))} placeholder="Ironforge Games" autoFocus />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Contact name</label>
          <input className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.contactName || ""} onChange={e => setDraft(d => ({ ...d, contactName: e.target.value }))} placeholder="Marcus Reid" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Contact email</label>
          <input type="email" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.contactEmail || ""} onChange={e => setDraft(d => ({ ...d, contactEmail: e.target.value }))} placeholder="contact@…" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Source</label>
          <select className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.source || ""} onChange={e => setDraft(d => ({ ...d, source: e.target.value }))}>
            <option value="">— pick one —</option>
            {SOURCE_PRESETS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">Project description</label>
        <textarea className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" rows={2} value={draft.description || ""} onChange={e => setDraft(d => ({ ...d, description: e.target.value }))} placeholder="50k word adventure module, full art package…" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Estimated value ($)</label>
          <input type="number" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.estimatedValue || ""} onChange={e => setDraft(d => ({ ...d, estimatedValue: Number(e.target.value) }))} />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Win probability (%)</label>
          <input type="number" min={0} max={100} className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.probability ?? 10} onChange={e => setDraft(d => ({ ...d, probability: Number(e.target.value) }))} />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Status</label>
          <select className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.status || "lead"} onChange={e => {
            const newStatus = e.target.value as LeadStatus;
            setDraft(d => ({ ...d, status: newStatus, probability: STATUS_CONFIG[newStatus].defaultProb }));
          }}>
            {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map(s => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Last contact</label>
          <input type="date" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.lastContactDate || todayISO()} onChange={e => setDraft(d => ({ ...d, lastContactDate: e.target.value }))} />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Expected close</label>
          <input type="date" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.expectedCloseDate || ""} onChange={e => setDraft(d => ({ ...d, expectedCloseDate: e.target.value }))} />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Next action date</label>
          <input type="date" className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.nextActionDate || ""} onChange={e => setDraft(d => ({ ...d, nextActionDate: e.target.value }))} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">Next action</label>
        <input className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" value={draft.nextAction || ""} onChange={e => setDraft(d => ({ ...d, nextAction: e.target.value }))} placeholder="Send follow-up email, share rate sheet, etc." />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">Notes</label>
        <textarea className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-sm" rows={2} value={draft.notes || ""} onChange={e => setDraft(d => ({ ...d, notes: e.target.value }))} placeholder="Conversation history, scope, budget hints…" />
      </div>
      <div className="flex justify-end gap-2 pt-1">
        <button onClick={cancel} className="flex items-center gap-1 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-200 rounded-lg transition">
          <X className="w-3.5 h-3.5" /> Cancel
        </button>
        <button onClick={save} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-violet-600 text-white hover:bg-violet-500 rounded-lg transition">
          <Save className="w-3.5 h-3.5" /> Save
        </button>
      </div>
    </div>
  );

  const LeadCard = ({ lead, compact = false }: { lead: Lead; compact?: boolean }) => {
    const cfg = STATUS_CONFIG[lead.status];
    const stale = isStale(lead);
    return (
      <div className={`bg-white border rounded-lg p-3 hover:shadow-md transition group ${stale ? "border-amber-300" : "border-slate-200"}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-sm text-slate-900 truncate">{lead.clientName}</span>
              {stale && <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium" title={`No contact in ${daysSince(lead.lastContactDate)} days`}>Stale</span>}
            </div>
            {lead.contactName && <p className="text-xs text-slate-500 truncate">{lead.contactName}</p>}
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0">
            <button onClick={() => startEdit(lead)} className="text-slate-400 hover:text-slate-700 p-0.5" aria-label={`Edit lead ${lead.clientName}`} title="Edit"><Edit2 className="w-3 h-3" /></button>
            <button onClick={() => remove(lead.id)} className="text-slate-400 hover:text-red-500 p-0.5" aria-label={`Delete lead ${lead.clientName}`} title="Delete"><Trash2 className="w-3 h-3" /></button>
          </div>
        </div>
        {lead.description && !compact && <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">{lead.description}</p>}
        <div className="flex items-center justify-between mt-2 text-xs">
          <span className="font-mono font-bold text-slate-900">{fmtCurrency(lead.estimatedValue)}</span>
          <span className={`px-1.5 py-0.5 rounded ${cfg.bg} ${cfg.color} font-medium`}>{lead.probability}%</span>
        </div>
        {lead.nextAction && (
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 truncate">
              <ArrowRight className="w-3 h-3 inline mr-1 -mt-0.5" />{lead.nextAction}
              {lead.nextActionDate && <span className="text-slate-400 ml-1">· {lead.nextActionDate}</span>}
            </p>
          </div>
        )}
        {lead.status !== "won" && lead.status !== "lost" && (
          <div className="flex gap-1 mt-2 pt-2 border-t border-slate-100">
            {(["lead", "pitched", "negotiating"] as LeadStatus[]).map(s => (
              <button
                key={s}
                onClick={() => advanceStatus(lead.id, s)}
                disabled={lead.status === s}
                className={`text-[10px] px-1.5 py-0.5 rounded transition ${lead.status === s ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
              >
                {STATUS_CONFIG[s].label}
              </button>
            ))}
            <button onClick={() => advanceStatus(lead.id, "won")} className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 ml-auto">Won</button>
            <button onClick={() => advanceStatus(lead.id, "lost")} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 hover:bg-slate-200">Lost</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-violet-100 p-2 rounded-lg"><Target className="w-6 h-6 text-violet-600" /></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Pipeline</h2>
              <p className="text-sm text-slate-600">Track prospective work before it becomes a project. Avoid dry spells with a healthy funnel.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button onClick={() => setView("kanban")} className={`text-xs px-3 py-1.5 rounded-md transition ${view === "kanban" ? "bg-white shadow-sm font-medium" : "text-slate-600"}`}>Kanban</button>
              <button onClick={() => setView("list")} className={`text-xs px-3 py-1.5 rounded-md transition ${view === "list" ? "bg-white shadow-sm font-medium" : "text-slate-600"}`}>List</button>
            </div>
            <button onClick={startAdd} className="flex items-center gap-1 text-sm px-3 py-1.5 bg-violet-600 text-white hover:bg-violet-500 rounded-lg transition">
              <Plus className="w-4 h-4" /> New Lead
            </button>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Pipeline value</p>
          <p className="text-2xl font-bold text-slate-900">{fmtCurrency(stats.pipelineValue)}</p>
          <p className="text-xs text-slate-500 mt-1">{stats.active.length} active leads</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-1.5 mb-1"><TrendingUp className="w-3.5 h-3.5 text-violet-600" /><p className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Weighted value</p></div>
          <p className="text-2xl font-bold text-violet-900">{fmtCurrency(stats.weightedValue)}</p>
          <p className="text-xs text-violet-600 mt-1">After applying win probability</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-1.5 mb-1"><Trophy className="w-3.5 h-3.5 text-emerald-600" /><p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Won</p></div>
          <p className="text-2xl font-bold text-emerald-900">{fmtCurrency(stats.wonValue)}</p>
          <p className="text-xs text-emerald-600 mt-1">{stats.won.length} closed deals · {Math.round(stats.winRate)}% win rate</p>
        </div>
        <div className={`border rounded-xl p-4 shadow-sm ${stats.stale.length > 0 ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200"}`}>
          <div className="flex items-center gap-1.5 mb-1"><AlertCircle className={`w-3.5 h-3.5 ${stats.stale.length > 0 ? "text-amber-600" : "text-slate-400"}`} /><p className={`text-xs font-semibold uppercase tracking-wider ${stats.stale.length > 0 ? "text-amber-800" : "text-slate-500"}`}>Stale</p></div>
          <p className={`text-2xl font-bold ${stats.stale.length > 0 ? "text-amber-900" : "text-slate-900"}`}>{stats.stale.length}</p>
          <p className="text-xs text-slate-500 mt-1">No contact in 14+ days</p>
        </div>
      </div>

      {/* Form */}
      {(isAdding || editingId) && <LeadForm />}

      {/* Empty state */}
      {leads.length === 0 && !isAdding && (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
          <Target className="w-12 h-12 mx-auto mb-3 text-slate-300" />
          <p className="text-slate-600 font-medium mb-1">Build your pipeline</p>
          <p className="text-sm text-slate-400 mb-4">Track every prospective project from first contact to signed contract.</p>
          <button onClick={startAdd} className="inline-flex items-center gap-1 text-sm px-4 py-2 bg-violet-600 text-white hover:bg-violet-500 rounded-lg transition">
            <Plus className="w-4 h-4" /> Add Your First Lead
          </button>
        </div>
      )}

      {/* Kanban view */}
      {view === "kanban" && leads.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map(status => {
            const cfg = STATUS_CONFIG[status];
            const items = byStatus[status];
            const total = items.reduce((s, l) => s + l.estimatedValue, 0);
            return (
              <div key={status} className={`rounded-lg border-2 ${cfg.border} ${status === "won" ? "bg-emerald-50/50" : status === "lost" ? "bg-slate-50" : "bg-white"} p-3 min-h-[200px]`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${cfg.color}`}>{cfg.label}</h3>
                    <p className="text-[10px] text-slate-500">{items.length} · {fmtCurrency(total)}</p>
                  </div>
                  {status === "won" && <Trophy className="w-4 h-4 text-emerald-500" />}
                  {status === "lost" && <XCircle className="w-4 h-4 text-slate-400" />}
                </div>
                <div className="space-y-2">
                  {items.length === 0 ? (
                    <p className="text-[11px] text-slate-400 italic text-center py-4">Empty</p>
                  ) : (
                    items.map(lead => <LeadCard key={lead.id} lead={lead} compact />)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List view */}
      {view === "list" && leads.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Value</th>
                <th className="px-4 py-3 text-right">Win %</th>
                <th className="px-4 py-3 text-left">Last Contact</th>
                <th className="px-4 py-3 text-left">Next Action</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[...leads].sort((a, b) => b.estimatedValue * b.probability - a.estimatedValue * a.probability).map(lead => {
                const cfg = STATUS_CONFIG[lead.status];
                const stale = isStale(lead);
                return (
                  <tr key={lead.id} className="hover:bg-slate-50 group">
                    <td className="px-4 py-3 text-sm">
                      <div className="font-medium text-slate-900">{lead.clientName}</div>
                      {lead.contactName && <div className="text-xs text-slate-500">{lead.contactName}</div>}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600 max-w-xs truncate">{lead.description}</td>
                    <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color} font-medium`}>{cfg.label}</span></td>
                    <td className="px-4 py-3 text-sm text-right font-mono font-semibold">{fmtCurrency(lead.estimatedValue)}</td>
                    <td className="px-4 py-3 text-sm text-right">{lead.probability}%</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={stale ? "text-amber-600 font-medium" : "text-slate-600"}>
                        {daysSince(lead.lastContactDate)}d ago
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600 max-w-xs truncate">
                      {lead.nextAction || <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition">
                        <button onClick={() => startEdit(lead)} className="text-slate-400 hover:text-slate-700 p-1" aria-label={`Edit lead ${lead.clientName}`} title="Edit"><Edit2 className="w-3.5 h-3.5" /></button>
                        <button onClick={() => remove(lead.id)} className="text-slate-400 hover:text-red-500 p-1" aria-label={`Delete lead ${lead.clientName}`} title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
