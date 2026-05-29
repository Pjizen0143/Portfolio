"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TerminalLabel from "../ui/TerminalLabel";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("index");
  const pathname = usePathname();

  // Scroll Spy: Tracks active viewport section on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Checks the upper-third focal point of viewport

      const indexEl = document.getElementById("index");
      const projectsEl = document.getElementById("projects");
      const infoEl = document.getElementById("info");

      if (infoEl && scrollPosition >= infoEl.offsetTop) {
        setActiveSection("info");
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("index");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger on initial mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Checks if a navigation item is active
  const isLinkActive = (sectionId: string, path: string) => {
    if (pathname === "/") {
      return activeSection === sectionId;
    }
    return pathname === path;
  };

  return (
    <nav className="w-full bg-background/95 backdrop-blur-md border-b-2 border-surface-container-highest sticky top-0 z-50 transition-all duration-200">
      
      {/* Centered container following spec-sheet max-width of 1120px */}
      <div className="mx-auto max-w-280 px-5 py-4 sm:px-8 flex items-center justify-between relative">
        
        {/* Column 1: Left - Terminal Branding click to '/' */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/#index" className="flex items-center gap-3 group" aria-label="Go to homepage">
            {/* Modular Terminal Icon & Label Component */}
            <TerminalLabel />
          </Link>
        </div>

        {/* Column 2: Middle - Index, Projects, Info Scroll Anchors (Hidden on small screens) */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16">
          <Link 
            href="/#index" 
            className={`typ-label-mono text-xs uppercase tracking-wider relative py-1 transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all duration-300 ${
              isLinkActive("index", "/")
                ? "text-primary font-bold after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
          >
            Index
          </Link>
          <Link 
            href="/#projects" 
            className={`typ-label-mono text-xs uppercase tracking-wider relative py-1 transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all duration-300 ${
              isLinkActive("projects", "/projects")
                ? "text-primary font-bold after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/#info" 
            className={`typ-label-mono text-xs uppercase tracking-wider relative py-1 transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all duration-300 ${
              isLinkActive("info", "/info")
                ? "text-primary font-bold after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
          >
            Info
          </Link>
        </div>

        {/* Column 3: Right - Theme Switcher, Contact & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* Theme Switching Component */}
          <ThemeToggle />

          {/* Contact Button (Remains constant across all screens) */}
          <Link href="/contact" className="z-10">
            <Button 
              variant={pathname === "/contact" ? "primary" : "secondary"}
              className="text-[11px] uppercase py-1.5 px-4 rounded tracking-wider shadow-sm whitespace-nowrap hover:bg-primary hover:text-on-primary"
            >
              Contact
            </Button>
          </Link>

          {/* Minimalist Mobile Menu Symbol Toggle - visible on < md screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded hover:bg-surface-container-low active:scale-95 transition-all text-primary select-none cursor-pointer"
            aria-label="Toggle Navigation Drawer"
            aria-expanded={isOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2.25" 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform duration-200"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6h16.5" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer (Dropdown list on small screens) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container-lowest border-b border-surface-container-highest shadow-level-1 py-6 px-6 z-40 md:hidden flex flex-col gap-4 animate-slide-in">
          <div className="typ-label-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest border-b border-surface-container-low pb-2 mb-2">
            Navigation Registry
          </div>
          
          <Link 
            href="/#index" 
            onClick={() => setIsOpen(false)}
            className={`typ-label-mono text-sm uppercase tracking-widest py-2 border-b transition-all duration-200 ${
              isLinkActive("index", "/")
                ? "text-primary font-bold border-primary border-b-2"
                : "text-on-surface-variant hover:text-primary border-surface-container-low"
            }`}
          >
            01 / INDEX
          </Link>
          <Link 
            href="/#projects" 
            onClick={() => setIsOpen(false)}
            className={`typ-label-mono text-sm uppercase tracking-widest py-2 border-b transition-all duration-200 ${
              isLinkActive("projects", "/projects")
                ? "text-primary font-bold border-primary border-b-2"
                : "text-on-surface-variant hover:text-primary border-surface-container-low"
            }`}
          >
            02 / PROJECTS
          </Link>
          <Link 
            href="/#info" 
            onClick={() => setIsOpen(false)}
            className={`typ-label-mono text-sm uppercase tracking-widest py-2 border-b transition-all duration-200 ${
              isLinkActive("info", "/info")
                ? "text-primary font-bold border-primary border-b-2"
                : "text-on-surface-variant hover:text-primary border-surface-container-low"
            }`}
          >
            03 / INFO
          </Link>
        </div>
      )}
    </nav>
  );
}
