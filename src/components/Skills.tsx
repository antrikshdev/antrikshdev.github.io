import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../resumeData';

export const Skills: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light tracking-tighter text-white mb-6">Technical Arsenal</h2>
            <div className="h-1 w-12 bg-accent rounded-full mb-6" />
            <p className="text-white/40 leading-relaxed font-light">
              A comprehensive suite of tools and technologies mastered over a decade of engineering excellence.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          {resumeData.skills.map((skillGroup, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-accent/60 mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.02 }}
                    className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 text-white/70 text-sm hover:bg-accent/10 hover:border-accent/20 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
