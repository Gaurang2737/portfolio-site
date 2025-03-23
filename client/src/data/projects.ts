import { ProjectType } from "@/components/ui/project-card";

export const projects: ProjectType[] = [
  {
    title: "Advanced Analytics Dashboard",
    description: "A comprehensive dashboard for visualizing complex data sets with interactive charts and real-time filtering capabilities.",
    image: "dashboard.jpg",
    category: "Data Visualization",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    demoLink: "https://example.com/dashboard",
    githubLink: "https://github.com/example/dashboard"
  },
  {
    title: "Predictive Analytics Platform",
    description: "A machine learning platform that predicts customer behavior based on historical data and provides actionable insights.",
    image: "predictive.jpg",
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Flask", "AWS"],
    demoLink: "https://example.com/predictive",
    githubLink: "https://github.com/example/predictive"
  },
  {
    title: "Financial Planning App",
    description: "A cross-platform mobile application for personal finance management with budget tracking and investment analysis.",
    image: "financial.jpg",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
    demoLink: "https://example.com/finance",
    githubLink: "https://github.com/example/finance"
  },
  {
    title: "E-commerce Recommendation Engine",
    description: "An AI-powered recommendation system that suggests products based on user behavior and preferences.",
    image: "recommendation.jpg",
    category: "Artificial Intelligence",
    technologies: ["Python", "PyTorch", "Django", "PostgreSQL"],
    demoLink: "https://example.com/recommendations",
    githubLink: "https://github.com/example/recommendations"
  },
  {
    title: "Real-time Monitoring System",
    description: "A real-time IoT monitoring solution that tracks device performance and alerts users of potential issues.",
    image: "monitoring.jpg",
    category: "IoT",
    technologies: ["Node.js", "Socket.io", "React", "TimescaleDB"],
    demoLink: "https://example.com/monitoring",
    githubLink: "https://github.com/example/monitoring"
  },
  {
    title: "Content Management Platform",
    description: "A headless CMS for managing digital content across multiple platforms with advanced workflows.",
    image: "cms.jpg",
    category: "Web Development",
    technologies: ["Next.js", "GraphQL", "Prisma", "Postgres"],
    demoLink: "https://example.com/cms",
    githubLink: "https://github.com/example/cms"
  }
];
