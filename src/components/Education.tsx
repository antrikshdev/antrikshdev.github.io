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
            <div className="p-3 rounded-2xl bg-accent/10 text-accent">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-serif font-light text-white">Education</h2>
          </div>
          
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
              <p className="text-white/70 mb-4 font-light">{edu.degree}</p>
              <span className="text-xs font-mono text-accent/60 uppercase tracking-widest">{edu.dates}</span>
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
            <div className="p-3 rounded-2xl bg-accent/10 text-accent">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-serif font-light text-white">Certifications</h2>
          </div>

          <div className="space-y-4">
            {resumeData.certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2 group transition-all duration-300 ${cert.url ? 'hover:bg-accent/10 hover:border-accent/20 cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium group-hover:text-accent transition-colors">{cert.title}</h3>
                  {cert.url && <ExternalLink size={14} className="text-white/20 group-hover:text-accent transition-colors" />}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono uppercase tracking-widest text-white/40">
                  <span>{cert.issuer}</span>
                  {cert.date && <span>• {cert.date}</span>}
                  {cert.id && <span className="text-accent/40">ID: {cert.id}</span>}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
