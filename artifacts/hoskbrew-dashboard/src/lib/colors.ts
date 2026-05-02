/**
 * Semantic Color System for Freelancer Plan Estimator
 * Provides consistent, meaningful color usage across the application
 */

// Status Colors - Based on capacity and risk levels
export const statusColors = {
  // Capacity-based colors
  healthy: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    textLight: 'text-emerald-700',
    textDark: 'text-emerald-800',
    fill: 'bg-emerald-500',
    fillLight: 'bg-emerald-100'
  },
  caution: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
    textLight: 'text-amber-700',
    textDark: 'text-amber-800',
    fill: 'bg-amber-500',
    fillLight: 'bg-amber-100'
  },
  warning: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    textLight: 'text-orange-700',
    textDark: 'text-orange-800',
    fill: 'bg-orange-500',
    fillLight: 'bg-orange-100'
  },
  critical: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-600',
    textLight: 'text-red-700',
    textDark: 'text-red-800',
    fill: 'bg-red-500',
    fillLight: 'bg-red-100'
  },
  neutral: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-600',
    textLight: 'text-slate-700',
    textDark: 'text-slate-800',
    fill: 'bg-slate-500',
    fillLight: 'bg-slate-100'
  }
};

// Action Colors - For buttons and interactive elements
export const actionColors = {
  primary: {
    bg: 'bg-blue-600',
    bgHover: 'hover:bg-blue-700',
    text: 'text-white',
    border: 'border-blue-600',
    ring: 'ring-blue-200'
  },
  secondary: {
    bg: 'bg-slate-600',
    bgHover: 'hover:bg-slate-700',
    text: 'text-white',
    border: 'border-slate-600',
    ring: 'ring-slate-200'
  },
  success: {
    bg: 'bg-emerald-600',
    bgHover: 'hover:bg-emerald-700',
    text: 'text-white',
    border: 'border-emerald-600',
    ring: 'ring-emerald-200'
  },
  destructive: {
    bg: 'bg-red-600',
    bgHover: 'hover:bg-red-700',
    text: 'text-white',
    border: 'border-red-600',
    ring: 'ring-red-200'
  }
};

// Information Colors - For data visualization
export const infoColors = {
  revenue: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    fill: 'bg-emerald-500'
  },
  expense: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    fill: 'bg-red-500'
  },
  planning: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    fill: 'bg-blue-500'
  },
  analysis: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    fill: 'bg-purple-500'
  }
};

// Helper functions to get colors based on percentage/load
export const getCapacityColor = (percentage: number) => {
  if (percentage < 80) return statusColors.healthy;
  if (percentage < 100) return statusColors.caution;
  if (percentage < 150) return statusColors.warning;
  return statusColors.critical;
};

export const getRiskColor = (risk: 'low' | 'medium' | 'high' | 'critical') => {
  switch (risk) {
    case 'low': return statusColors.healthy;
    case 'medium': return statusColors.caution;
    case 'high': return statusColors.warning;
    case 'critical': return statusColors.critical;
    default: return statusColors.neutral;
  }
};

export const getTimelineColor = (isValid: boolean) => {
  return isValid ? statusColors.healthy : statusColors.critical;
};

export const getBudgetColor = (isUnderBudget: boolean) => {
  return isUnderBudget ? statusColors.healthy : statusColors.critical;
};

// Workflow step colors
export const workflowColors = {
  complete: {
    bg: 'bg-emerald-500',
    text: 'text-white',
    border: 'border-emerald-500',
    fill: 'bg-emerald-500'
  },
  current: {
    bg: 'bg-indigo-600',
    text: 'text-white',
    border: 'border-indigo-600',
    ring: 'ring-indigo-200',
    fill: 'bg-indigo-600'
  },
  next: {
    bg: 'bg-slate-300',
    text: 'text-slate-600',
    border: 'border-slate-300',
    fill: 'bg-slate-300'
  }
};

// Chart colors for data visualization
export const chartColors = {
  primary: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'],
  success: ['#10B981', '#34D399', '#6EE7B7'],
  warning: ['#F59E0B', '#FBBF24', '#FCD34D'],
  error: ['#EF4444', '#F87171', '#FCA5A5']
};

export default {
  statusColors,
  actionColors,
  infoColors,
  getCapacityColor,
  getRiskColor,
  getTimelineColor,
  getBudgetColor,
  workflowColors,
  chartColors
};
