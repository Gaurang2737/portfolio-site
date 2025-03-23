import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "projects",
      "skills",
      "experience",
      "waitlist",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Add offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
