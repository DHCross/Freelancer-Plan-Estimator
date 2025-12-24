"use client";

import React, { useState, useCallback } from "react";
import { FileText, Upload, X, FileUp, Calculator, Check, Trash2 } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface DocumentFile {
  id: string;
  name: string;
  wordCount: number;
  type: "docx" | "md" | "txt";
  size: number;
}

interface DocumentWordCounterProps {
  onApplyTotal?: (wordCount: number) => void;
  label?: string;
}

// Parse .docx file content (simplified - extracts text from XML)
async function parseDocx(file: File): Promise<number> {
  const JSZip = (await import("jszip")).default;
  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);
  
  const documentXml = await zip.file("word/document.xml")?.async("string");
  if (!documentXml) return 0;
  
  // Extract text content from XML, removing tags
  const textContent = documentXml
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  
  // Count words
  const words = textContent.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

// Parse markdown/text file
async function parseTextFile(file: File): Promise<number> {
  const text = await file.text();
  
  // Remove markdown syntax for more accurate count
  const cleanText = text
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`[^`]+`/g, "") // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Replace links with text
    .replace(/[#*_~>`]/g, "") // Remove markdown symbols
    .replace(/\s+/g, " ")
    .trim();
  
  const words = cleanText.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

export function DocumentWordCounter({ onApplyTotal, label = "Manuscript Word Counter" }: DocumentWordCounterProps) {
  const [files, setFiles] = useState<DocumentFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [applied, setApplied] = useState(false);

  const totalWords = files.reduce((sum, f) => sum + f.wordCount, 0);

  const processFiles = useCallback(async (fileList: FileList | File[]) => {
    setIsProcessing(true);
    const newFiles: DocumentFile[] = [];

    for (const file of Array.from(fileList)) {
      const ext = file.name.split(".").pop()?.toLowerCase();
      
      if (!["docx", "md", "txt", "markdown"].includes(ext || "")) {
        continue; // Skip unsupported files
      }

      let wordCount = 0;
      let type: "docx" | "md" | "txt" = "txt";

      try {
        if (ext === "docx") {
          wordCount = await parseDocx(file);
          type = "docx";
        } else {
          wordCount = await parseTextFile(file);
          type = ext === "md" || ext === "markdown" ? "md" : "txt";
        }

        newFiles.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          name: file.name,
          wordCount,
          type,
          size: file.size,
        });
      } catch (err) {
        console.error(`Error processing ${file.name}:`, err);
      }
    }

    setFiles(prev => [...prev, ...newFiles]);
    setApplied(false);
    setIsProcessing(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  }, [processFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
  }, [processFiles]);

  const removeFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setApplied(false);
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setApplied(false);
  }, []);

  const handleApply = useCallback(() => {
    if (onApplyTotal && totalWords > 0) {
      onApplyTotal(totalWords);
      setApplied(true);
      setTimeout(() => setApplied(false), 2000);
    }
  }, [onApplyTotal, totalWords]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "docx":
        return <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-xs font-bold">W</div>;
      case "md":
        return <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded flex items-center justify-center text-xs font-bold">MD</div>;
      default:
        return <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded flex items-center justify-center"><FileText className="w-4 h-4" /></div>;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900">{label}</h3>
        </div>
        {files.length > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
          >
            <Trash2 className="w-3 h-3" />
            Clear All
          </button>
        )}
      </div>

      <p className="text-sm text-slate-600">
        Drop your manuscript files here to calculate combined word count. Supports <code className="bg-slate-100 px-1 rounded">.docx</code>, <code className="bg-slate-100 px-1 rounded">.md</code>, and <code className="bg-slate-100 px-1 rounded">.txt</code> files.
      </p>

      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer
          ${isDragging 
            ? "border-indigo-500 bg-indigo-50" 
            : "border-slate-300 hover:border-indigo-400 hover:bg-slate-50"
          }
          ${isProcessing ? "opacity-50 pointer-events-none" : ""}
        `}
      >
        <input
          type="file"
          multiple
          accept=".docx,.md,.txt,.markdown"
          onChange={handleFileInput}
          className="hidden"
          id="document-upload"
        />
        <label htmlFor="document-upload" className="cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            {isProcessing ? (
              <>
                <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-slate-600">Processing files...</span>
              </>
            ) : (
              <>
                <FileUp className={`w-8 h-8 ${isDragging ? "text-indigo-600" : "text-slate-400"}`} />
                <span className="text-sm text-slate-600">
                  <span className="font-medium text-indigo-600">Click to upload</span> or drag and drop
                </span>
                <span className="text-xs text-slate-400">Multiple files supported</span>
              </>
            )}
          </div>
        </label>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Loaded Files ({files.length})
          </div>
          <div className="max-h-48 overflow-y-auto space-y-2">
            {files.map(file => (
              <div
                key={file.id}
                className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <div>
                    <div className="text-sm font-medium text-slate-700 truncate max-w-[200px]">
                      {file.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {formatFileSize(file.size)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900">
                      {formatNumber(file.wordCount)}
                    </div>
                    <div className="text-xs text-slate-400">words</div>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Total & Apply */}
      {files.length > 0 && (
        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Combined Total</div>
            <div className="text-2xl font-bold text-indigo-600">{formatNumber(totalWords)} words</div>
          </div>
          {onApplyTotal && (
            <button
              onClick={handleApply}
              disabled={totalWords === 0}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                ${applied 
                  ? "bg-emerald-600 text-white" 
                  : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md"
                }
                ${totalWords === 0 ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {applied ? (
                <>
                  <Check className="w-4 h-4" />
                  Applied!
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Apply to Existing Words
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
