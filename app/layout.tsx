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

export const metadata: Metadata = {
  metadataBase: new URL("https://yogicmassageinstitute.com"),
  title: {
    default: "Yogic Bodywork Institute — Training in a New Co-Created Modality",
    template: "%s | Yogic Bodywork Institute",
  },
  description:
    "Professional training in yogic bodywork — a breath-led, participatory, clothed bodywork modality. Continuing education for licensed massage therapists and a forthcoming certification program.",
  keywords: [
    "yogic bodywork",
    "yogic massage",
    "massage continuing education",
    "NCBTMB CE",
    "bodywork certification",
    "Thai yoga bodywork",
    "breath-led massage",
    "Hawaii massage CE",
  ],
  openGraph: {
    siteName: "Yogic Bodywork Institute",
    url: "https://yogicmassageinstitute.com",
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
    <html lang="en" className={`${yatra.variable} ${hind.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
