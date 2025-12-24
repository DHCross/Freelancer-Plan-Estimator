import React, { useState, useMemo } from "react";
import {
    DollarSign,
    TrendingUp,
    Package,
    Truck,
    Scale,
    AlertCircle,
    BarChart3,
    Target,
    Activity,
} from "lucide-react";
import {
    DistributionChannel,
    PrintRunConfig,
    ProductPricing,
    RoiResult,
    DistributionChannelType,
} from "@/lib/types";
import { calculateRoi } from "@/lib/calculations";
import { getBudgetColor } from "@/lib/colors";

// Default Channels based on user data
const DEFAULT_CHANNELS: DistributionChannel[] = [
    {
        id: "distributor_standard",
        label: "Standard Distributor (Alliance/GTS)",
        discountPercent: 60, // 60% off MSRP
        fulfillmentFeePerUnit: 0, // Usually bulk shipped to them
        platformFeePercent: 0,
    },
    {
        id: "distributor_hybrid",
        label: "Hybrid Partner (Modiphius)",
        discountPercent: 55, // User estimate: "50-60% is normal", Modiphius acts as distributor.
        fulfillmentFeePerUnit: 2.50, // Pick & Pack fee (estimated for hybrid fulfillment)
        platformFeePercent: 0,
    },
    {
        id: "kickstarter",
        label: "Kickstarter / Crowdfunding",
        discountPercent: 0, // Full MSRP
        fulfillmentFeePerUnit: 3.00, // 3PL Pick & Pack
        platformFeePercent: 9, // 5% KS + ~4% Processing (incl. fixed fee)
    },
    {
        id: "direct",
        label: "Direct Webstore",
        discountPercent: 0,
        fulfillmentFeePerUnit: 3.00,
        platformFeePercent: 3, // Stripe only
    },
];

interface FinancialModelProps {
    defaultDevCost?: number;
}

export function FinancialModel({ defaultDevCost = 20000 }: FinancialModelProps) {
    const [devCost, setDevCost] = useState(defaultDevCost);
    const [msrp, setMsrp] = useState(40);
    const [breakEvenUnits, setBreakEvenUnits] = useState(0); // For interactive slider

    const [printRun, setPrintRun] = useState<PrintRunConfig>({
        quantity: 1000,
        unitCost: 6.00,
        freightPerUnit: 1.00,
        warehousingPerUnit: 0.25,
        tariffPercent: 0,
    });

    const [selectedChannelId, setSelectedChannelId] = useState<DistributionChannelType>("distributor_standard");

    const selectedChannel = useMemo(
        () => DEFAULT_CHANNELS.find((c) => c.id === selectedChannelId) || DEFAULT_CHANNELS[0],
        [selectedChannelId]
    );

    const roi = useMemo(
        () => calculateRoi(devCost, printRun, { msrp }, selectedChannel),
        [devCost, printRun, msrp, selectedChannel]
    );

    // Update break-even slider when ROI changes
    useMemo(() => {
        setBreakEvenUnits(roi.breakEvenUnits);
    }, [roi.breakEvenUnits]);

    // Calculate break-even scenarios for different quantities
    const breakEvenScenarios = useMemo(() => {
        const scenarios = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
        return scenarios.map(multiplier => {
            const quantity = Math.round(roi.breakEvenUnits * multiplier);
            const scenarioRoi = calculateRoi(devCost, { ...printRun, quantity }, { msrp }, selectedChannel);
            return {
                quantity,
                multiplier,
                profit: scenarioRoi.netProfit,
                profitPerUnit: scenarioRoi.netRevenuePerUnit,
                margin: (scenarioRoi.netRevenuePerUnit / msrp) * 100
            };
        });
    }, [devCost, printRun, msrp, selectedChannel, roi.breakEvenUnits]);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);

    const formatNumber = (val: number) =>
        new Intl.NumberFormat("en-US").format(Math.round(val));

    return (
        <div className="space-y-6">
            {/* Header with subtitle */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                        <DollarSign className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Financial Model</h2>
                        <p className="text-sm text-slate-600">Model unit economics and profitability for the selected product.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Inputs Column */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-indigo-600" />
                            Project Parameters
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-1">
                                    Development Cost (Sunk)
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                                    <input
                                        type="number"
                                        value={devCost}
                                        onChange={(e) => setDevCost(Number(e.target.value))}
                                        className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Writing, Art, Layout, Editing</p>
                            </div>

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
                                    className={`flex flex-col items-start p-4 rounded-xl border transition-all ${selectedChannelId === channel.id
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
                        <div className={`rounded-xl p-6 shadow-lg border ${roi.netProfit > 0 ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"
                            }`}>
                            <h4 className={`text-sm uppercase tracking-wider mb-4 ${roi.netProfit > 0 ? "text-emerald-700" : "text-rose-700"
                                }`}>
                                Total Project ROI
                            </h4>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 font-medium">Break-Even Units</span>
                                    <div className="flex items-center gap-2">
                                        <span className={`font-mono font-bold text-lg ${roi.breakEvenUnits > printRun.quantity ? "text-rose-600" : "text-slate-800"
                                            }`}>
                                            {formatNumber(roi.breakEvenUnits)} / {formatNumber(printRun.quantity)}
                                        </span>
                                        {roi.breakEvenUnits > printRun.quantity && (
                                            <Target className="w-4 h-4 text-rose-500" />
                                        )}
                                    </div>
                                </div>

                                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${roi.breakEvenUnits > printRun.quantity ? "bg-rose-500" : "bg-emerald-500"}`}
                                        style={{ width: `${Math.min(100, (printRun.quantity / roi.breakEvenUnits) * 100)}%` }}
                                    />
                                </div>

                                {/* Interactive Break-Even Slider */}
                                <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-slate-700">Interactive Break-Even Analysis</span>
                                        <Activity className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="text-xs text-slate-600">Units Sold: {formatNumber(breakEvenUnits)}</label>
                                            <input
                                                type="range"
                                                min={Math.floor(roi.breakEvenUnits * 0.5)}
                                                max={Math.ceil(roi.breakEvenUnits * 2)}
                                                value={breakEvenUnits}
                                                onChange={(e) => setBreakEvenUnits(Number(e.target.value))}
                                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                                                style={{
                                                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${((breakEvenUnits - (roi.breakEvenUnits * 0.5)) / (roi.breakEvenUnits * 1.5)) * 100}%, #e2e8f0 ${((breakEvenUnits - (roi.breakEvenUnits * 0.5)) / (roi.breakEvenUnits * 1.5)) * 100}%, #e2e8f0 100%)`
                                                }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Profit:</span>
                                                <span className={`font-medium ${(() => {
                                                    const scenarioRoi = calculateRoi(devCost, { ...printRun, quantity: breakEvenUnits }, { msrp }, selectedChannel);
                                                    return scenarioRoi.netProfit >= 0 ? "text-emerald-600" : "text-rose-600";
                                                })()}`}>
                                                    {(() => {
                                                    const scenarioRoi = calculateRoi(devCost, { ...printRun, quantity: breakEvenUnits }, { msrp }, selectedChannel);
                                                    return formatCurrency(scenarioRoi.netProfit);
                                                })()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Margin:</span>
                                                <span className={`font-medium ${(() => {
                                                    const scenarioRoi = calculateRoi(devCost, { ...printRun, quantity: breakEvenUnits }, { msrp }, selectedChannel);
                                                    return scenarioRoi.netRevenuePerUnit >= 0 ? "text-emerald-600" : "text-rose-600";
                                                })()}`}>
                                                    {(() => {
                                                    const scenarioRoi = calculateRoi(devCost, { ...printRun, quantity: breakEvenUnits }, { msrp }, selectedChannel);
                                                    return `${Math.round((scenarioRoi.netRevenuePerUnit / msrp) * 100)}%`;
                                                })()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-between items-end border-t border-slate-200/50">
                                    <span className="text-slate-600 font-medium">Net Profit (Loss)</span>
                                    <span className={`font-mono text-2xl font-bold ${roi.netProfit > 0 ? "text-emerald-700" : "text-rose-700"
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

                                {/* Break-Even Scenarios Chart */}
                                <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-slate-700">Profit Scenarios</span>
                                        <BarChart3 className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <div className="space-y-2">
                                        {breakEvenScenarios.map((scenario, index) => {
                                            const isCurrentRun = scenario.quantity === printRun.quantity;
                                            const isBreakEven = scenario.quantity === Math.round(roi.breakEvenUnits);
                                            
                                            return (
                                                <div key={index} className={`flex items-center justify-between p-2 rounded-lg border ${
                                                    isCurrentRun ? 'border-indigo-300 bg-indigo-50' : 
                                                    isBreakEven ? 'border-emerald-300 bg-emerald-50' : 
                                                    'border-slate-200 bg-white'
                                                }`}>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs font-medium text-slate-600">
                                                            {scenario.multiplier}x
                                                        </span>
                                                        <span className="text-sm">
                                                            {formatNumber(scenario.quantity)} units
                                                        </span>
                                                        {isBreakEven && (
                                                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                                                                Break-Even
                                                            </span>
                                                        )}
                                                        {isCurrentRun && (
                                                            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
                                                                Current
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-right">
                                                        <div className={`font-mono text-sm font-medium ${
                                                            scenario.profit >= 0 ? 'text-emerald-600' : 'text-rose-600'
                                                        }`}>
                                                            {formatCurrency(scenario.profit)}
                                                        </div>
                                                        <div className="text-xs text-slate-500">
                                                            {formatCurrency(scenario.profitPerUnit)}/unit
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
