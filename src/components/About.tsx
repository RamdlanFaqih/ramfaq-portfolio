"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Framer Motion", "Node.js", "Flutter"
];

export default function About() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl mb-8">About Me</h2>
          <p className="text-lg text-neutral-600 leading-relaxed font-light">
            I am a Frontend Developer with a deep passion for pixel-perfect design,
            performance, and seamless user interfaces. I bridge the gap between design
            and engineering to build products that not only look beautiful but feel
            intuitive and responsive.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed font-light">
            Whether it's a high-performance web application or a fluid mobile experience,
            I focus on the micro-interactions that make software delightful to use.
          </p>
        </motion.div>

        {/* Visual Content (Abstract Graphic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="aspect-square bg-neutral-200 rounded-3xl relative overflow-hidden flex justify-center items-center"
        >
          {/* Abstract geometric animation representing "seamless" and "fluid" */}
          <motion.div
            animate={{
              rotate: 360,
              borderRadius: ["30%", "50%", "40%", "30%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
            }}
            className="absolute w-2/3 h-2/3 bg-neutral-300 mix-blend-multiply"
          />
          <motion.div
            animate={{
              rotate: -360,
              borderRadius: ["40%", "30%", "50%", "40%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear"
            }}
            className="absolute w-1/2 h-1/2 bg-neutral-100 mix-blend-overlay"
          />
        </motion.div>
      </div>

      {/* Skills Marquee */}
      <div className="mt-32 relative flex overflow-x-hidden border-y border-neutral-200 py-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* We duplicate the array to make the infinite scroll seamless */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-2xl md:text-4xl text-neutral-800 px-8 font-light">
              {skill}
              <span className="text-neutral-300 ml-8">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
