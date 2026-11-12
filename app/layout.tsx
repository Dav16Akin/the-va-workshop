import type { Metadata } from "next";
import localFont from "next/font/local";

// Fonts are self-hosted in app/fonts (OFL, from Google Fonts) so dev and
// builds never depend on reaching fonts.gstatic.com.
import "./globals.css";

const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-var.woff2",
  weight: "200 800",
  variable: "--font-jakarta",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "The VA Workshop | Virtual Assistant Training & Career Assets",
  description:
    "Coach-led VA training, career assets, a curated talent pool and a Naira-priced storefront for Africa's virtual assistants and remote workers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
