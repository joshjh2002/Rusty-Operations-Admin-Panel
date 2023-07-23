// CSS //
import "./globals.css";
import "./fonts.css";

export const metadata = {
  title: "Rusty Operations | Admin Panel", // Text shown in the tab
  description: "For Rusty Operations Staff", // Meta description for SEO
  siteName: "Rusty Operations Admin Panel", // Site name for SEO
  url: "https://admin.rustyoperations.net", // Site URL
  authors: [
    {
      name: "Josh Helman",
      twitter: "@joshjh2002_",
      github: "https://github.com/joshjh2002",
    },
  ],
  creator: "Josh Helman",
  images: [
    {
      url: "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg",
      width: 800,
      height: 600,
    },
  ],
  social: {
    twitter: "https://twitter.com/rustyoperations",
    discord: "https://discord.gg/2YH2e2Y",
    facebook: "https://www.facebook.com/Rusty-Operations",
  },
  openGraph: {
    title: "Rusty Operations | Admin Panel", // OG title
    description: "For Rusty Operations Staff", // OG Description
    siteName: "Rusty Operations Admin Panel", // OG Site name
    url: "https://admin.rustyoperations.net", // OG URL
    images: [
      {
        url: "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg", // Image for sites to use
        width: 800,
        height: 600,
      },
    ],
    locale: "en-GB", // Location data
    type: "website", // Type of service
    icons: {
      // Icon data
      rel: "icon",
      type: "image/ico",
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
