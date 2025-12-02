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
}

export function MainNav({ tabs, activeTab, onChange }: MainNavProps) {
  return (
    <div className="flex border-b border-slate-200 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-6 py-4 text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap border-b-2 ${
              isActive
                ? `${tab.accentClass}`
                : "text-slate-500 border-transparent hover:bg-slate-50"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
