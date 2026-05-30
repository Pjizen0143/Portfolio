"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ConfidentialProjectModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConfidentialProjectModal({
  open,
  onClose,
}: ConfidentialProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Tab key handler for keyboard focus trapping inside the modal
  const handleTabKey = (e: KeyboardEvent) => {
    if (!modalRef.current) return;
    
    const focusable = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1');

    if (focusable.length === 0) return;

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift + Tab: if on the first element, go to the last
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      // Tab: if on the last element, go to the first
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (!open) return;

    // Track the active element to restore focus when modal closes
    const previousActiveElement = document.activeElement as HTMLElement | null;

    // Disable background scrolling when modal is active
    document.body.style.overflow = "hidden";

    // Focus on the first focusable element inside the modal
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        handleTabKey(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Dark semi-transparent backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content Panel */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-surface-container-lowest border-2 border-surface-container-highest rounded p-6 sm:p-8 shadow-level-1 animate-slide-in focus:outline-none transition-all duration-300 z-10"
        tabIndex={-1}
      >
        {/* Terminal Window-like Header bar */}
        <div className="flex items-center justify-between border-b border-surface-container-low pb-3 mb-6">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-error/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest inline-block"></span>
            <span className="typ-label-mono text-[10px] text-on-surface-variant/60 ml-2 uppercase tracking-widest">
              Security / Confidential_Notice
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-primary active:scale-95 transition-all text-xs font-mono select-none cursor-pointer p-1 rounded hover:bg-surface-container-low"
            aria-label="Close dialog"
          >
            [ESC]
          </button>
        </div>

        {/* Modal Title */}
        <h2 
          id="modal-title" 
          className="typ-h2 text-primary mb-4 flex items-center gap-2"
        >
          Confidential Project
        </h2>

        {/* Modal Message */}
        <div className="typ-body-md text-on-surface-variant leading-relaxed mb-8 space-y-4">
          <p>
            This project was developed as part of a company-related initiative.
          </p>
          <p>
            Due to confidentiality and intellectual property restrictions, source code and implementation details cannot be publicly disclosed.
          </p>
          <p>
            If you would like to learn more about my role, responsibilities, technical challenges, or experience working on this project, please feel free to contact me directly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 font-mono">
          <Button 
            variant="secondary" 
            onClick={onClose}
            className="uppercase text-xs tracking-wider px-5 py-2.5 order-2 sm:order-1"
          >
            CLOSE
          </Button>
          <Link 
            href="/contact" 
            onClick={onClose}
            className="order-1 sm:order-2"
          >
            <Button 
              variant="primary" 
              className="w-full uppercase text-xs tracking-wider px-5 py-2.5"
            >
              CONTACT_ME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
