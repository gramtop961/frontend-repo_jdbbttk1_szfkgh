export default function Projects({ onContact }) {
  return (
    <section
      id="treasures"
      tabIndex={-1}
      className="relative h-screen min-h-[680px] snap-start"
      aria-label="Treasures"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Treasures</h2>
        <p className="mt-3 text-slate-700">A curated chest of my favorite builds.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Grand Line Dashboard',
              desc: 'Analytics helm with interactive charts and real-time currents.',
            },
            {
              title: 'Sunny Studio 3D',
              desc: 'Immersive scene with Spline and buttery smooth camera drift.',
            },
            {
              title: 'Sea Map API',
              desc: 'FastAPI routes charting waypoints, storms, and ports of call.',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="group rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow"
            >
              <h3 className="text-lg font-semibold group-hover:text-indigo-700">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <button
            onClick={onContact}
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
            aria-label="Set Sail – Explore My Treasures"
          >
            Set Sail – Explore My Treasures
          </button>
        </div>
      </div>
    </section>
  );
}
