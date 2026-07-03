import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Journal — Resources, Writing & the Free Mini-Class",
};

const posts = [
  {
    type: "Free Mini-Class",
    title: "Intro to Yogic Bodywork",
    summary: "A 15-minute guided introduction to the breath pillar. Experience the first layer of the work before committing to training. No equipment, no experience required.",
    href: "#mini-class",
    accent: "var(--color-forest)",
    cta: "Access Free Mini-Class",
  },
  {
    type: "Opinion",
    title: "Breath, Participation & Position — The Science",
    summary: "The physiological and neurological evidence behind the three pillars of yogic bodywork. Respiratory psychophysiology, motor neuroscience, and mechanical advantage.",
    href: "#science",
    accent: "var(--color-bark-muted)",
    cta: "Read the essay",
  },
  {
    type: "Opinion",
    title: "A Yogic & Tantric View of Healing & Self-Agency",
    summary: "What the classical traditions say about the body as intelligent participant in its own healing — and why this matters for how we structure bodywork sessions.",
    href: "#yogic-view",
    accent: "var(--color-bark-muted)",
    cta: "Read the essay",
  },
];

export default function JournalPage() {
  return (
    <>
      <section style={{ background: "var(--color-linen)" }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">Journal</p>
          <h1 className="font-serif font-light mb-5" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.08 }}>
            Resources & Writing
          </h1>
          <span className="rule" />
          <p className="font-light leading-relaxed" style={{ fontSize: "1.18rem", color: "var(--color-bark-soft)", maxWidth: "50ch" }}>
            A free mini-class, opinion pieces on the science and philosophy behind the work, and future writing as the institute develops.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <article key={post.title} className="card">
                <p className="eyebrow mb-3" style={{ fontSize: "0.68rem", color: post.accent }}>
                  {post.type}
                </p>
                <h2 className="font-serif font-light mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--color-bark)" }}>
                  {post.title}
                </h2>
                <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)" }}>
                  {post.summary}
                </p>
                <Link href={post.href} className="btn btn-ghost-forest" style={{ fontSize: "0.78rem" }}>
                  {post.cta} →
                </Link>
              </article>
            ))}
          </div>

          {/* Placeholder for future posts */}
          <div className="mt-14 pt-10 border-t text-center" style={{ borderColor: "rgba(196,154,60,.18)" }}>
            <p className="font-light" style={{ fontSize: "0.95rem", color: "var(--color-bark-muted)" }}>
              More essays and resources are being added as the institute develops.
            </p>
            <p className="font-light mt-2 mb-8" style={{ fontSize: "0.9rem", color: "var(--color-bark-muted)" }}>
              Join a list to be notified of new content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EmailCapture variant="ce" context="journal-ce" buttonText="CE Updates" />
              <EmailCapture variant="cert" context="journal-cert" buttonText="Cert Waitlist" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
