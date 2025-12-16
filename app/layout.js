export const metadata = {
  title: "Blitz Winter Cup",
  description: "Professional tournament standings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
