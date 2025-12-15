export const metadata = {
  title: "Blitz Soccer",
  description: "Discord-powered football tournaments"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b0b0b", color: "white", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
