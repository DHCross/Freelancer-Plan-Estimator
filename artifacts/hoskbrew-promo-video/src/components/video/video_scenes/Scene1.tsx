import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 3200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-10">
        {/* Top Tagline */}
        <motion.div
          className="flex items-center gap-4 mb-[2vh]"
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="h-[2px] w-[3vw] bg-[var(--color-accent)]" />
          <span className="text-[1.2vw] font-mono tracking-widest text-[var(--color-text-secondary)] uppercase">
            TTRPG Studio Management
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-[6vw] leading-[1.1] font-black tracking-tight" style={{ perspective: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 40 }}
            animate={phase >= 2 ? { opacity: 1, rotateX: 0, y: 0 } : { opacity: 0, rotateX: 45, y: 40 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="block"
          >
            Produce Better.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 40 }}
            animate={phase >= 3 ? { opacity: 1, rotateX: 0, y: 0 } : { opacity: 0, rotateX: 45, y: 40 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="block text-[var(--color-primary)]"
          >
            Launch Faster.
          </motion.div>
        </h1>
        
        {/* Floating geometric elements in background */}
        <motion.div
          className="absolute -z-10 top-0 left-[60%] w-[20vw] h-[20vw] border border-[var(--color-primary)] rounded-lg opacity-20"
          animate={{ rotate: 180, y: [-20, 20, -20] }}
          transition={{ rotate: { duration: 10, ease: 'linear', repeat: Infinity }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
        />
      </div>
    </motion.div>
  );
}
