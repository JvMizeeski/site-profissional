import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Globe, Gauge } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      value: '+10 Anos',
      label: 'de Experiência',
      icon: Award,
      color: 'text-cyan-400',
    },
    {
      value: '+50',
      label: 'Projetos Entregues',
      icon: CheckCircle,
      color: 'text-purple-400',
    },
    {
      value: 'Atuação',
      label: 'Brasil, Alemanha e EUA',
      icon: Globe,
      color: 'text-emerald-400',
    },
    {
      value: 'Proficiência',
      label: 'UX, Eng. de Software e Neurociência',
      icon: Gauge,
      color: 'text-indigo-400',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-zinc-950/80 border-y border-zinc-800/80 text-white relative overflow-hidden">
      {/* Top Subtle Section Glow Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col items-center justify-center space-y-2 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <IconComp className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-zinc-400 font-mono">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
