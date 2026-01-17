import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-light">
              Pune, India
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-[1.1]"
          >
            Om Amit Dongaonkar
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mb-12"
          >
            I design software that compounds over time. Backend-first, AI-curious, system-obsessed.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <span className="font-light">Learn more</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}