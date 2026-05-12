import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Box, Cloud, Cpu, Download, GitMerge, Layers, ShieldCheck } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Hero: React.FC = () => {
  const scrollToProof = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const certifications = [
    { label: 'CKA', subtext: 'Kubernetes Admin', icon: <Cpu size={22} />, tone: 'from-sky-500/20 to-cyan-400/10' },
    { label: 'CKAD', subtext: 'Kubernetes App Dev', icon: <Layers size={22} />, tone: 'from-indigo-500/20 to-sky-400/10' },
    { label: 'AZ-305', subtext: 'Azure Architect', icon: <Cloud size={22} />, tone: 'from-blue-500/25 to-white/5' },
    { label: 'AZ-400', subtext: 'Azure DevOps', icon: <GitMerge size={22} />, tone: 'from-violet-500/20 to-blue-400/10' },
    { label: 'DCA', subtext: 'Docker Associate', icon: <Box size={22} />, tone: 'from-teal-500/20 to-blue-400/10' },
  ];

  const proofPoints = [
    ['50%', 'deployment effort cut'],
    ['20+', 'AKS pods unblocked'],
    ['12 yrs', 'enterprise delivery'],
    ['3 banks', 'regulated platforms'],
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div className="z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
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
            className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
              Senior DevOps & Azure Engineer
            </span>
          </motion.div>

          <div className="mb-6 grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-5">
            {certifications.map((cert) => (
              <div key={cert.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${cert.tone} text-accent shadow-lg shadow-black/20`}>
                  {React.cloneElement(cert.icon, { size: 20 })}
                </div>
                <div className="text-center text-sm font-bold text-white">{cert.label}</div>
                <div className="text-center text-[9px] leading-tight text-white/45">{cert.subtext}</div>
              </div>
            ))}
          </div>

          <h1 className="mb-6 text-5xl font-serif font-light leading-[0.92] tracking-tighter text-white md:text-7xl">
            <span className="block text-gradient">Cloud platforms</span>
            <span className="block italic opacity-70">that pay back.</span>
          </h1>

          <p className="mb-7 max-w-2xl text-lg font-light leading-relaxed text-white/55 md:text-xl">
            I help engineering and platform teams reduce cloud waste, ship faster, and run secure Azure Kubernetes workloads with less operational noise.
          </p>

          <div className="mb-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <button
              onClick={scrollToProof}
              className="group relative overflow-hidden rounded-full bg-accent px-10 py-5 font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Proof <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
              </span>
            </button>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/AntrikshCV.pdf';
                link.download = 'AntrikshCV.pdf';
                link.click();
              }}
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-10 py-5 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <Download size={18} /> Download Resume
            </button>
          </div>

          <div className="grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {proofPoints.map(([metric, label]) => (
              <div key={label} className="border-l border-accent/40 bg-white/[0.03] px-4 py-3">
                <div className="text-3xl font-bold text-white">{metric}</div>
                <div className="text-xs uppercase tracking-widest text-white/45">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-lg">
            <div className="grid grid-cols-2 items-stretch gap-4">
              <div className="glass-dark flex min-h-44 flex-col rounded-3xl p-5">
                <ShieldCheck className="mb-auto text-emerald-400" size={28} />
                <div className="mt-8 text-3xl font-bold text-white">Secure</div>
                <div className="min-h-11 text-sm leading-snug text-white/45">Key Vault, identity, private networking</div>
              </div>
              <div className="glass-dark flex min-h-44 flex-col rounded-3xl p-5">
                <Cloud className="mb-auto text-sky-400" size={28} />
                <div className="mt-8 text-3xl font-bold text-white">Azure</div>
                <div className="min-h-11 text-sm leading-snug text-white/45">AKS, ACI, ACR, Landing Zones</div>
              </div>
            </div>

            <div className="relative mx-auto mt-4 aspect-square max-w-[13rem] md:max-w-[15rem]">
              <div className="absolute -inset-4 -rotate-3 rounded-[3rem] border border-white/5" />
              <div className="absolute -inset-4 rotate-3 rounded-[3rem] border border-accent/20" />

              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                <img
                  src={resumeData.basics.profileImage}
                  alt={resumeData.basics.name}
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -bottom-8 right-6 hidden rounded-3xl border border-white/10 p-5 shadow-xl md:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <span className="text-xl font-bold">12</span>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40">Years of</div>
                  <div className="text-sm font-bold text-white">Cloud delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
