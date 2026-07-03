import type { Metadata } from "next";

export const metadata: Metadata = { title: "Consumer Information & Disclosures" };

export default function DisclosuresPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
          Consumer Information & Disclosures
        </h1>
        <span className="rule" />
        <div className="prose-ybi">
          <h2>About the Institute</h2>
          <p>
            The Yogic Bodywork Institute is a professional education organization offering training in the yogic bodywork modality. We offer continuing education workshops for licensed massage therapists and are developing a full certification program.
          </p>
          <h2>Nature of Training</h2>
          <p>
            Our CE workshops provide training in the yogic bodywork modality and are designed to meet NCBTMB standards for CE content and delivery. Completion of our CE workshops does not confer licensure and does not guarantee acceptance of CE hours by any particular state licensing board. Students are responsible for confirming CE acceptance with their board.
          </p>
          <h2>Program Costs</h2>
          <p>
            Program costs, payment plans, and refund policies will be published in detail at the time of enrollment. Early-interest list registrations are free and non-binding.
          </p>
          <h2>Refund Policy</h2>
          <p>
            A detailed refund policy will be provided at enrollment. In general, cancellations made more than 14 days before a workshop start date will receive a full refund. Cancellations within 14 days may be subject to a processing fee or offered as credit toward a future workshop.
          </p>
          <h2>Contact</h2>
          <p>
            Yogic Bodywork Institute<br />
            Hawaiʻi<br />
            hello@yogicbodyworkinstitute.com (TODO — update)
          </p>
        </div>
      </div>
    </section>
  );
}
