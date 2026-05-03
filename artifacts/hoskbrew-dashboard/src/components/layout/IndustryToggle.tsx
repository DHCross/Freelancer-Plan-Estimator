import { Dice6, Code2 } from "lucide-react";

export type IndustryMode = "ttrpg" | "vibe-coding";

interface IndustryToggleProps {
  mode: IndustryMode;
  onToggle: () => void;
  className?: string;
}

export function IndustryToggle({ mode, onToggle, className = "" }: IndustryToggleProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <button
        onClick={onToggle}
        className={`relative flex items-center gap-1 rounded-full px-1 py-1 transition-all duration-300 ${
          mode === "vibe-coding"
            ? "bg-violet-100 border-2 border-violet-400"
            : "bg-slate-200 border-2 border-slate-300"
        }`}
        aria-label={`Switch to ${mode === "ttrpg" ? "Vibe Coding" : "TTRPG"} mode`}
        title={`Currently: ${mode === "ttrpg" ? "TTRPG" : "Vibe Coding"} — click to switch`}
      >
        <span
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            mode === "ttrpg"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500"
          }`}
        >
          <Dice6 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">TTRPG</span>
        </span>

        <span
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            mode === "vibe-coding"
              ? "bg-white text-violet-700 shadow-sm"
              : "text-slate-500"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Vibe Coding</span>
        </span>
      </button>
    </div>
  );
}
