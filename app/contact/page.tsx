"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "thanaphat.pool@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSending(true);
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.error("EmailJS sending error:", err);
          setError(
            "Failed to dispatch log. Please check your network or try again.",
          );
        })
        .finally(() => {
          setIsSending(false);
        });
    } else {
      // Simulate sending for local testing when keys aren't configured yet
      console.warn(
        "EmailJS credentials missing. Simulating success.\n" +
          "To enable real emails, configure the following in your .env.local file:\n" +
          "  NEXT_PUBLIC_EMAILJS_SERVICE_ID=...\n" +
          "  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...\n" +
          "  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...",
      );

      setTimeout(() => {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setIsSending(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-background text-on-background px-5 py-16 sm:px-8 animate-fade-in">
      <div className="mx-auto max-w-280">
        {/* Page Header */}
        <header className="border-b border-surface-container-low pb-8 mb-12">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Registry / Communication
          </div>
          <h1 className="typ-h1 text-primary text-center lg:text-left">
            Initialize Contact
          </h1>
          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            Have a project inquiry, design critique, or simple greeting? Compile
            your transmission log below.
          </p>
        </header>

        {/* Centralised Form Container (Paper Card) */}
        <div className="max-w-2xl mx-auto">
          <div className="card-paper p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center animate-slide-in">
                <div className="typ-label-mono text-xs text-emerald-600 mb-3 animate-pulse">
                  [TRANSMISSION_SUCCESS]
                </div>
                <h2 className="typ-h2 text-primary mb-3">
                  Log Committed Successfully
                </h2>
                <p className="typ-body-md text-on-surface-variant mb-6 font-serif">
                  Thank you. Your message has been routed via EmailJS to my
                  inbox. I will review the payload and respond to you shortly.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider px-5 py-2.5"
                >
                  NEW_TRANSMISSION
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-error/10 border border-error/20 text-error rounded text-xs font-mono uppercase tracking-wider animate-slide-in">
                    [ERROR] {error}
                  </div>
                )}

                {/* Sender Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-name"
                    className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2"
                  >
                    Sender Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className="input-minimal typ-body-md"
                    disabled={isSending}
                  />
                </div>

                {/* Sender Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-email"
                    className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2"
                  >
                    Sender Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="input-minimal typ-body-md"
                    disabled={isSending}
                  />
                </div>

                {/* Packet Message */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-msg"
                    className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2"
                  >
                    Transmission Log Payload *
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message details here..."
                    rows={5}
                    className="input-minimal typ-body-md resize-none py-2"
                    disabled={isSending}
                  />
                </div>

                {/* Submit button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full uppercase text-xs tracking-wider py-3.5"
                  disabled={isSending}
                >
                  {isSending
                    ? "DISPATCHING_TRANSMISSION..."
                    : "SEND_TRANSMISSION"}
                </Button>
              </form>
            )}
          </div>

          {/* Compact and Elegant Social/Email Connection Links at the bottom */}
          <div className="mt-8 text-center animate-fade-in">
            <p className="typ-label-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest mb-3">
              Prefer direct contact or inspect?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/Pjizen0143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs typ-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 py-1.5 px-4 border border-surface-container-low rounded bg-surface-container-lowest/30 hover:bg-surface-container-low shadow-sm active:scale-95"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                github.com/Pjizen0143
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=Contact Inquiry - Portfolio&body=Hello Thanaphat,%0D%0A%0D%0A[Your message here]`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs typ-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 py-1.5 px-4 border border-surface-container-low rounded bg-surface-container-lowest/30 hover:bg-surface-container-low shadow-sm active:scale-95"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Gmail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
