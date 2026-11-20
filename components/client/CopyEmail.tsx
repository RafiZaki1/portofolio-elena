"use client";

// Tombol salin email dengan umpan balik. Fallback aman jika Clipboard API tidak tersedia.
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "ok" | "fail">("idle");

  function fallback(text: string) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  async function copy() {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) ok = fallback(email);
    setStatus(ok ? "ok" : "fail");
  }

  return (
    <>
      <button type="button" className="copy-btn" onClick={copy}>
        {status === "ok" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        Salin email
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "ok" ? "Email disalin" : status === "fail" ? "Gagal menyalin, silakan salin manual" : ""}
      </span>
      {status !== "idle" && (
        <span className="copy-status" aria-hidden="true">
          {status === "ok" ? "Email disalin" : "Gagal menyalin, silakan salin manual"}
        </span>
      )}
    </>
  );
}
