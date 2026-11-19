// Self-hosted variable fonts (OFL). Loaded locally so dev and builds never
// depend on fonts.gstatic.com. Each design picks the variables it needs.
import localFont from "next/font/local";

export const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const geist = localFont({
  src: "./fonts/geist.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const geistMono = localFont({
  src: "./fonts/geist-mono.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const fontVariables = [inter, geist, geistMono]
  .map((f) => f.variable)
  .join(" ");
