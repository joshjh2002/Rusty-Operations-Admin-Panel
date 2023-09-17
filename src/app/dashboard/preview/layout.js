import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  let title = "Rusty Operations | Article Preview";
  let description = "Preview Your Article Here";
  let imageUrl =
    "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg";
  let imageW = 800;
  let imageH = 600;

  return {
    title, // Text shown in the tab
    description, // Meta description for SEO
    siteName: "Rusty Operations", // Site name for SEO
    url: "https://www.rustyoperations.net", // Site URL
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
        url: imageUrl,
        width: imageW,
        height: imageH,
      },
    ],
    social: {
      twitter: "https://twitter.com/rustyoperations",
      discord: "https://discord.gg/2YH2e2Y",
      facebook: "https://www.facebook.com/Rusty-Operations",
    },
    openGraph: {
      title, // OG title
      description, // OG Description
      siteName: "Rusty Operations", // OG Site name
      url: "https://www.rustyoperations.net", // OG URL
      images: [
        {
          url: imageUrl, // Image for sites to use
          width: imageW,
          height: imageH,
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
    viewport: "width=device-width, height=device-height, initial-scale=1.0", // Viewport data
  };
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
