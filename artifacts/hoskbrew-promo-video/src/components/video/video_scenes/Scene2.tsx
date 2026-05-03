import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1400),
      setTimeout(() => setPhase(5), 5200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 bg-[var(--color-bg-dark)]"
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={{ clipPath: 'inset(0% 0 0 0)' }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 p-[5vw] flex flex-col justify-center h-full">
        <motion.h2 
          className="text-[3.5vw] font-bold mb-[4vh] max-w-[40vw] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Your entire studio health at a glance.
        </motion.h2>

        <div className="flex gap-[2vw]">
          {/* KPI Card 1 */}
          <motion.div 
            className="flex-1 bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-xl p-[2vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="text-[var(--color-text-secondary)] font-mono text-[1vw] mb-[1vh]">ACTIVE PROJECTS</div>
            <div className="text-[3.5vw] font-bold text-[var(--color-primary)]">14</div>
            <div className="text-[1vw] text-[var(--color-success)] mt-[1vh]">↑ 2 this month</div>
          </motion.div>

          {/* KPI Card 2 */}
          <motion.div 
            className="flex-1 bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-xl p-[2vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="text-[var(--color-text-secondary)] font-mono text-[1vw] mb-[1vh]">UPCOMING DEADLINES</div>
            <div className="text-[3.5vw] font-bold text-[var(--color-accent)]">3</div>
            <div className="text-[1vw] text-[var(--color-warning)] mt-[1vh]">Requires attention</div>
          </motion.div>

          {/* KPI Card 3 */}
          <motion.div 
            className="flex-1 bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-xl p-[2vw] relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="text-[var(--color-text-secondary)] font-mono text-[1vw] mb-[1vh]">STUDIO HEALTH</div>
            <div className="text-[3.5vw] font-bold text-[var(--color-success)]">92%</div>
            
            {/* Chart line mock */}
            <svg className="absolute bottom-0 left-0 w-full h-[50%] opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
              <motion.path 
                d="M0,100 C20,80 40,90 60,60 C80,30 100,50 100,50 L100,100 Z" 
                fill="var(--color-success)"
                initial={{ opacity: 0, y: 50 }}
                animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
