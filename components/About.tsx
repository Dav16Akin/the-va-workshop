"use client";

import { Camera, Users } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

const TEAM_PLACEHOLDER = [
  { name: "Team Member", role: "VA Trainer & Coach" },
  { name: "Team Member", role: "Programme Coordinator" },
  { name: "Team Member", role: "Student Success Manager" },
  { name: "Team Member", role: "Community Lead" },
];

function PhotoPlaceholder({ size = 80 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 flex-col items-center justify-center rounded-full bg-mint-deep ring-4 ring-white"
      style={{ width: size, height: size }}
    >
      <Camera size={size * 0.22} weight="duotone" className="text-ink-soft" />
      <span
        className="mt-0.5 font-semibold text-ink-soft/60"
        style={{ fontSize: Math.max(8, size * 0.09) }}
      >
        Photo coming
      </span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            The people behind <span className="text-accent">the workshop.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
            <div className="flex flex-col gap-8 rounded-[calc(2rem-0.375rem)] bg-white p-8 md:flex-row md:p-10">
              <div className="flex shrink-0 flex-col items-center gap-2.5">
                <PhotoPlaceholder size={160} />
                <span className="text-xs font-semibold text-ink-soft/60">
                  Photo to follow
                </span>
              </div>
              <div className="min-w-[260px] flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-extrabold tracking-tight">Anjy</h3>
                  <span className="rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent-deep">
                    Founder
                  </span>
                </div>
                <div className="mt-5 rounded-2xl bg-ink/5 p-8 text-center">
                  <p className="text-sm font-bold text-ink-soft">Bio coming soon</p>
                  <p className="mt-1 text-xs text-ink-soft/60">
                    (Content to be provided by Anjy)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 text-center" >
          <div id="team" className="scroll-mt-28">
            <h3 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight">
              <Users size={20} weight="duotone" className="text-accent-deep" />
              Meet the team
            </h3>
            <p className="mt-2 text-sm font-medium text-ink-soft">
              Photos and names to follow, content coming soon.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_PLACEHOLDER.map((member, i) => (
            <Reveal key={member.role} delay={i * 0.06}>
              <article className="h-full rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
                <div className="h-full rounded-[calc(2rem-0.375rem)] bg-white p-7 text-center">
                  <div className="flex justify-center">
                    <PhotoPlaceholder size={80} />
                  </div>
                  <p className="mt-4 text-sm font-extrabold tracking-tight">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-accent-deep">
                    {member.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
