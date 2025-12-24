# Developer Brief: Gap Mitigation Tool (Team Health - Phase 1)

**Status:** Feature Implementation Spec  
**Priority:** High  
**Component:** PurgeView.tsx (Redesign)  
**Related:** TeamManagement.tsx (Integration)

---

## 🎯 Objective

Transform the static "Ghost Capacity" section from a depressing list of lost staff into an **interactive Gap Mitigation tool** that helps users recover operational capacity through actionable decisions.

**Current State:** "We lost Jon, Derek, and Randy. We have a 120h/wk deficit."  
**Target State:** "We need a Lead Writer (40h/wk). Here are three ways to fill it: Hire freelancer, Assign AI agent, Cut from scope."

---

## 📋 Requirements

### 1. **Rename & Reframe the Section**

**Current:**
```
Ghost Capacity
Workload previously handled by fired staff:
- Jon (Writing/Editing)  40h/wk
- Derek (Art/Visuals)    40h/wk
- Randy (Production)     40h/wk
```

**Target:**
```
Operational Deficits
Gaps created by staffing changes. Choose a mitigation strategy for each role.
```

---

### 2. **Convert Ghost Entries to Generic Open Roles**

**Input Data:**
The `LEGACY_GHOST_CAPACITY` in `lib/constants.ts` currently has:
```typescript
export const LEGACY_GHOST_CAPACITY = [
  { label: "Jon (Writing/Editing)", hours: "40h/wk" },
  { label: "Derek (Art/Visuals)", hours: "40h/wk" },
  { label: "Randy (Production Lead)", hours: "40h/wk" },
];
```

**Transform Logic:**
Parse the role from the label and create a standardized "OpenRole" type:

```typescript
interface OpenRole {
  id: string;
  role: string;           // "Lead Writer", "Art Coordinator", "Project Manager"
  hoursNeeded: number;    // 40
  unitsPerWeek: "hours";  // Always "hours" for now
  mitigation: MitigationStrategy; // See section 3
}

type MitigationStrategy = "unassigned" | "freelancer" | "ai_agent" | "cut_scope";

interface OperationalDeficit {
  openRoles: OpenRole[];
  totalDeficit: number;   // Sum of all hoursNeeded (120)
}
```

**Display Format:**
```
Gap: Lead Writer (40h/wk needed)
Gap: Art Coordinator (40h/wk needed)
Gap: Project Manager (40h/wk needed)

Total Deficit: 120h/wk
```

---

### 3. **Add Mitigation Toggles (Action Buttons)**

For each gap, display **three mitigation options** as styled toggle buttons:

```
Gap: Lead Writer (40h/wk needed)

[Split to Freelancers]  [Assign to AI]  [Cut from Scope]
```

**Button Styling:**
- Default: `bg-slate-100 text-slate-600` (unselected)
- Selected: `bg-indigo-600 text-white` (one active at a time)
- Each gap can have exactly **one** active mitigation strategy
- Clicking a button sets that role's mitigation type

**Button Behaviors:**

#### **"Split to Freelancers"**
- **State:** `mitigation = "freelancer"`
- **Visual:** `bg-amber-100 text-amber-800` when selected
- **Side Effect:** 
  - Increment the "Freelancers Needed" counter in summary stats
  - Add badge to role: `💼 Freelancer`
  - Calculate estimated cost if possible (use median rate from ROLE_TEMPLATES)
- **Integration:** Later, sync this back to TeamManagement to suggest a pre-configured freelancer role

#### **"Assign to AI"**
- **State:** `mitigation = "ai_agent"`
- **Visual:** `bg-purple-100 text-purple-800` when selected
- **Side Effect:**
  - Increment the "AI Agent Tasks" counter in summary stats
  - Add badge to role: `🤖 AI-Assisted`
  - Mark task as "eligible for AI tools" (flag in project planner)
- **Caveat:** Only valid for writing/editorial roles (not art/layout)
  - If Art Coordinator or Layout Designer: Show disabled button with tooltip: "Not suitable for AI agents"

#### **"Cut from Scope"**
- **State:** `mitigation = "cut_scope"`
- **Visual:** `bg-red-100 text-red-800` when selected
- **Side Effect:**
  - Increment the "Scope Cuts" counter in summary stats
  - Add badge to role: `✂️ Removed from Scope`
  - Add note: "Warning: This reduces output by [X]%"
  - Show estimated impact (e.g., "-20% writing capacity")

---

### 4. **Summary Stats Below Each Mitigation Button Group**

Display live counters that update as mitigation choices are made:

```
Strategy Summary:
💼 Freelancers Needed: 2  |  🤖 AI Tasks: 1  |  ✂️ Scope Cuts: 0

Mitigation Cost:
Freelancer (Est.): $8,000–$12,000/month
AI Tools (Est.): Included in subscription
Scope Cuts (Impact): -15% total output
```

---

### 5. **Data Persistence**

The mitigation choices should be **stored in state** (not localStorage yet—save for Phase 2):

```typescript
const [mitigations, setMitigations] = useState<Record<string, MitigationStrategy>>({
  "lead-writer": "unassigned",
  "art-coordinator": "unassigned",
  "project-manager": "unassigned",
});

const handleMitigationChange = (roleId: string, strategy: MitigationStrategy) => {
  setMitigations(prev => ({
    ...prev,
    [roleId]: strategy,
  }));
};
```

---

### 6. **UI Layout**

Replace the current "Ghost Capacity" card (in PurgeView.tsx) with:

```
┌─────────────────────────────────────────────────────┐
│ Operational Deficits                                │
│ Gaps created by staffing changes. Choose a          │
│ mitigation strategy for each role.                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Gap: Lead Writer (40h/wk needed)                   │
│  [Split to Freelancers]  [Assign to AI]  [Cut]      │
│  Badge: (none selected) → Shows amber when selected │
│                                                     │
│  Gap: Art Coordinator (40h/wk needed)               │
│  [Split to Freelancers]  [Assign to AI]✗  [Cut]     │
│  (AI disabled with tooltip: "Not suitable...")      │
│                                                     │
│  Gap: Project Manager (40h/wk needed)               │
│  [Split to Freelancers]  [Assign to AI]✗  [Cut]     │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Total Deficit: 120h/wk                              │
│                                                     │
│ Strategy Summary:                                   │
│ 💼 Freelancers Needed: 1                            │
│ 🤖 AI Tasks: 0                                      │
│ ✂️ Scope Cuts: 0                                    │
├─────────────────────────────────────────────────────┤
│ Estimated Recovery Path:                            │
│ • Hire 1 freelancer: +40h/wk                        │
│ • Remaining gap: 80h/wk                             │
│ • Recommendation: Assign remaining to AI or scope   │
└─────────────────────────────────────────────────────┘
```

---

## 📝 Implementation Checklist

- [ ] **Create new data type:** `OpenRole` and `OperationalDeficit` interfaces
- [ ] **Parse ghost capacity:** Convert label "Jon (Writing/Editing)" → role "Lead Writer"
- [ ] **Add state management:** `mitigations` state object tracking selected strategy per role
- [ ] **Build UI components:**
  - [ ] `GapCard` subcomponent for each role with title, hours, and 3 buttons
  - [ ] Mitigation buttons with proper styling (amber/purple/red) and selected state
  - [ ] Disabled state for AI buttons on non-writing roles
  - [ ] Badge display (💼🤖✂️) next to role name when selected
- [ ] **Calculate summary stats:**
  - [ ] Count freelancers needed (count roles with "freelancer" strategy)
  - [ ] Count AI tasks (count roles with "ai_agent" strategy)
  - [ ] Count scope cuts (count roles with "cut_scope" strategy)
  - [ ] Calculate remaining deficit after mitigation
- [ ] **Display cost estimates:**
  - [ ] Freelancer costs using median ROLE_TEMPLATES rates
  - [ ] AI note (e.g., "Included in subscription")
  - [ ] Scope cut impact (estimated % loss)
- [ ] **Error handling:**
  - [ ] Ensure exactly one mitigation per role at a time
  - [ ] Validate against role type (AI only for writing roles)
- [ ] **Testing:**
  - [ ] Select different mitigation options and verify state updates
  - [ ] Verify counters update correctly
  - [ ] Check disabled state on non-writing roles
  - [ ] Verify total deficit calculation updates

---

## 🎨 Color Palette

| Strategy | Color | Hex |
|----------|-------|-----|
| Unassigned | Slate | `#e2e8f0` (bg-slate-100) |
| Freelancer | Amber | `#fef3c7` (bg-amber-100), text `#b45309` (text-amber-800) |
| AI Agent | Purple | `#ede9fe` (bg-purple-100), text `#6d28d9` (text-purple-800) |
| Cut Scope | Red | `#fee2e2` (bg-red-100), text `#991b1b` (text-red-800) |

---

## 💡 Future Phases (Out of Scope for This PR)

- **Phase 2:** Persist mitigation choices to localStorage
- **Phase 3:** "Recovery Status" progress bar (Solvency Meter)
- **Phase 4:** Integration with TeamManagement to auto-suggest freelancer roles
- **Phase 5:** Strategic Pivot operationalization (block admin time, flag low-priority projects)

---

## 📌 Key Notes for Developers

1. **This is the "to-do list" version** of the Ghost Capacity section. Users can now *do something* about the deficit instead of just seeing the number.

2. **No data is saved yet** in this phase. This is a prototype for user interaction. Phase 2 will add persistence.

3. **The math should be simple:** Total Deficit = sum of hoursNeeded for all roles. As strategies are selected, show "Remaining Deficit" = Total - (freelancer hours + AI-suitable hours + cut hours).

4. **AI eligibility:** Only roles that contain "Writing," "Editor," "Narrative," or "Coordinator" in the name are suitable for AI agents. All others show disabled buttons.

5. **Keep it interactive and responsive.** Every button click should feel like progress toward recovery.

---

## 🔗 References

- Current PurgeView: `components/dashboard/PurgeView.tsx`
- Ghost Capacity Data: `lib/constants.ts` → `LEGACY_GHOST_CAPACITY`
- Role Templates: `lib/constants.ts` → `ROLE_TEMPLATES` (for cost estimation)
- Team Types: `lib/types.ts` → `TeamMember`

---

## Questions for Clarification

1. Should freelancer cost estimates use the median, min, or max of the matching role template?
2. Should the "Recovery Status" progress bar appear in this phase, or wait for Phase 3?
3. Should selecting a mitigation option trigger any side effects in other parts of the app (e.g., auto-add a freelancer to TeamManagement)?
