"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="h-screen w-full bg-neutral-900 text-neutral-100 flex flex-col justify-between px-8 md:px-16 lg:px-32 py-20">
      
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-8 font-sans font-medium tracking-tight"
        >
          Let's build something together.
        </motion.h2>
        
        <motion.a 
          href="mailto:ramfaqih@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group flex items-center gap-4 text-xl md:text-3xl text-neutral-300 hover:text-white transition-colors border-b border-neutral-700 hover:border-neutral-300 pb-2"
        >
          ramfaqih@gmail.com
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
        </motion.a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 pt-8 mt-auto">
        <p className="text-neutral-500 font-light text-sm">
          © {new Date().getFullYear()} Ramdlan Faqih. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-sm uppercase tracking-widest font-light">
          <a href="https://github.com/ramdlanfaqih" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ramdlanfaqih" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
