export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at top, #1f2933, #0b0b0b)",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "110px 60px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Blitz Soccer Logo"
          style={{
            width: "240px",
            height: "240px",
            objectFit: "contain",
            borderRadius: "24px",
            boxShadow: "0 0 60px rgba(34,197,94,0.3)",
          }}
        />

        {/* TEXT */}
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Blitz Soccer
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "1.6",
              opacity: 0.9,
            }}
          >
            Competitive football tournaments managed through Discord.
            Group stages, knockouts, schedules, and results — all organized
            in one system.
          </p>

          <div style={{ marginTop: "40px" }}>
            <a href="/tournaments">
              <button
                style={{
                  padding: "15px 34px",
                  fontSize: "16px",
                  background: "#22c55e",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginRight: "16px",
                }}
              >
                View Tournaments
              </button>
            </a>

            <a href="https://discord.gg/YOUR_INVITE" target="_blank">
              <button
                style={{
                  padding: "15px 34px",
                  fontSize: "16px",
                  background: "transparent",
                  border: "1px solid #333",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Join Discord
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 60px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
        }}
      >
        {[
          ["🏆", "Multiple Tournaments"],
          ["⚽", "UCL-Style Formats"],
          ["🤖", "Discord Automation"],
          ["📊", "Live Standings"],
        ].map(([icon, text]) => (
          <div
            key={text}
            style={{
              padding: "26px",
              border: "1px solid #222",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ fontSize: "28px" }}>{icon}</div>
            <p style={{ marginTop: "10px", opacity: 0.85 }}>{text}</p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 60px 100px",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
          }}
        >
          <Feature
            title="Create & Join Tournaments"
            text="Players register and compete in structured competitions with clear formats."
          />
          <Feature
            title="Group & Knockout Stages"
            text="Classic Champions League-style formats with fair progression."
          />
          <Feature
            title="Managed on Discord"
            text="Scheduling, results, and communication handled seamlessly on Discord."
          />
        </div>
      </section>

      {/* FOOTER CTA */}
      <section
        style={{
          borderTop: "1px solid #222",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "30px" }}>
          Ready to compete?
        </h2>
        <p style={{ opacity: 0.8, marginTop: "10px" }}>
          Join Blitz Soccer and take part in organized football tournaments.
        </p>

        <a href="/tournaments">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 32px",
              fontSize: "16px",
              background: "#22c55e",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Browse Tournaments
          </button>
        </a>
      </section>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div>
      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{title}</h3>
      <p style={{ opacity: 0.85, lineHeight: "1.6" }}>{text}</p>
    </div>
  );
}
