import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
