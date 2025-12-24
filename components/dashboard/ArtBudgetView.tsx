"use client";

import React, { useState, useMemo } from "react";
import { Palette, ImageIcon, DollarSign, TrendingUp, Info } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { 
  COVER_ART_RATE_DEFAULT, 
  INTERIOR_SPOT_DEFAULT, 
  INTERIOR_FULL_DEFAULT, 
  REGIONAL_MAP_DEFAULT, 
  ENCOUNTER_MAP_DEFAULT, 
  A1_ART_BASELINE, 
  ART_DENSITY_PRESETS, 
  ArtDensityPreset 
} from "@/lib/constants";
import { estimateProjectArt } from "@/lib/calculations";

interface ArtBudgetViewProps {
  clientMode?: boolean;
  projectWordCount?: number;
  projectType?: string;
}

export function ArtBudgetView({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clientMode = false, 
  projectWordCount = 97000,
  projectType = "Large Adventure" 
}: ArtBudgetViewProps) {
  // Art asset counts (based on A1 baseline)
  const [regionalMaps, setRegionalMaps] = useState(A1_ART_BASELINE.regionalMaps);
  const [encounterMaps, setEncounterMaps] = useState(A1_ART_BASELINE.encounterMaps);
  const [interiorIllustrations, setInteriorIllustrations] = useState(A1_ART_BASELINE.interiorIllustrations);
  const [spotArt, setSpotArt] = useState(A1_ART_BASELINE.spotArt);
  const [npcPortraits, setNpcPortraits] = useState(A1_ART_BASELINE.npcPortraits);
  const [covers, setCovers] = useState(A1_ART_BASELINE.covers);
  
  // Rates
  const [coverRate, setCoverRate] = useState(COVER_ART_RATE_DEFAULT);
  const [spotRate, setSpotRate] = useState(INTERIOR_SPOT_DEFAULT);
  const [fullRate, setFullRate] = useState(INTERIOR_FULL_DEFAULT);
  const [regionalMapRate, setRegionalMapRate] = useState(REGIONAL_MAP_DEFAULT);
  const [encounterMapRate, setEncounterMapRate] = useState(ENCOUNTER_MAP_DEFAULT);
  const [portraitRate, setPortraitRate] = useState(150);
  
  const [marketPreset, setMarketPreset] = useState<ArtDensityPreset>("osr");

  // Calculate totals
  const artBudget = useMemo(() => {
    const coverCost = covers * coverRate;
    const spotCost = spotArt * spotRate;
    const fullCost = interiorIllustrations * fullRate;
    const regionalCost = regionalMaps * regionalMapRate;
    const encounterCost = encounterMaps * encounterMapRate;
    const portraitCost = npcPortraits * portraitRate;
    
    const totalPieces = covers + spotArt + interiorIllustrations + regionalMaps + encounterMaps + npcPortraits;
    const totalCost = coverCost + spotCost + fullCost + regionalCost + encounterCost + portraitCost;
    
    return {
      coverCost,
      spotCost,
      fullCost,
      regionalCost,
      encounterCost,
      portraitCost,
      totalPieces,
      totalCost,
    };
  }, [covers, spotArt, interiorIllustrations, regionalMaps, encounterMaps, npcPortraits, 
      coverRate, spotRate, fullRate, regionalMapRate, encounterMapRate, portraitRate]);

  // Market comparison
  const marketComparison = useMemo(() => {
    return {
      osr: estimateProjectArt(projectWordCount, projectType, "osr"),
      "5e": estimateProjectArt(projectWordCount, projectType, "5e"),
      pathfinder: estimateProjectArt(projectWordCount, projectType, "pathfinder"),
    };
  }, [projectWordCount, projectType]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <Palette className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-900">Art Assets Budget</h2>
        </div>
        <p className="text-sm text-purple-700">
          Plan and budget for illustrations, maps, portraits, and covers. Compare against industry standards.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Asset Counts */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-slate-600" />
              Asset Inventory
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Covers */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <label className="block text-xs font-medium text-slate-500 mb-1">Covers</label>
                <input
                  type="number"
                  value={covers}
                  onChange={(e) => setCovers(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm"
                  min="0"
                />
                <div className="text-xs text-slate-400 mt-1">@ {formatCurrency(coverRate)} each</div>
              </div>

              {/* Interior Illustrations */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Illustrations</label>
                <input
                  type="number"
                  value={interiorIllustrations}
                  onChange={(e) => setInteriorIllustrations(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm"
                  min="0"
                />
                <div className="text-xs text-slate-400 mt-1">@ {formatCurrency(fullRate)} each</div>
              </div>

              {/* Spot Art */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <label className="block text-xs font-medium text-slate-500 mb-1">Spot Art</label>
                <input
                  type="number"
                  value={spotArt}
                  onChange={(e) => setSpotArt(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm"
                  min="0"
                />
                <div className="text-xs text-slate-400 mt-1">@ {formatCurrency(spotRate)} each</div>
              </div>

              {/* NPC Portraits */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <label className="block text-xs font-medium text-slate-500 mb-1">NPC Portraits</label>
                <input
                  type="number"
                  value={npcPortraits}
                  onChange={(e) => setNpcPortraits(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm"
                  min="0"
                />
                <div className="text-xs text-slate-400 mt-1">@ {formatCurrency(portraitRate)} each</div>
              </div>

              {/* Regional Maps */}
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <label className="block text-xs font-medium text-purple-700 mb-1">Regional Maps</label>
                <input
                  type="number"
                  value={regionalMaps}
                  onChange={(e) => setRegionalMaps(Number(e.target.value))}
                  className="w-full border border-purple-200 rounded px-2 py-1 text-sm"
                  min="0"
                />
                <div className="text-xs text-purple-500 mt-1">@ {formatCurrency(regionalMapRate)} each</div>
              </div>

              {/* Encounter Maps */}
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <label className="block text-xs font-medium text-purple-700 mb-1">Encounter Maps</label>
                <input
                  type="number"
                  value={encounterMaps}
                  onChange={(e) => setEncounterMaps(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm"
                  min="0"
                />
                <div className="text-xs text-purple-500 mt-1">@ {formatCurrency(encounterMapRate)} each</div>
              </div>
            </div>
          </div>

          {/* Rate Adjustments */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-slate-600" />
              Rate Adjustments
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <label className="block">
                <span className="text-xs text-slate-500">Cover Rate</span>
                <input
                  type="number"
                  value={coverRate}
                  onChange={(e) => setCoverRate(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Full Illustration</span>
                <input
                  type="number"
                  value={fullRate}
                  onChange={(e) => setFullRate(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Spot Art</span>
                <input
                  type="number"
                  value={spotRate}
                  onChange={(e) => setSpotRate(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Portrait</span>
                <input
                  type="number"
                  value={portraitRate}
                  onChange={(e) => setPortraitRate(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Regional Map</span>
                <input
                  type="number"
                  value={regionalMapRate}
                  onChange={(e) => setRegionalMapRate(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 mt-1"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Encounter Map</span>
                <input
                  type="number"
                  value={encounterMapRate}
                  onChange={(e) => setEncounterMapRate(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1 mt-1"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Summary & Market Comparison */}
        <div className="space-y-4">
          {/* Budget Summary */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-4">Budget Summary</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Covers ({covers})</span>
                <span className="font-medium">{formatCurrency(artBudget.coverCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Full Illustrations ({interiorIllustrations})</span>
                <span className="font-medium">{formatCurrency(artBudget.fullCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Spot Art ({spotArt})</span>
                <span className="font-medium">{formatCurrency(artBudget.spotCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Portraits ({npcPortraits})</span>
                <span className="font-medium">{formatCurrency(artBudget.portraitCost)}</span>
              </div>
              <div className="flex justify-between text-purple-700">
                <span>Regional Maps ({regionalMaps})</span>
                <span className="font-medium">{formatCurrency(artBudget.regionalCost)}</span>
              </div>
              <div className="flex justify-between text-purple-700">
                <span>Encounter Maps ({encounterMaps})</span>
                <span className="font-medium">{formatCurrency(artBudget.encounterCost)}</span>
              </div>
              
              <div className="border-t border-slate-200 pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-purple-600">{formatCurrency(artBudget.totalCost)}</span>
                </div>
                <div className="text-xs text-slate-500 text-right">
                  {artBudget.totalPieces} pieces
                </div>
              </div>
            </div>
          </div>

          {/* Market Comparison */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-slate-600" />
              Market Comparison
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Based on {formatNumber(projectWordCount)} words ({projectType})
            </p>
            
            <div className="space-y-3">
              {(["osr", "5e", "pathfinder"] as const).map((preset) => {
                const data = marketComparison[preset];
                const config = ART_DENSITY_PRESETS[preset];
                const isSelected = marketPreset === preset;
                
                return (
                  <button
                    key={preset}
                    onClick={() => setMarketPreset(preset)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      isSelected 
                        ? "bg-purple-50 border-purple-300" 
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className={`font-medium text-sm ${isSelected ? "text-purple-900" : "text-slate-700"}`}>
                          {config.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          ~{formatNumber(config.wordsPerPiece)} words/piece
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${isSelected ? "text-purple-600" : "text-slate-700"}`}>
                          {formatCurrency(data.totalCost)}
                        </div>
                        <div className="text-xs text-slate-500">
                          {data.totalPieces} pieces
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-3 p-2 bg-slate-100 rounded text-xs text-slate-600 flex items-start gap-2">
              <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>{ART_DENSITY_PRESETS[marketPreset].description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
