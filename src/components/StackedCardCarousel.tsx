import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Orbit, Code2, ChevronLeft, ChevronRight, Layers, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface SpecializationCard {
  id: string;
  badge: string;
  title: string;
  metric: string;
  metricLabel: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  borderColor: string;
  description: string;
  keyPoints: string[];
  techStack: string[];
}

const CARDS: SpecializationCard[] = [
  {
    id: 'neuroscience',
    badge: 'MÓDULO 01 // COGNITION',
    title: 'NEUROCIÊNCIA & CARGA COGNITIVA',
    metric: '-42%',
    metricLabel: 'Atrito e Erros de Digitação',
    icon: Brain,
    color: 'text-cyan-400',
    glowColor: 'from-cyan-500/20 to-blue-600/10',
    borderColor: 'border-cyan-500/40',
    description: 'Interfaces desenhadas respeitando os limites estritos da memória de trabalho humana (Regra de Miller, 7±2). Redução direta de hesitação e falhas de entrada em sistemas hospitalares e plataformas SaaS B2B de alta densidade.',
    keyPoints: [
      'Eliminação de poluição e ruído visual desnecessário',
      'Arquitetura focada na atenção seletiva do usuário',
      'Mapeamento de tempo de resposta neural (<100ms)',
    ],
    techStack: ['Figma Variables', 'Eye-Tracking Heatmaps', 'Cognitive Audits'],
  },
  {
    id: 'nudges',
    badge: 'MÓDULO 02 // BEHAVIOR',
    title: 'ARQUITETURA DE ESCOLHAS (NUDGES)',
    metric: '+38%',
    metricLabel: 'Retenção e Completude de Fluxos',
    icon: Orbit,
    color: 'text-purple-400',
    glowColor: 'from-purple-500/20 to-indigo-600/10',
    borderColor: 'border-purple-500/40',
    description: 'Heurísticas comportamentais éticas que guiam o usuário através de escolhas complexas sem gerar paralisia por análise. Micro-feedbacks visuais que constroem confiança incremental a cada clique.',
    keyPoints: [
      'Ancoragem de preços e opcionalidades complexas',
      'Minimização do efeito do viés de aversão à perda',
      'Design intuitivo sem uso de dark patterns',
    ],
    techStack: ['Behavioral Canvas', 'A/B Experimentation', 'Micro-Interactions'],
  },
  {
    id: 'designops',
    badge: 'MÓDULO 03 // ARCHITECTURE',
    title: 'DESIGN OPS & REACT FRONT-END',
    metric: '90%',
    metricLabel: 'Taxa de Reutilização de Código',
    icon: Code2,
    color: 'text-emerald-400',
    glowColor: 'from-emerald-500/20 to-teal-600/10',
    borderColor: 'border-emerald-500/40',
    description: 'Componentes de Design System rigorosamente tipados em TypeScript, assegurando alinhamento total entre especificações no Figma, design tokens e código pronto para produção.',
    keyPoints: [
      'Tokens universais sincronizados (Color, Type, Space)',
      'Componentes React de alta acessibilidade (WCAG AA+)',
      'Documentação viva e integrada com Storybook e CI/CD',
    ],
    techStack: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Figma Tokens'],
  },
  {
    id: 'analytics',
    badge: 'MÓDULO 04 // VALIDATION',
    title: 'AUDITORIA & MÉTRICAS COMPORTAMENTAIS',
    metric: '99.4%',
    metricLabel: 'Previsibilidade de Interação',
    icon: ShieldCheck,
    color: 'text-amber-400',
    glowColor: 'from-amber-500/20 to-orange-600/10',
    borderColor: 'border-amber-500/40',
    description: 'Testes de usabilidade quantitativos e auditorias continuadas. Mapeamento de jornadas de usuário com telemetria direta para comprovar ganhos reais de negócio e satisfação.',
    keyPoints: [
      'Rastreamento de pontos quentes e atrito visual',
      'Validação de hipóteses antes do go-to-market',
      'KPIs de UX diretamente conectados à receita',
    ],
    techStack: ['Hotjar', 'Mixpanel', 'FullStory', 'Usability Auditing'],
  },
];

export const StackedCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <section className="py-20 bg-zinc-950/90 border-t border-cyan-500/15 text-white relative overflow-hidden">
      {/* Soft Glow Background Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>CARROSSEL INTERATIVO DE ESPECIALIZAÇÕES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Especialidades em Destaque
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Navegue pelos cartões para explorar os módulos interativos que unem neurociência, engenharia e código.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-2 font-mono text-xs text-zinc-400">
              <span className="text-cyan-400 font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(CARDS.length).padStart(2, '0')}</span>
            </div>

            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white transition-all active:scale-95 shadow-lg"
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 hover:text-cyan-100 transition-all active:scale-95 shadow-lg shadow-cyan-950/50"
              title="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stacked Cards Deck Area */}
        <div className="relative min-h-[460px] sm:min-h-[420px] flex items-center justify-center">
          {CARDS.map((card, index) => {
            // Calculate relative offset from active card
            const total = CARDS.length;
            const offset = (index - currentIndex + total) % total;
            const isActive = offset === 0;

            // Visual properties based on position in stack
            let translateY = offset * 18;
            let scale = 1 - offset * 0.05;
            let opacity = offset > 2 ? 0 : 1 - offset * 0.25;
            let zIndex = total - offset;

            // Hide cards way back in the stack to prevent lag
            if (offset > 2) {
              translateY = 40;
              scale = 0.85;
              opacity = 0;
            }

            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                onClick={() => setCurrentIndex(index)}
                initial={false}
                animate={{
                  y: translateY,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                className={`absolute inset-x-0 mx-auto max-w-4xl p-6 sm:p-8 rounded-3xl bg-zinc-900/95 border ${
                  isActive ? `${card.borderColor} shadow-2xl shadow-cyan-950/50 cursor-default` : 'border-zinc-800 cursor-pointer hover:border-zinc-700'
                } backdrop-blur-xl transition-colors duration-300 overflow-hidden`}
                style={{
                  transformOrigin: 'top center',
                }}
              >
                {/* Background Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.glowColor} opacity-50 pointer-events-none`} />

                <div className="relative z-10 space-y-6">
                  
                  {/* Top Bar inside Card */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center ${card.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 block tracking-widest">{card.badge}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{card.title}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800/90 font-mono">
                      <span className={`text-xl font-extrabold ${card.color}`}>{card.metric}</span>
                      <span className="text-[11px] text-zinc-400">{card.metricLabel}</span>
                    </div>
                  </div>

                  {/* Card Main Description */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>

                  {/* Key Points & Tech Pills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Entregáveis de Impacto:</span>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {card.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className={`${card.color} mt-0.5`}>•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Ferramentas & Tecnologias:</span>
                      <div className="flex flex-wrap gap-2">
                        {card.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {CARDS.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
              }`}
              title={`Ir para ${card.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
