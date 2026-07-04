import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>Terms of Use</h1>
        <span className="rule" />
        <div className="prose-ybi">
          <p>Last updated: 2026</p>
          <h2>Use of this site</h2>
          <p>
            This website is provided for informational purposes about the Yogic Bodywork Institute and its programs. By using this site, you agree to these terms.
          </p>
          <h2>Accuracy of information</h2>
          <p>
            We strive to keep information on this site accurate and up to date. Program details, pricing, dates, and accreditation status are subject to change. We will endeavor to update the site promptly when changes occur.
          </p>
          <h2>No medical advice</h2>
          <p>
            Nothing on this site constitutes medical advice. Yogic bodywork is not a medical treatment and does not diagnose, treat, or cure any medical condition. Consult a licensed healthcare provider for medical concerns.
          </p>
          <h2>Intellectual property</h2>
          <p>
            All content on this site — text, images, course materials, and methodological descriptions — is the property of the Yogic Bodywork Institute or its licensors. You may not reproduce or distribute content without written permission.
          </p>
          <h2>Enrollment terms</h2>
          <p>
            Enrollment in workshops and programs is subject to separate enrollment agreements provided at the time of registration, which will govern payment, cancellation, and refund terms.
          </p>
          <h2>Contact</h2>
          <p>hello@yogicmassageinstitute.com (TODO — update)</p>
        </div>
      </div>
    </section>
  );
}
