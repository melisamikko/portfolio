import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/data/site";

const title = `${site.name} | Business systems, built and kept running`;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title, description: site.description, type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6SY0Y0MZVZ"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6SY0Y0MZVZ');
        `}
      </Script>
    </html>
  );
}
