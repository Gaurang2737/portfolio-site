import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import TimelineItem from "@/components/ui/timeline-item";
import { motion } from "framer-motion";
import { workExperience, education, certifications } from "@/data/experience";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience & Education</h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Work Experience */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Briefcase className="text-primary mr-2 h-5 w-5" /> Professional Experience
            </h3>
            
            {workExperience.map((experience, index) => (
              <TimelineItem 
                key={index}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
              />
            ))}
          </motion.div>
          
          {/* Education */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="text-primary mr-2 h-5 w-5" /> Education & Certifications
            </h3>
            
            {education.map((edu, index) => (
              <TimelineItem 
                key={index}
                period={edu.period}
                title={edu.degree}
                company={edu.school}
                description={edu.description}
              />
            ))}
            
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-gray-500">Certifications</div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert.name}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
