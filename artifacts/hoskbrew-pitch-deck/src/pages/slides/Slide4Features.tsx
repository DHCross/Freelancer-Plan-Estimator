export default function Slide4Features() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(160deg, #0d1829 0%, #0a1628 100%)" }}>
      <div
        className="absolute"
        style={{ top: 0, right: 0, width: "35vw", height: "100%", background: "linear-gradient(to left, rgba(59,130,246,0.06), transparent)" }}
      />

      <div className="absolute inset-0 flex flex-col" style={{ padding: "7vh 8vw" }}>
        <div style={{ marginBottom: "5vh" }}>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
            Key Features
          </p>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "4vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Built around how production teams actually work
          </h2>
        </div>

        <div className="flex" style={{ gap: "3vw", flex: 1 }}>
          <div className="flex flex-col" style={{ gap: "3vh", flex: 1 }}>
            <div>
              <div className="flex items-center gap-[1vw]" style={{ marginBottom: "1.2vh" }}>
                <div style={{ width: "0.5vw", height: "2.5vh", backgroundColor: "#3b82f6", borderRadius: "2px" }} />
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 700, color: "#f1f5f9" }}>
                  Team Capacity
                </p>
              </div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.5, paddingLeft: "1.5vw" }}>
                Weekly hours, draft speed, and chaos buffers per team member. Know who has room before assigning work.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-[1vw]" style={{ marginBottom: "1.2vh" }}>
                <div style={{ width: "0.5vw", height: "2.5vh", backgroundColor: "#10b981", borderRadius: "2px" }} />
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 700, color: "#f1f5f9" }}>
                  Project Tracking
                </p>
              </div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.5, paddingLeft: "1.5vw" }}>
                Lifecycle states from Planning through Production to Complete, with dependency chains between tasks.
              </p>
            </div>
          </div>

          <div style={{ width: "1px", backgroundColor: "#1e293b", flexShrink: 0 }} />

          <div className="flex flex-col" style={{ gap: "3vh", flex: 1 }}>
            <div>
              <div className="flex items-center gap-[1vw]" style={{ marginBottom: "1.2vh" }}>
                <div style={{ width: "0.5vw", height: "2.5vh", backgroundColor: "#f97316", borderRadius: "2px" }} />
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 700, color: "#f1f5f9" }}>
                  Budget Planning
                </p>
              </div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.5, paddingLeft: "1.5vw" }}>
                Word count targets, hourly rates, art budgets, and income scenarios — all in one Finance view.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-[1vw]" style={{ marginBottom: "1.2vh" }}>
                <div style={{ width: "0.5vw", height: "2.5vh", backgroundColor: "#94a3b8", borderRadius: "2px" }} />
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 700, color: "#f1f5f9" }}>
                  Reports
                </p>
              </div>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.5, paddingLeft: "1.5vw" }}>
                Export project data and generate stakeholder-ready summaries. Full import/export support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
