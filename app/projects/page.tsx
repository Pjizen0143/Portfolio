"use client";

import React from "react";

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
    link: "/",
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

export default function ProjectsPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-background text-on-background px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-280">
        {/* Page Header */}
        <header className="border-b border-surface-container-low pb-8 mb-12">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Registry / Works
          </div>
          <h1 className="typ-h1 text-primary">
            Selected Projects
          </h1>
          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
            A compiled log of software tools, interactive layouts, and minimal design systems built with structural clarity.
          </p>
        </header>

        {/* Projects Registry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <article 
              key={idx}
              className="card-paper flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4 border-b border-surface-container-low pb-3">
                  <span className="typ-label-mono text-[11px] text-on-surface-variant uppercase">
                    [{project.category}]
                  </span>
                  <span className="typ-label-mono text-[10px] text-on-surface-variant">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="typ-h2 mb-3 text-primary">
                  {project.title}
                </h2>

                {/* Project Description (Literata Font) */}
                <p className="typ-body-md text-on-surface-variant mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action links */}
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

      </div>
    </div>
  );
}
