(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegratedScenarioEngine",
    ()=>IntegratedScenarioEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$unified$2d$project$2d$model$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/unified-project-model.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function IntegratedScenarioEngine({ clientMode = false, onNavigateToTeamBuilder }) {
    _s();
    const [savedScenarios, setSavedScenarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showComparison, setShowComparison] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scenarioName, setScenarioName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSaveDialog, setShowSaveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unifiedModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "IntegratedScenarioEngine.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$unified$2d$project$2d$model$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedProjectModel"].getInstance()
    }["IntegratedScenarioEngine.useState"]);
    const [scenario, setScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(unifiedModel.getProjectScenario());
    const [teamConfig, setTeamConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(unifiedModel.getTeamConfiguration());
    const [resourceValidation, setResourceValidation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(unifiedModel.getResourceValidation());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntegratedScenarioEngine.useEffect": ()=>{
            setScenario(unifiedModel.getProjectScenario());
            setTeamConfig(unifiedModel.getTeamConfiguration());
            setResourceValidation(unifiedModel.getResourceValidation());
        }
    }["IntegratedScenarioEngine.useEffect"], [
        unifiedModel
    ]);
    const bottleneck = resourceValidation.length > 0 ? resourceValidation.reduce((max, current)=>current.loadPercentage > max.loadPercentage ? current : max) : null;
    const getRiskColor = (risk)=>{
        switch(risk){
            case "low":
                return "text-emerald-600 bg-emerald-50 border-emerald-200";
            case "medium":
                return "text-amber-600 bg-amber-50 border-amber-200";
            case "high":
                return "text-rose-600 bg-rose-50 border-rose-200";
            default:
                return "text-slate-600 bg-slate-50 border-slate-200";
        }
    };
    if (clientMode) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-slate-600",
                                children: "Integrated Planning Workflow"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium",
                                children: "Step 3 of 4"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium mb-1",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-slate-700",
                                            children: "1. Team Builder"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-emerald-600",
                                            children: "Complete"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-0.5 bg-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium mb-1",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-slate-700",
                                            children: "2. Resource Validation"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-emerald-600",
                                            children: "Complete"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-0.5 bg-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium mb-1 ring-2 ring-indigo-200 ring-offset-2",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-indigo-700",
                                            children: "3. Scenario Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-indigo-600",
                                            children: "Current"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-0.5 bg-slate-300"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-medium mb-1",
                                            children: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-slate-600",
                                            children: "4. Financial Model"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-500",
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 bg-indigo-50 border border-indigo-200 rounded-lg p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-indigo-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Current Step:"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                " Analyzing project feasibility and identifying bottlenecks. Validating timeline against team capacity."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-slate-200 rounded-xl p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                        className: "w-5 h-5 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-slate-900",
                                        children: "Project Scenario Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Data from Team Builder & Resource Validation"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    onNavigateToTeamBuilder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onNavigateToTeamBuilder,
                                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Edit Team"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 p-4 rounded-xl border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-slate-700 mb-4",
                                        children: "Target Inputs"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Target Budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-lg text-slate-900",
                                                        children: [
                                                            "$",
                                                            Math.round(scenario.targetBudget).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Target Timeline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-lg text-slate-900",
                                                        children: [
                                                            scenario.targetTimeline,
                                                            " months"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Team Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-lg text-slate-900",
                                                        children: [
                                                            teamConfig.members.length,
                                                            " people"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Project Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-lg text-slate-900",
                                                        children: [
                                                            teamConfig.projectSize.toLocaleString(),
                                                            " words"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 p-4 rounded-xl border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-blue-700 mb-4",
                                        children: "Validated Results"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-blue-600",
                                                        children: "Total Cost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-lg text-blue-900",
                                                        children: [
                                                            "$",
                                                            Math.round(scenario.validatedBudget).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-blue-600",
                                                        children: "Timeline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono font-bold text-lg ${scenario.validatedTimeline > scenario.targetTimeline ? "text-red-600" : "text-blue-900"}`,
                                                        children: [
                                                            scenario.validatedTimeline,
                                                            " months"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-blue-600",
                                                        children: "Coordination Overhead"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold text-blue-900",
                                                        children: [
                                                            Math.round(teamConfig.coordinationOverhead * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-blue-600",
                                                        children: "Feasibility"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-semibold ${scenario.feasible ? "text-emerald-600" : "text-red-600"}`,
                                                        children: scenario.feasible ? "✓ Feasible" : "✗ At Risk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${scenario.feasible ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'} p-4 rounded-xl border`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: `font-semibold ${scenario.feasible ? 'text-emerald-700' : 'text-amber-700'} mb-4`,
                                        children: "Impact Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${scenario.validatedBudget <= scenario.targetBudget ? 'bg-emerald-500' : 'bg-red-500'}`,
                                                        children: scenario.validatedBudget <= scenario.targetBudget ? '✓' : '✗'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium text-slate-700",
                                                                children: "Budget"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-xs ${scenario.validatedBudget <= scenario.targetBudget ? 'text-emerald-600' : 'text-red-600'}`,
                                                                children: scenario.validatedBudget <= scenario.targetBudget ? `Under by $${Math.round(scenario.targetBudget - scenario.validatedBudget).toLocaleString()}` : `Over by $${Math.round(scenario.validatedBudget - scenario.targetBudget).toLocaleString()}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${scenario.validatedTimeline <= scenario.targetTimeline ? 'bg-emerald-500' : 'bg-red-500'}`,
                                                        children: scenario.validatedTimeline <= scenario.targetTimeline ? '✓' : '✗'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium text-slate-700",
                                                                children: "Timeline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-xs ${scenario.validatedTimeline <= scenario.targetTimeline ? 'text-emerald-600' : 'text-red-600'}`,
                                                                children: scenario.validatedTimeline <= scenario.targetTimeline ? `On track (${scenario.validatedTimeline}/${scenario.targetTimeline} months)` : `Over by ${scenario.validatedTimeline - scenario.targetTimeline} months`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded text-xs ${scenario.feasible ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold mb-1",
                                                        children: "Risk Assessment:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 17
                                                    }, this),
                                                    scenario.feasible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "✅ Project meets budget and timeline constraints"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: "⚠️ Timeline extension will increase labor costs over time. Current bottlenecks need resolution to meet targets."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            !scenario.feasible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-100 rounded p-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-semibold text-slate-700 mb-1",
                                                        children: "Recommended Actions:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-600 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "• Resolve team bottlenecks in Resource Validation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "• Consider extending timeline or hiring contractors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "• Reallocate projects from overloaded team members"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-lg border ${getRiskColor(scenario.riskLevel)}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: scenario.feasible ? "✅ Project Feasible" : "❌ Project At Risk"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 rounded text-xs font-medium uppercase",
                                    children: [
                                        scenario.riskLevel,
                                        " RISK"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 p-4 rounded-lg border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-600 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Total Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-slate-900 tabular-nums",
                                        children: [
                                            "$",
                                            Math.round(scenario.validatedBudget).toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: [
                                            "vs $",
                                            Math.round(scenario.targetBudget).toLocaleString(),
                                            " target"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 p-4 rounded-lg border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-600 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-3xl font-bold tabular-nums ${scenario.validatedTimeline > scenario.targetTimeline ? "text-red-600" : "text-slate-900"}`,
                                        children: [
                                            scenario.validatedTimeline,
                                            " months"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: [
                                            "vs ",
                                            scenario.targetTimeline,
                                            " months target"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 p-4 rounded-lg border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-600 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Bottlenecks"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-slate-900 tabular-nums",
                                        children: scenario.bottlenecks.length
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: "critical issues"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    scenario.bottlenecks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-rose-50 border border-rose-200 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-rose-800 mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    "Bottlenecks (from Resource Validation)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-rose-700 space-y-1",
                                children: scenario.bottlenecks.map((bottleneck, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            bottleneck
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    !clientMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-2xl p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-5 h-5 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-slate-900",
                                                children: "Scenario Management"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSaveDialog(true),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].primary.bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].primary.bgHover} ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].primary.text} px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            "Save Current Scenario"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: savedScenarios.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                            className: "w-12 h-12 mx-auto mb-3 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: "No saved scenarios yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-1",
                                            children: "Save your current configuration to compare different approaches"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 346,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3",
                                    children: savedScenarios.map((saved, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-slate-900",
                                                                        children: saved.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full",
                                                                        children: new Date(saved.timestamp).toLocaleDateString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 gap-4 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-500",
                                                                                children: "Budget:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 365,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium text-slate-900",
                                                                                children: [
                                                                                    "$",
                                                                                    saved.data.validatedBudget.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 366,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                        lineNumber: 364,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-500",
                                                                                children: "Timeline:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 369,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium text-slate-900",
                                                                                children: [
                                                                                    saved.data.validatedTimeline,
                                                                                    " months"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 370,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-500",
                                                                                children: "Team:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 373,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium text-slate-900",
                                                                                children: [
                                                                                    saved.data.teamSize,
                                                                                    " people"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 374,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-500",
                                                                                children: "Issues:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium text-slate-900",
                                                                                children: saved.data.bottlenecks.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                                lineNumber: 378,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    // Load scenario logic would go here
                                                                    console.log('Load scenario:', saved);
                                                                },
                                                                className: "text-indigo-600 hover:text-indigo-700 text-sm font-medium",
                                                                children: "Load"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const updated = savedScenarios.filter((s)=>s.id !== saved.id);
                                                                    setSavedScenarios(updated);
                                                                },
                                                                className: "text-rose-600 hover:text-rose-700",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 355,
                                                columnNumber: 23
                                            }, this)
                                        }, saved.id, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 354,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            savedScenarios.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-slate-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowComparison(!showComparison),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].secondary.bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].secondary.bgHover} ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].secondary.text} px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2 w-full justify-center`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, this),
                                        showComparison ? 'Hide' : 'Show',
                                        " Scenario Comparison"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 411,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this),
                    showComparison && savedScenarios.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-2xl p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                        className: "w-5 h-5 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-slate-900",
                                        children: "Scenario Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left py-2 px-3 font-medium text-slate-700",
                                                        children: "Scenario"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-right py-2 px-3 font-medium text-slate-700",
                                                        children: "Budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-right py-2 px-3 font-medium text-slate-700",
                                                        children: "Timeline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-right py-2 px-3 font-medium text-slate-700",
                                                        children: "Team Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-right py-2 px-3 font-medium text-slate-700",
                                                        children: "Bottlenecks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-2 px-3 font-medium text-slate-700",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: savedScenarios.map((saved, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-slate-100 hover:bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-slate-900",
                                                                    children: saved.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: new Date(saved.timestamp).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-right py-3 px-3 font-mono",
                                                            children: [
                                                                "$",
                                                                saved.data.validatedBudget.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-right py-3 px-3 font-mono",
                                                            children: [
                                                                saved.data.validatedTimeline,
                                                                " months"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-right py-3 px-3 font-mono",
                                                            children: saved.data.teamSize
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-right py-3 px-3 font-mono",
                                                            children: saved.data.bottlenecks.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "text-center py-3 px-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-2 py-1 rounded-full font-medium ${saved.data.bottlenecks.length === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`,
                                                                children: saved.data.bottlenecks.length === 0 ? 'Optimal' : 'Has Issues'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, saved.id, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this),
                    showSaveDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 w-full max-w-md shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-slate-900",
                                            children: "Save Scenario"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowSaveDialog(false),
                                            className: "text-slate-400 hover:text-slate-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 482,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-700 mb-1",
                                                    children: "Scenario Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: scenarioName,
                                                    onChange: (e)=>setScenarioName(e.target.value),
                                                    placeholder: 'e.g., "Conservative Budget", "Aggressive Timeline"',
                                                    className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 rounded-lg p-3 text-xs text-slate-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium mb-2",
                                                    children: "Scenario Summary:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "• Budget: $",
                                                                scenario.validatedBudget.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "• Timeline: ",
                                                                scenario.validatedTimeline,
                                                                " months"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "• Team: ",
                                                                teamConfig.members.length,
                                                                " people"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "• Issues: ",
                                                                scenario.bottlenecks.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (scenarioName.trim()) {
                                                            const newScenario = {
                                                                id: Date.now().toString(),
                                                                name: scenarioName,
                                                                timestamp: new Date().toISOString(),
                                                                data: {
                                                                    validatedBudget: scenario.validatedBudget,
                                                                    validatedTimeline: scenario.validatedTimeline,
                                                                    teamSize: teamConfig.members.length,
                                                                    bottlenecks: scenario.bottlenecks
                                                                }
                                                            };
                                                            setSavedScenarios([
                                                                ...savedScenarios,
                                                                newScenario
                                                            ]);
                                                            setScenarioName('');
                                                            setShowSaveDialog(false);
                                                        }
                                                    },
                                                    disabled: !scenarioName.trim(),
                                                    className: `flex-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].success.bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].success.bgHover} ${__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionColors"].success.text} px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Save Scenario"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setScenarioName('');
                                                        setShowSaveDialog(false);
                                                    },
                                                    className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition-all duration-200",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-slate-800 mb-2",
                                children: "How This Works"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Target Budget/Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 552,
                                                columnNumber: 19
                                            }, this),
                                            " are pulled from your Team Builder configuration"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Total Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 553,
                                                columnNumber: 19
                                            }, this),
                                            " is calculated from Team Builder's Total Project Cost"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 553,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this),
                                            " is validated by the Who Does What page based on the longest critical path"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 554,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Bottleneck"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 555,
                                                columnNumber: 19
                                            }, this),
                                            " warnings come directly from overloaded team members in Resource Validation"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Scenarios"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this),
                                            " can be saved and compared to analyze different approaches"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                                lineNumber: 551,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/IntegratedScenarioEngine.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(IntegratedScenarioEngine, "LTYhjUbPxhIVLiXPzAqtpq9rv5s=");
_c = IntegratedScenarioEngine;
var _c;
__turbopack_context__.k.register(_c, "IntegratedScenarioEngine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=53ab5_lancer-Plan-Estimator_components_dashboard_IntegratedScenarioEngine_tsx_03c2fd87._.js.map