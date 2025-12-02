"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

import { StakeholderDemand } from "@/lib/types";

interface PoliticsViewProps {
  stakeholderLoad: StakeholderDemand[];
  clientMode?: boolean;
}

export function PoliticsView({ stakeholderLoad, clientMode = false }: PoliticsViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {clientMode ? "Stakeholder Allocation" : "Political Load"}
          </p>
          <h2 className="text-2xl font-bold text-slate-900">
            {clientMode ? "Priority Coverage Map" : "Who Owns the Hours"}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-2">
            {clientMode
              ? "Shows Paul how labor budget directly protects revenue commitments per executive owner."
              : "Use this to remind Matthew and Martin whose promises you are currently carrying."}
          </p>
        </div>
        <TrendingUp className="w-12 h-12 text-orange-500" />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={stakeholderLoad} layout="vertical" margin={{ left: 16 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
            <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis dataKey="name" type="category" width={90} tick={{ fontWeight: 600, fill: "#0f172a" }} />
            <Tooltip cursor={{ fill: "rgba(148,163,184,0.1)" }} />
            <Bar dataKey="hours" radius={[0, 4, 4, 0]}>
              {stakeholderLoad.map((entry, index) => (
                <Cell key={entry.name + index} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
