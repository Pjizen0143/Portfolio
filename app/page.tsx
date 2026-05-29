"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "ApexTask Planner",
    description: "A gorgeous, highly-interactive, responsive dashboard workspace designed for modern workflow productivity. Built entirely on a custom lightweight design system.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS v4"],
    link: "#",
    category: "Software Tooling"
  },
  {
    title: "Editorial Portfolio",
    description: "An elegant, publication-inspired digital index for showcasing architectural projects, technical manuscripts, and software design principles.",
    tags: ["React 19", "CSS Variables", "Minimalism"],
    link: "#",
    category: "Web Experience"
  },
  {
    title: "Syntax Grammar Engine",
    description: "A lightweight abstract syntax tree parser written in TypeScript that styles and highlights raw markdown logs into formatted structural journals.",
    tags: ["TypeScript", "Parser", "AST"],
    link: "#",
    category: "Developer Tool"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-200">
      
      {/* 1. Hero Section (Index Chapter) */}
      <section 
        id="index" 
        className="mx-auto max-w-280 px-5 pt-12 pb-10 sm:px-8 sm:pt-16 min-h-[65vh] flex flex-col justify-center"
      >
        <div className="max-w-4xl">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">
            SYSTEM_INIT // ROOT_DIRECTORY
          </div>
          
          <h1 className="typ-display text-primary leading-tight mb-2">
            Thanaphat Poolthrap's<br />
          </h1>
          <h2 className="typ-h2 text-on-surface-variant ml-2 mb-6">Software Engineer
          </h2>

          <p className="typ-body-lg text-on-background leading-relaxed max-w-2xl mb-8">
            I am a digital architect and software builder dedicated to front-end craftsmanship. 
            I build digital surfaces that prioritize reading rhythm, negative space, and typographic authority—relying on content over ornamentation.
          </p>
        </div>
      </section>

      {/* 2. Projects Section (Registry Chapter) */}
      <section 
        id="projects" 
        className="border-t-2 border-surface-container-low bg-surface-container-lowest/30 py-14 sm:py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-280 px-5 sm:px-8">
          
          {/* Section Header */}
          <header className="border-b border-surface-container-low pb-6 mb-10">
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
              Chapter 01 / Selected Works
            </div>
            <h2 className="typ-h1 text-primary">
              Projects Registry
            </h2>
            <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
              A compiled log of software tools, modular systems, and minimal digital surfaces built with structural intent.
            </p>
          </header>

          {/* Projects Registry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, idx) => (
              <article 
                key={idx}
                className="card-paper flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-surface-container-low pb-3">
                    <span className="typ-label-mono text-[11px] text-on-surface-variant uppercase">
                      [{project.category}]
                    </span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="typ-h2 mb-3 text-primary">
                    {project.title}
                  </h3>

                  <p className="typ-body-md text-on-surface-variant mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip-mono text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    className="btn-secondary w-full text-center py-2"
                  >
                    VIEW_SOURCE_CODE
                  </a>
                </div>
              </article>
            ))} 
          </div>

          {/* View All Projects Button Link */}
          <div className="flex justify-center mt-12">
            <Link href="/projects">
              <Button variant="primary" className="px-8 py-3.5 uppercase tracking-wider text-xs font-bold font-mono">
                VIEW_ALL_PROJECTS
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Info Section (Curriculum Chapter) */}
      <section 
        id="info" 
        className="border-t-2 border-surface-container-low py-14 sm:py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-280 px-5 sm:px-8">
          
          {/* Section Header */}
          <header className="border-b border-surface-container-low pb-6 mb-10">
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
              Chapter 02 / Professional Log
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

    </div>
  );
}