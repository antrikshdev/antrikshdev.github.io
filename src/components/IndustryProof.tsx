import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, GitPullRequestArrow, SearchCheck, WalletCards } from 'lucide-react';

export const IndustryProof: React.FC = () => {
  const sources = [
    {
      metric: 'Gateway API',
      label: 'NGINX ingress migration path',
      context: 'Kubernetes recommends Gateway API instead of Ingress, and NGINX Gateway Fabric implements Gateway API with NGINX as the data plane.',
      href: 'https://kubernetes.io/docs/concepts/services-networking/ingress/',
      icon: <GitPullRequestArrow size={24} />,
    },
    {
      metric: 'Cost visibility',
      label: 'Namespace-level AKS cost analysis',
      context: 'Microsoft Learn documents AKS cost allocation across clusters, namespaces, compute, network, and storage resources.',
      href: 'https://learn.microsoft.com/en-us/azure/aks/cost-analysis',
      icon: <SearchCheck size={24} />,
    },
    {
      metric: 'FinOps + autoscale',
      label: 'Microsoft AKS cost best practices',
      context: 'Official guidance highlights rightsizing, autoscaling, Cost Management, Azure Advisor, reservations, and savings plans.',
      href: 'https://learn.microsoft.com/en-us/azure/aks/best-practices-cost',
      icon: <WalletCards size={24} />,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-accent/70">Industry proof</p>
          <h2 className="text-4xl font-serif font-light tracking-tighter text-white md:text-5xl">
            The proof matches where Kubernetes and Azure are heading.
          </h2>
        </div>
        <p className="max-w-md text-white/45">
          External references support the same themes: Gateway API migration, cost visibility, autoscaling, governance, and lower operational load.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {sources.map((source, idx) => (
          <motion.a
            key={source.label}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-accent/30 hover:bg-accent/5"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="rounded-2xl bg-accent/10 p-3 text-accent">{source.icon}</div>
              <ExternalLink className="text-white/25 transition-colors group-hover:text-accent" size={18} />
            </div>
            <div className="mb-2 text-3xl font-bold text-white">{source.metric}</div>
            <h3 className="mb-4 text-lg font-semibold text-white/85">{source.label}</h3>
            <p className="text-sm leading-relaxed text-white/45">{source.context}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
