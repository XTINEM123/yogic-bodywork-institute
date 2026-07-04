import type { Metadata } from "next";
import { Yatra_One, Hind } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const yatra = Yatra_One({
  variable: "--font-yatra",
  subsets: ["latin"],
  weight: "400",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://yogicmassageinstitute.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Massage Training Hawaii | Yogic Bodywork Institute",
    template: "%s | Yogic Bodywork Institute Hawaii",
  },
  description:
    "Massage training in Hawaii. Yogic Bodywork Institute offers CE workshops for licensed massage therapists and a forthcoming certification program in a breath-led, participatory bodywork modality drawing on Thai massage, assisted stretching, and breathwork.",
  keywords: [
    "massage training Hawaii",
    "massage CE Hawaii",
    "massage continuing education Hawaii",
    "NCBTMB CE Hawaii",
    "Thai massage training Hawaii",
    "bodywork training Hawaii",
    "yogic bodywork",
    "yogic massage",
    "massage therapy CE Hawaii",
    "bodywork certification Hawaii",
    "licensed massage therapist CE",
    "breath-led massage",
    "clothed massage training",
    "assisted stretching training",
    "yoga bodywork",
    "massage institute Hawaii",
  ],
  authors: [{ name: "Christine Marie Mason", url: siteUrl }],
  creator: "Christine Marie Mason",
  publisher: "Yogic Bodywork Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    siteName: "Yogic Bodywork Institute",
    url: siteUrl,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Training Hawaii | Yogic Bodywork Institute",
    description: "CE workshops and certification in yogic bodywork — Thai massage, assisted stretching, breathwork. Based in Hawaiʻi.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Yogic Bodywork Institute",
      alternateName: ["Yogic Massage Institute", "YBI"],
      description:
        "Professional massage training in Hawaii. Yogic Bodywork Institute offers continuing education for licensed massage therapists and a forthcoming certification program in yogic bodywork — a breath-led, participatory, clothed modality drawing on Thai massage, assisted stretching, yoga postural adjustments, and breathwork.",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hawaiʻi",
        addressRegion: "HI",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "Hawaii" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Thai massage",
        "yogic bodywork",
        "yogic massage",
        "massage continuing education",
        "NCBTMB CE",
        "bodywork certification",
        "breathwork",
        "assisted stretching",
        "yoga postural adjustments",
      ],
      founder: {
        "@type": "Person",
        "@id": `${siteUrl}/#christine`,
        name: "Christine Marie Mason",
        jobTitle: "Founder & Lead Faculty",
        url: `${siteUrl}/about`,
        knowsAbout: ["yoga", "anatomy", "yogic bodywork", "somatic embodiment", "tantra"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Training Programs",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Yogic Bodywork Continuing Education for Massage Therapists",
              description:
                "Hands-on CE workshops in yogic bodywork for licensed massage therapists in Hawaii. Earn CE hours in Thai massage, assisted stretching, yoga postural adjustments, and breathwork.",
              url: `${siteUrl}/programs/continuing-education`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Yogic Bodywork Full Certification",
              description:
                "Comprehensive practitioner certification in yogic bodywork — in development. Join the waitlist.",
              url: `${siteUrl}/programs/certification`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Yogic Bodywork Institute",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${yatra.variable} ${hind.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
