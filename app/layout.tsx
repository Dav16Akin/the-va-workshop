import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "The VA Workshop | Virtual Assistant Training & Career Assets",
  description:
    "Coach-led VA training, career assets, a curated talent pool and a Naira-priced storefront for Africa's virtual assistants and remote workers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
