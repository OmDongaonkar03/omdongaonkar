import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Code2, Trophy, Braces } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    href: "https://github.com/OmDongaonkar03",
    icon: Github,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/DlEXuxV3Lh/",
    icon: Code2,
  },
  {
    name: "GFG",
    href: "https://www.geeksforgeeks.org/profile/omdongaonkar",
    icon: Braces,
  },
];

export function Profiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="text-sm text-muted-foreground font-light mr-2">
            Coding Profiles
          </span>
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300 text-sm font-light"
            >
              <profile.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="group-hover:text-foreground transition-colors">{profile.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
