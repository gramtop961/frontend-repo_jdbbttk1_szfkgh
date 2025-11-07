export default function About({ onContact }) {
  return (
    <section
      id="crew"
      tabIndex={-1}
      className="relative h-screen min-h-[680px] snap-start"
      aria-label="The Crew Manifest"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">The Crew Manifest</h2>
        <p className="mt-4 max-w-prose text-slate-700">
          I’m Vinuthna, your captain on this voyage. I navigate front-end seas with React, TypeScript, and Tailwind; chart back-end routes with FastAPI; and steer 3D experiences with Spline. Hoist the sails and let’s build something legendary.
        </p>
        <div className="mt-8">
          <button
            onClick={onContact}
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600"
            aria-label="Meet the Captain – Connect Me"
          >
            Meet the Captain – Connect Me
          </button>
        </div>
      </div>
    </section>
  );
}
