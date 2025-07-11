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
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-12"></div>

        {/* Content */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/imageG.png"
                  alt="Gaurang Sane"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full p-4">
                <Code className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-2 text-center md:text-left">{profile.name}</h3>
            <p className="text-gray-600 mb-4 text-center md:text-left">{profile.title}</p>
            <p className="mb-6 text-center md:text-left">{profile.bio}</p>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="text-primary mr-2 h-5 w-5" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="text-primary mr-2 h-5 w-5" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Briefcase className="text-primary mr-2 h-5 w-5" />
                <span>{profile.company}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <GraduationCap className="text-primary mr-2 h-5 w-5" />
                <span>{profile.education}</span>
              </div>
            </div>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              {/* Resume Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" className="bg-gray-900 text-white font-semibold px-6 py-2 rounded shadow hover:bg-gray-800 transition w-full sm:w-auto">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Data Scientist Resume
                  </a>
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 justify-center sm:justify-start">
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
