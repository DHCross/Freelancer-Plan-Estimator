import React, { useMemo } from "react";
import {
    DollarSign,
    TrendingUp,
    CheckCircle2,
    Clock,
    AlertCircle,
    FileText,
    BarChart3,
} from "lucide-react";
import { DisplayProject, TeamMember } from "@/lib/types";

interface FinancialModelProps {
    projects?: DisplayProject[];
    teamMembers?: TeamMember[];
    defaultDevCost?: number;
}

const TTRPG_PER_WORD = 0.08;

function calcProjectValue(p: DisplayProject, m?: TeamMember): number {
    if (p.rateType === "per-word") {
        return (p.targetWords || 0) * (p.rateAmount ?? TTRPG_PER_WORD);
    }
    if (p.rateType === "flat-fee") {
        return p.rateAmount ?? (p.manualHours || 0) * (m?.hourlyRate || 0);
    }
    return (p.manualHours || 0) * (p.rateAmount ?? m?.hourlyRate ?? 0);
}

function formatCurrency(val: number): string {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

function rateLabel(p: DisplayProject, m?: TeamMember): string {
    if (p.rateType === "per-word") {
        const rate = p.rateAmount ?? TTRPG_PER_WORD;
        return `$${rate.toFixed(3)}/word`;
    }
    if (p.rateType === "flat-fee") return "Flat fee";
    const rate = p.rateAmount ?? m?.hourlyRate ?? 0;
    return `$${rate}/hr`;
}

function statusBadge(status: string | undefined) {
    if (status === "paid") return { label: "Paid", color: "bg-emerald-100 text-emerald-800" };
    if (status === "invoiced") return { label: "Invoiced", color: "bg-blue-100 text-blue-800" };
    return { label: "Pending", color: "bg-amber-100 text-amber-800" };
}

export function FinancialModel({ projects = [], teamMembers = [] }: FinancialModelProps) {
    const memberById = useMemo(() => new Map(teamMembers.map(m => [m.id, m])), [teamMembers]);

    const projectsWithValue = useMemo(() =>
        projects.map(p => ({
            ...p,
            member: memberById.get(p.assignedTo || ""),
            value: calcProjectValue(p, memberById.get(p.assignedTo || "")),
        })),
        [projects, memberById]
    );

    const paid = useMemo(() =>
        projectsWithValue.filter(p => p.invoiceStatus === "paid").reduce((s, p) => s + p.value, 0),
        [projectsWithValue]
    );
    const invoiced = useMemo(() =>
        projectsWithValue.filter(p => p.invoiceStatus === "invoiced").reduce((s, p) => s + p.value, 0),
        [projectsWithValue]
    );
    const pending = useMemo(() =>
        projectsWithValue.filter(p => !p.invoiceStatus || p.invoiceStatus === "not-invoiced").reduce((s, p) => s + p.value, 0),
        [projectsWithValue]
    );
    const total = paid + invoiced + pending;

    const avgHourlyRate = teamMembers.length > 0
        ? teamMembers.reduce((s, m) => s + m.hourlyRate, 0) / teamMembers.length
        : 0;

    const totalHoursThisYear = projects.reduce((s, p) => s + (p.total || p.manualHours || 0), 0);

    const ratesByClient = useMemo(() =>
        teamMembers.map(m => {
            const clientProjects = projectsWithValue.filter(p => p.assignedTo === m.id);
            const clientRevenue = clientProjects.reduce((s, p) => s + p.value, 0);
            return { member: m, projects: clientProjects.length, revenue: clientRevenue };
        }),
        [teamMembers, projectsWithValue]
    );

    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                        <DollarSign className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Revenue Model</h2>
                        <p className="text-sm text-slate-600">Pipeline income, project rates, and earnings breakdown across all clients.</p>
                    </div>
                </div>
            </div>

            {/* Summary Stat Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Paid</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-900">{formatCurrency(paid)}</p>
                    <p className="text-xs text-emerald-600 mt-1">{projectsWithValue.filter(p => p.invoiceStatus === "paid").length} projects</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Invoiced</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">{formatCurrency(invoiced)}</p>
                    <p className="text-xs text-blue-600 mt-1">{projectsWithValue.filter(p => p.invoiceStatus === "invoiced").length} projects</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Pending</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-900">{formatCurrency(pending)}</p>
                    <p className="text-xs text-amber-600 mt-1">{projectsWithValue.filter(p => !p.invoiceStatus || p.invoiceStatus === "not-invoiced").length} projects</p>
                </div>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Pipeline</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{formatCurrency(total)}</p>
                    <p className="text-xs text-slate-400 mt-1">{projects.length} projects · {Math.round(totalHoursThisYear)}h</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Income Table */}
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-indigo-500" />
                        <h3 className="text-base font-semibold text-slate-800">Project Income Breakdown</h3>
                    </div>
                    {projectsWithValue.length === 0 ? (
                        <div className="p-8 text-center text-slate-400">
                            <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-40" />
                            <p className="text-sm">No projects yet. Add projects to see income breakdown.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                                        <th className="text-left px-4 py-3 font-semibold">Project</th>
                                        <th className="text-left px-4 py-3 font-semibold">Rate</th>
                                        <th className="text-right px-4 py-3 font-semibold">Value</th>
                                        <th className="text-center px-4 py-3 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {projectsWithValue.map(p => {
                                        const badge = statusBadge(p.invoiceStatus);
                                        return (
                                            <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-3">
                                                    <p className="font-medium text-slate-900 truncate max-w-[200px]">{p.name}</p>
                                                    <p className="text-xs text-slate-400">{p.member?.name || "Unassigned"} · {p.type || "Module"}</p>
                                                </td>
                                                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                                                    {rateLabel(p, p.member)}
                                                    {p.rateType === "per-word" && p.targetWords && (
                                                        <div className="text-xs text-slate-400">{(p.targetWords || 0).toLocaleString()} words</div>
                                                    )}
                                                    {p.rateType === "hourly" && p.manualHours && (
                                                        <div className="text-xs text-slate-400">{p.manualHours}h</div>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900 whitespace-nowrap">
                                                    {p.value > 0 ? formatCurrency(p.value) : <span className="text-slate-300">—</span>}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
                                                        {badge.label}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr className="bg-slate-50 border-t border-slate-200">
                                        <td colSpan={2} className="px-4 py-3 text-sm font-semibold text-slate-700">Total Pipeline</td>
                                        <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{formatCurrency(total)}</td>
                                        <td />
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    )}
                </div>

                {/* My Rates sidebar */}
                <div className="space-y-4">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                        <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-indigo-500" />
                            My Rates by Client
                        </h3>
                        {teamMembers.length === 0 ? (
                            <p className="text-sm text-slate-400">Add clients to see rate breakdown.</p>
                        ) : (
                            <div className="space-y-3">
                                {ratesByClient.map(({ member, projects: cnt, revenue }) => (
                                    <div key={member.id} className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                            <p className="font-medium text-slate-900 text-sm truncate">{member.name}</p>
                                            <p className="text-xs text-slate-400">{member.role || "Client"} · {cnt} project{cnt !== 1 ? "s" : ""}</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-sm font-semibold text-slate-800">${member.hourlyRate}/hr</p>
                                            {revenue > 0 && (
                                                <p className="text-xs text-indigo-600">{formatCurrency(revenue)}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {avgHourlyRate > 0 && (
                                    <div className="pt-3 mt-3 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-xs text-slate-500">Blended avg rate</span>
                                        <span className="text-sm font-bold text-indigo-700">${avgHourlyRate.toFixed(2)}/hr</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                        <h3 className="text-base font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Income Projection
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-indigo-700">Earned (paid)</span>
                                <span className="font-semibold text-indigo-900">{formatCurrency(paid)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-indigo-700">Awaiting payment</span>
                                <span className="font-semibold text-indigo-900">{formatCurrency(invoiced)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-indigo-700">In pipeline</span>
                                <span className="font-semibold text-indigo-900">{formatCurrency(pending)}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-indigo-200">
                                <span className="font-bold text-indigo-900">Total</span>
                                <span className="font-bold text-indigo-900 text-lg">{formatCurrency(total)}</span>
                            </div>
                            {totalHoursThisYear > 0 && total > 0 && (
                                <p className="text-xs text-indigo-600 pt-1">
                                    Effective rate: {formatCurrency(total / totalHoursThisYear)}/hr
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
