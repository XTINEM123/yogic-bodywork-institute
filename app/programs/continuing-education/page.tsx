import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Yogic Bodywork Continuing Education for Massage Therapists",
  description: "Hands-on CE workshops in yogic bodywork for licensed massage therapists. Earn CE hours while expanding your clinical range.",
};

export default function ContinuingEducationPage() {
  return (
    <>
      <section style={{ background: "var(--color-forest)" }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5" style={{ color: "rgba(196,154,60,.8)" }}>Programs — Live Now</p>
          <h1 className="font-serif font-light mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--color-cream)", lineHeight: 1.08 }}>
            Continuing Education
          </h1>
          <p className="font-light leading-relaxed mb-8" style={{ fontSize: "1.2rem", color: "rgba(247,243,238,.75)", maxWidth: "50ch" }}>
            Hands-on CE workshops in yogic bodywork for currently licensed massage therapists.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(247,243,238,.1)", border: "1px solid rgba(247,243,238,.2)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="font-sans font-light" style={{ fontSize: "0.8rem", color: "rgba(247,243,238,.8)", letterSpacing: "0.08em" }}>
              For: licensed massage therapists (LMTs)
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="prose-ybi mb-16">
            <h2>What the CE offers</h2>
            <p>
              The yogic bodywork CE workshops teach licensed massage therapists a new modality — not as an adjunct to existing technique, but as a coherent method with its own logic, language, and clinical application. You leave knowing how to do something genuinely different.
            </p>
            <p>
              Workshops are hands-on and in-person. They are structured to meet CE requirements in most licensing jurisdictions and are designed to satisfy the NCBTMB standards for continuing education content and delivery.
            </p>
            <h2>Who this is for</h2>
            <p>
              This CE is designed exclusively for currently licensed massage therapists. You must hold an active license in your jurisdiction to enroll. If you are not yet licensed and are interested in a full training pathway, see the certification program.
            </p>
            <h2>Format & location</h2>
            <p>
              In-person workshops. Hawaiʻi location for initial cohorts; additional locations may be added as the program grows. Each workshop runs 6–12 hours depending on the module.
            </p>
          </div>

          {/* CE credits info */}
          <div className="card-linen mb-14 p-8 rounded-lg">
            <h3 className="font-serif font-light text-2xl mb-5" style={{ color: "var(--color-forest)" }}>
              CE credit & provider status
            </h3>
            <div className="flex flex-col gap-4">
              {[
                "These courses are designed to meet the NCBTMB standards for continuing education content and delivery.",
                "We are in the process of obtaining NCBTMB Approved Provider status. This page will be updated when it is granted.",
                "Hawaiʻi requires 12 CE hours per biennial renewal period. These workshops are designed to satisfy that requirement.",
                "Therapists are advised to confirm acceptance of CE credits with their specific licensing board before enrolling.",
                "We do not represent that completion of these courses satisfies licensure requirements in any particular jurisdiction.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span style={{ color: "var(--color-amber)", marginTop: "0.15em", flexShrink: 0 }}>—</span>
                  <p className="font-light leading-relaxed" style={{ fontSize: "1.05rem", color: "var(--color-bark-soft)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Be notified of the next cohort
            </h2>
            <p className="font-light mb-8" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)" }}>
              Cohort dates are finalized. Enter your email to be the first to know when enrollment opens.
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture variant="ce" context="ce-page" buttonText="Notify Me" stacked />
            </div>
            <p className="mt-4 font-light" style={{ fontSize: "0.85rem", color: "var(--color-bark-muted)" }}>
              For licensed massage therapists only. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
