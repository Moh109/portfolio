import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Window from './Window';
import AboutWindow from './windows/AboutWindow';
import SkillsWindow from './windows/SkillsWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import ContactWindow from './windows/ContactWindow';
import ResumeWindow from './windows/ResumeWindow';
import CalendarWindow from './windows/CalendarWindow';
import DinoGameWindow from './windows/DinoGameWindow';
import SettingsWindow from './windows/SettingsWindow';

const WindowManager = ({ 
  windows, 
  onCloseWindow, 
  onBringToFront, 
  onUpdatePosition, 
  onUpdateSize,
  onThemeChange,
  onWallpaperChange,
  theme 
}) => {
  const getWindowContent = (window) => {
    switch (window.id) {
      case 'about':
        return <AboutWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'resume':
        return <ResumeWindow />;
      case 'calendar':
        return <CalendarWindow />;
      case 'game-dino':
        return <DinoGameWindow />;
      case 'settings':
        return <SettingsWindow onThemeChange={onThemeChange} onWallpaperChange={onWallpaperChange} theme={theme} />;
      default:
        return <div className="p-6">Window content not found</div>;
    }
  };

  return (
    <AnimatePresence>
      {windows.map((window) => (
        <Window
          key={window.id}
          window={window}
          onClose={() => onCloseWindow(window.id)}
          onBringToFront={() => onBringToFront(window.id)}
          onUpdatePosition={(position) => onUpdatePosition(window.id, position)}
          onUpdateSize={(size) => onUpdateSize(window.id, size)}
          theme={theme}
        >
          {getWindowContent(window)}
        </Window>
      ))}
    </AnimatePresence>
  );
};

export default WindowManager;
