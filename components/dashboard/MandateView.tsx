import { Briefcase } from "lucide-react";
import { DisplayProject } from "@/lib/types";


interface MandateViewProps {
  projects: DisplayProject[];
  clientMode?: boolean;
}

  const [items, setItems] = useState(projects);

  const handleWindowChange = (id: number, value: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, launchWindow: value } : item));
  };

  const clientMode = typeof window !== "undefined" && window.localStorage.getItem("hoskbrew_client_mode") === "true";

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mandates</p>
          <h2 className="text-2xl font-bold text-slate-900">Strategic Workload List</h2>
          <p className="text-sm text-slate-600 mt-2">
            Single source of truth for every in-flight or queued deliverable, showing stakeholder ownership and window.
          </p>
        </div>
        <Briefcase className="w-10 h-10 text-slate-500" />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Project</th>
              <th className="px-4 py-3 text-left">Owner</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Launch Window</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <p className="font-semibold text-slate-800">{project.name}</p>
                  <p className="text-xs text-slate-500">{project.revenuePotential}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">{project.stakeholder}</td>
                <td className="px-4 py-3 text-slate-600">{project.displayType ?? project.type}</td>
                <td className="px-4 py-3">
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 rounded-full px-2 py-1">
                    {project.displayStatus ?? project.internalStatus}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  {clientMode ? (
                    project.launchWindow
                  ) : (
                    <input
                      type="text"
                      value={project.launchWindow}
                      onChange={e => handleWindowChange(project.id, e.target.value)}
                      className="w-full p-1 border rounded bg-white text-xs"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
