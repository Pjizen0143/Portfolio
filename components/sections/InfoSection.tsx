"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function InfoSection() {
  return (
    <section 
      id="info" 
      className="border-t-2 border-surface-container-low py-14 sm:py-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-280 px-5 sm:px-8">
        
        {/* Section Header */}
        <header className="border-b border-surface-container-low pb-6 mb-10">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Chapter 03 / Professional Log
          </div>
          <h2 className="typ-h1 text-primary">
            Curriculum Vitae
          </h2>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Bio Column */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="typ-h2 text-primary border-b border-surface-container-low pb-2">
              Philosophical Approach
            </h3>
            <p className="typ-body-lg text-on-background leading-relaxed">
              I am a front-end architect dedicated to the craft of **Editorial Minimalism**. I believe that user interfaces should behave like carefully typeset physical documents—relying on rhythm, negative space, and typographic scale rather than heavy ornamentation.
            </p>
            <p className="typ-body-lg text-on-background leading-relaxed">
              My practice is focused on structural clarity, performance optimization, and modular craftsmanship. By treating digital surfaces as clean paper and coding with rigorous logic, I build tools that minimize visual noise and enhance cognitive focus.
            </p>
            
            {/* Timeline */}
            <div className="pt-8">
              <h3 className="typ-h2 text-primary border-b border-surface-container-low pb-2 mb-6">
                Professional Logs
              </h3>
              
              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-low">
                <div className="relative pl-8">
                  <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary -translate-x-1/2"></span>
                  <div className="typ-label-mono text-xs text-on-surface-variant">2024 — CURRENT</div>
                  <h4 className="typ-body-lg font-bold text-primary mt-1">Lead Interaction Architect</h4>
                  <p className="typ-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                    Designed and shipped modular design systems and front-end architectures for lightweight document editing and analytical workspaces.
                  </p>
                </div>

                <div className="relative pl-8">
                  <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary/45 -translate-x-1/2"></span>
                  <div className="typ-label-mono text-xs text-on-surface-variant">2021 — 2024</div>
                  <h4 className="typ-body-lg font-bold text-primary mt-1">Software Engineer (Front-End)</h4>
                  <p className="typ-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                    Focused on React rendering patterns, TypeScript compiler configurations, and high-performance WebGL canvas utilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Column */}
          <div className="lg:col-span-4">
            <div className="card-paper">
              <h3 className="typ-label-mono text-xs uppercase text-primary border-b border-surface-container-low pb-3 mb-4">
                CORE_METADATA
              </h3>

              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">PRIMARY_LANGUAGES</span>
                  <span className="typ-body-md text-primary mt-1 font-semibold">TypeScript, JavaScript, Rust</span>
                </li>
                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">FRAMEWORKS</span>
                  <span className="typ-body-md text-primary mt-1 font-semibold">Next.js, React, Tailwind CSS</span>
                </li>
                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">SPECIALTIES</span>
                  <span className="typ-body-md text-primary mt-1 font-semibold">Design Systems, CSS Architectures, Performance Auditing</span>
                </li>
                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">LOCATION</span>
                  <span className="typ-body-md text-primary mt-1 font-semibold">Bangkok, Thailand</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* View More Info Button Link */}
        <div className="flex justify-center mt-12">
          <Link href="/info">
            <Button variant="secondary" className="px-8 py-3.5 uppercase tracking-wider text-xs font-bold font-mono">
              VIEW_FULL_DOSSIER
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
