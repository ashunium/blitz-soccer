"use client";

import { useState } from "react";

export default function Home() {
  const [teams, setTeams] = useState([
    { team: "Blitz FC", logo: "/logos/blitz.png", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { team: "Ice United", logo: "/logos/ice.png", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { team: "Snow City", logo: "/logos/snow.png", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { team: "Frost Wolves", logo: "/logos/frost.png", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
    { team: "Glacier Esports", logo: "/logos/glacier.png", p: 6, w: 1, d: 1, l: 4, gd: -6, pts: 4 },
  ]);

  const sorted = [...teams].sort(
    (a, b) => b.pts - a.pts || b.gd - a.gd || b.w - a.w
  );

  function updateTeam(index, field, value) {
    const updated = [...teams];
    updated[index][field] = Number(value);
    updated[index].pts = updated[index].w * 3 + updated[index].d;
    setTeams(updated);
  }

  return (
    <main style={bg}>
      {/* Static background graphic */}
      <div style={bgGraphic} />

      <div style={container}>
        <header style={header}>
          <h1 style={title}>GROUP A</h1>
          <span style={subtitle}>Standings</span>
        </header>

        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr style={headRow}>
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
              {sorted.map((t, i) => (
                <tr
                  key={t.team}
                  style={{
                    background: i < 2 ? "#0f172a" : "transparent",
                  }}
                >
                  <td style={cell}>{i + 1}</td>

                  <td style={{ ...cell, textAlign: "left", display: "flex", alignItems: "center", gap: "12px" }}>
                    <img src={t.logo} style={logo} />
                    <span style={{ fontWeight: 600 }}>{t.team}</span>
                  </td>

                  <td style={cell}>{t.p}</td>

                  <td style={cell}>
                    <input type="number" value={t.w} onChange={e => updateTeam(i, "w", e.target.value)} style={input} />
                  </td>

                  <td style={cell}>
                    <input type="number" value={t.d} onChange={e => updateTeam(i, "d", e.target.value)} style={input} />
                  </td>

                  <td style={cell}>
                    <input type="number" value={t.l} onChange={e => updateTeam(i, "l", e.target.value)} style={input} />
                  </td>

                  <td style={cell}>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>

                  <td style={{ ...cell, fontWeight: 700 }}>{t.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer style={legend}>
          Top 2 teams qualify
        </footer>
      </div>
    </main>
  );
}

/* ===== STYLES ===== */

const bg = {
  minHeight: "100vh",
  background: "#020617",
  position: "relative",
  color: "#e5e7eb",
  fontFamily: "Inter, Arial, sans-serif",
};

const bgGraphic = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
  backgroundSize: "80px 80px",
  opacity: 0.25,
  pointerEvents: "none",
};

const container = {
  position: "relative",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 20px",
};

const header = {
  display: "flex",
  alignItems: "baseline",
  gap: "12px",
  marginBottom: "24px",
};

const title = {
  fontSize: "34px",
  fontWeight: 800,
};

const subtitle = {
  fontSize: "14px",
  opacity: 0.6,
  textTransform: "uppercase",
};

const tableWrap = {
  border: "1px solid #1f2937",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const headRow = {
  fontSize: "12px",
  textTransform: "uppercase",
  color: "#9ca3af",
  borderBottom: "1px solid #1f2937",
};

const cell = {
  padding: "14px",
  textAlign: "center",
  borderBottom: "1px solid #1f2937",
};

const logo = {
  width: "28px",
  height: "28px",
  objectFit: "contain",
};

const input = {
  width: "40px",
  background: "transparent",
  border: "1px solid #374151",
  color: "#e5e7eb",
  textAlign: "center",
  borderRadius: "4px",
};

const legend = {
  marginTop: "12px",
  fontSize: "13px",
  color: "#9ca3af",
};
