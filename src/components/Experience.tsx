"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Rotasi Galaksi Teknologi (Rogatekno)",
    date: "Apr 2023 - Present",
    achievements: [
      "Designed and delivered end-to-end mobile solutions from initial requirements through production release across multiple client projects.",
      "Built scalable mobile applications using React Native (TypeScript, Zustand, TanStack Query, Firebase) and Flutter with BLoC architecture, emphasizing clean separation of concerns and long-term maintainability.",
      "Implemented robust state management patterns to support complex user flows and evolving business requirements.",
      "Managed entire deployments, including versioning, release preparation, and App Store review coordination to ensure on-time delivery."
    ]
  },
  {
    role: "Frontend Engineer",
    company: "Orbit Tech Solutions",
    date: "Aug 2024 - Jul 2025",
    achievements: [
      "Led development of production web and mobile applications, translating product requirements into scalable, maintainable frontend architecture.",
      "Architected and implemented complex UI flows using Next.js, React, React Native, TypeScript, Zustand, and TanStack Query, ensuring performance and state consistency across platforms.",
      "Owned the entire mobile release lifecycle (build, signing, CI/CD, store submission, and release management).",
      "Acted as a key frontend counterpart to backend and product teams, proactively shaping API contracts and refining feature scope to meet business goals."
    ]
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-8 md:px-16 lg:px-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl mb-16"
        >
          Experience
        </motion.h2>

        <div className="border-t border-neutral-200">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-neutral-200"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between text-left group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4 lg:gap-6">
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-neutral-500 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-neutral-400 hidden md:block mt-1">—</span>
                  <span className="text-lg text-neutral-500 mt-0.5">{exp.company}</span>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0">
                  <span className="text-sm font-light text-neutral-400 tracking-wider whitespace-nowrap">
                    {exp.date}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-8 pl-4 space-y-3 text-neutral-600 font-light list-disc">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
