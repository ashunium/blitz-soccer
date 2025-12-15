export default function Home() {
  return (
    <main style={{
      padding: "80px",
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0b0b0b, #121212)"
    }}>
      <h1 style={{ fontSize: "48px" }}>Blitz Soccer</h1>
      <p style={{ maxWidth: "500px", opacity: 0.85 }}>
        Competitive Discord-powered football tournaments.
      </p>

      <a href="/tournaments">
        <button style={{
          padding: "14px 28px",
          marginTop: "30px",
          fontSize: "16px",
          background: "#1db954",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          View Tournaments
        </button>
      </a>
    </main>
  );
}
