import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Target, Award } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tighter text-white mb-6">Impact & Achievements</h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-white/40 max-w-2xl mx-auto font-light italic">Measurable results and key milestones achieved throughout my career.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-accent">
                {idx === 0 ? <Target size={80} /> : idx === 1 ? <Star size={80} /> : <Trophy size={80} />}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent">
                  <Award size={24} />
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">{ach.metric}</h3>
                <p className="text-xl font-semibold text-white/80 mb-4">{ach.title}</p>
                <p className="text-white/50 leading-relaxed font-light">{ach.context}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
