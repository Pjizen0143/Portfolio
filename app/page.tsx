"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import InfoSection from "@/components/sections/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-200">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <InfoSection />
    </div>
  );
}
