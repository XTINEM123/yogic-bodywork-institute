import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accreditation & Licensing Status" };

export default function AccreditationPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-5">Transparency</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
          Accreditation & Licensing Status
        </h1>
        <span className="rule" />
        <div className="prose-ybi">
          <p>
            The Yogic Bodywork Institute is a new institution. We are committed to being accurate about our current status and honest about what we have not yet obtained.
          </p>
          <h2>NCBTMB Approved Provider Status</h2>
          <p>
            We are in the process of applying for NCBTMB (National Certification Board for Therapeutic Massage & Bodywork) Approved Provider status. This status has not yet been granted. This page will be updated when it is.
          </p>
          <p>
            Our CE courses are designed to meet NCBTMB standards for content and delivery. However, until we hold approved provider status, we cannot guarantee that all licensing boards will accept these hours. Therapists are advised to confirm with their board before enrolling.
          </p>
          <h2>Hawaiʻi State Requirements</h2>
          <p>
            Hawaiʻi requires 12 CE hours per biennial renewal period for licensed massage therapists. Our CE workshops are designed to be consistent with this requirement. Students are responsible for confirming that their specific board accepts the CE hours offered.
          </p>
          <h2>Institutional Accreditation</h2>
          <p>
            The Yogic Bodywork Institute is not currently accredited by any regional or national accrediting body. Institutional accreditation is not required for CE workshops but may be relevant for the full certification program. We will update this page as that process develops.
          </p>
          <h2>Certification Program</h2>
          <p>
            The full certification program is in development and not yet open for enrollment. Regulatory requirements for practitioner certification programs vary by jurisdiction. We are reviewing applicable requirements as part of program design and will publish relevant information here as it is finalized.
          </p>
          <h2>Questions</h2>
          <p>
            If you have questions about our accreditation or licensing status — particularly as it relates to your jurisdiction — contact us before enrolling.
          </p>
        </div>
      </div>
    </section>
  );
}
