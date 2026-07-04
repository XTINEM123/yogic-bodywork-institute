"use client";

import { useState } from "react";

type Interest = "receiving" | "ce" | "certification";

const interestOptions: { id: Interest; label: string; sub: string }[] = [
  { id: "receiving",    label: "Receiving bodywork",           sub: "As a client or recipient" },
  { id: "ce",          label: "Getting CE credits",            sub: "I'm a licensed massage therapist" },
  { id: "certification", label: "Full practitioner training",  sub: "Certification program" },
];

interface Props {
  context?: string;
  stacked?: boolean;
}

export default function EmailCapture({ context = "general", stacked = false }: Props) {
  const [step, setStep]       = useState<"email" | "interests" | "done">("email");
  const [email, setEmail]     = useState("");
  const [selected, setSelected] = useState<Interest[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState(false);

  function toggle(id: Interest) {
    setSelected(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]);
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStep("interests");
  }

  async function handleInterestSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "TODO",
          email,
          interests: selected.join(", ") || "unspecified",
          context,
          subject: `YBI interest — ${email}`,
        }),
      });
      setStep("done");
    } catch {
      setSending(false);
      setError(true);
    }
  }

  if (step === "done") {
    return (
      <p className="font-sans font-light py-2" style={{ fontSize: "0.95rem", color: "var(--color-forest)" }}>
        ✓ You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  if (step === "interests") {
    return (
      <form onSubmit={handleInterestSubmit}>
        <p className="font-sans mb-4" style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-bark-muted)" }}>
          What are you interested in?
        </p>
        <div className="flex flex-col gap-4 mb-6">
          {interestOptions.map(({ id, label, sub }) => (
            <label key={id} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(id)}
                onChange={() => toggle(id)}
                className="mt-[3px] shrink-0"
                style={{ accentColor: "var(--color-forest)", width: "15px", height: "15px" }}
              />
              <span>
                <span className="font-sans font-medium block leading-snug" style={{ fontSize: "0.9rem", color: "var(--color-bark)" }}>
                  {label}
                </span>
                <span className="font-sans font-light block" style={{ fontSize: "0.78rem", color: "var(--color-bark-muted)" }}>
                  {sub}
                </span>
              </span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          disabled={sending}
          className="btn btn-forest"
        >
          {sending ? "…" : "I'm in →"}
        </button>
        {error && (
          <p className="text-xs mt-2" style={{ color: "var(--color-clay)" }}>
            Something went wrong — please try again.
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleEmailSubmit} className={stacked ? "flex flex-col gap-2" : "flex gap-2 flex-wrap"}>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="input"
        style={{ minWidth: stacked ? "auto" : "220px", flex: stacked ? "1" : "1 1 220px" }}
      />
      <button type="submit" className="btn btn-forest" style={{ whiteSpace: "nowrap" }}>
        Stay in touch
      </button>
    </form>
  );
}
