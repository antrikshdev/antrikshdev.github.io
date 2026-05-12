import React from 'react';
import { motion } from 'motion/react';
import { Boxes, Eye, Handshake, Shield } from 'lucide-react';

export const Focus: React.FC = () => {
  const focusAreas = [
    {
      title: 'People relate',
      text: 'I translate platform problems into clear choices for engineers, vendors, and stakeholders.',
      icon: <Handshake size={24} />,
    },
    {
      title: 'Operational clarity',
      text: 'I make hidden risk visible through dashboards, runbooks, and repeatable release paths.',
      icon: <Eye size={24} />,
    },
    {
      title: 'Secure-by-default',
      text: 'I prefer private endpoints, managed identity, Key Vault, and policy guardrails from day one.',
      icon: <Shield size={24} />,
    },
    {
      title: 'Self-service platforms',
      text: 'I build modules and pipelines that reduce dependency on a single person or team.',
      icon: <Boxes size={24} />,
    },
  ];

  return (
    <section id="focus" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-accent/70">How clients experience the work</p>
        <h2 className="text-4xl font-serif font-light tracking-tighter text-white md:text-6xl">
          Strong engineering, easy collaboration.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((focus, idx) => (
          <motion.div
            key={focus.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="mb-8 inline-flex rounded-2xl bg-accent/10 p-3 text-accent">{focus.icon}</div>
            <h3 className="mb-3 text-xl font-bold text-white">{focus.title}</h3>
            <p className="text-sm leading-relaxed text-white/45">{focus.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
