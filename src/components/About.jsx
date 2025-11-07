import React from 'react';

export default function About({ onNavigate }) {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="relative h-screen w-full snap-start flex items-center"
      aria-label="About the Captain"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">The Crew Manifest</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          I captain the helm of immersive experiences — crafting scenes, forging interactions,
          and steering brands across digital oceans. From concept to treasure, I chart clean code and bold visuals.
        </p>
        <div className="mt-8">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 px-5 py-3 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-emerald-400"
            aria-label="Meet the Captain – Connect Me"
          >
            Meet the Captain – Connect Me
          </button>
        </div>
      </div>
    </section>
  );
}
