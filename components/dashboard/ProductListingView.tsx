"use client";

import React, { useState } from "react";
import { Briefcase, Check } from "lucide-react";
import { TeamMember } from "@/lib/types";
import { EditableProductGrid } from "./EditableProductGrid";
import { useProducts } from "@/lib/ProductContext";
import { getInsightsForProduct } from "@/lib/productInsights";
import { useTeamLoad } from "@/lib/TeamLoadContext";

interface ProductListingViewProps {
  teamRoster: TeamMember[];
  onNavigateToProductLines?: (productLineId?: string) => void;
}

// Simple internal toast component
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 z-50">
      <Check className="w-4 h-4 text-emerald-400" />
      {message}
    </div>
  );
}

export function ProductListingView({ teamRoster, onNavigateToProductLines }: ProductListingViewProps) {
  const { products, updateProductField, saveProductChanges } = useProducts();
  const { updateTeamLoad } = useTeamLoad();

  const a0 = products.find(p => p.name.toLowerCase().includes("caravan"));
  const a0Insights = a0 ? getInsightsForProduct(a0.name) : null;
  const dan = teamRoster.find(m => m.name.toLowerCase().startsWith("dan")) || teamRoster.find(m => m.id === "dan");
  const [selectedLayoutHours, setSelectedLayoutHours] = useState<number>(a0Insights?.layoutHours.mid ?? 50);

  const [insightsApplied, setInsightsApplied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleApplyInsights = async () => {
    if (!a0 || !a0Insights) return;
    updateProductField(a0.id, "targetWords", a0Insights.targetWords);
    updateProductField(a0.id, "layoutHours", selectedLayoutHours);
    await saveProductChanges(a0.id);
    setInsightsApplied(true);
  };

  const handleScheduleWork = async () => {
    if (!a0 || !dan) return;
    
    // Update team load
    updateTeamLoad(dan.id, String(a0.id), selectedLayoutHours, "Layout");
    
    // Update product status to show Layout work in progress
    updateProductField(a0.id, "internalStatus", `layout`);
    // Assign to Dan who is doing the layout work
    updateProductField(a0.id, "assignedTo", dan.id);
    
    // Save changes to persist the updates
    await saveProductChanges(a0.id);
    
    setToastMessage(`Layout work scheduled for ${dan.name.split(" ")[0]}.`);
  };

  return (
    <div className="space-y-6 relative">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Hoskbrew Strategic Roadmap</p>
          <h2 className="text-2xl font-bold text-slate-900">Product Listing</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            Manage all products in development. Edit names, descriptions, owners, statuses, and launch windows directly in the grid.
            Unsaved changes are highlighted in yellow.
          </p>
        </div>
        <Briefcase className="w-10 h-10 text-teal-500" />
      </div>

      {a0 && a0Insights && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-emerald-900">Insights detected for {a0.name}</p>
              <p className="text-xs text-emerald-800 mt-1">Projected words: {a0Insights.targetWords.toLocaleString()} • Pages: {a0Insights.estimatedPages.min}-{a0Insights.estimatedPages.max}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-emerald-900">Layout Hours</label>
              <select
                value={selectedLayoutHours}
                onChange={(e)=> setSelectedLayoutHours(parseInt(e.target.value))}
                className="px-2 py-1 text-sm border border-emerald-300 rounded bg-white"
              >
                <option value={a0Insights.layoutHours.min}>{a0Insights.layoutHours.min}h (low)</option>
                <option value={a0Insights.layoutHours.mid}>{a0Insights.layoutHours.mid}h (mid)</option>
                <option value={a0Insights.layoutHours.max}>{a0Insights.layoutHours.max}h (high)</option>
              </select>
            </div>
          </div>
          <ul className="text-xs text-emerald-900 list-disc ml-5">
            <li>Layout & Assembly ~30h (InDesign templates, import, art placement)</li>
            <li>Gap Management ~10h (placeholders, missing stats/intro/synopsis)</li>
            <li>Tone & Polish ~10h (visual pacing for Grim tone)</li>
            <li>Automation savings: table conversion tool saves ~6–8h vs Affinity</li>
          </ul>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleApplyInsights}
              disabled={insightsApplied}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                insightsApplied
                  ? "bg-emerald-100 text-emerald-800 cursor-default"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              {insightsApplied ? (
                <>Applied <Check className="w-3.5 h-3.5" /></>
              ) : (
                "Apply Insights to Product"
              )}
            </button>
            {dan && (
              <button
                onClick={handleScheduleWork}
                className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Schedule Layout Work ({selectedLayoutHours}h → {dan.name.split(" ")[0]})
              </button>
            )}
          </div>
        </div>
      )}

      <EditableProductGrid teamRoster={teamRoster} onNavigateToProductLines={onNavigateToProductLines} />
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
    </div>
  );
}
