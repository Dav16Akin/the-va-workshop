"use client";

import { useState } from "react";
import Link from "next/link";
import { CaretRight, X } from "@phosphor-icons/react";
import { COHORT } from "@/lib/home-content";

export default function Announcement() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative flex min-h-10 items-center justify-center bg-[var(--d5-blue-deep)] px-12 py-2 text-center text-[13px] font-light text-white">
      <Link
        href="/register"
        className="d5-focus group inline-flex items-center gap-1.5 rounded-md"
      >
        Registration is open for the {COHORT.month} cohort
        <CaretRight
          size={12}
          weight="bold"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => setOpen(false)}
        className="d5-focus absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-white/85 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={14} weight="bold" />
      </button>
    </div>
  );
}
