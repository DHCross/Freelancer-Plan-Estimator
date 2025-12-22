"use client";

import { useEffect, useState } from "react";
import { 
  Command, 
  Search, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  DollarSign, 
  FileText, 
  Eye, 
  EyeOff,
  Maximize,
  Minimize
} from "lucide-react";
import { PrimaryTab } from "@/components/layout";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: PrimaryTab) => void;
  onToggleMode: () => void;
  isClientMode: boolean;
  onTogglePresentation: () => void;
  isPresentationMode: boolean;
}

export function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onToggleMode,
  isClientMode,
  onTogglePresentation,
  isPresentationMode,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    {
      id: "nav-dashboard",
      label: "Go to Dashboard",
      icon: LayoutDashboard,
      action: () => onNavigate("dashboard"),
      category: "Navigation",
    },
    {
      id: "nav-planning",
      label: "Go to Planning",
      icon: Calendar,
      action: () => onNavigate("planning"),
      category: "Navigation",
    },
    {
      id: "nav-team",
      label: "Go to Team",
      icon: Users,
      action: () => onNavigate("team"),
      category: "Navigation",
    },
    {
      id: "nav-finance",
      label: "Go to Finance",
      icon: DollarSign,
      action: () => onNavigate("finance"),
      category: "Navigation",
    },
    {
      id: "nav-reports",
      label: "Go to Reports",
      icon: FileText,
      action: () => onNavigate("reports"),
      category: "Navigation",
    },
    {
      id: "toggle-mode",
      label: isClientMode ? "Switch to Internal Mode" : "Switch to Client Mode",
      icon: isClientMode ? EyeOff : Eye,
      action: onToggleMode,
      category: "Actions",
    },
    {
      id: "toggle-presentation",
      label: isPresentationMode ? "Exit Presentation Mode" : "Enter Presentation Mode",
      icon: isPresentationMode ? Minimize : Maximize,
      action: onTogglePresentation,
      category: "Actions",
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  // Handle keyboard navigation within the palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 animate-fade-in">
        <div className="flex items-center px-4 py-3 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Type a command..."
            className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <div className="flex items-center gap-1">
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-slate-500 bg-slate-100 rounded border border-slate-200">
              <span className="text-xs">ESC</span>
            </kbd>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto py-2">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-8 text-center text-slate-500">
              No commands found.
            </div>
          ) : (
            <div className="space-y-1 px-2">
              {filteredCommands.map((cmd, index) => {
                const Icon = cmd.icon;
                const isSelected = index === selectedIndex;
                
                return (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                      isSelected ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`p-2 rounded-md ${isSelected ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium flex-1">{cmd.label}</span>
                    {isSelected && (
                      <span className="text-xs text-blue-500 font-medium">Enter</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
          <span>
            <strong className="font-medium text-slate-700">↑↓</strong> to navigate
          </span>
          <span>
            <strong className="font-medium text-slate-700">↵</strong> to select
          </span>
        </div>
      </div>
    </div>
  );
}
