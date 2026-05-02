export interface DossierSection {
  id: string;
  title: string;
  type: 'executive_summary' | 'transcript' | 'financial_modeling' | 'timeline' | 'risk_assessment' | 'strategic_outlook';
  order: number;
  required: boolean;
  template?: string;
}

export interface DossierTemplate {
  id: string;
  name: string;
  description: string;
  sections: DossierSection[];
  defaultValues?: Record<string, any>;
}

export interface ProjectDossier {
  id: string;
  projectName: string;
  templateId: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'review' | 'approved' | 'archived';
  
  // Core sections
  executiveSummary: {
    projectScope: string;
    keyFindings: string[];
    strategicAlignment: string;
    riskLevel: 'low' | 'medium' | 'high';
  };
  
  transcriptData: {
    meetingDate?: Date;
    attendees: string[];
    keyDecisions: string[];
    actionItems: string[];
    notes: string;
  };
  
  financialModeling: {
    laborValuation: {
      actualHours: number;
      industryHours: number;
      actualCost: number;
      industryCost: number;
      subsidyValue: number;
    };
    productionCosts: {
      art: number;
      editing: number;
      layout: number;
      printing: number;
      distribution: number;
    };
    revenueProjections: {
      bestCase: number;
      realistic: number;
      worstCase: number;
      breakEvenUnits: number;
    };
  };
  
  timeline: {
    phases: Array<{
      name: string;
      duration: number;
      dependencies: string[];
      riskFactors: string[];
    }>;
    totalWeeks: number;
    criticalPath: string[];
  };
  
  riskAssessment: {
    technicalRisks: Array<{
      description: string;
      probability: 'low' | 'medium' | 'high';
      impact: 'low' | 'medium' | 'high';
      mitigation: string;
    }>;
    businessRisks: Array<{
      description: string;
      probability: 'low' | 'medium' | 'high';
      impact: 'low' | 'medium' | 'high';
      mitigation: string;
    }>;
  };
  
  strategicOutlook: {
    marketPosition: string;
    competitiveAdvantages: string[];
    growthPotential: string;
    longTermVision: string;
  };
}

export interface ImpactWarning {
  id: string;
  type: 'financial' | 'timeline' | 'resource' | 'strategic';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  implications: string[];
  suggestedAdjustments: string[];
}

export const DEFAULT_DOSSIER_TEMPLATE: DossierTemplate = {
  id: 'default-project-dossier',
  name: 'Project Dossier Template',
  description: 'Comprehensive project analysis with financial modeling and risk assessment',
  sections: [
    {
      id: 'executive_summary',
      title: 'Executive Summary',
      type: 'executive_summary',
      order: 1,
      required: true,
      template: `# {projectName}

## Strategic Overview
{projectScope}

## Key Findings
{keyFindings}

## Risk Assessment
{riskLevel}

## Strategic Alignment
{strategicAlignment}`
    },
    {
      id: 'transcript',
      title: 'Meeting Transcript & Notes',
      type: 'transcript',
      order: 2,
      required: false,
    },
    {
      id: 'financial_modeling',
      title: 'Financial & Production Modeling',
      type: 'financial_modeling',
      order: 3,
      required: true,
    },
    {
      id: 'timeline',
      title: 'Timeline & Critical Path',
      type: 'timeline',
      order: 4,
      required: true,
    },
    {
      id: 'risk_assessment',
      title: 'Risk Assessment',
      type: 'risk_assessment',
      order: 5,
      required: true,
    },
    {
      id: 'strategic_outlook',
      title: 'Strategic Series Outlook',
      type: 'strategic_outlook',
      order: 6,
      required: false,
    },
  ],
};

export const RPG_ADVENTURE_TEMPLATE: DossierTemplate = {
  id: 'rpg-adventure-path',
  name: 'RPG Adventure Path Dossier',
  description: 'Specialized template for TTRPG adventure path projects',
  sections: [
    {
      id: 'executive_summary',
      title: 'Executive Summary',
      type: 'executive_summary',
      order: 1,
      required: true,
      template: `# {projectName} PROJECT DOSSIER
Integrated Transcript + Strategic Production Report

## Executive Summary
This document consolidates the full scope, timeline, financial modeling, and structural insight surrounding {projectName}.
It utilizes data from:
- Direct transcript synthesis from team meetings
- Industry-aligned production data for printing, art, labor valuation, distribution economics, and timelines

The combined analysis confirms:
{keyFindings}`
    },
    {
      id: 'transcript',
      title: 'PART I — Transcript Reconstruction',
      type: 'transcript',
      order: 2,
      required: false,
    },
    {
      id: 'financial_modeling',
      title: 'PART II — Integrated Financial & Production Modeling',
      type: 'financial_modeling',
      order: 3,
      required: true,
    },
    {
      id: 'timeline',
      title: 'Timeline Validation',
      type: 'timeline',
      order: 4,
      required: true,
    },
    {
      id: 'strategic_outlook',
      title: 'PART III — Strategic Series Outlook',
      type: 'strategic_outlook',
      order: 5,
      required: true,
    },
    {
      id: 'risk_assessment',
      title: 'PART IV — Consolidated Findings & Risk Assessment',
      type: 'risk_assessment',
      order: 6,
      required: true,
    },
  ],
};
