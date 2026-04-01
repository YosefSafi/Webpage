"use client";
import React, { useEffect, useRef } from 'react';

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

class Entity {
  x: number; y: number; vx: number; vy: number; radius: number;
  name: string; color: string; w: number; h: number;
  history: {x: number, y: number}[] = [];

  constructor(name: string, color: string, w: number, h: number) {
    this.name = name; this.color = color; this.w = w; this.h = h;
    this.radius = 50;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
  }

  update(mouseX: number, mouseY: number) {
    this.history.push({x: this.x, y: this.y});
    if (this.history.length > 20) this.history.shift();

    this.x += this.vx;
    this.y += this.vy;

    if (this.x > this.w || this.x < 0) this.vx *= -1;
    if (this.y > this.h || this.y < 0) this.vy *= -1;

    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 250) {
      this.vx += dx/dist * 0.5;
      this.vy += dy/dist * 0.5;
    }
    
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw Trail
    ctx.beginPath();
    ctx.moveTo(this.history[0]?.x, this.history[0]?.y);
    for(let i=1; i<this.history.length; i++) {
      ctx.lineTo(this.history[i].x, this.history[i].y);
    }
    ctx.strokeStyle = `${this.color}22`;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(this.x, this.y);
    
    // Outer Glow
    const g = ctx.createRadialGradient(0,0,0,0,0,this.radius);
    g.addColorStop(0, `${this.color}33`);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.arc(0,0,this.radius,0,Math.PI*2);
    ctx.fill();

    // Box
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.strokeRect(-40, -12, 80, 24);
    
    // Text
    ctx.fillStyle = this.color;
    ctx.font = '900 8px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(this.name.toUpperCase(), 0, 4);
    
    ctx.restore();
  }
}

export default function KineticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const entities = useRef<Entity[]>([]);
  const mouse = useRef({x: -1000, y: -1000});

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext('2d')!;
    
    const init = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      entities.current = AI_COMPANIES.map(comp => new Entity(comp.name, comp.color, c.width, c.height));
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', (e) => { mouse.current = {x: e.clientX, y: e.clientY}; });
    init();

    const loop = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.15)'; // Trail effect
      ctx.fillRect(0,0,c.width,c.height);
      
      entities.current.forEach(e => {
        e.update(mouse.current.x, mouse.current.y);
        e.draw(ctx);
      });
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] bg-black pointer-events-none" />;
}
