"use client";

import React, { useState, useMemo } from "react";
import { Calendar, AlertTriangle, CheckCircle, Clock, ArrowLeft, Shield, Printer } from "lucide-react";
import { addDays, subDays, format, parseISO, differenceInDays, isWeekend } from "date-fns";

interface LayoutSafeDeadlineCalculatorProps {
  onApplyDates?: (dates: { writingDeadline: string; contentLock: string }) => void;
}

export function LayoutSafeDeadlineCalculator({ onApplyDates }: LayoutSafeDeadlineCalculatorProps) {
  // Target date (hard constraint)
  const [targetDate, setTargetDate] = useState("2025-01-31");
  
  // Phase durations
  const [layoutDays, setLayoutDays] = useState(7);
  const [reviewDays, setReviewDays] = useState(3);
  const [chaosBufferType, setChaosBufferType] = useState<"percent" | "fixed">("percent");
  const [chaosBufferValue, setChaosBufferValue] = useState(15);
  
  // Calculate backwards
  const calculations = useMemo(() => {
    const target = parseISO(targetDate);
    
    // Calculate chaos buffer in days
    const totalWorkDays = layoutDays + reviewDays;
    const chaosBufferDays = chaosBufferType === "percent" 
      ? Math.ceil(totalWorkDays * (chaosBufferValue / 100))
      : chaosBufferValue;
    
    // Work backwards from target
    const contentLockDate = subDays(target, layoutDays + chaosBufferDays);
    const writingDeadline = subDays(contentLockDate, reviewDays);
    
    // Calculate days from today
    const today = new Date();
    const daysUntilWriting = differenceInDays(writingDeadline, today);
    const daysUntilContentLock = differenceInDays(contentLockDate, today);
    const daysUntilTarget = differenceInDays(target, today);
    
    // Check for weekend conflicts
    const writingOnWeekend = isWeekend(writingDeadline);
    const contentLockOnWeekend = isWeekend(contentLockDate);
    
    // Risk assessment
    let risk: "safe" | "tight" | "critical" = "safe";
    if (daysUntilWriting < 7) risk = "critical";
    else if (daysUntilWriting < 14) risk = "tight";
    
    return {
      target,
      contentLockDate,
      writingDeadline,
      chaosBufferDays,
      daysUntilWriting,
      daysUntilContentLock,
      daysUntilTarget,
      writingOnWeekend,
      contentLockOnWeekend,
      risk,
      totalWorkDays,
    };
  }, [targetDate, layoutDays, reviewDays, chaosBufferType, chaosBufferValue]);

  const getRiskStyles = (risk: string) => {
    switch (risk) {
      case "critical":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-700",
          badge: "bg-red-600",
        };
      case "tight":
        return {
          bg: "bg-amber-50",
          border: "border-amber-200",
          text: "text-amber-700",
          badge: "bg-amber-500",
        };
      default:
        return {
          bg: "bg-emerald-50",
          border: "border-emerald-200",
          text: "text-emerald-700",
          badge: "bg-emerald-600",
        };
    }
  };

  const riskStyles = getRiskStyles(calculations.risk);

  const formatDateNice = (date: Date) => format(date, "EEE, MMM d");
  const formatDateISO = (date: Date) => format(date, "yyyy-MM-dd");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`${riskStyles.bg} ${riskStyles.border} border rounded-xl p-5`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${riskStyles.badge} p-2 rounded-lg`}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Layout-Safe Deadline Calculator</h3>
              <p className="text-sm text-slate-600">Protect downstream production by calculating upstream deadlines</p>
            </div>
          </div>
          <div className={`${riskStyles.badge} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
            {calculations.risk === "critical" ? "🚨 Critical" : calculations.risk === "tight" ? "⚠️ Tight" : "✅ Safe"}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              Target Date (Hard Constraint)
            </h4>
            
            <div className="space-y-3">
              <label className="block">
                <span className="text-sm text-slate-600">Ready to Print / Ship Date</span>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2.5 text-lg font-medium"
                />
              </label>
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                <Printer className="w-3 h-3 inline mr-1" />
                {calculations.daysUntilTarget} days from today
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              Phase Durations
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-slate-600">Layout Phase</span>
                <div className="relative mt-1">
                  <input
                    type="number"
                    value={layoutDays}
                    onChange={(e) => setLayoutDays(Number(e.target.value))}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 pr-12"
                    min="1"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">days</span>
                </div>
                <span className="text-xs text-slate-400">Martin's layout time</span>
              </label>
              
              <label className="block">
                <span className="text-sm text-slate-600">Review Cycle</span>
                <div className="relative mt-1">
                  <input
                    type="number"
                    value={reviewDays}
                    onChange={(e) => setReviewDays(Number(e.target.value))}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 pr-12"
                    min="0"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">days</span>
                </div>
                <span className="text-xs text-slate-400">Back-and-forth edits</span>
              </label>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Chaos Buffer
            </h4>
            
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setChaosBufferType("percent")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  chaosBufferType === "percent"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Percentage
              </button>
              <button
                onClick={() => setChaosBufferType("fixed")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  chaosBufferType === "fixed"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Fixed Days
              </button>
            </div>
            
            <div className="relative">
              <input
                type="number"
                value={chaosBufferValue}
                onChange={(e) => setChaosBufferValue(Number(e.target.value))}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 pr-12"
                min="0"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                {chaosBufferType === "percent" ? "%" : "days"}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              = {calculations.chaosBufferDays} days emergency padding
            </p>
          </div>
        </div>

        {/* Outputs - Timeline Visualization */}
        <div className="space-y-4">
          <div className="bg-slate-900 text-white rounded-xl p-5">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Calculated Deadlines (Working Backwards)
            </h4>
            
            <div className="space-y-4">
              {/* Writing Deadline */}
              <div className={`rounded-lg p-4 ${
                calculations.risk === "critical" ? "bg-red-900/50 border border-red-700" :
                calculations.risk === "tight" ? "bg-amber-900/50 border border-amber-700" :
                "bg-emerald-900/50 border border-emerald-700"
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm opacity-75">✅ Writing Deadline</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    calculations.daysUntilWriting < 0 ? "bg-red-600" :
                    calculations.daysUntilWriting < 7 ? "bg-amber-600" : "bg-emerald-600"
                  }`}>
                    {calculations.daysUntilWriting < 0 
                      ? `${Math.abs(calculations.daysUntilWriting)} days ago!`
                      : `${calculations.daysUntilWriting} days left`
                    }
                  </span>
                </div>
                <div className="text-2xl font-bold">{formatDateNice(calculations.writingDeadline)}</div>
                {calculations.writingOnWeekend && (
                  <div className="text-xs text-amber-400 mt-1">⚠️ Falls on a weekend</div>
                )}
              </div>

              {/* Content Lock */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm opacity-75">⚠️ Content Lock (Layout Start)</span>
                  <span className="text-xs bg-slate-600 px-2 py-0.5 rounded">
                    {calculations.daysUntilContentLock} days left
                  </span>
                </div>
                <div className="text-2xl font-bold">{formatDateNice(calculations.contentLockDate)}</div>
                {calculations.contentLockOnWeekend && (
                  <div className="text-xs text-amber-400 mt-1">⚠️ Falls on a weekend</div>
                )}
                <div className="text-xs opacity-50 mt-1">
                  No more text changes after this date
                </div>
              </div>

              {/* Target */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm opacity-75">🛑 Critical Path End</span>
                  <span className="text-xs bg-slate-600 px-2 py-0.5 rounded">Fixed</span>
                </div>
                <div className="text-2xl font-bold">{formatDateNice(calculations.target)}</div>
                <div className="text-xs opacity-50 mt-1">
                  Ready for print/ship
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Breakdown */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-3">Timeline Breakdown</h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Review/Revision Cycle</span>
                <span className="font-medium">{reviewDays} days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Layout Phase</span>
                <span className="font-medium">{layoutDays} days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Chaos Buffer</span>
                <span className="font-medium text-amber-600">+{calculations.chaosBufferDays} days</span>
              </div>
              <div className="flex justify-between items-center py-2 font-bold">
                <span className="text-slate-900">Total Protected Time</span>
                <span>{layoutDays + reviewDays + calculations.chaosBufferDays} days</span>
              </div>
            </div>

            {/* Layout Availability Reminder */}
            <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-indigo-900 uppercase mb-1">Layout Availability Window</p>
                  <p className="text-sm text-indigo-800">
                    You must be available for quick decisions from <strong>{formatDateNice(calculations.contentLockDate)}</strong> to <strong>{formatDateNice(calculations.target)}</strong>.
                  </p>
                  <p className="text-xs text-indigo-600 mt-1">
                    Martin needs rapid turnaround on layout questions during this phase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          {onApplyDates && (
            <button
              onClick={() => onApplyDates({
                writingDeadline: formatDateISO(calculations.writingDeadline),
                contentLock: formatDateISO(calculations.contentLockDate),
              })}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg"
            >
              Apply These Dates to Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
