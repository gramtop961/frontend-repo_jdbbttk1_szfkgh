import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="relative h-screen w-full snap-start flex items-center"
      aria-label="Send a Seagull"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold">Message in a Bottle</h2>
        <p className="mt-2 text-slate-300">Send a Seagull (Message)</p>
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Contact form">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-slate-300">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400"
              aria-required="true"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-slate-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400"
              aria-required="true"
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="text-sm text-slate-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-sky-400"
              aria-required="true"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-sky-500/90 hover:bg-sky-400 px-5 py-3 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-sky-400"
              aria-label="Send a Seagull (Message)"
            >
              Send a Seagull (Message)
            </button>
          </div>
        </form>
        {submitted && (
          <p className="mt-4 text-emerald-400" role="status">A seagull is on its way with your message!</p>
        )}
      </div>
    </section>
  );
}
