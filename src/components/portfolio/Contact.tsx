"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I&apos;m open to frontend and web dev freelance work, part-time roles, and collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto space-y-6"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Let&apos;s Connect</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Feel free to reach out through any of these channels. I&apos;d love to hear about opportunities or just chat about tech!
            </p>
          </div>
          <a
            href="mailto:panaligannickolaideandrey18@gmail.com"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground font-medium">Email</div>
              <div className="text-sm font-medium truncate">panaligannickolaideandrey18@gmail.com</div>
            </div>
          </a>
          <a
            href="https://github.com/koyahLaide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-medium">GitHub</div>
              <div className="text-sm font-medium">github.com/koyahLaide</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
