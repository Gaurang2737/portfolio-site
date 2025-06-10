import React from "react";
import SkillTag from "@/components/ui/skill-tag";
import { motion } from "framer-motion";
import { skills, stats } from "@/data/skills";

// Group skills by category
const skillCategories = {
  "Programming Languages": [
   "Python", "DAX", "SQL"
  ],
  "Frameworks & Libraries": [
    "Pandas", "NumPy", "scikit-learn","Seaborn","Matplotlib"
  ],
  "Tools & Platforms": [
    "Git", "PowerBI", "Jupyter", "VS Code","Pycharm"
  ],
  "Data Science & Analytics": [
    "Machine Learning", "Data Visualization", "Statistical Analysis","WebScraping"
  ]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Technical Skills</h2>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 border-l-4 border-primary pl-3">{category}</h3>
                <div className="flex flex-wrap bg-gray-50/50 p-4 rounded-xl">
                  {categorySkills.map((skill, index) => (
                    <SkillTag key={index} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
