import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Window = ({ 
  window, 
  children, 
  onClose, 
  onBringToFront, 
  onUpdatePosition, 
  onUpdateSize,
  theme 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.resize-handle')) return;
    
    onBringToFront();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - (window.position?.x || 0),
      y: e.clientY - (window.position?.y || 0)
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Clamp to viewport
      const clampedX = Math.max(0, Math.min(newX, window.innerWidth - 40));
      const clampedY = Math.max(0, Math.min(newY, window.innerHeight - 40));
      
      onUpdatePosition({ x: clampedX, y: clampedY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleResizeStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.size?.width || 800,
      height: window.size?.height || 600
    });
  };

  const handleResizeMove = (e) => {
    if (isResizing) {
      const newWidth = Math.max(250, resizeStart.width + (e.clientX - resizeStart.x));
      const newHeight = Math.max(150, resizeStart.height + (e.clientY - resizeStart.y));
      onUpdateSize({ width: newWidth, height: newHeight });
    }
  };

  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', isDragging ? handleMouseMove : handleResizeMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', isDragging ? handleMouseMove : handleResizeMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart]);

  return (
    <motion.div
      ref={windowRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`fixed bg-mac-light text-gray-800 rounded-2xl shadow-mac z-50 flex flex-col min-w-64 min-h-40 ${
        theme === 'dark' ? 'bg-mac-dark text-gray-100 shadow-mac-dark' : ''
      }`}
      style={{
        left: window.position?.x || 0,
        top: window.position?.y || 0,
        width: window.size?.width || 800,
        height: window.size?.height || 600,
        zIndex: window.zIndex || 1000
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Window Header */}
      <div className="flex items-center h-12 px-4 bg-transparent border-b border-gray-200 rounded-t-2xl cursor-move select-none">
        <div className="flex gap-2 items-center mr-3">
          <span 
            className="traffic-light red" 
            onClick={onClose}
          />
        </div>
        <span className="flex-1 text-center font-medium text-base text-gray-800 tracking-wide mr-10">
          {window.label || window.id}
        </span>
      </div>

      {/* Window Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>

      {/* Resize Handle */}
      <div
        className="resize-handle absolute w-4 h-4 right-0.5 bottom-0.5 cursor-se-resize z-10"
        onMouseDown={handleResizeStart}
      >
        <div className="w-full h-full bg-gray-400 opacity-50 rounded-sm" />
      </div>
    </motion.div>
  );
};

export default Window;
