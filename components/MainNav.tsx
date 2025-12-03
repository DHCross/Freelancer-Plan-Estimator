"use client";

import { LucideIcon } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  accentClass: string;
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
          ? "flex flex-col gap-2"
          : "flex border-b border-slate-200 overflow-x-auto"
      }
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const baseClasses = isVertical
          ? "w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-2 rounded-xl border transition-colors"
          : "px-6 py-4 text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap border-b-2";
        const activeClasses = isVertical
          ? `${tab.accentClass} border-l-4 shadow-sm`
          : `${tab.accentClass}`;
        const inactiveClasses = isVertical
          ? "text-slate-500 border-l-4 border-transparent hover:bg-slate-50"
          : "text-slate-500 border-transparent hover:bg-slate-50";

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
