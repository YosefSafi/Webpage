"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import KineticBackground from '@/components/KineticBackground';
import { Cloud, Code, Brain, Database, Mail, Phone, ExternalLink, Cpu, Activity, Fingerprint, Zap, GraduationCap } from 'lucide-react';

const SKILLS = [
  { category: 'Cloud Infrastructure', items: ['.NET Cloud', 'Azure', 'DevOps', 'CI/CD Pipelines'], icon: <Cloud size={24} /> },
  { category: 'System Architecture', items: ['C#', 'SQL Server', 'EF Core', 'Node.js', 'MongoDB'], icon: <Database size={24} /> },
  { category: 'Neural Interfaces', items: ['React', 'Next.js 15', 'Blazor', 'TypeScript'], icon: <Code size={24} /> },
  { category: 'Cognitive Engine', items: ['Agentic AI', 'Prompt Engineering', 'LLM Integration', 'Python'], icon: <Brain size={24} /> },
];

const EXPERIENCE = [
  { company: 'SEBRATEC', role: 'FULLSTACK DEVELOPER', period: '2026 - PRESENT', desc: 'Architecting high-availability SaaS platforms. Mastery of Azure ecosystem.', tech: ['Azure', 'CI/CD', 'SaaS'] },
  { company: 'PODMANAGER', role: 'CLOUD TEAMLEADER', period: '2025', desc: 'Led tactical engineering group. Established neural workflows in DevOps.', tech: ['Leadership', 'Azure', 'DevOps'] }
];

const EDUCATION = [
  { institution: 'IT-Högskolan', degree: '.NET Cloud Developer', year: '2026' },
  { institution: 'Harvard University (CS50)', degree: 'Computer Science Certificate', year: '2024' }
];

function NeuralSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const skew = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, skewY: skew, opacity }} className="py-32">
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2500); }, []);

  return (
    <main className="relative bg-black text-white selection:bg-cyan-500 selection:text-black min-h-screen">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <KineticBackground />
      
      {/* HUD ELEMENTS */}
      <HUD />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* HERO */}
        <section className="h-screen flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
            <h1 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-8">
              SYNTHETIC<br/><span className="text-[var(--neon-cyan)] italic">ENGINEER</span>
            </h1>
            <p className="text-2xl sm:text-4xl text-white/40 uppercase tracking-[0.3em] font-light">Yosef Safi // Architecture 01</p>
          </motion.div>
        </section>

        {/* LOGIC */}
        <NeuralSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-8xl font-black uppercase mb-12 italic text-white/10">Logic</h2>
              <p className="text-3xl text-white/60 leading-tight mb-12">DECRYPTING TECHNICAL STACKS AND SYSTEM DEPENDENCIES.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((s, i) => (
                <div key={i} className="glass-card p-8 group hover:bg-[var(--neon-cyan)] hover:text-black transition-all">
                  <div className="mb-8">{s.icon}</div>
                  <h4 className="font-bold uppercase tracking-widest mb-4">{s.category}</h4>
                  <div className="space-y-1 opacity-60 group-hover:opacity-100 text-xs font-mono uppercase">
                    {s.items.map(item => <div key={item}>// {item}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </NeuralSection>

        {/* EXECUTION */}
        <NeuralSection>
          <h2 className="text-8xl font-black uppercase mb-32 italic text-white/10 text-right">Execution</h2>
          <div className="space-y-48">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="text-9xl font-black opacity-5">0{i+1}</div>
                <div className="glass-card p-12 relative">
                  <span className="text-[var(--neon-cyan)] font-mono text-sm tracking-[0.5em] mb-4 block uppercase">{exp.period}</span>
                  <h3 className="text-5xl font-black uppercase mb-6">{exp.company}</h3>
                  <p className="text-xl text-white/60 mb-8 font-light leading-relaxed tracking-wide">"{exp.desc}"</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => <span key={t} className="px-4 py-1 border border-white/10 rounded-full text-[10px] font-mono opacity-40">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NeuralSection>

        {/* INPUT (EDUCATION) */}
        <NeuralSection>
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-32">
            <h2 className="text-6xl font-black uppercase mb-16 tracking-widest text-center">Neural <span className="text-[var(--neon-cyan)]">Inputs</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="group">
                  <GraduationCap size={48} className="mx-auto mb-8 text-white/20 group-hover:text-[var(--neon-cyan)] transition-all" />
                  <h4 className="text-2xl font-bold uppercase mb-2 tracking-tighter">{edu.institution}</h4>
                  <p className="text-[var(--neon-cyan)] font-mono text-xs uppercase tracking-[0.3em]">{edu.degree} // {edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </NeuralSection>

        {/* UPLINK */}
        <section className="min-h-screen flex flex-col justify-center border-t border-white/5">
          <div className="text-center">
            <h2 className="text-[15vw] font-black uppercase leading-none mb-16 mix-blend-difference">UPLINK</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <ContactLink href="mailto:Yosefsafi@hotmail.com" label="Email" />
              <ContactLink href="tel:0760536557" label="Voice" />
              <ContactLink href="https://github.com/YosefSafi" label="Source" />
            </div>
          </div>
        </section>

      </div>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

function HUD() {
  return (
    <>
      <div className="fixed top-12 left-12 z-[100] flex items-center gap-6 mix-blend-difference">
        <Activity size={20} className="text-[var(--neon-cyan)] animate-pulse" />
        <div className="h-[1px] w-24 bg-white/20" />
        <span className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-40">System Core Active</span>
      </div>
      <div className="fixed bottom-12 right-12 z-[100] mix-blend-difference text-right">
        <span className="text-[8px] font-mono uppercase opacity-30 block mb-2">Internal Integrity</span>
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[var(--neon-cyan)]">NEURAL_VERIFIED_2026</span>
      </div>
    </>
  );
}

function ContactLink({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} className="group relative px-12 py-6 overflow-hidden glass-card border-none">
      <div className="absolute inset-0 bg-[var(--neon-cyan)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <span className="relative z-10 text-2xl font-black uppercase tracking-widest group-hover:text-black transition-colors">{label}</span>
    </a>
  );
}

function LoadingScreen() {
  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-12">
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-64 bg-gradient-to-b from-transparent via-[var(--neon-cyan)] to-transparent" />
      <p className="mt-12 font-mono text-[var(--neon-cyan)] tracking-[1em] uppercase text-[10px] animate-pulse">Establishing Synthetic Uplink</p>
    </motion.div>
  );
}
