import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export const SCENE_DURATIONS: Record<string, number> = {
  open: 5000,
  dashboard: 7000,
  capacity: 7000,
  planning: 7000,
  close: 6000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: Scene1,
  dashboard: Scene2,
  capacity: Scene3,
  planning: Scene4,
  close: Scene5,
};

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      {/* Persistent Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--color-bg-dark)]" />
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full blur-[80px] opacity-20"
          style={{ background: 'var(--color-primary)', top: '-20%', left: '-10%' }}
          animate={{
            x: ['0%', '10%', '-5%', '0%'],
            y: ['0%', '5%', '-10%', '0%'],
            scale: [1, 1.1, 0.9, 1],
            opacity: sceneIndex === 4 ? 0.4 : 0.2
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[60px] opacity-15"
          style={{ background: 'var(--color-accent)', bottom: '-20%', right: '-10%' }}
          animate={{
            x: ['0%', '-15%', '5%', '0%'],
            y: ['0%', '-5%', '10%', '0%'],
            opacity: sceneIndex === 0 || sceneIndex === 4 ? 0.3 : 0.15
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '4vw 4vw'
          }}
        />
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
