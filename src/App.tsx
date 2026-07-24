import React, { useState } from 'react';
import { CosmicNeuralCanvas } from './components/CosmicNeuralCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerMarquee } from './components/TickerMarquee';
import { ProblemSection } from './components/ProblemSection';
import { BehavioralApproach } from './components/BehavioralApproach';
import { Services } from './components/Services';
import { StatsBanner } from './components/StatsBanner';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('Agendamento de Consultoria UX');

  const handleOpenContact = (subject?: string) => {
    if (subject) setContactSubject(subject);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500 selection:text-white relative">
      {/* Cosmic Starfield & Neural Canvas Backdrop */}
      <CosmicNeuralCanvas />

      {/* Fixed Sticky Header Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections Following Commercial IA */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Continuous Smooth Infinite Marquee Ticker */}
        <TickerMarquee />

        {/* 2. O Problema */}
        <ProblemSection />

        {/* 3 & 4. Minha Abordagem & Como Funciona (3 Passos) */}
        <BehavioralApproach onOpenContact={handleOpenContact} />

        {/* Big Numbers & Métricas (+10 Anos de Experiência) */}
        <StatsBanner />

        {/* 5. Serviços */}
        <Services onOpenContact={handleOpenContact} />

        {/* 6. Sobre Mim / Trajetória */}
        <ExperienceTimeline />

        {/* 7. FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact & Scheduling Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialSubject={contactSubject}
      />
    </div>
  );
}
