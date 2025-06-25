import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BackgroundVideo } from "../components/BackgroundVideo"; 
import { PackagesSection } from "../components/PackagesSection";
import { JoinusSection } from "../components/JoinusSection"; 
import { useRef, useState } from "react";
export const Home = () => {

  const [showJoinUs, setShowJoinUs] = useState(false);
  const joinUsRef = useRef(null);

  const handleJoinUsClick = () => {
    setShowJoinUs(true);
    setTimeout(() => {
      joinUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50); // small delay to ensure rendering
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <ThemeToggle />
      <BackgroundVideo />
      <StarBackground />
      <Navbar onJoinUsClick={handleJoinUsClick} />

      <main>
        <HeroSection />
        <ProjectsSection />
        <PackagesSection />
        <AboutSection />
         {showJoinUs && (
          <div ref={joinUsRef}>
            <JoinusSection />
          </div>
        )}
        <ContactSection />
       
      </main>

      <Footer />
    </div>
  );
};

