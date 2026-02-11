import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    value: "dongaonkarom2006@gmail.com",
    href: "mailto:dongaonkarom2006@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "OmDongaonkar03",
    href: "https://github.com/OmDongaonkar03",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "omdongaonkar",
    href: "https://linkedin.com/in/omdongaonkar",
    icon: Linkedin,
  },
  {
	label: "X",
	value:"OmDongaonkar03",
	href:"https://x.com/OmDongaonkar03",
	icon: Twitter,
	
  }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-title">Contact</p>

          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-normal mb-6 tracking-tight">
              Let's work together
            </h2>
            <p className="text-muted-foreground font-light mb-10 leading-relaxed">
              I'm always interested in hearing about new opportunities and challenging projects.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all duration-300"
                >
                  <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground font-light mb-0.5">{link.label}</p>
                    <p className="text-sm font-light truncate">{link.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            <Button asChild variant="outline" className="font-light">
              <a href="mailto:dongaonkarom2006@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Send me an email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}