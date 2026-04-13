import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../resumeData';

export const ProfessionalPhilosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 md:p-16 rounded-[3rem] glass-dark border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        
        <div className="relative z-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-accent/60 mb-8">Professional Philosophy</div>
          <h3 className="text-2xl md:text-4xl font-serif font-light text-white mb-10 leading-tight max-w-4xl">
            {resumeData.basics.shortSummary.hook}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-xl text-white/70 font-light leading-relaxed">
                {resumeData.basics.shortSummary.bio}
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border-l-2 border-accent italic">
                <p className="text-white/80 font-medium leading-relaxed">
                  "{resumeData.basics.shortSummary.philosophy}"
                </p>
              </div>
              <p className="text-accent font-serif text-2xl">
                {resumeData.basics.shortSummary.cta}
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent/60 mb-6">Strategic Expertise</h4>
              <div className="space-y-6">
                {resumeData.basics.shortSummary.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <span className="text-[10px] font-bold">0{idx + 1}</span>
                    </div>
                    <span className="text-white/60 text-lg font-light group-hover:text-white/90 transition-colors leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
