/**
 * UI Feedback System for Freelancer Plan Estimator
 * Provides consistent loading states, validation feedback, and user guidance
 */

import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle, Info, HelpCircle } from "lucide-react";

export interface ValidationRule {
  field: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  warnings: Record<string, string>;
}

export interface LoadingState {
  isLoading: boolean;
  message?: string;
  progress?: number;
}

// Validation functions
export const validateField = (value: any, rules: ValidationRule[]): string | null => {
  for (const rule of rules) {
    if (rule.required && (!value || value === '')) {
      return `${rule.field} is required`;
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      return `${rule.field} must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && value && value.length > rule.maxLength) {
      return `${rule.field} must be no more than ${rule.maxLength} characters`;
    }

    if (rule.min !== undefined && value !== undefined && value !== null && Number(value) < rule.min) {
      return `${rule.field} must be at least ${rule.min}`;
    }

    if (rule.max !== undefined && value !== undefined && value !== null && Number(value) > rule.max) {
      return `${rule.field} must be no more than ${rule.max}`;
    }

    if (rule.pattern && value && !rule.pattern.test(value)) {
      return `${rule.field} format is invalid`;
    }

    if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) return customError;
    }
  }

  return null;
};

export const validateForm = (data: Record<string, any>, rules: Record<string, ValidationRule[]>): ValidationResult => {
  const errors: Record<string, string> = {};
  const warnings: Record<string, string> = {};
  let isValid = true;

  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = data[field];
    const error = validateField(value, fieldRules);
    
    if (error) {
      errors[field] = error;
      isValid = false;
    }

    // Add warnings for common issues
    if (field === 'dailyHours' && value && (Number(value) < 2 || Number(value) > 12)) {
      warnings[field] = 'Daily hours outside recommended range (2-12 hrs)';
    }

    if (field === 'draftSpeed' && value && (Number(value) < 50 || Number(value) > 500)) {
      warnings[field] = 'Draft speed outside typical range (50-500 words/hr)';
    }

    if (field === 'chaosBuffer' && value && (Number(value) < 5 || Number(value) > 50)) {
      warnings[field] = 'Chaos buffer outside recommended range (5-50%)';
    }
  }

  return { isValid, errors, warnings };
};

// Loading component
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg', message?: string }> = ({ size = 'md', message }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center gap-2">
      <Loader2 className={`animate-spin text-slate-400 ${sizeClasses[size]}`} />
      {message && <span className="text-sm text-slate-600">{message}</span>}
    </div>
  );
};

// Validation feedback components
export const ValidationFeedback: React.FC<{ 
  validation: ValidationResult;
  showErrors?: boolean;
  showWarnings?: boolean;
}> = ({ validation, showErrors = true, showWarnings = true }) => {
  if (validation.isValid && Object.keys(validation.warnings).length === 0) {
    return (
      <div className="flex items-center gap-2 text-emerald-600 text-sm">
        <CheckCircle className="w-4 h-4" />
        <span>All fields valid</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {showErrors && Object.keys(validation.errors).length > 0 && (
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-rose-700 text-sm font-medium mb-1">
            <AlertCircle className="w-4 h-4" />
            <span>Please fix these errors:</span>
          </div>
          <ul className="text-sm text-rose-600 space-y-1">
            {Object.values(validation.errors).map((error, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-rose-400">•</span>
                <span>{error}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showWarnings && Object.keys(validation.warnings).length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-amber-700 text-sm font-medium mb-1">
            <AlertCircle className="w-4 h-4" />
            <span>Recommendations:</span>
          </div>
          <ul className="text-sm text-amber-600 space-y-1">
            {Object.values(validation.warnings).map((warning, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Field-level validation feedback
export const FieldFeedback: React.FC<{ 
  error?: string; 
  warning?: string; 
  showIcon?: boolean;
}> = ({ error, warning, showIcon = true }) => {
  if (!error && !warning) return null;

  const isError = !!error;
  const bgColor = isError ? 'bg-rose-50 border-rose-200' : 'bg-amber-50 border-amber-200';
  const textColor = isError ? 'text-rose-700' : 'text-amber-700';
  const Icon = isError ? AlertCircle : AlertCircle;

  return (
    <div className={`mt-1 p-2 rounded-lg border ${bgColor}`}>
      <div className={`flex items-center gap-2 text-sm ${textColor}`}>
        {showIcon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{error || warning}</span>
      </div>
    </div>
  );
};

// Empty state component
export const EmptyState: React.FC<{ 
  icon?: React.ComponentType<any>;
  title: string;
  description: string;
  action?: React.ReactNode;
}> = ({ icon: Icon = HelpCircle, title, description, action }) => {
  return (
    <div className="text-center py-12">
      <Icon className="w-16 h-16 mx-auto mb-4 text-slate-300" />
      <h3 className="text-lg font-semibold text-slate-700 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">{description}</p>
      {action && <div className="flex justify-center">{action}</div>}
    </div>
  );
};

// Progress bar for loading states
export const ProgressBar: React.FC<{ 
  progress: number;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ progress, showPercentage = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className="w-full">
      {showPercentage && (
        <div className="flex justify-between text-sm text-slate-600 mb-1">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

// Common validation rules
export const commonValidationRules = {
  projectName: [
    { field: 'Project name', required: true, minLength: 3, maxLength: 100 }
  ],
  teamMemberName: [
    { field: 'Team member name', required: true, minLength: 2, maxLength: 50 }
  ],
  hourlyRate: [
    { field: 'Hourly rate', required: true, min: 15, max: 500 }
  ],
  weeklyHours: [
    { field: 'Weekly hours', required: true, min: 1, max: 80 }
  ],
  dailyHours: [
    { field: 'Daily hours', required: true, min: 1, max: 16 }
  ],
  draftSpeed: [
    { field: 'Draft speed', required: true, min: 50, max: 500 }
  ],
  projectSize: [
    { field: 'Project size', required: true, min: 1000, max: 1000000 }
  ],
  timeline: [
    { field: 'Timeline', required: true, min: 1, max: 24 }
  ],
  budget: [
    { field: 'Budget', required: true, min: 1000, max: 1000000 }
  ]
};

// Debounced validation for real-time feedback
export const useDebouncedValidation = (
  value: any,
  rules: ValidationRule[],
  delay: number = 300
): string | null => {
  const [error, setError] = useState<string | null>(null);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  useEffect(() => {
    const validationError = validateField(debouncedValue, rules);
    setError(validationError);
  }, [debouncedValue, rules]);

  return error;
};