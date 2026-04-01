"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AI_COMPANIES = [
  { name: 'OpenAI', color: '#74aa9c' },
  { name: 'Anthropic', color: '#cc785c' },
  { name: 'DeepMind', color: '#4285f4' },
  { name: 'Meta AI', color: '#0668E1' },
  { name: 'Mistral', color: '#f5d142' },
  { name: 'Perplexity', color: '#20b2aa' },
  { name: 'NVIDIA', color: '#76b900' },
  { name: 'Groq', color: '#f96d00' }
];

export default function KineticBackground() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {AI_COMPANIES.map((company, i) => (
        <motion.div
          key={company.name}
          initial={{ 
            x: Math.random() * dimensions.width, 
            y: Math.random() * dimensions.height 
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute flex items-center justify-center"
        >
          <div 
            className="px-4 py-2 rounded-full border text-[10px] font-bold tracking-widest uppercase whitespace-nowrap glass-panel"
            style={{ 
              borderColor: company.color, 
              color: company.color,
              boxShadow: `0 0 20px ${company.color}33`
            }}
          >
            {company.name}
          </div>
        </motion.div>
      ))}
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--neon-blue)] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--neon-purple)] opacity-10 blur-[120px] rounded-full"></div>
    </div>
  );
}
