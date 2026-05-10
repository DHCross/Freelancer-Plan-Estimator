(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmployeeEstimateReport",
    ()=>EmployeeEstimateReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$employee$2d$estimate$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/employee-estimate-generator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/lib/calculations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$components$2f$dashboard$2f$DocumentWordCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/DocumentWordCounter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EmployeeEstimateReport({ projects, metrics, teamRoster, clientMode = false }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedMarkdown, setGeneratedMarkdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Employee info
    const [employeeName, setEmployeeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Dan Cross");
    const [employeeRole, setEmployeeRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Creative Infrastructure Lead");
    const [recipientName, setRecipientName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Martin");
    const [recipientTitle, setRecipientTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Marketing & Creative Strategy Lead");
    // Project selection
    const [selectedProjectId, setSelectedProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EmployeeEstimateReport.useState": ()=>{
            const a1 = projects.find({
                "EmployeeEstimateReport.useState.a1": (p)=>p.name.toLowerCase().includes("a1")
            }["EmployeeEstimateReport.useState.a1"]);
            return a1?.id ?? projects[0]?.id ?? null;
        }
    }["EmployeeEstimateReport.useState"]);
    // Scope inputs
    const [totalWords, setTotalWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20000);
    const [existingWords, setExistingWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Pacing inputs
    const [draftSpeed, setDraftSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(200);
    const [compileSpeed, setCompileSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [chaosBuffer, setChaosBuffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [dailyHours, setDailyHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [includeWeekends, setIncludeWeekends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])());
    // Optional notes
    const [assumptions, setAssumptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [risks, setRisks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dependencies, setDependencies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const selectedProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmployeeEstimateReport.useMemo[selectedProject]": ()=>projects.find({
                "EmployeeEstimateReport.useMemo[selectedProject]": (p)=>p.id === selectedProjectId
            }["EmployeeEstimateReport.useMemo[selectedProject]"]) ?? projects[0] ?? null
    }["EmployeeEstimateReport.useMemo[selectedProject]"], [
        projects,
        selectedProjectId
    ]);
    // Auto-populate from selected project
    const handleProjectChange = (projectId)=>{
        setSelectedProjectId(projectId);
        const project = projects.find((p)=>p.id === projectId);
        if (project) {
            setTotalWords(project.targetWords || 20000);
        }
    };
    // Auto-populate from team member
    const handleTeamMemberSelect = (memberId)=>{
        const member = teamRoster.find((m)=>m.id === memberId);
        if (member) {
            setEmployeeName(member.name);
            setEmployeeRole(member.role);
            setDraftSpeed(member.draftSpeed || 200);
            setCompileSpeed(member.compileSpeed || 0);
            setChaosBuffer(member.chaosBuffer || 15);
        }
    };
    const estimateConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmployeeEstimateReport.useMemo[estimateConfig]": ()=>({
                employeeName,
                employeeRole,
                recipientName,
                recipientTitle,
                project: selectedProject,
                metrics,
                totalWords,
                existingWords,
                draftSpeed,
                compileSpeed,
                chaosBuffer,
                dailyHours,
                includeWeekends,
                startDate,
                assumptions: assumptions || undefined,
                risks: risks || undefined,
                dependencies: dependencies || undefined
            })
    }["EmployeeEstimateReport.useMemo[estimateConfig]"], [
        employeeName,
        employeeRole,
        recipientName,
        recipientTitle,
        selectedProject,
        metrics,
        totalWords,
        existingWords,
        draftSpeed,
        compileSpeed,
        chaosBuffer,
        dailyHours,
        includeWeekends,
        startDate,
        assumptions,
        risks,
        dependencies
    ]);
    const liveEstimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmployeeEstimateReport.useMemo[liveEstimate]": ()=>{
            if (!selectedProject) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$employee$2d$estimate$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateEmployeeEstimate"])(estimateConfig);
        }
    }["EmployeeEstimateReport.useMemo[liveEstimate]"], [
        estimateConfig,
        selectedProject
    ]);
    const handleGenerate = ()=>{
        if (!selectedProject) return;
        const markdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$employee$2d$estimate$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateEmployeeEstimateMarkdown"])(estimateConfig);
        setGeneratedMarkdown(markdown);
    };
    const handleCopyMarkdown = async ()=>{
        if (!generatedMarkdown) return;
        try {
            await navigator.clipboard.writeText(generatedMarkdown);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    const handleDownloadMarkdown = ()=>{
        if (!generatedMarkdown) return;
        const filename = `Estimate_${selectedProject?.name.replace(/[^a-zA-Z0-9]/g, "_")}_${startDate}.md`;
        const blob = new Blob([
            generatedMarkdown
        ], {
            type: "text/markdown"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const handleDownloadHTML = ()=>{
        if (!selectedProject) return;
        const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$employee$2d$estimate$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateEmployeeEstimateHTML"])(estimateConfig);
        const filename = `Estimate_${selectedProject.name.replace(/[^a-zA-Z0-9]/g, "_")}_${startDate}.html`;
        const blob = new Blob([
            html
        ], {
            type: "text/html"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const handlePrintPDF = ()=>{
        if (!selectedProject) return;
        const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$lib$2f$employee$2d$estimate$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateEmployeeEstimateHTML"])(estimateConfig);
        const printWindow = window.open("", "_blank");
        if (printWindow) {
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.onload = ()=>{
                printWindow.print();
            };
        }
    };
    if (clientMode) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-slate-200 rounded-2xl p-6 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.2em] text-slate-400",
                                    children: "Individual Estimate"
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-slate-900 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-5 h-5 text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        "Employee Project Estimate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 max-w-2xl mt-2",
                                    children: "Generate a professional time estimate for a specific project to send to your manager. Based on word count, your working pace, and scope parameters."
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleGenerate,
                                disabled: !selectedProject,
                                className: "flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    "Generate Estimate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            liveEstimate && selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-5 h-5 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-emerald-900",
                                children: "Live Estimate Preview"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-4 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide",
                                        children: "Words Remaining"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-slate-900",
                                        children: liveEstimate.effectiveWords.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-4 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide",
                                        children: "Total Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-emerald-600",
                                        children: liveEstimate.totalHours
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-4 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide",
                                        children: "Working Days"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-slate-900",
                                        children: liveEstimate.totalDays
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-4 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide",
                                        children: "Finish Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-slate-900",
                                        children: new Date(liveEstimate.estimatedFinishDate).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 lg:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-2xl p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate-400",
                                        children: "People"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700 mb-1",
                                                children: "Quick Fill from Team"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        onChange: (e)=>handleTeamMemberSelect(e.target.value),
                                                        className: "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm appearance-none cursor-pointer transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select team member..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 19
                                                            }, this),
                                                            teamRoster.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: member.id,
                                                                    children: [
                                                                        member.name,
                                                                        " (",
                                                                        member.role,
                                                                        ")"
                                                                    ]
                                                                }, member.id, true, {
                                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 21
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 17
                                                    }, this),
                                                    teamRoster.find((m)=>m.id === employeeName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-2 top-2.5 text-xs text-emerald-600 font-medium",
                                                        children: "✓ Auto-filled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            teamRoster.find((m)=>m.id === employeeName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 bg-emerald-50 border border-emerald-200 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-emerald-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: "Auto-populated from Team Builder:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            employeeName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2 mt-1 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-600",
                                                                        children: "Rate:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-emerald-800",
                                                                        children: [
                                                                            "$",
                                                                            teamRoster.find((m)=>m.id === employeeName)?.hourlyRate,
                                                                            "/hr"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-600",
                                                                        children: "Hours:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-emerald-800",
                                                                        children: [
                                                                            teamRoster.find((m)=>m.id === employeeName)?.weeklyCapacity,
                                                                            "hrs/wk"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Your Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: employeeName,
                                                        onChange: (e)=>setEmployeeName(e.target.value),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Your Role"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: employeeRole,
                                                        onChange: (e)=>setEmployeeRole(e.target.value),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Recipient Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: recipientName,
                                                        onChange: (e)=>setRecipientName(e.target.value),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Recipient Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: recipientTitle,
                                                        onChange: (e)=>setRecipientTitle(e.target.value),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-2xl p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate-400",
                                        children: "Project"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-700",
                                                children: "Select Project"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedProjectId ?? "",
                                                onChange: (e)=>handleProjectChange(Number(e.target.value)),
                                                className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm",
                                                children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: p.id,
                                                        children: p.name
                                                    }, p.id, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Total Words"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: totalWords,
                                                        onChange: (e)=>setTotalWords(Number(e.target.value)),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Already Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: existingWords,
                                                        onChange: (e)=>setExistingWords(Number(e.target.value)),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$components$2f$dashboard$2f$DocumentWordCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentWordCounter"], {
                                        label: "Calculate from Files",
                                        onApplyTotal: (wordCount)=>setExistingWords(wordCount)
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-2xl p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate-400",
                                        children: "Pacing & Schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Draft Speed (w/hr)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: draftSpeed,
                                                                onChange: (e)=>setDraftSpeed(Number(e.target.value)),
                                                                className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",
                                                                min: "50",
                                                                max: "500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 19
                                                            }, this),
                                                            teamRoster.find((m)=>m.id === employeeName) && draftSpeed !== (teamRoster.find((m)=>m.id === employeeName)?.draftSpeed || 200) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-2 top-2 text-xs text-amber-600 font-medium",
                                                                children: "Custom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: teamRoster.find((m)=>m.id === employeeName) && draftSpeed !== (teamRoster.find((m)=>m.id === employeeName)?.draftSpeed || 200) ? `Using custom rate (Team Builder: ${teamRoster.find((m)=>m.id === employeeName)?.draftSpeed || 200} w/hr)` : 'Typical range: 100-300 w/hr (industry: 150-200)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Compile Speed (w/hr)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: compileSpeed,
                                                        onChange: (e)=>setCompileSpeed(Number(e.target.value)),
                                                        placeholder: "0 = skip",
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Daily Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: dailyHours,
                                                                onChange: (e)=>setDailyHours(Number(e.target.value)),
                                                                className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",
                                                                min: "1",
                                                                max: "16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 19
                                                            }, this),
                                                            teamRoster.find((m)=>m.id === employeeName) && dailyHours !== (teamRoster.find((m)=>m.id === employeeName)?.weeklyCapacity || 40) / 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-2 top-2 text-xs text-amber-600 font-medium",
                                                                children: "Custom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: teamRoster.find((m)=>m.id === employeeName) && dailyHours !== (teamRoster.find((m)=>m.id === employeeName)?.weeklyCapacity || 40) / 5 ? `Using custom hours (Team Builder: ${Math.round((teamRoster.find((m)=>m.id === employeeName)?.weeklyCapacity || 20) / 5)} hrs/day)` : 'Recommended: 4-8 hrs/day for sustainable pace'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Chaos Buffer (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: chaosBuffer,
                                                        onChange: (e)=>setChaosBuffer(Number(e.target.value)),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 433,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-600",
                                                        children: "Start Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: startDate,
                                                        onChange: (e)=>setStartDate(e.target.value),
                                                        className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: includeWeekends,
                                                        onChange: (e)=>setIncludeWeekends(e.target.checked),
                                                        className: "w-4 h-4 text-emerald-600 border-slate-300 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-700",
                                                        children: "Include Weekends"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-2xl p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate-400",
                                        children: "Optional Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-slate-600",
                                                children: "Custom Assumptions"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: assumptions,
                                                onChange: (e)=>setAssumptions(e.target.value),
                                                rows: 2,
                                                placeholder: "Leave blank for defaults...",
                                                className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-slate-600",
                                                children: "Dependencies"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 482,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: dependencies,
                                                onChange: (e)=>setDependencies(e.target.value),
                                                rows: 2,
                                                placeholder: "What do you need from others?",
                                                className: "mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 483,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-2xl p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate-400",
                                        children: "Export Options"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownloadMarkdown,
                                        disabled: !selectedProject,
                                        className: "w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 501,
                                                columnNumber: 15
                                            }, this),
                                            "Download Markdown (.md)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownloadHTML,
                                        disabled: !selectedProject,
                                        className: "w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 510,
                                                columnNumber: 15
                                            }, this),
                                            "Download HTML"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePrintPDF,
                                        disabled: !selectedProject,
                                        className: "w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                lineNumber: 519,
                                                columnNumber: 15
                                            }, this),
                                            "Print / Save as PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-950 text-slate-50 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[700px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-4 py-3 border-b border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate-500",
                                                    children: "Estimate Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400 mt-1",
                                                    children: generatedMarkdown ? "Edit the markdown below or copy/download" : "Click 'Generate Estimate' to create your report"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCopyMarkdown,
                                            disabled: !generatedMarkdown,
                                            className: `inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-full border transition ${generatedMarkdown ? "border-emerald-400 text-emerald-200 hover:bg-emerald-500/10" : "border-slate-700 text-slate-500 cursor-not-allowed"}`,
                                            children: [
                                                copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 59
                                                }, this),
                                                copied ? "Copied!" : "Copy"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "flex-1 w-full bg-transparent text-xs font-mono px-4 py-3 resize-none outline-none",
                                    value: generatedMarkdown,
                                    onChange: (e)=>setGeneratedMarkdown(e.target.value),
                                    placeholder: "Click 'Generate Estimate' to produce your project time estimate..."
                                }, void 0, false, {
                                    fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/EmployeeEstimateReport.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(EmployeeEstimateReport, "nk8gzVOnNSg1N15VnOJ4UX/Lc8Y=");
_c = EmployeeEstimateReport;
var _c;
__turbopack_context__.k.register(_c, "EmployeeEstimateReport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=d5e51_eelancer-Plan-Estimator_components_dashboard_EmployeeEstimateReport_tsx_a2c5ada4._.js.map