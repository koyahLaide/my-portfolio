"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mvolo Dashboard — Organic Intelligence",
    description:
      "SEO analytics dashboard for an e-commerce SaaS, built during a frontend developer internship. Designed and built 8 fully-wired UI tabs from scratch — including loading skeletons and empty states — replacing 11 hardcoded mock values with live, real-time data.",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "UI Components", "Data Visualization"],
    status: "Ongoing" as const,
    gradient: "from-blue-500/20 to-indigo-600/20",
    isPrivate: true,
  },
  {
    title: "LayerFlow",
    description:
      "Shopify merchant analytics dashboard built during a frontend developer internship. Designed and built a Customer Journey Timeline UI inside the customer profile view — a vertical event timeline with typed icons and synced tab state — and shipped a full brand design system across the product.",
    tags: ["Next.js", "TypeScript", "Tailwind", "UI/UX", "Design Systems"],
    status: "Ongoing" as const,
    gradient: "from-amber-500/20 to-orange-600/20",
    isPrivate: true,
  },
  {
    title: "HRIS Data Dashboard",
    description:
      "A real-time data dashboard for HRIS, developed as part of a larger e-commerce system. Fetches and displays live data through API integration with SQLite3 backend.",
    tags: ["Node", "SQLite3", "JavaScript", "API"],
    status: "Completed" as const,
    gradient: "from-violet-500/20 to-purple-600/20",
    githubUrl: "https://github.com/koyahLaide/HRIS",
  },
  {
    title: "CvSU Facility Services and Maintenance Request System",
    description:
      "A system designed for CvSU university facility maintenance and service requests. Built with React for a responsive, user-friendly experience.",
    tags: ["HTML", "JavaScript", "CSS", "Bun"],
    status: "Ongoing" as const,
    gradient: "from-emerald-500/20 to-teal-600/20",
    githubUrl: "https://github.com/koyahLaide/CvSU-Facility-Services-and-Maintenance-Request-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world systems I&apos;ve built and am currently working on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
                <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="text-5xl font-bold text-foreground/10 select-none">
                    {project.title.charAt(0)}
                  </div>
                  <Badge
                    className={`absolute top-3 right-3 ${
                      project.status === "Completed"
                        ? "bg-green-500/90 text-white"
                        : "bg-amber-500/90 text-white"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="pt-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-4">
                  {project.isPrivate ? (
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      Private repository — internship project
                    </span>
                  ) : (
                    <Button size="sm" variant="outline" className="gap-1.5" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      View on GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}