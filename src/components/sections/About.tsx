import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiNpm,
  SiPostman,
  SiPython,
  SiPrisma,
  SiRedis,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiFirebase,
  SiCloudflare,
} from "react-icons/si";

const languages = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "currentColor" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Prisma", Icon: SiPrisma, color: "currentColor" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F48120" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "currentColor" },
  { name: "npm", Icon: SiNpm, color: "#CB3837" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
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
                I build tools that solve real problems and hold up under real
                load. My projects aren't demos - Micrologs handles 2.5M
                pageviews/day on a single node, Openlet shipped in a weekend
                and is live with real users.
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Backend-first, but I own the full stack end to end. I think
                about performance before it becomes a problem, and security
                before someone finds the gap.
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Open to the right opportunity — preferably one where the
                engineering bar is high and the problems are worth solving.
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
                        delay: 0.05 * index,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="group relative"
                      title={lang.name}
                    >
                      <div className="aspect-square bg-white/5 border border-border rounded-lg p-2.5 flex items-center justify-center hover:border-foreground/20 transition-colors">
                        <lang.Icon
                          className="w-full h-full"
                          style={{ color: lang.color }}
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