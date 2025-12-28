"use client";

import { useMemo, useState } from "react";
import { Clock, Zap, Feather, Calculator, User, CheckCircle } from "lucide-react";
import { format, isWeekend, parseISO } from "date-fns";

import { runEstimator } from "@/lib/calculations";
import { TeamMember } from "@/lib/types";

const SIZES = [
  { label: "Quick Hit", words: 2000, desc: "Item, Spell, Blog Post", icon: "⚡" },
  { label: "Chapter", words: 8000, desc: "Subclass, Short Adventure", icon: "📄" },
  { label: "Major Section", words: 25000, desc: "Act 1, Bestiary", icon: "📚" },
];

const COMPLEXITY = [
  { label: "Standard", multiplier: 1, desc: "Narrative, basic rules", icon: Feather },
  { label: "Heavy", multiplier: 0.7, desc: "Stat blocks, mechanics", icon: Calculator },
];

// Generate initials for avatar
const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length > 1 
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    : name.substring(0, 2).toUpperCase();
};

// Avatar colors based on name hash
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-indigo-500",
    "bg-emerald-500", 
    "bg-amber-500",
    "bg-rose-500",
    "bg-purple-500",
    "bg-cyan-500",
  ];
  const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

// Get time estimate color based on hours
const getTimeColor = (hours: number) => {
  if (hours <= 8) return { text: "text-emerald-400", bg: "bg-emerald-500/20", label: "Light" };
  if (hours <= 24) return { text: "text-emerald-400", bg: "bg-emerald-500/20", label: "Manageable" };
  if (hours <= 40) return { text: "text-amber-400", bg: "bg-amber-500/20", label: "Moderate" };
  if (hours <= 80) return { text: "text-orange-400", bg: "bg-orange-500/20", label: "Heavy" };
  return { text: "text-red-400", bg: "bg-red-500/20", label: "Major" };
};

export function QuickEstimator({ teamRoster }: { teamRoster: TeamMember[] }) {
  const defaultMember = teamRoster[0]?.id ?? "";
  const [selectedSize, setSize] = useState(SIZES[0]);
  const [selectedComplexity, setComplexity] = useState(COMPLEXITY[0]);
  const [selectedMember, setMember] = useState(defaultMember);
  const [showBufferBreakdown, setShowBufferBreakdown] = useState(false);

  const member = useMemo(() => teamRoster.find((m) => m.id === selectedMember), [selectedMember, teamRoster]);
  const speed = member ? Math.max(50, Math.round(member.draftSpeed * selectedComplexity.multiplier)) : 200;

  const result = runEstimator({
    activity: `${selectedSize.label} estimate`,
    totalWords: selectedSize.words,
    draftSpeed: speed,
    bufferPercent: member?.chaosBuffer ?? 15,
    dailyHours: 4,
    teamMemberId: member?.id,
  });

  const timeColor = getTimeColor(result.hours);
  
  // Calculate raw vs buffered time
  const bufferPercent = member?.chaosBuffer ?? 15;
  const rawHours = Math.round(result.hours / (1 + bufferPercent / 100));
  const bufferHours = result.hours - rawHours;

  // Check if finish date is on weekend
  const finishDate = parseISO(result.date);
  const isWeekendFinish = isWeekend(finishDate);
  const finishDayName = format(finishDate, "EEEE");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 p-4">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-1.5 rounded-lg">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Quick Estimator</h3>
          <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-medium ml-auto">
            Push button • Get timeline
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Who is doing it? - With Avatars */}
        <div>
          <p className="text-xs font-bold uppercase text-slate-400 mb-3 flex items-center gap-1">
            <User className="w-3 h-3" />
            Who is doing it?
          </p>
          <div className="flex gap-2 flex-wrap">
            {teamRoster.map((m) => {
              const isActive = selectedMember === m.id;
              const initials = getInitials(m.name);
              const avatarColor = getAvatarColor(m.name);
              
              return (
                <button
                  key={m.id}
                  onClick={() => setMember(m.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-200 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-102"
                  }`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    isActive ? "bg-white/30" : avatarColor
                  }`}>
                    {initials}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{m.name.split(" ")[0]}</div>
                    {isActive && (
                      <div className="text-[10px] opacity-75">{m.draftSpeed} w/hr</div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* How big is it? - With size indicators */}
        <div>
          <p className="text-xs font-bold uppercase text-slate-400 mb-3">How big is it?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SIZES.map((size) => {
              const isActive = selectedSize.label === size.label;
              return (
                <button
                  key={size.label}
                  onClick={() => setSize(size)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? "bg-emerald-50 border-emerald-400 shadow-md shadow-emerald-100"
                      : "bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{size.icon}</span>
                    <div className={`font-semibold ${isActive ? "text-emerald-900" : "text-slate-800"}`}>
                      {size.label}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{size.desc}</div>
                  <div className={`text-xs mt-2 font-medium ${isActive ? "text-emerald-600" : "text-slate-400"}`}>
                    ~{size.words.toLocaleString()} words
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* How crunchy? - With Icons */}
        <div>
          <p className="text-xs font-bold uppercase text-slate-400 mb-3">How crunchy?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPLEXITY.map((complexity) => {
              const isActive = selectedComplexity.label === complexity.label;
              const Icon = complexity.icon;
              return (
                <button
                  key={complexity.label}
                  onClick={() => setComplexity(complexity)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    isActive
                      ? "bg-indigo-50 border-indigo-400 shadow-md shadow-indigo-100"
                      : "bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? "bg-indigo-200" : "bg-slate-100"}`}>
                    <Icon className={`w-4 h-4 ${isActive ? "text-indigo-700" : "text-slate-500"}`} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isActive ? "text-indigo-900" : "text-slate-800"}`}>
                      {complexity.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{complexity.desc}</div>
                    {isActive && (
                      <div className="text-xs text-indigo-600 mt-1">
                        {complexity.multiplier === 1 ? "Full speed" : `${Math.round(complexity.multiplier * 100)}% speed`}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results - Floating Card Style */}
      <div className="bg-slate-900 text-white p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Time Estimate */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-slate-400 text-xs uppercase tracking-wider">Estimated time</p>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${timeColor.bg} ${timeColor.text}`}>
                {timeColor.label}
              </span>
            </div>
            <div className={`text-4xl font-bold ${timeColor.text} flex items-center gap-2`}>
              <Clock className="w-6 h-6" />
              {result.hours} hrs
            </div>
            <p className="text-slate-400 text-sm mt-1">≈ {result.days} working days</p>
          </div>

          {/* Finish Date */}
          <div className="flex-1 lg:text-center">
            <p className="text-slate-400 text-xs uppercase tracking-wider">Finish by</p>
            <div className="text-2xl font-bold mt-1 text-white flex items-center gap-2 lg:justify-center">
              {finishDayName}
              {isWeekendFinish && (
                <span className="text-amber-400 text-sm">⚠️</span>
              )}
            </div>
            <p className="text-slate-500 text-sm">{format(finishDate, "MMM d, yyyy")}</p>
            {isWeekendFinish && (
              <p className="text-amber-400 text-xs mt-1">Weekend deadline!</p>
            )}
          </div>

          {/* Buffer Breakdown Toggle */}
          <div className="flex-1 lg:text-right">
            <button
              onClick={() => setShowBufferBreakdown(!showBufferBreakdown)}
              className="text-left lg:text-right hover:bg-slate-800 rounded-lg p-2 -m-2 transition-colors"
            >
              <p className="text-slate-400 text-xs uppercase tracking-wider flex items-center gap-1 lg:justify-end">
                Chaos Buffer
                <span className="text-slate-600 text-[10px]">(click)</span>
              </p>
              {showBufferBreakdown ? (
                <div className="text-sm mt-1 space-y-1">
                  <div className="text-slate-300">{rawHours}h raw + {bufferHours}h buffer</div>
                  <div className="text-emerald-400 font-medium">= {result.hours}h total</div>
                </div>
              ) : (
                <div className="text-lg font-medium mt-1 text-emerald-400 flex items-center gap-1 lg:justify-end">
                  <CheckCircle className="w-4 h-4" />
                  +{bufferPercent}% protected
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Member context */}
        {member && (
          <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${getAvatarColor(member.name)}`}>
                {getInitials(member.name)}
              </div>
              <span className="text-slate-400">{member.name}</span>
            </div>
            <div className="text-slate-500">
              {speed} w/hr effective • {member.weeklyCapacity}h/week capacity
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
