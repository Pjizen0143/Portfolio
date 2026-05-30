"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section 
      id="index" 
      className="mx-auto max-w-280 px-5 pt-12 pb-10 sm:px-8 sm:pt-16 min-h-[65vh] flex flex-col justify-center"
    >
      <div className="max-w-4xl">
        <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">
          SYSTEM_INIT // ROOT_DIRECTORY
        </div>
        
        <h1 className="typ-display text-primary leading-tight mb-2">
          Thanaphat Poolthrap&apos;s<br />
        </h1>
        <h2 className="typ-h2 text-on-surface-variant ml-2 mb-6">
          Software Engineer
        </h2>
        <p className="typ-body-lg text-on-background leading-relaxed max-w-2xl mb-8">
          I&apos;m a Computer Engineering student passionate about software engineering and building practical applications.
          I enjoy turning ideas into real products and have experience developing full-stack projects.
          Currently, I&apos;m focused on improving my backend development, system design, and problem-solving skills.
        </p>
      </div>
    </section>
  );
}
