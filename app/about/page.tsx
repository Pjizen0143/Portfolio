"use client";

import Button from "@/components/ui/Button";
import Link from "next/dist/client/link";

export default function InfoPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4 border-t-2 border-surface-container-low py-14 sm:py-16 scroll-mt-20">
      <h1 className="text-3xl font-bold">Coming Soon</h1>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </section>
  );
}
