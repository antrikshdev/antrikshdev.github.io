import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, CloudCog, GitBranch, Network, ShieldAlert, Siren } from 'lucide-react';

type CaseStudy = {
  title: string;
  client: string;
  challenge: string;
  moves: string[];
  result: string;
  metrics: Array<{ label: string; before: string; after: string; value: number }>;
  icon: React.ReactNode;
};

export const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: 'AKS TLS trust-chain recovery',
      client: 'Internal banking applications',
      challenge: '20+ AKS pods were failing service integration due to certificate trust issues.',
      moves: ['Root cause analysis across pods and ingress', 'DigiCert public CA adoption', 'Secure NGINX ingress TLS termination'],
      result: 'Critical workloads were unblocked and certificate operations became simpler.',
      icon: <ShieldAlert size={28} />,
      metrics: [
        { label: 'Pods impacted', before: '20+ failing', after: 'Resolved', value: 88 },
        { label: 'Certificate complexity', before: 'High', after: 'Lower', value: 68 },
        { label: 'Platform stability', before: 'Blocked', after: 'Restored', value: 84 },
      ],
    },
    {
      title: 'Managed Prometheus and Grafana monitoring',
      client: 'Application team observability',
      challenge: 'Application teams needed clearer node and pod visibility, actionable alerts, and governed access to monitoring dashboards.',
      moves: ['Implemented Managed Prometheus rule groups for node and pod alerts', 'Built Grafana dashboards for application-team monitoring', 'Automated action groups, role assignments, and deployments through Azure DevOps pipelines'],
      result: 'Teams gained self-service visibility with alerting, ownership, and repeatable monitoring infrastructure.',
      icon: <Siren size={28} />,
      metrics: [
        { label: 'Monitoring ownership', before: 'Centralised', after: 'Team-visible', value: 78 },
        { label: 'Alert deployment', before: 'Manual', after: 'Pipeline-driven', value: 86 },
        { label: 'Incident response', before: 'Reactive', after: 'Actionable', value: 72 },
      ],
    },
    {
      title: 'NGINX ingress to Gateway API migration',
      client: 'AKS platform modernization',
      challenge: 'Ingress rules and controller-specific annotations made traffic ownership, TLS, and route governance harder to scale.',
      moves: ['Mapped Ingress resources to Gateway and HTTPRoute patterns', 'Separated platform-owned gateways from app-owned routes', 'Planned TLS, listener, and namespace delegation changes before cutover'],
      result: 'Ingress management becomes clearer, more portable, and better aligned with the Kubernetes networking direction.',
      icon: <GitBranch size={28} />,
      metrics: [
        { label: 'Route ownership', before: 'Controller-centric', after: 'Role-based', value: 76 },
        { label: 'Annotation dependency', before: 'High', after: 'Reduced', value: 62 },
        { label: 'Migration readiness', before: 'Reactive', after: 'Planned', value: 84 },
      ],
    },
    {
      title: 'Azure landing zone automation',
      client: 'Banking platform teams',
      challenge: 'Infrastructure requests were slow, inconsistent, and hard to audit.',
      moves: ['Reusable Terraform and Bicep modules', 'CI/CD validation gates', 'Private endpoints and policy-aligned patterns'],
      result: 'Teams could provision safer Azure foundations with fewer handoffs.',
      icon: <CloudCog size={28} />,
      metrics: [
        { label: 'Provisioning effort', before: 'Manual', after: 'Self-service', value: 72 },
        { label: 'Environment drift', before: 'High', after: 'Controlled', value: 64 },
        { label: 'Audit readiness', before: 'Reactive', after: 'Built-in', value: 82 },
      ],
    },
  ];

  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-accent/70">Case studies</p>
          <h2 className="max-w-3xl text-4xl font-serif font-light tracking-tighter text-white md:text-6xl">
            Proof over paragraphs.
          </h2>
        </div>
        <p className="max-w-md text-white/45">
          Compact stories showing the problem, the intervention, and the measurable improvement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {caseStudies.map((study, idx) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-dark flex min-h-full flex-col rounded-3xl p-6"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-accent/10 p-3 text-accent">{study.icon}</div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">{study.client}</span>
            </div>

            <h3 className="mb-3 text-2xl font-bold leading-tight text-white">{study.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/50">{study.challenge}</p>

            <div className="mb-7 grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
              <span className="text-xs uppercase tracking-widest text-red-300/75">Before</span>
              <ArrowRight className="mx-auto text-white/20" size={18} />
              <span className="text-xs uppercase tracking-widest text-emerald-300/75">After</span>
            </div>

            <div className="mb-7 space-y-4">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                    <span className="font-medium text-white/75">{metric.label}</span>
                    <span className="text-white/35">{metric.before} to {metric.after}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              {study.moves.map((move) => (
                <div key={move} className="flex items-start gap-3 text-sm text-white/60">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={16} />
                  <span>{move}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-white/[0.04] p-4 text-sm font-medium text-white/80">
              <Network className="mb-3 text-accent" size={20} />
              {study.result}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
