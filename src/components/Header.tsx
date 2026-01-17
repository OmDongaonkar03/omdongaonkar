import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Clock } from "./Clock";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-sm font-normal tracking-tight">
            Om Dongaonkar
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Clock />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}