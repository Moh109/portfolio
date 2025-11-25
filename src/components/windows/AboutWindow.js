import React from 'react';
import { motion } from 'framer-motion';

const AboutWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5 text-center flex flex-col items-center"
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        src="icons/uh_logo.png"
        alt="Profile Photo"
        className="w-30 h-30 rounded-full object-cover mb-4 shadow-lg"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-500 mb-4"
      >
        Aspiring Software Engineer and Developer
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-50 p-6 rounded-xl mb-6 text-center flex flex-col items-center"
      >
        <p className="text-sm leading-relaxed text-gray-600 max-w-lg">
          Hi, I'm Muhammad Shaikh, a freshman Computer Science student at University of Houston. 
          I enjoy programming and love creating new things with technology. I'm interested in areas 
          like cybersecurity, machine learning and data science. I'm currently looking for internship 
          opportunities to gain experience, learn from real projects and grow by working with a team.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center mt-6"
      >
        <div className="bg-white p-8 rounded-2xl border border-gray-200 flex items-center gap-4 shadow-md">
          <img
            src="icons/uh_logo.png"
            alt="UH Logo"
            className="h-12 w-auto rounded-md bg-white"
          />
          <div className="text-left">
            <div className="text-lg text-gray-800 font-semibold">University of Houston</div>
            <div className="text-sm text-gray-500">Major: Computer Science</div>
            <div className="text-xs text-gray-400">Graduating in 2028</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutWindow;
