import { Certificate, PlayCircle, UsersThree, Clock } from "@phosphor-icons/react/dist/ssr";
import { NumberTicker } from "@/components/ui/number-ticker";

const BADGES = [
  { icon: UsersThree, value: 300, suffix: "+", label: "VAs in the community" },
  { icon: Clock, value: 6, suffix: "", label: "Week live cohorts" },
  { icon: PlayCircle, text: "Recorded", label: "Every class, for replay" },
  { icon: Certificate, text: "Certified", label: "On completion" },
];

export default function Trust() {
  return (
    <section aria-label="Programme highlights" className="bg-[var(--d5-canvas)] px-5 pb-24 md:px-10">
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {BADGES.map((b) => (
          <li
            key={b.label}
            className="flex items-center gap-4 rounded-[20px] border border-[rgb(244_247_252/0.22)] px-5 py-4"
          >
            <b.icon size={22} weight="thin" className="shrink-0 text-[var(--d5-lav)]" aria-hidden />
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-d5-display)] text-xl font-medium leading-none tracking-tight text-[var(--d5-text)]">
                {"value" in b && b.value !== undefined ? (
                  <>
                    <NumberTicker
                      value={b.value}
                      className="tracking-tight text-[var(--d5-text)] dark:text-[var(--d5-text)]"
                    />
                    {b.suffix}
                  </>
                ) : (
                  b.text
                )}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-[var(--d5-mist)]">{b.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
