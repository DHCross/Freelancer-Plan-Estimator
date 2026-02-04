"use client";

import React, { useState, useMemo, useCallback } from "react";
import { 
  Palette, 
  Download, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Save,
  Trash2,
  Plus,
  Info
} from "lucide-react";
import type { ArtOrder, ArtOrderType, ArtOrderValidationError } from "@/lib/types";

interface ArtOrderAssemblerProps {
  clientMode?: boolean;
}

export function ArtOrderAssembler({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clientMode = false 
}: ArtOrderAssemblerProps) {
  // Form state
  const [assetName, setAssetName] = useState("");
  const [artType, setArtType] = useState<ArtOrderType>("Full-page");
  const [location, setLocation] = useState("");
  const [focus, setFocus] = useState("");
  const [action, setAction] = useState("");
  const [lighting, setLighting] = useState("");
  const [contrast, setContrast] = useState("");
  const [palette, setPalette] = useState("");
  const [atmosphere, setAtmosphere] = useState("");
  const [presence, setPresence] = useState("");
  const [technicalNotes, setTechnicalNotes] = useState("");
  const [referenceImages, setReferenceImages] = useState("");

  // Saved orders
  const [savedOrders, setSavedOrders] = useState<ArtOrder[]>([]);
  const [editingOrderId, setEditingOrderId] = useState<string | null>(null);
  const [orderIdCounter, setOrderIdCounter] = useState(0);

  // Validation
  const validateField = useCallback((field: string, value: string): string | null => {
    if (!value.trim()) return null; // Empty is handled separately
    
    const lowerValue = value.toLowerCase();
    
    // Keywords that indicate non-visual content
    const emotionKeywords = ['feel', 'feeling', 'emotion', 'think', 'thought', 'believe', 'hope', 'fear', 'love', 'hate', 'contemplate', 'ponder', 'wonder', 'dream'];
    const narrativeKeywords = ['story', 'backstory', 'history', 'legend', 'tale', 'because', 'will', 'was', 'has been', 'used to'];
    const abstractKeywords = ['honor', 'courage', 'evil', 'good', 'justice', 'meaning', 'purpose', 'destiny', 'fate'];
    
    // Check for problematic keywords
    const allProblematicKeywords = [...emotionKeywords, ...narrativeKeywords, ...abstractKeywords];
    for (const keyword of allProblematicKeywords) {
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
  }, []);

  const validationErrors = useMemo((): ArtOrderValidationError[] => {
    const errors: ArtOrderValidationError[] = [];
    
    // Required field validation
    if (!assetName.trim()) {
      errors.push({ field: 'assetName', message: 'Asset name is required' });
    }
    if (!location.trim()) {
      errors.push({ field: 'location', message: 'Location is required' });
    }
    if (!focus.trim()) {
      errors.push({ field: 'focus', message: 'Focus is required' });
    }
    if (!action.trim()) {
      errors.push({ field: 'action', message: 'Action is required' });
    }
    if (!lighting.trim()) {
      errors.push({ field: 'mood.lighting', message: 'Lighting is required' });
    }
    if (!contrast.trim()) {
      errors.push({ field: 'mood.contrast', message: 'Contrast is required' });
    }
    if (!palette.trim()) {
      errors.push({ field: 'mood.palette', message: 'Palette is required' });
    }
    if (!atmosphere.trim()) {
      errors.push({ field: 'mood.atmosphere', message: 'Atmosphere is required' });
    }
    
    // Visual grammar validation
    const locationError = validateField('location', location);
    if (locationError) {
      errors.push({ field: 'location', message: locationError });
    }
    
    const focusError = validateField('focus', focus);
    if (focusError) {
      errors.push({ field: 'focus', message: focusError });
    }
    
    const actionError = validateField('action', action);
    if (actionError) {
      errors.push({ field: 'action', message: actionError });
    }
    
    return errors;
  }, [assetName, location, focus, action, lighting, contrast, palette, atmosphere, validateField]);

  const isValid = validationErrors.length === 0;

  const handleClearForm = useCallback(() => {
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
  }, []);

  const currentOrder = useMemo((): ArtOrder => ({
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
      presence: presence || undefined,
    },
    technicalNotes: technicalNotes || undefined,
    referenceImages: referenceImages || undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }), [editingOrderId, orderIdCounter, assetName, artType, location, focus, action, lighting, contrast, palette, atmosphere, presence, technicalNotes, referenceImages]);

  const handleSaveOrder = useCallback(() => {
    if (!isValid) return;
    
    if (editingOrderId) {
      // Update existing order
      setSavedOrders(prev => prev.map(order => 
        order.id === editingOrderId ? currentOrder : order
      ));
      setEditingOrderId(null);
    } else {
      // Add new order
      setSavedOrders(prev => [...prev, currentOrder]);
      setOrderIdCounter(prev => prev + 1);
    }
    
    // Clear form
    handleClearForm();
  }, [isValid, editingOrderId, currentOrder, handleClearForm]);

  const handleEditOrder = useCallback((order: ArtOrder) => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDeleteOrder = useCallback((orderId: string) => {
    setSavedOrders(prev => prev.filter(order => order.id !== orderId));
    if (editingOrderId === orderId) {
      handleClearForm();
    }
  }, [editingOrderId, handleClearForm]);

  const generateMarkdown = useCallback((order: ArtOrder): string => {
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
  }, []);

  const handleExportMarkdown = useCallback((order?: ArtOrder) => {
    const ordersToExport = order ? [order] : savedOrders;
    if (ordersToExport.length === 0) return;
    
    let markdown = "# Art Orders\n\n";
    markdown += `Generated: ${new Date().toLocaleDateString()}\n\n`;
    markdown += "---\n\n";
    
    ordersToExport.forEach(o => {
      markdown += generateMarkdown(o);
      markdown += "---\n\n";
    });
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = order 
      ? `${order.assetName.replace(/\s+/g, '_')}.md`
      : `art-orders-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [savedOrders, generateMarkdown]);

  const handleExportJSON = useCallback((order?: ArtOrder) => {
    const ordersToExport = order ? [order] : savedOrders;
    if (ordersToExport.length === 0) return;
    
    const json = JSON.stringify(ordersToExport, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = order
      ? `${order.assetName.replace(/\s+/g, '_')}.json`
      : `art-orders-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [savedOrders]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <Palette className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-900">Art Order Assembler</h2>
        </div>
        <p className="text-sm text-indigo-700">
          Generate painter-focused art briefs using the four-field system: Location, Focus, Action, and Mood.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-4">Asset Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Asset Name / Reference ID *
                </label>
                <input
                  type="text"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                  placeholder="e.g., A1 Cover - The Cursed Bridge"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Type *
                </label>
                <select
                  value={artType}
                  onChange={(e) => setArtType(e.target.value as ArtOrderType)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Cover">Cover</option>
                  <option value="Full-page">Full-page Illustration</option>
                  <option value="Half-page">Half-page Illustration</option>
                  <option value="Spot">Spot Art</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Map">Map</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Four-Field System */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Four-Field System</h3>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Info className="w-3 h-3" />
                <span>Visual primacy only</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  1. Location *
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Physical setting - e.g., Ancient stone bridge spanning a misty ravine at twilight"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Concrete physical space: structures, terrain, weather
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  2. Focus *
                </label>
                <input
                  type="text"
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  placeholder="Primary subject - e.g., A lone ranger in weathered traveling cloak, standing mid-bridge"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Main visible subject: character, creature, object
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  3. Action *
                </label>
                <input
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  placeholder="What's happening - e.g., Pausing to look back over shoulder, as if sensing pursuit"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Paintable physical activity, body language, gesture
                </p>
              </div>
            </div>
          </div>

          {/* Mood */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-4">4. Mood (Visual Atmosphere)</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Lighting *
                </label>
                <input
                  type="text"
                  value={lighting}
                  onChange={(e) => setLighting(e.target.value)}
                  placeholder="e.g., Dim twilight, fading orange on horizon, deep blue overhead"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Light source, time of day, quality (harsh/soft/dramatic)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Contrast *
                </label>
                <input
                  type="text"
                  value={contrast}
                  onChange={(e) => setContrast(e.target.value)}
                  placeholder="e.g., Medium-high, silhouette against sky"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  High/low, sharp/subtle
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Palette *
                </label>
                <input
                  type="text"
                  value={palette}
                  onChange={(e) => setPalette(e.target.value)}
                  placeholder="e.g., Cool blues and purples with warm orange accent"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Color scheme (warm/cool, saturated/muted)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Atmosphere *
                </label>
                <input
                  type="text"
                  value={atmosphere}
                  onChange={(e) => setAtmosphere(e.target.value)}
                  placeholder="e.g., Dense mist rising from ravine below, sense of isolation"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Environmental effects (fog, dust, rain, magical glow)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Presence (Optional)
                </label>
                <input
                  type="text"
                  value={presence}
                  onChange={(e) => setPresence(e.target.value)}
                  placeholder="e.g., Wide establishing shot, bridge dominates middle ground"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Scale, composition notes
                </p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-4">Additional Details (Optional)</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Technical Notes
                </label>
                <textarea
                  value={technicalNotes}
                  onChange={(e) => setTechnicalNotes(e.target.value)}
                  placeholder="e.g., 8.5&quot; x 11&quot; cover, allow 0.25&quot; bleed"
                  rows={2}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Reference Images
                </label>
                <textarea
                  value={referenceImages}
                  onChange={(e) => setReferenceImages(e.target.value)}
                  placeholder="Links or descriptions of visual references"
                  rows={2}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleSaveOrder}
              disabled={!isValid}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isValid
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Save className="w-4 h-4" />
              {editingOrderId ? 'Update Order' : 'Save Order'}
            </button>
            
            {editingOrderId && (
              <button
                onClick={handleClearForm}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-slate-200 text-slate-700 hover:bg-slate-300"
              >
                <Plus className="w-4 h-4" />
                New Order
              </button>
            )}
            
            <button
              onClick={handleClearForm}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Validation Status */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-3">Validation</h3>
            
            {validationErrors.length === 0 ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">All fields valid</span>
              </div>
            ) : (
              <div className="space-y-2">
                {validationErrors.map((error, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-red-600">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-xs">{error.message}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Preview */}
          {isValid && (
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">Preview</h3>
              <div className="text-xs text-slate-700 space-y-2 font-mono whitespace-pre-wrap">
                {generateMarkdown(currentOrder)}
              </div>
            </div>
          )}

          {/* Quick Reference */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <h3 className="font-semibold text-indigo-900 mb-3 text-sm">Visual Grammar Rules</h3>
            <ul className="text-xs text-indigo-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Describe only paintable elements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Use concrete physical details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>No emotions or thoughts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>No backstory or narrative</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>No abstract concepts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Saved Orders */}
      {savedOrders.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Saved Orders ({savedOrders.length})</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleExportMarkdown()}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
              >
                <FileText className="w-4 h-4" />
                Export All (MD)
              </button>
              <button
                onClick={() => handleExportJSON()}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200"
              >
                <Download className="w-4 h-4" />
                Export All (JSON)
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {savedOrders.map((order) => (
              <div key={order.id} className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-slate-900">{order.assetName}</h4>
                    <p className="text-xs text-slate-500">{order.type}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditOrder(order)}
                      className="text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleExportMarkdown(order)}
                      className="text-sm text-purple-600 hover:text-purple-700"
                    >
                      MD
                    </button>
                    <button
                      onClick={() => handleExportJSON(order)}
                      className="text-sm text-purple-600 hover:text-purple-700"
                    >
                      JSON
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="text-xs text-slate-600 space-y-1">
                  <p><span className="font-medium">Location:</span> {order.location}</p>
                  <p><span className="font-medium">Focus:</span> {order.focus}</p>
                  <p><span className="font-medium">Action:</span> {order.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
