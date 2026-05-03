import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 5000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-[5vw]">
        <motion.div 
          className="text-center mb-[8vh]"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        >
          <h2 className="text-[4vw] font-bold">Integrated Scenario Engine</h2>
          <p className="text-[1.5vw] text-[var(--color-text-secondary)]">What-if scheduling & finance modeling.</p>
        </motion.div>

        <div className="w-[80vw] h-[50vh] bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-2xl shadow-2xl flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-[25%] bg-[var(--color-bg-dark)] border-r border-[var(--color-border)] p-[2vw]">
            <motion.div 
              className="h-[3vh] w-3/4 bg-white/10 rounded mb-[3vh]"
              initial={{ opacity: 0 }} animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            />
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="h-[5vh] w-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded mb-[2vh]"
                initial={{ opacity: 0, x: -20 }}
                animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
          
          {/* Main Area - Art Order Assembler Mock */}
          <div className="flex-1 p-[3vw] relative">
            <motion.div 
              className="text-[1.5vw] font-mono text-[var(--color-accent)] mb-[2vh]"
              initial={{ opacity: 0 }} animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
            >
              ART BUDGET MODEL
            </motion.div>
            
            <div className="flex gap-[2vw]">
              <motion.div 
                className="flex-1 h-[30vh] bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={phase >= 3 ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                style={{ originY: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="flex-1 h-[20vh] mt-[10vh] bg-[var(--color-primary)]/20 rounded-xl border border-[var(--color-primary)]/50"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={phase >= 3 ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                style={{ originY: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div 
                className="flex-1 h-[25vh] mt-[5vh] bg-[var(--color-accent)]/20 rounded-xl border border-[var(--color-accent)]/50"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={phase >= 3 ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                style={{ originY: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
            
            {/* Animated calculation line */}
            <motion.div 
              className="absolute left-[3vw] right-[3vw] top-[50%] h-[2px] bg-white"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={phase >= 3 ? { scaleX: 1, opacity: 0.5 } : { scaleX: 0, opacity: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
