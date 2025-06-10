import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Download, 
  Github, 
  Linkedin, 
  Instagram, 
  Code 
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:pt-32 md:pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-12"></div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                 <img
                  src="\imageG.png"
                  alt="Gaurang Sane"
                  className="w-full h-full object-cover"
                 />
              </div>
                <svg
                  className="w-full h-full text-gray-300 bg-gray-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full p-4">
                <Code className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">{profile.name}</h3>
            <p className="text-gray-600 mb-4">{profile.title}</p>
            <p className="mb-6">{profile.bio}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Mail className="text-primary mr-2 h-5 w-5" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2 h-5 w-5" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-primary mr-2 h-5 w-5" />
                <span>{profile.company}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-primary mr-2 h-5 w-5" />
                <span>{profile.education}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button asChild variant="default" className="bg-gray-900 hover:bg-gray-800">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Data Scientist Resume
                </a>
              </Button>
              <Button asChild variant="default" className="bg-gray-900 hover:bg-gray-800">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Data Analyst Resume
                </a>
              </Button>
              <div className="flex gap-3">
                <Button 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors border-0"
                >
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors border-0"
                >
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="icon" 
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors border-0"
                >
                  <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
