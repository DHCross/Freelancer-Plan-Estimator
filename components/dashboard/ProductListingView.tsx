"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { Project, TeamMember } from "@/lib/types";
import { EditableProductGrid } from "./EditableProductGrid";

interface ProductListingViewProps {
  products: Project[];
  teamRoster: TeamMember[];
}

export function ProductListingView({ products, teamRoster }: ProductListingViewProps) {
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

      <EditableProductGrid products={products} teamRoster={teamRoster} />
    </div>
  );
}
