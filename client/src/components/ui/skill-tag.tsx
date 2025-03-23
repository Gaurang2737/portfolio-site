import React from "react";
import { motion } from "framer-motion";

interface SkillTagProps {
  name: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <motion.div 
      className="bg-white shadow-sm rounded-full px-4 py-2 border border-gray-100 inline-flex items-center m-1 hover:shadow-md hover:border-primary/20 transition-all duration-300"
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(var(--primary-rgb), 0.05)" 
      }}
    >
      <span className="text-gray-800 font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillTag;