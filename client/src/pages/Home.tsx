import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Waitlist from "@/components/sections/Waitlist";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Home() {
  const activeSection = useScrollSpy();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Waitlist />
        <Contact />
      </main>

      <Footer />

      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg opacity-90 hover:opacity-100 transition-opacity z-10"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

import { useState } from "react";
