# Freelancer Plan Estimator - Features & UI Overview

**Repository**: DHCross/Freelancer-Plan-Estimator  
**Last Updated**: December 19, 2025  
**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

---

## 🎯 Core Features

### **1. Dual-Mode Dashboard**
- **Internal/War Room Mode**: Full visibility into ghost capacity, purge impact, internal terminology
- **Client Mode**: Sanitized view with strategic framing, hides sensitive internal operations
- Toggle between modes via switch in header
- Password protection (`NEXT_PUBLIC_DASHBOARD_PASSWORD`)

---

## 📊 Main Navigation Tabs

### **Tab: Methodology**
**Purpose**: Two-phase production model explanation

**Features**:
- **Phase 1 - Architecture** (180h scaffolding): Systems building, lore scaffolding, workflow design
- **Phase 2 - Assembly** (revenue generating): Deployment of architecture to produce content at scale
- Portfolio assembly hours tracking
- Team weekly capacity visualization

**UI Components**:
- `MethodologyView` component
- Phase cards with investment type, effort hours, outcomes
- Visual distinction between scaffolding and assembly work

---

### **Tab: Who Does What** 
**Purpose**: Team capacity and project allocation

**Features**:
- Team member breakdown: Dan, Martin, Matthew
- Projects per writer with calculated hours
- Annual capacity vs total hours comparison
- Load percentage with color-coded status (healthy/caution/critical)

**UI Components**:
- `TeamPlanner` component
- Writer cards with project lists
- Capacity bars with percentage indicators
- Color-coded load indicators:
  - <90%: Emerald (healthy)
  - 90-110%: Amber (caution)
  - 110-150%: Orange (warning)
  - >150%: Red (critical)

---

### **Tab: Product Listing** *(Internal Only)*
**Purpose**: Manage all products in development

**Sub-tabs**:
1. **Product List**
   - Editable grid: names, descriptions, owners, statuses, launch windows
   - Unsaved changes highlighted in yellow
   - Inline insights (e.g., A0: Caravan's End layout benchmark)
   - Quick actions: update product records, assign team load
   
2. **What-If Lab**
   - Draft and test project scenarios
   - Scenario engine for feasibility testing

**Features**:
- 17+ pre-configured projects (A-series adventures, sourcebooks, infrastructure work)
- Dependency management and launch windows
- Status tracking: Priority, Critical, Drafting, Layout, Planning
- Quarter-based bucketing (Q1-Q4 2026)

**UI Components**:
- `ProductListingView` component
- `EditableProductGrid` component
- Insights cards with layout hour selector
- Inline editing with validation

---

### **Tab: Budget & Plan**
**Purpose**: Quarterly budget allocation and project templates

**Features**:
- Add projects via templates (Small/Large Adventures, Sourcebooks)
- Per-project cost tracking
- CSV import/export
- Quarter buckets (Q1-Q4 2026)
- Internal status management (Priority, Critical, Drafting, Layout, Planning)
- Budget summary with total calculations

**UI Components**:
- `BudgetView` component
- Project template selector with 10+ templates
- Quarterly breakdown cards
- Inline editing for project fields
- CSV export functionality

---

### **Tab: Cost Savings**
**Purpose**: Demonstrate Production Engine efficiency vs market rates

**Features**:
- **Replacement Cost Calculator**: Shows Dan's work vs hiring 3 separate vendors
- **Defense Analysis**: Labor subsidy calculations, per-word cost comparison
- **Hoskbrew Advantage Metrics**: 3x industry productivity visualization
- **Metrics Editor**: Adjust writing rate, editing speed, words per page, etc.

**Calculations**:
- Labor subsidy (your rate vs market rate)
- Per-word cost comparison
- Annual savings projections
- Role-by-role cost breakdowns

**UI Components**:
- `EfficiencyView` component
- `MetricsEditor` component
- Replacement role cards with annual cost comparisons
- Defense analysis tables

---

### **Tab: Team Health / Resourcing**
**Purpose**: Crisis management and capacity tracking

**Views**:
1. **Resource Dashboard** (Internal)
   - Ghost capacity visualization (120h/wk lost: Jon, Derek, Randy)
   - Legacy capacity cards
   - Crisis impact documentation
   
2. **Institutional Archive** (Internal)
   - Survival metrics (11-week runway)
   - Institutional Archivist role definition
   - Meeting notes archive
   - Strategic pivot documentation
   
3. **Capacity Gap** (Both modes)
   - Capacity gap stats (32,000 annual hours)
   - Reality check visualization
   - Action plan recommendations

**Features**:
- "The Great Remote Purge" tracking
- Ghost capacity by skill type (Writing, Editing, Layout, Marketing, etc.)
- Historical context and lessons learned
- Stakeholder mandate tracking (Matthew, Martin, Dan)

**UI Components**:
- `PurgeView` component
- `InstitutionalArchiveView` component
- `CapacityGapView` component
- Ghost cards with weekly hours and skill breakdown

---

## 🔧 Planning Tools *(Internal Only)*

### **Tab: Integrated Planning**
**Purpose**: 4-step workflow for project feasibility

**Workflow Steps**:

1. **Team Builder** (`TeamConfiguration`)
   - Add roles from 10+ templates (Lead Writer, Editor, Layout Artist, etc.)
   - Custom hourly rates and weekly capacity
   - Coordination overhead calculation (15% default)
   - Project size and timeline inputs
   - Timeline feasibility validation
   - Total project cost calculation

2. **Resource Validation** (`ResourceValidationHub`)
   - Bottleneck detection (identifies overloaded team members)
   - Load percentage with color-coded warnings
   - Quick resolution actions: Reassign, Hire Contractor, Extend Timeline
   - Impact preview of proposed changes
   - Timeline extension warnings

3. **Scenario Engine** (`IntegratedScenarioEngine`)
   - Pulls budget/timeline from Team Builder
   - Feasibility analysis with bottlenecks
   - Risk level assessment (low/medium/high)
   - Save/load scenarios for comparison
   - Side-by-side scenario comparison view
   - What-if analysis for trade-offs

4. **Financial Model** (`IntegratedFinancialModel`)
   - Revenue projections
   - Break-even analysis
   - Cost of goods sold (COGS)
   - Distribution channel modeling
   - Profitability analysis

**Features**:
- Data flow visualization between steps
- Scenario persistence (save/load)
- Comparison matrix for saved scenarios
- Budget vs timeline trade-off modeling

**UI Components**:
- `DataFlowIndicator` - Step progress visualization
- Scenario cards with save/load functionality
- Comparison matrix for saved scenarios
- Step navigation with validation states

---

### **Tab: Task Board** *(Internal Only)*
**Purpose**: Kanban-style project status tracking

**Columns**:
- **Critical**: Urgent, blocking work
- **Assembly**: Active production
- **Dependencies**: Waiting on input/approval
- **Queued**: Future work

**Additional Sections**:
- Orphaned assets tracking (13 items, 480h sunk cost)
- Reality tracker for execution monitoring

**Features**:
- Project cards with status colors
- Visual organization of workflow
- Historical tracking of completed work
- Orphaned asset management

**UI Components**:
- `ProjectStatusView` component
- Kanban cards with status colors
- Drag-and-drop (future enhancement)

---

## 👥 Team Tools *(Internal Only)*

### **Tab: Team Builder**
**Purpose**: Configure team for project scenarios

**Features**:
- Role templates with default rates/speeds
- Quantity adjustments per role
- Total project cost calculation
- Coordination overhead visualization
- Timeline feasibility warnings
- 10+ role templates:
  - Lead Writer
  - Contributing Writer
  - Editor
  - Layout Artist
  - Illustrator
  - Cartographer
  - Project Manager
  - And more...

**UI Components**:
- `TeamConfiguration` component
- Role cards with +/- quantity controls
- Cost summary with coordination breakdown
- Feasibility indicators

---

### **Tab: Estimator Tools**
**Purpose**: Team-aware task estimation

**Views**:
1. **Quick Estimate** (`QuickEstimator`)
   - Push-button estimates for common sizes:
     - Quick Hit: 2k words
     - Chapter: 8k words
     - Major Section: 25k words
   - Team member selection
   - Complexity toggle (Standard vs Heavy mechanics)
   - Instant timeline with finish date
   - Copy-to-clipboard functionality

2. **Advanced Estimate** (`EstimatorView`)
   - Team member selection with auto-populated rates
   - Activity label and project bucket name
   - Role label for categorization
   - Scope definition (total words, draft speed)
   - Chaos buffer adjustment (1.0x - 2.0x)
   - Daily hours constraint
   - Results: hours breakdown, working days, manager-ready text
   
3. **Estimation Buckets** (`EstimatorBuckets`)
   - Track multiple estimates
   - Organize by project/role
   - Total hours rollup
   - Export functionality

**Features**:
- Team member-specific rates and speeds
- Chaos buffer for realistic planning
- Weekend work toggle
- Manager-friendly output text
- Estimation tracking and organization

**UI Components**:
- `EnhancedEstimatorTools` component (wrapper)
- `QuickEstimator` component
- `EstimatorView` component
- `EstimatorBuckets` component
- Size/complexity selector buttons

---

### **Tab: My Estimate** *(Internal Only)*
**Purpose**: Professional timeline reports for stakeholders

**Features**:
- Project selection dropdown
- Employee name and role inputs
- Pacing configuration:
  - Draft speed (words per hour)
  - Compile speed (pages per hour)
  - Chaos buffer (realistic planning factor)
  - Daily hours (work hours per day)
  - Weekend work toggle
- Optional sections:
  - Assumptions
  - Risks
  - Dependencies
- Markdown export with Hoskbrew branding
- Copy to clipboard or download
- Professional formatting for client-facing documents

**UI Components**:
- `EmployeeEstimateReport` component
- Report preview with markdown formatting
- Export controls (copy/download)
- Configuration form with validation

---

## 📈 Reports *(Internal Only)*

### **Tab: Financial Model**
**Purpose**: Standalone revenue/cost analysis

**Features**:
- Development cost input
- Unit economics configuration:
  - MSRP (recommended $15-25)
  - COGS (typical 20-30% of MSRP)
  - Print cost per unit
- Distribution channels:
  - Direct (100% margin)
  - DTRPG (65% margin)
  - Retail (40% margin)
- Break-even calculations
- Revenue scenarios (pessimistic/realistic/optimistic)
- Profitability analysis

**UI Components**:
- `FinancialModel` component
- Cost breakdown cards
- Revenue projection charts
- Break-even visualization

---

### **Tab: Dossier**
**Purpose**: Project-specific deep-dive reports

**Features**:
- Project selection dropdown (17+ projects available)
- Tone toggle: Internal (Analytical) vs External (Publisher-Safe)
- Meeting notes input (integrates into PART I)
- Markdown generation with comprehensive sections:
  - **PART I**: Current State (timeline, context, meeting notes)
  - **PART II**: Strategic Analysis (audience, market position, dependencies)
  - **PART III**: Financial Modeling (labor subsidy, per-word economics)
  - **PART IV**: Production Insights (complexity, timeline, team)
  - **PART V**: Series Outlook (future volumes, portfolio impact)
- Copy to clipboard functionality

**UI Components**:
- `DossierView` component
- Tone selector buttons (Internal/External)
- Markdown preview/copy
- Meeting notes textarea

---

### **Tab: Export Report**
**Purpose**: Comprehensive production plan report (Martin format)

**Features**:
- Team capacity inputs:
  - Dan weekly hours
  - Martin weekly hours
- Art budget configuration based on A1 baseline (23 pieces audited):
  - Regional maps
  - Encounter maps
  - Interior illustrations
  - Spot art
  - NPC portraits
  - Covers
- Art density presets:
  - **OSR**: 0.4x density (sparse)
  - **5E Core**: 1.0x density (baseline)
  - **Pathfinder**: 2.5x density (rich)
- Investment range (low/high estimates)
- Format selector: Markdown / HTML / PDF
- Preview toggle
- Export options: Copy, Download, Print

**Sections Generated**:
1. Executive Summary
2. Portfolio Overview (17 products)
3. Resource Analysis
4. Art Budget Breakdown
5. Timeline Projections
6. Investment Requirements

**UI Components**:
- `ReportExport` component
- Art baseline inputs with per-item pricing
- Format tabs with preview
- Export controls

---

### **Tab: Lessons Learned** *(Internal Only)*
**Purpose**: Historical project failure analysis

**Features**:
- Historical failure cards:
  - **Ravenous Coast A1**: Budget overrun, rushed timeline
  - **Pathfinder Conversion**: Scope creep, technical debt
  - **Video Game RPG**: Over-ambition, skill mismatch
- Metrics tracking:
  - Budget vs actual
  - Timeline vs actual
  - Team size actual vs optimal
- Root cause patterns identification
- Prevention strategies
- Optimal team size recommendations

**UI Components**:
- `FailureAnalysis` component
- Failure selector cards
- Metrics comparison tables
- Prevention strategy lists
- Pattern recognition summaries

---

## 🎨 UI Design System

### **Color Scheme** (`lib/colors.ts`)

**Status Colors**:
- **Healthy**: Emerald (green) - <90% capacity
- **Caution**: Amber (yellow) - 90-110% capacity
- **Warning**: Orange - 110-150% capacity
- **Critical**: Red - >150% capacity

**Action Colors**:
- **Primary**: Indigo - Main actions, CTAs
- **Success**: Emerald - Confirmations, positive states
- **Warning**: Amber - Caution states, alerts
- **Danger**: Rose - Destructive actions, errors
- **Info**: Blue - Informational messages

**Capacity Colors**: Dynamic based on load percentage
- Automatically adjusts border, text, and background colors
- Provides instant visual feedback on resource health

### **Typography**
- **Headlines**: Bold, slate-900
- **Subheads**: Medium, slate-800
- **Body**: Regular, slate-700
- **Labels**: Uppercase tracking, slate-400/500
- **Mono**: Code/numbers in monospace font

### **Component Patterns**

1. **Header Cards**
   - White background
   - Border with rounded-2xl
   - Shadow-sm for depth
   - Icon + title + description on left
   - Action icon/controls on right
   - Responsive layout

2. **Data Cards**
   - White background with colored accents
   - Border changes color based on status
   - Hover effects: border-color transition, shadow increase
   - Padding and spacing for readability

3. **Form Inputs**
   - Border: slate-200
   - Focus: ring-2, ring-indigo-500
   - Rounded-lg standard
   - Labels above inputs
   - Error states with red border and message

4. **Buttons**
   - **Primary**: bg-indigo-600, hover:bg-indigo-500
   - **Secondary**: bg-slate-100, hover:bg-slate-200
   - **Danger**: bg-rose-600, hover:bg-rose-700
   - **Success**: bg-emerald-600, hover:bg-emerald-700
   - Rounded-lg with smooth transitions
   - Icon + text combinations

5. **Tables/Grids**
   - Striped rows (odd/even background)
   - Sticky headers for long scrolls
   - Inline editing with yellow highlight for unsaved changes
   - Responsive columns

6. **Tooltips** (`lib/tooltips.ts`)
   - Context-sensitive help throughout
   - Categories: planning, financial, roles, production
   - Icons from lucide-react
   - Hover-triggered with smooth transitions

7. **Empty States** (`lib/tooltips.ts`)
   - Guidance messages for first-time users
   - Action suggestions to get started
   - Helpful starting points with examples

---

## 🔧 Technical Features

### **Validation & Feedback** (`lib/ui-feedback.tsx`)

**Features**:
- Real-time validation with debouncing (500ms)
- Field-level error and warning messages
- Common validation rules:
  - Word count: 1,000 - 1,000,000
  - Timeline: 1 - 24 months
  - Budget: $1,000 - $1,000,000
  - Team size: 1 - 20 members
  - Hourly rate: $10 - $500
  - Weekly capacity: 1 - 80 hours
- Loading states with progress bars
- Empty state guidance
- Success confirmations

**Validation States**:
- ✅ **Valid**: Green check icon, success message
- ⚠️ **Warning**: Yellow alert icon, caution message
- ❌ **Error**: Red X icon, error message with guidance
- 🔄 **Loading**: Spinner, progress indicator

### **Data Management**

**Persistence**:
- **Local Storage**: Overrides and published states
- **JSON Snapshots**: Export/import functionality
- **Git Workflow**: Version control for key states (tagging recommended)

**State Management**:
- **Product Context** (`lib/ProductContext.tsx`): Centralized state for product CRUD
- **Team Load Context** (`lib/TeamLoadContext.tsx`): Track team member assignments
- **Unified Project Model** (`lib/unified-project-model.ts`): Singleton pattern for state coordination

**Constants** (`lib/constants.ts`):
- `INITIAL_PROJECTS`: 17 projects with full metadata
- `PRODUCTION_PHASES`: Scaffolding vs Assembly definitions
- `ROLE_TEMPLATES`: 10+ production roles with defaults
- `TEAM_ROSTER`: Current team configuration (Dan, Martin, Matthew)
- `ART_DENSITY_PRESETS`: Market comparison data (OSR, 5E, Pathfinder)

### **Calculations** (`lib/calculations.ts`)

**Core Functions**:
- `runEstimator`: Core timeline calculation with chaos buffers
- `calculateProjectAnalysis`: Per-project cost and hour breakdown
- `calculateAnnualLoad`: Team capacity vs project demands
- `bucketByQuarter`: Timeline-based project organization
- `computePaceScenario`: Daily/weekly pacing with start dates
- `estimateProjectArt`: Page-based art density calculation
- `calculateDefenseAnalysis`: Labor subsidy calculations

**Art Estimation**:
- A1 baseline: 23 pieces (1 regional map, 8 encounter maps, 10 interior illustrations, 3 spot art, 1 cover)
- Market preset multipliers for genre comparison
- Per-page density calculations

### **Report Generation**

**Markdown Generators**:
- `lib/report-generator.ts`: Production plan markdown (Martin format)
- `lib/employee-estimate-generator.ts`: Employee estimate markdown (stakeholder reports)
- `lib/dossier-generator.ts`: Project dossier markdown (internal/external tone)
- `lib/strategic-pivot-report.ts`: Crisis analysis reports
- `lib/skeleton-crew-plan.ts`: Skeleton crew scenario planning

---

## 📱 Responsive Design

**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Layout Patterns**:
- Mobile-first approach
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flex wrapping for button groups
- Collapsible navigation on mobile
- Touch-friendly tap targets (min 44x44px)
- Responsive tables with horizontal scroll on mobile

---

## 🚀 Future Enhancements

### **In Development**
- ✅ Cartography module (spec exists at `CARTOGRAPHY_MODULE_SPEC.md`)
- ⏳ PDF export (partially stubbed)
- ⏳ Load scenario functionality (save works, load prints to console)

### **Planned**
- ⏳ Multi-phase workflow UI (concept → draft → compile → revise → proof)
- ⏳ Drag-and-drop kanban functionality
- ⏳ Weekly pacing mode UI (calculation exists, UI pending)
- ⏳ Advanced filtering and search
- ⏳ Collaborative editing features
- ⏳ Notification system for deadline alerts

---

## 🎯 Key User Flows

### **Budget Meeting Prep Flow**
1. Toggle **Client Mode** ON
2. Review **Cost Savings** tab → show efficiency metrics
3. Check **Budget & Plan** → quarterly roadmap
4. **Export Report** → generate production plan
5. Walk into meeting with sanitized view

**Time**: ~5 minutes  
**Outcome**: Client-ready documentation with sanitized terminology

---

### **Estimation Flow**
1. **Estimator Tools** → Quick Estimate for ballpark
2. **Advanced Estimate** for precise scoping
3. Add to **Estimation Buckets** for tracking
4. **My Estimate** → generate professional timeline report
5. Export markdown for stakeholder email

**Time**: ~10 minutes  
**Outcome**: Professional timeline report with assumptions documented

---

### **Team Planning Flow**
1. **Integrated Planning** → Team Builder (configure team)
2. **Resource Validation** → identify bottlenecks
3. **Scenario Engine** → test feasibility, save scenarios
4. Compare scenarios side-by-side
5. **Financial Model** → validate revenue assumptions

**Time**: ~20 minutes  
**Outcome**: Validated project plan with multiple scenarios and financial projections

---

### **Crisis Analysis Flow**
1. **Team Health / Resourcing** → review ghost capacity
2. **Institutional Archive** → check survival metrics
3. **Capacity Gap** → understand resource shortfall
4. **Lessons Learned** → review historical failures
5. **Dossier** (Internal tone) → generate crisis report

**Time**: ~15 minutes  
**Outcome**: Comprehensive crisis analysis with historical context

---

### **Project Dossier Flow**
1. **Dossier** tab → select project
2. Choose tone (Internal/External)
3. Add meeting notes if available
4. Review generated sections
5. Copy to clipboard → paste into email/doc

**Time**: ~5 minutes  
**Outcome**: Comprehensive project analysis document

---

## 📁 Project Structure

```
/app
  ├── globals.css          # Global styles, Tailwind directives
  ├── layout.tsx           # Root layout with metadata
  └── page.tsx             # Main dashboard (800+ lines)

/components
  ├── MainNav.tsx          # Navigation bar
  └── dashboard/           # 20+ dashboard components
      ├── BudgetView.tsx
      ├── CapacityGapView.tsx
      ├── DossierView.tsx
      ├── EstimatorView.tsx
      ├── TeamConfiguration.tsx
      └── ... (more)

/lib
  ├── calculations.ts      # Core estimation algorithms
  ├── colors.ts           # Color system
  ├── constants.ts        # Projects, roles, presets
  ├── types.ts            # TypeScript interfaces
  ├── utils.ts            # Helper functions
  ├── ProductContext.tsx  # Product state management
  ├── TeamLoadContext.tsx # Team load tracking
  └── *-generator.ts      # Report generators

/public
  └── (static assets)

/Reference
  └── (documentation, templates, historical data)
```

---

## 🔑 Key Technologies

**Core Stack**:
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Hooks**: State management (useState, useEffect, useContext)
- **Lucide React**: Icon library

**Data Handling**:
- **Local Storage**: Client-side persistence
- **JSON**: Import/export format
- **CSV**: Budget data import/export
- **Markdown**: Report generation

**Development**:
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Dev Container**: Ubuntu 24.04.3 LTS environment

---

## 🎓 Usage Guidelines

### **For Budget Meetings**
- Always use **Client Mode** when screen sharing
- Prepare **Export Report** in advance
- Have **Cost Savings** metrics ready
- Keep **Dossier** (External tone) available for specific project questions

### **For Internal Planning**
- Use **Internal Mode** for full transparency
- Save scenarios in **Integrated Planning** before major decisions
- Track estimates in **Estimation Buckets**
- Review **Lessons Learned** before starting similar projects

### **For Stakeholder Reports**
- Generate **My Estimate** reports for individual contributors
- Use **Dossier** (External tone) for project-specific updates
- Export **Production Plan** for quarterly reviews
- Include **Financial Model** data for revenue discussions

---

## 🛡️ Governance & Protocols

### **Change Management** (`ASSUMPTIONS_AND_PROTOCOL.md`)
- Snapshot → modify → commit → review workflow
- Conservative defaults mandate
- Scenario hygiene rules
- Technical safety nets (git tagging, exports)

### **Cartography Module** (`CARTOGRAPHY_MODULE_SPEC.md`)
- Future cartography/mapping module specification
- Role definitions for map production
- Integration points with main estimator

---

## 🎯 Summary

This is a **production-ready strategic planning tool** designed for:
- ✅ High-stakes budget discussions
- ✅ Resource capacity modeling
- ✅ Project feasibility analysis
- ✅ Stakeholder reporting
- ✅ Crisis management (Great Remote Purge scenario)

**Key Strengths**:
- Dual-mode visibility (Internal/Client)
- Comprehensive validation
- Professional report generation
- Historical failure analysis
- Team-aware estimation
- Financial modeling integration

**Use Cases**:
- Budget meeting preparation
- Project timeline estimation
- Team resource planning
- Stakeholder communication
- Crisis analysis and response
- Long-term portfolio planning

The dashboard prioritizes **clarity, defensibility, and speed-to-insight** for decision-making under pressure.
