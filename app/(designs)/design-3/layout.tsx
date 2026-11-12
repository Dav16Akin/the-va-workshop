import type { Metadata } from "next";
import localFont from "next/font/local";

// Fonts are self-hosted in app/fonts (OFL, from Google Fonts) so dev and
// builds never depend on reaching fonts.gstatic.com.
import "@/components/designs/d3/d3.css";

const serif = localFont({
  src: "../../fonts/eb-garamond-400.woff2",
  weight: "400",
  variable: "--d3-serif",
  display: "swap",
  fallback: ["ui-serif", "Georgia", "serif"],
});

const sans = localFont({
  src: "../../fonts/geist-var.woff2",
  weight: "100 900",
  variable: "--d3-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Design 3 - Editorial | The VA Workshop",
  description:
    "Live VA training, hirable career assets and a community of virtual assistants growing together.",
};

export default function Design3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${serif.variable} ${sans.variable} d3-root min-h-dvh antialiased`}>
      {children}
    </div>
  );
}
