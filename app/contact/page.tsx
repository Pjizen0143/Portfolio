"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate form submission
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-background text-on-background px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        {/* Page Header */}
        <header className="border-b border-surface-container-low pb-8 mb-12">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Registry / Communication
          </div>
          <h1 className="typ-h1 text-primary">
            Initialize Contact
          </h1>
          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
            Have a project inquiry, design critique, or simple greeting? Compile your transmission log below.
          </p>
        </header>

        {/* Form Container (Paper Card) */}
        <div className="max-w-2xl mx-auto">
          <div className="card-paper">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="typ-label-mono text-xs text-emerald-600 mb-3 animate-pulse">
                  [TRANSMISSION_SUCCESS]
                </div>
                <h2 className="typ-h2 text-primary mb-3">
                  Log Committed Successfully
                </h2>
                <p className="typ-body-md text-on-surface-variant mb-6">
                  Thank you. Your message has been saved in our registry. I will review the packet and get back to you shortly.
                </p>
                <Button 
                  variant="secondary"
                  onClick={() => setSubmitted(false)}
                  className="text-xs"
                >
                  NEW_TRANSMISSION
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Sender Name */}
                <div className="flex flex-col">
                  <label htmlFor="contact-name" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
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
                  />
                </div>

                {/* Sender Email */}
                <div className="flex flex-col">
                  <label htmlFor="contact-email" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
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
                  />
                </div>

                {/* Packet Message */}
                <div className="flex flex-col">
                  <label htmlFor="contact-msg" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
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
                  />
                </div>

                {/* Submit button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  SEND_TRANSMISSION
                </Button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
