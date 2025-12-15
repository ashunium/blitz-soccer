"use client";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #0a1c2c, #07101a)", color: "white", fontFamily: "Arial", position: "relative", overflow: "hidden" }}>
      <Snowfall count={100} />

      {/* Hero Section */}
      <section style={{ padding: "110px 60px 80px", maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap", zIndex: 1, position: "relative" }}>
        <img src="/logo.png" alt="Blitz Soccer Logo" style={{ width: "240px", height: "240px", objectFit: "contain", borderRadius: "24px", boxShadow: "0 0 30px #22c55e, 0 0 60px #38bdf8, 0 0 90px #60a5fa, 0 0 120px #93c5fd", filter: "drop-shadow(0 0 10px #93c5fd)" }} />

        <div style={{ maxWidth: "600px", marginLeft: "20px" }}>
          <h1 style={{ fontSize: "58px", fontWeight: "800", marginBottom: "20px" }}>Blitz Soccer</h1>
          <p style={{ fontSize: "19px", lineHeight: "1.6", opacity: 0.9 }}>
            Winter tournaments powered by Discord. Group stages, knockouts, and results — all in one frosty system.
          </p>

          <div style={{ marginTop: "40px" }}>
            <a href="/tournaments"><button className="snow-btn">View Tournaments</button></a>
            <a href="https://discord.gg/YOUR_INVITE" target="_blank"><button className="snow-btn outline">Join Discord</button></a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", zIndex: 1, position: "relative" }}>
        {[
          ["🏆", "Multiple Tournaments"],
          ["⚽", "UCL-Style Formats"],
          ["🤖", "Discord Automation"],
          ["📊", "Live Standings"]
        ].map(([icon, text]) => (
          <div key={text} className="snow-box">
            <div style={{ fontSize: "28px" }}>{icon}</div>
            <p style={{ marginTop: "10px", opacity: 0.85 }}>{text}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px 100px", zIndex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
          <Feature title="Create & Join Tournaments" text="Players register and compete in structured competitions with clear formats." />
          <Feature title="Group & Knockout Stages" text="Classic Champions League-style formats with fair progression." />
          <Feature title="Managed on Discord" text="Scheduling, results, and communication handled seamlessly on Discord." />
        </div>
      </section>

      {/* Footer */}
      <section style={{ borderTop: "1px solid #222", padding: "60px", textAlign: "center", zIndex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "30px" }}>Ready to compete?</h2>
        <p style={{ opacity: 0.8, marginTop: "10px" }}>Join Blitz Soccer and take part in organized football tournaments.</p>
        <a href="/tournaments"><button className="snow-btn" style={{ marginTop: "30px" }}>Browse Tournaments</button></a>
      </section>
    </main>
  );
}

function Snowfall({ count }) {
  const flakes = Array.from({ length: count });
  return (
    <>
      {flakes.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;
        return <div key={i} style={{
          position: 'absolute',
          top: '-10px',
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: Math.random() * 0.8 + 0.2,
          animation: `fall ${duration}s linear ${delay}s infinite`,
          zIndex: 0
        }} />;
      })}
    </>
  );
}

function Feature({ title, text }) {
  return (
    <div className="snow-box">
      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{title}</h3>
      <p style={{ opacity: 0.85, lineHeight: "1.6" }}>{text}</p>
    </div>
  );
}
