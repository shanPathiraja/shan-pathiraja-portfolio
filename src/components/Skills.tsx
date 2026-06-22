'use client';

const skillGroups = [
  {
    category: 'Frontend',
    color: 'text-violet-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GraphQL'],
  },
  {
    category: 'Backend',
    color: 'text-pink-400',
    skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    color: 'text-cyan-400',
    skills: ['Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Linux', 'Nginx'],
  },
  {
    category: 'Other',
    color: 'text-emerald-400',
    skills: ['Git', 'Figma', 'REST APIs', 'WebSockets', 'Agile / Scrum', 'Jest'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3">Toolkit</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((g) => (
          <div
            key={g.category}
            className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 card-glow"
          >
            <h3 className={`text-sm font-bold tracking-widest uppercase mb-5 ${g.color}`}>
              {g.category}
            </h3>
            <ul className="space-y-3">
              {g.skills.map((s) => (
                <li key={s} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${g.color}`} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
