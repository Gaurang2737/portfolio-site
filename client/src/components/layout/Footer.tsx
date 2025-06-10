import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  SendIcon
} from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to the newsletter.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="md:w-1/3">
            <a href="#hero" className="text-2xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Gaurang</span>
              <span className="text-white">Portfolio</span>
            </a>
            <p className="text-gray-400 mb-4">
              Building innovative solutions for complex problems through technology. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Resume</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on my latest projects and tech insights.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-700 text-white placeholder:text-gray-400 border-gray-600 rounded-r-none focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 rounded-l-none"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? (
                  <span className="animate-spin">◌</span>
                ) : (
                  <SendIcon className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GaurangPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
