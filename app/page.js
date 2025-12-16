export default function Home() {
  const teams = [
    { team: "Blitz FC", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { team: "Ice United", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { team: "Snow City", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { team: "Frost Wolves", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Points Table
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.7,
            marginBottom: "40px",
          }}
        >
          Tournament Standings
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #1f2937" }}>
              {["#", "Team", "P", "W", "D", "L", "GD", "Pts"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "14px",
                    textAlign: "center",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {teams.map((t, i) => (
              <tr
                key={t.team}
                style={{
                  borderBottom: "1px solid #1f2937",
                  textAlign: "center",
                }}
              >
                <td style={{ padding: "14px" }}>{i + 1}</td>
                <td style={{ padding: "14px", fontWeight: "600" }}>
                  {t.team}
                </td>
                <td style={{ padding: "14px" }}>{t.p}</td>
                <td style={{ padding: "14px" }}>{t.w}</td>
                <td style={{ padding: "14px" }}>{t.d}</td>
                <td style={{ padding: "14px" }}>{t.l}</td>
                <td
                  style={{
                    padding: "14px",
                    color: t.gd >= 0 ? "#22c55e" : "#ef4444",
                  }}
                >
                  {t.gd > 0 ? `+${t.gd}` : t.gd}
                </td>
                <td
                  style={{
                    padding: "14px",
                    fontWeight: "700",
                    color: "#38bdf8",
                  }}
                >
                  {t.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
