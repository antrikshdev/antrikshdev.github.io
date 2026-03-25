import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-white/5 text-white">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
              <p className="text-white/70 mb-4">{edu.degree}</p>
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{edu.dates}</span>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-white/5 text-white">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>

          <div className="space-y-4">
            {resumeData.certifications.map((cert, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                <span className="text-white/70 text-sm">{cert}</span>
                <ExternalLink size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Extra Section for Completeness */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/5"
      >
        <h3 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-6">Additional Expertise</h3>
        <div className="flex flex-wrap gap-4">
          {resumeData.extra.map((item, idx) => (
            <span key={idx} className="text-sm text-white/50 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/20" /> {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
