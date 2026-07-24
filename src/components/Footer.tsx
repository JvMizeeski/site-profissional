import React from 'react';
import { Brain, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-white pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info (Cols 1 to 5) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 p-[1px]">
                <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <div className="text-left">
                <span className="font-bold text-lg tracking-tight text-white block font-mono">
                  {PERSONAL_INFO.name}<span className="text-purple-400 font-extrabold">.</span>
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  UX / UI Specialist | Behavioral Design
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm text-center md:text-left">
              Construindo produtos digitais fundamentados na Neurociência da atenção e decisão. Foco em redução de carga cognitiva, escalabilidade e desenvolvimento web de alta performance.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                title="Behance"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Behance</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 6 to 8) */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left">
            <h4 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Sobre mim</a></li>
              <li><a href="#problem" className="hover:text-cyan-400 transition-colors">O Desafio</a></li>
              <li><a href="#behavioral" className="hover:text-cyan-400 transition-colors">Meu Método</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio & Cases</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Trajetória</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Direct Contact (Cols 9 to 12) */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left flex flex-col items-center md:items-start w-full">
            <h4 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">Contato Direto</h4>
            <div className="space-y-2 text-xs text-zinc-300 flex flex-col items-center md:items-start">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <p className="text-zinc-400 text-[11px] font-mono">
                📍 {PERSONAL_INFO.location}
              </p>
            </div>

            <button
              onClick={() => onOpenContact('Solicitação de Orçamento de Projeto')}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base font-mono transition-all cursor-pointer"
            >
              Solicitar Orçamento de Projeto →
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} João Vitor Mizeeski. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Engenharia Comportamental, UX & Web Dev
          </p>
        </div>

      </div>
    </footer>
  );
};
