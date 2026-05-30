"use client";

import React from "react";

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="border-t-2 border-surface-container-low bg-surface-container-lowest/30 py-14 sm:py-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-280 px-5 sm:px-8">
        
        {/* Section Header */}
        <header className="border-b border-surface-container-low pb-6 mb-10">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Chapter 01 / Capabilities Matrix
          </div>
          <h2 className="typ-h1 text-primary">
            Technical Expertise
          </h2>
          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
            An index of core languages, user interface frameworks, and specializations that I leverage to engineer premium digital surfaces.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Core Languages */}
          <div className="card-paper flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-surface-container-low pb-3">
                <span className="typ-label-mono text-xs uppercase text-primary font-bold">
                  01 / Core Languages
                </span>
              </div>
              
              <p className="typ-body-md text-on-surface-variant mb-6 leading-relaxed">
                Syntactic tools and static typing systems leveraged for predictable, type-safe, and robust software architectural engineering.
              </p>

              <div className="space-y-6">
                {/* Skill 1 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">TypeScript</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">95% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[95%]"></div>
                  </div>
                </div>

                {/* Skill 2 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">JavaScript (ES6+)</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">90% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[90%]"></div>
                  </div>
                </div>

                {/* Skill 3 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Rust</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">75% / Intermediate</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[75%]"></div>
                  </div>
                </div>

                {/* Skill 4 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">HTML5 & CSS3</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">95% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks & Libs */}
          <div className="card-paper flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-surface-container-low pb-3">
                <span className="typ-label-mono text-xs uppercase text-primary font-bold">
                  02 / Frameworks & Libraries
                </span>
              </div>

              <p className="typ-body-md text-on-surface-variant mb-6 leading-relaxed">
                High-level UI runtimes and layout systems used to assemble modular, performant, and responsive front-end products.
              </p>

              <div className="space-y-6">
                {/* Skill 1 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Next.js & React 19</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">95% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[95%]"></div>
                  </div>
                </div>

                {/* Skill 2 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Tailwind CSS & PostCSS</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">90% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[90%]"></div>
                  </div>
                </div>

                {/* Skill 3 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Node.js / Express</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">80% / Advanced</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[80%]"></div>
                  </div>
                </div>

                {/* Skill 4 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Svelte & WebGL</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">70% / Proficient</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties & Workflows */}
          <div className="card-paper flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-surface-container-low pb-3">
                <span className="typ-label-mono text-xs uppercase text-primary font-bold">
                  03 / Specialties & Workflows
                </span>
              </div>

              <p className="typ-body-md text-on-surface-variant mb-6 leading-relaxed">
                Strategic methodologies, performance paradigms, and dev toolings designed for rapid execution and structural perfection.
              </p>

              <div className="space-y-6">
                {/* Skill 1 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Design Systems</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">95% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[95%]"></div>
                  </div>
                </div>

                {/* Skill 2 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">CSS Architecture & Specs</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">90% / Expert</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[90%]"></div>
                  </div>
                </div>

                {/* Skill 3 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">Performance Auditing</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">85% / Advanced</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[85%]"></div>
                  </div>
                </div>

                {/* Skill 4 */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="typ-body-md text-primary font-semibold">DevOps & CI/CD (Vite/pnpm)</span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant font-medium">80% / Advanced</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500 w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
