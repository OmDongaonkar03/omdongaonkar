import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const projects = [
  {
    title: "Throughline",
    subtitle: "Personal Journey Tracking Platform",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "Mastra",
      "LLMs",
    ],
    description: [
      "Developed a full-stack web application enabling users to log daily activities and track personal growth",
      "Implemented automated summary generation for daily, weekly, and monthly progress analysis",
      "Built RESTful APIs for CRUD operations and integrated MySQL for efficient data management",
      "Created responsive React frontend with seamless UX for activity logging and insights visualization",
      "Enabled shareable growth insights feature for community engagement",
    ],
    github: "https://github.com/OmDongaonkar03/Throughline",
    live: "",
  },
  {
    title: "Micrologs",
    subtitle: "Self-Hosted Analytics & Error Tracking Engine",
    technologies: ["PHP", "MySQL", "Vanilla JS", "REST API"],
    description: [
      "Built a self-hostable analytics and error tracking engine that ensures full data ownership with no third-party dashboard",
      "Optimized the architecture to handle up to ~10,000 pageviews per day on standard shared hosting without external dependencies",
      "Implemented comprehensive tracking for unique visitors, sessions, referrers, device types, and UTM campaigns",
      "Developed robust error monitoring with automatic JS error catching and fingerprint-based grouping for backend issues",
      "Integrated advanced features including audit logging, bot filtering, multi-project support, and a tracked link shortener",
    ],
    github: "https://github.com/OmDongaonkar03/Micrologs",
    live: "",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">Projects</p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-normal mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-light">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live project"
                          >
                            <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View GitHub repository"
                          >
                            <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground font-light leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}