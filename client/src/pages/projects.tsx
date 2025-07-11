import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-center">All Projects</h1>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore all of my projects showcasing my technical expertise and problem-solving skills.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
