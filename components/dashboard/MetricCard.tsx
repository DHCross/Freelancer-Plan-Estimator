"use client";

import { ReactNode } from "react";
import { LucideIcon, ArrowRight, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendLabel?: string;
  status?: "healthy" | "warning" | "critical";
  onClick?: () => void;
  className?: string;
}

const STATUS_STYLES = {
  healthy: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-700",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    valueColor: "text-amber-700",
  },
  critical: {
    bg: "bg-red-50",
    border: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    valueColor: "text-red-700",
  },
};

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendLabel,
  status = "healthy",
  onClick,
  className = "",
}: MetricCardProps) {
  const styles = STATUS_STYLES[status];
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  const content = (
    <div
      className={`relative ${styles.bg} border ${styles.border} rounded-xl p-4 transition-all ${
        onClick ? "cursor-pointer hover:shadow-md hover:scale-[1.02]" : ""
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
            {title}
          </p>
          <p className={`text-2xl font-bold ${styles.valueColor}`}>{value}</p>
          {subtitle && (
            <p className="text-sm text-slate-600 mt-1 truncate">{subtitle}</p>
          )}
          {trend && trendLabel && (
            <div className="flex items-center gap-1 mt-2">
              <TrendIcon
                className={`w-3 h-3 ${
                  trend === "up"
                    ? "text-emerald-600"
                    : trend === "down"
                    ? "text-red-600"
                    : "text-slate-400"
                }`}
              />
              <span className="text-xs text-slate-500">{trendLabel}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className={`${styles.iconBg} p-2 rounded-lg`}>
            <Icon className={`w-5 h-5 ${styles.iconColor}`} />
          </div>
        )}
      </div>
      {onClick && (
        <div className="absolute bottom-3 right-3">
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </div>
      )}
    </div>
  );

  return onClick ? (
    <button onClick={onClick} className="w-full text-left">
      {content}
    </button>
  ) : (
    content
  );
}

interface MetricStripProps {
  children: ReactNode;
  className?: string;
}

export function MetricStrip({ children, className = "" }: MetricStripProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {children}
    </div>
  );
}
