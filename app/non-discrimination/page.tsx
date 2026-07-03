import type { Metadata } from "next";

export const metadata: Metadata = { title: "Non-Discrimination Statement" };

export default function NonDiscriminationPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-5">Policy</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
          Non-Discrimination Statement
        </h1>
        <span className="rule" />
        <div className="prose-ybi">
          <p>
            The Yogic Bodywork Institute does not discriminate on the basis of race, color, national origin, sex, gender identity, sexual orientation, disability, age, religion, or any other characteristic protected by applicable law in its admissions, programs, activities, or employment practices.
          </p>
          <p>
            We are committed to maintaining an environment that is welcoming, inclusive, and free from discrimination and harassment. All students, faculty, and staff are expected to treat one another with respect and dignity.
          </p>
          <p>
            If you believe you have experienced discrimination in connection with any program or activity of the Yogic Bodywork Institute, please contact us at hello@yogicbodyworkinstitute.com (TODO — update with final contact).
          </p>
        </div>
      </div>
    </section>
  );
}
