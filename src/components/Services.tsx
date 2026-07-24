import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Layout, Code, CheckCircle2, ArrowRight, Sparkles, PackageCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  onOpenContact: (subject?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-400" />;
      default:
        return <Brain className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getCtaText = (serviceId: string) => {
    switch (serviceId) {
      case 'behavioral-consulting':
        return 'Solicitar Auditoria';
      case 'product-design-systems':
        return 'Solicitar Proposta de Product Design';
      case 'web-development-apps':
        return 'Solicitar Orçamento de Desenvolvimento';
      default:
        return 'Solicitar Orçamento';
    }
  };

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-16 md:py-36 bg-zinc-950 text-white relative border-t border-zinc-800/80">
      {/* Top Subtle Section Glow Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />

      {/* Sci-Fi Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Serviços & Soluções</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Como Podemos Trabalhar Juntos
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
            Do diagnóstico de conversão à entrega do produto final.
          </p>
        </div>

        {/* 3 Service Pods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES_DATA.map((service, index) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedServiceId(service.id)}
                className={`rounded-2xl border p-6 sm:p-8 cursor-pointer flex flex-col justify-between transition-all duration-300 backdrop-blur-md shadow-xl ${
                  isSelected
                    ? 'bg-zinc-900 border-cyan-500 shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-800">
                      SERVIÇO 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-cyan-300 italic font-mono mt-1 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Features / Deliverables list */}
                  <div className="pt-3 space-y-2 border-t border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">O que você recebe:</span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-6 border-t border-zinc-800/80 mt-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContact(`Solicitação de Serviço: ${service.title}`);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-mono text-base font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg ${
                      isSelected
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                    }`}
                  >
                    {getCtaText(service.id)}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Service In-Depth View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-8 border-t border-zinc-800 relative"
          >
            <div className="pb-6 border-b border-zinc-800/80">
              <div>
                <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                <p className="text-xs text-cyan-300 mt-1 font-mono italic">{activeService.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              
              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Escopo do Serviço:
                </h4>
                <div className="space-y-2">
                  {activeService.features.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4" /> Entregáveis em Mãos:
                </h4>
                <div className="space-y-2">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-300">
                      <span className="w-5 h-5 rounded-full bg-purple-950 border border-purple-800 text-purple-300 flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </motion.div>
    </section>
  );
};
