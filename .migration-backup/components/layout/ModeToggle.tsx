"use client";

import { Eye, EyeOff } from "lucide-react";

interface ModeToggleProps {
  isClientMode: boolean;
  onToggle: () => void;
  className?: string;
}

export function ModeToggle({ isClientMode, onToggle, className = "" }: ModeToggleProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <button
        onClick={onToggle}
        className={`relative flex items-center gap-2 rounded-full px-1 py-1 transition-all duration-300 ${
          isClientMode 
            ? "bg-emerald-100 border-2 border-emerald-400" 
            : "bg-slate-200 border-2 border-slate-300"
        }`}
        aria-label={`Switch to ${isClientMode ? "internal" : "client"} mode`}
      >
        {/* Internal Label */}
        <span 
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            !isClientMode 
              ? "bg-white text-slate-900 shadow-sm" 
              : "text-slate-500"
          }`}
        >
          <EyeOff className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Internal</span>
        </span>

        {/* Client Label */}
        <span 
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            isClientMode 
              ? "bg-white text-emerald-700 shadow-sm" 
              : "text-slate-500"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Client</span>
        </span>
      </button>
    </div>
  );
}
