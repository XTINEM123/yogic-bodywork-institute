import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Full Certification in Yogic Bodywork — Join the Waitlist",
  description: "A comprehensive practitioner training in yogic bodywork. In development — join the waitlist to be notified when enrollment opens.",
};

export default function CertificationPage() {
  return (
    <>
      <section style={{ background: "var(--color-clay)" }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5" style={{ color: "rgba(247,243,238,.7)" }}>Programs — Coming Soon</p>
          <h1 className="font-serif font-light mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--color-cream)", lineHeight: 1.08 }}>
            Full Certification
          </h1>
          <p className="font-light leading-relaxed mb-8" style={{ fontSize: "1.2rem", color: "rgba(247,243,238,.75)", maxWidth: "50ch" }}>
            A comprehensive practitioner training in yogic bodywork — the full method, its philosophy, its science, and its clinical application.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(247,243,238,.12)", border: "1px solid rgba(247,243,238,.2)" }}>
            <span className="w-2 h-2 rounded-full bg-amber-300" />
            <span className="font-sans font-light" style={{ fontSize: "0.8rem", color: "rgba(247,243,238,.8)", letterSpacing: "0.08em" }}>
              In development — accepting waitlist
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="prose-ybi mb-16">
            <h2>What the certification will cover</h2>
            <p>
              The full certification program is a practitioner training designed for people who want to offer yogic bodywork sessions professionally. It covers the complete method — breath, participation, and position — alongside the philosophical and scientific foundations, client communication, session design, and supervised practice hours.
            </p>
            <p>
              This is not a weekend workshop. It is a genuine practitioner training, designed to produce practitioners who understand what they are doing and why. The length, format, and prerequisites are still being finalized.
            </p>
            <h2>Who it is for</h2>
            <p>
              The certification is appropriate for body-trained practitioners looking to add a new modality, yoga teachers who want to work with touch, and others with a background in somatic or movement work. No prior massage license is required for the certification itself — though some modules may overlap with CE content for those who hold one.
            </p>
            <h2>Honest status</h2>
            <p>
              The certification program is in active development. We are not yet enrolling. We are accepting waitlist interest so we can notify you as soon as enrollment opens and include early subscribers in the program design where appropriate.
            </p>
          </div>

          <div className="card-linen p-8 rounded-lg text-center">
            <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Join the waitlist
            </h2>
            <p className="font-light mb-8 mx-auto" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)", maxWidth: "46ch" }}>
              Be notified when enrollment opens. Waitlist members get first access and may be invited to participate in the program design.
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture variant="cert" context="cert-page" buttonText="Join the Waitlist" stacked />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
