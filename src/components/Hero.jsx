import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimary, onSecondary }) {
  const sectionRef = useRef(null);

  return (
    <section
      id="captains-log"
      ref={sectionRef}
      tabIndex={-1}
      className="relative flex h-screen min-h-[680px] snap-start items-center justify-center overflow-hidden"
      aria-label="Captain’s Log"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h1 className="text-balance bg-gradient-to-br from-indigo-900 via-indigo-700 to-rose-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
          Captain’s Log
        </h1>
        <p className="mt-4 max-w-prose text-base text-slate-700 sm:text-lg">
          Set your bearings for a grand voyage across the digital seas. Explore my treasures, chart my journey, and send a seagull if you fancy a parley.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onPrimary}
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
            aria-label="Set Sail – Explore My Treasures"
          >
            Set Sail – Explore My Treasures
          </button>
          <button
            onClick={onSecondary}
            className="rounded-lg border border-indigo-300 bg-white/80 px-5 py-3 text-sm font-semibold text-indigo-700 shadow hover:bg-white focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
            aria-label="Meet the Captain – Connect Me"
          >
            Meet the Captain – Connect Me
          </button>
        </div>
      </div>
    </section>
  );
}
