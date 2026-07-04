import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yogic Bodywork Institute — Training in a New Co-Created Modality",
  description:
    "Breath-led, participatory, clothed bodywork. Continuing education for licensed massage therapists and a forthcoming full certification program.",
};

const pillars = [
  {
    word: "Breath",
    body: "Every session is organized around the client's breath. The practitioner follows; the breath leads. This shifts the work from technique-driven to intelligence-driven.",
  },
  {
    word: "Participation",
    body: "The client is never passive. Micro-instructions invite active engagement — not performance, but presence. The bodywork becomes co-created.",
  },
  {
    word: "Position",
    body: "Therapeutic pressure, assisted stretching, and yoga-derived postures are applied in precise, purposeful relationship to one another. Position is the delivery system.",
  },
];

const journalPosts = [
  {
    title: "Breath, Participation & Position — The Science",
    category: "Opinion",
    href: "/journal",
    summary: "The physiological and neurological evidence behind the three pillars of yogic bodywork.",
  },
  {
    title: "A Yogic & Tantric View of Healing & Self-Agency",
    category: "Opinion",
    href: "/journal",
    summary: "What the classical traditions say about the body as intelligent participant in its own healing.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "var(--color-forest)" }} className="px-6 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6" style={{ color: "rgba(196,154,60,.8)", letterSpacing: "0.28em" }}>
            Yogic Bodywork Institute
          </p>
          <h1 className="font-serif font-light mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", color: "var(--color-cream)", lineHeight: 1.06 }}>
            Bodywork done<br /><em style={{ color: "var(--color-amber)" }}>with</em> the body,<br />not to it.
          </h1>
          <p className="font-light leading-relaxed mb-12 mx-auto" style={{ fontSize: "1.22rem", color: "rgba(247,243,238,.75)", maxWidth: "54ch" }}>
            A new modality: breath-led, participatory, clothed bodywork for licensed practitioners and the practitioners-to-be.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/programs/continuing-education" className="btn btn-forest" style={{ background: "white", color: "var(--color-forest)", boxShadow: "none" }}>
              Get CE Cohort Updates
            </Link>
            <Link href="/programs/certification" className="btn btn-clay">
              Join Certification Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── What it is ── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <p className="eyebrow mb-4">The Modality</p>
          <h2 className="font-serif font-light mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-bark)" }}>
            What is yogic bodywork?
          </h2>
          <div className="prose-ybi mb-8">
            <p>
              Yogic bodywork is a co-created bodywork modality — primarily clothed — drawing on four threads: Thai massage, assisted stretching, yoga postural adjustments, and breathwork. The client participates. The session is organized by breath. The result is deeper than most massage and more accessible than most yoga.
            </p>
            <p>
              It is not massage in the traditional sense. It is not yoga in the traditional sense. It is something new — built from what works in both — calibrated for the nervous system, the connective tissue, and the human experience of being held while remaining awake.
            </p>
          </div>
          <Link href="/the-modality" className="btn btn-ghost-forest">
            Learn more about the modality →
          </Link>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-14" />
          <p className="eyebrow mb-4 text-center">The Method</p>
          <h2 className="font-serif font-light text-center mb-14" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Breath · Participation · Position
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.word} className="pillar">
                <h3 className="font-serif font-light text-2xl mb-3" style={{ color: "var(--color-forest)" }}>
                  {p.word}
                </h3>
                <p className="font-light leading-relaxed" style={{ fontSize: "1.05rem", color: "var(--color-bark-soft)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/the-method" className="btn btn-ghost">
              Read the method in depth →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Two paths ── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-14" />
          <p className="eyebrow mb-4 text-center">Programs</p>
          <h2 className="font-serif font-light text-center mb-14" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Two ways to train
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CE */}
            <div className="path-card-ce">
              <p className="eyebrow mb-3" style={{ color: "rgba(196,150,64,.85)", fontSize: "0.7rem" }}>
                Live Now — Enrolling
              </p>
              <h3 className="font-serif text-3xl mb-4" style={{ color: "var(--color-cream)" }}>
                Continuing Education
              </h3>
              <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(251,240,228,.78)" }}>
                Hands-on CE workshops for currently licensed massage therapists. Earn CE hours in a new modality while expanding your clinical range.
              </p>
              <p className="font-sans mb-8" style={{ fontSize: "0.8rem", color: "rgba(251,240,228,.5)", letterSpacing: "0.06em" }}>
                For: licensed massage therapists (LMTs)
              </p>
              <Link href="/programs/continuing-education" className="btn" style={{ background: "rgba(251,240,228,.15)", color: "var(--color-cream)", border: "1px solid rgba(251,240,228,.3)" }}>
                Learn more →
              </Link>
            </div>

            {/* Certification */}
            <div className="path-card-cert">
              <p className="eyebrow mb-3" style={{ color: "rgba(251,240,228,.6)", fontSize: "0.7rem" }}>
                Coming Soon — Join Waitlist
              </p>
              <h3 className="font-serif text-3xl mb-4" style={{ color: "var(--color-cream)" }}>
                Full Certification
              </h3>
              <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(251,240,228,.78)" }}>
                A comprehensive practitioner training in yogic bodywork — the full method, its philosophy, its science, and its clinical application.
              </p>
              <p className="font-sans mb-8" style={{ fontSize: "0.8rem", color: "rgba(251,240,228,.5)", letterSpacing: "0.06em" }}>
                For: aspiring practitioners & serious students
              </p>
              <Link href="/programs/certification" className="btn" style={{ background: "rgba(251,240,228,.15)", color: "var(--color-cream)", border: "1px solid rgba(251,240,228,.3)" }}>
                Learn more & join waitlist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free mini-class ── */}
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider rule-center mb-10" />
          <p className="eyebrow mb-4">Free Resource</p>
          <h2 className="font-serif font-light mb-5" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            Try a 15-minute taste
          </h2>
          <p className="font-light leading-relaxed mb-8 mx-auto" style={{ fontSize: "1.15rem", color: "var(--color-bark-soft)", maxWidth: "48ch" }}>
            The free mini-class introduces the first pillar — breath — through a short guided practice you can experience right now. No equipment, no experience needed.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/journal" className="btn btn-forest">
              Access the Free Mini-Class
            </Link>
            <Link href="/journal" className="btn btn-ghost">
              See a session demo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14 items-center">
            {/* Photo placeholder */}
            <div className="rounded-lg overflow-hidden aspect-[3/4]"
              style={{ background: "linear-gradient(145deg, rgba(87,104,160,.2), rgba(196,150,64,.2), var(--color-linen))", border: "1px solid rgba(196,150,64,.2)" }}>
              <div className="w-full h-full flex items-end p-5">
                <p className="font-sans" style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,26,16,.3)" }}>
                  📷 Founder portrait
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Founder & Faculty</p>
              <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
                Christine Marie Mason
              </h2>
              <span className="rule" />
              <div className="prose-ybi">
                <p>
                  Christine has taught yoga and anatomy for thirty years. The Yogic Bodywork Institute is the practitioner-training branch of her broader work in somatic embodiment — a rigorous attempt to systematize what she has witnessed the body do, again and again, when it is worked with rather than on.
                </p>
                <p>
                  She is also founder of the Living Tantra Institute and Rosebud Woman, and author of nine books on embodiment, consciousness, and practice.
                </p>
              </div>
              <Link href="/about" className="btn btn-ghost-forest mt-6 inline-flex">
                Full bio & faculty →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journal ── */}
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3">From the Journal</p>
              <h2 className="font-serif font-light" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>Recent writing</h2>
            </div>
            <Link href="/journal" className="btn btn-ghost" style={{ fontSize: "0.75rem" }}>
              All posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {journalPosts.map((post) => (
              <Link key={post.title} href={post.href} className="card group block">
                <p className="eyebrow mb-3" style={{ fontSize: "0.68rem", color: "var(--color-forest)" }}>
                  {post.category}
                </p>
                <h3 className="font-serif font-light text-2xl mb-3 group-hover:text-forest transition-colors" style={{ color: "var(--color-bark)" }}>
                  {post.title}
                </h3>
                <p className="font-light leading-relaxed" style={{ fontSize: "1rem", color: "var(--color-bark-soft)" }}>
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Honest status ── */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-light" style={{ fontSize: "0.92rem", color: "var(--color-bark-muted)" }}>
            A new institute building a new modality.{" "}
            <Link href="/accreditation" style={{ color: "var(--color-forest)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Here&apos;s where we are with accreditation and licensing status →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
