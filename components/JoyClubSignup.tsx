"use client";

import { useState, type FormEvent } from "react";

export function JoyClubSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "We couldn't complete your signup. Please try again.");
      setStatus("success");
      setMessage(result.message || "You're in! Welcome to the Joy Club!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Signup failed. Please try again.");
    }
  }

  return (
    <div>
      <form onSubmit={subscribe} className="bp-footer-signup">
        <label className="bp-sr-only" htmlFor="bp-footer-email">Email address</label>
        <input id="bp-footer-email" type="email" name="email" value={email}
          onChange={(event) => setEmail(event.target.value)} placeholder="Your email address"
          required autoComplete="email" maxLength={254} disabled={status === "loading"} />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "JOINING..." : "SIGN UP"}
        </button>
      </form>
      <p role="status" aria-live="polite" className="bp-footer-signup-message">
        {message}
      </p>
    </div>
  );
}
