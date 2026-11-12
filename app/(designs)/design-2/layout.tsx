import type { Metadata } from "next";
import localFont from "next/font/local";

// Fonts are self-hosted in app/fonts (OFL, from Google Fonts) so dev and
// builds never depend on reaching fonts.gstatic.com.
import "@/components/designs/d2/d2.css";

const inter = localFont({
  src: "../../fonts/inter-var.woff2",
  weight: "100 900",
  variable: "--font-d2-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const serif = localFont({
  src: "../../fonts/source-serif-4-400.woff2",
  weight: "400",
  variable: "--font-d2-serif",
  display: "swap",
  fallback: ["ui-serif", "Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Design 2 - Notion | The VA Workshop",
  description:
    "Design exploration 2: a warm paper-notebook take on The VA Workshop homepage.",
};

export default function Design2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${inter.variable} ${serif.variable} d2-root min-h-dvh antialiased`}
    >
      {children}
    </div>
  );
}
