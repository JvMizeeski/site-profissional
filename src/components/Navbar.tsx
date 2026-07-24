import React, { useState, useEffect } from 'react';
import { Brain, Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Abordagem', href: '#behavioral' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Trajetória', href: '#experience' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-gradient-to-b from-zinc-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-400/40 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center font-mono">
                Mizeeski<span className="text-purple-400 font-extrabold">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Aligned to the Right) */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner shadow-cyan-500/5 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 hover:text-cyan-300 rounded-full transition-all duration-200 font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-900/80 border border-zinc-800 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-cyan-500/20 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:text-cyan-300 hover:bg-zinc-900/80 border border-transparent hover:border-zinc-800 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Agendamento de Consultoria UX');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Agendar Consultoria
            </button>
            <div className="flex justify-around pt-2 text-xs text-zinc-400 font-mono">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href={PERSONAL_INFO.behance} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                Behance <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

