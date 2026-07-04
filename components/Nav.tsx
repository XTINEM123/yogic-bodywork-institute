"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/data/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(251,240,228,0.97)",
        borderColor: "rgba(232,168,32,.2)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[4.5rem]">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 leading-none" aria-label="Yogic Bodywork Institute home">
          {/* Mark — leaf/lotus minimal */}
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="50" cy="50" r="42" stroke="var(--color-forest)" strokeWidth="4" fill="none" opacity="0.7" />
            <path d="M50 20 C50 20 72 38 72 58 C72 70 62 78 50 80 C38 78 28 70 28 58 C28 38 50 20 50 20Z"
              stroke="var(--color-forest)" strokeWidth="3.5" fill="none" opacity="0.65" />
            <line x1="50" y1="22" x2="50" y2="80" stroke="var(--color-amber)" strokeWidth="2" opacity="0.7" />
          </svg>
          <div className="flex flex-col leading-none gap-[4px]">
            <span className="font-serif font-light leading-none"
              style={{ fontSize: "1.08rem", color: "var(--color-bark)", letterSpacing: "0.01em" }}>
              Yogic Bodywork
            </span>
            <span className="font-sans font-medium uppercase leading-none"
              style={{ fontSize: "0.58rem", letterSpacing: "0.3em", color: "rgba(53,87,199,0.75)" }}>
              Institute
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.href} className="relative">
                <button
                  onClick={() => setProgramsOpen(!programsOpen)}
                  onBlur={() => setTimeout(() => setProgramsOpen(false), 150)}
                  className="px-4 py-2 font-sans font-light tracking-[0.12em] uppercase transition-colors flex items-center gap-1"
                  style={{ fontSize: "0.75rem", color: "rgba(107,58,42,.75)" }}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {programsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 border rounded-md shadow-lg overflow-hidden"
                    style={{ background: "var(--color-cream)", borderColor: "rgba(232,168,32,.2)" }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 font-sans font-light tracking-[0.1em] uppercase transition-colors"
                        style={{ fontSize: "0.72rem", color: "rgba(107,58,42,.85)" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "var(--color-linen)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        onClick={() => setProgramsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-sans font-light tracking-[0.12em] uppercase transition-colors"
                style={{ fontSize: "0.75rem", color: "rgba(107,58,42,.75)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-bark)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(107,58,42,.75)")}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Two CTA buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/programs/continuing-education" className="btn btn-ghost-forest" style={{ padding: "0.55rem 1.1rem", fontSize: "0.72rem" }}>
            CE Updates
          </Link>
          <Link href="/programs/certification" className="btn btn-clay" style={{ padding: "0.55rem 1.1rem", fontSize: "0.72rem" }}>
            Join Waitlist
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          style={{ color: "var(--color-bark)" }}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-current transition-transform origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-transform origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden px-6 py-5 flex flex-col border-t"
          style={{ background: "rgba(251,240,228,.99)", borderColor: "rgba(232,168,32,.15)" }}>
          {primaryNav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 font-sans font-light tracking-[0.14em] uppercase border-b transition-colors"
                style={{ fontSize: "0.78rem", color: "rgba(107,58,42,.8)", borderColor: "rgba(232,168,32,.15)" }}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 pl-4 font-sans font-light tracking-[0.12em] uppercase border-b transition-colors"
                  style={{ fontSize: "0.7rem", color: "rgba(107,58,42,.65)", borderColor: "rgba(232,168,32,.1)" }}
                >
                  ↳ {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex gap-3 mt-5">
            <Link href="/programs/continuing-education" className="btn btn-ghost-forest flex-1 text-center" style={{ fontSize: "0.72rem", padding: "0.65rem 1rem" }}>
              CE Updates
            </Link>
            <Link href="/programs/certification" className="btn btn-clay flex-1 text-center" style={{ fontSize: "0.72rem", padding: "0.65rem 1rem" }}>
              Join Waitlist
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
