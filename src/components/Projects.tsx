'use client';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <p className="text-white/60 text-lg font-medium mb-2">Projects coming soon</p>
        <p className="text-white/30 text-sm max-w-xs text-center">
          Personal and open-source projects will be showcased here shortly.
        </p>
      </div>
    </section>
  );
}
