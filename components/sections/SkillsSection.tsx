"use client";

import {
  Code2,
  Database,
  Server,
  Wrench,
  Terminal,
  Hash,
  Target,
  Coffee,
  Braces,
  Smartphone,
  Zap,
  Globe,
  GitBranch,
  Cpu,
  Layers,
  Brain,
  Boxes,
  TestTubes,
  Webhook,
} from "lucide-react";

const skillIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  // Languages
  Python: Terminal,
  "C#": Hash,
  Dart: Target,
  Java: Coffee,
  "C/C++": Braces,
  SQL: Database,

  // Frameworks & Technologies
  Flutter: Smartphone,
  FastAPI: Zap,
  "REST API": Globe,
  PostgreSQL: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  Docker: Boxes,
  "Docker Compose": Boxes,

  // Areas of Interest
  "Software Engineering": Cpu,
  "Backend Development": Server,
  "System Design": Layers,
  "Problem Solving": Brain,
  "Full-Stack Development": Layers,

  // Currently Exploring
  "Clean Architecture": Boxes,
  Testing: TestTubes,
  "API Design": Webhook,
};

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    description:
      "Programming languages I use for coursework, problem solving, and software development.",
    skills: ["Python", "C#", "Dart", "Java", "C/C++", "SQL"],
  },
  {
    icon: Server,
    title: "Frameworks & Technologies",
    description:
      "Frameworks and technologies used in my personal and academic projects.",
    skills: [
      "Flutter",
      "FastAPI",
      "REST API",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    icon: Database,
    title: "Areas of Interest",
    description: "Topics I enjoy learning and continuously improving.",
    skills: [
      "Software Engineering",
      "Backend Development",
      "System Design",
      "Problem Solving",
      "Full-Stack Development",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t-2 border-surface-container-low bg-surface-container-lowest/30 py-14 sm:py-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-280 px-5 sm:px-8">
        {/* Header */}
        <header className="border-b border-surface-container-low pb-6 mb-10">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Chapter 01 / Skills & Technologies
          </div>

          <h2 className="typ-h1 text-primary">Skills & Technologies</h2>

          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
            Technologies and tools I use for building software, learning new
            concepts, and developing personal projects.
          </p>
        </header>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="
              card-paper
              hover:shadow-md
              hover:scale-[1.01]
              transition-all
              duration-300
            "
              >
                <div className="flex items-center gap-3 mb-4 border-b border-surface-container-low pb-3">
                  <Icon size={20} className="text-primary shrink-0" />

                  <h3 className="typ-body-lg font-semibold text-primary">
                    {group.title}
                  </h3>
                </div>

                <p className="typ-body-md text-on-surface-variant leading-relaxed mb-6">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    return (
                      <span
                        key={skill}
                        className="
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-1.5
                      rounded-full
                      bg-surface-container-low
                      text-on-background
                      text-sm
                      border
                      border-surface-container
                      transition-all
                      duration-200
                      hover:border-primary/50
                      hover:bg-surface-container
                      hover:text-primary
                      group
                    "
                      >
                        {SkillIcon && (
                          <SkillIcon
                            size={14}
                            className="text-on-surface-variant group-hover:text-primary transition-colors duration-200"
                          />
                        )}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* Additional Tools */}
        <div className="mt-10 card-paper">
          <div className="flex items-center gap-3 mb-4 border-b border-surface-container-low pb-3">
            <Wrench size={20} className="text-primary" />

            <h3 className="typ-body-lg font-semibold text-primary">
              Currently Exploring
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Clean Architecture",
              "System Design",
              "Testing",
              "API Design",
            ].map((item) => {
              const SkillIcon = skillIcons[item];
              return (
                <span
                  key={item}
                  className="
                flex
                items-center
                gap-1.5
                px-3
                py-1.5
                rounded-full
                bg-surface-container-low
                text-sm
                border
                border-surface-container
                transition-all
                duration-200
                hover:border-primary/50
                hover:bg-surface-container
                hover:text-primary
                group
              "
                >
                  {SkillIcon && (
                    <SkillIcon
                      size={14}
                      className="text-on-surface-variant group-hover:text-primary transition-colors duration-200"
                    />
                  )}
                  <span>{item}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
