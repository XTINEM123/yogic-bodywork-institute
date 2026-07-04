import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Massage Training Programs Hawaii | CE & Certification",
  description: "Two massage training programs in Hawaii: continuing education workshops for licensed massage therapists (LMTs) and a forthcoming full practitioner certification in yogic bodywork.",
  alternates: { canonical: "https://yogicmassageinstitute.com/programs" },
};

export default function ProgramsPage() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-4">Programs</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>Two ways to train</h1>
        <span className="rule" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link href="/programs/continuing-education" className="path-card-ce block group">
            <p className="eyebrow mb-3" style={{ color: "rgba(196,154,60,.8)", fontSize: "0.68rem" }}>Live Now</p>
            <h2 className="font-serif font-light text-3xl mb-4" style={{ color: "var(--color-cream)" }}>Continuing Education</h2>
            <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(247,243,238,.78)" }}>
              CE workshops for licensed massage therapists. Earn hours in a new modality.
            </p>
            <span className="font-sans" style={{ fontSize: "0.8rem", color: "rgba(196,154,60,.9)", letterSpacing: "0.1em" }}>
              Learn more →
            </span>
          </Link>
          <Link href="/programs/certification" className="path-card-cert block group">
            <p className="eyebrow mb-3" style={{ color: "rgba(247,243,238,.6)", fontSize: "0.68rem" }}>Coming Soon</p>
            <h2 className="font-serif font-light text-3xl mb-4" style={{ color: "var(--color-cream)" }}>Full Certification</h2>
            <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(247,243,238,.78)" }}>
              A comprehensive practitioner training in yogic bodywork. Join the waitlist.
            </p>
            <span className="font-sans" style={{ fontSize: "0.8rem", color: "rgba(247,243,238,.7)", letterSpacing: "0.1em" }}>
              Learn more →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
