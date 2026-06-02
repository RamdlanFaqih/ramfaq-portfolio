"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

import { BrowserFrame, PhoneFrame, WebMobileFrame, DoublePhoneFrame } from "@/components/DeviceFrames";

export default function SelectedWorks() {
  return (
    <section id="works" className="py-32 px-8 md:px-16 lg:px-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl mb-24"
        >
          Selected Works
        </motion.h2>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover="hover"
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-24 items-center group`}
            >
              {/* Mobile-only Project Title (Top of Stack) */}
              <div className="w-full md:hidden">
                <h3 className="text-2xl font-medium">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="hover:text-neutral-500 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {project.title}
                    <ArrowUpRight className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" strokeWidth={1.5} />
                  </Link>
                </h3>
              </div>

              {/* Visual Showcase (Clickable Device Mockups) */}
              <Link 
                href={`/projects/${project.slug}`}
                className="w-full md:w-3/5 aspect-[4/3] relative flex justify-center items-center cursor-pointer overflow-visible block"
              >
                {project.type === "web-only" && (
                  <BrowserFrame title={project.title} image={project.image} index={index} />
                )}
                {project.type === "mobile-only" && (
                  project.doubleMockup ? (
                    <DoublePhoneFrame title={project.title} images={project.images} />
                  ) : (
                    <PhoneFrame title={project.title} image={project.image} />
                  )
                )}
                {project.type === "web-mobile" && (
                  <WebMobileFrame title={project.title} image={project.image} mobileImage={project.mobileImage} index={index} />
                )}
              </Link>

              {/* Text Content */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs uppercase tracking-wider text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                  <span className="text-xs uppercase tracking-wider text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full font-medium">
                    {project.type === "web-only" && "Web"}
                    {project.type === "mobile-only" && "Mobile"}
                    {project.type === "web-mobile" && "Web & Mobile"}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-medium hidden md:block">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="hover:text-neutral-500 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {project.title}
                    <ArrowUpRight className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" strokeWidth={1.5} />
                  </Link>
                </h3>
                
                <p className="text-neutral-600 font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-2">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium border-b border-neutral-300 hover:border-neutral-900 pb-1 transition-colors"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
