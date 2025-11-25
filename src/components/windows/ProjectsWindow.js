import React from 'react';
import { motion } from 'framer-motion';

const ProjectsWindow = () => {
  const projects = [
    {
      title: "macOS Portfolio",
      tech: "React • TailwindCSS • Framer Motion",
      description: "A modern macOS-inspired interactive portfolio built with React, TailwindCSS, and Framer Motion. Features draggable windows, smooth animations, and a complete desktop experience.",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      tech: "HTML • CSS • JavaScript",
      description: "A macOS-inspired interactive portfolio built with vanilla HTML, CSS, and JavaScript. Features draggable windows, calendar app, and dino game.",
      status: "Completed"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5 text-center flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl text-gray-800 font-semibold mb-6"
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-5 items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl border border-gray-200 min-w-80 max-w-lg text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
              className="text-xl text-gray-800 font-semibold mb-2"
            >
              {project.title}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.2 }}
              className="text-sm text-gray-500 mb-3"
            >
              {project.tech}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
              className="text-base leading-relaxed text-gray-600 mb-3"
            >
              {project.description}
            </motion.p>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.2 }}
              className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {project.status}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsWindow;
