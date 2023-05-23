export const metadata = {
  title: "Rusty Operations | Admin Panel",
  description: "Never Game Alone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
