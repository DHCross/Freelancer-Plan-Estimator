"use client";

import { AlertTriangle, Users, Clock, ArrowRight, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface AlertBannerProps {
  severity: "info" | "warning" | "critical";
  title: string;
  description?: string;
  actions?: {
    label: string;
    onClick: () => void;
    primary?: boolean;
  }[];
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
  className?: string;
}

const SEVERITY_STYLES = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    titleColor: "text-blue-800",
    textColor: "text-blue-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    primaryBtn: "bg-blue-600 hover:bg-blue-700 text-white",
    secondaryBtn: "bg-blue-100 hover:bg-blue-200 text-blue-700",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    titleColor: "text-amber-800",
    textColor: "text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    primaryBtn: "bg-amber-600 hover:bg-amber-700 text-white",
    secondaryBtn: "bg-amber-100 hover:bg-amber-200 text-amber-700",
  },
  critical: {
    bg: "bg-red-50",
    border: "border-red-200",
    titleColor: "text-red-800",
    textColor: "text-red-700",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    primaryBtn: "bg-red-600 hover:bg-red-700 text-white",
    secondaryBtn: "bg-red-100 hover:bg-red-200 text-red-700",
  },
};

export function AlertBanner({
  severity,
  title,
  description,
  actions,
  dismissible = false,
  onDismiss,
  icon,
  className = "",
}: AlertBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const styles = SEVERITY_STYLES[severity];

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <div
      className={`${styles.bg} border ${styles.border} rounded-xl p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`${styles.iconBg} p-2 rounded-lg flex-shrink-0`}>
          {icon || <AlertTriangle className={`w-5 h-5 ${styles.iconColor}`} />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold ${styles.titleColor}`}>{title}</h4>
          {description && (
            <p className={`text-sm ${styles.textColor} mt-1`}>{description}</p>
          )}

          {/* Actions */}
          {actions && actions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    action.primary ? styles.primaryBtn : styles.secondaryBtn
                  }`}
                >
                  {action.label}
                  {action.primary && <ArrowRight className="w-3 h-3" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/50 rounded-lg transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        )}
      </div>
    </div>
  );
}

interface BottleneckAlertProps {
  memberName: string;
  loadPercentage: number;
  timelineExtension?: number;
  onReassign?: () => void;
  onHire?: () => void;
  onExtendTimeline?: () => void;
  clientMode?: boolean;
}

export function BottleneckAlert({
  memberName,
  loadPercentage,
  timelineExtension,
  onReassign,
  onHire,
  onExtendTimeline,
  clientMode = false,
}: BottleneckAlertProps) {
  const severity = loadPercentage > 200 ? "critical" : loadPercentage > 150 ? "warning" : "info";
  
  const title = clientMode 
    ? "Timeline Adjustment Required"
    : `Resource Bottleneck: ${memberName} at ${Math.round(loadPercentage)}%`;
  
  const description = clientMode
    ? `Additional capacity has been assigned to ensure quality delivery. ${timelineExtension ? `Updated timeline includes a ${timelineExtension}-month adjustment to accommodate current scope.` : ""} No action required from you.`
    : `${memberName} is significantly over capacity. ${
        timelineExtension 
          ? `This extends the overall timeline by ${timelineExtension} months.` 
          : "This will impact delivery timelines."
      }`;

  const actions = [];
  
  if (!clientMode) {
    if (onReassign) {
      actions.push({ label: "Reassign Projects", onClick: onReassign, primary: true });
    }
    if (onHire) {
      actions.push({ label: "Hire Contractor", onClick: onHire });
    }
    if (onExtendTimeline) {
      actions.push({ label: "Extend Timeline", onClick: onExtendTimeline });
    }
  } else {
    if (onExtendTimeline) {
      actions.push({ label: "View Adjusted Timeline", onClick: onExtendTimeline, primary: true });
    }
  }

  return (
    <AlertBanner
      severity={severity}
      title={title}
      description={description}
      actions={actions}
      icon={clientMode ? <Clock className="w-5 h-5 text-amber-600" /> : <Users className="w-5 h-5 text-red-600" />}
    />
  );
}
