export default function Page() {
  const teams = [
    { name: "Blitz FC", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { name: "Ice United", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { name: "Snow City", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { name: "Frost Wolves", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
  ];

  return (
    <main style={page}>
      {/* Background */}
      <div style={bg} />
      <div style={overlay} />

      <section style={content}>
        {/* EVENT HEADER */}
        <div style={eventBlock}>
          <h1 style={eventTitle}>BLITZ WINTER CUP</h1>
          <p style={eventSub}>OFFICIAL STANDINGS</p>
        </div>

        {/* TABLE PANEL */}
        <div style={panel}>
          <div style={panelHeader}>
            <span>GROUP A</span>
            <span>TOP 2 QUALIFY</span>
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
                  <td style={{ fontWeight: 700 }}>{t.name}</td>
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
  color: "#ffffff",
  fontFamily: "Inter, system-ui, sans-serif",
};

const bg = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/backgrounds/winter-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(5,15,30,0.85) 30%, rgba(5,15,30,0.55) 100%)",
};

const content = {
  position: "relative",
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "100px 40px",
};

const eventBlock = {
  marginBottom: "50px",
};

const eventTitle = {
  fontSize: "72px",
  fontWeight: 900,
  letterSpacing: "0.04em",
};

const eventSub = {
  marginTop: "8px",
  fontSize: "16px",
  opacity: 0.75,
};

const panel = {
  background: "rgba(15,23,42,0.75)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.12)",
  maxWidth: "720px",
};

const panelHeader = {
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 20px",
  fontWeight: 700,
  borderBottom: "1px solid rgba(255,255,255,0.15)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const row = {
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const qualified = {
  background: "rgba(59,130,246,0.15)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const pts = {
  fontWeight: 900,
  fontSize: "18px",
};
