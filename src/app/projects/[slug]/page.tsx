"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import { BrowserFrame, PhoneFrame, WebMobileFrame } from "@/components/DeviceFrames";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  // Find current project
  const currentProjectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentProjectIndex];

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
        <h1 className="text-3xl font-medium mb-4">Project Not Found</h1>
        <p className="text-neutral-500 font-light mb-8">The project you are looking for does not exist.</p>
        <Link
          href="/#works"
          className="px-6 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Back to Portfolio
        </Link>
      </main>
    );
  }

  // Find next project in the loop
  const nextProjectIndex = (currentProjectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-neutral-900 font-sans pb-32">
      {/* Dynamic Top Bar Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-neutral-100 px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between">
        <Link
          href="/#works"
          className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
          Case Study
        </span>
      </nav>

      {/* Hero Header Area */}
      <section className="pt-32 px-8 md:px-16 lg:px-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-sm font-medium uppercase tracking-wider text-neutral-400">
              {project.role}
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900">
              {project.title}
            </h1>
          </div>

          {/* Project Meta Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-neutral-200/60 mt-12">
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Client / Org</span>
              <span className="text-neutral-800 font-light">{project.client || "Freelance"}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Timeline</span>
              <span className="text-neutral-800 font-light">{project.year}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Platform</span>
              <span className="text-neutral-800 font-light">
                {project.type === "web-only" && "Web Application"}
                {project.type === "mobile-only" && "Mobile Application"}
                {project.type === "web-mobile" && "Web & Mobile"}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Core Stack</span>
              <span className="text-neutral-800 font-light truncate block" title={project.tech.join(", ")}>
                {project.tech.slice(0, 3).join(", ")}
                {project.tech.length > 3 && "..."}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Big Visual Device Showcase Banners */}
      <section className="my-16 px-8 md:px-16 lg:px-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[16/10] md:aspect-[16/9] bg-gradient-to-br from-neutral-50 to-neutral-100/50 rounded-2xl border border-neutral-200/50 shadow-sm flex items-center justify-center p-8 md:p-16 overflow-hidden relative group"
        >
          <div className="w-full h-full max-w-4xl max-h-full flex items-center justify-center overflow-visible">
            {project.type === "web-only" && (
              <div className="w-full aspect-[4/3] max-w-2xl h-auto">
                <BrowserFrame title={project.title} image={project.image} index={currentProjectIndex} />
              </div>
            )}
            {project.type === "mobile-only" && (
              <div className="h-full flex items-center">
                <PhoneFrame title={project.title} image={project.image} />
              </div>
            )}
            {project.type === "web-mobile" && (
              <div className="w-full aspect-[4/3] max-w-2xl h-auto relative">
                <WebMobileFrame title={project.title} image={project.image} mobileImage={project.mobileImage} index={currentProjectIndex} />
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Case Study Details Section */}
      <section className="px-8 md:px-16 lg:px-32 max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main Context Breakdown */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Project Overview</h2>
              <p className="text-neutral-600 font-light leading-relaxed text-lg">
                {project.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Key Features</h2>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-2.5 shrink-0" />
                    <span className="text-neutral-600 font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Engineering Challenges & Solutions</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2.5 shrink-0" />
                    <span className="text-neutral-600 font-light leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar Specifications */}
          <div className="space-y-8 lg:border-l lg:border-neutral-200/60 lg:pl-12 h-fit">
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-3 font-medium">Technology Used</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-light text-neutral-600 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200/60">
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Design Goal</span>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Adhering to high-performance guidelines, ensuring zero layout shifts, native-feel animations, and absolute pixel fidelity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Project Traversal Navigation */}
      <section className="border-t border-neutral-200 mt-32 pt-20 px-8 md:px-16 lg:px-32 max-w-6xl mx-auto">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block text-center md:text-left space-y-4 max-w-xl"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium block">
            Next Project
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors inline-flex items-center gap-4">
            {nextProject.title}
            <ArrowRight className="w-8 h-8 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
          </h2>
        </Link>
      </section>
    </main>
  );
}
