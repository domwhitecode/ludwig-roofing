import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ludwig's Roofing & Exteriors | Philadelphia Roofing Contractor",
    template: "%s | Ludwig's Roofing & Exteriors",
  },
  description:
    "Philadelphia's trusted roofing contractor. Roofing, siding, exterior painting, custom metal, and gutters. Licensed, insured, and locally owned. Free estimates — call 267-328-0819.",
  keywords: [
    "roofing contractor Philadelphia",
    "Philadelphia roofer",
    "roof repair Philadelphia",
    "siding contractor Philadelphia",
    "gutter installation Philadelphia",
    "exterior painting Philadelphia",
    "custom metal roofing",
    "Ludwig's Roofing",
  ],
  authors: [{ name: "Ludwig's Roofing & Exteriors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ludwig's Roofing & Exteriors",
    title: "Ludwig's Roofing & Exteriors | Philadelphia Roofing Contractor",
    description:
      "Roofing, siding, exterior painting, custom metal, and gutters in Philadelphia. Free estimates — call 267-328-0819.",
    images: [{ url: "/logo.svg", width: 600, height: 600, alt: "Ludwig's Roofing & Exteriors logo", type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary",
    title: "Ludwig's Roofing & Exteriors",
    description: "Philadelphia's trusted roofing & exteriors contractor.",
    images: ["/logo.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ludwig's Roofing & Exteriors",
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "+1-267-328-0819",
  email: "Eludwig1126@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "REPLACE WITH STREET ADDRESS",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    postalCode: "REPLACE",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Philadelphia" },
    { "@type": "AdministrativeArea", name: "Bucks County" },
    { "@type": "AdministrativeArea", name: "Montgomery County" },
    { "@type": "AdministrativeArea", name: "Delaware County" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
