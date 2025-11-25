import React from 'react';
import { motion } from 'framer-motion';

const SettingsWindow = ({ onThemeChange, onWallpaperChange, theme }) => {
  const wallpapers = [
    { id: 'wall1', name: 'Blue Gradient', style: 'linear-gradient(120deg,#a1c4fd,#c2e9fb)' },
    { id: 'wall2', name: 'Pink Gradient', style: 'linear-gradient(120deg,#fbc2eb,#a6c1ee)' },
    { id: 'wall3', name: 'Orange Gradient', style: 'linear-gradient(120deg,#fda085,#f6d365)' },
    { id: 'wall4', name: 'Dark Gradient', style: 'linear-gradient(120deg,#5e6e7e,#232526)' },
  ];

  const themes = [
    { id: 'light', name: 'Light Mode' },
    { id: 'dark', name: 'Dark Mode' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 text-center"
    >
      {/* Wallpaper Section */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-medium text-gray-800 mb-4"
      >
        Choose a Wallpaper
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center gap-4 mb-8"
      >
        {wallpapers.map((wallpaper, index) => (
          <motion.div
            key={wallpaper.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-10 rounded-lg border-2 border-gray-200 cursor-pointer shadow-md transition-all duration-200 hover:border-blue-500 hover:shadow-lg"
            style={{ background: wallpaper.style }}
            onClick={() => onWallpaperChange(wallpaper.id)}
            title={wallpaper.name}
          />
        ))}
      </motion.div>

      {/* Theme Section */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-xl font-medium text-gray-800 mb-4"
      >
        Theme
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="flex justify-center gap-4"
      >
        {themes.map((themeOption, index) => (
          <motion.button
            key={themeOption.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
              theme === themeOption.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onThemeChange(themeOption.id)}
          >
            {themeOption.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SettingsWindow;
