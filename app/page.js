export default function Page() {
  const teams = [
    {
      name: "Blitz FC",
      logo: "/logos/blitz.png",
      p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13,
      form: ["W", "W", "D", "W", "L"],
    },
    {
      name: "Ice United",
      logo: "/logos/ice.png",
      p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12,
      form: ["W", "L", "W", "W", "W"],
    },
    {
      name: "Snow City",
      logo: "/logos/snow.png",
      p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11,
      form: ["D", "W", "D", "W", "L"],
    },
    {
      name: "Frost Wolves",
      logo: "/logos/frost.png",
      p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7,
      form: ["L", "W", "L", "D", "L"],
    },
  ];

  return (
    <main style={page}>
      <div style={bg} />

      <section style={container}>
        <h1 style={tournamentTitle}>BLITZ WINTER CUP – GROUP A</h1>
        <p style={tournamentSub}>Top 2 teams qualify for Playoffs</p>

        <div style={panel}>
          <table style={table}>
            <thead>
              <tr>
                <th>#</th>
                <th style={left}>TEAM</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>PTS</th>
                <th style={left}>FORM</th>
              </tr>
            </thead>

            <tbody>
              {teams.map((t, i) => (
                <tr key={t.name} style={i < 2 ? qualified : row}>
                  <td>{i + 1}</td>

                  {/* TEAM CELL (logo + name) */}
                  <td style={teamCell}>
                    <img src={t.logo} style={logo} />
                    <span>{t.name}</span>
                  </td>

                  {/* STATS */}
                  <td style={stat}>{t.p}</td>
                  <td style={stat}>{t.w}</td>
                  <td style={stat}>{t.d}</td>
                  <td style={stat}>{t.l}</td>
                  <td style={stat}>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                  <td style={{ ...stat, ...pts }}>{t.pts}</td>

                  {/* FORM */}
                  <td>
                    <div style={formWrap}>
                      {t.form.map((f, idx) => (
                        <span
                          key={idx}
                          style={{
                            ...formDot,
                            background:
                              f === "W" ? "#2563eb" :
                              f === "D" ? "#64748b" :
                              "#dc2626",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
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
  maxWidth: "1300px",
  margin: "0 auto",
  textAlign: "center",
};

const tournamentTitle = {
  fontSize: "56px",
  fontWeight: 900,
  marginBottom: "6px",
};

const tournamentSub = {
  fontSize: "18px",
  opacity: 0.85,
  marginBottom: "40px",
};

const panel = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "22px",
  padding: "40px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "18px",
};

const row = {
  borderBottom: "1px solid rgba(255,255,255,0.15)",
};

const qualified = {
  background: "rgba(37,99,235,0.22)",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
};

const left = { textAlign: "left" };

const logo = {
  width: "32px",
  height: "32px",
  objectFit: "contain",
};

const pts = {
  fontWeight: 900,
  fontSize: "18px",
};

const teamCell = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textAlign: "left",
  fontWeight: 700,
};

const stat = {
  padding: "12px 6px",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const formWrap = {
  display: "flex",
  gap: "6px",
};

const formDot = {
  width: "28px",
  height: "26px",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: 800,
  color: "#fff",
};
