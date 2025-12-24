"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { TeamMember } from "@/lib/types";
import { EditableProductGrid } from "./EditableProductGrid";
import { useProducts } from "@/lib/ProductContext";
import { getInsightsForProduct } from "@/lib/productInsights";
import { useTeamLoad } from "@/lib/TeamLoadContext";

interface ProductListingViewProps {
  teamRoster: TeamMember[];
}

export function ProductListingView({ teamRoster }: ProductListingViewProps) {
  const { products, updateProductField, saveProductChanges } = useProducts();
  const { updateTeamLoad } = useTeamLoad();
  const a0 = products.find(p => p.name.toLowerCase().includes("caravan"));
  const a0Insights = a0 ? getInsightsForProduct(a0.name) : null;
  const dan = teamRoster.find(m => m.name.toLowerCase().startsWith("dan")) || teamRoster.find(m => m.id === "dan");
  const [selectedLayoutHours, setSelectedLayoutHours] = React.useState<number>(a0Insights?.layoutHours.mid ?? 50);
  return (
    <div className="space-y-6">
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
              onClick={async () => { 
                updateProductField(a0.id, "targetWords", a0Insights.targetWords); 
                updateProductField(a0.id, "layoutHours", selectedLayoutHours); 
                updateProductField(a0.id, "estimatedPages", a0Insights.estimatedPages);
                updateProductField(a0.id, "benchmarkNotes", "Layout benchmark: 45-55h (InDesign + automation). Breakdown: Assembly ~30h, Gap Management ~10h, Tone & Polish ~10h. Table tool saves 6-8h vs Affinity.");
                await saveProductChanges(a0.id); 
              }}
              className="px-3 py-1.5 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Apply Insights to Product
            </button>
            {dan && (
              <button
                onClick={() => updateTeamLoad(dan.id, String(a0.id), selectedLayoutHours, "Layout", "Layout")}
                className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Schedule Layout Work ({selectedLayoutHours}h → {dan.name.split(" ")[0]})
              </button>
            )}
            {dan && (
              <button
                onClick={async () => {
                  updateProductField(a0.id, "targetWords", a0Insights.targetWords); 
                  updateProductField(a0.id, "layoutHours", selectedLayoutHours); 
                  updateProductField(a0.id, "estimatedPages", a0Insights.estimatedPages);
                  updateProductField(a0.id, "benchmarkNotes", "Layout benchmark: 45-55h (InDesign + automation). Breakdown: Assembly ~30h, Gap Management ~10h, Tone & Polish ~10h. Table tool saves 6-8h vs Affinity.");
                  updateProductField(a0.id, "primaryRole", "Layout");
                  await saveProductChanges(a0.id);
                  updateTeamLoad(dan.id, String(a0.id), selectedLayoutHours, "Layout", "Layout");
                }}
                className="px-3 py-1.5 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
              >
                Apply + Schedule ({selectedLayoutHours}h)
              </button>
            )}
          </div>
        </div>
      )}

      <EditableProductGrid teamRoster={teamRoster} />
    </div>
  );
}
