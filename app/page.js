"use client";

const teams = [
  { name: "Blitz FC", logo: "/logos/blitz.png", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
  { name: "Ice United", logo: "/logos/ice.png", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
  { name: "Snow City", logo: "/logos/snow.png", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
  { name: "Frost Wolves", logo: "/logos/frost.png", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
];

export default function Page() {
  return (
    <main style={page}>
      {/* Background graphics */}
      <div style={bgGraphic} />

      <section style={container}>
        <header style={header}>
          <span style={event}>BLITZ WINTER CUP</span>
          <h1 style={title}>Group A</h1>
        </header>

        <div style={tableCard}>
          <table style={table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </thead>

            <tbody>
              {teams.map((t, i) => (
                <tr key={t.name} style={i < 2 ? qualified : row}>
                  <td>{i + 1}</td>
                  <td style={teamCell}>
                    <img src={t.logo} style={logo} />
                    {t.name}
                  </td>
                  <td>{t.p}</td>
                  <td>{t.w}</td>
                  <td>{t.d}</td>
                  <td>{t.l}</td>
                  <td>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                  <td style={pts}>{t.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer style={legend}>
          Top 2 teams advance to Playoffs
        </footer>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  background:
    "linear-gradient(160deg, #eaf2ff 0%, #d7e6ff 35%, #c1d4f3 100%)",
  position: "relative",
  fontFamily: "Inter, system-ui, sans-serif",
  color: "#0f172a",
};

const bgGraphic = {
  position: "absolute",
  inset: 0,
  backgroundImage: `
    linear-gradient(120deg, rgba(59,130,246,.08), transparent 60%),
    linear-gradient(300deg, rgba(14,165,233,.12), transparent 55%)
  `,
  pointerEvents: "none",
};

const container = {
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "80px 24px",
};

const header = {
  marginBottom: "30px",
};

const event = {
  fontSize: "13px",
  letterSpacing: "0.14em",
  color: "#2563eb",
  fontWeight: 700,
};

const title = {
  fontSize: "42px",
  fontWeight: 800,
  marginTop: "6px",
};

const tableCard = {
  background: "rgba(255,255,255,.75)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,.6)",
  overflow: "hidden",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const row = {
  borderBottom: "1px solid rgba(15,23,42,.06)",
};

const qualified = {
  background: "linear-gradient(90deg, rgba(37,99,235,.08), transparent)",
  borderBottom: "1px solid rgba(15,23,42,.06)",
};

const teamCell = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const logo = {
  width: "28px",
  height: "28px",
};

const pts = {
  fontWeight: 800,
};

const legend = {
  marginTop: "12px",
  fontSize: "14px",
  color: "#334155",
};
