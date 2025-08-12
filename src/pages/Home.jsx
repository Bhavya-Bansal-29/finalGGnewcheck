import { Suspense, useRef, useState, lazy } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";

const BackgroundVideo = lazy(() =>
  import("../components/BackgroundVideo").then((module) => ({ default: module.BackgroundVideo }))
);
const ProjectsSection = lazy(() =>
  import("../components/ProjectsSection").then((module) => ({ default: module.ProjectsSection }))
);
const PackagesSection = lazy(() =>
  import("../components/PackagesSection").then((module) => ({ default: module.PackagesSection }))
);
const AboutSection = lazy(() =>
  import("../components/AboutSection").then((module) => ({ default: module.AboutSection }))
);
const JoinusSection = lazy(() =>
  import("../components/JoinusSection").then((module) => ({ default: module.JoinusSection }))
);
const ContactSection = lazy(() =>
  import("../components/ContactSection").then((module) => ({ default: module.ContactSection }))
);


export const Home = () => {
  const [showJoinUs, setShowJoinUs] = useState(false);
  const joinUsRef = useRef(null);

  const handleJoinUsClick = () => {
    setShowJoinUs(true);
    setTimeout(() => {
      joinUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Suspense fallback={null}>
        <BackgroundVideo />
      </Suspense>
      <StarBackground />
      <Navbar onJoinUsClick={handleJoinUsClick} />

      <main>
        <HeroSection />

        <Suspense fallback={null}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={null}>
          <PackagesSection />
        </Suspense>

        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>

        {showJoinUs && (
          <div ref={joinUsRef}>
            <Suspense fallback={null}>
              <JoinusSection />
            </Suspense>
          </div>
        )}

        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};