import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Yogic Bodywork Institute — Training in a New Co-Created Modality",
    template: "%s | Yogic Bodywork Institute",
  },
  description:
    "Professional training in yogic bodywork — a breath-led, participatory, clothed bodywork modality. Continuing education for licensed massage therapists and a forthcoming certification program.",
  keywords: [
    "yogic bodywork",
    "massage continuing education",
    "NCBTMB CE",
    "bodywork certification",
    "Thai yoga bodywork",
    "breath-led massage",
    "Hawaii massage CE",
  ],
  openGraph: {
    siteName: "Yogic Bodywork Institute",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
