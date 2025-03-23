import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Tech</span>
            <span className="text-gray-900">Portfolio</span>
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-primary font-medium"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="#waitlist">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Join Waitlist
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-in fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`py-2 transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary font-medium"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors inline-block w-full text-center"
              onClick={closeMenu}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
