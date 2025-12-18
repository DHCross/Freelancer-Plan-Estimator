"use client";

import { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon | null;
  accentClass?: string;
  isDivider?: boolean;
}

interface MainNavProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  orientation?: "horizontal" | "vertical";
}

export function MainNav({ tabs, activeTab, onChange, orientation = "horizontal" }: MainNavProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={
        isVertical
          ? "flex flex-col gap-1"
          : "flex border-b border-slate-200 overflow-x-auto"
      }
    >
      {tabs.map((tab) => {
        // Handle dividers
        if (tab.isDivider) {
          return isVertical ? (
            <div key={tab.id} className="px-4 py-2 text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-3 first:mt-0">
              {tab.label.replace(/—/g, "").trim()}
            </div>
          ) : null;
        }

        const isActive = activeTab === tab.id;
        const baseClasses = isVertical
          ? "w-full text-left px-4 py-2.5 text-sm font-medium flex items-center gap-2 rounded-lg transition-colors"
          : "px-6 py-4 text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap border-b-2";
        const activeClasses = isVertical
          ? `${tab.accentClass || ""} border-l-4 shadow-sm bg-white`
          : `${tab.accentClass || ""}`;
        const inactiveClasses = isVertical
          ? "text-slate-600 border-l-4 border-transparent hover:bg-white hover:text-slate-900"
          : "text-slate-500 border-transparent hover:bg-slate-50";

        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
