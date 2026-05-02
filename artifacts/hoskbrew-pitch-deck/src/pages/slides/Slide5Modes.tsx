export default function Slide5Modes() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "#060e1c" }}>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(13,24,41,0.95) 50%, rgba(8,16,35,0.95) 50%)" }}
      />

      <div className="absolute inset-0 flex flex-col" style={{ padding: "7vh 0" }}>
        <div style={{ padding: "0 8vw", marginBottom: "4vh" }}>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
            Two Modes
          </p>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "4vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            One system. Two lenses.
          </h2>
        </div>

        <div className="flex flex-1" style={{ gap: 0 }}>
          <div className="flex flex-col justify-center" style={{ flex: 1, padding: "4vh 8vw 4vh 8vw", borderRight: "1px solid #1e293b" }}>
            <div style={{ marginBottom: "2vh" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>
                Internal Mode
              </p>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.8vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2, marginBottom: "2.5vh" }}>
                Full production visibility
              </h3>
            </div>
            <div className="flex flex-col" style={{ gap: "2vh" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 400, color: "#94a3b8", lineHeight: 1.5 }}>
                Team hourly rates, budget burn, and raw task status — every operational detail exposed
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 400, color: "#94a3b8", lineHeight: 1.5 }}>
                Export/import controls for data portability and pipeline management
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 400, color: "#94a3b8", lineHeight: 1.5 }}>
                Dependency tracking across tasks and product lines
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center" style={{ flex: 1, padding: "4vh 8vw 4vh 8vw" }}>
            <div style={{ marginBottom: "2vh" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", fontWeight: 500, color: "#f97316", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>
                Client Mode
              </p>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.8vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2, marginBottom: "2.5vh" }}>
                Stakeholder-ready view
              </h3>
            </div>
            <div className="flex flex-col" style={{ gap: "2vh" }}>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 400, color: "#94a3b8", lineHeight: 1.5 }}>
                Rates and internal budget details are hidden — clients see progress, timelines, and status
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 400, color: "#94a3b8", lineHeight: 1.5 }}>
                Clean presentation layer suitable for external review sessions
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 400, color: "#94a3b8", lineHeight: 1.5 }}>
                Toggle between modes with a single click — no data duplication
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
