export default function Slide6Workflows() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1829 0%, #0a1628 100%)" }}>
      <div
        className="absolute"
        style={{ bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(59,130,246,0.05), transparent)" }}
      />

      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "7vh 8vw" }}>
        <div>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
            Core Workflows
          </p>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "4vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Five views, one cohesive system
          </h2>
        </div>

        <div className="flex items-end" style={{ gap: "1.5vw" }}>
          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div style={{ backgroundColor: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: "4px", padding: "3vh 2vw" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#3b82f6", marginBottom: "1vh" }}>
                Dashboard
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
                Active projects at a glance. Status, stakeholder, and launch window — the daily pulse check.
              </p>
            </div>
          </div>

          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div style={{ backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "4px", padding: "3vh 2vw" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#10b981", marginBottom: "1vh" }}>
                Planning
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
                Timeline scheduling, milestone tracking, and dependency management across product lines.
              </p>
            </div>
          </div>

          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "4px", padding: "3vh 2vw" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#f97316", marginBottom: "1vh" }}>
                Team
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
                Per-member capacity, weekly hours, draft velocity, and role profiles in one place.
              </p>
            </div>
          </div>

          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div style={{ backgroundColor: "rgba(148,163,184,0.08)", border: "1px solid rgba(148,163,184,0.15)", borderRadius: "4px", padding: "3vh 2vw" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#94a3b8", marginBottom: "1vh" }}>
                Finance
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
                Word rate pricing, art budgets, income scenarios, and full cost modeling.
              </p>
            </div>
          </div>

          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div style={{ backgroundColor: "rgba(148,163,184,0.08)", border: "1px solid rgba(148,163,184,0.15)", borderRadius: "4px", padding: "3vh 2vw" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#94a3b8", marginBottom: "1vh" }}>
                Reports
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
                Exportable summaries and data snapshots for archive, handoff, or stakeholder review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
