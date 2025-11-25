import React from 'react';
import { motion } from 'framer-motion';

const Desktop = ({ theme, wallpaper, onOpenWindow }) => {
  const desktopIcons = [
    { id: 'about', label: "About", icon: "https://img.icons8.com/color/96/000000/folder-invoices--v2.png" },
    { id: 'skills', label: "Skills", icon: "https://img.icons8.com/color/96/000000/folder-invoices--v2.png" },
    { id: 'projects', label: "Projects", icon: "https://img.icons8.com/color/96/000000/folder-invoices--v2.png" },
    { id: 'contact', label: "Contact", icon: "https://img.icons8.com/color/96/000000/folder-invoices--v2.png" },
    { id: 'resume', label: "Resume", icon: "https://img.icons8.com/color/96/000000/folder-invoices--v2.png" },
  ];

  const getWallpaperStyle = () => {
    const wallpapers = {
      wall1: 'linear-gradient(120deg,#a1c4fd,#c2e9fb)',
      wall2: 'linear-gradient(120deg,#fbc2eb,#a6c1ee)',
      wall3: 'linear-gradient(120deg,#fda085,#f6d365)',
      wall4: 'linear-gradient(120deg,#5e6e7e,#232526)',
    };
    return { background: wallpapers[wallpaper] || wallpapers.wall1 };
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="flex-grow p-5 relative"
      style={getWallpaperStyle()}
    >
      <div className="flex flex-col gap-5 absolute top-12 left-5">
        {desktopIcons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center gap-2 cursor-pointer select-none w-20"
            onClick={() => onOpenWindow(icon)}
          >
            <img
              src={icon.icon}
              alt={icon.label}
              className="w-15 h-15"
            />
            <span className="text-sm text-white drop-shadow-lg">
              {icon.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Desktop;
