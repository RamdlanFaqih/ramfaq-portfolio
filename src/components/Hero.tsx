"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-32 pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Greeting */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl leading-tight font-medium"
          >
            Hi, I'm Ramdlan.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-neutral-500 max-w-2xl font-light leading-relaxed"
          >
            Crafting fluid, user-centric experiences for Web & Mobile.
          </motion.p>
        </div>

        {/* Right Column: Project Slideshow (visible on desktop) */}
        <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[440px]"
          >
            <HeroSlideshow />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-8 md:left-16 lg:left-32 flex flex-col items-center gap-4"
      >
        <span className="text-xs tracking-widest uppercase text-neutral-500 rotate-90 origin-left translate-x-2 translate-y-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-neutral-500 mt-16" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
