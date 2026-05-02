/**
 * Tooltip System for Freelancer Plan Estimator
 * Provides contextual help for jargon and complex concepts
 */

import React, { useState, useRef, useEffect } from 'react';
import { Info, HelpCircle, BookOpen, DollarSign, Users, Clock, Target } from 'lucide-react';

// Tooltip content definitions
export const tooltipContent = {
  // Project Management Terms
  'coordination-overhead': {
    title: 'Coordination Overhead',
    content: 'Time added to project timeline for team meetings, communication, and management. Larger teams need more coordination time.',
    icon: Users,
    category: 'planning'
  },
  'critical-path': {
    title: 'Critical Path',
    content: 'The longest sequence of dependent tasks that determines the minimum project duration. Any delay here delays the entire project.',
    icon: Target,
    category: 'planning'
  },
  'bottleneck': {
    title: 'Bottleneck',
    content: 'A team member or resource that is overloaded and limiting project progress. Resolving bottlenecks often speeds up the entire project.',
    icon: Clock,
    category: 'planning'
  },
  'resource-validation': {
    title: 'Resource Validation',
    content: 'Checking if your team has enough capacity to complete the project within the timeline based on their availability and workload.',
    icon: Users,
    category: 'planning'
  },

  // Financial Terms
  'break-even': {
    title: 'Break-Even Point',
    content: 'The number of units you need to sell to cover all costs (development + printing). After this point, each sale generates profit.',
    icon: DollarSign,
    category: 'financial'
  },
  'cogs': {
    title: 'Cost of Goods Sold (COGS)',
    content: 'Direct costs to produce each unit: printing, shipping, fulfillment, and platform fees. Doesn\'t include development costs.',
    icon: DollarSign,
    category: 'financial'
  },
  'msrp': {
    title: 'MSRP',
    content: 'Manufacturer\'s Suggested Retail Price - the recommended selling price to customers before any discounts.',
    icon: DollarSign,
    category: 'financial'
  },
  'distribution-channel': {
    title: 'Distribution Channel',
    content: 'How you sell your product to customers. Different channels have different fees, discounts, and fulfillment requirements.',
    icon: DollarSign,
    category: 'financial'
  },

  // Team Roles
  'lead-writer': {
    title: 'Lead Writer',
    content: 'Primary writer responsible for story structure, world-building, and maintaining consistency across the project.',
    icon: BookOpen,
    category: 'roles'
  },
  'writer': {
    title: 'Writer',
    content: 'Creates content for specific sections, chapters, or adventures following the lead writer\'s guidelines.',
    icon: BookOpen,
    category: 'roles'
  },
  'editor': {
    title: 'Editor',
    content: 'Reviews and improves content for clarity, consistency, grammar, and style. Ensures quality standards are met.',
    icon: BookOpen,
    category: 'roles'
  },
  'layout-artist': {
    title: 'Layout Artist',
    content: 'Designs the visual layout of pages, integrates text and images, and ensures professional presentation.',
    icon: BookOpen,
    category: 'roles'
  },
  'project-manager': {
    title: 'Project Manager',
    content: 'Coordinates team members, manages schedules, tracks progress, and handles communication and risk management.',
    icon: Users,
    category: 'roles'
  },

  // Production Terms
  'draft-speed': {
    title: 'Draft Speed',
    content: 'Words per hour you can write in first draft quality. Typical range: 100-300 w/hr for creative writing.',
    icon: Clock,
    category: 'production'
  },
  'compile-speed': {
    title: 'Compile Speed',
    content: 'Words per hour for editing and revising. Usually slower than drafting due to the detailed work involved.',
    icon: Clock,
    category: 'production'
  },
  'chaos-buffer': {
    title: 'Chaos Buffer',
    content: 'Extra time added to account for unexpected delays, revisions, and real-world complications. 15% is typical.',
    icon: Clock,
    category: 'production'
  },

  // Industry Terms
  'ttrpg': {
    title: 'TTRPG',
    content: 'Tabletop Role-Playing Game - games where players use dice, character sheets, and imagination to tell collaborative stories.',
    icon: BookOpen,
    category: 'industry'
  },
  'rpg': {
    title: 'RPG',
    content: 'Role-Playing Game - games where players take on characters and make decisions that affect the story.',
    icon: BookOpen,
    category: 'industry'
  }
} as const;

type TooltipTerm = keyof typeof tooltipContent;

// Tooltip component
interface TooltipProps {
  term: TooltipTerm;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  term, 
  children, 
  size = 'md', 
  position = 'top',
  delay = 500,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const content = tooltipContent[term];
  if (!content) return React.createElement(React.Fragment, null, children);

  const sizeClasses = {
    sm: 'w-48 p-2 text-xs',
    md: 'w-64 p-3 text-sm',
    lg: 'w-80 p-4 text-base'
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const categoryColors = {
    planning: 'bg-blue-50 border-blue-200 text-blue-800',
    financial: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    roles: 'bg-purple-50 border-purple-200 text-purple-800',
    production: 'bg-amber-50 border-amber-200 text-amber-800',
    industry: 'bg-slate-50 border-slate-200 text-slate-800'
  };

  const showTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current && 
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current && 
        !triggerRef.current.contains(event.target as Node)
      ) {
        hideTooltip();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [timeoutId, hideTooltip]);

  const Icon = content.icon;

  return React.createElement(
    'div',
    { className: "relative inline-block" },
    React.createElement(
      'div',
      {
        ref: triggerRef,
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onClick: () => setIsVisible(!isVisible),
        className: `cursor-help inline-flex items-center gap-1 ${className}`
      },
      children,
      React.createElement(HelpCircle, { className: "w-3 h-3 text-slate-400 hover:text-slate-600 transition-colors" })
    ),
    isVisible && React.createElement(
      'div',
      {
        ref: tooltipRef,
        className: `absolute z-50 ${sizeClasses[size]} ${positionClasses[position]} ${categoryColors[content.category]} border rounded-lg shadow-lg transition-all duration-200`
      },
      React.createElement(
        'div',
        { className: "flex items-start gap-2" },
        React.createElement(Icon, { className: "w-4 h-4 mt-0.5 flex-shrink-0" }),
        React.createElement(
          'div',
          null,
          React.createElement('h4', { className: "font-semibold mb-1" }, content.title),
          React.createElement('p', { className: "leading-relaxed" }, content.content)
        )
      ),
      React.createElement(
        'div',
        {
          className: `absolute ${position === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 -mt-1' : 
                          position === 'bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 -mb-1' :
                          position === 'left' ? 'left-full top-1/2 transform -translate-y-1/2 -ml-1' :
                          'right-full top-1/2 transform -translate-y-1/2 -mr-1'}`
        },
        React.createElement('div', { className: `w-2 h-2 ${categoryColors[content.category]} border rotate-45` })
      )
    )
  );
};

// Quick tooltip for simple terms
export const QuickTooltip: React.FC<{ 
  content: string; 
  children: React.ReactNode;
  className?: string;
}> = ({ content, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return React.createElement(
    'div',
    { className: `relative inline-block ${className}` },
    React.createElement(
      'div',
      {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
        className: "cursor-help"
      },
      children
    ),
    isVisible && React.createElement(
      'div',
      { className: "absolute z-50 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-1" },
      content,
      React.createElement(
        'div',
        { className: "absolute top-full left-1/2 transform -translate-x-1/2 -mt-1" },
        React.createElement('div', { className: "w-2 h-2 bg-slate-800 rotate-45" })
      )
    )
  );
};

// Empty state messages with guidance
export const emptyStateMessages = {
  noTeamMembers: {
    title: 'Build Your Team',
    description: 'Add team members to calculate project costs and timeline. Start with essential roles like writers and editors.',
    action: 'Add Team Member',
    guidance: [
      'Every project needs at least one writer',
      'Editors ensure quality and consistency',
      'Layout artists handle visual presentation',
      'Project managers keep everything on track'
    ]
  },
  noProjects: {
    title: 'Create Your First Project',
    description: 'Set up a project to estimate costs, timeline, and resource requirements.',
    action: 'New Project',
    guidance: [
      'Start with a realistic word count',
      'Consider your team\'s availability',
      'Plan for unexpected delays',
      'Review industry standards for similar projects'
    ]
  },
  noScenarios: {
    title: 'Save Scenarios to Compare',
    description: 'Save different configurations to analyze various approaches and find the optimal balance.',
    action: 'Save Current Scenario',
    guidance: [
      'Compare budget vs timeline trade-offs',
      'Test different team compositions',
      'Evaluate risk levels',
      'Plan for contingencies'
    ]
  },
  validationErrors: {
    title: 'Configuration Needs Attention',
    description: 'Some values need adjustment before proceeding.',
    action: 'Fix Issues',
    guidance: [
      'Check all required fields are filled',
      'Ensure values are within reasonable ranges',
      'Verify team capacity matches project scope',
      'Review timeline feasibility'
    ]
  },
  noData: {
    title: 'No Data Available',
    description: 'Start by entering your project details or loading a saved configuration.',
    action: 'Get Started',
    guidance: [
      'Import existing data if available',
      'Use templates for common project types',
      'Start with estimates and refine as you go',
      'Consult industry benchmarks'
    ]
  }
};

// Help section component
export const HelpSection: React.FC<{ 
  category: TooltipTerm | 'all';
  className?: string;
}> = ({ category, className = '' }) => {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const terms = category === 'all' 
    ? Object.entries(tooltipContent)
    : Object.entries(tooltipContent).filter(([_, content]) => content.category === category as string);

  const categoryTitles = {
    planning: 'Project Planning Terms',
    financial: 'Financial & Business Terms',
    roles: 'Team Roles & Responsibilities',
    production: 'Production & Workflow Terms',
    industry: 'Industry & Game Terms',
    all: 'All Terms & Concepts'
  };

  return React.createElement('div', { className: `bg-white rounded-xl border border-slate-200 p-6 ${className}` },
      React.createElement('h3', { className: "text-lg font-semibold text-slate-900 mb-4" }, categoryTitles[typeof category === 'string' ? category as keyof typeof categoryTitles : 'all']),
      
      React.createElement('div', { className: "space-y-3" },
        terms.map(([term, content]) => {
          const Icon = content.icon;
          const isExpanded = expandedTerm === term;
          
          return React.createElement('div', { key: term, className: "border border-slate-100 rounded-lg" });
        })
      )
  );
};