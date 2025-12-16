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

      <section style={container}>
        {/* Tournament Name */}
        <h1 style={tournamentTitle}>BLITZ WINTER CUP - GROUP A</h1>
        <p style={tournamentSub}>Top 2 teams advance to Playoffs</p>

        {/* Table Panel */}
        <div style={panel}>
          <table style={table}>
            <thead>
              <tr>
                <th style={thCenter}>#</th>
                <th style={thLeft}>TEAM</th>
                <th style={thCenter}>P</th>
                <th style={thCenter}>W</th>
                <th style={thCenter}>D</th>
                <th style={thCenter}>L</th>
                <th style={thCenter}>GD</th>
                <th style={thCenter}>PTS</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((t, i) => (
                <tr key={t.name} style={i < 2 ? qualified : row}>
                  <td style={tdCenter}>{i + 1}</td>
                  <td style={tdTeam}>{t.name}</td>
                  <td style={tdCenter}>{t.p}</td>
                  <td style={tdCenter}>{t.w}</td>
                  <td style={tdCenter}>{t.d}</td>
                  <td style={tdCenter}>{t.l}</td>
                  <td style={tdCenter}>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                  <td style={tdCenter}>{t.pts}</td>
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
  alignItems: "flex-start",
  paddingTop: "80px",
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
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const tournamentTitle = {
  fontSize: "56px",
  fontWeight: 900,
  marginBottom: "8px",
  textAlign: "center",
};

const tournamentSub = {
  fontSize: "18px",
  opacity: 0.8,
  marginBottom: "40px",
  textAlign: "center",
};

const panel = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "22px",
  padding: "50px",
  width: "90%",
  maxWidth: "1000px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "20px",
};

const thCenter = {
  textAlign: "center",
  padding: "12px 8px",
  fontWeight: 700,
};

const thLeft = {
  textAlign: "left",
  padding: "12px 8px",
  fontWeight: 700,
};

const tdCenter = {
  textAlign: "center",
  padding: "12px 8px",
};

const tdTeam = {
  textAlign: "left",
  padding: "12px 8px",
  fontWeight: 700,
};

const row = {
  borderBottom: "1px solid rgba(255,255,255,0.15)",
};

const qualified = {
  background: "rgba(37,99,235,0.2)",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
};
