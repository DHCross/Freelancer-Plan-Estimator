"use client";

import { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon | null;
  accentClass?: string;
  isDivider?: boolean;
  hasSubmenu?: boolean;
}

export interface SubmenuItem {
  id: string;
  label: string;
  description?: string;
}

interface MainNavProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  orientation?: "horizontal" | "vertical";
  submenu?: SubmenuItem[];
  activeSubmenu?: string;
  onSubmenuChange?: (id: string) => void;
}

export function MainNav({ 
  tabs, 
  activeTab, 
  onChange, 
  orientation = "horizontal",
  submenu,
  activeSubmenu,
  onSubmenuChange,
}: MainNavProps) {
  const isVertical = orientation === "vertical";
  const [expandedTab, setExpandedTab] = useState<string | null>(null);

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
        const isExpanded = expandedTab === tab.id;
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

        const handleTabClick = () => {
          if (tab.hasSubmenu && isVertical) {
            setExpandedTab(isExpanded ? null : tab.id);
          }
          onChange(tab.id);
        };

        return (
          <div key={tab.id}>
            <button
              onClick={handleTabClick}
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${
                tab.hasSubmenu && isVertical ? "justify-between" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {tab.label}
              </div>
              {tab.hasSubmenu && isVertical && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              )}
            </button>

            {/* Submenu items - only shown when tab is expanded in vertical mode */}
            {tab.hasSubmenu && isExpanded && isVertical && submenu && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-200 pl-3">
                {submenu.map((item) => {
                  const isSubmenuActive = activeSubmenu === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSubmenuChange?.(item.id);
                        onChange(tab.id);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        isSubmenuActive
                          ? "bg-slate-100 text-slate-900 font-medium"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-slate-500">{item.description}</div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
