"use client";

import { motion } from "framer-motion";
import { Code2, FileCode2, Palette, GitBranch, Server } from "lucide-react";

const skills = [
  { name: "React", icon: Code2, desc: "Components, hooks, state management" },
  { name: "JavaScript", icon: FileCode2, desc: "ES6+, DOM, async/await" },
  { name: "HTML", icon: Code2, desc: "Semantic, accessible markup" },
  { name: "CSS", icon: Palette, desc: "Flexbox, Grid, responsive design" },
  { name: "GitHub", icon: GitBranch, desc: "Version control, collaboration" },
  { name: "Node.js", icon: Server, desc: "Backend basics, REST APIs" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">My Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">What I Work With</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all group cursor-default"
            >
              <skill.icon className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors mb-3" />
              <h3 className="font-bold mb-1">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}