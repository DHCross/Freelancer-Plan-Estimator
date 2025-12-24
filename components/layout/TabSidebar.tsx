"use client";

import { ReactNode, useState } from "react";
import { ChevronDown, LucideIcon, HelpCircle } from "lucide-react";

interface SidebarSection {
  id: string;
  label: string;
  description?: string;
  items: SidebarItem[];
  defaultExpanded?: boolean;
}

interface SidebarItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
  badge?: string;
  badgeColor?: "red" | "amber" | "emerald" | "blue";
}

interface TabSidebarProps {
  sections: SidebarSection[];
  activeItem: string;
  onItemChange: (id: string) => void;
  footer?: ReactNode;
}

const BADGE_COLORS = {
  red: "bg-red-100 text-red-700",
  amber: "bg-amber-100 text-amber-700",
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
};

export function TabSidebar({ sections, activeItem, onItemChange, footer }: TabSidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sections.forEach((section) => {
      initial[section.id] = section.defaultExpanded ?? true;
    });
    return initial;
  });

  const toggleSection = (sectionId: string) => {
    setExpanded((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  return (
    <nav className="space-y-4">
      {sections.map((section) => (
        <div key={section.id}>
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold hover:text-slate-600 transition-colors"
          >
            <span>{section.label}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                expanded[section.id] ? "" : "-rotate-90"
              }`}
            />
          </button>

          {/* Section Description */}
          {section.description && expanded[section.id] && (
            <p className="px-2 pb-2 text-xs text-slate-400">{section.description}</p>
          )}

          {/* Section Items */}
          {expanded[section.id] && (
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onItemChange(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2.5 transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-medium border-l-3 border-blue-600 ml-0.5"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 ${
                          isActive ? "text-blue-600" : "text-slate-400"
                        }`}
                      />
                    )}
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                          BADGE_COLORS[item.badgeColor || "blue"]
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {/* Footer (e.g., Help link) */}
      {footer && <div className="pt-4 border-t border-slate-200 mt-4">{footer}</div>}
    </nav>
  );
}

// Helper component for "How This Works" link
export function HelpLink({ onClick, tabName }: { onClick?: () => void; tabName?: string }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
    >
      <HelpCircle className="w-4 h-4" />
      <span>{tabName ? `${tabName} Help` : "How This Works"}</span>
    </button>
  );
}
