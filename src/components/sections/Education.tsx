import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">Education</p>

          <div className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-card border border-border">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-normal mb-1">
                  Diploma in Artificial Intelligence and Machine Learning
                </h3>
                <p className="text-sm text-muted-foreground font-light mb-2">
                  Marathwada Institute of Technology, Chhatrapati Sambhajinagar, India
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="font-light">Expected Graduation: April 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}