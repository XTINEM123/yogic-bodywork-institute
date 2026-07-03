import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>Privacy Policy</h1>
        <span className="rule" />
        <div className="prose-ybi">
          <p>Last updated: 2026</p>
          <h2>What we collect</h2>
          <p>
            When you sign up for our email lists, we collect your email address and, optionally, your name. We do not collect payment information through this website; payments are processed through third-party services at the time of enrollment.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your email address to send you updates about the programs you opted into — CE cohort notifications or certification waitlist updates. We do not sell, rent, or share your email address with third parties for marketing purposes.
          </p>
          <h2>Email service</h2>
          <p>
            Email submissions are processed via Web3Forms. Please review their privacy policy for details on how form submissions are handled.
          </p>
          <h2>Cookies</h2>
          <p>
            This website uses no tracking cookies. We may use session cookies necessary for site function. We do not use advertising or analytics cookies.
          </p>
          <h2>Your rights</h2>
          <p>
            You may unsubscribe from our lists at any time using the unsubscribe link in any email. To request deletion of your data, contact hello@yogicbodyworkinstitute.com (TODO — update).
          </p>
          <h2>Contact</h2>
          <p>hello@yogicbodyworkinstitute.com (TODO — update)</p>
        </div>
      </div>
    </section>
  );
}
