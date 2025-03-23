import React from "react";
import SkillBar from "@/components/ui/skill-bar";
import DonutChart from "@/components/ui/donut-chart";
import { motion } from "framer-motion";
import { skills, areaOfExpertise, stats } from "@/data/skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Technical Skills</h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Programming & Tools</h3>
            
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
          
          {/* Right Column: Pie Chart for Skills Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <DonutChart data={areaOfExpertise} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {areaOfExpertise.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-2" 
                      style={{ backgroundColor: area.color }}
                    ></div>
                    <div>
                      <div className="font-medium">{area.name}</div>
                      <div className="text-sm text-gray-500">{area.value}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
