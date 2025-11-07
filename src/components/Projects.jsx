import React from 'react';

const projects = [
  {
    title: 'Treasure Map Engine',
    desc: 'Dynamic charts and routes to navigate complex data seas.',
  },
  {
    title: 'Seaworthy 3D Showcase',
    desc: 'A fleet of real-time 3D scenes optimized for calm and storm.',
  },
  {
    title: 'Message in a Bottle CMS',
    desc: 'A headless system to send content across distant shores.',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      tabIndex={-1}
      className="relative h-screen w-full snap-start flex items-center"
      aria-label="Treasures"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Treasures</h2>
        <p className="mt-2 text-slate-300">Spoils from voyages across code and canvas.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-5 transition-colors hover:border-slate-500/60 focus-within:border-slate-500/60"
              aria-label={p.title}
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
