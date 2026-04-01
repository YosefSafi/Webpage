"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 800, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .glass-card, .group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* HUD Coordinates - The "Character" */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: 25,
          top: 25,
        }}
        className="absolute font-mono text-[8px] tracking-tighter text-cyan-500/50 flex flex-col gap-0"
      >
        <span>X: {coords.x}</span>
        <span>Y: {coords.y}</span>
        <span className="mt-1 animate-pulse">{isHovering ? "DATA_LINK_DETECTED" : "SCANNING_ENVIRONMENT..."}</span>
      </motion.div>

      {/* Target Crosshair */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
        }}
        animate={{
            rotate: isHovering ? 90 : 0,
            scale: isHovering ? 1.2 : 1
        }}
        className="absolute w-10 h-10 border border-cyan-500/20 rounded-sm"
      >
        <div className="w-px h-full bg-cyan-500/10 absolute left-1/2 -translate-x-1/2" />
        <div className="h-px w-full bg-cyan-500/10 absolute top-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Main Core */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -3,
          top: -3,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          backgroundColor: isHovering ? '#ff00ff' : '#00ffff',
          boxShadow: isHovering ? '0 0 20px #ff00ff' : '0 0 15px #00ffff',
        }}
        className="absolute w-1.5 h-1.5 rounded-full"
      />

      {/* Orbital Ring */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -30,
          top: -30,
        }}
        animate={{
          rotate: 360,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#ff00ff' : '#00ffff',
        }}
        transition={{ rotate: { repeat: Infinity, duration: 4, ease: "linear" } }}
        className="absolute w-[60px] h-[60px] rounded-full border border-dashed border-opacity-30"
      />
    </div>
  );
}
