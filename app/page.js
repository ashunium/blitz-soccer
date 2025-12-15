export default function Home() {
  return (
    <main style={{ padding: "60px" }}>
      <h1>Blitz Soccer</h1>
      <p>Discord-powered football tournaments.</p>

      <a href="/tournaments">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          View Tournaments
        </button>
      </a>
    </main>
  );
}
