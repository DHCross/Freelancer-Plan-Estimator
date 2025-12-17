"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  DollarSign,
  TrendingUp,
  Package,
  Truck,
  Scale,
  AlertCircle,
  ArrowRight,
  Link2,
} from "lucide-react";
import {
  DistributionChannel,
  PrintRunConfig,
  DistributionChannelType,
} from "@/lib/types";
import { calculateRoi } from "@/lib/calculations";
import { UnifiedProjectModel } from "@/lib/unified-project-model";

const DEFAULT_CHANNELS: DistributionChannel[] = [
  {
    id: "distributor_standard",
    label: "Standard Distributor (Alliance/GTS)",
    discountPercent: 60,
    fulfillmentFeePerUnit: 0,
    platformFeePercent: 0,
  },
  {
    id: "distributor_hybrid",
    label: "Hybrid Partner (Modiphius)",
    discountPercent: 55,
    fulfillmentFeePerUnit: 2.50,
    platformFeePercent: 0,
  },
  {
    id: "kickstarter",
    label: "Kickstarter / Crowdfunding",
    discountPercent: 0,
    fulfillmentFeePerUnit: 3.00,
    platformFeePercent: 9,
  },
  {
    id: "direct",
    label: "Direct Webstore",
    discountPercent: 0,
    fulfillmentFeePerUnit: 3.00,
    platformFeePercent: 3,
  },
];

interface IntegratedFinancialModelProps {
  clientMode?: boolean;
}

export function IntegratedFinancialModel({ clientMode = false }: IntegratedFinancialModelProps) {
  const [unifiedModel] = useState(() => UnifiedProjectModel.getInstance());
  const [scenario, setScenario] = useState(unifiedModel.getProjectScenario());
  
  // Development cost now comes from Team Builder via unified model
  const devCostFromTeamBuilder = Math.round(scenario.validatedBudget);
  
  const [msrp, setMsrp] = useState(40);
  const [printRun, setPrintRun] = useState<PrintRunConfig>({
    quantity: 1000,
    unitCost: 6.00,
    freightPerUnit: 1.00,
    warehousingPerUnit: 0.25,
    tariffPercent: 0,
  });
  const [selectedChannelId, setSelectedChannelId] = useState<DistributionChannelType>("distributor_standard");

  useEffect(() => {
    setScenario(unifiedModel.getProjectScenario());
  }, [unifiedModel]);

  const selectedChannel = useMemo(
    () => DEFAULT_CHANNELS.find((c) => c.id === selectedChannelId) || DEFAULT_CHANNELS[0],
    [selectedChannelId]
  );

  const roi = useMemo(
    () => calculateRoi(devCostFromTeamBuilder, printRun, { msrp }, selectedChannel),
    [devCostFromTeamBuilder, printRun, msrp, selectedChannel]
  );

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);

  const formatNumber = (val: number) =>
    new Intl.NumberFormat("en-US").format(Math.round(val));

  if (clientMode) return null;

  return (
    <div className="space-y-6">
      {/* Data Flow Indicator */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 flex items-center justify-center gap-3 text-sm">
        <span className="font-medium text-slate-600">Team Builder</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-slate-600">Resource Validation</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-slate-600">Scenario Engine</span>
        <ArrowRight className="w-4 h-4 text-slate-400" />
        <span className="font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">Financial Model</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inputs Column */}
        <div className="space-y-6">
          {/* Dynamic Development Cost */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                <Link2 className="w-5 h-5" />
                Development Cost
              </h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Auto-populated</span>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">
              {formatCurrency(devCostFromTeamBuilder)}
            </div>
            <p className="text-xs text-blue-600">
              Pulled automatically from Team Builder&apos;s Total Project Cost
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-600" />
              Pricing
            </h3>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Target MSRP
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                <input
                  type="number"
                  value={msrp}
                  onChange={(e) => setMsrp(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-emerald-600" />
              Print Run Specs
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Quantity</label>
                  <input
                    type="number"
                    value={printRun.quantity}
                    onChange={(e) => setPrintRun({ ...printRun, quantity: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Unit Print Cost</label>
                  <div className="relative">
                    <span className="absolute left-2 top-2 text-slate-400 text-xs">$</span>
                    <input
                      type="number"
                      step="0.10"
                      value={printRun.unitCost}
                      onChange={(e) => setPrintRun({ ...printRun, unitCost: Number(e.target.value) })}
                      className="w-full pl-5 pr-2 py-2 border border-slate-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Freight/Unit</label>
                  <div className="relative">
                    <span className="absolute left-2 top-2 text-slate-400 text-xs">$</span>
                    <input
                      type="number"
                      step="0.10"
                      value={printRun.freightPerUnit}
                      onChange={(e) => setPrintRun({ ...printRun, freightPerUnit: Number(e.target.value) })}
                      className="w-full pl-5 pr-2 py-2 border border-slate-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Tariff %</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={printRun.tariffPercent}
                      onChange={(e) => setPrintRun({ ...printRun, tariffPercent: Number(e.target.value) })}
                      className="w-full pl-3 pr-6 py-2 border border-slate-200 rounded-lg text-sm"
                    />
                    <span className="absolute right-3 top-2 text-slate-400 text-xs">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Selection & Results */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-600" />
              Distribution Channel
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEFAULT_CHANNELS.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannelId(channel.id)}
                  className={`flex flex-col items-start p-4 rounded-xl border transition-all ${
                    selectedChannelId === channel.id
                      ? "bg-blue-50 border-blue-500 ring-1 ring-blue-500"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className={`font-semibold ${selectedChannelId === channel.id ? "text-blue-900" : "text-slate-700"}`}>
                    {channel.label}
                  </span>
                  <div className="mt-2 text-xs space-y-1 text-slate-500">
                    <div className="flex justify-between w-full gap-4">
                      <span>Discount:</span>
                      <span className="font-mono font-medium">{channel.discountPercent}%</span>
                    </div>
                    <div className="flex justify-between w-full gap-4">
                      <span>Platform Fee:</span>
                      <span className="font-mono font-medium">{channel.platformFeePercent}%</span>
                    </div>
                    <div className="flex justify-between w-full gap-4">
                      <span>Fulfillment:</span>
                      <span className="font-mono font-medium">${channel.fulfillmentFeePerUnit.toFixed(2)}/unit</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Unit Economics Card */}
            <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-lg">
              <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-4">Unit Economics</h4>

              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-slate-700 pb-2">
                  <span className="text-slate-300">MSRP</span>
                  <span className="font-mono text-lg">{formatCurrency(msrp)}</span>
                </div>

                <div className="flex justify-between items-end text-rose-400 text-sm">
                  <span>Channel Cut ({selectedChannel.discountPercent}%)</span>
                  <span className="font-mono">-{formatCurrency(msrp * (selectedChannel.discountPercent / 100))}</span>
                </div>

                <div className="flex justify-between items-end text-rose-400 text-sm">
                  <span>COGS (Print/Ship/Fees)</span>
                  <span className="font-mono">-{formatCurrency(roi.totalCogs / printRun.quantity)}</span>
                </div>

                <div className="pt-4 flex justify-between items-end">
                  <span className="font-bold text-emerald-400">Net Profit Per Unit</span>
                  <span className="font-mono text-2xl font-bold text-emerald-400">
                    {formatCurrency(roi.netRevenuePerUnit)}
                  </span>
                </div>
              </div>
            </div>

            {/* Total ROI Card */}
            <div className={`rounded-xl p-6 shadow-lg border ${
              roi.netProfit > 0 ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"
            }`}>
              <h4 className={`text-sm uppercase tracking-wider mb-4 ${
                roi.netProfit > 0 ? "text-emerald-700" : "text-rose-700"
              }`}>
                Total Project ROI
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Break-Even Units</span>
                  <span className={`font-mono font-bold text-lg ${
                    roi.breakEvenUnits > printRun.quantity ? "text-rose-600" : "text-slate-800"
                  }`}>
                    {formatNumber(roi.breakEvenUnits)} / {formatNumber(printRun.quantity)}
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${roi.breakEvenUnits > printRun.quantity ? "bg-rose-500" : "bg-emerald-500"}`}
                    style={{ width: `${Math.min(100, (printRun.quantity / roi.breakEvenUnits) * 100)}%` }}
                  />
                </div>

                <div className="pt-2 flex justify-between items-end border-t border-slate-200/50">
                  <span className="text-slate-600 font-medium">Net Profit (Loss)</span>
                  <span className={`font-mono text-2xl font-bold ${
                    roi.netProfit > 0 ? "text-emerald-700" : "text-rose-700"
                  }`}>
                    {formatCurrency(roi.netProfit)}
                  </span>
                </div>

                {roi.netProfit < 0 && (
                  <div className="flex items-start gap-2 text-xs text-rose-600 bg-rose-100/50 p-2 rounded">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <p>
                      Warning: This print run does not cover development costs.
                      You need to sell {formatNumber(roi.breakEvenUnits - printRun.quantity)} more units.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Data Source Note */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
            <div className="flex items-center gap-2 mb-2">
              <Link2 className="w-4 h-4 text-blue-500" />
              <span className="font-semibold text-slate-800">Integrated Data Flow</span>
            </div>
            <p>
              Development Cost is automatically populated from the Team Builder&apos;s Total Project Cost 
              (currently {formatCurrency(devCostFromTeamBuilder)}). This ensures ROI calculations 
              reflect your actual team configuration and project scope.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
