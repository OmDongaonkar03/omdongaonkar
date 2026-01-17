import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const languages = [
  // Frontend
  { name: "HTML5", file: "html.png" },
  { name: "CSS3", file: "css.png" },
  { name: "JavaScript", file: "javascript.png" },
  { name: "TypeScript", file: "typescript.png" },
  { name: "React.js", file: "react.png" },
  { name: "Next.js", file: "nextjs.png" },
  { name: "jQuery", file: "jquery.png" },
  
  // Backend
  { name: "Node.js", file: "nodejs.png" },
  { name: "Express.js", file: "express.png" },
  { name: "PHP", file: "php.png" },
  
  // Databases
  { name: "MongoDB", file: "mongodb.png" },
  { name: "MySQL", file: "mysql.png" },
  
  // Development Tools
  { name: "Git", file: "git.png" },
  { name: "GitHub", file: "github.png" },
  { name: "npm", file: "npm.png" },
  { name: "Postman", file: "postman.png" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">About</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                Results-driven Full Stack Developer with hands-on experience in building 
                secure, high-performance web applications across the entire technology stack.
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Proven track record of optimizing application performance by 25-30% through 
                API refactoring, database optimization, and code minification. Skilled in 
                modern JavaScript frameworks, RESTful API development, and implementing 
                enterprise-grade security measures.
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Experienced in Agile methodologies and passionate about delivering scalable, 
                maintainable solutions. Currently pursuing a Diploma in Artificial Intelligence 
                and Machine Learning at Marathwada Institute of Technology.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  Tech Stack
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 * index,
                        ease: [0.25, 0.1, 0.25, 1] 
                      }}
                      className="group relative"
                    >
                      <div className="aspect-square bg-white/5 blur-[0.5px] border border-border rounded-lg p-2 flex items-center justify-center hover:border-foreground/20 transition-colors">
                        <img
                          src={`/skills/${lang.file}`}
                          alt={lang.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}