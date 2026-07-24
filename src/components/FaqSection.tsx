import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quanto custa um projeto?',
      a: 'O valor varia conforme escopo e prazo. Me chama e te devolvo uma proposta personalizada em até 24 horas úteis.',
    },
    {
      q: 'Atende empresas fora do Brasil?',
      a: 'Sim: já atendi empresas na Alemanha, Áustria e Suíça, 100% remoto.',
    },
    {
      q: 'Preciso já ter um design pronto?',
      a: 'Não. Posso entrar em qualquer etapa: só com a ideia, com um protótipo no Figma, ou com um produto no ar que precisa de auditoria.',
    },
    {
      q: 'Você entrega só o design ou também o código?',
      a: 'Os dois. Faço a ponte entre Figma e produção: entrego design system e componentes React/TypeScript prontos para o time de dev usar.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-36 bg-zinc-950 text-white relative border-t border-zinc-800/80">
      {/* Top Subtle Section Glow Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-lg">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Perguntas Frequentes
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base">
            Respostas diretas sobre modelo de trabalho, prazos e entregáveis.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900/80 border border-zinc-800/90 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer hover:bg-zinc-900/90"
                >
                  <span className="text-sm sm:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 sm:p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-cyan-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 pt-3 sm:pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};
