import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Target, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  RefreshCw,
  Eye,
  Sliders
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FinalCtaSectionProps {
  onOpenContact: (subject?: string) => void;
}

interface PsychologicalState {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgGlow: string;
  tag: string;
  symptom: string;
  diagnosis: string;
  prescription: string;
  ctaText: string;
  subjectPreset: string;
}

const PSYCHO_STATES: PsychologicalState[] = [
  {
    id: 'cognitive-overload',
    label: 'Carga Cognitiva Elevada',
    icon: Brain,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgGlow: 'from-amber-500/20 via-orange-500/10 to-transparent',
    tag: 'Fricção de Interface',
    symptom: 'Usuários se sentem confusos com excesso de opções e abandonam o fluxo no meio.',
    diagnosis: 'Ruído óptico e falta de hierarquia visual ativando ansiedade de escolha (Lei de Hick).',
    prescription: 'Redesenho minimalista focado em Arquitetura de Decisão Sequencial + Carga Zero.',
    ctaText: 'Eliminar Carga Cognitiva',
    subjectPreset: 'Diagnóstico de Carga Cognitiva & UX'
  },
  {
    id: 'churn-onboarding',
    label: 'Gargalo no Onboarding',
    icon: Zap,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/50',
    bgGlow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    tag: 'Ativação de Produto',
    symptom: 'Altos cadastros, mas a maioria dos usuários não atinge o Momento AHA!',
    diagnosis: 'Falta de gatilhos de recompensa imediata (Dopamina UX) e navegação sem orientação.',
    prescription: 'Fluxo de Onboarding Lock-in progressivo + Recompensas visuais em micro-etapas.',
    ctaText: 'Acelerar Ativação de Usuários',
    subjectPreset: 'Otimização de Onboarding & Retenção'
  },
  {
    id: 'value-perception',
    label: 'Baixa Percepção de Valor',
    icon: Target,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    bgGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    tag: 'LTV & Ticket Médio',
    symptom: 'O produto é tecnicamente incrível, mas clientes acham o preço elevado.',
    diagnosis: 'Interface com estética genérica não transmite a robustez e a autoridade da solução.',
    prescription: 'Design System de Alta Percepção + Efeito de Ancoragem de Preço e Clareza de Valor.',
    ctaText: 'Elevar Valor Percebido',
    subjectPreset: 'Estratégia de Posicionamento & Design System'
  },
  {
    id: 'disruptive-vision',
    label: 'Visão Disruptiva & Marca',
    icon: Sparkles,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/50',
    bgGlow: 'from-purple-500/20 via-pink-500/10 to-transparent',
    tag: 'Inovação Radical',
    symptom: 'Queremos criar uma experiência memorável que desmantele a concorrência tradicional.',
    diagnosis: 'Oportunidade para um Design Emocional com animações kinetic, micro-interações e alma.',
    prescription: 'Interface Imersiva de Próxima Geração + Arquitetura de Dados Contínua.',
    ctaText: 'Criar Produto Disruptivo',
    subjectPreset: 'Projeto Especial de Design Disruptivo'
  }
];

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  const [selectedState, setSelectedState] = useState<PsychologicalState>(PSYCHO_STATES[0]);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<number>(85);
  const [particleBurst, setParticleBurst] = useState<boolean>(false);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Interactive Particle Canvas effect inside CTA
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate interactive particles based on current state color
    interface P {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }

    const particles: P[] = [];
    const colorMap: Record<string, string[]> = {
      'cognitive-overload': ['#f59e0b', '#fbbf24', '#d97706', '#ffffff'],
      'churn-onboarding': ['#06b6d4', '#38bdf8', '#3b82f6', '#ffffff'],
      'value-perception': ['#10b981', '#34d399', '#059669', '#ffffff'],
      'disruptive-vision': ['#a855f7', '#ec4899', '#8b5cf6', '#ffffff']
    };

    const currentColors = colorMap[selectedState.id] || ['#38bdf8', '#a855f7'];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        color: currentColors[Math.floor(Math.random() * currentColors.length)]
      });
    }

    let burstTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * (intensity / 50);
        p.y += p.vy * (intensity / 50);

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 110) * 0.25;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      if (particleBurst) {
        burstTimer++;
        if (burstTimer > 30) {
          setParticleBurst(false);
          burstTimer = 0;
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedState, intensity, particleBurst]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const triggerCtaAction = () => {
    setParticleBurst(true);
    onOpenContact(selectedState.subjectPreset);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800/80">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Qual é a dor <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">psicológica</span> do seu produto hoje?
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            Selecione o sintoma atual da sua interface abaixo para visualizar a estratégia neuro-comportamental de resolução e acionar o diagnóstico.
          </p>
        </div>

        {/* Interactive Matrix Container */}
        <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800/90 shadow-2xl backdrop-blur-xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Canvas Background for CTA */}
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-60" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive State Selector */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Sintonizador de Sintomas
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">
                  Clique para alterar
                </span>
              </div>

              {PSYCHO_STATES.map((state) => {
                const Icon = state.icon;
                const isSelected = selectedState.id === state.id;

                return (
                  <button
                    key={state.id}
                    onClick={() => setSelectedState(state)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isSelected
                        ? `${state.borderColor} bg-zinc-900/90 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/30`
                        : 'border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/50'
                    }`}
                  >
                    {/* Active Gradient Highlight */}
                    {isSelected && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${state.bgGlow} pointer-events-none`} />
                    )}

                    <div className="relative z-10 flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 ${state.color} shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                            {state.label}
                          </h4>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${state.borderColor} ${state.color} bg-zinc-950/80 shrink-0`}>
                            {state.tag}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                          {state.symptom}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Diagnostic & Dynamic Interactive CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-8 relative overflow-hidden space-y-6">
              
              {/* Top Section Glow corresponding to selected state */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedState.bgGlow} blur-3xl pointer-events-none`} />

              {/* Diagnostic Box Header */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <Eye className={`w-4 h-4 ${selectedState.color}`} />
                    <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                      Diagnóstico & Prescrição Neuro-UX
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Sincronia 99.4%
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedState.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                        Causa Raiz Identificada:
                      </span>
                      <p className="text-sm font-medium text-zinc-200 leading-relaxed bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                        {selectedState.diagnosis}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Plano de Ação Proposto:
                      </span>
                      <p className="text-sm font-semibold text-white leading-relaxed bg-cyan-950/30 p-3.5 rounded-xl border border-cyan-800/40 text-cyan-100">
                        {selectedState.prescription}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Interactive Synaptic Intensity Dial */}
              <div className="pt-2 border-t border-zinc-800/60 relative z-10 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span>Intensidade de Reestruturação UX</span>
                  <span className={`${selectedState.color} font-bold`}>{intensity}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Action Trigger Button */}
              <div className="pt-2 relative z-10 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={triggerCtaAction}
                  className={`w-full py-4 px-6 rounded-xl font-mono font-bold text-sm sm:text-base text-white shadow-2xl flex items-center justify-center gap-3 transition-all cursor-pointer relative overflow-hidden group ${
                    selectedState.id === 'cognitive-overload'
                      ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/30'
                      : selectedState.id === 'churn-onboarding'
                      ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/30'
                      : selectedState.id === 'value-perception'
                      ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30'
                      : 'bg-purple-600 hover:bg-purple-500 shadow-purple-600/30'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {selectedState.ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </span>

                  {/* Button Shiny Flare Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </motion.button>

                <p className="text-[11px] font-mono text-center text-zinc-400 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Atendimento direto via João Vitor • Resposta rápida em até 2h</span>
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Direct Quick-Contact Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Email Card with Copy */}
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 group relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>E-mail Direto</span>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copiar e-mail"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-xs font-bold font-mono text-white group-hover:text-cyan-300 transition-colors block truncate"
            >
              {PERSONAL_INFO.email}
            </a>
            {copiedField === 'email' && (
              <span className="text-[10px] font-mono text-emerald-400 absolute bottom-1 right-4 animate-fade-in">
                Copiado!
              </span>
            )}
          </div>

          {/* WhatsApp Direct Link with Copy */}
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-emerald-500/50 transition-all duration-300 group relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copiar WhatsApp"
              >
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <a 
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold font-mono text-white group-hover:text-emerald-300 transition-colors block truncate"
            >
              {PERSONAL_INFO.phone}
            </a>
            {copiedField === 'phone' && (
              <span className="text-[10px] font-mono text-emerald-400 absolute bottom-1 right-4 animate-fade-in">
                Copiado!
              </span>
            )}
          </div>

          {/* Location */}
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Localização</span>
            </div>
            <span className="text-xs font-bold font-mono text-white block truncate">
              Palhoça / Florianópolis, SC
            </span>
          </div>

          {/* Social Links */}
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-around">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-300 hover:text-cyan-400 transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={PERSONAL_INFO.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-300 hover:text-cyan-400 transition-colors group"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Behance</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
