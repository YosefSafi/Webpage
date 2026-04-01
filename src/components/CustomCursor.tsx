"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 800, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
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
      {/* Target Crosshair */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
        }}
        className="absolute w-10 h-10 border border-cyan-500/20 rounded-lg flex items-center justify-center"
      >
        <div className="w-[1px] h-2 bg-cyan-500 absolute top-0" />
        <div className="w-[1px] h-2 bg-cyan-500 absolute bottom-0" />
        <div className="h-[1px] w-2 bg-cyan-500 absolute left-0" />
        <div className="h-[1px] w-2 bg-cyan-500 absolute right-0" />
      </motion.div>

      {/* Main Core */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -4,
          top: -4,
        }}
        animate={{
          scale: isHovering ? 4 : 1,
          backgroundColor: isHovering ? 'rgba(255, 0, 255, 0.5)' : '#00ffff',
        }}
        className="absolute w-2 h-2 rounded-full shadow-[0_0_15px_#00ffff]"
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

      {/* Scan Line */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -50,
          top: -50,
        }}
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute w-[100px] h-[1px] bg-cyan-500/10 shadow-[0_0_5px_cyan]"
      />
    </div>
  );
}
