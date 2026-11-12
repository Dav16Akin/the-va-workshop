import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-shell font-sans text-ink">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
