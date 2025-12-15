export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "100px 60px",
      background: "radial-gradient(circle at top, #1a1a1a, #0b0b0b)"
    }}>
      <h1 style={{
        fontSize: "56px",
        fontWeight: "700",
        marginBottom: "20px"
      }}>
        Blitz Soccer
      </h1>

      <p style={{
        maxWidth: "520px",
        fontSize: "18px",
        lineHeight: "1.6",
        opacity: 0.85
      }}>
        Competitive football tournaments powered by Discord automation.
        Groups, knockouts, and real-time management — all in one place.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a href="/tournaments">
          <button style={{
            padding: "14px 30px",
            fontSize: "16px",
            background: "#22c55e",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "16px"
          }}>
            View Tournaments
          </button>
        </a>

        <a href="https://discord.gg/YOUR_INVITE" target="_blank">
          <button style={{
            padding: "14px 30px",
            fontSize: "16px",
            background: "transparent",
            border: "1px solid #333",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Join Discord
          </button>
        </a>
      </div>
    </main>
  );
}
