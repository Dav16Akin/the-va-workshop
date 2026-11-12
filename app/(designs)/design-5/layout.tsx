import type { Metadata } from "next";
import localFont from "next/font/local";

// Fonts are self-hosted in app/fonts (OFL, from Google Fonts) so dev and
// builds never depend on reaching fonts.gstatic.com.
import "@/components/designs/d5/d5.css";

// Space Grotesk stands in for Jokker (display); Inter variable covers Matter Thin (body, 100-300)
// and the semibold uppercase eyebrow face.
const display = localFont({
  src: "../../fonts/space-grotesk-var.woff2",
  weight: "300 700",
  variable: "--font-d5-display",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const body = localFont({
  src: "../../fonts/inter-var.woff2",
  weight: "100 900",
  variable: "--font-d5-body",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Design 5 - Midnight | The VA Workshop",
  description:
    "Live VA training, hirable career assets and a community of 300+ virtual assistants growing together.",
};

export default function Design5Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${display.variable} ${body.variable} d5-root min-h-dvh antialiased`}>
      {children}
    </div>
  );
}
