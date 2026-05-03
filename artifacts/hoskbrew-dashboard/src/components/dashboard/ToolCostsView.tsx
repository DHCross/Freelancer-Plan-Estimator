import { useState, useMemo } from "react";
import { Plus, Trash2, Edit2, Save, X, ExternalLink, TrendingUp, AlertCircle, Code2 } from "lucide-react";

interface ToolCost {
  id: string;
  name: string;
  category: "ai" | "dev-platform" | "hosting" | "design" | "productivity" | "other";
  monthlyCost: number;
  billingCycle: "monthly" | "annual";
  url?: string;
  notes?: string;
  isActive: boolean;
}

const CATEGORY_LABELS: Record<ToolCost["category"], string> = {
  ai: "AI & LLMs",
  "dev-platform": "Dev Platform",
  hosting: "Hosting & Infra",
  design: "Design",
  productivity: "Productivity",
  other: "Other",
};

const CATEGORY_COLORS: Record<ToolCost["category"], string> = {
  ai: "bg-violet-100 text-violet-800",
  "dev-platform": "bg-blue-100 text-blue-800",
  hosting: "bg-emerald-100 text-emerald-800",
  design: "bg-pink-100 text-pink-800",
  productivity: "bg-amber-100 text-amber-800",
  other: "bg-slate-100 text-slate-700",
};

const TOOL_PRESETS: Omit<ToolCost, "id">[] = [
  { name: "Replit Core", category: "dev-platform", monthlyCost: 25, billingCycle: "monthly", url: "https://replit.com", notes: "Cloud IDE + hosting", isActive: true },
  { name: "Claude Pro", category: "ai", monthlyCost: 20, billingCycle: "monthly", url: "https://claude.ai", notes: "AI coding + writing assistant", isActive: true },
  { name: "GitHub Copilot", category: "ai", monthlyCost: 10, billingCycle: "monthly", url: "https://github.com/features/copilot", notes: "AI code completion", isActive: true },
  { name: "Cursor", category: "dev-platform", monthlyCost: 20, billingCycle: "monthly", url: "https://cursor.sh", notes: "AI-first code editor", isActive: false },
  { name: "Vercel", category: "hosting", monthlyCost: 20, billingCycle: "monthly", url: "https://vercel.com", notes: "Frontend hosting & edge functions", isActive: false },
  { name: "Supabase", category: "hosting", monthlyCost: 25, billingCycle: "monthly", url: "https://supabase.com", notes: "Postgres + auth + storage", isActive: false },
  { name: "Figma", category: "design", monthlyCost: 15, billingCycle: "monthly", url: "https://figma.com", notes: "UI design", isActive: false },
  { name: "Linear", category: "productivity", monthlyCost: 8, billingCycle: "monthly", url: "https://linear.app", notes: "Issue tracking", isActive: false },
  { name: "OpenAI API", category: "ai", monthlyCost: 30, billingCycle: "monthly", url: "https://platform.openai.com", notes: "Pay-as-you-go (estimate)", isActive: false },
];

const STORAGE_KEY = "forge_tool_costs";

function loadTools(): ToolCost[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return TOOL_PRESETS.map((t, i) => ({ ...t, id: `tool_${i}` }));
}

function saveTools(tools: ToolCost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tools));
}

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

export function ToolCostsView() {
  const [tools, setToolsRaw] = useState<ToolCost[]>(loadTools);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [draft, setDraft] = useState<Partial<ToolCost>>({});

  const setTools = (updater: ToolCost[] | ((prev: ToolCost[]) => ToolCost[])) => {
    setToolsRaw(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      saveTools(next);
      return next;
    });
  };

  const activeTools = useMemo(() => tools.filter(t => t.isActive), [tools]);
  const monthlyTotal = useMemo(() => activeTools.reduce((s, t) => s + t.monthlyCost, 0), [activeTools]);
  const annualTotal = monthlyTotal * 12;

  const byCategory = useMemo(() => {
    const map: Record<string, { tools: ToolCost[]; total: number }> = {};
    activeTools.forEach(t => {
      if (!map[t.category]) map[t.category] = { tools: [], total: 0 };
      map[t.category].tools.push(t);
      map[t.category].total += t.monthlyCost;
    });
    return map;
  }, [activeTools]);

  const startEdit = (tool: ToolCost) => {
    setEditingId(tool.id);
    setDraft({ ...tool });
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setDraft({ name: "", category: "other", monthlyCost: 0, billingCycle: "monthly", isActive: true });
  };

  const save = () => {
    if (!draft.name?.trim()) return;
    if (isAdding) {
      const newTool: ToolCost = {
        id: `tool_${Date.now()}`,
        name: draft.name || "",
        category: draft.category || "other",
        monthlyCost: Number(draft.monthlyCost) || 0,
        billingCycle: draft.billingCycle || "monthly",
        url: draft.url,
        notes: draft.notes,
        isActive: draft.isActive ?? true,
      };
      setTools(prev => [...prev, newTool]);
    } else if (editingId) {
      setTools(prev => prev.map(t => t.id === editingId ? { ...t, ...draft, id: t.id } as ToolCost : t));
    }
    setEditingId(null);
    setIsAdding(false);
    setDraft({});
  };

  const cancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setDraft({});
  };

  const remove = (id: string) => {
    setTools(prev => prev.filter(t => t.id !== id));
  };

  const toggle = (id: string) => {
    setTools(prev => prev.map(t => t.id === id ? { ...t, isActive: !t.isActive } : t));
  };

  const addPreset = (preset: Omit<ToolCost, "id">) => {
    const newTool: ToolCost = { ...preset, id: `tool_${Date.now()}` };
    setTools(prev => [...prev, newTool]);
    setShowPresets(false);
  };

  const EditForm = ({ compact = false }) => (
    <div className={`space-y-3 ${compact ? "p-3 bg-slate-50 rounded-lg border border-slate-200" : ""}`}>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Tool Name</label>
          <input
            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-violet-500 outline-none"
            value={draft.name || ""}
            onChange={e => setDraft(d => ({ ...d, name: e.target.value }))}
            placeholder="e.g. Replit Core"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Category</label>
          <select
            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
            value={draft.category || "other"}
            onChange={e => setDraft(d => ({ ...d, category: e.target.value as ToolCost["category"] }))}
          >
            {Object.entries(CATEGORY_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Monthly Cost ($)</label>
          <input
            type="number"
            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
            value={draft.monthlyCost || ""}
            onChange={e => setDraft(d => ({ ...d, monthlyCost: Number(e.target.value) }))}
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">URL (optional)</label>
          <input
            className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
            value={draft.url || ""}
            onChange={e => setDraft(d => ({ ...d, url: e.target.value }))}
            placeholder="https://"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Notes (optional)</label>
        <input
          className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
          value={draft.notes || ""}
          onChange={e => setDraft(d => ({ ...d, notes: e.target.value }))}
          placeholder="What this tool is used for"
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={draft.isActive ?? true}
            onChange={e => setDraft(d => ({ ...d, isActive: e.target.checked }))}
            className="rounded"
          />
          Active subscription
        </label>
        <div className="flex gap-2">
          <button onClick={cancel} className="flex items-center gap-1 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-200 rounded-lg transition">
            <X className="w-3.5 h-3.5" /> Cancel
          </button>
          <button onClick={save} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-violet-600 text-white hover:bg-violet-500 rounded-lg transition">
            <Save className="w-3.5 h-3.5" /> Save
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-violet-100 p-2 rounded-lg">
            <Code2 className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Tool Costs</h2>
            <p className="text-sm text-slate-600">Track your monthly dev tool and AI subscription costs across all active tools.</p>
          </div>
        </div>
      </div>

      {/* Summary Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
          <p className="text-xs font-semibold text-violet-700 uppercase tracking-wider mb-1">Monthly Total</p>
          <p className="text-2xl font-bold text-violet-900">{formatCurrency(monthlyTotal)}</p>
          <p className="text-xs text-violet-600 mt-1">{activeTools.length} active tools</p>
        </div>
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Annual Total</p>
          <p className="text-2xl font-bold text-white">{formatCurrency(annualTotal)}</p>
          <p className="text-xs text-slate-400 mt-1">per year</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Largest Cost</p>
          {activeTools.length > 0 ? (
            <>
              <p className="text-lg font-bold text-emerald-900 truncate">{[...activeTools].sort((a, b) => b.monthlyCost - a.monthlyCost)[0]?.name}</p>
              <p className="text-xs text-emerald-600">{formatCurrency([...activeTools].sort((a, b) => b.monthlyCost - a.monthlyCost)[0]?.monthlyCost || 0)}/mo</p>
            </>
          ) : <p className="text-sm text-emerald-600">—</p>}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">As % of Income</p>
          </div>
          <p className="text-xs text-amber-700 mt-1">Track in Revenue Model to compare against project income.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tool List */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-800">Your Subscriptions</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPresets(!showPresets)}
                className="text-xs px-3 py-1.5 border border-violet-200 text-violet-700 hover:bg-violet-50 rounded-lg transition"
              >
                + Add Preset
              </button>
              <button
                onClick={startAdd}
                className="flex items-center gap-1 text-xs px-3 py-1.5 bg-violet-600 text-white hover:bg-violet-500 rounded-lg transition"
              >
                <Plus className="w-3.5 h-3.5" /> Custom
              </button>
            </div>
          </div>

          {/* Preset Picker */}
          {showPresets && (
            <div className="p-4 bg-violet-50 border-b border-violet-100">
              <p className="text-xs font-semibold text-violet-700 mb-3">Common tools — click to add:</p>
              <div className="flex flex-wrap gap-2">
                {TOOL_PRESETS.filter(p => !tools.find(t => t.name === p.name)).map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => addPreset(preset)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-violet-200 text-slate-700 text-xs rounded-full hover:border-violet-400 hover:bg-violet-50 transition"
                  >
                    {preset.name}
                    <span className="text-violet-600 font-semibold">${preset.monthlyCost}/mo</span>
                  </button>
                ))}
                {TOOL_PRESETS.filter(p => !tools.find(t => t.name === p.name)).length === 0 && (
                  <p className="text-xs text-slate-400">All presets already added.</p>
                )}
              </div>
            </div>
          )}

          {/* Add Form */}
          {isAdding && (
            <div className="p-4 border-b border-slate-100">
              <EditForm compact />
            </div>
          )}

          {tools.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">No tools yet. Add a preset or custom subscription above.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {tools.map(tool => (
                <div key={tool.id}>
                  {editingId === tool.id ? (
                    <div className="p-4">
                      <EditForm compact />
                    </div>
                  ) : (
                    <div className={`flex items-center gap-3 px-5 py-3.5 hover:bg-slate-50 transition ${!tool.isActive ? "opacity-50" : ""}`}>
                      <button
                        onClick={() => toggle(tool.id)}
                        className={`w-4 h-4 rounded-full border-2 shrink-0 transition-colors ${tool.isActive ? "bg-violet-500 border-violet-500" : "border-slate-300"}`}
                        title={tool.isActive ? "Deactivate" : "Activate"}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-slate-900 text-sm">{tool.name}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full ${CATEGORY_COLORS[tool.category]}`}>
                            {CATEGORY_LABELS[tool.category]}
                          </span>
                        </div>
                        {tool.notes && <p className="text-xs text-slate-400 truncate">{tool.notes}</p>}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-semibold text-slate-800 font-mono">${tool.monthlyCost}/mo</span>
                        {tool.url && (
                          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-500 transition">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button onClick={() => startEdit(tool)} className="text-slate-400 hover:text-slate-700 transition">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => remove(tool.id)} className="text-slate-400 hover:text-red-500 transition">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Total Footer */}
          <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
            <span className="text-sm text-slate-600">{activeTools.length} active · {tools.length - activeTools.length} inactive</span>
            <span className="text-sm font-bold text-slate-900">{formatCurrency(monthlyTotal)}/month</span>
          </div>
        </div>

        {/* By Category */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800 mb-4">By Category</h3>
            {Object.keys(byCategory).length === 0 ? (
              <p className="text-sm text-slate-400">No active tools yet.</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(byCategory)
                  .sort(([, a], [, b]) => b.total - a.total)
                  .map(([cat, data]) => (
                    <div key={cat}>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${CATEGORY_COLORS[cat as ToolCost["category"]]}`}>
                          {CATEGORY_LABELS[cat as ToolCost["category"]]}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">{formatCurrency(data.total)}/mo</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div
                          className="h-full bg-violet-400 rounded-full"
                          style={{ width: `${monthlyTotal > 0 ? (data.total / monthlyTotal) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  ))}
                <div className="pt-2 border-t border-slate-100 flex justify-between">
                  <span className="text-xs text-slate-500">Total / month</span>
                  <span className="text-sm font-bold text-violet-700">{formatCurrency(monthlyTotal)}</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-violet-900 mb-3">Annual Breakdown</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-violet-700">Tool costs / month</span>
                <span className="font-semibold text-violet-900">{formatCurrency(monthlyTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-violet-700">Tool costs / year</span>
                <span className="font-semibold text-violet-900">{formatCurrency(annualTotal)}</span>
              </div>
              <div className="pt-2 border-t border-violet-200 text-xs text-violet-600">
                These are your baseline costs before project revenue. Compare against your Revenue Model to understand net income.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

