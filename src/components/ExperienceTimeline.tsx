import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORK_EXPERIENCES, ACADEMIC_DEGREES, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  return (
    <section id="experience" className="py-16 md:py-36 bg-zinc-950 text-white relative border-t border-zinc-800/80">
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
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-lg">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sobre Mim & Trajetória</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Quem está por trás do método
          </h2>
          <p className="text-zinc-300 text-xs sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Sou UX/UI Designer especializado em Behavioral Design: uso neurociência comportamental para desenhar produtos digitais que reduzem erro, aumentam confiança e convertem mais. Atuo do discovery à entrega em código, ponte entre design e engenharia.
          </p>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col sm:flex-row p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 font-mono text-sm sm:text-base backdrop-blur-md w-full sm:w-auto gap-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer text-xs sm:text-base ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>Experiência ({WORK_EXPERIENCES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer text-xs sm:text-base ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Formação & Pós ({ACADEMIC_DEGREES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer text-xs sm:text-base ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>Certificações ({CERTIFICATIONS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB CONTENTS WITH ANIMATE PRESENCE */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: WORK EXPERIENCES */}
          {activeTab === 'experience' && (
            <motion.div
              key="exp"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {WORK_EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-4 relative backdrop-blur-md shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                        {exp.company}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-0.5">{exp.role}</h3>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 space-y-1">
                      <span className="flex items-center gap-1 text-cyan-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 2: ACADEMIC EDUCATION */}
          {activeTab === 'education' && (
            <motion.div
              key="edu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {ACADEMIC_DEGREES.map((deg, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3 flex flex-col justify-between backdrop-blur-md shadow-xl"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-bold">{deg.institution}</span>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                        {deg.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">{deg.field}</h3>
                    <p className="text-xs font-mono text-zinc-400">{deg.degree}</p>

                    <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-zinc-800/80">
                      {deg.highlights}
                    </p>
                  </div>

                  <div className="pt-3 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{deg.status === 'in_progress' ? 'Em Aprofundamento Ativo' : 'Concluído com Êxito'}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 3: CERTIFICATIONS */}
          {activeTab === 'certifications' && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
            >
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all space-y-2.5 flex flex-col justify-between backdrop-blur-md"
                >
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <h4 className="text-xs font-bold text-white leading-snug">{cert.title}</h4>
                    </div>

                    <div className="text-[11px] font-mono text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                      {cert.issueDate && (
                        <>
                          <span className="text-zinc-600">•</span>
                          <span>{cert.issueDate}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>
    </section>
  );
};
