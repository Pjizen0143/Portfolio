import React from "react";
import Button from "../ui/Button";

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
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              VIEW_ON_GITHUB
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
