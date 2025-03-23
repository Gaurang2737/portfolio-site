import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  title,
  company,
  description,
}) => {
  return (
    <motion.div 
      className="mb-8 relative pl-8 border-l-2 border-gray-200"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
      <div className="mb-1 text-sm text-gray-500">{period}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <div className="text-gray-600 mb-2">{company}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;
