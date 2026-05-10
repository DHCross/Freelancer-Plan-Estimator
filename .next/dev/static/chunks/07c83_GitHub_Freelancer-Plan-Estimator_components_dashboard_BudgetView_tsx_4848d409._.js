(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetView",
    ()=>BudgetView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PROJECT_TEMPLATES = [
    {
        name: "Small Adventure",
        type: "Small Adventure",
        targetWords: 20000,
        estimatedHours: 80,
        budgetType: "Revenue Generator"
    },
    {
        name: "Large Adventure",
        type: "Large Adventure",
        targetWords: 97000,
        estimatedHours: 388,
        budgetType: "Revenue Generator"
    },
    {
        name: "Player Sourcebook",
        type: "Player Sourcebook",
        targetWords: 75000,
        estimatedHours: 300,
        budgetType: "Flagship Release"
    },
    {
        name: "Lore/Structure",
        type: "Lore/Structure",
        targetWords: 30000,
        estimatedHours: 120,
        budgetType: "CapEx (Enabler)"
    },
    {
        name: "Custom Project",
        type: "Custom",
        targetWords: 25000,
        estimatedHours: 100,
        budgetType: "Custom"
    }
];
const QUARTERS = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Dec 22 Deadline",
    "Ongoing"
];
function BudgetView({ analysis, quarters, clientMode, onProjectUpdate }) {
    _s();
    // Convert analysis to local state for editing in internal mode
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(analysis);
    const [editStates, setEditStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectionStates, setSelectionStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showAddDialog, setShowAddDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PROJECT_TEMPLATES[0]);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saveMessage, setSaveMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [undoMessage, setUndoMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BudgetView.useEffect": ()=>{
            const merged = analysis.map({
                "BudgetView.useEffect.merged": (p)=>{
                    const published = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublished"])(p.id);
                    return {
                        ...p,
                        estCost: published?.estCost ?? p.estCost,
                        displayDate: published?.displayDate ?? p.displayDate ?? p.launchWindow
                    };
                }
            }["BudgetView.useEffect.merged"]);
            setItems(merged);
        }
    }["BudgetView.useEffect"], [
        analysis
    ]);
    // Helper to update a specific item
    const updateItem = (id, field, value)=>{
        // Save to history before change
        setHistory((prev)=>[
                ...prev.slice(-9),
                [
                    ...items
                ]
            ]);
        setItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    [field]: value
                } : item));
        // Also update parent data if handler provided
        if (onProjectUpdate) {
            onProjectUpdate(id, field, value);
        }
        // Show save feedback
        setSaveMessage("Changes saved");
        setTimeout(()=>setSaveMessage(null), 2000);
    };
    // Helper to add new project
    const addProject = (template, targetQuarter)=>{
        const newProject = {
            id: Math.max(...items.map((p)=>p.id), 0) + 1,
            name: template?.name ?? "New Project",
            type: template?.type ?? "Custom",
            clientType: "Internal",
            targetWords: template?.targetWords ?? 25000,
            total: template?.estimatedHours ?? 100,
            assignedTo: "dan",
            internalStatus: "Planning",
            clientStatus: "Internal",
            stakeholder: "Dan",
            launchWindow: targetQuarter ?? "Q2 2026",
            displayDate: targetQuarter ?? "Q2 2026",
            budgetType: template?.budgetType ?? "Custom",
            dependency: null,
            revenuePotential: "TBD",
            estCost: (template?.estimatedHours ?? 100) * 20,
            committedCost: 0
        };
        setItems((prev)=>[
                ...prev,
                newProject
            ]);
        if (onProjectUpdate) {
            onProjectUpdate(newProject.id, 'name', newProject.name);
        }
        setSaveMessage("Project added");
        setTimeout(()=>setSaveMessage(null), 2000);
    };
    // Helper to delete project
    const deleteProject = (id)=>{
        setHistory((prev)=>[
                ...prev.slice(-9),
                [
                    ...items
                ]
            ]);
        setItems((prev)=>prev.filter((item)=>item.id !== id));
        setSaveMessage("Project deleted");
        setTimeout(()=>setSaveMessage(null), 2000);
    };
    // Helper to clone project
    const cloneProject = (id)=>{
        const original = items.find((item)=>item.id === id);
        if (!original) return;
        const cloned = {
            ...original,
            id: Math.max(...items.map((p)=>p.id), 0) + 1,
            name: `${original.name} (Copy)`
        };
        setItems((prev)=>[
                ...prev,
                cloned
            ]);
        setSaveMessage("Project cloned");
        setTimeout(()=>setSaveMessage(null), 2000);
    };
    // Helper to undo last change
    const undoLastChange = ()=>{
        if (history.length === 0) return;
        const previousState = history[history.length - 1];
        setItems(previousState);
        setHistory((prev)=>prev.slice(0, -1));
        setUndoMessage("Changes undone");
        setTimeout(()=>setUndoMessage(null), 2000);
    };
    // Toggle edit state for a project
    const toggleEdit = (id)=>{
        setEditStates((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    // Toggle selection for bulk operations
    const toggleSelection = (id)=>{
        setSelectionStates((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    // Select all projects
    const selectAll = ()=>{
        const allSelected = items.every((item)=>selectionStates[item.id]);
        const newSelection = {};
        items.forEach((item)=>{
            newSelection[item.id] = !allSelected;
        });
        setSelectionStates(newSelection);
    };
    // Bulk delete selected projects
    const bulkDelete = ()=>{
        const selectedIds = Object.entries(selectionStates).filter(([_, selected])=>selected).map(([id])=>Number(id));
        if (selectedIds.length === 0) return;
        if (!confirm(`Delete ${selectedIds.length} selected projects?`)) return;
        setHistory((prev)=>[
                ...prev.slice(-9),
                [
                    ...items
                ]
            ]);
        setItems((prev)=>prev.filter((item)=>!selectedIds.includes(item.id)));
        setSelectionStates({});
        setSaveMessage(`${selectedIds.length} projects deleted`);
        setTimeout(()=>setSaveMessage(null), 2000);
    };
    // Move selected projects to a different quarter
    const bulkMoveToQuarter = (targetQuarter)=>{
        const selectedIds = Object.entries(selectionStates).filter(([_, selected])=>selected).map(([id])=>Number(id));
        if (selectedIds.length === 0) return;
        setHistory((prev)=>[
                ...prev.slice(-9),
                [
                    ...items
                ]
            ]);
        setItems((prev)=>prev.map((item)=>selectedIds.includes(item.id) ? {
                    ...item,
                    displayDate: targetQuarter,
                    launchWindow: targetQuarter
                } : item));
        setSelectionStates({});
        setSaveMessage(`${selectedIds.length} projects moved to ${targetQuarter}`);
        setTimeout(()=>setSaveMessage(null), 2000);
    };
    // Calculate total budget
    const totalBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BudgetView.useMemo[totalBudget]": ()=>{
            return items.reduce({
                "BudgetView.useMemo[totalBudget]": (acc, item)=>acc + (item.estCost ?? 0)
            }["BudgetView.useMemo[totalBudget]"], 0);
        }
    }["BudgetView.useMemo[totalBudget]"], [
        items
    ]);
    // Group items by quarter
    const groupedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BudgetView.useMemo[groupedItems]": ()=>{
            const groups = {};
            QUARTERS.forEach({
                "BudgetView.useMemo[groupedItems]": (q)=>groups[q] = []
            }["BudgetView.useMemo[groupedItems]"]);
            items.forEach({
                "BudgetView.useMemo[groupedItems]": (item)=>{
                    const key = QUARTERS.find({
                        "BudgetView.useMemo[groupedItems]": (q)=>(item.displayDate ?? item.launchWindow ?? "").includes(q)
                    }["BudgetView.useMemo[groupedItems]"]) || "Q4";
                    groups[key].push(item);
                }
            }["BudgetView.useMemo[groupedItems]"]);
            return groups;
        }
    }["BudgetView.useMemo[groupedItems]"], [
        items
    ]);
    const [publishMessage, setPublishMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showBulkActions, setShowBulkActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect mobile viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BudgetView.useEffect": ()=>{
            const checkMobile = {
                "BudgetView.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 768)
            }["BudgetView.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "BudgetView.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["BudgetView.useEffect"];
        }
    }["BudgetView.useEffect"], []);
    const handlePublishAll = ()=>{
        if (!confirm("Publish all current internal changes to client view? This will overwrite current client values.")) return;
        items.forEach((item)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPublished"])(item.id, {
                estCost: item.estCost,
                displayDate: item.displayDate ?? item.launchWindow
            });
        });
        setPublishMessage("All items published to Client view.");
        setTimeout(()=>setPublishMessage(null), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-6 rounded-xl shadow-lg ${clientMode ? "bg-slate-900 text-white" : "bg-indigo-900 text-white border-b-4 border-indigo-500"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-6 h-6 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        clientMode ? "2026 Budget Roadmap" : "Internal Cost Controller"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300 text-sm opacity-80",
                                    children: clientMode ? "Projected capital requirements aligned with launch windows." : "Adjust hours, risk buffers, and timing below to hit target budget."
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl sm:text-4xl font-mono font-bold text-green-400",
                                            children: [
                                                "$",
                                                totalBudget.toLocaleString(undefined, {
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 uppercase tracking-widest mt-1",
                                            children: [
                                                "Total ",
                                                clientMode ? "Investment" : "Exposure"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowAddDialog(true),
                                            className: "flex items-center gap-1 px-3 py-2 bg-green-50 text-green-700 rounded border border-green-100 hover:bg-green-100 transition-colors",
                                            title: "Add a new project",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Add Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePublishAll,
                                            className: "flex items-center gap-1 px-3 py-2 bg-indigo-50 text-indigo-700 rounded border border-indigo-100 hover:bg-indigo-100 transition-colors",
                                            title: "Publish all changes to client view",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Publish All"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: undoLastChange,
                                            disabled: history.length === 0,
                                            className: "flex items-center gap-1 px-3 py-2 bg-slate-50 text-slate-700 rounded border border-slate-100 hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            title: "Undo last change",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Undo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            (saveMessage || undoMessage || publishMessage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-50 space-y-2",
                children: [
                    saveMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this),
                            saveMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 287,
                        columnNumber: 13
                    }, this),
                    undoMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this),
                            undoMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this),
                    publishMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 300,
                                columnNumber: 15
                            }, this),
                            publishMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 299,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this),
            showAddDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-xl max-w-md w-full p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-slate-900 mb-4",
                            children: "Add New Project"
                        }, void 0, false, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 mb-1",
                                            children: "Project Template"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedTemplate.name,
                                            onChange: (e)=>{
                                                const template = PROJECT_TEMPLATES.find((t)=>t.name === e.target.value);
                                                if (template) setSelectedTemplate(template);
                                            },
                                            className: "w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                                            children: PROJECT_TEMPLATES.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: template.name,
                                                    children: template.name
                                                }, template.name, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 mb-1",
                                            children: "Target Quarter"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: "Q2 2026",
                                            onChange: (e)=>{
                                            // Will use this when adding the project
                                            },
                                            className: "w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                                            children: QUARTERS.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: q,
                                                    children: [
                                                        q,
                                                        " 2026"
                                                    ]
                                                }, q, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 p-3 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-slate-700 mb-2",
                                            children: "Template Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs space-y-1 text-slate-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Type:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        selectedTemplate.type
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Words:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        selectedTemplate.targetWords.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Hours:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        selectedTemplate.estimatedHours
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Budget Type:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        selectedTemplate.budgetType
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        addProject(selectedTemplate, "Q2 2026");
                                        setShowAddDialog(false);
                                    },
                                    className: "flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors",
                                    children: "Add Project"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddDialog(false),
                                    className: "flex-1 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                            lineNumber: 352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                    lineNumber: 310,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, this),
            !clientMode && Object.values(selectionStates).some((selected)=>selected) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-indigo-700",
                                children: [
                                    Object.values(selectionStates).filter((selected)=>selected).length,
                                    " projects selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: bulkDelete,
                                        className: "px-3 py-1 bg-red-50 text-red-700 rounded border border-red-100 hover:bg-red-100 transition-colors text-sm",
                                        children: "Delete Selected"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowBulkActions(!showBulkActions),
                                                className: "px-3 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-100 hover:bg-indigo-100 transition-colors text-sm flex items-center gap-1",
                                                children: [
                                                    "Move to ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 388,
                                                columnNumber: 17
                                            }, this),
                                            showBulkActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full mt-1 left-0 bg-white border border-slate-200 rounded-lg shadow-lg z-10",
                                                children: QUARTERS.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            bulkMoveToQuarter(q);
                                                            setShowBulkActions(false);
                                                        },
                                                        className: "block w-full text-left px-3 py-2 text-sm hover:bg-slate-50 transition-colors",
                                                        children: [
                                                            q,
                                                            " 2026"
                                                        ]
                                                    }, q, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectionStates({}),
                        className: "text-sm text-slate-500 hover:text-slate-700 transition-colors",
                        children: "Clear Selection"
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isMobile ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}`,
                children: QUARTERS.map((q)=>{
                    const quarterItems = groupedItems[q] || [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-slate-50 to-slate-100 p-4 border-b border-slate-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-slate-700",
                                            children: [
                                                q,
                                                " 2026"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 431,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-medium px-2 py-1 rounded-full ${quarterItems.length > 0 ? "text-slate-500 bg-slate-200" : "text-slate-400 bg-slate-100"}`,
                                                    children: quarterItems.length > 0 ? `${quarterItems.length} items` : "Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 21
                                                }, this),
                                                !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addProject(undefined, q),
                                                    className: "w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors",
                                                    title: `Add project to ${q}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 434,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                    lineNumber: 430,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 429,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 ${isMobile ? 'space-y-3' : 'space-y-3'} min-h-[200px]`,
                                children: [
                                    quarterItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center h-full min-h-[160px] text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-300 text-4xl mb-2",
                                                children: "📋"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 455,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: "No projects scheduled"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 456,
                                                columnNumber: 21
                                            }, this),
                                            !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>addProject(undefined, q),
                                                className: "mt-3 text-xs text-indigo-600 hover:text-indigo-800 underline",
                                                children: "+ Add first project"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 454,
                                        columnNumber: 19
                                    }, this),
                                    quarterItems.map((item)=>{
                                        const cost = item.estCost ?? 0;
                                        const isEditing = editStates[item.id];
                                        const isSelected = selectionStates[item.id];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg border-l-4 p-3 text-sm transition-all relative ${clientMode ? "border-indigo-500 bg-white" : isSelected ? "border-amber-500 bg-amber-50" : "border-slate-400 bg-slate-50 hover:bg-slate-100"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: clientMode ? // Client view - read-only
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-slate-800",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-slate-600",
                                                                    children: [
                                                                        "$",
                                                                        Math.round(cost).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] uppercase font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded",
                                                                    children: item.budgetType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400 flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublished"])(item.id)?.displayDate ?? item.displayDate ?? item.launchWindow
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 27
                                                }, this) : // Internal view - with edit controls
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-2 border-b border-slate-200 pb-1 gap-2",
                                                            children: [
                                                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 flex-1 min-w-0",
                                                                    children: [
                                                                        !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: isSelected,
                                                                            onChange: ()=>toggleSelection(item.id),
                                                                            className: "w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500",
                                                                            title: "Select for bulk actions"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 509,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: item.name,
                                                                            onChange: (e)=>updateItem(item.id, "name", e.target.value),
                                                                            className: "font-bold text-indigo-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none px-1 truncate pr-2 flex-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 517,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 flex-1 min-w-0",
                                                                    children: [
                                                                        !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: isSelected,
                                                                            onChange: ()=>toggleSelection(item.id),
                                                                            className: "w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500",
                                                                            title: "Select for bulk actions"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-indigo-900 truncate flex-1",
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono font-bold text-green-600 text-xs",
                                                                            children: [
                                                                                "$",
                                                                                Math.round(cost).toLocaleString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>toggleEdit(item.id),
                                                                            className: `p-1 rounded transition-colors ${isEditing ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                                                                            title: isEditing ? "Save edits" : "Edit project",
                                                                            children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                lineNumber: 545,
                                                                                columnNumber: 48
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                lineNumber: 545,
                                                                                columnNumber: 79
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>cloneProject(item.id),
                                                                            className: "p-1 bg-slate-100 text-slate-600 rounded hover:bg-slate-200 transition-colors",
                                                                            title: "Clone project",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                lineNumber: 552,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 547,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>deleteProject(item.id),
                                                                            className: "p-1 bg-rose-100 text-rose-600 rounded hover:bg-rose-200 transition-colors",
                                                                            title: "Delete project",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                lineNumber: 559,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 554,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 29
                                                        }, this),
                                                        isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                                    children: "Hours"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 567,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>updateItem(item.id, "total", Math.max(0, item.total - 10)),
                                                                                            className: "p-1 bg-slate-100 hover:bg-slate-200 rounded-l border border-slate-300",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                                className: "w-3 h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                                lineNumber: 574,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 569,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "number",
                                                                                            value: item.total,
                                                                                            onChange: (e)=>updateItem(item.id, "total", Number(e.target.value)),
                                                                                            className: "flex-1 text-xs p-1 border-t border-b border-slate-300 text-center focus:ring-1 focus:ring-indigo-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 576,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>updateItem(item.id, "total", item.total + 10),
                                                                                            className: "p-1 bg-slate-100 hover:bg-slate-200 rounded-r border border-slate-300",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                                className: "w-3 h-3 rotate-180"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                                lineNumber: 587,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 582,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 568,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 566,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                                    children: "Rate"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 592,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "absolute left-1 top-1 text-xs text-slate-400",
                                                                                            children: "$"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 594,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "number",
                                                                                            value: item.total > 0 ? Math.round(item.estCost / item.total) : 20,
                                                                                            onChange: (e)=>updateItem(item.id, "estCost", Number(e.target.value) * item.total),
                                                                                            className: "w-full text-xs p-1 pl-4 border rounded focus:ring-1 focus:ring-indigo-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 595,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 593,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 591,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                                    children: "Words"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 606,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>updateItem(item.id, "targetWords", Math.max(0, item.targetWords - 1000)),
                                                                                            className: "p-1 bg-slate-100 hover:bg-slate-200 rounded-l border border-slate-300",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                                className: "w-3 h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                                lineNumber: 613,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 608,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "number",
                                                                                            value: item.targetWords,
                                                                                            onChange: (e)=>updateItem(item.id, "targetWords", Number(e.target.value)),
                                                                                            className: "flex-1 text-xs p-1 border-t border-b border-slate-300 text-center focus:ring-1 focus:ring-indigo-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 615,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>updateItem(item.id, "targetWords", item.targetWords + 1000),
                                                                                            className: "p-1 bg-slate-100 hover:bg-slate-200 rounded-r border border-slate-300",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                                className: "w-3 h-3 rotate-180"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                                lineNumber: 626,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 621,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 607,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 605,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                                    children: "Type"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    value: item.type,
                                                                                    onChange: (e)=>updateItem(item.id, "type", e.target.value),
                                                                                    className: "w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Corporate Mandate",
                                                                                            children: "Corporate Mandate"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 637,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Small Adventure",
                                                                                            children: "Small Adventure"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 638,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Large Adventure",
                                                                                            children: "Large Adventure"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 639,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Lore/Structure",
                                                                                            children: "Lore/Structure"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 640,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Custom",
                                                                                            children: "Custom"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 641,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 632,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 630,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 604,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                                    children: "Assigned To"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 647,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    value: item.assignedTo,
                                                                                    onChange: (e)=>updateItem(item.id, "assignedTo", e.target.value),
                                                                                    className: "w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "dan",
                                                                                            children: "Dan"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 653,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "martin",
                                                                                            children: "Martin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 654,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "matthew",
                                                                                            children: "Matthew"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 655,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 648,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 646,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                                    children: "Status"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 659,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    value: item.internalStatus,
                                                                                    onChange: (e)=>updateItem(item.id, "internalStatus", e.target.value),
                                                                                    className: "w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Priority",
                                                                                            children: "Priority"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 665,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Critical",
                                                                                            children: "Critical"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 666,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Drafting",
                                                                                            children: "Drafting"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 667,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Layout",
                                                                                            children: "Layout"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 668,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Planning",
                                                                                            children: "Planning"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                            lineNumber: 669,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                                    lineNumber: 660,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 658,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-[10px] text-slate-500 uppercase font-bold",
                                                                            children: "Launch Window"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 674,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: item.displayDate || item.launchWindow,
                                                                            onChange: (e)=>updateItem(item.id, "displayDate", e.target.value),
                                                                            className: "w-full text-xs p-1 border rounded focus:ring-1 focus:ring-indigo-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                            lineNumber: 675,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPublished"])(item.id, {
                                                                                estCost: item.estCost,
                                                                                displayDate: item.displayDate ?? item.launchWindow
                                                                            });
                                                                        },
                                                                        className: "text-xs px-2 py-1 rounded bg-emerald-50 border border-emerald-100 text-emerald-600",
                                                                        children: "Publish"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 682,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 31
                                                        }, this),
                                                        !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-xs text-slate-500 mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        item.type,
                                                                        " • ",
                                                                        item.assignedTo
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item.internalStatus
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                                    lineNumber: 699,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 484,
                                                columnNumber: 23
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                            lineNumber: 473,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    quarterItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-400 italic mb-3",
                                                children: "No projects in this quarter"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 710,
                                                columnNumber: 21
                                            }, this),
                                            !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>addProject(undefined, q),
                                                className: "inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-600 rounded border border-indigo-100 hover:bg-indigo-100 transition-colors text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Add project to ",
                                                    q
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                                lineNumber: 712,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 709,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 452,
                                columnNumber: 15
                            }, this)
                        ]
                    }, q, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 427,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50 border border-slate-200 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-bold text-slate-800 mb-3 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "w-4 h-4 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this),
                            "Budget Risk Analysis"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 730,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "Contingency Buffer:"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 736,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "15% standard"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 735,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "Risk Level:"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-amber-600",
                                        children: "Moderate"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 741,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "Margin Safety:"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 744,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-emerald-600",
                                        children: "Within targets"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                        lineNumber: 745,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                                lineNumber: 743,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                        lineNumber: 734,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
                lineNumber: 729,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/BudgetView.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s(BudgetView, "VbvrljDO3ft/wAosqcorNcOIvSI=");
_c = BudgetView;
var _c;
__turbopack_context__.k.register(_c, "BudgetView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=07c83_GitHub_Freelancer-Plan-Estimator_components_dashboard_BudgetView_tsx_4848d409._.js.map