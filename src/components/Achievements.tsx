import React from 'react';
import { motion } from 'motion/react';
import { Activity, BellRing, Gauge, LockKeyhole, Rocket } from 'lucide-react';

export const Achievements: React.FC = () => {
  const outcomes = [
    {
      metric: '50%',
      label: 'less manual deployment effort',
      context: 'ACI and ACR integration reduced repetitive release work.',
      icon: <Rocket size={26} />,
      accent: 'bg-blue-500',
    },
    {
      metric: '20%',
      label: 'higher application scalability',
      context: 'Kubernetes and Helm patterns improved workload flexibility.',
      icon: <Gauge size={26} />,
      accent: 'bg-emerald-500',
    },
    {
      metric: '20+',
      label: 'AKS pods recovered from TLS issues',
      context: 'Trust chain failures were resolved across service integrations.',
      icon: <LockKeyhole size={26} />,
      accent: 'bg-cyan-500',
    },
    {
      metric: 'IaC',
      label: 'monitoring shipped by pipeline',
      context: 'Managed Prometheus rule groups, Grafana dashboards, action groups, and RBAC automated through Azure DevOps.',
      icon: <BellRing size={26} />,
      accent: 'bg-orange-500',
    },
    {
      metric: '10+',
      label: 'teams supported with reusable platform patterns',
      context: 'Bicep, Terraform, and secure Azure landing-zone modules.',
      icon: <Activity size={26} />,
      accent: 'bg-violet-500',
    },
  ];

  return (
    <section className="bg-white/[0.02] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-accent/70">Client value snapshot</p>
          <h2 className="mb-5 text-4xl font-serif font-light tracking-tighter text-white md:text-6xl">
            Less cost. Faster delivery. Cleaner operations.
          </h2>
          <p className="max-w-2xl text-white/45">
            The page now leads with outcomes a client or recruiter can quickly understand, then backs them with selected project stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className={`absolute left-0 top-0 h-1 w-full ${item.accent}`} />
              <div className="mb-8 flex items-center justify-between">
                <div className="rounded-2xl bg-white/5 p-3 text-white/70">{item.icon}</div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/25">Proof</span>
              </div>
              <div className="mb-2 text-5xl font-bold tracking-tight text-white">{item.metric}</div>
              <h3 className="mb-4 text-lg font-semibold leading-snug text-white/85">{item.label}</h3>
              <p className="text-sm leading-relaxed text-white/45">{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
