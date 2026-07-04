import Link from "next/link";
import EmailCapture from "./EmailCapture";
import { footerNav, legalNav } from "@/data/navigation";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bark)", color: "var(--color-cream)" }}>
      <div className="section-divider" style={{ opacity: 0.15 }} />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_320px] gap-12 lg:gap-16 pb-14"
          style={{ borderBottom: "1px solid rgba(251,240,228,.12)" }}>

          {/* Brand + mission */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 leading-none">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" aria-hidden="true" className="shrink-0">
                <circle cx="50" cy="50" r="42" stroke="var(--color-amber)" strokeWidth="4" fill="none" opacity="0.6" />
                <path d="M50 20 C50 20 72 38 72 58 C72 70 62 78 50 80 C38 78 28 70 28 58 C28 38 50 20 50 20Z"
                  stroke="var(--color-amber)" strokeWidth="3.5" fill="none" opacity="0.5" />
                <line x1="50" y1="22" x2="50" y2="80" stroke="var(--color-amber)" strokeWidth="2" opacity="0.6" />
              </svg>
              <div className="flex flex-col leading-none gap-[4px]">
                <span className="font-serif" style={{ fontSize: "1.08rem", color: "var(--color-cream)", letterSpacing: "0.01em" }}>
                  Yogic Bodywork
                </span>
                <span className="font-sans font-medium uppercase" style={{ fontSize: "0.56rem", letterSpacing: "0.3em", color: "rgba(196,150,64,.75)" }}>
                  Institute
                </span>
              </div>
            </Link>
            <p className="font-light leading-relaxed mb-5 max-w-xs"
              style={{ fontSize: "0.95rem", color: "rgba(251,240,228,.62)" }}>
              Training in a new co-created modality — breath-led, participatory, clothed bodywork for licensed practitioners and the curious alike.
            </p>
            <p className="font-sans" style={{ fontSize: "0.75rem", color: "rgba(251,240,228,.35)", letterSpacing: "0.08em" }}>
              Hawaiʻi · yogicmassageinstitute.com
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="eyebrow mb-5" style={{ fontSize: "0.68rem", color: "rgba(196,150,64,.75)" }}>Navigate</p>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="font-light transition-opacity hover:opacity-100"
                    style={{ fontSize: "0.9rem", color: "rgba(251,240,228,.6)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Single unified CTA */}
          <div>
            <p className="eyebrow mb-2" style={{ fontSize: "0.68rem", color: "rgba(196,150,64,.75)" }}>
              Stay connected
            </p>
            <p className="font-light mb-5" style={{ fontSize: "0.9rem", color: "rgba(251,240,228,.55)" }}>
              Join the list. Tell us what interests you — receiving sessions, CE credits, or full practitioner training — and we&apos;ll reach out when the time is right.
            </p>
            <EmailCapture context="footer" stacked />
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-4"
          style={{ fontSize: "0.72rem", color: "rgba(251,240,228,.3)" }}>
          <p>© {new Date().getFullYear()} Yogic Bodywork Institute. All rights reserved.</p>
          <nav className="flex flex-wrap gap-5" aria-label="Legal">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href}
                className="transition-opacity hover:opacity-70">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
