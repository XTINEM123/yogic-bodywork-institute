import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Yogic Bodywork Method | Breath, Position, Pressure, Participation, Rest",
  description: "The science and practice of yogic bodywork's five elements: breath, position, pressure, participation, and rest. The method behind Hawaii's new massage training modality.",
  alternates: { canonical: "https://yogicmassageinstitute.com/the-method" },
};

const elements = [
  {
    word: "Breath",
    color: "var(--color-forest)",
    science: "Controlled, conscious breathing activates the parasympathetic nervous system and regulates cortisol. Research in respiratory psychophysiology confirms that breath rate directly modulates arousal, fear response, and pain threshold. When a session is organized by the client's breath rather than the clock, the nervous system has time to integrate.",
    practice: "The practitioner begins by establishing contact with the client's breath — listening with the hands. All transitions, all pressure, all posture entries and exits are timed to exhale. The breath becomes the shared protocol between practitioner and client.",
  },
  {
    word: "Position",
    color: "var(--color-amber)",
    science: "Mechanical advantage determines depth of access. A muscle in a lengthened position receives pressure differently than one that is shortened. Thai-derived positioning uses gravity, lever mechanics, and the client's own weight to open tissue without requiring more force. Position is set before pressure is applied.",
    practice: "Sessions move through several primary positions — supine, side-lying, seated, prone. The practitioner learns to read the body's geometry: where the shoulder needs to be to open the chest, where the hip needs to be to release the low back. This spatial intelligence is learned through supervised practice.",
  },
  {
    word: "Pressure",
    color: "var(--color-bark)",
    science: "Therapeutic pressure stimulates mechanoreceptors in the fascia and initiates the relaxation response. Research on myofascial release confirms that sustained, considered pressure — rather than speed or force — produces lasting change in tissue texture and mobility.",
    practice: "Pressure is applied through clothing with hands, forearms, and body weight. It is structural and specific, not soothing. Depth is calibrated to the client's breath: if the breath shortens, the pressure backs off. If the breath deepens, the pressure may follow.",
  },
  {
    word: "Participation",
    color: "var(--color-clay)",
    science: "Research in motor neuroscience shows that micro-movement and efferent intention — the neural signal sent even before movement begins — engage deeper layers of proprioception and accelerate neuromuscular re-education. The client who participates actively learns from the session in ways that passive reception does not permit.",
    practice: "Instructions are minimal and precise: 'Can you soften the back of this shoulder?' 'Let this hip settle.' 'Just notice the breath in that area.' These are not corrections — they are invitations to awareness. When the client resists, the practitioner does not push harder; they invite more presence.",
  },
  {
    word: "Rest",
    color: "var(--color-bark-muted)",
    science: "Integration is neurological, not just experiential. After sustained pressure or positional work, the nervous system requires stillness to consolidate the change. Moving immediately to the next technique forfeits much of what the preceding work produced.",
    practice: "Rest is built into the structure of the session, not improvised as filler. The practitioner holds stillness after pressure sequences and allows the client to arrive fully before moving on. This unhurriedness is not passivity — it is clinical precision applied to timing.",
  },
];

export default function TheMethodPage() {
  return (
    <>
      <section style={{ background: "var(--color-linen)" }} className="hero-banner px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">The Method</p>
          <h1 className="font-serif mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.08 }}>
            Breath · Position · Pressure<br />Participation · Rest
          </h1>
          <span className="rule" />
          <p className="font-light leading-relaxed" style={{ fontSize: "1.18rem", color: "var(--color-bark-soft)", maxWidth: "52ch" }}>
            Five elements that, in sequence, distinguish yogic bodywork from both conventional massage and conventional yoga. Each has a scientific basis and a practical expression.
          </p>
        </div>
      </section>

      {elements.map((el, i) => (
        <section
          key={el.word}
          className="px-6 py-20"
          style={{ background: i % 2 === 1 ? "var(--color-linen)" : "var(--color-cream)" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="section-divider mb-14" />
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">
              <div className="md:sticky md:top-28">
                <span className="font-serif block" style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: el.color, lineHeight: 1, opacity: 0.18 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: el.color, marginTop: "-0.5rem" }}>
                  {el.word}
                </h2>
              </div>
              <div>
                <div className="mb-8">
                  <p className="eyebrow mb-3" style={{ fontSize: "0.68rem", color: el.color }}>The science</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: "1.12rem", color: "var(--color-bark-soft)" }}>
                    {el.science}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-3" style={{ fontSize: "0.68rem", color: el.color }}>In practice</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: "1.12rem", color: "var(--color-bark-soft)" }}>
                    {el.practice}
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
          <h2 className="font-serif mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            Ready to learn the method?
          </h2>
          <p className="font-light leading-relaxed mb-10 mx-auto" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)", maxWidth: "46ch" }}>
            The method is taught hands-on in our CE workshops. Reading it is a start; practicing it is the education.
          </p>
          <div className="max-w-md mx-auto text-left">
            <EmailCapture context="method" />
          </div>
        </div>
      </section>
    </>
  );
}
