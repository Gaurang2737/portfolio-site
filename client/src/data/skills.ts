import { ExpertiseArea } from "@/components/ui/donut-chart";

export const skills = [
  {
    name: "JavaScript / TypeScript",
    level: 95
  },
  {
    name: "React / React Native",
    level: 90
  },
  {
    name: "Python",
    level: 85
  },
  {
    name: "Node.js / Express",
    level: 88
  },
  {
    name: "SQL / NoSQL Databases",
    level: 80
  }
];

export const areaOfExpertise: ExpertiseArea[] = [
  {
    name: "Web Development",
    value: 40,
    color: "hsl(221, 83%, 53%)" // primary color
  },
  {
    name: "Data Science",
    value: 30,
    color: "hsl(160, 84%, 39%)" // secondary/emerald color
  },
  {
    name: "Mobile Apps",
    value: 15,
    color: "hsl(271, 91%, 65%)" // purple color
  },
  {
    name: "DevOps",
    value: 15,
    color: "hsl(30, 95%, 55%)" // orange color
  }
];

export const stats = [
  {
    value: "50+",
    label: "Projects"
  },
  {
    value: "15+",
    label: "Technologies"
  }
];
