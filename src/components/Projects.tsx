'use client';

import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack web application that does something amazing. Built with modern technologies and focused on great user experience.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    color: 'from-violet-500/20 to-pink-500/20',
    accent: '#a78bfa',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description:
      'A mobile-first platform that solves a real problem. Focused on performance and accessibility.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
    color: 'from-pink-500/20 to-cyan-500/20',
    accent: '#f472b6',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description:
      'An open-source developer tool used by hundreds of developers. Improved build times by 60%.',
    tags: ['Rust', 'WebAssembly', 'CLI'],
    color: 'from-cyan-500/20 to-emerald-500/20',
    accent: '#22d3ee',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Four',
    description:
      'A real-time collaborative canvas powered by WebSockets. Supports thousands of concurrent users.',
    tags: ['WebSockets', 'Canvas API', 'Express', 'Docker'],
    color: 'from-emerald-500/20 to-violet-500/20',
    accent: '#34d399',
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Things I&apos;ve <span className="gradient-text">Built</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`relative group rounded-2xl bg-gradient-to-br ${p.color} border border-white/10 p-6 card-glow overflow-hidden`}
          >
            <div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: p.accent }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={p.live}
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label="Live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
