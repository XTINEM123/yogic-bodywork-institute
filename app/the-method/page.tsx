import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Method Behind Yogic Bodywork: Breath, Participation, Position",
  description: "The science and philosophy behind the three pillars of yogic bodywork — breath, participation, and position.",
};

const pillars = [
  {
    word: "Breath",
    color: "var(--color-forest)",
    science: "Controlled, conscious breathing activates the parasympathetic nervous system and regulates cortisol. Research in respiratory psychophysiology confirms that breath rate directly modulates arousal, fear response, and pain threshold. When a session is organized by the client's breath rather than the clock, the nervous system has time to integrate.",
    practice: "The practitioner begins by establishing contact with the client's breath — listening with the hands, not just the eyes. All transitions, all pressure, all posture entries and exits are timed to exhale. The client is neither rushed nor held. The breath becomes the shared protocol.",
  },
  {
    word: "Participation",
    color: "var(--color-clay)",
    science: "Passive bodywork works on the body. Participatory bodywork works with it. Research in motor neuroscience shows that micro-movement and efferent intention — the neural signal sent even before movement begins — engage deeper layers of proprioception and accelerate neuromuscular re-education. The client who participates learns from the session.",
    practice: "Instructions are minimal and precise. 'Can you soften the back of this shoulder?' 'Let this hip settle.' 'Just notice the breath in that area.' These are not corrections — they are invitations to awareness. The practitioner does not push harder when the client resists; they invite more presence.",
  },
  {
    word: "Position",
    color: "var(--color-amber)",
    science: "Mechanical advantage matters. A muscle in a lengthened position receives pressure differently than one that is shortened. Thai-derived body positioning uses gravity, lever mechanics, and the client's own weight to deepen the work without requiring more force. Position determines the depth of access; technique determines what happens once access is gained.",
    practice: "Sessions move through several primary positions. The practitioner learns to read the body's geometry — where the shoulder needs to be to open the chest, where the hip needs to be to release the low back. This spatial intelligence is learned through supervised practice; it cannot be fully conveyed through text.",
  },
];

export default function TheMethodPage() {
  return (
    <>
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">The Method</p>
          <h1 className="font-serif font-light mb-6" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.08 }}>
            Breath · Participation · Position
          </h1>
          <span className="rule" />
          <p className="font-light leading-relaxed" style={{ fontSize: "1.18rem", color: "var(--color-bark-soft)", maxWidth: "52ch" }}>
            Three organizing principles that distinguish yogic bodywork from both conventional massage and conventional yoga. Each has a scientific basis and a practical expression.
          </p>
        </div>
      </section>

      {pillars.map((p, i) => (
        <section
          key={p.word}
          className="px-6 py-20"
          style={{ background: i % 2 === 1 ? "var(--color-linen)" : "var(--color-cream)" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="section-divider mb-14" />
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">
              <div className="md:sticky md:top-28">
                <span className="font-serif font-light block" style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: p.color, lineHeight: 1, opacity: 0.18 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif font-light" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: p.color, marginTop: "-0.5rem" }}>
                  {p.word}
                </h2>
              </div>
              <div>
                <div className="mb-8">
                  <p className="eyebrow mb-3" style={{ fontSize: "0.68rem", color: p.color }}>The science</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: "1.12rem", color: "var(--color-bark-soft)" }}>
                    {p.science}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-3" style={{ fontSize: "0.68rem", color: p.color }}>In practice</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: "1.12rem", color: "var(--color-bark-soft)" }}>
                    {p.practice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider rule-center mb-10" />
          <h2 className="font-serif font-light mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            Ready to learn the method?
          </h2>
          <p className="font-light leading-relaxed mb-10 mx-auto" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)", maxWidth: "46ch" }}>
            The method is taught hands-on in our CE workshops. Reading it is a start; practicing it is the education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col gap-2 text-left w-full max-w-sm">
              <p className="eyebrow" style={{ fontSize: "0.68rem", color: "var(--color-forest)" }}>CE cohort updates</p>
              <EmailCapture variant="ce" context="method-ce" />
            </div>
            <div className="flex flex-col gap-2 text-left w-full max-w-sm">
              <p className="eyebrow" style={{ fontSize: "0.68rem", color: "var(--color-clay)" }}>Certification waitlist</p>
              <EmailCapture variant="cert" context="method-cert" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
