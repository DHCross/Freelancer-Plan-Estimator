"use client";

import { useState } from "react";
import { Users, Plus, Edit2, Trash2, Save, X, Info } from "lucide-react";
import { TeamMember } from "@/lib/types";
import { ROLE_TEMPLATES } from "@/lib/constants";

interface TeamManagementProps {
  teamMembers: TeamMember[];
  onUpdateTeamMembers: (members: TeamMember[]) => void;
  clientMode?: boolean;
}

export function TeamManagement({ teamMembers, onUpdateTeamMembers, clientMode = false }: TeamManagementProps) {
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

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
    } else {
      onUpdateTeamMembers(teamMembers.map(m => m.id === normalized.id ? normalized : m));
    }
    
    setEditingMember(null);
    setIsAddingNew(false);
  };

  const handleDeleteMember = (memberId: string) => {
    if (confirm("Are you sure you want to remove this team member?")) {
      onUpdateTeamMembers(teamMembers.filter(m => m.id !== memberId));
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
    <div className="space-y-6">
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

      {!clientMode && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Team Roster</h3>
            <button
              onClick={handleAddMember}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
              Add Team Member
            </button>
          </div>

          <div className="space-y-4">
            {/* Role Templates Reference */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Role Templates (Based on Operating Charter)
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                {Object.entries(ROLE_TEMPLATES).map(([roleName, template]) => (
                  <div key={roleName} className="bg-white border border-slate-200 rounded p-2">
                    <p className="font-medium text-slate-800">{roleName}</p>
                    <p className="text-slate-600">${template.hourlyRate}/hr • {template.draftSpeed} w/hr</p>
                    <p className="text-slate-500 mt-1">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {teamMembers.map((member) => (
              <div key={member.id} className="border border-slate-200 rounded-lg p-4">
                {editingMember?.id === member.id ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2"
                          value={editingMember.name}
                          onChange={(e) => handleFieldChange("name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                        <div className="space-y-2">
                          <input
                            type="text"
                            className="w-full border border-slate-300 rounded-lg px-3 py-2"
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
                          className="w-full border border-slate-300 rounded-lg px-3 py-2"
                          value={editingMember.hourlyRate}
                          onChange={(e) => handleFieldChange("hourlyRate", Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Weekly Capacity (hrs)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2"
                          value={editingMember.weeklyCapacity}
                          onChange={(e) => handleFieldChange("weeklyCapacity", Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Draft Speed (words/hr)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2"
                          value={editingMember.draftSpeed}
                          onChange={(e) => handleFieldChange("draftSpeed", Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Chaos Buffer (%)</label>
                        <input
                          type="number"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2"
                          value={editingMember.chaosBuffer}
                          onChange={(e) => handleFieldChange("chaosBuffer", Number(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSaveMember}
                        className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900">{member.name}</h4>
                      <p className="text-sm text-slate-600">{member.role}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                        <span>${member.hourlyRate}/hr</span>
                        <span>{member.weeklyCapacity}hrs/wk</span>
                        <span>{member.draftSpeed} w/hr</span>
                        <span>{member.chaosBuffer}% buffer</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditMember(member)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2"
                        value={editingMember.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                        placeholder="Enter team member name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-3 py-2"
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
                        className="w-full border border-slate-300 rounded-lg px-3 py-2"
                        value={editingMember.hourlyRate}
                        onChange={(e) => handleFieldChange("hourlyRate", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Weekly Capacity (hrs)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2"
                        value={editingMember.weeklyCapacity}
                        onChange={(e) => handleFieldChange("weeklyCapacity", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Draft Speed (words/hr)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2"
                        value={editingMember.draftSpeed}
                        onChange={(e) => handleFieldChange("draftSpeed", Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Chaos Buffer (%)</label>
                      <input
                        type="number"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2"
                        value={editingMember.chaosBuffer}
                        onChange={(e) => handleFieldChange("chaosBuffer", Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveMember}
                      className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition"
                    >
                      <Save className="w-4 h-4" />
                      Add Member
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition"
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
        </div>
      )}

      {clientMode && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Team Capacity Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{member.name}</h4>
                <p className="text-sm text-slate-600 mb-3">{member.role}</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Weekly Capacity:</span>
                    <span className="font-medium">{member.weeklyCapacity} hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Draft Speed:</span>
                    <span className="font-medium">{member.draftSpeed} w/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Buffer:</span>
                    <span className="font-medium">{member.chaosBuffer}%</span>
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
