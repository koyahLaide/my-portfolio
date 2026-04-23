"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-1/20 rounded-2xl rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl w-full h-full">
                <Image src="/application.jpg" alt="Nickolaide Andrey Panaligan" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a 3rd-year IT student specializing in frontend development. I build responsive and user-friendly web applications using React and modern web technologies.
            </p>
            <p>
              I am currently working on real-world systems and continuously improving my skills to become a professional frontend developer. I love turning ideas into clean, functional interfaces that people enjoy using.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "JavaScript", "HTML", "CSS", "Node", "GitHub"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}