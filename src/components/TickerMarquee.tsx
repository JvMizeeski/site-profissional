import React from 'react';
import { motion } from 'motion/react';

interface TickerItem {
  text: string;
  color: string;
}

const TICKER_ITEMS: TickerItem[] = [
  { text: '10 anos de experiência', color: 'text-cyan-400' },
  { text: 'Atuação mercado DACH', color: 'text-purple-400' },
  { text: 'UX Design', color: 'text-emerald-400' },
  { text: 'DesignOps', color: 'text-blue-400' },
  { text: 'UI Design', color: 'text-indigo-400' },
  { text: 'Design System', color: 'text-teal-400' },
  { text: 'UX Research', color: 'text-sky-400' },
  { text: 'Neurociência', color: 'text-purple-300' },
  { text: 'Engenharia de Software', color: 'text-emerald-300' },
  { text: 'Comportamento Humano', color: 'text-cyan-300' },
];

export const TickerMarquee: React.FC = () => {
  // Multiply items for seamless continuous scrolling
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full py-6 overflow-hidden border-y border-zinc-900/80 relative z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex items-center gap-6 whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 32,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className={`font-mono text-xs sm:text-sm tracking-wider font-semibold ${item.color}`}>
              {item.text}
            </span>
            <span className="font-mono text-xs text-zinc-700 font-bold select-none">//</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
