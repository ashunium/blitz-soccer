export default function Page() {
  const teams = [
    { name: "Blitz FC", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { name: "Ice United", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { name: "Snow City", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { name: "Frost Wolves", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
  ];

  return (
    <main style={page}>
      {/* Snow background */}
      <div style={bg} />

      <section style={container}>
        {/* Table Panel */}
        <div style={panel}>
          <div style={panelHeader}>
            <h1 style={panelTitle}>BLITZ WINTER CUP - GROUP A</h1>
            <span style={panelSub}>Top 2 advance</span>
          </div>

          <table style={table}>
            <thead>
              <tr>
                <th>#</th>
                <th>TEAM</th>
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
                  <td style={teamCell}>{t.name}</td>
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
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  position: "relative",
  fontFamily: "Inter, system-ui, sans-serif",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const bg = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/backgrounds/winter-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const panel = {
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "20px",
  maxWidth: "900px",
  width: "90%",
  padding: "40px",
};

const panelHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  marginBottom: "20px",
};

const panelTitle = {
  fontSize: "32px",
  fontWeight: 900,
  letterSpacing: "0.04em",
};

const panelSub = {
  fontSize: "14px",
  opacity: 0.8,
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "18px",
};

const row = {
  borderBottom: "1px solid rgba(255,255,255,0.25)",
};

const qualified = {
  background: "rgba(37, 99, 235, 0.2)",
  borderBottom: "1px solid rgba(255,255,255,0.25)",
};

const teamCell = {
  textAlign: "left",
  fontWeight: 700,
  padding: "12px 8px",
};

const pts = {
  fontWeight: 900,
  textAlign: "center",
};
