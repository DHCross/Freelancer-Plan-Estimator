"use client";

import { Lock, AlertTriangle, TrendingUp, Users, ArrowRight, Wrench } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { UnifiedProjectModel, ResourceValidation } from "@/lib/unified-project-model";
import { useState, useEffect, useCallback } from "react";
import { getCapacityColor, getTimelineColor, actionColors } from "@/lib/colors";

interface ResourceValidationHubProps {
  clientMode?: boolean;
  onReassignProjects?: () => void;
  onHireContractor?: () => void;
  onExtendTimeline?: (newTimeline: number) => void;
  onNavigateToTeamBuilder?: () => void;
}

export function ResourceValidationHub({ clientMode = false, onReassignProjects, onHireContractor, onExtendTimeline, onNavigateToTeamBuilder }: ResourceValidationHubProps) {
  const [unifiedModel] = useState(() => UnifiedProjectModel.getInstance());
  const [resourceValidation, setResourceValidation] = useState<ResourceValidation[]>([]);
  const [scenario, setScenario] = useState(unifiedModel.getProjectScenario());
  const [activeAction, setActiveAction] = useState<string | null>(null);

  useEffect(() => {
    setResourceValidation(unifiedModel.getResourceValidation());
    setScenario(unifiedModel.getProjectScenario());
  }, [unifiedModel]);

  // Handle reassign projects action
  const handleReassignProjects = useCallback(() => {
    setActiveAction('reassign');
    if (onReassignProjects) {
      onReassignProjects();
    } else {
      // Default behavior: Show a message indicating reassignment capability
      alert('Project reassignment feature: Select projects from the overloaded team member to reassign to available capacity.');
    }
    setTimeout(() => setActiveAction(null), 2000);
  }, [onReassignProjects]);

  // Handle hire contractor action
  const handleHireContractor = useCallback(() => {
    setActiveAction('hire');
    if (onHireContractor) {
      onHireContractor();
    } else {
      // Default behavior: Add a contractor to the team
      alert('Hire Contractor feature: Navigate to Team Management to add a new contractor to increase available capacity.');
    }
    setTimeout(() => setActiveAction(null), 2000);
  }, [onHireContractor]);

  // Handle extend timeline action
  const handleExtendTimeline = useCallback(() => {
    setActiveAction('extend');
    const newTimeline = scenario.validatedTimeline + 3; // Extend by 3 months
    if (onExtendTimeline) {
      onExtendTimeline(newTimeline);
    } else {
      // Default behavior: Show timeline extension impact
      alert(`Timeline extended from ${scenario.validatedTimeline} to ${newTimeline} months. This reduces daily pressure and allows for better resource allocation.`);
    }
    setTimeout(() => setActiveAction(null), 2000);
  }, [scenario.validatedTimeline, onExtendTimeline]);

  // Find the bottleneck (highest load percentage)
  const bottleneck = resourceValidation.length > 0 
    ? resourceValidation.reduce((max, current) => 
        current.loadPercentage > max.loadPercentage ? current : max
      )
    : null;

  // Client mode: show a simplified, reassuring view
  if (clientMode) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Client-Facing Timeline Summary */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-900">Validated Timeline: {scenario.validatedTimeline} months</h3>
              <p className="text-sm text-emerald-700">Updated timeline reflects staffing and capacity constraints; no action required from you.</p>
            </div>
          </div>
          
          {bottleneck?.isOverloaded && (
            <div className="bg-white/50 border border-emerald-100 rounded-lg p-4 mt-4">
              <p className="text-sm text-emerald-800">
                This timeline includes a <span className="font-semibold">+{scenario.validatedTimeline - scenario.targetTimeline} month adjustment</span> to ensure quality delivery across all projects.
              </p>
            </div>
          )}
        </div>

        {/* Simple Visual Timeline */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4">Project Timeline</h4>
          <div className="relative h-12 bg-slate-100 rounded-lg overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm"
              style={{ width: `100%` }}
            >
              {scenario.validatedTimeline} months total
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Delivery timeline has been validated against team availability.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Data Flow Indicator with Edit Button */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 text-sm flex-1">
          <span className="font-medium text-slate-600">Team Builder</span>
          <ArrowRight className="w-4 h-4 text-slate-400" />
          <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">Resource Validation</span>
          <ArrowRight className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-600">Scenario Engine</span>
          <ArrowRight className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-600">Financial Model</span>
        </div>
        {onNavigateToTeamBuilder && (
          <button
            onClick={onNavigateToTeamBuilder}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md ml-4"
          >
            <Wrench className="w-3 h-3" />
            <span>Edit Team</span>
          </button>
        )}
      </div>

      {/* Resource Validation Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-bold text-blue-900">Who Does What: Resource Validation Hub</h3>
          </div>
          {bottleneck?.isOverloaded && (
            <div className={`flex items-center gap-2 ${getCapacityColor(bottleneck.loadPercentage).bg} ${getCapacityColor(bottleneck.loadPercentage).border} ${getCapacityColor(bottleneck.loadPercentage).text} px-3 py-2 rounded-lg`}>
              <AlertTriangle className="w-4 h-4" />
              <span className="font-semibold">Bottleneck Detected</span>
            </div>
          )}
        </div>
        <p className="text-sm text-blue-700">
          Pulls team members, capacity, and hourly rates from Team Builder. 
          Load calculations dynamically feed project timeline adjustments to the Scenario Engine.
        </p>
      </div>

      {/* Enhanced Bottleneck Alert with Action Buttons */}
      {bottleneck?.isOverloaded && (
        <div className={`bg-gradient-to-r from-${getCapacityColor(bottleneck?.loadPercentage || 0).text.split('-')[1]}-50 to-rose-50 border-2 ${getCapacityColor(bottleneck?.loadPercentage || 0).border} rounded-xl p-5`}>
          <div className="flex items-start gap-4">
            <div className={`bg-${getCapacityColor(bottleneck?.loadPercentage || 0).text.split('-')[1]}-100 rounded-full p-2`}>
              <AlertTriangle className={`w-6 h-6 ${getCapacityColor(bottleneck?.loadPercentage || 0).text}`} />
            </div>
            <div className="flex-1">
              <h4 className={`font-bold ${getCapacityColor(bottleneck?.loadPercentage || 0).textDark} text-lg`}>Critical Resource Constraint Detected</h4>
              <p className={`text-sm ${getCapacityColor(bottleneck?.loadPercentage || 0).text} mt-2`}>
                <span className="font-semibold text-lg">{bottleneck.teamMemberName}</span> is operating at{" "}
                <span className={`font-bold text-2xl ${getCapacityColor(bottleneck?.loadPercentage || 0).textDark}`}>{Math.round(bottleneck.loadPercentage)}%</span> capacity.
                This extends the overall project timeline by <span className="font-semibold">{scenario.validatedTimeline - scenario.targetTimeline} months</span>.
              </p>
              
              {/* Quick Actions */}
              <div className="mt-4 space-y-3">
                <div className={`text-sm font-medium ${getCapacityColor(bottleneck?.loadPercentage || 0).textDark}`}>Quick Resolution Options:</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button 
                    onClick={handleReassignProjects}
                    disabled={activeAction === 'reassign'}
                    className={`${activeAction === 'reassign' ? 'opacity-50 cursor-wait' : ''} ${actionColors.primary.bg} ${actionColors.primary.bgHover} ${actionColors.primary.text} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.05] flex items-center justify-center gap-2 active:scale-95`}>
                    <Users className="w-4 h-4" />
                    {activeAction === 'reassign' ? 'Processing...' : 'Reassign Projects'}
                  </button>
                  <button 
                    onClick={handleHireContractor}
                    disabled={activeAction === 'hire'}
                    className={`${activeAction === 'hire' ? 'opacity-50 cursor-wait' : ''} ${actionColors.success.bg} ${actionColors.success.bgHover} ${actionColors.success.text} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.05] flex items-center justify-center gap-2 active:scale-95`}>
                    <TrendingUp className="w-4 h-4" />
                    {activeAction === 'hire' ? 'Processing...' : 'Hire Contractor'}
                  </button>
                  <button 
                    onClick={handleExtendTimeline}
                    disabled={activeAction === 'extend'}
                    className={`${activeAction === 'extend' ? 'opacity-50 cursor-wait' : ''} bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.05] flex items-center justify-center gap-2 active:scale-95`}>
                    <ArrowRight className="w-4 h-4" />
                    {activeAction === 'extend' ? 'Processing...' : 'Extend Timeline'}
                  </button>
                </div>
                
                {/* Impact Preview */}
                <div className={`${getCapacityColor(bottleneck?.loadPercentage || 0).bg} ${getCapacityColor(bottleneck?.loadPercentage || 0).border} rounded-lg p-3 mt-3`}>
                  <div className={`text-xs ${getCapacityColor(bottleneck?.loadPercentage || 0).text}`}>
                    <span className="font-semibold">Impact Preview:</span> Reassigning 2 projects to available team members would reduce {bottleneck.teamMemberName}'s load to ~180% capacity.
                  </div>
                </div>
              </div>
              
              {/* Affected Projects */}
              <div className={`mt-4 p-3 bg-white ${getCapacityColor(bottleneck?.loadPercentage || 0).border} rounded-lg`}>
                <div className={`text-xs font-semibold ${getCapacityColor(bottleneck?.loadPercentage || 0).text} mb-2`}>Affected Projects ({bottleneck.assignedProjects.length}):</div>
                <div className="flex flex-wrap gap-2">
                  {bottleneck.assignedProjects.map((project, i) => (
                    <span key={i} className={`text-xs ${getCapacityColor(bottleneck?.loadPercentage || 0).bg} ${getCapacityColor(bottleneck?.loadPercentage || 0).text} px-2 py-1 rounded border ${getCapacityColor(bottleneck?.loadPercentage || 0).border}`}>
                      {project.projectName} ({Math.round(project.hours)}h)
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Load Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {resourceValidation.map((validation) => {
          const isOver = validation.isOverloaded;
          const statusClass = isOver ? "border-red-600" : "border-emerald-500";
          const barColor = isOver ? "bg-red-600" : "bg-emerald-500";

          return (
            <div
              key={validation.teamMemberId}
              className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${statusClass} relative transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer`}
            >
              {isOver && (
                <div className="absolute top-0 right-0 text-[10px] font-bold px-2 py-1 uppercase bg-red-100 text-red-600">
                  Bottleneck
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{validation.teamMemberName}</h4>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {validation.assignedProjects.length} projects
                  </p>
                </div>
                <div className={`text-3xl font-bold tabular-nums ${isOver ? "text-red-600" : "text-slate-700"}`}>
                  {Math.round(validation.loadPercentage)}%
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full ${barColor}`}
                  style={{ width: `${Math.min(validation.loadPercentage, 100)}%` }}
                />
              </div>
              <div className="space-y-2">
                {validation.assignedProjects.map((project) => (
                  <div
                    key={project.projectId}
                    className="text-sm border-l-2 pl-2 py-1 border-slate-200"
                  >
                    <div className="font-medium text-slate-700 flex justify-between">
                      <span className="truncate">{project.projectName}</span>
                      {project.projectName.includes("Deadline") && (
                        <Lock className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400">
                      {formatNumber(Math.round(project.hours))}h
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Assigned: {formatNumber(Math.round(validation.totalAssignedHours))}h</span>
                  <span>Capacity: {formatNumber(validation.availableCapacity)}h</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Timeline Impact Analysis with Visual Bars */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="mb-4">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Timeline Impact Analysis
          </h4>
          {bottleneck?.isOverloaded && (
            <p className="text-sm text-slate-600 mt-1">
              <span className="font-semibold text-lg text-slate-900">{scenario.validatedTimeline} months total</span>
              {" "}(includes +{scenario.validatedTimeline - scenario.targetTimeline} months from {bottleneck.teamMemberName}'s workload)
            </p>
          )}
        </div>
        
        {/* Visual Timeline Comparison */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span>Target Timeline</span>
            <span>Validated Timeline</span>
          </div>
          <div className="relative h-16 bg-slate-100 rounded-lg overflow-hidden">
            {/* Target Timeline Bar */}
            <div 
              className="absolute left-0 top-0 h-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm"
              style={{ width: `${(scenario.targetTimeline / scenario.validatedTimeline) * 100}%` }}
            >
              {scenario.targetTimeline} months
            </div>
            {/* Extension Indicator */}
            {bottleneck?.isOverloaded && (
              <div 
                className="absolute top-0 h-full bg-red-500 flex items-center justify-center text-white font-semibold text-sm"
                style={{ 
                  left: `${(scenario.targetTimeline / scenario.validatedTimeline) * 100}%`,
                  width: `${((scenario.validatedTimeline - scenario.targetTimeline) / scenario.validatedTimeline) * 100}%`
                }}
              >
                +{scenario.validatedTimeline - scenario.targetTimeline} months
              </div>
            )}
          </div>
          
          {/* Timeline Labels */}
          <div className="flex items-center justify-between mt-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-slate-600">Original Plan</span>
            </div>
            {bottleneck?.isOverloaded && (
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-red-600 font-medium">Extension Due to Constraints</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Detailed Metrics */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Target Timeline (from Team Builder)</div>
            <div className="text-3xl font-bold text-slate-900 tabular-nums">
              {scenario.targetTimeline} months
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Planned duration without resource constraints
            </div>
          </div>
          <div className={`p-4 rounded-lg border ${bottleneck?.isOverloaded ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
            <div className="text-sm text-slate-600 mb-2">Validated Timeline (with bottlenecks)</div>
            <div className={`text-3xl font-bold tabular-nums ${bottleneck?.isOverloaded ? "text-red-600" : "text-emerald-600"}`}>
              {scenario.validatedTimeline} months
            </div>
            {bottleneck?.isOverloaded ? (
              <div className="text-xs text-red-600 mt-1 font-medium">
                ⚠️ +{scenario.validatedTimeline - scenario.targetTimeline} months due to {bottleneck.teamMemberName}'s overload
              </div>
            ) : (
              <div className="text-xs text-emerald-600 mt-1">
                ✅ Timeline achievable with current team
              </div>
            )}
          </div>
        </div>
        
        {/* Industry Comparison */}
        {bottleneck?.isOverloaded && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-xs text-amber-700">
              <span className="font-semibold">Industry Context:</span> Industry average for {scenario?.targetBudget ? Math.round(scenario.targetBudget / 1000) + 'k' : '50k'} word projects is 8-10 months. 
              Your validated timeline exceeds this by {Math.round((scenario.validatedTimeline - 10) / 10 * 100)}%.
            </div>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        <h4 className="font-semibold text-slate-900 mb-1">How Resource Validation Works</h4>
        <p>
          This hub pulls team member capacity from the Team Builder and validates project assignments.
          When a team member exceeds 100% capacity, the system flags them as a bottleneck and
          adjusts the overall project timeline in the Scenario Engine.
        </p>
      </div>
    </div>
  );
}
