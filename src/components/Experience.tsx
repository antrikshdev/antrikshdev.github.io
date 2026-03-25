import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Calendar, Briefcase, Zap } from 'lucide-react';
import { resumeData } from '../resumeData';
import { cn } from '../utils';

export const Experience: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Professional Experience</h2>
        <div className="h-1 w-20 bg-white rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "group relative rounded-3xl border transition-all duration-500 overflow-hidden",
              expandedIdx === idx 
                ? "bg-white/10 border-white/20 shadow-2xl shadow-white/5" 
                : "bg-white/5 border-white/5 hover:border-white/10"
            )}
          >
            <button
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="w-full p-8 text-left flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-white">{exp.role}</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-mono">
                    {exp.company}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.dates}</span>
                  {exp.location && <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>}
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                className="p-2 rounded-full bg-white/5 text-white/60"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/5">
                    {exp.bullets.length > 0 ? (
                      <ul className="space-y-4">
                        {exp.bullets.map((bullet, bIdx) => (
                          <motion.li
                            key={bIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bIdx * 0.05 }}
                            className="flex gap-4 text-white/70 leading-relaxed"
                          >
                            <Zap size={16} className="mt-1.5 shrink-0 text-white/30" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/40 italic">Details coming soon...</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

