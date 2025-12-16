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
    updated[index].pts =
      updated[index].w * 3 + updated[index].d;
    updated[index].gd =
      updated[index].gd;
    setTeams(updated);
  }

  return (
    <main style={bg}>
      {/* Background effect */}
      <div style={overlay} />

      <div style={container}>
        <h1 style={title}>GROUP A — STANDINGS</h1>

        <div style={card}>
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
                    background:
                      i < 2 ? "rgba(34,197,94,0.12)" : "transparent",
                    borderTop: "1px solid #1f2937",
                  }}
                >
                  <td style={cell}>{i + 1}</td>

                  <td style={{ ...cell, textAlign: "left", display: "flex", gap: "12px", alignItems: "center" }}>
                    <img src={t.logo} style={logo} />
                    <strong>{t.team}</strong>
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

                  <td style={{ ...cell, color: t.gd >= 0 ? "#22c55e" : "#ef4444" }}>
                    {t.gd > 0 ? `+${t.gd}` : t.gd}
                  </td>

                  <td style={{ ...cell, fontWeight: "800", color: "#38bdf8" }}>
                    {t.pts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={legend}>🟢 Top 2 qualify · Admin editable</p>
      </div>
    </main>
  );
}

/* ================= STYLES ================= */

const bg = {
  minHeight: "100vh",
  background:
    "radial-gradient(1000px 400px at top, #020617, #000)",
  position: "relative",
  color: "white",
  fontFamily: "Inter, Arial",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(120deg, rgba(56,189,248,0.08), rgba(34,197,94,0.05))",
  pointerEvents: "none",
};

const container = {
  position: "relative",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 20px",
};

const title = {
  textAlign: "center",
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "30px",
  letterSpacing: "1px",
};

const card = {
  background: "rgba(2,6,23,0.9)",
  border: "1px solid #1f2937",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 0 40px rgba(56,189,248,0.15)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const headRow = {
  background: "#020617",
  fontSize: "12px",
  opacity: 0.7,
};

const cell = {
  padding: "14px",
  textAlign: "center",
};

const logo = {
  width: "34px",
  height: "34px",
  objectFit: "contain",
};

const input = {
  width: "42px",
  background: "#020617",
  border: "1px solid #1f2937",
  color: "white",
  textAlign: "center",
  borderRadius: "6px",
};

const legend = {
  marginTop: "14px",
  opacity: 0.6,
  fontSize: "13px",
};
