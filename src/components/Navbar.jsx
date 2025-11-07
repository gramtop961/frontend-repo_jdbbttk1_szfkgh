import React from 'react';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60">
      <nav
        className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <img
            src="/vinuthna-logo.png"
            alt="Vinuthna logo"
            className="h-8 w-auto select-none"
          />
          <span className="sr-only">Vinuthna Portfolio - One Piece Voyage</span>
        </div>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400 rounded px-2 py-1"
              aria-label="Sail to Home"
            >
              <Home className="h-4 w-4" /> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400 rounded px-2 py-1"
              aria-label="Sail to About"
            >
              <User className="h-4 w-4" /> About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400 rounded px-2 py-1"
              aria-label="Sail to Projects"
            >
              <FolderGit2 className="h-4 w-4" /> Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400 rounded px-2 py-1"
              aria-label="Sail to Contact"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
