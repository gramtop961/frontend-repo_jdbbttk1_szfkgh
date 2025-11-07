import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      tabIndex={-1}
      className="relative h-screen w-full snap-start"
      aria-label="Captain's Deck"
    >
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6yBz0nQ9BzY0cYz7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full w-full flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Captain's Log
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Ahoy! I be Vinuthna, chartin' courses through 3D seas and web frontiers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center rounded-md bg-sky-500/90 hover:bg-sky-400 px-5 py-3 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-sky-400"
              aria-label="Set Sail – Explore My Treasures"
            >
              Set Sail – Explore My Treasures
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center rounded-md border border-sky-400/60 hover:border-sky-300/80 px-5 py-3 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-sky-400"
              aria-label="Meet the Captain – Connect Me"
            >
              Meet the Captain – Connect Me
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
    </section>
  );
}
