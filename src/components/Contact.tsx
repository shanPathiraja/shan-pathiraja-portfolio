'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending — replace with your preferred email service (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:your@email.com', text: 'your@email.com' },
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/yourusername', text: 'github.com/yourusername' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', text: 'linkedin.com/in/yourusername' },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Socials */}
        <div className="flex flex-col gap-6 justify-center">
          {socials.map(({ icon: Icon, label, href, text }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-all">
                <Icon size={20} className="text-white/60 group-hover:text-violet-400 transition-colors" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
                <p className="text-white/80 group-hover:text-white transition-colors text-sm">{text}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
          />
          <input
            type="email"
            placeholder="your@email.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
          />
          <textarea
            placeholder="Tell me about your project..."
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all resize-none"
          />
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : status === 'sent' ? (
              'Message sent!'
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Your Name. Built with Next.js &amp; Tailwind CSS.
      </div>
    </section>
  );
}
