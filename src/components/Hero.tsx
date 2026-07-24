import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-44 md:pb-36 overflow-hidden text-white">
      {/* Sci-Fi Celestial Nebula Background Glows / Soft Spot Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[320px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[280px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      
      {/* HUD Coordinate Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          
          {/* Left Main Value Proposition (Cols 1 to 7) */}
          <div className="lg:col-span-7 space-y-5">

            
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Produtos Digitais desenhados para seres humanos
              </h1>

              {/* Subtitle placed right below heading */}
              <p className="text-base sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono leading-snug">
                João Mizeeski • UX/UI - Neurociência Aplicada
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Transformo sistemas complexos em produtos digitais intuitivos e de alta conversão. Aplico neurociência cognitiva para eliminar complexidade visual, reduzir erros e acelerar a adoção de usuários: de plataformas SaaS B2B e produtos de saúde a e-commerce e fintech, nos mercados brasileiro e europeu.
            </p>

            {/* Action Buttons */}
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary Button: Agendar Consultoria */}
                <button
                  onClick={() => onOpenContact('Agendamento de Consultoria UX')}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-base shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 border border-blue-400/30 cursor-pointer w-full sm:w-auto"
                >
                  Agendar Consultoria
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button: Ver Portfólio */}
                <a
                  href="#portfolio"
                  className="px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-mono font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-lg w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  Ver Portfólio
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: User's Uploaded Hero Image - Hidden on mobile as requested */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center w-full"
            >
              <img
                src="/assets/img/hero.png"
                alt="Neurociência e Design de Interface"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[480px] drop-shadow-[0_10px_35px_rgba(2,132,199,0.15)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
