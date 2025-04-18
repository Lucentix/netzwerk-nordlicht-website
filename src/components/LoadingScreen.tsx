import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + Math.random() * 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);
  
  const lightsVariants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-nord-dark flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-md">
        {/* Nordic lights animation */}
        <div className="relative h-40 mb-8 overflow-hidden">
          {/* Light streaks */}
          <motion.div 
            className="absolute top-10 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-[#A3BE8C]/40 to-transparent blur-xl"
            variants={lightsVariants}
            animate="animate"
            custom={0}
          />
          <motion.div 
            className="absolute top-15 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-[#88C0D0]/60 to-transparent blur-xl"
            variants={lightsVariants}
            animate="animate"
            custom={1}
            style={{ animationDelay: "-1s" }}
          />
          <motion.div 
            className="absolute top-5 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-[#5E81AC]/40 to-transparent blur-xl"
            variants={lightsVariants}
            animate="animate"
            custom={2}
            style={{ animationDelay: "-2s" }}
          />
          <motion.div 
            className="absolute top-20 left-0 right-0 h-5 bg-gradient-to-r from-transparent via-[#B48EAD]/50 to-transparent blur-xl"
            variants={lightsVariants}
            animate="animate"
            custom={3}
            style={{ animationDelay: "-1.5s" }}
          />
        </div>
        
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl md:text-4xl font-bold text-nord-accent">Netzwerk</span>
          <span className="text-3xl md:text-4xl font-bold text-nord-light ml-2">Nordlicht</span>
        </motion.div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-nord-dark-lighter rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-nord-accent/80 to-nord-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        
        <motion.p 
          className="text-center text-nord-light/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {progress < 100 ? 'Lade Server Inhalte...' : 'Willkommen!'}
        </motion.p>
      </div>
      
      {/* Loading tip */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-nord-light/50 text-sm px-4 max-w-lg mx-auto">
          Tipp: Tritt unserer Discord-Community bei, um über alle Server-Updates und Events informiert zu bleiben.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;