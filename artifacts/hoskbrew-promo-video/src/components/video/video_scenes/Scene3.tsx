import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 5000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const teamMembers = [
    { name: "Writers", load: 85, color: "var(--color-success)" },
    { name: "Editors", load: 110, color: "var(--color-error)" },
    { name: "Artists", load: 60, color: "var(--color-success)" },
    { name: "Layout", load: 95, color: "var(--color-warning)" },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex"
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left side text */}
      <div className="w-[40%] bg-[var(--color-bg-light)] p-[5vw] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[var(--color-accent)] font-mono text-[1vw] tracking-wider mb-[2vh]">CAPACITY GAP ANALYSIS</div>
          <h2 className="text-[4vw] font-bold leading-tight mb-[3vh]">Find the bottlenecks before they happen.</h2>
        </motion.div>
      </div>

      {/* Right side heatmap */}
      <div className="w-[60%] bg-[var(--color-bg-dark)] p-[5vw] flex flex-col justify-center relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 border-[0.5px] border-[var(--color-border)] opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '2vw 2vw' }} />

        <div className="space-y-[4vh] relative z-10">
          {teamMembers.map((team, idx) => (
            <motion.div 
              key={team.name}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="flex justify-between font-mono text-[1.2vw] mb-[1vh]">
                <span>{team.name}</span>
                <span style={{ color: team.color }}>{team.load}%</span>
              </div>
              <div className="h-[2vh] w-full bg-[#1e293b] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: team.color }}
                  initial={{ width: '0%' }}
                  animate={phase >= 3 ? { width: `${Math.min(team.load, 100)}%` } : { width: '0%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Warning Callout */}
        <motion.div 
          className="absolute bottom-[5vw] right-[5vw] bg-[var(--color-error)]/20 border border-[var(--color-error)] rounded-lg p-[1.5vw]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', delay: 0.8 }}
        >
          <div className="text-[var(--color-error)] font-bold text-[1.2vw]">⚠️ Overcapacity Detected</div>
          <div className="text-white/80 text-[1vw]">Editors at 110% load in Q3</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
