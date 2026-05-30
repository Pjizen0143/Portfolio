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
      {" "}
      <div className="mx-auto max-w-280 px-5 sm:px-8">
        ```
        {/* Section Header */}
        <header className="border-b border-surface-container-low pb-6 mb-10">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
            Chapter 03 / Education & Profile
          </div>

          <h2 className="typ-h1 text-primary">Academic Background</h2>

          <p className="typ-body-lg text-on-surface-variant mt-2 max-w-2xl">
            A brief overview of my education, interests, and current learning
            focus.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-8">
            <h3 className="typ-h2 text-primary border-b border-surface-container-low pb-2 mb-6">
              Education
            </h3>

            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-surface-container-low">
              {/* University */}
              <div className="relative pl-8">
                <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary -translate-x-1/2"></span>

                <div className="typ-label-mono text-xs text-on-surface-variant">
                  2023 — PRESENT
                </div>

                <h4 className="typ-body-lg font-bold text-primary mt-1">
                  Computer Engineering
                </h4>

                <p className="typ-body-md text-on-surface-variant mt-1">
                  Rangsit University
                </p>

                <p className="typ-body-md text-on-surface-variant mt-1">
                  Expected Graduation: 2027
                </p>

                <p className="typ-body-md text-on-surface-variant mt-1">
                  GPA: 3.46 / 4.00
                </p>
              </div>

              {/* High School */}
              <div className="relative pl-8">
                <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary/50 -translate-x-1/2"></span>

                <div className="typ-label-mono text-xs text-on-surface-variant">
                  2020 — 2023
                </div>

                <h4 className="typ-body-lg font-bold text-primary mt-1">
                  Science & Mathematics Program
                </h4>

                <p className="typ-body-md text-on-surface-variant mt-1">
                  Angthong Pitthamaroj Witthayakhom School
                </p>
              </div>
            </div>
          </div>

          {/* Profile Sidebar */}
          <div className="lg:col-span-4">
            <div className="card-paper">
              <h3 className="typ-label-mono text-xs uppercase text-primary border-b border-surface-container-low pb-3 mb-4">
                PROFILE_DATA
              </h3>

              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">
                    NAME
                  </span>

                  <span className="typ-body-md text-primary mt-1 font-semibold">
                    Thanaphat Poolthrap
                  </span>
                </li>

                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">
                    ROLE
                  </span>

                  <span className="typ-body-md text-primary mt-1 font-semibold">
                    Computer Engineering Student
                  </span>
                </li>

                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">
                    GPA
                  </span>

                  <span className="typ-body-md text-primary mt-1 font-semibold">
                    3.46 / 4.00
                  </span>
                </li>

                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">
                    INTERESTS
                  </span>

                  <span className="typ-body-md text-primary mt-1 font-semibold">
                    Software Engineering, Backend Development
                  </span>
                </li>

                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">
                    CURRENT STACK
                  </span>

                  <span className="typ-body-md text-primary mt-1 font-semibold">
                    Flutter, FastAPI, PostgreSQL
                  </span>
                </li>

                <li className="flex flex-col">
                  <span className="typ-label-mono text-[10px] text-on-surface-variant uppercase">
                    LOCATION
                  </span>

                  <span className="typ-body-md text-primary mt-1 font-semibold">
                    Pathum Thani, Thailand
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/about">
            <Button
              variant="secondary"
              className="px-8 py-3.5 uppercase tracking-wider text-xs font-bold font-mono"
            >
              VIEW_FULL_PROFILE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
