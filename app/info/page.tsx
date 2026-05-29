"use client";

import React from "react";

export default function InfoPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-background text-on-background px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-280">
        {/* Page Header */}
        <header className="border-b border-surface-container-low pb-8 mb-12">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Registry / Bio
          </div>
          <h1 className="typ-h1 text-primary">
            Curriculum Vitae
          </h1>
        </header>

        {/* Two Column Document Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column A: Editorial bio in Literata */}
          <main className="lg:col-span-8 space-y-6">
            <h2 className="typ-h2 text-primary border-b border-surface-container-low pb-2">
              Philosophical Approach
            </h2>
            <p className="typ-body-lg text-on-background leading-relaxed">
              I am a digital architect and software builder dedicated to the craft of **Editorial Minimalism**. I believe that user interfaces should behave like carefully typeset physical documents—relying on rhythm, negative space, and typographic scale rather than heavy ornamentation.
            </p>
            <p className="typ-body-lg text-on-background leading-relaxed">
              My practice is focused on structural clarity, performance optimization, and front-end craftsmanship. By treating digital surfaces as clean paper and coding with rigorous logic, I build tools that minimize visual noise and enhance cognitive focus.
            </p>
            
            {/* Timeline */}
            <div className="pt-8">
              <h2 className="typ-h2 text-primary border-b border-surface-container-low pb-2 mb-6">
                Professional Logs
              </h2>
              
              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-low">
                {/* Exp Item 1 */}
                <div className="relative pl-8">
                  <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary -translate-x-1/2"></span>
                  <div className="typ-label-mono text-xs text-on-surface-variant">2024 — CURRENT</div>
                  <h3 className="typ-body-lg font-bold text-primary mt-1">Lead Interaction Architect</h3>
                  <p className="typ-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                    Designed and shipped modular design systems and front-end architectures for lightweight document editing and analytical workspaces.
                  </p>
                </div>

                {/* Exp Item 2 */}
                <div className="relative pl-8">
                  <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary/45 -translate-x-1/2"></span>
                  <div className="typ-label-mono text-xs text-on-surface-variant">2021 — 2024</div>
                  <h3 className="typ-body-lg font-bold text-primary mt-1">Software Engineer (Front-End)</h3>
                  <p className="typ-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                    Focused on React rendering patterns, TypeScript compiler configurations, and high-performance WebGL canvas utilities.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Column B: Metadata panel in JetBrains Mono */}
          <aside className="lg:col-span-4">
            <div className="card-paper">
              <h2 className="typ-label-mono text-xs uppercase text-primary border-b border-surface-container-low pb-3 mb-4">
                CORE_METADATA
              </h2>

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
          </aside>

        </div>

      </div>
    </div>
  );
}
