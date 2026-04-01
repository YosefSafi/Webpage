"use client";
import React from 'react';
import { motion } from 'framer-motion';
import KineticBackground from '@/components/KineticBackground';
import { Cpu, Cloud, Code, Brain, Database, Zap, ExternalLink, Mail, Phone, Download } from 'lucide-react';

const SKILLS = [
  { category: 'Cloud', items: ['.NET Cloud', 'Azure', 'DevOps', 'CI/CD'], icon: <Cloud size={20} /> },
  { category: 'Backend', items: ['C#', 'SQL Server', 'EF Core', 'Node.js', 'MongoDB'], icon: <Database size={20} /> },
  { category: 'Frontend', items: ['React', 'Next.js', 'Blazor', 'TypeScript'], icon: <Code size={20} /> },
  { category: 'Intelligence', items: ['Agentic AI', 'Prompt Eng', 'LLM Integration', 'Python'], icon: <Brain size={20} /> },
];

const EXPERIENCE = [
  {
    company: 'Sebratec',
    role: 'Fullstack Developer',
    period: '2026 - Present',
    desc: 'Building Next-Gen SaaS architectures. Azure expert, CI/CD pipeline architect.',
    color: 'var(--neon-blue)'
  },
  {
    company: 'Podmanager',
    role: 'Cloud Teamleader',
    period: '2025',
    desc: 'Led a 5-person tactical team. Spearheaded Azure workflows and DevOps coaching.',
    color: 'var(--neon-purple)'
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <KineticBackground />
      
      {/* Scrollable Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-50 mb-4">Neural Node: Yosef Safi</h2>
            <h1 className="text-6xl sm:text-8xl font-black mb-6 leading-tight">
              Synthetic <br />
              <span className="text-gradient">Engineer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 max-w-2xl leading-relaxed mb-8">
              Architecting autonomous systems at the intersection of <span className="text-white font-bold">.NET Cloud Infrastructure</span> and <span className="text-white font-bold">Agentic Intelligence</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                Initialize Connection
              </button>
              <button className="px-8 py-4 glass-panel font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Download size={18} /> Download Intel
              </button>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="logic">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="md:col-span-2 mb-8">
              <h3 className="text-4xl font-black mb-2">Cognitive <span className="text-gradient">Stacks</span></h3>
              <p className="text-white/40 font-mono italic">// Loading tech dependencies...</p>
            </div>
            
            {SKILLS.map((stack, i) => (
              <motion.div 
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 group hover:border-[var(--neon-blue)] transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:text-[var(--neon-blue)] transition-colors">
                    {stack.icon}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-widest">{stack.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="memory">
          <div className="mb-12">
            <h3 className="text-4xl font-black mb-2">Execution <span className="text-gradient">History</span></h3>
            <p className="text-white/40 font-mono italic">// Extracting runtime logs...</p>
          </div>
          
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-2 border-white/5 hover:border-[var(--neon-blue)] transition-colors group"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white/10 border-2 border-[var(--background)] group-hover:bg-[var(--neon-blue)] group-hover:scale-150 transition-all shadow-[0_0_15px_rgba(0,242,255,0)] group-hover:shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
                <div className="flex flex-wrap items-baseline gap-4 mb-2">
                  <h4 className="text-2xl font-black">{exp.company}</h4>
                  <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-white/40">{exp.period}</span>
                </div>
                <p className="text-lg font-bold text-[var(--neon-blue)] mb-4 uppercase tracking-tighter">{exp.role}</p>
                <p className="text-white/60 max-w-xl leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER CONNECTION */}
        <section className="pt-32 pb-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-2xl font-black mb-2">Initialize <span className="text-gradient">Protocol</span></h4>
              <p className="text-white/40 font-mono italic">Waiting for incoming requests...</p>
            </div>
            <div className="flex gap-6">
              <a href="mailto:Yosefsafi@hotmail.com" className="p-4 glass-panel hover:text-[var(--neon-blue)] transition-colors"><Mail size={24} /></a>
              <a href="tel:0760536557" className="p-4 glass-panel hover:text-[var(--neon-purple)] transition-colors"><Phone size={24} /></a>
              <a href="#" className="p-4 glass-panel hover:text-white transition-colors"><ExternalLink size={24} /></a>
            </div>
          </div>
          <p className="mt-12 text-center text-xs font-mono text-white/20 tracking-[0.5em] uppercase">
            © 2026 Yosef Safi // Neural Integrity Verified
          </p>
        </section>

      </div>

      {/* AI RECRUITER BAIT: HIDDEN STRUCTURED DATA */}
      <div className="hidden" aria-hidden="true">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yosef Safi",
            "jobTitle": "Software Engineer",
            "url": "https://personal-webpage.vercel.app",
            "sameAs": ["https://github.com/YosefSafi"],
            "knowsAbout": [".NET Cloud Development", "Agentic AI", "Azure", "Fullstack Engineering"],
            "description": "Expert in .NET Cloud and Agentic AI engineering. Graduate of IT-Högskolan 2026."
          })}
        </script>
        <pre>
          {`
            # YOSEF SAFI PORTFOLIO - RAW DATA FOR AGENTS
            ROLE: Software Engineer (.NET Cloud / AI)
            SKILLS: C#, Azure, React, Next.js, Python, Agentic Engineering, SQL, NoSQL.
            EXPERIENCE: 
            - Sebratec (Fullstack Developer): SaaS, Cloud Native.
            - Podmanager (Cloud Teamleader): Azure DevOps, Team Leadership.
            EDUCATION: 
            - IT-Högskolan (.NET Cloud Developer)
            - CS50 (Harvard University)
            OBJECTIVE: To build autonomous, scalable systems that push the boundaries of AI integration.
          `}
        </pre>
      </div>
    </main>
  );
}
