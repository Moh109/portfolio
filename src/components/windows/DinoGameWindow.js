import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DinoGameWindow = () => {
  const [gameState, setGameState] = useState('ready'); // ready, playing, gameOver
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [dinoY, setDinoY] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [gameSpeed, setGameSpeed] = useState(4);
  
  const gameRef = useRef(null);
  const dinoRef = useRef(null);
  const animationRef = useRef(null);
  const obstacleTimerRef = useRef(0);

  const jump = () => {
    if (!isJumping && gameState === 'playing') {
      setIsJumping(true);
      setDinoY(prev => prev + 11.5);
    }
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setDinoY(0);
    setIsJumping(false);
    setObstacles([]);
    setGameSpeed(4);
    obstacleTimerRef.current = 0;
  };

  const resetGame = () => {
    setGameState('ready');
    setScore(0);
    setDinoY(0);
    setIsJumping(false);
    setObstacles([]);
    setGameSpeed(4);
    obstacleTimerRef.current = 0;
  };

  const createObstacle = () => {
    const newObstacle = {
      id: Date.now(),
      x: 600,
      y: 32
    };
    setObstacles(prev => [...prev, newObstacle]);
  };

  const gameLoop = () => {
    if (gameState !== 'playing') return;

    // Dino jump physics
    if (isJumping) {
      setDinoY(prev => {
        const newY = prev - 0.7; // gravity
        if (newY <= 0) {
          setIsJumping(false);
          return 0;
        }
        return newY;
      });
    }

    // Move obstacles
    setObstacles(prev => {
      const updated = prev.map(obs => ({
        ...obs,
        x: obs.x - gameSpeed
      })).filter(obs => obs.x > -40);
      
      // Check for collisions
      if (dinoRef.current) {
        const dinoRect = dinoRef.current.getBoundingClientRect();
        const gameRect = gameRef.current.getBoundingClientRect();
        
        updated.forEach(obs => {
          const obsX = gameRect.left + obs.x;
          const obsY = gameRect.top + obs.y;
          
          if (
            dinoRect.right > obsX + 6 &&
            dinoRect.left < obsX + 24 - 6 &&
            dinoRect.bottom > obsY &&
            dinoRect.top < obsY + 40 - 8
          ) {
            setGameState('gameOver');
          }
        });
      }
      
      return updated;
    });

    // Update score
    setScore(prev => prev + 1);
    
    // Increase speed
    if (score > 0 && score % 100 === 0) {
      setGameSpeed(prev => prev + 0.5);
    }

    // Add obstacles
    obstacleTimerRef.current++;
    if (obstacleTimerRef.current > 70 + Math.floor(Math.random() * 50)) {
      createObstacle();
      obstacleTimerRef.current = 0;
    }

    animationRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    if (gameState === 'playing') {
      animationRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, isJumping, gameSpeed]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping, gameState]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5 flex flex-col items-center"
    >
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Score */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-3 right-6 text-2xl font-bold text-gray-800 z-10"
        >
          {score}
        </motion.div>

        {/* Game Area */}
        <motion.div
          ref={gameRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full h-48 bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-3"
          onClick={jump}
        >
          {/* Dino */}
          <motion.div
            ref={dinoRef}
            className="absolute left-16 bottom-8 w-12 h-12 text-4xl flex items-end justify-center z-10 transform scale-x-[-1]"
            style={{ bottom: `${32 + dinoY}px` }}
          >
            🦖
          </motion.div>

          {/* Ground */}
          <div className="absolute left-0 bottom-6 w-full h-1 bg-gray-500 rounded-sm z-0" />

          {/* Obstacles */}
          {obstacles.map(obs => (
            <motion.div
              key={obs.id}
              className="absolute bottom-8 w-6 h-10 text-2xl flex items-end justify-center z-10"
              style={{ left: `${obs.x}px` }}
            >
              🌵
            </motion.div>
          ))}
        </motion.div>

        {/* Game Controls */}
        {gameState === 'ready' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-lg px-8 py-2 text-lg text-gray-700 cursor-pointer transition-colors"
          >
            Start Game
          </motion.button>
        )}

        {gameState === 'gameOver' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="bg-gray-200 hover:bg-gray-300 border-none rounded-lg px-8 py-2 text-lg text-gray-700 cursor-pointer transition-colors"
          >
            Restart
          </motion.button>
        )}

        {gameState === 'playing' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-sm text-gray-600 mt-2"
          >
            Press Space or click to jump!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default DinoGameWindow;
