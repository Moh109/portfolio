import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 w-screen h-screen bg-mac-dark text-white z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-semibold tracking-wider mb-8 font-apple"
        >
          Loading
        </motion.div>
        <div className="w-56 h-1.5 bg-gray-600 rounded-sm overflow-hidden shadow-lg">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: [0.4, 1.6, 0.6, 1] }}
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
