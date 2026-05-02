

import { Briefcase } from "lucide-react";
import { TeamMember } from "@/lib/types";
import { EditableProductGrid } from "./EditableProductGrid";

interface ProductListingViewProps {
  teamRoster: TeamMember[];
  onNavigateToProductLines?: (productLineId?: string) => void;
}

export function ProductListingView({ teamRoster, onNavigateToProductLines }: ProductListingViewProps) {
  return (
    <div className="space-y-6 relative">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">My Projects</p>
          <h2 className="text-2xl font-bold text-slate-900">Project List</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            Manage all projects in development. Edit names, descriptions, clients, statuses, and deadlines directly in the grid.
            Unsaved changes are highlighted in yellow.
          </p>
        </div>
        <Briefcase className="w-10 h-10 text-teal-500" />
      </div>

      <EditableProductGrid teamRoster={teamRoster} onNavigateToProductLines={onNavigateToProductLines} />
    </div>
  );
}
