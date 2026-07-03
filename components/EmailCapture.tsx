"use client";

import { useState } from "react";

interface Props {
  variant: "ce" | "cert";
  label?: string;
  buttonText?: string;
  context?: string;
  stacked?: boolean;
}

export default function EmailCapture({
  variant,
  label = "your@email.com",
  buttonText,
  context = "general",
  stacked = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const isCe = variant === "ce";
  const defaultButton = isCe ? "Get CE Updates" : "Join Waitlist";
  const btnClass = isCe ? "btn btn-forest" : "btn btn-clay";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "TODO",
          email,
          context,
          subject: `YBI ${isCe ? "CE" : "Cert"} list — ${email}`,
        }),
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="font-sans font-light py-2" style={{ fontSize: "0.95rem", color: isCe ? "var(--color-forest)" : "var(--color-clay)" }}>
        ✓ You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={stacked ? "flex flex-col gap-2" : "flex gap-2 flex-wrap"}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={label}
        className="input"
        style={{ minWidth: stacked ? "auto" : "220px", flex: stacked ? "1" : "1 1 220px" }}
      />
      <button type="submit" disabled={status === "sending"} className={btnClass} style={{ whiteSpace: "nowrap" }}>
        {status === "sending" ? "…" : (buttonText ?? defaultButton)}
      </button>
      {status === "error" && (
        <p className="w-full text-xs mt-1" style={{ color: "var(--color-clay)" }}>
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
