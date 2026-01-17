import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Versatile Technology",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    period: "November 2025 - Present",
    highlights: [
      "Optimized application performance by 25-30% through API endpoint refactoring, transitioning from HTML to JSON responses, and implementing CSS/JS minification strategies",
      "Enhanced database query performance by implementing indexing and normalization rules, significantly reducing response times",
      "Secured applications against OWASP Top 10 vulnerabilities and other security threats while maintaining optimal performance levels",
      "Implemented multi-layer encryption processes to protect confidential data and built robust firewalls for enhanced application security",
      "Led technical training sessions for 5+ interns, covering full-stack development best practices and modern coding standards",
      "Collaborated with cross-functional teams to design, develop, and deploy scalable web applications",
    ],
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Versatile Technology",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    period: "May 2025 - November 2025",
    highlights: [
      "Developed full-stack web applications following industry-standard coding practices and design patterns",
      "Collaborated with development teams to implement responsive frontend interfaces and robust backend services",
      "Debugged and resolved technical issues across multiple projects, enhancing application stability",
      "Participated in Agile sprint planning, daily standups, and retrospectives to streamline development workflows",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">Experience</p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-64 flex-shrink-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-light">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-3.5 w-3.5" />
                      <span className="font-light">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-normal mb-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground font-light mb-4">
                      {exp.location}
                    </p>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground font-light leading-relaxed pl-4 border-l border-border"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}