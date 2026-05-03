import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300), // Toggle toggle
      setTimeout(() => setPhase(2), 1500), // Show final logo
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-bg-dark)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Mode Toggle Demo */}
      <motion.div 
        className="absolute top-[20vh] flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={phase < 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      >
        <div className="text-[1.5vw] text-[var(--color-text-secondary)] mb-[2vh]">Seamlessly switch views</div>
        <div className="flex bg-[var(--color-bg-muted)] p-[0.5vw] rounded-full">
          <motion.div 
            className="px-[2vw] py-[1vh] rounded-full text-[1.2vw] font-bold"
            animate={{ 
              backgroundColor: phase >= 1 ? 'transparent' : 'var(--color-primary)',
              color: phase >= 1 ? 'var(--color-text-secondary)' : '#fff'
            }}
          >
            Internal
          </motion.div>
          <motion.div 
            className="px-[2vw] py-[1vh] rounded-full text-[1.2vw] font-bold"
            animate={{ 
              backgroundColor: phase >= 1 ? 'var(--color-accent)' : 'transparent',
              color: phase >= 1 ? '#fff' : 'var(--color-text-secondary)'
            }}
          >
            Client Mode
          </motion.div>
        </div>
      </motion.div>

      {/* Final Logo Lockup */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="w-[10vw] h-[10vw] mb-[3vh] relative">
          {/* Logo icon representation */}
          <motion.div 
            className="absolute inset-0 bg-[var(--color-primary)] rounded-2xl"
            animate={{ rotate: 45 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-[var(--color-accent)] rounded-2xl mix-blend-screen"
            initial={{ rotate: 0 }}
            animate={phase >= 2 ? { rotate: 75 } : { rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
        
        <h1 className="text-[5vw] font-black tracking-tight mb-[1vh]">
          Hoskbrew Engine
        </h1>
        <p className="text-[1.5vw] text-[var(--color-text-secondary)] font-mono">
          by Freelance Forge
        </p>
      </motion.div>
    </motion.div>
  );
}
