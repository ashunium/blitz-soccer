"use client";
import { useState } from "react";

export default function Home() {
  const [teams, setTeams] = useState([
    { team: "Blitz FC", logo: "/logos/blitz.png", p: 6, w: 4, d: 1, l: 1, gd: 7, pts: 13 },
    { team: "Ice United", logo: "/logos/ice.png", p: 6, w: 4, d: 0, l: 2, gd: 5, pts: 12 },
    { team: "Snow City", logo: "/logos/snow.png", p: 6, w: 3, d: 2, l: 1, gd: 3, pts: 11 },
    { team: "Frost Wolves", logo: "/logos/frost.png", p: 6, w: 2, d: 1, l: 3, gd: -1, pts: 7 },
  ]);

  const sorted = [...teams].sort(
    (a, b) => b.pts - a.pts || b.gd - a.gd || b.w - a.w
  );

  function update(index, field, value) {
    const copy = [...teams];
    copy[index][field] = Number(value);
    copy[index].pts = copy[index].w * 3 + copy[index].d;
    setTeams(copy);
  }

  return (
    <main style={page}>
      {/* Snow background */}
      <div style={snowBg} />

      <section style={wrapper}>
        <header style={header}>
          <h1 style={title}>Group A</h1>
          <span style={subtitle}>Standings</span>
        </header>

        <div style={card}>
          <div style={qualBar} />

          <table style={table}>
            <thead>
              <tr style={thead}>
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
                <tr key={t.team} style={row}>
                  <td>{i + 1}</td>

                  <td style={teamCell}>
                    <img src={t.logo} style={logo} />
                    <strong>{t.team}</strong>
                  </td>

                  <td>{t.p}</td>
                  <td><input value={t.w} onChange={e => update(i, "w", e.target.value)} style={input} /></td>
                  <td><input value={t.d} onChange={e => update(i, "d", e.target.value)} style={input} /></td>
                  <td><input value={t.l} onChange={e => update(i, "l", e.target.value)} style={input} /></td>
                  <td>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                  <td style={{ fontWeight: 700 }}>{t.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={note}>Top 2 teams qualify</p>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #e8f2ff, #cfe4ff)",
  position: "relative",
  fontFamily: "Inter, Arial, sans-serif",
  color: "#0f172a",
};

const snowBg = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "radial-gradient(#ffffff 1px, transparent 1px)",
  backgroundSize: "26px 26px",
  opacity: 0.35,
  pointerEvents: "none",
};

const wrapper = {
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
  fontSize: "36px",
  fontWeight: 800,
};

const subtitle = {
  fontSize: "14px",
  color: "#475569",
  textTransform: "uppercase",
};

const card = {
  position: "relative",
  background: "#ffffff",
  border: "1px solid #cbd5e1",
};

const qualBar = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "6px",
  background: "#2563eb",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const thead = {
  fontSize: "12px",
  textTransform: "uppercase",
  background: "#f1f5f9",
  color: "#475569",
};

const row = {
  borderBottom: "1px solid #e2e8f0",
};

const teamCell = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  paddingLeft: "14px",
};

const logo = {
  width: "26px",
  height: "26px",
  objectFit: "contain",
};

const input = {
  width: "36px",
  border: "1px solid #cbd5e1",
  borderRadius: "4px",
  textAlign: "center",
  background: "#ffffff",
};

const note = {
  marginTop: "10px",
  fontSize: "13px",
  color: "#475569",
};
