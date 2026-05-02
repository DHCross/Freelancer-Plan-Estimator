const base = import.meta.env.BASE_URL;

export default function Slide8Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: "#0d1829" }}>
      <img
        src={`${base}hero-title.png`}
        crossOrigin="anonymous"
        alt="Dark workshop atmosphere"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.2 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,24,41,0.95) 0%, rgba(13,24,41,0.80) 100%)" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ textAlign: "center", padding: "7vh 10vw" }}>
        <div className="flex items-center gap-[1.5vw]" style={{ marginBottom: "4vh" }}>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#3b82f6" }} />
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 500, color: "#3b82f6", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Freelance Forge
          </p>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#3b82f6" }} />
        </div>

        <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "6vw", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "3vh", textWrap: "balance" }}>
          Production Engine
        </h2>

        <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", fontWeight: 400, color: "#64748b", maxWidth: "50vw", lineHeight: 1.6, marginBottom: "6vh" }}>
          Bringing production clarity to a team that builds worlds. Every project, every person, every deadline — in one place.
        </p>

        <div className="flex items-center gap-[3vw]">
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5vw", fontWeight: 700, color: "#3b82f6", lineHeight: 1 }}>
              3
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", marginTop: "0.5vh" }}>
              Team Members
            </p>
          </div>
          <div style={{ width: "1px", height: "6vh", backgroundColor: "#1e293b" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5vw", fontWeight: 700, color: "#f97316", lineHeight: 1 }}>
              15+
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", marginTop: "0.5vh" }}>
              Active Projects
            </p>
          </div>
          <div style={{ width: "1px", height: "6vh", backgroundColor: "#1e293b" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5vw", fontWeight: 700, color: "#10b981", lineHeight: 1 }}>
              2026
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", fontWeight: 400, color: "#64748b", marginTop: "0.5vh" }}>
              Launch Year
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute"
        style={{ bottom: "4vh", left: 0, right: 0, display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "6vw", height: "2px", background: "linear-gradient(to right, transparent, #3b82f6, transparent)" }} />
      </div>
    </div>
  );
}
