import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import WindowManager from './components/WindowManager';
import TopBar from './components/TopBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [openWindows, setOpenWindows] = useState([]);
  const [theme, setTheme] = useState('light');
  const [wallpaper, setWallpaper] = useState('wall1');

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('portfolioMode') || 'light';
    const savedWallpaper = localStorage.getItem('portfolioWallpaper') || 'wall1';
    
    setTheme(savedTheme);
    setWallpaper(savedWallpaper);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  const openWindow = (windowData) => {
    const existingWindow = openWindows.find(w => w.id === windowData.id);
    if (existingWindow) {
      // Bring to front
      setOpenWindows(prev => [
        ...prev.filter(w => w.id !== windowData.id),
        { ...existingWindow, zIndex: Math.max(...prev.map(w => w.zIndex)) + 1 }
      ]);
      return;
    }

    const newWindow = {
      ...windowData,
      zIndex: Math.max(...openWindows.map(w => w.zIndex), 1000) + 1,
      position: { x: window.innerWidth / 2 - 400, y: window.innerHeight / 2 - 300 }
    };

    setOpenWindows(prev => [...prev, newWindow]);
  };

  const closeWindow = (windowId) => {
    setOpenWindows(prev => prev.filter(w => w.id !== windowId));
  };

  const bringToFront = (windowId) => {
    setOpenWindows(prev => {
      const window = prev.find(w => w.id === windowId);
      if (!window) return prev;
      
      return [
        ...prev.filter(w => w.id !== windowId),
        { ...window, zIndex: Math.max(...prev.map(w => w.zIndex)) + 1 }
      ];
    });
  };

  const updateWindowPosition = (windowId, position) => {
    setOpenWindows(prev => 
      prev.map(w => w.id === windowId ? { ...w, position } : w)
    );
  };

  const updateWindowSize = (windowId, size) => {
    setOpenWindows(prev => 
      prev.map(w => w.id === windowId ? { ...w, size } : w)
    );
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolioMode', newTheme);
  };

  const handleWallpaperChange = (newWallpaper) => {
    setWallpaper(newWallpaper);
    localStorage.setItem('portfolioWallpaper', newWallpaper);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`w-screen h-screen overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-mac-dark' : 'bg-mac-gray'}`}>
      <TopBar />
      <Desktop 
        theme={theme}
        wallpaper={wallpaper}
        onOpenWindow={openWindow}
      />
      <Dock onOpenWindow={openWindow} />
      <WindowManager
        windows={openWindows}
        onCloseWindow={closeWindow}
        onBringToFront={bringToFront}
        onUpdatePosition={updateWindowPosition}
        onUpdateSize={updateWindowSize}
        onThemeChange={handleThemeChange}
        onWallpaperChange={handleWallpaperChange}
        theme={theme}
      />
    </div>
  );
}

export default App;
