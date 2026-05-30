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
  status: string;
  confidential?: boolean;
  image?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "PFi - Personal Finance Tracker",
    description:
      "A full-stack personal finance management application featuring authentication, user management, multi-language support, theme switching, and a containerized development workflow.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
    link: "https://github.com/Pjizen0143/PFi",
    category: "Full Stack Application",
    status: "STATUS: PRODUCTION // ONLINE",
    image: "/PFi.png",
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
    status: "STATUS: CLASSIFIED // ENCRYPTED",
    confidential: true,
  },
];

export default function ProjectsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeProject = PROJECTS_DATA[activeIdx];

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
            An interactive console presentation showcasing core tools, modular systems, and digital surfaces built with structural intent.
          </p>
        </header>

        {/* Presentation Console Dashboard */}
        <div className="w-full border-2 border-surface-container-highest rounded-lg bg-surface-container-lowest overflow-hidden shadow-md flex flex-col">
          
          {/* Dashboard Control Bar */}
          <div className="w-full border-b border-surface-container-highest px-4 py-3 flex items-center justify-between bg-surface-container-lowest/80 backdrop-blur-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary/80 inline-block animate-pulse"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest inline-block"></span>
              <span className="typ-label-mono text-[10px] text-on-surface-variant/80 ml-2 tracking-widest uppercase">
                PROJECT_REGISTRY_CONSOLE // DECK_MODE
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 typ-label-mono text-[9px] text-on-surface-variant/60">
              <span>SYSTEM: OK</span>
              <span>INDEX_SIZE: {PROJECTS_DATA.length}</span>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Column: Interactive Selector & Metadata Control Panel */}
            <div className="lg:col-span-5 border-r-0 lg:border-r border-surface-container-highest flex flex-col justify-between">
              
              {/* Tab Selector Links */}
              <div className="w-full border-b border-surface-container-highest/60 flex flex-wrap bg-surface-container-lowest/50">
                {PROJECTS_DATA.map((proj, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`flex-1 min-w-[120px] py-3.5 px-4 font-mono text-[11px] uppercase tracking-wider text-center border-r border-b lg:border-b-0 border-surface-container-highest/60 transition-all select-none cursor-pointer ${
                        isActive
                          ? "bg-surface-container-low text-primary border-t-2 border-t-primary border-r-surface-container-highest font-bold"
                          : "text-on-surface-variant/70 hover:text-primary hover:bg-surface-container-low/20"
                      }`}
                    >
                      {`0${idx + 1} / ${proj.title.split(" ")[0]}.sys`}
                    </button>
                  );
                })}
              </div>

              {/* Active Project Metadata Display Panel */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between animate-fade-in" key={activeIdx}>
                <div>
                  {/* Category and System Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="typ-label-mono text-[10px] text-primary uppercase border border-primary/20 px-2 py-0.5 rounded bg-primary/5">
                      {activeProject.category}
                    </span>
                    <span className="typ-label-mono text-[10px] text-on-surface-variant/70 flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full inline-block ${activeProject.confidential ? "bg-error animate-pulse" : "bg-primary animate-pulse"}`}></span>
                      {activeProject.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="typ-h1 text-on-background mb-4 font-bold tracking-tight">
                    {activeProject.title}
                  </h3>

                  {/* Description */}
                  <p className="typ-body-md text-on-surface-variant mb-6 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="chip-mono text-[9px] font-mono tracking-wider py-0.5 px-2.5 bg-surface-container-low border border-surface-container-highest text-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Action Buttons */}
                  {activeProject.confidential ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="btn-secondary w-full text-center py-3 cursor-pointer font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-error hover:text-on-error hover:border-error transition-all duration-300 shadow-xs"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                      </svg>
                      DECRYPT_PROJECT_LOG
                    </button>
                  ) : (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full text-center py-3 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 0 0-5.25 5.25v3a.75.75 0 0 1-1.5 0v-3A6.75 6.75 0 0 1 9 5.25h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                      ACCESS_SOURCE_CODE
                    </a>
                  )}
                </div>

              </div>

            </div>

            {/* Right Column: Viewport Simulation & Screen Deck */}
            <div className="lg:col-span-7 bg-surface-container-lowest/40 p-4 sm:p-6 flex items-center justify-center">
              
              <div className="w-full max-w-2xl border-2 border-surface-container-highest rounded-md overflow-hidden bg-surface-container-lowest shadow-level-1 flex flex-col animate-fade-in" key={activeIdx}>
                
                {/* Browser Viewport Header simulation */}
                <div className="border-b border-surface-container-highest px-3 py-2 flex items-center bg-surface-container-low select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error/70 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest inline-block"></span>
                  </div>
                  <div className="mx-auto w-3/5 bg-surface-container-lowest rounded border border-surface-container-highest/60 text-center py-0.5 text-[8px] font-mono text-on-surface-variant/60 tracking-wider truncate">
                    HTTP://LOCALHOST:3000/PORTFOLIO/PREVIEW/{activeProject.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.sys
                  </div>
                </div>

                {/* Viewport Body Content */}
                <div className="relative w-full h-[280px] sm:h-[350px] overflow-hidden bg-surface-container-lowest flex items-center justify-center select-none group">
                  
                  {activeProject.image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={activeProject.image}
                        alt={`${activeProject.title} Preview Screenshot`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Interactive cyberpunk HUD overlay lines */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-all duration-500"></div>
                      <div className="absolute top-2 left-2 bg-black/75 px-2 py-0.5 rounded border border-primary/20 text-[8px] font-mono text-primary uppercase tracking-widest opacity-80 pointer-events-none">
                        CAM_FEED_01 // SECURE_DEV
                      </div>
                    </div>
                  ) : (
                    /* Confidential LOCK visual screen */
                    <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center p-6 text-center border border-error/20">
                      
                      {/* Scanning HUD Overlay Line */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-error/30 animate-pulse pointer-events-none"></div>

                      <div className="mb-4 text-error p-3 rounded-full border border-error/20 bg-error/5 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 animate-pulse">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                      </div>

                      <div className="typ-label-mono text-xs text-error font-bold tracking-widest uppercase mb-2">
                        [ SECURITY DECRYPT LOCK ]
                      </div>
                      
                      <div className="typ-label-mono text-[9px] text-on-surface-variant/80 max-w-sm leading-normal font-mono mb-6 uppercase">
                        RESTRICTED DIRECTORY LOG // EXCLUSIVITY CLEARANCE 00-L3 REQUESTED BY DEV_ADMIN
                      </div>

                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="font-mono text-[10px] text-error border border-error/30 hover:bg-error hover:text-white transition-all py-1.5 px-5 rounded tracking-widest uppercase cursor-pointer"
                      >
                        REQUEST CLEARANCE
                      </button>
                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* View All Projects Button Link */}
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button
              variant="primary"
              className="px-8 py-3.5 uppercase tracking-wider text-xs font-bold font-mono shadow-xs active:scale-98 transition-all hover:bg-primary/95"
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
