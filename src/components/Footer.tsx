import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#020617]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <div className="text-3xl font-serif font-light tracking-tighter text-white mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="bg-accent text-white px-1.5 rounded">A</span>D
          </div>
          <p className="text-white/40 text-sm max-w-xs font-light italic">
            Building the future of cloud infrastructure and DevOps excellence.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href={`mailto:${resumeData.basics.email}`} className="p-3 rounded-full bg-white/5 text-white/60 hover:text-accent hover:bg-accent/10 transition-all border border-white/5">
              <Mail size={20} />
            </a>
            {resumeData.basics.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-white/60 hover:text-accent hover:bg-accent/10 transition-all border border-white/5">
                {link.label === 'LinkedIn' ? <Linkedin size={20} /> : <Globe size={20} />}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/20">
            © {new Date().getFullYear()} Antriksh Devgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
