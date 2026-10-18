import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth springs for cursor movement
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  const dotConfig = { damping: 35, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(-100, dotConfig);
  const dotY = useSpring(-100, dotConfig);

  useEffect(() => {
    // Only enable on devices with a mouse/trackpad
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor-hover], .cursor-pointer'
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <>
      {/* Outer Spring Halo */}
      <motion.div
        className="cursor-follower border border-sky-400/60 dark:border-sky-400/80 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered
            ? 'rgba(56, 189, 248, 0.15)'
            : 'rgba(56, 189, 248, 0.03)',
          borderColor: isHovered
            ? 'rgba(56, 189, 248, 0.9)'
            : 'rgba(56, 189, 248, 0.45)',
          scale: isClicking ? 0.8 : 1,
          opacity: 1,
        }}
        transition={{
          width: { duration: 0.18, ease: 'easeOut' },
          height: { duration: 0.18, ease: 'easeOut' },
          scale: { duration: 0.12 },
          backgroundColor: { duration: 0.18 },
        }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="cursor-follower bg-sky-400 pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
          scale: isClicking ? 0.6 : 1,
          opacity: isHovered ? 0.7 : 1,
        }}
        transition={{
          duration: 0.1,
        }}
      />
    </>
  );
}
