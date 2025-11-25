import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TopBar = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full h-8 bg-black bg-opacity-30 text-white flex justify-between items-center px-4 fixed top-0 left-0 z-40 backdrop-blur-md"
    >
      <div className="flex items-center gap-4">
        {/* Left side - could add menu items here */}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">{date}</span>
        <span className="text-sm font-medium">{time}</span>
      </div>
    </motion.header>
  );
};

export default TopBar;
