"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "React Native", "Flutter", "Node.js"
];

export default function SkillsMarquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-neutral-100 bg-neutral-50 py-6 md:py-8 z-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <span key={index} className="text-xl md:text-3xl text-neutral-800 px-8 font-light tracking-wide flex items-center gap-8">
            {skill}
            <span className="text-neutral-300">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
