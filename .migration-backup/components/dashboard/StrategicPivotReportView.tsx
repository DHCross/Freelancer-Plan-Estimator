import { 
  FileText, 
  Download, 
  Share2,
  Eye,
  Calendar,
  Users,
  Target,
  AlertTriangle
} from "lucide-react";
import { generateStrategicPivotReport, formatPivotReportAsMarkdown } from "../../lib/strategic-pivot-report";

export function StrategicPivotReportView() {
  const report = generateStrategicPivotReport();
  const markdownReport = formatPivotReportAsMarkdown();

  const handleExportMarkdown = () => {
    const blob = new Blob([markdownReport], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `strategic-pivot-report-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Strategic Pivot Report</title>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
              h1 { color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
              h2 { color: #334155; margin-top: 30px; }
              h3 { color: #475569; }
              blockquote { border-left: 4px solid #3b82f6; padding-left: 20px; margin: 20px 0; font-style: italic; background: #f8fafc; padding: 15px; }
              ul { padding-left: 20px; }
              li { margin: 8px 0; }
              .metadata { background: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0; }
            </style>
          </head>
          <body>
            ${markdownReport.replace(/\n/g, '<br>').replace(/#{1,3}\s/g, match => {
              const level = match.trim().length;
              return `<h${level}>${match.replace(/#/g, '').trim()}</h${level}>`;
            }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/^> /gm, '<blockquote>')}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Export Options */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-2">
              <FileText className="w-8 h-8" />
              Strategic Pivot Report
            </h2>
            <p className="text-indigo-100 text-sm">
              Leadership documentation for Great Remote Purge response and institutional archivist strategy
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExportMarkdown}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export MD
            </button>
            <button
              onClick={handlePrint}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-500" />
          Executive Summary
        </h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm font-semibold text-slate-700 mb-2">Situation</div>
              <div className="text-sm text-slate-600">{report.executiveSummary.situation}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm font-semibold text-slate-700 mb-2">Decision</div>
              <div className="text-sm text-slate-600">{report.executiveSummary.decision}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm font-semibold text-slate-700 mb-2">Timeline</div>
              <div className="text-sm text-slate-600">{report.executiveSummary.timeline}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-sm font-semibold text-slate-700 mb-2">Impact</div>
              <div className="text-sm text-slate-600">{report.executiveSummary.impact}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stakeholder Mandates */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-500" />
          Stakeholder Mandates
        </h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="font-bold text-blue-800 mb-2">Matthew: Core IP Protection</div>
            <blockquote className="text-blue-700 italic">"{report.stakeholderMandates.matthew}"</blockquote>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="font-bold text-green-800 mb-2">Martin: Production Backbone</div>
            <blockquote className="text-green-700 italic">"{report.stakeholderMandates.martin}"</blockquote>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="font-bold text-amber-800 mb-2">Dan: Institutional Architecture</div>
            <blockquote className="text-amber-700 italic">"{report.stakeholderMandates.dan}"</blockquote>
          </div>
        </div>
      </div>

      {/* Operational Realities */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          Operational Realities
        </h3>
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="font-semibold text-red-800 mb-1">Capacity Loss</div>
            <div className="text-sm text-red-700">{report.operationalRealities.capacityLoss}</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="font-semibold text-orange-800 mb-1">Critical Path Risk</div>
            <div className="text-sm text-orange-700">{report.operationalRealities.criticalPathRisk}</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="font-semibold text-amber-800 mb-1">Survival Horizon</div>
            <div className="text-sm text-amber-700">{report.operationalRealities.survivalHorizon}</div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-green-500" />
          Strategic Recommendations
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-red-700 mb-3">Immediate Actions (Next 30 Days)</h4>
            <ul className="space-y-2">
              {report.strategicRecommendations.immediate.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-orange-700 mb-3">Short-Term Initiatives (30-90 Days)</h4>
            <ul className="space-y-2">
              {report.strategicRecommendations.shortTerm.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-700 mb-3">Long-Term Strategy (90+ Days)</h4>
            <ul className="space-y-2">
              {report.strategicRecommendations.longTerm.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Eye className="w-6 h-6 text-slate-500" />
          Report Preview
        </h3>
        <div className="bg-white p-4 rounded-lg border border-slate-200 max-h-96 overflow-y-auto">
          <pre className="text-xs text-slate-600 whitespace-pre-wrap font-mono">
            {markdownReport.substring(0, 2000)}...
          </pre>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleExportMarkdown}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Full Report
          </button>
          <button
            onClick={handlePrint}
            className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Print Version
          </button>
        </div>
      </div>
    </div>
  );
}
