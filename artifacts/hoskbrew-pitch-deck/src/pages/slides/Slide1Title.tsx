const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "#0d1829" }}>
      <img
        src={`${base}hero-title.png`}
        crossOrigin="anonymous"
        alt="Dark workshop atmosphere"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,24,41,0.92) 40%, rgba(59,130,246,0.18) 100%)" }}
      />

      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "7vh 8vw" }}>
        <div className="flex items-center gap-[1.2vw]">
          <div style={{ width: "0.35vw", height: "3vh", backgroundColor: "#3b82f6", borderRadius: "2px" }} />
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Hoskbrew Strategic Board
          </p>
        </div>

        <div>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.08em", marginBottom: "2vh", textTransform: "uppercase" }}>
            Production Management System
          </p>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "7vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.0, letterSpacing: "-0.03em", textWrap: "balance" }}>
            Production
          </h1>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "7vw", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "3vh" }}>
            <span style={{ color: "#f97316" }}>Engine</span>
          </h1>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 400, color: "#94a3b8", maxWidth: "45vw", lineHeight: 1.5 }}>
            One dashboard for every project, team member, deadline, and budget — built for tabletop RPG publishing teams.
          </p>
        </div>

        <div className="flex items-center gap-[3vw]">
          <div>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b" }}>
              May 2026
            </p>
          </div>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#334155" }} />
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b" }}>
            Internal Review
          </p>
        </div>
      </div>

      <div
        className="absolute"
        style={{ right: 0, top: 0, width: "2px", height: "100%", background: "linear-gradient(to bottom, transparent, #3b82f6, transparent)" }}
      />
    </div>
  );
}
