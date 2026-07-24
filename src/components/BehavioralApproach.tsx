import React from 'react';
import { motion } from 'motion/react';
import { Brain, Zap, Orbit, Code2, ShieldCheck, Eye, Layers, ArrowRight } from 'lucide-react';

interface BehavioralApproachProps {
  onOpenContact?: (subject?: string) => void;
}

export const BehavioralApproach: React.FC<BehavioralApproachProps> = ({ onOpenContact }) => {
  const cards = [
    {
      kicker: '01 · Cognição',
      title: 'Menos Carga Mental',
      phrase: 'Telas desenhadas dentro dos limites da memória de trabalho: menos hesitação, menos erro, mesmo em sistemas densos.',
      tags: ['Figma Variables', 'Usability Tests'],
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/20',
      borderColor: 'border-cyan-500/30',
      hoverBorderColor: 'hover:border-cyan-400/60',
    },
    {
      kicker: '02 · Comportamento',
      title: 'Decisões Mais Fáceis',
      phrase: 'Heurísticas éticas que guiam a escolha do usuário, sem gerar paralisia e sem dark patterns.',
      tags: ['A/B Testing', 'Micro-Interações'],
      icon: Orbit,
      color: 'text-purple-400',
      bgColor: 'bg-purple-950/20',
      borderColor: 'border-purple-500/30',
      hoverBorderColor: 'hover:border-purple-400/60',
    },
    {
      kicker: '03 · Arquitetura',
      title: 'Arquitetura de Projeto',
      phrase: 'Organização de componentes, auto-layout rigoroso e fluxos estruturados no Figma para um handoff limpo e sem dúvidas.',
      tags: ['Figma', 'Auto Layout', 'Design System'],
      icon: Code2,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/20',
      borderColor: 'border-emerald-500/30',
      hoverBorderColor: 'hover:border-emerald-400/60',
    },
    {
      kicker: '04 · Validação',
      title: 'Provado, Não Suposto',
      phrase: 'Testes de usabilidade e telemetria real transformam decisão de design em KPI de receita.',
      tags: ['Hotjar', 'Clarity', 'HeatMap'],
      icon: ShieldCheck,
      color: 'text-pink-400',
      bgColor: 'bg-pink-950/20',
      borderColor: 'border-pink-500/30',
      hoverBorderColor: 'hover:border-pink-400/60',
    },
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Diagnóstico',
      desc: 'Mapeamos onde seus usuários travam, erram ou desistem: formulários, checkout, telas críticas.',
      icon: Eye,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/60 border-cyan-500/30',
    },
    {
      step: '02',
      title: 'Redesenho Estratégico',
      desc: 'Reestruturamos as decisões visuais com heurísticas comportamentais éticas: mais conversão, sem parecer forçado.',
      icon: Orbit,
      color: 'text-purple-400',
      bgColor: 'bg-purple-950/60 border-purple-500/30',
    },
    {
      step: '03',
      title: 'Entrega no Figma & Consultoria',
      desc: 'Entregamos o protótipo interativo no Figma com design system estruturado, acompanhado da consultoria e documentação técnica.',
      icon: Layers,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/60 border-emerald-500/30',
    },
  ];

  return (
    <section id="behavioral" className="py-16 md:py-36 bg-zinc-950/90 border-t border-zinc-800/80 text-white relative overflow-hidden">
      {/* Top Gradient Glow Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

      {/* Ambient Sci-Fi Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Como eu penso o design: <br className="hidden sm:block" />
            4 frentes, um objetivo
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed font-normal">
            Cada card resume uma frente de atuação: da neurociência à estrutura em produção.
          </p>
        </div>

        {/* 4 Cards Fixed Side-by-Side Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-20">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-zinc-900/90 border ${card.borderColor} ${card.hoverBorderColor} backdrop-blur-xl flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Kicker + Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {card.kicker}
                    </span>
                    <div className={`w-8 h-8 rounded-lg ${card.bgColor} border border-zinc-800 flex items-center justify-center ${card.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Short Title & Single Phrase */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                      {card.phrase}
                    </p>
                  </div>

                </div>

                {/* Tags Footer */}
                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Como Funciona (Process) Section */}
        <div className="pt-10 border-t border-zinc-800/80 space-y-8 relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Brain className="w-4 h-4" /> COMO FUNCIONA
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1 leading-snug">
                Do diagnóstico ao produto pronto: em 3 etapas
              </h3>
            </div>

            {onOpenContact && (
              <button
                onClick={() => onOpenContact('Aplicação do Método no Produto')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer shrink-0"
              >
                Quero aplicar isso no meu produto
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative pt-2">
            {pipelineSteps.map((stepItem, idx) => {
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 space-y-3 relative group hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      ETAPA {stepItem.step}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {stepItem.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {stepItem.desc}
                  </p>

                  {/* Overlapping arrow between cards */}
                  {idx < pipelineSteps.length - 1 && (
                    <>
                      {/* Desktop horizontal arrow */}
                      <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900 border border-cyan-500/50 text-cyan-400 items-center justify-center shadow-md shadow-black/80">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      {/* Mobile vertical arrow */}
                      <div className="flex md:hidden absolute left-1/2 -bottom-5 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900 border border-cyan-500/50 text-cyan-400 items-center justify-center shadow-md shadow-black/80">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </motion.div>
    </section>
  );
};
