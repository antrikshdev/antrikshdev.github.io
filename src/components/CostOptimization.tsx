import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, CircleDollarSign, Gauge, Repeat2 } from 'lucide-react';

export const CostOptimization: React.FC = () => {
  const comparisons = [
    {
      label: 'Cloud waste',
      before: 78,
      after: 34,
      note: 'Rightsizing, idle resource review, and policy guardrails',
      icon: <CircleDollarSign size={22} />,
    },
    {
      label: 'Deployment lead time',
      before: 82,
      after: 28,
      note: 'Reusable modules and release pipelines',
      icon: <Repeat2 size={22} />,
    },
    {
      label: 'Operational risk',
      before: 70,
      after: 32,
      note: 'Private networking, identity, Key Vault, and TLS controls',
      icon: <Gauge size={22} />,
    },
  ];

  return (
    <section id="cost-optimization" className="bg-white/[0.02] px-6 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-accent/70">Cost optimisation comparison</p>
          <h2 className="mb-5 text-4xl font-serif font-light tracking-tighter text-white md:text-6xl">
            I look for the waste clients stop noticing.
          </h2>
          <p className="mb-8 max-w-xl text-white/45">
            My platform work connects engineering speed with commercial impact: fewer manual steps, less over-provisioning, and more predictable environments.
          </p>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <BarChart3 className="text-accent" size={24} />
            <span className="text-sm font-medium text-white/70">Before and after view for client conversations</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark rounded-3xl p-6 md:p-8"
        >
          <div className="mb-6 grid grid-cols-[1fr_auto_auto] gap-4 text-xs uppercase tracking-widest text-white/35">
            <span>Area</span>
            <span>Before</span>
            <span>After</span>
          </div>

          <div className="space-y-7">
            {comparisons.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl border border-white/10 bg-black/10 p-5"
              >
                <div className="mb-4 grid grid-cols-[1fr_auto_auto] items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-accent/10 p-2 text-accent">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-white/40">{item.note}</div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-red-300">{item.before}%</span>
                  <span className="text-sm font-bold text-emerald-300">{item.after}%</span>
                </div>

                <div className="space-y-2">
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.before}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9 }}
                      className="h-full rounded-full bg-red-400/70"
                    />
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.after}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.15 }}
                      className="h-full rounded-full bg-emerald-400"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
