import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
              {resumeData.basics.title}
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tighter text-white mb-8 leading-[0.9]">
            <span className="block text-gradient">{resumeData.basics.name.split(' ')[0]}</span>
            <span className="block italic opacity-60">{resumeData.basics.name.split(' ')[1]}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed max-w-xl font-light">
            {resumeData.basics.headline}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <button
              onClick={scrollToExperience}
              className="group relative px-10 py-5 bg-accent text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Experience <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-10 py-5 bg-white/5 text-white font-semibold rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square max-w-md mx-auto">
            {/* Decorative elements */}
            <div className="absolute -inset-4 border border-white/5 rounded-[3rem] -rotate-3" />
            <div className="absolute -inset-4 border border-accent/20 rounded-[3rem] rotate-3" />
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={resumeData.basics.profileImage} 
                alt={resumeData.basics.name}
                className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-white/10 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                  <span className="text-xl font-bold">12</span>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40">Years of</div>
                  <div className="text-sm font-bold text-white">Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Top 3 Impact Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 w-full overflow-hidden py-4 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="flex justify-around items-center gap-8 px-4 animate-pulse">
          {resumeData.achievements.slice(0, 3).map((ach, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">{ach.metric}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{ach.title}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
