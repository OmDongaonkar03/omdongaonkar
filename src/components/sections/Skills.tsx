import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Shield, 
  GitBranch 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "React Native", "Next.js", "jQuery"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "PHP", "Python", "Prisma", "RESTful APIs", "Microservices Architecture"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Database Normalization", "Query Optimization", "Indexing"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "npm", "Webpack", "Postman"],
  },
  {
    title: "Security & Performance",
    icon: Shield,
    skills: ["OWASP Top 10", "Multi-layer Encryption", "Application Security", "Performance Optimization"],
  },
  {
    title: "Methodologies",
    icon: GitBranch,
    skills: ["Agile Development", "Test-Driven Development", "Code Review", "CI/CD"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">Skills</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-normal">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}