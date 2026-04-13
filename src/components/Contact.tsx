import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '../utils';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    if (params.get('form') === 'success') {
      setStatus('success');
      setSuccessMessage("Message sent successfully! I'll get back to you soon.");
      window.location.hash = '#contact';

      params.delete('form');
      const url = new URL(window.location.href);
      url.search = params.toString();
      window.history.replaceState({}, document.title, url.toString());
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('form') === 'success') {
      setStatus('success');
      setSuccessMessage("Message sent successfully! I'll get back to you soon.");
      params.delete('form');
      const url = new URL(window.location.href);
      url.search = params.toString();
      window.history.replaceState({}, document.title, url.toString());
    }
  }, []);

  const handleSubmit = () => {
    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tighter text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-16 bg-accent mx-auto rounded-full mb-4" />
        <p className="text-white/40 font-light italic">Have a project in mind or just want to say hi? My inbox is always open.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-dark p-8 md:p-12 rounded-[2.5rem]"
      >
        <form action="https://formspree.io/f/xzdybeoe" method="POST" onSubmit={handleSubmit} className="space-y-6">
          {status === 'success' && (
            <div className="rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-emerald-100 mb-6">
              <h3 className="text-2xl font-semibold">Thank you!</h3>
              <p className="mt-2 text-white/70">Your message is on the way. I’ll reply as soon as possible.</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-accent/60 ml-1">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-accent/30 transition-all font-light"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-accent/60 ml-1">Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-accent/30 transition-all font-light"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-accent/60 ml-1">Subject</label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-accent/30 transition-all font-light"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-accent/60 ml-1">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-accent/30 transition-all resize-none font-light"
            />
          </div>

          <input type="hidden" name="_next" value="https://antrikshdev.github.io/?form=success#contact" />

          <button
            disabled={status === 'loading'}
            type="submit"
            className={cn(
              "w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
              status === 'loading' ? "bg-white/10 text-white/40 cursor-not-allowed" : "bg-accent text-white hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            )}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : (
              <>
                <Send size={20} /> Send Message
              </>
            )}
          </button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center gap-3"
              >
                <CheckCircle2 size={20} />
                <span>{successMessage}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-3"
              >
                <AlertCircle size={20} />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
};
