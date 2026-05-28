"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { BrowserFrame, PhoneFrame, WebMobileFrame } from "@/components/DeviceFrames";

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalProjects = projectsData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, activeIndex]);

  const getCardVariants = (index: number) => {
    const diff = (index - activeIndex + totalProjects) % totalProjects;
    
    if (diff === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        zIndex: 20,
      };
    } else {
      return {
        x: 48,
        y: 20,
        scale: 0.92,
        rotate: 4,
        opacity: 0.35,
        zIndex: 10,
      };
    }
  };

  const activeProject = projectsData[activeIndex];

  return (
    <div 
      className="w-full flex flex-col items-center lg:items-start gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Stack Area */}
      <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center select-none">
        {projectsData.map((project, index) => {
          const isActive = index === activeIndex;
          const variants = getCardVariants(index);

          return (
            <motion.div
              key={project.slug}
              animate={variants}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="absolute w-full h-full flex items-center justify-center origin-bottom-right"
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="w-full h-full relative flex justify-center items-center cursor-pointer overflow-visible"
              >
                {isActive && (
                  <motion.div 
                    layoutId="slideshow-glow"
                    className="absolute -inset-4 bg-neutral-100/50 rounded-2xl -z-10 blur-xl opacity-60"
                    transition={{ duration: 0.8 }}
                  />
                )}
                
                {project.type === "web-only" && (
                  <BrowserFrame title={project.title} image={project.image} index={index} />
                )}
                {project.type === "mobile-only" && (
                  <div className="h-full flex items-center justify-center p-4">
                    <PhoneFrame title={project.title} image={project.image} />
                  </div>
                )}
                {project.type === "web-mobile" && (
                  <WebMobileFrame title={project.title} image={project.image} mobileImage={project.mobileImage} index={index} />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Info & Controls Panel */}
      <div className="w-full max-w-[440px] space-y-4">
        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-neutral-100 rounded-full overflow-hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "0%" : "100%" }}
            transition={{
              duration: isHovered ? 0 : 6,
              ease: "linear",
            }}
            className="absolute top-0 left-0 h-full bg-neutral-800"
          />
        </div>

        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1.5 flex-1 min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                    0{activeIndex + 1} &mdash; 0{totalProjects}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-neutral-200 px-2 py-0.5 rounded-full font-sans">
                    {activeProject.type === "web-only" ? "Web App" : activeProject.type === "mobile-only" ? "Mobile App" : "Web & Mobile"}
                  </span>
                </div>
                
                <h3 className="text-lg font-medium">
                  <Link 
                    href={`/projects/${activeProject.slug}`}
                    className="hover:text-neutral-500 transition-colors inline-flex items-center gap-1.5"
                  >
                    {activeProject.title}
                    <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                </h3>
                
                <p className="text-xs text-neutral-500 line-clamp-2 font-light leading-relaxed">
                  {activeProject.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={prevSlide}
              className="p-2 border border-neutral-200 hover:border-neutral-900 rounded-full hover:bg-neutral-50 active:bg-neutral-100 transition-all duration-300 group cursor-pointer animate-none"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-500 group-hover:text-neutral-950 transition-colors" strokeWidth={1.5} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-neutral-200 hover:border-neutral-900 rounded-full hover:bg-neutral-50 active:bg-neutral-100 transition-all duration-300 group cursor-pointer animate-none"
              aria-label="Next Project"
            >
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-950 transition-colors" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
