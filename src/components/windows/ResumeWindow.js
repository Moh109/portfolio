import React from 'react';
import { motion } from 'framer-motion';

const ResumeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-800 font-semibold mb-6"
      >
        Resume
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200"
      >
        <iframe
          src="Moh_s_Resume.pdf#toolbar=0&view=FitH"
          className="w-full h-96 border-none bg-gray-50"
          title="Resume PDF"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-45 text-white text-center text-sm py-2 font-medium rounded-b-xl">
          Click to view full PDF
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-4"
      >
        <a
          href="Moh_s_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white rounded-lg px-6 py-2 text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          Open Full PDF in New Tab
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ResumeWindow;
