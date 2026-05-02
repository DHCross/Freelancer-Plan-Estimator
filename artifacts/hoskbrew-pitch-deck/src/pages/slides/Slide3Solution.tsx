export default function Slide3Solution() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 75% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />

      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "7vh 8vw" }}>
        <div className="flex items-center gap-[1.2vw]" style={{ marginBottom: "2vh" }}>
          <div style={{ width: "3vw", height: "2px", backgroundColor: "#3b82f6" }} />
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            The Solution
          </p>
        </div>

        <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "5vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "6vh", maxWidth: "60vw", textWrap: "balance" }}>
          One dashboard. Every project, person, and deadline.
        </h2>

        <div className="flex" style={{ gap: "2.5vw" }}>
          <div style={{ flex: 1, padding: "3.5vh 2.5vw", backgroundColor: "rgba(30,58,138,0.2)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "4px" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5vw", fontWeight: 700, color: "#3b82f6", lineHeight: 1, marginBottom: "1.5vh" }}>
              5
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9", marginBottom: "1vh" }}>
              Integrated Views
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
              Dashboard, Planning, Team, Finance, and Reports — all connected
            </p>
          </div>

          <div style={{ flex: 1, padding: "3.5vh 2.5vw", backgroundColor: "rgba(30,58,138,0.2)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "4px" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5vw", fontWeight: 700, color: "#3b82f6", lineHeight: 1, marginBottom: "1.5vh" }}>
              2
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9", marginBottom: "1vh" }}>
              Operating Modes
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
              Internal and client views — same data, the right lens for each audience
            </p>
          </div>

          <div style={{ flex: 1, padding: "3.5vh 2.5vw", backgroundColor: "rgba(30,58,138,0.2)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "4px" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5vw", fontWeight: 700, color: "#3b82f6", lineHeight: 1, marginBottom: "1.5vh" }}>
              3
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#f1f5f9", marginBottom: "1vh" }}>
              Product Lines
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#64748b", lineHeight: 1.4 }}>
              Chaos Rising, Eldritch 2E, and Infrastructure — tracked in parallel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
