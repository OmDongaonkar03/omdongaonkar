import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Profiles } from "@/components/sections/Profiles";

// Lazy load below-fold sections — only downloaded when needed
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({
    default: m.Experience,
  })),
);
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({
    default: m.Projects,
  })),
);
const Leadership = lazy(() =>
  import("@/components/sections/Leadership").then((m) => ({
    default: m.Leadership,
  })),
);
const Education = lazy(() =>
  import("@/components/sections/Education").then((m) => ({
    default: m.Education,
  })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer })),
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Profiles />
        <Suspense fallback={null}>
          <Experience />
          <Skills />
          <Projects />
          <Leadership />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
