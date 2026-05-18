"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import SelectedWorks from "@/components/SelectedWorks";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Force manual scroll restoration to block native jumps
      window.history.scrollRestoration = "manual";

      // 2. Defer scroll reset slightly to execute AFTER popstate scroll-restoration event triggers
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <main className="relative bg-background">
      <Navbar />

      {/* Content wrapper with a bottom margin equal to the footer's height */}
      <div className="relative z-10 bg-background mb-[100vh] shadow-xl">
        <Hero />
        <SkillsMarquee />
        <SelectedWorks />
        <Experience />
      </div>

      {/* Parallax Footer */}
      <div className="fixed bottom-0 left-0 w-full h-screen z-0">
        <Footer />
      </div>
    </main>
  );
}
