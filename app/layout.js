export const metadata = {
  title: "Blitz Soccer",
  description: "Discord-powered football tournaments"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b0b0b", color: "white", fontFamily: "Arial" }}>
  <header style={{
    padding: "20px 40px",
    borderBottom: "1px solid #222"
  }}>
    <a href="/" style={{ marginRight: "20px" }}>Home</a>
    <a href="/tournaments">Tournaments</a>
  </header>

  {children}
</body>
    </html>
  );
}
