import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_CASES } from '../data/portfolioData';
import { ProjectCase } from '../types';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

interface PortfolioGridProps {
  onOpenContact: (subject?: string) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<ProjectCase | null>(null);

  const filterOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'saas-healthcare', label: 'Healthcare & SaaS' },
    { id: 'saas-checkout', label: 'SaaS & Checkout' },
    { id: 'dach-ecommerce', label: 'Mercado DACH (EU)' },
    { id: 'branding-lifestyle', label: 'Brand & E-commerce' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_CASES
    : PORTFOLIO_CASES.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-zinc-950/95 border-t border-zinc-800/80 text-white relative">
      {/* Top Subtle Section Glow Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-lg">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Provas & Portfólio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Resultados que sustentam o discurso
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Cases de produto desenvolvidos para o mercado brasileiro e europeu com foco em redução de fricção e conversão comprovada.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-800">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-600/20 border border-cyan-400/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Header Tag & Client */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold font-mono text-white">
                    {project.title}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{project.period}</span>
                </div>

                <p className="text-xs text-zinc-400 font-mono">
                  {project.client}
                </p>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Quote */}
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-900/40 text-[11px] text-cyan-200 italic font-mono">
                  "{project.behavioralInsight}"
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                      #{t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="px-6 py-4 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">{project.role}</span>
                <button
                  onClick={() => setSelectedCase(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 font-mono transition-colors cursor-pointer"
                >
                  Ver Case Detalhado →
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Case Study Details */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-8"
              >
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-3 pr-10">
                  <div className="flex items-center gap-3 font-mono text-xs text-cyan-400">
                    <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                      {selectedCase.client}
                    </span>
                    <span>{selectedCase.period}</span>
                    <span>• {selectedCase.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">{selectedCase.title}</h3>
                  <p className="text-zinc-300 text-base italic">{selectedCase.tagline}</p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <h4 className="text-xs font-bold text-rose-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      ⚠️ O Desafio do Projeto
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">{selectedCase.challenge}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <h4 className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      ✅ Solução Executada
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">{selectedCase.solution}</p>
                  </div>
                </div>

                {/* Behavioral Insight Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border border-cyan-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>INSIGHT COMPORTAMENTAL</span>
                  </div>
                  <p className="text-sm text-zinc-100 leading-relaxed">
                    "{selectedCase.behavioralInsight}"
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-200 font-mono uppercase">Entregáveis Chave do Projeto:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCase.keyDeliverables.map((deliv, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {selectedCase.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCase(null);
                      onOpenContact(`Interesse referente ao case: ${selectedCase.title}`);
                    }}
                    className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs font-mono shadow-lg shadow-cyan-600/20 transition-all active:scale-95 cursor-pointer"
                  >
                    Quero um Projeto Semelhante →
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
};
