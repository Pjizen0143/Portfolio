import React from "react";
import Button from "../ui/Button";
import GithubIcon from "../ui/GithubIcon";

export default function Footer() {
  // Use user's current metadata local date: 2026-05-30
  const lastUpdated = "2026-05-30";

  return (
    <footer className="w-full bg-background border-t-2 border-surface-container-highest mt-auto">
      {/* Centered container following spec-sheet max-width of 1120px */}
      <div className="mx-auto max-w-280 px-5 py-8 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Metadata & Copyright (JetBrains Mono) */}
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-wider">
            © 2026 TEMPURA. ALL RIGHTS RESERVED.
          </div>
          <div className="typ-label-mono text-[10px] text-on-surface-variant/70">
            SYSTEM_STATUS: LOGGED // LAST_UPDATE: {lastUpdated}
          </div>
        </div>

        {/* Right Side: Primary Button linking to GitHub */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Pjizen0143/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="secondary"
              className="text-[11px] uppercase py-1.5 px-4 rounded tracking-wider shadow-sm transition-all flex items-center gap-2 hover:bg-primary hover:text-on-primary"
            >
              {/* Sleek SVG Github Mark outline */}
              <GithubIcon className="w-4 h-4 fill-current" />
              VIEW_ON_GITHUB
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
