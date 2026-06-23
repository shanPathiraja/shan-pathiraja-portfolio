'use client';

import { useState } from 'react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Fcode Labs (Pvt) Ltd',
    period: '2022 – Present',
    summary:
      'Built full-stack JavaScript/TypeScript features end-to-end across multiple client-facing products. Made deliberate architectural calls on build-vs-buy, favouring maintainable, self-understood code over bolted-on libraries.',
    projects: [
      {
        name: 'Bevisioneers',
        subtitle: 'AI Young Entrepreneurs Coaching Platform',
        tags: ['Next.js', 'NestJS', 'TypeScript', 'Python FastAPI', 'RAG'],
        bullets: [
          'Built custom frontend UI components for an AI coaching platform serving 1,000+ active users — avoiding generic UI kits in favour of purpose-built, accessible interface elements.',
          'Designed and implemented the backend API layer in Node.js (NestJS + TypeORM) with a Python FastAPI service for AI integration.',
          'Engineered a full RAG pipeline using embeddings, semantic search, OCR, and PDF extraction — architected from first principles rather than relying on a pre-built RAG framework.',
          'Used AI development tools (Claude, Gemini) as a productivity multiplier — critically reviewing, testing, and refining all AI-assisted code before merging.',
        ],
      },
      {
        name: 'Gemlux',
        subtitle: 'Multi-Tenant SaaS Gemstone Platform',
        tags: ['React', 'Node.js', 'TypeScript', 'Stripe'],
        bullets: [
          'Built custom React components including bespoke data tables, role-based dashboards, and subscription management UI — not sourced from third-party libraries.',
          'Designed the Node.js backend API with subscription tiers, Stripe integration, and plan-based access control.',
        ],
      },
      {
        name: 'CPOTOM3 — Brandex M3 ERP Add-On',
        subtitle: 'ERP GraphQL Microservice Extension',
        tags: ['TypeScript', 'GraphQL', 'Microservices', 'OCR'],
        bullets: [
          'Architected a GraphQL microservice add-on extending the Brandex M3 ERP system, including OCR-based document extraction and data validation pipelines.',
          'Made deliberate build-from-scratch decisions on the document processing pipeline where existing tooling didn\'t fit the ERP\'s specific workflow requirements.',
        ],
      },
      {
        name: 'Hani',
        subtitle: 'AI Travel Discovery App',
        tags: ['NestJS', 'TypeScript', 'Embeddings', 'Geolocation'],
        bullets: [
          'Engineered a custom embeddings-based search engine from first principles, enabling personalised, geolocation-aware place discovery without an off-the-shelf vector search library.',
        ],
      },
    ],
    contributions: [
      'Participated in technical discussions with both engineering team members and external stakeholders, translating requirements into clear architectural decisions.',
      'Conducted code reviews and wrote technical documentation, focusing on long-term maintainability.',
      'Mentored 2–3 engineering interns on clean code principles, component architecture, and thoughtful API design.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Syntax Genie (Pvt) Ltd',
    period: '2021 – 2022',
    summary:
      'Contributed to full-stack JavaScript and Java development across enterprise, education, and energy domains, building custom frontend components and REST APIs for client-facing platforms.',
    projects: [
      {
        name: 'Scrapbook',
        subtitle: 'Cloud-Based Learning Management System',
        tags: ['React', 'Node.js', 'Firebase Cloud Functions'],
        bullets: [
          'Built custom React components for course tracking, content management, and authentication flows — prioritising a hand-built, lightweight frontend over a pre-built admin template.',
        ],
      },
      {
        name: 'IEEE ERP Platform',
        subtitle: 'Enterprise Resource Planning System',
        tags: ['React', 'Next.js', 'Spring Boot'],
        bullets: [
          'Developed React admin dashboards and a Next.js public-facing website, building reusable component patterns shared across both surfaces.',
          'Authored data migration utilities to extract, transform, and load legacy data into the new platform with zero data loss.',
        ],
      },
    ],
    contributions: [],
  },
];

function ProjectCard({ project }: { project: typeof experiences[0]['projects'][0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">{project.name}</p>
          <p className="text-white/40 text-xs mt-0.5">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          <div className="hidden sm:flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                {t}
              </span>
            ))}
          </div>
          <svg
            className={`w-4 h-4 text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5 mt-4 mb-4 sm:hidden">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                {t}
              </span>
            ))}
          </div>
          <ul className="space-y-2.5 mt-4">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400/60 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-pink-500/20 to-transparent hidden md:block" />

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.company} className="md:pl-20 relative">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-5 top-1 w-6 h-6 rounded-full bg-[#07070f] border-2 border-violet-500/60 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-violet-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6">{exp.summary}</p>

              {/* Projects */}
              <div className="space-y-3 mb-6">
                {exp.projects.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>

              {/* Team contributions */}
              {exp.contributions.length > 0 && (
                <div className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Team Contributions</p>
                  <ul className="space-y-2">
                    {exp.contributions.map((c, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400/50 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
