"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../../content/site";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const phone = "+251962841163";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-white">Get in Touch</h2>
      <p className="mt-2 text-sm text-foreground/70">
        Have a project idea, security audit request, or collaboration in mind? Feel free to reach out.
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 items-start">
        {/* Direct Contact Options */}
        <div className="space-y-4 rounded-xl border border-white/10 p-5 md:p-6 bg-background/50 backdrop-blur-sm">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Email</h3>
            <div className="mt-2 flex items-center justify-between gap-3">
              <Link className="font-mono text-sm text-white hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </Link>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-xs rounded-md border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors pressable"
              >
                {copiedEmail ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          <hr className="border-white/10" />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Phone</h3>
            <div className="mt-2 flex items-center justify-between gap-3">
              <Link className="font-mono text-sm text-white hover:underline" href={`tel:${phone}`}>
                +251 96 284 1163
              </Link>
              <button
                onClick={handleCopyPhone}
                className="px-2.5 py-1 text-xs rounded-md border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors pressable"
              >
                {copiedPhone ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          <hr className="border-white/10" />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Location & Social</h3>
            <p className="mt-1 text-sm text-foreground/80">{siteConfig.location}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10 transition-colors pressable"
                href={siteConfig.social.github}
              >
                GitHub ↗
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10 transition-colors pressable"
                href={siteConfig.social.linkedin}
              >
                LinkedIn ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="rounded-xl border border-white/10 p-5 md:p-6 bg-background/50 backdrop-blur-sm">
          {submitted ? (
            <div className="py-8 text-center space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
              <p className="text-sm text-white/70">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-white text-black font-semibold py-2.5 text-sm transition-opacity hover:opacity-90 pressable"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}