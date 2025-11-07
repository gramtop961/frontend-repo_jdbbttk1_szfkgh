import { useEffect, useState } from 'react';

export default function Navbar({ onNavigate }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition backdrop-blur supports-[backdrop-filter]:bg-white/50 ${
        isTop ? 'shadow-none' : 'shadow'
      }`}
      aria-label="Primary"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/vinuthna-logo.png"
            alt="Vinuthna logo"
            className="h-9 w-9 rounded-full object-contain"
          />
          <span className="text-lg font-semibold">Captain Vinuthna</span>
        </div>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <button
              className="rounded-md px-3 py-2 text-sm font-medium hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
              onClick={() => onNavigate('captains-log')}
              aria-label="Captain’s Log"
            >
              Captain’s Log
            </button>
          </li>
          <li>
            <button
              className="rounded-md px-3 py-2 text-sm font-medium hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
              onClick={() => onNavigate('crew')}
              aria-label="The Crew Manifest"
            >
              The Crew Manifest
            </button>
          </li>
          <li>
            <button
              className="rounded-md px-3 py-2 text-sm font-medium hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
              onClick={() => onNavigate('treasures')}
              aria-label="Treasures"
            >
              Treasures
            </button>
          </li>
          <li>
            <button
              className="rounded-md px-3 py-2 text-sm font-medium hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500"
              onClick={() => onNavigate('message')}
              aria-label="Message in a Bottle"
            >
              Message in a Bottle
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
