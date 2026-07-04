import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "What Is Yogic Bodywork? A Clothed, Co-Created Bodywork Modality",
  description: "Yogic bodywork combines therapeutic pressure, Thai-based assisted stretching, yoga postures, and breath into a clothed, participatory modality.",
};

const threads = [
  { title: "Thai massage", body: "The structural foundation: Thai-style pressure applied through clothing with hands, forearms, and body weight. Systematic, specific, and far deeper than it looks." },
  { title: "Assisted stretching", body: "Passive and active-assisted stretches that move the client through range-of-motion while the practitioner holds the geometry. Neither physiotherapy nor yoga — a third thing." },
  { title: "Yoga postural adjustments", body: "Supported asana woven into the session. The body meets familiar forms while the practitioner refines alignment, depth, and breath engagement in real time." },
  { title: "Breathwork", body: "The organizing thread. The client's breath determines pace, depth, and direction. All transitions happen on exhale. The practitioner listens with their hands." },
];

export default function TheModalityPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "linear-gradient(160deg, var(--color-forest), #142b22)" }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5" style={{ color: "rgba(196,154,60,.8)" }}>The Modality</p>
          <h1 className="font-serif font-light mb-6" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)", color: "var(--color-cream)", lineHeight: 1.08 }}>
            What is yogic bodywork?
          </h1>
          <p className="font-light leading-relaxed" style={{ fontSize: "1.2rem", color: "rgba(247,243,238,.75)", maxWidth: "52ch" }}>
            A co-created bodywork modality — primarily clothed, to allow for the full range of Thai massage, assisted stretching, yoga postural adjustments, and breathwork.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="prose-ybi mb-12">
            <h2>A modality, not a technique</h2>
            <p>
              Yogic bodywork is not a technique you apply to a body. It is a modality — a way of relating to the body that produces consistent results across practitioners, clients, and contexts. The difference matters: techniques can be mechanically reproduced; modalities require the practitioner to be present and responsive.
            </p>
            <h2>Primarily clothed</h2>
            <p>
              Sessions are conducted primarily clothed — not as a compromise, but because the work requires it. Thai massage, assisted stretching, and yoga postural adjustments all involve movement, leverage, and full-body positioning that simply cannot happen without clothing. The clothed format also widens access: it removes barriers for those with body image concerns, trauma histories, or a preference for modesty.
            </p>
            <p style={{ fontSize: "1rem" }}>
              Want to receive a session?{" "}
              <a href="https://sundarigardens.com" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--color-forest)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Reach out here →
              </a>
            </p>
            <blockquote>
              The client is never passive. The session is a conversation between the practitioner's hands and the client's breath.
            </blockquote>
            <h2>The co-created principle</h2>
            <p>
              The word "co-created" means exactly what it says: both people make the session. The practitioner brings skill, attention, and a trained capacity to listen through touch. The client brings their breath, their awareness, and micro-participations that activate the work. Neither alone produces what both together can.
            </p>
            <h2>Who it helps</h2>
            <p>
              Yogic bodywork is particularly effective for chronic tension patterns, restricted range of motion, breath dysregulation, and the category of experience that most people describe as "held stress." It does not treat medical conditions. It works with the body's own intelligence to restore ease.
            </p>
            <h2>What a session feels like</h2>
            <p>
              Clients consistently report feeling simultaneously more relaxed and more awake than after conventional massage. The participation activates rather than sedates. Most find the 60-90 minute format intensive in the best sense — they leave changed, not just rested.
            </p>
          </div>
        </div>
      </section>

      {/* Four threads */}
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-14" />
          <p className="eyebrow mb-4">The Four Threads</p>
          <h2 className="font-serif font-light mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What the modality draws from
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threads.map((t, i) => (
              <div key={t.title} className="card">
                <span className="font-serif italic text-4xl" style={{ color: "rgba(196,150,64,.4)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif font-light text-2xl mt-3 mb-3" style={{ color: "var(--color-forest)" }}>
                  {t.title}
                </h3>
                <p className="font-light leading-relaxed" style={{ fontSize: "1.05rem", color: "var(--color-bark-soft)" }}>
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-3" style={{ color: "var(--color-forest)", fontSize: "0.7rem" }}>Try it first</p>
              <h3 className="font-serif font-light text-2xl mb-4">Free mini-class</h3>
              <p className="font-light leading-relaxed mb-5" style={{ fontSize: "1.05rem", color: "var(--color-bark-soft)" }}>
                A 15-minute guided introduction to the breath pillar. Experience the first layer of the work before committing to training.
              </p>
              <Link href="/journal" className="btn btn-ghost-forest">Access free mini-class</Link>
            </div>
            <div>
              <p className="eyebrow mb-3" style={{ color: "var(--color-clay)", fontSize: "0.7rem" }}>Ready to train</p>
              <h3 className="font-serif font-light text-2xl mb-4">CE for licensed therapists</h3>
              <p className="font-light leading-relaxed mb-5" style={{ fontSize: "1.05rem", color: "var(--color-bark-soft)" }}>
                Get notified when the next CE cohort opens. Hands-on, in-person workshops in Hawaiʻi.
              </p>
              <EmailCapture context="modality" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/the-method" className="btn btn-ghost">
              Explore the method — Breath · Participation · Position →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
