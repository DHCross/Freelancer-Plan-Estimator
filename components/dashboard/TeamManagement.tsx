"use client";

import { useState, useEffect } from "react";
import { Users, Plus, Edit2, Trash2, Save, X, Info, GripVertical, Copy, Download, DollarSign, Clock, PenTool, Shield, BarChart3, ChevronDown } from "lucide-react";
import { TeamMember } from "@/lib/types";
import { ROLE_TEMPLATES } from "@/lib/constants";

interface TeamManagementProps {
  teamMembers: TeamMember[];
  onUpdateTeamMembers: (members: TeamMember[]) => void;
  clientMode?: boolean;
  initialEditMemberId?: string | null;
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export function TeamManagement({ teamMembers, onUpdateTeamMembers, clientMode = false, initialEditMemberId = null }: TeamManagementProps) {
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showCapacityCalculator, setShowCapacityCalculator] = useState(false);

  // Auto-open a specific member for editing when initialEditMemberId changes
  useEffect(() => {
    if (initialEditMemberId) {
      const member = teamMembers.find(m => m.id === initialEditMemberId);
      if (member) {
        setEditingMember({ ...member });
        setIsAddingNew(false);
      }
    }
  }, [initialEditMemberId, teamMembers]);

  // Toast notification handler
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = `toast_${Date.now()}`;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Calculate team summary stats
  const teamStats = {
    totalMonthly: teamMembers.reduce((sum, m) => sum + (m.hourlyRate * m.weeklyCapacity * 4.3), 0),
    activeMembers: teamMembers.length,
    totalCapacity: teamMembers.reduce((sum, m) => sum + (m.draftSpeed * m.weeklyCapacity), 0),
    totalWeeklyCost: teamMembers.reduce((sum, m) => sum + (m.hourlyRate * m.weeklyCapacity), 0),
  };

  // Calculate capacity by role
  const capacityByRole = teamMembers.reduce((acc, member) => {
    const capacity = member.draftSpeed * member.weeklyCapacity;
    if (!acc[member.role]) {
      acc[member.role] = { members: 0, capacity };
    } else {
      acc[member.role].capacity += capacity;
    }
    acc[member.role].members += 1;
    return acc;
  }, {} as Record<string, { members: number; capacity: number }>);

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: `member_${Date.now()}`,
      name: "",
      role: "",
      hourlyRate: 20,
      weeklyCapacity: 20,
      draftSpeed: 200,
      compileSpeed: 2500,
      chaosBuffer: 15,
    };
    setEditingMember(newMember);
    setIsAddingNew(true);
  };

  const handleDuplicateMember = (member: TeamMember) => {
    const newMember: TeamMember = {
      ...member,
      id: `member_${Date.now()}`,
      name: `${member.name} (Copy)`,
    };
    onUpdateTeamMembers([...teamMembers, newMember]);
    showToast(`✅ ${member.name} duplicated as "${newMember.name}"`);
  };

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetId: string) => {
    if (!draggedId || draggedId === targetId) return;

    const draggedIndex = teamMembers.findIndex(m => m.id === draggedId);
    const targetIndex = teamMembers.findIndex(m => m.id === targetId);

    const newMembers = [...teamMembers];
    const [draggedMember] = newMembers.splice(draggedIndex, 1);
    newMembers.splice(targetIndex, 0, draggedMember);

    onUpdateTeamMembers(newMembers);
    setDraggedId(null);
    showToast(`✅ ${draggedMember.name} moved`);
  };

  const handleExportConfig = () => {
    const csv = [
      ['Name', 'Role', 'Hourly Rate', 'Weekly Capacity (hrs)', 'Draft Speed (w/hr)', 'Chaos Buffer (%)'].join(','),
      ...teamMembers.map(m =>
        [m.name, m.role, m.hourlyRate, m.weeklyCapacity, m.draftSpeed, m.chaosBuffer].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `team-config-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('✅ Team configuration exported');
  };

  const handleRoleTemplateSelect = (roleName: string) => {
    const template = ROLE_TEMPLATES[roleName as keyof typeof ROLE_TEMPLATES];
    if (template && editingMember) {
      setEditingMember({
        ...editingMember,
        role: roleName,
        hourlyRate: template.hourlyRate,
        weeklyCapacity: template.weeklyCapacity,
        draftSpeed: template.draftSpeed,
        compileSpeed: template.compileSpeed,
        chaosBuffer: template.chaosBuffer,
      });
    }
  };

  const handleEditMember = (member: TeamMember) => {
    setEditingMember({ ...member });
    setIsAddingNew(false);
  };

  const handleSaveMember = () => {
    if (!editingMember || !editingMember.name.trim() || !editingMember.role.trim()) return;

    const normalized: TeamMember = {
      ...editingMember,
      hourlyRate: Number(editingMember.hourlyRate) || 0,
      weeklyCapacity: Number(editingMember.weeklyCapacity) || 0,
      draftSpeed: Number(editingMember.draftSpeed) || 0,
      compileSpeed: Number(editingMember.compileSpeed) || 0,
      chaosBuffer: Number(editingMember.chaosBuffer) || 0,
    };

    if (isAddingNew) {
      onUpdateTeamMembers([...teamMembers, normalized]);
      showToast(`✅ ${normalized.name} added to team`);
    } else {
      onUpdateTeamMembers(teamMembers.map(m => m.id === normalized.id ? normalized : m));
      showToast(`✅ ${normalized.name} updated`);
    }
    
    setEditingMember(null);
    setIsAddingNew(false);
  };

  const handleDeleteMember = (memberId: string) => {
    const member = teamMembers.find(m => m.id === memberId);
    if (confirm(`Remove ${member?.name} from the team?`)) {
      onUpdateTeamMembers(teamMembers.filter(m => m.id !== memberId));
      showToast(`✅ ${member?.name} removed from team`);
    }
  };

  const handleCancelEdit = () => {
    setEditingMember(null);
    setIsAddingNew(false);
  };

  const handleFieldChange = (field: keyof TeamMember, value: string | number) => {
    if (editingMember) {
      setEditingMember({ ...editingMember, [field]: value === "" ? "" : value });
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-lg shadow-lg text-white pointer-events-auto ${
              toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'
            } animate-in fade-in slide-in-from-right-4 duration-200`}
          >
            {toast.message}
          </div>
        ))}
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {clientMode ? "Team Capacity" : "Team Configuration"}
          </p>
          <h2 className="text-2xl font-bold text-slate-900">Team Member Management</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            {clientMode
              ? "View team member capabilities and availability."
              : "Add, edit, and manage team member profiles for accurate project estimation."}
          </p>
        </div>
        <Users className="w-10 h-10 text-indigo-500" />
      </div>

      {/* Team Summary Stats */}
      {!clientMode && teamMembers.length > 0 && (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border-r border-indigo-200 pr-4 sm:pr-6">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.1em] mb-1">Total Monthly Cost</p>
            <p className="text-2xl font-bold text-slate-900">${Math.round(teamStats.totalMonthly).toLocaleString()}</p>
          </div>
          <div className="border-r border-indigo-200 pr-4 sm:pr-6">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.1em] mb-1">Active Members</p>
            <p className="text-2xl font-bold text-slate-900">{teamStats.activeMembers}</p>
          </div>
          <div className="border-r border-indigo-200 pr-4 sm:pr-6">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.1em] mb-1">Weekly Capacity</p>
            <p className="text-2xl font-bold text-slate-900">{Math.round(teamStats.totalCapacity).toLocaleString()}w/wk</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.1em] mb-1">Weekly Cost</p>
            <p className="text-2xl font-bold text-slate-900">${Math.round(teamStats.totalWeeklyCost).toLocaleString()}</p>
          </div>
        </div>
      )}

      {!clientMode && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-lg font-semibold text-slate-900">Team Roster</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportConfig}
                className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition text-sm"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={handleAddMember}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
              >
                <Plus className="w-4 h-4" />
                Add Team Member
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                draggable
                onDragStart={() => handleDragStart(member.id)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(member.id)}
                className={`border border-slate-200 rounded-lg p-4 transition-all ${
                  draggedId === member.id ? 'opacity-50 bg-slate-50' : 'hover:shadow-md'
                }`}
              >
                {editingMember?.id === member.id ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          value={editingMember.name}
                          onChange={(e) => handleFieldChange("name", e.target.value)}
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                        <div className="space-y-2">
                          <input
                            type="text"
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                            value={editingMember.role}
                            onChange={(e) => handleFieldChange("role", e.target.value)}
                            placeholder="Enter role or select template"
                          />
                          <select
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                            onChange={(e) => handleRoleTemplateSelect(e.target.value)}
                            value=""
                          >
                            <option value="">Apply Role Template...</option>
                            {Object.keys(ROLE_TEMPLATES).map((roleName) => (
                              <option key={roleName} value={roleName}>
                                {roleName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Hourly Rate ($)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          value={editingMember.hourlyRate}
                          onChange={(e) => handleFieldChange("hourlyRate", Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Weekly Capacity (hrs)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          value={editingMember.weeklyCapacity}
                          onChange={(e) => handleFieldChange("weeklyCapacity", Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Draft Speed (words/hr)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          value={editingMember.draftSpeed}
                          onChange={(e) => handleFieldChange("draftSpeed", Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Chaos Buffer (%)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          value={editingMember.chaosBuffer}
                          onChange={(e) => handleFieldChange("chaosBuffer", Number(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSaveMember}
                        className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition text-sm"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition text-sm"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    {/* Drag Handle + Name/Role */}
                    <div className="flex-1 flex items-start gap-3">
                      <div className="mt-1 text-slate-300 cursor-move opacity-0 group-hover:opacity-100">
                        <GripVertical className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">{member.name}</h4>
                        <p className="text-sm text-slate-600">{member.role}</p>
                        
                        {/* Redesigned Metric Zones */}
                        <div className="flex flex-wrap gap-4 mt-3 text-xs">
                          {/* Zone A: Cost */}
                          <div className="flex items-center gap-2 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                            <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                            <span className="font-medium text-amber-900">${member.hourlyRate}/hr</span>
                          </div>
                          <div className="flex items-center gap-2 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span className="font-medium text-blue-900">{member.weeklyCapacity}h/wk</span>
                          </div>

                          {/* Zone B: Output */}
                          <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded border border-green-200">
                            <PenTool className="w-3.5 h-3.5 text-green-600" />
                            <span className="font-medium text-green-900">{member.draftSpeed}w/hr</span>
                          </div>
                          <div className="flex items-center gap-2 bg-purple-50 px-2 py-1 rounded border border-purple-200">
                            <Shield className="w-3.5 h-3.5 text-purple-600" />
                            <span className="font-medium text-purple-900">{member.chaosBuffer}% buf</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Hidden on hover by default */}
                    <div className="flex items-center gap-1 opacity-0 hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEditMember(member)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                        title="Edit member"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDuplicateMember(member)}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                        title="Duplicate member"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isAddingNew && editingMember && (
              <div className="border border-dashed border-indigo-300 rounded-lg p-4 bg-indigo-50">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        value={editingMember.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                        placeholder="Enter team member name"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          value={editingMember.role}
                          onChange={(e) => handleFieldChange("role", e.target.value)}
                          placeholder="e.g., Lead Writer, Editor, Designer"
                        />
                        <select
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                          onChange={(e) => handleRoleTemplateSelect(e.target.value)}
                          value=""
                        >
                          <option value="">Apply Role Template...</option>
                          {Object.keys(ROLE_TEMPLATES).map((roleName) => (
                            <option key={roleName} value={roleName}>
                              {roleName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Hourly Rate ($)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        value={editingMember.hourlyRate}
                        onChange={(e) => handleFieldChange("hourlyRate", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Weekly Capacity (hrs)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        value={editingMember.weeklyCapacity}
                        onChange={(e) => handleFieldChange("weeklyCapacity", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Draft Speed (words/hr)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        value={editingMember.draftSpeed}
                        onChange={(e) => handleFieldChange("draftSpeed", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Chaos Buffer (%)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                        value={editingMember.chaosBuffer}
                        onChange={(e) => handleFieldChange("chaosBuffer", Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveMember}
                      className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition text-sm"
                    >
                      <Save className="w-4 h-4" />
                      Add Member
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition text-sm"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {teamMembers.length === 0 && !isAddingNew && (
              <div className="text-center py-8 text-slate-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                <p>No team members configured yet.</p>
                <p className="text-sm">Add your first team member to get started with team-based estimation.</p>
              </div>
            )}
          </div>

          {/* Capacity Calculator Section */}
          {teamMembers.length > 0 && (
            <div className="border-t border-slate-200 pt-6">
              <button
                onClick={() => setShowCapacityCalculator(!showCapacityCalculator)}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Capacity by Role
                <ChevronDown className={`w-4 h-4 transition-transform ${showCapacityCalculator ? 'rotate-180' : ''}`} />
              </button>

              {showCapacityCalculator && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                  {Object.entries(capacityByRole).map(([role, data]) => (
                    <div key={role} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <p className="font-medium text-slate-900 text-sm">{role}</p>
                      <p className="text-xs text-slate-600 mt-1">{data.members} member{data.members > 1 ? 's' : ''}</p>
                      <p className="text-lg font-bold text-indigo-600 mt-2">{Math.round(data.capacity).toLocaleString()}w/wk</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Reference Drawer - Collapsible */}
          <div className="border-t border-slate-200 pt-6">
            <details className="group">
              <summary className="flex items-center gap-2 font-semibold text-slate-900 cursor-pointer hover:text-indigo-600 transition">
                <Info className="w-4 h-4" />
                📚 Reference: Role Definitions & Rates
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                {Object.entries(ROLE_TEMPLATES).map(([roleName, template]) => (
                  <div key={roleName} className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-3 hover:shadow-sm transition">
                    <p className="font-medium text-slate-800 mb-1">{roleName}</p>
                    <p className="text-slate-600">${template.hourlyRate}/hr • {template.draftSpeed}w/hr</p>
                    <p className="text-slate-500 mt-2 leading-snug">{template.description}</p>
                    <div className="mt-2 flex items-center gap-1 text-slate-500">
                      <span className="inline-block px-2 py-0.5 bg-white rounded border border-slate-300 text-xs">Buffer: {template.chaosBuffer}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
                <p className="font-semibold mb-2">💡 How to Use Role Templates</p>
                <ul className="text-xs space-y-1 list-disc list-inside">
                  <li>When adding a member, start typing a role name or select from the dropdown</li>
                  <li>Click a template option to auto-fill all metrics for that role</li>
                  <li>Customize the values afterward if needed</li>
                  <li>Reference rates from the Hoskbrew Operating Charter</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      )}

      {clientMode && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Team Capacity Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                <h4 className="font-semibold text-slate-900">{member.name}</h4>
                <p className="text-sm text-slate-600 mb-3">{member.role}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Weekly:</span>
                    <span className="font-medium text-slate-900">{member.weeklyCapacity}h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1"><PenTool className="w-3.5 h-3.5" /> Speed:</span>
                    <span className="font-medium text-slate-900">{member.draftSpeed}w/hr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Buffer:</span>
                    <span className="font-medium text-slate-900">{member.chaosBuffer}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
