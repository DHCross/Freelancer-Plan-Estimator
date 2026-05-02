export default function Slide2Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #0d1829 0%, #111c2e 100%)" }}>
      <div
        className="absolute"
        style={{ left: "8vw", top: 0, width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent 10%, #1e3a5f 50%, transparent 90%)" }}
      />

      <div className="absolute inset-0 flex" style={{ padding: "7vh 8vw 7vh 12vw" }}>
        <div className="flex flex-col justify-center" style={{ maxWidth: "52vw" }}>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#f97316", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2.5vh" }}>
            The Problem
          </p>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "4.5vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em", textWrap: "balance", marginBottom: "5vh" }}>
            Production teams lose weeks to coordination gaps
          </h2>
          <div className="flex flex-col" style={{ gap: "3vh" }}>
            <div className="flex items-start gap-[1.5vw]">
              <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#f97316", flexShrink: 0, marginTop: "0.9vh" }} />
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 400, color: "#cbd5e1", lineHeight: 1.5 }}>
                No single view of who is working on what — capacity is managed in scattered spreadsheets
              </p>
            </div>
            <div className="flex items-start gap-[1.5vw]">
              <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#f97316", flexShrink: 0, marginTop: "0.9vh" }} />
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 400, color: "#cbd5e1", lineHeight: 1.5 }}>
                Budget and timeline planning happens after deadlines slip, not before
              </p>
            </div>
            <div className="flex items-start gap-[1.5vw]">
              <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#f97316", flexShrink: 0, marginTop: "0.9vh" }} />
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 400, color: "#cbd5e1", lineHeight: 1.5 }}>
                Clients see different information than the team, with no clean separation
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1" style={{ paddingLeft: "4vw" }}>
          <div style={{ width: "22vw", padding: "4vh 3vw", backgroundColor: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "4px" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#94a3b8", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              The result
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.2vw", fontWeight: 700, color: "#f97316", lineHeight: 1.3 }}>
              Missed launches, overspent budgets, and a team that can't see the whole picture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
