import type { Metadata } from "next";
import localFont from "next/font/local";

// Fonts are self-hosted in app/fonts (OFL, from Google Fonts) so dev and
// builds never depend on reaching fonts.gstatic.com.
import MotionProvider from "@/components/designs/d4/MotionProvider";
import "@/components/designs/d4/d4.css";

// PP Neue Montreal substitute: one family covers captions to display.
const hanken = localFont({
  src: "../../fonts/hanken-grotesk-var.woff2",
  weight: "100 900",
  variable: "--font-d4",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Design 4 - Warm Guide | The VA Workshop",
  description:
    "Live VA training, hirable career assets and a community of virtual assistants growing together.",
};

export default function Design4Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${hanken.variable} d4-root min-h-dvh antialiased`}>
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
