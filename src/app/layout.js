export const metadata = {
  title: "Rusty Operations | Admin Panel",
  description: "For Rusty Operations Staff",
  authors: [
    {
      name: "Josh Helman",
      twitter: "@joshjh2002_",
      github: "https://github.com/joshjh2002",
    },
  ],
  creator: "Josh Helman",
  image: "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg",
  social: {
    twitter: "https://twitter.com/rustyoperations",
    discord: "https://discord.gg/2YH2e2Y",
    facebook: "https://www.facebook.com/Rusty-Operations",
  },
  openGraph: {
    title: "Rusty Operations Admin Panel",
    description: "For Rusty Operations Staff",
    images: [
      {
        url: "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-GB",
    type: "website",
    icons: {
      icon: "https://rusty-operations-admin-panel.web.app/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
