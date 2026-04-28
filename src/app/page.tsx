"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import KineticBackground from '@/components/KineticBackground';
import { Cloud, Code, Brain, Database, Mail, Phone, ExternalLink, Cpu, Activity, Fingerprint, Zap, GraduationCap, Radio, Send, Terminal, Link2, ShieldCheck } from 'lucide-react';

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
  useEffect(() => { 
    const timer = setTimeout(() => setLoading(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black text-white selection:bg-cyan-500 selection:text-black min-h-screen">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <KineticBackground />
      <HUD />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* HERO */}
        <section className="h-screen flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
            <h1 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-8">
              AGENTIC<br/><span className="text-[var(--neon-cyan)] italic">ENGINEERING</span>
            </h1>
            <p className="text-2xl sm:text-4xl text-white/40 uppercase tracking-[0.3em] font-light">Yosef Safi // Protocol 01</p>
          </motion.div>
        </section>

        {/* LOGIC */}
        <NeuralSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-8xl font-black uppercase mb-12 italic text-white/10">Logic</h2>
              <p className="text-3xl text-white/60 leading-tight mb-12 uppercase tracking-tighter">Decrypting technical stacks and system dependencies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((s, i) => (
                <div key={i} className="glass-card p-8 group hover:bg-[var(--neon-cyan)] hover:text-black transition-all border-none">
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
                <div className="glass-card p-12 relative border-none">
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

        {/* INPUT */}
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

        {/* FUTURISTIC UPLINK OVERHAUL */}
        <section className="min-h-screen flex flex-col justify-center py-32 relative z-[110]">
          <div className="bg-white/[0.01] border border-white/5 backdrop-blur-2xl rounded-[80px] p-8 sm:p-24 relative overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(var(--neon-cyan) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 text-center mb-32">
                <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-flex items-center gap-4 px-8 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-12"
                >
                    <Radio size={18} className="text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-[0.5em] text-cyan-400 font-bold">Uplink Protocol Active</span>
                </motion.div>
                <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none mb-6">INITIATE<br/><span className="text-[var(--neon-cyan)] italic">CONNECTION</span></h2>
                <p className="text-white/30 font-mono text-sm uppercase tracking-[0.3em] max-w-lg mx-auto">Select a secure data node below to establish a direct neural synchronization with the primary source.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 relative z-10 px-8">
                <FuturisticLink 
                    href="mailto:Yosefsafi@hotmail.com" 
                    icon={<Mail size={28} />} 
                    title="Direct Mail" 
                    subtitle="Secure Transmission"
                    code="ST-MAILX"
                    color="#00ffff"
                />
                <FuturisticLink 
                    href="tel:+467605365" 
                    icon={<Phone size={28} />} 
                    title="Voice Sync" 
                    subtitle="Real-time Uplink"
                    code="ST-VOICE"
                    color="#ff00ff"
                />
                <FuturisticLink 
                    href="https://www.linkedin.com/in/yosef-safi-6b6257248/" 
                    icon={<Link2 size={28} />} 
                    title="Neural Network" 
                    subtitle="LinkedIn Profile"
                    code="ST-LINKD"
                    external
                    color="#ffff00"
                />
            </div>
          </div>
        </section>

      </div>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

function FuturisticLink({ href, icon, title, subtitle, code, external, color }: { href: string, icon: any, title: string, subtitle: string, code: string, external?: boolean, color: string }) {
    return (
        <a href={href} 
           target={external ? "_blank" : undefined}
           rel={external ? "noopener noreferrer" : undefined}
           className="group relative p-14 bg-white/[0.01] rounded-[40px] transition-all duration-700 w-full max-w-[480px] border"
           style={{ 
              ['--node-color' as any]: color,
              borderColor: `${color}20`,
              background: `linear-gradient(135deg, ${color}08 0%, transparent 100%)`
           }}>
            
            {/* Full Box Color Fill on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[40px] pointer-events-none" 
                 style={{ 
                    background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
                    boxShadow: `inset 0 0 50px ${color}20`
                 }} />
            
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex justify-between items-start mb-16">
                    <div className="p-5 bg-white/5 rounded-2xl border transition-all duration-500"
                         style={{ 
                            borderColor: `${color}30`,
                            backgroundColor: `${color}10`,
                            color: color
                         }}>
                        <div className="group-hover:scale-110 transition-all duration-500">{icon}</div>
                    </div>
                    <div className="text-right font-mono">
                        <div className="text-[10px] uppercase mb-1 tracking-[0.2em]"
                             style={{ color: `${color}60` }}>Terminal ID</div>
                        <div className="text-xs font-bold tracking-widest transition-colors"
                             style={{ color: color }}>{code}</div>
                    </div>
                </div>
                
                <h4 className="text-4xl font-black uppercase mb-2 tracking-tighter transition-colors"
                    style={{ color: color }}>{title}</h4>
                <p className="text-sm font-mono uppercase tracking-[0.3em] transition-colors"
                    style={{ color: `${color}60` }}>{subtitle}</p>
                
                <div className="mt-10 pt-8 border-t flex items-center justify-between"
                     style={{ borderColor: `${color}20` }}>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_var(--node-color)]" 
                             style={{ backgroundColor: color }} />
                        <span className="text-[10px] font-mono uppercase font-bold tracking-[0.3em] whitespace-nowrap"
                              style={{ color: color }}>Secure Connection Active</span>
                    </div>
                    <div className="group-hover:translate-x-2 transition-all duration-500"
                         style={{ color: color }}>
                        <Send size={20} />
                    </div>
                </div>
            </div>
            
            {/* Hover Border Glow */}
            <div className="absolute inset-0 border rounded-[40px] transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-100" 
                 style={{ borderColor: `${color}60`, boxShadow: `0 0 30px ${color}10` }} />
        </a>
    )
}

function HUD() {
  return (
    <div className="fixed top-12 right-12 z-[150] flex flex-col items-end gap-2 mix-blend-difference pointer-events-none">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">Neural Link Optimal</span>
        <div className="h-px w-16 bg-white/20" />
        <Activity size={18} className="text-[var(--neon-cyan)] animate-pulse" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">Auth Signature Verified</span>
        <div className="h-px w-16 bg-white/20" />
        <Fingerprint size={18} className="text-[var(--neon-cyan)] opacity-60" />
      </div>
      <div className="mt-2 text-right">
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-[var(--neon-cyan)]">AGENTIC_ROOT_2026</span>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-12">
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-64 bg-gradient-to-b from-transparent via-[var(--neon-cyan)] to-transparent" />
      <p className="mt-12 font-mono text-[var(--neon-cyan)] tracking-[1em] uppercase text-[10px] animate-pulse">Establishing Agentic Connection</p>
    </motion.div>
  );
}
