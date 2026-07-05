"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/data/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(251,240,228,0.98)",
        borderBottom: "1.5px solid rgba(196,150,64,.32)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 1px 18px -4px rgba(42,18,8,.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[5.5rem]">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3.5 leading-none" aria-label="Yogic Bodywork Institute home">
          {/* Mark */}
          <svg width="46" height="46" viewBox="0 0 100 100" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="50" cy="50" r="44" fill="rgba(196,150,64,.1)" />
            <circle cx="50" cy="50" r="44" stroke="var(--color-forest)" strokeWidth="5" fill="none" />
            <path d="M50 16 C50 16 76 36 76 58 C76 72 64 82 50 84 C36 82 24 72 24 58 C24 36 50 16 50 16Z"
              stroke="var(--color-forest)" strokeWidth="4.5" fill="none" />
            <line x1="50" y1="18" x2="50" y2="84" stroke="var(--color-amber)" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="4" fill="var(--color-amber)" />
          </svg>
          <div className="flex flex-col leading-none gap-[6px]">
            <span className="font-serif leading-none"
              style={{ fontSize: "1.35rem", color: "var(--color-bark)", letterSpacing: "0.01em", fontWeight: 400 }}>
              Yogic Bodywork
            </span>
            <span className="font-sans font-medium uppercase leading-none"
              style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: "var(--color-forest)" }}>
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
                  className="px-4 py-2 font-sans tracking-[0.1em] uppercase transition-colors flex items-center gap-1"
                  style={{ fontSize: "0.82rem", fontWeight: 400, color: "rgba(42,18,8,.82)" }}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {programsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 border rounded-md shadow-lg overflow-hidden"
                    style={{ background: "var(--color-cream)", borderColor: "rgba(196,150,64,.25)" }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3.5 font-sans tracking-[0.08em] uppercase transition-colors"
                        style={{ fontSize: "0.78rem", fontWeight: 400, color: "rgba(42,18,8,.82)" }}
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
                className="px-4 py-2 font-sans tracking-[0.1em] uppercase transition-colors"
                style={{ fontSize: "0.82rem", fontWeight: 400, color: "rgba(42,18,8,.82)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-bark)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(42,18,8,.82)")}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/programs/continuing-education" className="btn btn-ghost-forest" style={{ padding: "0.6rem 1.2rem", fontSize: "0.76rem" }}>
            CE Updates
          </Link>
          <Link href="/programs/certification" className="btn btn-clay" style={{ padding: "0.6rem 1.2rem", fontSize: "0.76rem" }}>
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
          <span className={`block w-6 h-[1.5px] bg-current transition-transform origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-current transition-transform origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden px-6 py-5 flex flex-col border-t"
          style={{ background: "rgba(251,240,228,.99)", borderColor: "rgba(196,150,64,.2)" }}>
          {primaryNav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-sans tracking-[0.12em] uppercase border-b transition-colors"
                style={{ fontSize: "0.88rem", fontWeight: 400, color: "rgba(42,18,8,.85)", borderColor: "rgba(196,150,64,.15)" }}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 pl-4 font-sans tracking-[0.1em] uppercase border-b transition-colors"
                  style={{ fontSize: "0.8rem", fontWeight: 400, color: "rgba(42,18,8,.7)", borderColor: "rgba(196,150,64,.1)" }}
                >
                  ↳ {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex gap-3 mt-5">
            <Link href="/programs/continuing-education" className="btn btn-ghost-forest flex-1 text-center" style={{ fontSize: "0.78rem", padding: "0.7rem 1rem" }}>
              CE Updates
            </Link>
            <Link href="/programs/certification" className="btn btn-clay flex-1 text-center" style={{ fontSize: "0.78rem", padding: "0.7rem 1rem" }}>
              Join Waitlist
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
