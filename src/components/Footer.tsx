import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-12 border-t border-border"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} Om Amit Dongaonkar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 font-light">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
}