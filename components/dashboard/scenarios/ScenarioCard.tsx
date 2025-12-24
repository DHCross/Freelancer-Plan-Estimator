"use client";

import { Calculator, AlertTriangle, Clock, DollarSign, Copy, Trash2, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Project } from "@/lib/types";

export interface ScenarioConfig {
  teamSize: number;
  budget: number;
  timeline: number; // months
  wordCount: number;
  complexity: "simple" | "standard" | "complex";
  quality: "basic" | "professional" | "premium";
}

export interface ScenarioResult {
  feasible: boolean;
  totalCost: number;
  timeline: number;
  quality: string;
  bottlenecks: string[];
  riskLevel: "low" | "medium" | "high";
  recommendations: string[];
}

interface ScenarioCardProps {
  id: string;
  config: ScenarioConfig;
  result: ScenarioResult | null;
  onUpdate: (id: string, config: ScenarioConfig, result: ScenarioResult | null) => void;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
  projects?: Project[];
  baselineConfig?: ScenarioConfig;
}

export function ScenarioCard({
  id,
  config,
  result,
  onUpdate,
  onDelete,
  onDuplicate,
  projects = [],
  baselineConfig
}: ScenarioCardProps) {

  const calculateResult = (currentConfig: ScenarioConfig): ScenarioResult => {
    // Base productivity rates (words/hour per person)
    const complexityRates = {
      simple: 200,    // Simple rules, straightforward narrative
      standard: 150,  // Standard TTRPG complexity  
      complex: 100    // Pathfinder 1e level crunch
    };

    const qualityMultipliers = {
      basic: 1.0,      // Just get it done
      professional: 1.3, // Professional polish
      premium: 1.8    // William's table-ready standards
    };

    // Team role distribution (from your research)
    const roleDistribution = {
      writing: 0.45,      // 45% writing
      editing: 0.15,      // 15% editing  
      layout: 0.15,      // 15% layout
      coordination: 0.15, // 15% meetings/sync
      qa: 0.10           // 10% QA/playtesting
    };

    // Hourly rates by role
    const hourlyRates = {
      writing: 20,
      editing: 17,
      layout: 25,
      coordination: 15,
      qa: 18
    };

    // Calculate base hours needed
    const baseWordsPerHour = complexityRates[currentConfig.complexity];
    const qualityMultiplier = qualityMultipliers[currentConfig.quality];
    const effectiveWordsPerHour = baseWordsPerHour / qualityMultiplier;
    
    const totalWritingHours = (currentConfig.wordCount / effectiveWordsPerHour) / currentConfig.teamSize;
    
    // Calculate hours for each role
    const roleHours = {
      writing: totalWritingHours,
      editing: totalWritingHours * roleDistribution.editing / roleDistribution.writing,
      layout: totalWritingHours * roleDistribution.layout / roleDistribution.writing,
      coordination: totalWritingHours * roleDistribution.coordination / roleDistribution.writing,
      qa: totalWritingHours * roleDistribution.qa / roleDistribution.writing
    };

    // Calculate total cost
    const totalCost = Object.entries(roleHours).reduce(
      (total, [role, hours]) => total + (hours * hourlyRates[role as keyof typeof hourlyRates]),
      0
    );

    // Calculate timeline (weeks)
    const weeklyHoursPerPerson = 20; // Your realistic capacity
    const totalWeeklyHours = currentConfig.teamSize * weeklyHoursPerPerson;
    const totalProjectHours = Object.values(roleHours).reduce((sum, hours) => sum + hours, 0);
    const requiredWeeks = Math.ceil(totalProjectHours / totalWeeklyHours);
    const requiredMonths = Math.ceil(requiredWeeks / 4);

    // Identify bottlenecks
    const bottlenecks: string[] = [];
    if (currentConfig.budget < totalCost * 0.8) bottlenecks.push("Insufficient budget for quality target");
    if (currentConfig.timeline < requiredMonths * 0.8) bottlenecks.push("Timeline too aggressive for team size");
    if (currentConfig.complexity === "complex" && currentConfig.teamSize < 3) bottlenecks.push("Complex project needs larger team");
    if (currentConfig.quality === "premium" && currentConfig.budget < 30000) bottlenecks.push("Premium quality requires higher budget");

    // Risk assessment
    let riskLevel: "low" | "medium" | "high" = "low";
    if (bottlenecks.length >= 2) riskLevel = "high";
    else if (bottlenecks.length >= 1) riskLevel = "medium";

    // Generate recommendations
    const recommendations: string[] = [];
    if (currentConfig.budget < totalCost) recommendations.push(`Increase budget to $${Math.round(totalCost).toLocaleString()} or reduce scope`);
    if (currentConfig.timeline < requiredMonths) recommendations.push(`Extend timeline to ${requiredMonths} months or increase team size`);
    if (currentConfig.complexity === "complex" && currentConfig.teamSize < 3) recommendations.push("Add team members or reduce complexity");
    if (riskLevel === "high") recommendations.push("Consider reducing scope or increasing both budget and timeline");

    return {
      feasible: currentConfig.budget >= totalCost && currentConfig.timeline >= requiredMonths,
      totalCost,
      timeline: requiredMonths,
      quality: currentConfig.quality,
      bottlenecks,
      riskLevel,
      recommendations
    };
  };

  const handleConfigChange = (newConfig: Partial<ScenarioConfig>) => {
    const updatedConfig = { ...config, ...newConfig };
    const newResult = calculateResult(updatedConfig);
    onUpdate(id, updatedConfig, newResult);
  };

  // Run initial calculation if no result exists
  useEffect(() => {
    if (!result) {
      const initialResult = calculateResult(config);
      onUpdate(id, config, initialResult);
    }
  }, []);

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case "low": return "text-emerald-600 bg-emerald-50";
      case "medium": return "text-amber-600 bg-amber-50";
      case "high": return "text-rose-600 bg-rose-50";
      default: return "text-slate-600 bg-slate-50";
    }
  };

  const loadBaseline = (projectId: string) => {
    const project = projects.find(p => p.id.toString() === projectId);
    if (project) {
      // Guess configuration from project data
      // This is an estimation since Project doesn't map 1:1 to ScenarioConfig
      const newConfig: Partial<ScenarioConfig> = {
        wordCount: project.targetWords || 50000,
        // Heuristics for other fields if available in project
        // For now we just load word count as it is the most reliable mapper
      };
      handleConfigChange(newConfig);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-slate-900">Scenario Configuration</h3>
        </div>
        <div className="flex items-center gap-2">
           {projects.length > 0 && (
            <select
              className="text-xs border border-slate-200 rounded px-2 py-1 text-slate-600 max-w-[150px]"
              onChange={(e) => loadBaseline(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Load Baseline...</option>
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          )}
          {onDuplicate && (
            <button onClick={() => onDuplicate(id)} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors" title="Duplicate Scenario">
              <Copy className="w-4 h-4" />
            </button>
          )}
          {onDelete && (
            <button onClick={() => onDelete(id)} className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors" title="Remove Scenario">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Team Size</label>
          <input
            type="range"
            min="1"
            max="5"
            value={config.teamSize}
            onChange={(e) => handleConfigChange({ teamSize: parseInt(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
             <span>{config.teamSize} people</span>
             {baselineConfig && (
               <span className="text-slate-400">Baseline: {baselineConfig.teamSize}</span>
             )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Budget</label>
          <input
            type="number"
            value={config.budget}
            onChange={(e) => handleConfigChange({ budget: parseInt(e.target.value) || 0 })}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg"
          />
          {baselineConfig && (
             <div className="text-xs text-slate-400 text-right mt-1">
               Baseline: ${baselineConfig.budget.toLocaleString()}
             </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Timeline (months)</label>
          <input
            type="number"
            min="1"
            max="12"
            value={config.timeline}
            onChange={(e) => handleConfigChange({ timeline: parseInt(e.target.value) || 1 })}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg"
          />
           {baselineConfig && (
             <div className="text-xs text-slate-400 text-right mt-1">
               Baseline: {baselineConfig.timeline}mo
             </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Word Count</label>
          <select
            value={config.wordCount}
            onChange={(e) => handleConfigChange({ wordCount: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg"
          >
            <option value={15000}>Micro Module (15k)</option>
            <option value={50000}>Small Adventure (50k)</option>
            <option value={100000}>Large Adventure (100k)</option>
            <option value={150000}>Core Rulebook (150k)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Complexity</label>
          <select
            value={config.complexity}
            onChange={(e) => handleConfigChange({ complexity: e.target.value as any })}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg"
          >
            <option value="simple">Simple (5e style)</option>
            <option value="standard">Standard TTRPG</option>
            <option value="complex">Complex (Pathfinder 1e)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Quality Target</label>
          <select
            value={config.quality}
            onChange={(e) => handleConfigChange({ quality: e.target.value as any })}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg"
          >
            <option value="basic">Basic (functional)</option>
            <option value="professional">Professional (market ready)</option>
            <option value="premium">Premium (William's table)</option>
          </select>
        </div>
      </div>

      {/* Dynamic Results Section (Real-time) */}
      {result && (
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className={`p-4 rounded-lg border ${result.feasible ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
            <div className="flex items-center justify-between">
              <span className="font-semibold">{result.feasible ? '✅ Feasible' : '❌ Not Feasible'}</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(result.riskLevel)}`}>
                {result.riskLevel.toUpperCase()} RISK
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-medium">Total Cost</span>
              </div>
              <div className="text-xl font-bold text-slate-900">${Math.round(result.totalCost).toLocaleString()}</div>
              <div className="text-xs text-slate-500">vs ${config.budget.toLocaleString()} budget</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Timeline</span>
              </div>
              <div className="text-xl font-bold text-slate-900">{result.timeline} months</div>
              <div className="text-xs text-slate-500">vs {config.timeline} months requested</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium">Bottlenecks</span>
              </div>
              <div className="text-lg font-bold text-slate-900">{result.bottlenecks.length}</div>
              <div className="text-xs text-slate-500">critical issues</div>
            </div>
          </div>

          {result.bottlenecks.length > 0 && (
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
              <h4 className="font-semibold text-rose-800 mb-2">Bottlenecks</h4>
              <ul className="text-sm text-rose-700 space-y-1">
                {result.bottlenecks.map((bottleneck, i) => (
                  <li key={i}>• {bottleneck}</li>
                ))}
              </ul>
            </div>
          )}

          {result.recommendations.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Recommendations</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                {result.recommendations.map((rec, i) => (
                  <li key={i}>• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
