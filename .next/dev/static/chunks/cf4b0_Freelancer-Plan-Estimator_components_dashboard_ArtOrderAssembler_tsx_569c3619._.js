(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArtOrderAssembler",
    ()=>ArtOrderAssembler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Dev/GitHub/Freelancer-Plan-Estimator/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ArtOrderAssembler({ // eslint-disable-next-line @typescript-eslint/no-unused-vars
clientMode = false }) {
    _s();
    // Form state
    const [assetName, setAssetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [artType, setArtType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Full-page");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lighting, setLighting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [contrast, setContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [palette, setPalette] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [atmosphere, setAtmosphere] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [presence, setPresence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [technicalNotes, setTechnicalNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [referenceImages, setReferenceImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Saved orders
    const [savedOrders, setSavedOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingOrderId, setEditingOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderIdCounter, setOrderIdCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Validation
    const validateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[validateField]": (field, value)=>{
            if (!value.trim()) return null; // Empty is handled separately
            const lowerValue = value.toLowerCase();
            // Keywords that indicate non-visual content
            const emotionKeywords = [
                'feel',
                'feeling',
                'emotion',
                'think',
                'thought',
                'believe',
                'hope',
                'fear',
                'love',
                'hate',
                'contemplate',
                'ponder',
                'wonder',
                'dream'
            ];
            const narrativeKeywords = [
                'story',
                'backstory',
                'history',
                'legend',
                'tale',
                'because',
                'will',
                'was',
                'has been',
                'used to'
            ];
            const abstractKeywords = [
                'honor',
                'courage',
                'evil',
                'good',
                'justice',
                'meaning',
                'purpose',
                'destiny',
                'fate'
            ];
            // Check for problematic keywords
            const allProblematicKeywords = [
                ...emotionKeywords,
                ...narrativeKeywords,
                ...abstractKeywords
            ];
            for (const keyword of allProblematicKeywords){
                if (lowerValue.includes(keyword)) {
                    return `Avoid "${keyword}" - describe only what is visually observable`;
                }
            }
            // Field-specific validation
            if (field === 'location') {
                if (lowerValue.includes('where') || lowerValue.includes('heroes')) {
                    return "Location must be a concrete physical space, not a concept";
                }
            }
            if (field === 'focus') {
                if (lowerValue.includes('struggling with') || lowerValue.includes('dealing with')) {
                    return "Focus must be a visible subject, not internal state";
                }
            }
            if (field === 'action') {
                if (lowerValue.startsWith('thinking') || lowerValue.startsWith('feeling')) {
                    return "Action must be a paintable physical activity";
                }
            }
            return null;
        }
    }["ArtOrderAssembler.useCallback[validateField]"], []);
    const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArtOrderAssembler.useMemo[validationErrors]": ()=>{
            const errors = [];
            // Required field validation
            if (!assetName.trim()) {
                errors.push({
                    field: 'assetName',
                    message: 'Asset name is required'
                });
            }
            if (!location.trim()) {
                errors.push({
                    field: 'location',
                    message: 'Location is required'
                });
            }
            if (!focus.trim()) {
                errors.push({
                    field: 'focus',
                    message: 'Focus is required'
                });
            }
            if (!action.trim()) {
                errors.push({
                    field: 'action',
                    message: 'Action is required'
                });
            }
            if (!lighting.trim()) {
                errors.push({
                    field: 'mood.lighting',
                    message: 'Lighting is required'
                });
            }
            if (!contrast.trim()) {
                errors.push({
                    field: 'mood.contrast',
                    message: 'Contrast is required'
                });
            }
            if (!palette.trim()) {
                errors.push({
                    field: 'mood.palette',
                    message: 'Palette is required'
                });
            }
            if (!atmosphere.trim()) {
                errors.push({
                    field: 'mood.atmosphere',
                    message: 'Atmosphere is required'
                });
            }
            // Visual grammar validation
            const locationError = validateField('location', location);
            if (locationError) {
                errors.push({
                    field: 'location',
                    message: locationError
                });
            }
            const focusError = validateField('focus', focus);
            if (focusError) {
                errors.push({
                    field: 'focus',
                    message: focusError
                });
            }
            const actionError = validateField('action', action);
            if (actionError) {
                errors.push({
                    field: 'action',
                    message: actionError
                });
            }
            return errors;
        }
    }["ArtOrderAssembler.useMemo[validationErrors]"], [
        assetName,
        location,
        focus,
        action,
        lighting,
        contrast,
        palette,
        atmosphere,
        validateField
    ]);
    const isValid = validationErrors.length === 0;
    const handleClearForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[handleClearForm]": ()=>{
            setAssetName("");
            setArtType("Full-page");
            setLocation("");
            setFocus("");
            setAction("");
            setLighting("");
            setContrast("");
            setPalette("");
            setAtmosphere("");
            setPresence("");
            setTechnicalNotes("");
            setReferenceImages("");
            setEditingOrderId(null);
        }
    }["ArtOrderAssembler.useCallback[handleClearForm]"], []);
    const currentOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArtOrderAssembler.useMemo[currentOrder]": ()=>({
                id: editingOrderId || `order-${orderIdCounter}`,
                assetName,
                type: artType,
                location,
                focus,
                action,
                mood: {
                    lighting,
                    contrast,
                    palette,
                    atmosphere,
                    presence: presence || undefined
                },
                technicalNotes: technicalNotes || undefined,
                referenceImages: referenceImages || undefined,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            })
    }["ArtOrderAssembler.useMemo[currentOrder]"], [
        editingOrderId,
        orderIdCounter,
        assetName,
        artType,
        location,
        focus,
        action,
        lighting,
        contrast,
        palette,
        atmosphere,
        presence,
        technicalNotes,
        referenceImages
    ]);
    const handleSaveOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[handleSaveOrder]": ()=>{
            if (!isValid) return;
            if (editingOrderId) {
                // Update existing order
                setSavedOrders({
                    "ArtOrderAssembler.useCallback[handleSaveOrder]": (prev)=>prev.map({
                            "ArtOrderAssembler.useCallback[handleSaveOrder]": (order)=>order.id === editingOrderId ? currentOrder : order
                        }["ArtOrderAssembler.useCallback[handleSaveOrder]"])
                }["ArtOrderAssembler.useCallback[handleSaveOrder]"]);
                setEditingOrderId(null);
            } else {
                // Add new order
                setSavedOrders({
                    "ArtOrderAssembler.useCallback[handleSaveOrder]": (prev)=>[
                            ...prev,
                            currentOrder
                        ]
                }["ArtOrderAssembler.useCallback[handleSaveOrder]"]);
                setOrderIdCounter({
                    "ArtOrderAssembler.useCallback[handleSaveOrder]": (prev)=>prev + 1
                }["ArtOrderAssembler.useCallback[handleSaveOrder]"]);
            }
            // Clear form
            handleClearForm();
        }
    }["ArtOrderAssembler.useCallback[handleSaveOrder]"], [
        isValid,
        editingOrderId,
        currentOrder,
        handleClearForm
    ]);
    const handleEditOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[handleEditOrder]": (order)=>{
            setAssetName(order.assetName);
            setArtType(order.type);
            setLocation(order.location);
            setFocus(order.focus);
            setAction(order.action);
            setLighting(order.mood.lighting);
            setContrast(order.mood.contrast);
            setPalette(order.mood.palette);
            setAtmosphere(order.mood.atmosphere);
            setPresence(order.mood.presence || "");
            setTechnicalNotes(order.technicalNotes || "");
            setReferenceImages(order.referenceImages || "");
            setEditingOrderId(order.id);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }["ArtOrderAssembler.useCallback[handleEditOrder]"], []);
    const handleDeleteOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[handleDeleteOrder]": (orderId)=>{
            setSavedOrders({
                "ArtOrderAssembler.useCallback[handleDeleteOrder]": (prev)=>prev.filter({
                        "ArtOrderAssembler.useCallback[handleDeleteOrder]": (order)=>order.id !== orderId
                    }["ArtOrderAssembler.useCallback[handleDeleteOrder]"])
            }["ArtOrderAssembler.useCallback[handleDeleteOrder]"]);
            if (editingOrderId === orderId) {
                handleClearForm();
            }
        }
    }["ArtOrderAssembler.useCallback[handleDeleteOrder]"], [
        editingOrderId,
        handleClearForm
    ]);
    const generateMarkdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[generateMarkdown]": (order)=>{
            let md = `## ${order.assetName}\n\n`;
            md += `**Type**: ${order.type}\n\n`;
            md += `**Location**: ${order.location}\n\n`;
            md += `**Focus**: ${order.focus}\n\n`;
            md += `**Action**: ${order.action}\n\n`;
            md += `**Mood**:\n`;
            md += `- Lighting: ${order.mood.lighting}\n`;
            md += `- Contrast: ${order.mood.contrast}\n`;
            md += `- Palette: ${order.mood.palette}\n`;
            md += `- Atmosphere: ${order.mood.atmosphere}\n`;
            if (order.mood.presence) {
                md += `- Presence: ${order.mood.presence}\n`;
            }
            md += `\n`;
            if (order.technicalNotes) {
                md += `**Additional Technical Notes**: ${order.technicalNotes}\n\n`;
            }
            if (order.referenceImages) {
                md += `**Reference Images**: ${order.referenceImages}\n\n`;
            }
            return md;
        }
    }["ArtOrderAssembler.useCallback[generateMarkdown]"], []);
    const handleExportMarkdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[handleExportMarkdown]": (order)=>{
            const ordersToExport = order ? [
                order
            ] : savedOrders;
            if (ordersToExport.length === 0) return;
            let markdown = "# Art Orders\n\n";
            markdown += `Generated: ${new Date().toLocaleDateString()}\n\n`;
            markdown += "---\n\n";
            ordersToExport.forEach({
                "ArtOrderAssembler.useCallback[handleExportMarkdown]": (o)=>{
                    markdown += generateMarkdown(o);
                    markdown += "---\n\n";
                }
            }["ArtOrderAssembler.useCallback[handleExportMarkdown]"]);
            const blob = new Blob([
                markdown
            ], {
                type: 'text/markdown'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = order ? `${order.assetName.replace(/\s+/g, '_')}.md` : `art-orders-${new Date().toISOString().split('T')[0]}.md`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }["ArtOrderAssembler.useCallback[handleExportMarkdown]"], [
        savedOrders,
        generateMarkdown
    ]);
    const handleExportJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArtOrderAssembler.useCallback[handleExportJSON]": (order)=>{
            const ordersToExport = order ? [
                order
            ] : savedOrders;
            if (ordersToExport.length === 0) return;
            const json = JSON.stringify(ordersToExport, null, 2);
            const blob = new Blob([
                json
            ], {
                type: 'application/json'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = order ? `${order.assetName.replace(/\s+/g, '_')}.json` : `art-orders-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }["ArtOrderAssembler.useCallback[handleExportJSON]"], [
        savedOrders
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                className: "w-6 h-6 text-indigo-600"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-indigo-900",
                                children: "Art Order Assembler"
                            }, void 0, false, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-indigo-700",
                        children: "Generate painter-focused art briefs using the four-field system: Location, Focus, Action, and Mood."
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-900 mb-4",
                                        children: "Asset Information"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Asset Name / Reference ID *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: assetName,
                                                        onChange: (e)=>setAssetName(e.target.value),
                                                        placeholder: "e.g., A1 Cover - The Cursed Bridge",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Type *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: artType,
                                                        onChange: (e)=>setArtType(e.target.value),
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Cover",
                                                                children: "Cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Full-page",
                                                                children: "Full-page Illustration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Half-page",
                                                                children: "Half-page Illustration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Spot",
                                                                children: "Spot Art"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Portrait",
                                                                children: "Portrait"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Map",
                                                                children: "Map"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-slate-900",
                                                children: "Four-Field System"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-xs text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Visual primacy only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "1. Location *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: location,
                                                        onChange: (e)=>setLocation(e.target.value),
                                                        placeholder: "Physical setting - e.g., Ancient stone bridge spanning a misty ravine at twilight",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Concrete physical space: structures, terrain, weather"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "2. Focus *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: focus,
                                                        onChange: (e)=>setFocus(e.target.value),
                                                        placeholder: "Primary subject - e.g., A lone ranger in weathered traveling cloak, standing mid-bridge",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Main visible subject: character, creature, object"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "3. Action *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: action,
                                                        onChange: (e)=>setAction(e.target.value),
                                                        placeholder: "What's happening - e.g., Pausing to look back over shoulder, as if sensing pursuit",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Paintable physical activity, body language, gesture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-900 mb-4",
                                        children: "4. Mood (Visual Atmosphere)"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Lighting *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: lighting,
                                                        onChange: (e)=>setLighting(e.target.value),
                                                        placeholder: "e.g., Dim twilight, fading orange on horizon, deep blue overhead",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Light source, time of day, quality (harsh/soft/dramatic)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Contrast *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: contrast,
                                                        onChange: (e)=>setContrast(e.target.value),
                                                        placeholder: "e.g., Medium-high, silhouette against sky",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "High/low, sharp/subtle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 422,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Palette *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: palette,
                                                        onChange: (e)=>setPalette(e.target.value),
                                                        placeholder: "e.g., Cool blues and purples with warm orange accent",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Color scheme (warm/cool, saturated/muted)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 438,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Atmosphere *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: atmosphere,
                                                        onChange: (e)=>setAtmosphere(e.target.value),
                                                        placeholder: "e.g., Dense mist rising from ravine below, sense of isolation",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Environmental effects (fog, dust, rain, magical glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Presence (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: presence,
                                                        onChange: (e)=>setPresence(e.target.value),
                                                        placeholder: "e.g., Wide establishing shot, bridge dominates middle ground",
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: "Scale, composition notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-900 mb-4",
                                        children: "Additional Details (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Technical Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: technicalNotes,
                                                        onChange: (e)=>setTechnicalNotes(e.target.value),
                                                        placeholder: 'e.g., 8.5" x 11" cover, allow 0.25" bleed',
                                                        rows: 2,
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: "Reference Images"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: referenceImages,
                                                        onChange: (e)=>setReferenceImages(e.target.value),
                                                        placeholder: "Links or descriptions of visual references",
                                                        rows: 2,
                                                        className: "w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSaveOrder,
                                        disabled: !isValid,
                                        className: `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isValid ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 532,
                                                columnNumber: 15
                                            }, this),
                                            editingOrderId ? 'Update Order' : 'Save Order'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    editingOrderId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleClearForm,
                                        className: "flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-slate-200 text-slate-700 hover:bg-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 541,
                                                columnNumber: 17
                                            }, this),
                                            "New Order"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleClearForm,
                                        className: "flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this),
                                            "Clear"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-900 mb-3",
                                        children: "Validation"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this),
                                    validationErrors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-green-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 564,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "All fields valid"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: validationErrors.map((error, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2 text-red-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-4 h-4 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: error.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            isValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-slate-900 mb-3",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 582,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-700 space-y-2 font-mono whitespace-pre-wrap",
                                        children: generateMarkdown(currentOrder)
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-indigo-50 border border-indigo-200 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-indigo-900 mb-3 text-sm",
                                        children: "Visual Grammar Rules"
                                    }, void 0, false, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 591,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-xs text-indigo-700 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-600",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Describe only paintable elements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-600",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Use concrete physical details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 597,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600",
                                                        children: "✗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No emotions or thoughts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 601,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600",
                                                        children: "✗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No backstory or narrative"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 605,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600",
                                                        children: "✗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No abstract concepts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 609,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            savedOrders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-slate-200 rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-slate-900",
                                children: [
                                    "Saved Orders (",
                                    savedOrders.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 622,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExportMarkdown(),
                                        className: "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, this),
                                            "Export All (MD)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 624,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExportJSON(),
                                        className: "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 635,
                                                columnNumber: 17
                                            }, this),
                                            "Export All (JSON)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 623,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                        lineNumber: 621,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: savedOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-slate-900",
                                                        children: order.assetName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: order.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEditOrder(order),
                                                        className: "text-sm text-indigo-600 hover:text-indigo-700",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleExportMarkdown(order),
                                                        className: "text-sm text-purple-600 hover:text-purple-700",
                                                        children: "MD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleExportJSON(order),
                                                        className: "text-sm text-purple-600 hover:text-purple-700",
                                                        children: "JSON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteOrder(order.id),
                                                        className: "text-sm text-red-600 hover:text-red-700",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 649,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-600 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Location:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 22
                                                    }, this),
                                                    " ",
                                                    order.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 678,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Focus:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 22
                                                    }, this),
                                                    " ",
                                                    order.focus
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 679,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$GitHub$2f$Freelancer$2d$Plan$2d$Estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Action:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 22
                                                    }, this),
                                                    " ",
                                                    order.action
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                        lineNumber: 677,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, order.id, true, {
                                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                                lineNumber: 643,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                        lineNumber: 641,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
                lineNumber: 620,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/GitHub/Freelancer-Plan-Estimator/components/dashboard/ArtOrderAssembler.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
_s(ArtOrderAssembler, "2zdxM871rjlbvDtdZIJYaL8ACxk=");
_c = ArtOrderAssembler;
var _c;
__turbopack_context__.k.register(_c, "ArtOrderAssembler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cf4b0_Freelancer-Plan-Estimator_components_dashboard_ArtOrderAssembler_tsx_569c3619._.js.map