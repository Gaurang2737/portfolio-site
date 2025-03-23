import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface ExpertiseArea {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: ExpertiseArea[];
  size?: number;
  thickness?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ 
  data, 
  size = 240, 
  thickness = 20 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate start angles for each segment
  const calculateSegments = () => {
    let currentAngle = -90; // Start from top (12 o'clock position)
    const segments = [];
    
    for (const item of data) {
      const angleSize = (item.value / 100) * 360;
      const dashArray = circumference;
      const dashOffset = circumference * (1 - item.value / 100);
      
      segments.push({
        angle: currentAngle,
        dashArray,
        dashOffset,
        color: item.color,
      });
      
      currentAngle += angleSize;
    }
    
    return segments;
  };

  const segments = calculateSegments();

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
      ref={svgRef}
    >
      <circle 
        cx={size / 2} 
        cy={size / 2} 
        r={radius} 
        fill="none" 
        stroke="#EEE" 
        strokeWidth={thickness} 
      />
      
      {segments.map((segment, index) => (
        <motion.circle
          key={index}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={segment.color}
          strokeWidth={thickness}
          strokeDasharray={segment.dashArray}
          strokeDashoffset={segment.dashOffset}
          transform={`rotate(${segment.angle} ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: segment.dashOffset }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      ))}
    </svg>
  );
};

export default DonutChart;
