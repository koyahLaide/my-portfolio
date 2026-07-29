import Image from "next/image";
import { Mail, MapPin, FileDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const skills = {
  "Frontend": ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  "Backend": ["Node.js", "SQLite3", "REST APIs"],
  "Tools": ["Git/GitHub", "VS Code", "Figma", "npm"],
  "Learning": ["TypeScript", "Python", "PostgreSQL"],
};

const experience = [
  {
    title: "Frontend Developer Intern",
    company: "Layerflow",
    period: "April 2026 – Present",
    bullets: [
      "Designed and built 8 fully-wired dashboard UI tabs from scratch — including loading skeletons and empty states — replacing hardcoded mock data with live, real-time data",
      "Designed a Customer Journey Timeline UI for the customer profile view, with a vertical event layout and synced tab state",
      "Shipped a full brand design system across the product's UI",
      "Supported backend integration work, including new API routes and security hardening",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2024 – Present",
    bullets: [
      "Build responsive web applications using React, JavaScript, HTML, and CSS",
      "Integrate APIs for real-time data display and form handling",
      "Design clean, user-friendly interfaces with modern UI/UX principles",
      "Manage projects independently from planning to deployment",
    ],
  },
  {
    title: "Frontend Developer (Projects)",
    company: "Academic / Personal Projects",
    period: "2023 – Present",
    bullets: [
      "Developed HRIS Data Dashboard with Node.js, SQLite3, and API integration",
      "Building CvSU Facility Services System with React for university maintenance requests",
      "Deployed personal portfolio website with dark mode, animations, and responsive design",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Cavite State University (CvSU)",
    period: "2023 – Present (4th Year)",
    bullets: [
      "Specializing in frontend web development",
      "Strong foundation in programming, data structures, and database management",
      "Active in building real-world projects and continuously learning new technologies",
    ],
  },
];

const projects = [
  {
    title: "HRIS Data Dashboard",
    tech: "Node.js, SQLite3, JavaScript, API",
    desc: "A real-time data dashboard for HRIS, developed as part of a larger e-commerce system. Fetches and displays live data through API integration with SQLite3 backend.",
  },
  {
    title: "CvSU Facility Services and Maintenance Request System",
    tech: "React, JavaScript, CSS",
    desc: "A system designed for CvSU university facility maintenance and service requests. Built with React for a responsive, user-friendly experience.",
  },
  {
    title: "Personal Portfolio Website",
    tech: "React, Next.js, Tailwind CSS, Framer Motion",
    desc: "A modern portfolio website featuring dark/light mode, smooth animations, responsive design, and contact form. Deployed on Vercel.",
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            <span className="text-primary">NAP</span>
            <span className="text-muted-foreground">.dev</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-border shrink-0">
            <Image src="/application.jpg" alt="Nickolaide Panaligan" fill className="object-cover" />
          </div>
          <div className="space-y-2 flex-1">
            <h1 className="text-3xl font-bold">Nickolaide Andrey Panaligan</h1>
            <p className="text-lg text-primary font-medium">Frontend Developer | 4th Year IT Student</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                panaligannickolaideandrey18@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                Philippines
              </span>
              <a
                href="https://github.com/koyahLaide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                github.com/koyahLaide
              </a>
            </div>
          </div>
          <Button asChild className="gap-2 shrink-0">
            <a href="/Nickolaide_Panaligan_CV.pdf" download>
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a 4th-year IT student specializing in frontend development. I build responsive and user-friendly web applications using React and modern web technologies. I am currently working on real-world systems and continuously improving my skills to become a professional frontend developer. I love turning ideas into clean, functional interfaces that people enjoy using.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-primary mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-muted rounded-lg border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.title}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.title} className="p-4 rounded-xl border border-border">
                <h3 className="font-bold mb-1">{project.title}</h3>
                <p className="text-xs text-primary mb-2">{project.tech}</p>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Education</h2>
          {education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm text-primary">{edu.school}</p>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {edu.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li> 
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center pt-6 border-t border-border">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}