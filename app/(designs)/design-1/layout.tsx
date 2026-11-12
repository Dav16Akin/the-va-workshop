import type { Metadata } from "next";
import localFont from "next/font/local";

// Fonts are self-hosted in app/fonts (OFL, from Google Fonts) so dev and
// builds never depend on reaching fonts.gstatic.com.
import { MotionShell } from "@/components/designs/d1/MotionShell";
import "@/components/designs/d1/d1.css";

const sans = localFont({
  src: "../../fonts/inter-var.woff2",
  weight: "100 900",
  variable: "--font-d1-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "../../fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-d1-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});

const serif = localFont({
  src: "../../fonts/adamina-400.woff2",
  weight: "400",
  variable: "--font-d1-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Design 1 - Ledger | The VA Workshop",
  description:
    "Design exploration 1: an editorial, photography-led take on The VA Workshop homepage.",
};

export default function Design1Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${sans.variable} ${mono.variable} ${serif.variable} d1-root min-h-dvh antialiased`}
    >
      <MotionShell>{children}</MotionShell>
    </div>
  );
}
