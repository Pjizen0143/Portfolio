"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ConfidentialProjectModal from "@/components/shared/ConfidentialProjectModal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
  confidential?: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "PFi - Personal Finance Tracker",
    description:
      "A full-stack personal finance management application featuring authentication, user management, multi-language support, theme switching, and a containerized development workflow.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
    link: "https://github.com/Pjizen0143/PFi",
    category: "Full Stack Application",
  },
  {
    title: "Cat Food Detector",
    description:
      "A computer vision system running on Jetson Orin Nano that detects cat food using AI-powered image processing and edge-device deployment techniques.",
    tags: [
      "Python",
      "Computer Vision",
      "Jetson Orin Nano",
      "AI",
      "Embedded Systems",
    ],
    link: "#",
    category: "Computer Vision",
    confidential: true,
  },
];

export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="projects"
      className="border-t-2 border-surface-container-low bg-surface-container-lowest/30 py-14 sm:py-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-280 px-5 sm:px-8">
        {/* Section Header */}
        <header className="border-b border-surface-container-low pb-6 mb-10">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Chapter 02 / Selected Works
          </div>
          <h2 className="typ-h1 text-primary">Projects Registry</h2>
          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
            A compiled log of software tools, modular systems, and minimal
            digital surfaces built with structural intent.
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

                <h3 className="typ-h2 mb-3 text-primary">{project.title}</h3>

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

                {project.confidential ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-secondary w-full text-center py-2 cursor-pointer font-mono"
                  >
                    CONFIDENTIAL_PROJECT
                  </button>
                ) : (
                  <a
                    href={project.link}
                    className="btn-secondary w-full text-center py-2"
                  >
                    VIEW_SOURCE_CODE
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects Button Link */}
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button
              variant="primary"
              className="px-8 py-3.5 uppercase tracking-wider text-xs font-bold font-mono"
            >
              VIEW_ALL_PROJECTS
            </Button>
          </Link>
        </div>
      </div>

      <ConfidentialProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
