import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Contact — Yogic Bodywork Institute",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
          Get in touch
        </h1>
        <span className="rule" />
        <p className="font-light leading-relaxed mb-12" style={{ fontSize: "1.18rem", color: "var(--color-bark-soft)" }}>
          For general inquiries, press, or partnership questions. For program-specific questions, join the relevant list below.
        </p>

        <div className="card-linen p-8 rounded-lg mb-10">
          <p className="eyebrow mb-2" style={{ fontSize: "0.68rem", color: "var(--color-forest)" }}>Email</p>
          <p className="font-light mb-6" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)" }}>
            hello@yogicbodyworkinstitute.com <span style={{ color: "var(--color-bark-muted)" }}>(TODO — update when ready)</span>
          </p>
          <p className="eyebrow mb-2" style={{ fontSize: "0.68rem", color: "var(--color-forest)" }}>Location</p>
          <p className="font-light" style={{ fontSize: "1.1rem", color: "var(--color-bark-soft)" }}>
            Hawaiʻi
          </p>
        </div>

        <div className="section-divider mb-10" />
        <h2 className="font-serif font-light mb-4" style={{ fontSize: "1.8rem" }}>Stay in touch</h2>
        <p className="font-light mb-8" style={{ fontSize: "1rem", color: "var(--color-bark-soft)" }}>
          Join the list and let us know what you&apos;re interested in — we&apos;ll reach out when relevant.
        </p>
        <EmailCapture context="contact" />
      </div>
    </section>
  );
}
