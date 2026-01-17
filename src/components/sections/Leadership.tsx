import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, GraduationCap } from "lucide-react";

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">Leadership & Community</p>

          <div className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-secondary">
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-normal mb-1">Co-Lead, The Algorithm Club</h3>
                <p className="text-sm text-muted-foreground font-light mb-4">
                  Marathwada Institute of Technology
                </p>
                <ul className="space-y-3">
                  <li className="text-sm text-muted-foreground font-light leading-relaxed pl-4 border-l border-border">
                    Conducted comprehensive Web Development training sessions for 150+ junior students
                  </li>
                  <li className="text-sm text-muted-foreground font-light leading-relaxed pl-4 border-l border-border">
                    Designed curriculum covering HTML, CSS, JavaScript, React, and modern web development practices
                  </li>
                  <li className="text-sm text-muted-foreground font-light leading-relaxed pl-4 border-l border-border">
                    Mentored students on project development and industry best practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}