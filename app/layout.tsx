import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ludwig's Roofing & Exteriors | Philadelphia Roofing Contractor",
    template: "%s | Ludwig's Roofing & Exteriors",
  },
  description:
    "Philadelphia's trusted roofing contractor. Roofing, siding, exterior painting, custom metal, and gutters. Licensed, insured, and locally owned. Free estimates — call 267-328-0819.",
  alternates: { canonical: "/" },
  authors: [{ name: "Ludwig's Roofing & Exteriors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ludwig's Roofing & Exteriors",
    title: "Ludwig's Roofing & Exteriors | Philadelphia Roofing Contractor",
    description:
      "Roofing, siding, exterior painting, custom metal, and gutters in Philadelphia. Free estimates — call 267-328-0819.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludwig's Roofing & Exteriors",
    description: "Philadelphia's trusted roofing & exteriors contractor.",
  },
  robots: { index: true, follow: true },
};

const SERVICES = [
  "Roofing",
  "Siding",
  "Exterior Painting",
  "Custom Metal",
  "Gutters",
];

// Service-area business: no storefront, so the address carries city/state only
// and `areaServed` defines where we actually work.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${SITE_URL}/#business`,
  name: "Ludwig's Roofing & Exteriors",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/ludwigs_logo.svg`,
  url: SITE_URL,
  telephone: "+1-267-328-0819",
  email: "Eludwig1126@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Philadelphia" },
    { "@type": "AdministrativeArea", name: "Bucks County" },
    { "@type": "AdministrativeArea", name: "Montgomery County" },
    { "@type": "AdministrativeArea", name: "Delaware County" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing & Exterior Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
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
  // TODO: add `sameAs: [...]` with the Google Business Profile URL once the
  // listing is claimed, plus any social profiles. That link is how Google ties
  // this site to the map listing.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bebas.variable}>
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
