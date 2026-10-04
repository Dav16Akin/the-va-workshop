"use client";

import { StarFour } from "@phosphor-icons/react";

const items = [
  "6-week programme",
  "Live coaching calls",
  "ATS resume & portfolio",
  "Interview prep",
  "Talent pool access",
  "Naira-priced tools",
  "Closing ceremony",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-sm font-semibold text-ink-soft md:px-8">
            {item}
          </span>
          <StarFour size={12} weight="fill" className="text-accent" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line bg-white py-4"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
