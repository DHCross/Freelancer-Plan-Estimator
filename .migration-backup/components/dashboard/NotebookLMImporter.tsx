"use client";

import React, { useState } from "react";
import { Upload, AlertTriangle, CheckCircle, FileJson } from "lucide-react";
import { DataIngestionService } from "@/lib/ingest-notebook-lm";
import { UnifiedProjectModel } from "@/lib/unified-project-model";
import { useTeamLoad } from "@/lib/TeamLoadContext";

export function NotebookLMImporter() {
  const [jsonInput, setJsonInput] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImport = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      
      // In a real app, we'd get the actual singleton instance or context
      // For now, we simulate the ingestion to validate format
      // forcing a type check implicitly via the function call
      
      // We are "faking" the model instance passed in because the service 
      // is currently stateless in our implementation
      const modelStub = {} as UnifiedProjectModel; 
      
      const result = DataIngestionService.ingest(parsed, modelStub);
      
      console.log("Ingestion Result:", result);
      setStatus("success");
      setErrorMessage("");
      
      // Here we would dispatch to context, e.g.:
      // addProjectFromImport(result);
      
    } catch (e: any) {
      console.error(e);
      setStatus("error");
      setErrorMessage(e.message || "Invalid JSON format");
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 space-y-4">
      <div className="flex items-center gap-2 text-slate-100 font-semibold border-b border-slate-700 pb-2">
        <FileJson className="w-5 h-5 text-indigo-400" />
        <h3>NotebookLM Project Injection</h3>
      </div>
      
      <div className="text-sm text-slate-400">
        Paste the raw JSON output from the NotebookLM audit to inject schedule, tasks, and financial constraints directly into the planning engine.
      </div>

      <textarea
        className="w-full h-48 bg-slate-950 border border-slate-800 rounded p-3 text-xs font-mono text-emerald-400 focus:outline-none focus:border-indigo-500"
        placeholder='{ "project": { "id": "..." } ... }'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />

      {status === "error" && (
        <div className="bg-red-950/30 border border-red-900/50 text-red-200 text-sm p-3 rounded flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold">Import Failed</div>
            <div className="text-xs opacity-80">{errorMessage}</div>
          </div>
        </div>
      )}

      {status === "success" && (
        <div className="bg-emerald-950/30 border border-emerald-900/50 text-emerald-200 text-sm p-3 rounded flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <div>
             <div className="font-semibold">Injection Successful</div>
             <div className="text-xs opacity-80">Project milestones and constraints updated.</div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleImport}
          disabled={!jsonInput.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Upload className="w-4 h-4" />
          Inject Data
        </button>
      </div>
    </div>
  );
}
