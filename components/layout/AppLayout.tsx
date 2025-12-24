"use client";

import { ReactNode } from "react";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  DollarSign, 
  FileText,
  Download,
  Upload,
  Menu,
  X,
  Search,
  Command
} from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { CommandPalette } from "./CommandPalette";
import { useKeyboardShortcuts } from "@/lib/hooks/useKeyboardShortcuts";

export type PrimaryTab = "dashboard" | "planning" | "team" | "finance" | "reports";

interface AppLayoutProps {
  children: ReactNode;
  activeTab: PrimaryTab;
  onTabChange: (tab: PrimaryTab) => void;
  isClientMode: boolean;
  onModeToggle: () => void;
  onExport?: () => void;
  onImport?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sidebar?: ReactNode;
  isPresentationMode?: boolean;
  onTogglePresentation?: () => void;
}

const PRIMARY_TABS: { id: PrimaryTab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "planning", label: "Planning", icon: Calendar },
  { id: "team", label: "Team", icon: Users },
  { id: "finance", label: "Finance", icon: DollarSign },
  { id: "reports", label: "Reports", icon: FileText },
];

export function AppLayout({
  children,
  activeTab,
  onTabChange,
  isClientMode,
  onModeToggle,
  onExport,
  onImport,
  sidebar,
  isPresentationMode = false,
  onTogglePresentation,
}: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useKeyboardShortcuts([
    {
      key: "k",
      metaKey: true,
      action: () => {
        setIsCommandPaletteOpen((prev) => !prev);
      },
    },
    {
      key: "k",
      ctrlKey: true,
      action: () => {
        setIsCommandPaletteOpen((prev) => !prev);
      },
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* Top Header - Hidden in Presentation Mode */}
      {!isPresentationMode && (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-[1600px] mx-auto">
            {/* Title Row */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium">
                    Hoskbrew Strategic Board
                  </p>
                  <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                    Production Engine
                  </h1>
                </div>
              </div>

              {/* Mode Toggle + Export/Import */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCommandPaletteOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                  title="Open Command Palette (Cmd+K)"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden lg:inline text-slate-400">Search projects, people, or reports…</span>
                  <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 bg-white border border-slate-200 rounded ml-1">
                    <Command className="w-3 h-3" />K
                  </kbd>
                </button>

                <ModeToggle isClientMode={isClientMode} onToggle={onModeToggle} />
                
                {!isClientMode && onExport && onImport && (
                  <div className="hidden md:flex items-center gap-1 border-l border-slate-200 pl-3 ml-1">
                    <button
                      onClick={onExport}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                      title="Export dashboard data"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden lg:inline">Export</span>
                    </button>
                    <label 
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-md transition-colors cursor-pointer" 
                      title="Import dashboard data"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span className="hidden lg:inline">Import</span>
                      <input
                        type="file"
                        accept=".json"
                        onChange={onImport}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Primary Tabs Row */}
            <nav className="flex overflow-x-auto px-2 md:px-4">
              {PRIMARY_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      isActive
                        ? "text-blue-600 border-blue-600 bg-blue-50/50"
                        : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <div className={`max-w-[1600px] mx-auto flex ${isPresentationMode ? "pt-4" : ""}`}>
        {/* Sidebar - Hidden in Presentation Mode */}
        {sidebar && !isPresentationMode && (
          <aside 
            className={`${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:sticky top-[108px] left-0 h-[calc(100vh-108px)] w-64 bg-white border-r border-slate-200 overflow-y-auto transition-transform z-40`}
          >
            <div className="p-4">
              {sidebar}
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className={`flex-1 p-4 md:p-6 min-h-[calc(100vh-108px)] ${sidebar && !isPresentationMode ? "" : "max-w-5xl mx-auto"}`}>
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && sidebar && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={(tab) => {
          onTabChange(tab);
          setIsCommandPaletteOpen(false);
        }}
        onToggleMode={() => {
          onModeToggle();
          setIsCommandPaletteOpen(false);
        }}
        isClientMode={isClientMode}
        onTogglePresentation={() => {
          onTogglePresentation?.();
          setIsCommandPaletteOpen(false);
        }}
        isPresentationMode={isPresentationMode}
      />
    </div>
  );
}
