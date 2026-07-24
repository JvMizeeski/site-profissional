import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, HelpCircle, Code2, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertCircle,
      text: 'Usuários hesitam, erram ou abandonam fluxos críticos no meio do caminho',
      color: 'text-pink-400',
    },
    {
      icon: HelpCircle,
      text: 'Decisões de design tomadas no "achismo", sem base em comportamento real',
      color: 'text-purple-400',
    },
    {
      icon: Code2,
      text: 'Protótipo perfeito no Figma que vira retrabalho (ou gambiarra) na hora do código',
      color: 'text-cyan-400',
    },
  ];

  return (
    <section id="problem" className="py-16 md:py-36 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800/80">
      {/* Top Subtle Section Glow Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent pointer-events-none" />

      {/* Soft Backdrop Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

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
            Seu produto é bonito. Mas ele converte?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            A maioria dos produtos digitais não falha por falta de estética, mas sim porque ignora como o cérebro humano toma decisões sob pressão, dúvida ou cansaço.
          </p>
        </div>

        {/* 3 Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 shadow-xl backdrop-blur-md flex flex-col items-start gap-4 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center ${item.color}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-snug font-medium">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Transition Line */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-2 text-white font-mono text-xs sm:text-sm font-semibold">
            <span>É aí que entra uma forma diferente de desenhar produto.</span>
            <ArrowDown className="w-4 h-4 text-purple-400 animate-bounce" />
          </div>
        </div>

      </motion.div>
    </section>
  );
};
