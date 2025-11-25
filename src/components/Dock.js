import React from 'react';
import { motion } from 'framer-motion';

const Dock = ({ onOpenWindow }) => {
  const dockApps = [
    { id: 'about', label: "About", icon: "icons/fc705267ee0a1c22aea69da4c493b7ac_KGP6W162tB_256x256x32.png" },
    { id: 'calendar', label: "Calendar", icon: "icons/6a74fc79b68a1a9a30e112c549ee9f90_25y2FI4DUz_256x256x32.png" },
    { id: 'game-dino', label: "Dino", icon: "icons/2dcae50b7983dad0f671fd5c57ef14bc_TouchBar_Dino_256x256x32.png" },
    { id: 'settings', label: "Settings", icon: "icons/15e5f66626ec26e6ef77c7ba8b856dc0_Settings_256x256x32.png" },
    { id: 'github', label: "Source Code", icon: "https://img.icons8.com/fluent/48/000000/github.png", url: "https://github.com/Moh109/macos-portfolio" }
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-2.5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-mac rounded-2xl p-2.5 flex gap-4 z-40 border border-white border-opacity-30"
    >
      {dockApps.map((app, index) => (
        <motion.div
          key={app.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
          whileHover={{ scale: 1.15, y: -6 }}
          whileTap={{ scale: 0.95 }}
          className="dock-icon"
          onClick={() => {
            if (app.url) {
              window.open(app.url, '_blank');
            } else {
              onOpenWindow(app);
            }
          }}
        >
          <img
            src={app.icon}
            alt={app.label}
            title={app.label}
            className="w-12 h-12 rounded-xl bg-white shadow-md p-1 transition-transform duration-200"
          />
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Dock;
