export default function Slide7Pipeline() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "#0d1829" }}>
      <div
        className="absolute"
        style={{ top: 0, right: 0, width: "30vw", height: "100%", background: "linear-gradient(to left, rgba(59,130,246,0.05), transparent)" }}
      />

      <div className="absolute inset-0 flex flex-col" style={{ padding: "7vh 8vw" }}>
        <div style={{ marginBottom: "4.5vh" }}>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
            Active Pipeline
          </p>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "4vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Three product lines. One shared production board.
          </h2>
        </div>

        <div className="flex" style={{ gap: "2.5vw", flex: 1 }}>
          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div className="flex items-center gap-[0.8vw]" style={{ marginBottom: "0.5vh" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#f97316" }} />
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#f97316" }}>
                Chaos Rising (A-Series)
              </p>
            </div>
            <div style={{ borderLeft: "2px solid rgba(249,115,22,0.3)", paddingLeft: "1.5vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9" }}>A0: Caravan's End</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#64748b" }}>Layout · Jan 2026</p>
              </div>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9" }}>A1: Problem of Possibilities</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#64748b" }}>Complete · Q2 2026</p>
              </div>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9" }}>A2 · A3 · A4 (Planned)</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#64748b" }}>Q3–Q4 2026</p>
              </div>
            </div>
          </div>

          <div style={{ width: "1px", backgroundColor: "#1e293b", flexShrink: 0 }} />

          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div className="flex items-center gap-[0.8vw]" style={{ marginBottom: "0.5vh" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#3b82f6" }} />
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#3b82f6" }}>
                Eldritch 2E
              </p>
            </div>
            <div style={{ borderLeft: "2px solid rgba(59,130,246,0.3)", paddingLeft: "1.5vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9" }}>Curses to Prose</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#64748b" }}>Priority · Dec 22 Deadline</p>
              </div>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#64748b" }}>3 task phases tracked</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#475569" }}>Drafting → Stress-Testing → Layout</p>
              </div>
            </div>
          </div>

          <div style={{ width: "1px", backgroundColor: "#1e293b", flexShrink: 0 }} />

          <div className="flex flex-col" style={{ flex: 1, gap: "2vh" }}>
            <div className="flex items-center gap-[0.8vw]" style={{ marginBottom: "0.5vh" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#10b981" }} />
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 700, color: "#10b981" }}>
                Infrastructure
              </p>
            </div>
            <div style={{ borderLeft: "2px solid rgba(16,185,129,0.3)", paddingLeft: "1.5vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9" }}>Production Pipeline Framework</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#64748b" }}>Active · Q1 2026</p>
              </div>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9" }}>Template System Overhaul</p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#64748b" }}>Active · Q1 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
