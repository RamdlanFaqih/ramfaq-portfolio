"use client";

import { useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";

const email = "ramfaqih@gmail.com";

export default function ContactOptions() {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied.");
    } catch {
      setStatus("Please select and copy the email address above.");
    }
  }

  return (
    <div className="contact-options">
      <a className="contact-email" href={`mailto:${email}`} aria-label={`Email ${email} using your email app`}>
        {email} <ArrowUpRight size={22} aria-hidden="true" />
      </a>
      <div className="contact-actions">
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`} target="_blank" rel="noopener noreferrer">
          Open Gmail <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button type="button" onClick={copyEmail}>
          Copy email <Copy size={16} aria-hidden="true" />
        </button>
      </div>
      <p className="contact-status" role="status">{status}</p>
    </div>
  );
}
