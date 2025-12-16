export default function Page() {
  const teams = [
    { name: "Blitz FC", logo: "/logos/blitz.png", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { name: "Ice United", logo: "/logos/ice.png", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { name: "Snow City", logo: "/logos/snow.png", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { name: "Frost Wolves", logo: "/logos/frost.png", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
  ];

  return (
    <main style={page}>
      {/* Snow texture */}
      <div style={snowTexture} />

      <section style={container}>
        {/* Header */}
        <header style={header}>
          <div style={eventTag}>BLITZ WINTER CUP</div>
          <h1 style={group}>GROUP A</h1>
          <div style={rule}>Top 2 advance</div>
        </header>

        {/* Table */}
        <div style={tableWrapper}>
          <table style={table}>
            <thead>
              <tr>
                <th>#</th>
                <th style={{ textAlign: "left" }}>Team</th>
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
                <tr key={t.name} style={i < 2 ? qualifiedRow : row}>
                  <td style={pos}>{i + 1}</td>

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
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  background: "#e6f0ff",
  position: "relative",
  fontFamily: "Inter, system-ui, sans-serif",
  color: "#0b1b33",
};

const snowTexture = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/snow-texture.png')",
  opacity: 0.35,
  pointerEvents: "none",
};

const container = {
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "80px 24px",
};

const header = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  marginBottom: "24px",
};

const eventTag = {
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  color: "#1d4ed8",
};

const group = {
  textAlign: "center",
  fontSize: "44px",
  fontWeight: 900,
};

const rule = {
  textAlign: "right",
  fontSize: "13px",
  color: "#334155",
};

const tableWrapper = {
  background: "#ffffff",
  borderRadius: "14px",
  border: "1px solid #c7d7f2",
  overflow: "hidden",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const row = {
  borderBottom: "1px solid #e5edf9",
};

const qualifiedRow = {
  background: "#f0f6ff",
  borderBottom: "1px solid #e5edf9",
};

const pos = {
  fontWeight: 800,
};

const teamCell = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const logo = {
  width: "30px",
  height: "30px",
  objectFit: "contain",
};

const pts = {
  fontWeight: 900,
  fontSize: "16px",
};
