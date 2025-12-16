export default function Home() {
  const teams = [
    { team: "Blitz FC", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { team: "Ice United", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { team: "Snow City", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { team: "Frost Wolves", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
    { team: "Glacier Esports", p: 6, w: 1, d: 1, l: 4, gd: -6, pts: 4 },
  ];

  // 🔥 Esports-style sorting
  const sorted = [...teams].sort(
    (a, b) => b.pts - a.pts || b.gd - a.gd || b.w - a.w
  );

  return (
    <main style={{ minHeight: "100vh", padding: "60px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "8px",
            fontWeight: "800",
          }}
        >
          Group A Standings
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.6,
            marginBottom: "40px",
          }}
        >
          Top 2 teams qualify
        </p>

        <div
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #1f2937",
            background: "#020617",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  background: "#020617",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  opacity: 0.7,
                }}
              >
                <th style={th}>#</th>
                <th style={{ ...th, textAlign: "left" }}>Team</th>
                <th style={th}>P</th>
                <th style={th}>W</th>
                <th style={th}>D</th>
                <th style={th}>L</th>
                <th style={th}>GD</th>
                <th style={th}>Pts</th>
              </tr>
            </thead>

            <tbody>
              {sorted.map((t, i) => {
                const qualified = i < 2;

                return (
                  <tr
                    key={t.team}
                    style={{
                      background: qualified
                        ? "rgba(34,197,94,0.08)"
                        : "transparent",
                      borderTop: "1px solid #1f2937",
                    }}
                  >
                    <td style={td}>{i + 1}</td>

                    <td
                      style={{
                        ...td,
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      {t.team}
                    </td>

                    <td style={td}>{t.p}</td>
                    <td style={td}>{t.w}</td>
                    <td style={td}>{t.d}</td>
                    <td style={td}>{t.l}</td>

                    <td
                      style={{
                        ...td,
                        color: t.gd >= 0 ? "#22c55e" : "#ef4444",
                      }}
                    >
                      {t.gd > 0 ? `+${t.gd}` : t.gd}
                    </td>

                    <td
                      style={{
                        ...td,
                        fontWeight: "800",
                        color: "#38bdf8",
                      }}
                    >
                      {t.pts}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "16px",
            fontSize: "13px",
            opacity: 0.7,
          }}
        >
          <span>🟢 Qualified</span>
        </div>
      </div>
    </main>
  );
}

const th = {
  padding: "14px",
  textAlign: "center",
};

const td = {
  padding: "14px",
  textAlign: "center",
};
