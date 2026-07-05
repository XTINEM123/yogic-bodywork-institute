import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "About | Christine Marie Mason & Yogic Bodywork Institute Hawaii",
  description: "Christine Marie Mason — yoga and anatomy teacher for 30 years — founded the Yogic Bodywork Institute to train practitioners in a new co-created bodywork modality based in Hawaiʻi.",
  alternates: { canonical: "https://yogicmassageinstitute.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "var(--color-linen)" }} className="hero-banner px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">About</p>
          <h1 className="font-serif font-light mb-5" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.08 }}>
            Our story & mission
          </h1>
          <span className="rule" />
          <p className="font-light leading-relaxed" style={{ fontSize: "1.2rem", color: "var(--color-bark-soft)", maxWidth: "52ch" }}>
            A new institute, building a new modality, with thirty years of underlying practice.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="prose-ybi mb-14">
            <h2>Mission & Philosophy</h2>
            <p>
              The Yogic Bodywork Institute exists to train practitioners in a modality that takes the body's intelligence seriously. Most bodywork approaches the body as an object to be worked on. Yogic bodywork approaches it as a participant to be worked with.
            </p>
            <p>
              This distinction is not semantic. It changes everything: the pace, the pressure, the vocabulary, the clinical outcome. We are building the curriculum, the training infrastructure, and the community of practice to transmit this approach in a way that is rigorous, reproducible, and genuinely useful to both practitioners and their clients.
            </p>
            <blockquote>
              The body already knows how to heal. The practitioner's job is to create conditions that allow it to.
            </blockquote>
            <p>
              We are honest about where we are: a new institute with a deep underlying practice, building the formal structures — accreditation, curriculum, certification — that make training transmissible at scale. That process takes time. We would rather tell you where we are accurately than imply credentials we haven't yet obtained.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14 items-start">
            <div className="rounded-lg overflow-hidden aspect-[3/4]"
              style={{ background: "linear-gradient(145deg, rgba(107,143,113,.35), rgba(196,154,60,.25), var(--color-cream))", border: "1px solid rgba(196,154,60,.2)" }}>
              <div className="w-full h-full flex items-end p-5">
                <p className="font-sans" style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,26,16,.3)" }}>
                  📷 Christine portrait
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Founder</p>
              <h2 className="font-serif font-light mb-2" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>Christine Marie Mason</h2>
              <span className="rule" />
              <div className="prose-ybi">
                <p>
                  Christine has taught yoga and anatomy for thirty years. The Yogic Bodywork Institute grows directly from her teaching practice — from the accumulated observation of what happens when breath is given priority, when clients participate rather than receive, when position is treated as a clinical variable rather than a comfort preference.
                </p>
                <p>
                  She is also founder of the Living Tantra Institute, creator of Rosebud Woman, host of The Rose Woman Podcast, and author of nine books on embodiment, consciousness, and feminine practice. Her background includes an MBA from Kellogg and doctoral coursework in Philosophy, Cosmology, and Consciousness from CIIS.
                </p>
                <p>
                  The YBI is not her first institution. It is, however, the first one dedicated specifically to the transmission of bodywork skills — the most hands-on, least transmissible, most practice-dependent form of knowledge she works with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <p className="eyebrow mb-4">Faculty</p>
          <h2 className="font-serif font-light mb-5" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            Guest faculty & instructors
          </h2>
          <div className="card-linen p-8 rounded-lg">
            <p className="font-light leading-relaxed" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)" }}>
              Faculty for the CE program and certification are being confirmed. Initial workshops will be taught by Christine directly. Additional faculty — specialists in Thai bodywork, breath physiology, and yoga anatomy — will be announced as the program develops.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider rule-center mb-10" />
          <h2 className="font-serif font-light mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Stay close as we build
          </h2>
          <p className="font-light mb-10 mx-auto" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)", maxWidth: "44ch" }}>
            Join the list — receiving sessions, CE cohort updates, or certification. We&apos;ll reach out when it&apos;s relevant to you.
          </p>
          <div className="max-w-md mx-auto text-left">
            <EmailCapture context="about" stacked />
          </div>
        </div>
      </section>
    </>
  );
}
