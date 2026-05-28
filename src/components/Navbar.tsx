"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. If we are near the absolute top, active must be home
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      // 2. Check if we've scrolled near the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // 3. Otherwise detect using viewport bounds
      const sections = ["home", "works", "experience"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is in the upper half of the viewport
          if (rect.top <= 240 && rect.bottom > 240) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to set correct state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);

    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (targetId === "contact") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const absoluteTop = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: absoluteTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className={`flex items-center gap-1 border px-3 py-2 rounded-full shadow-sm transition-all duration-500 ${
        activeSection === "contact"
          ? "bg-neutral-950 border-neutral-800"
          : "bg-white/70 backdrop-blur-md border-neutral-200/50"
      }`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full isolate ${
                isActive
                  ? "text-neutral-900"
                  : activeSection === "contact"
                    ? "text-white/60 hover:text-white"
                    : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className={`absolute inset-0 rounded-full -z-10 ${
                    activeSection === "contact" ? "bg-white" : "bg-neutral-100"
                  }`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
