import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="message"
      tabIndex={-1}
      className="relative h-screen min-h-[680px] snap-start"
      aria-label="Message in a Bottle"
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Message in a Bottle</h2>
        <p className="mt-2 text-slate-700">Send a seagull with your words — I’ll hail you back posthaste.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="messageText" className="block text-sm font-medium text-slate-700">Your Message</label>
            <textarea
              id="messageText"
              name="messageText"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500"
              aria-label="Send a Seagull (Message)"
            >
              Send a Seagull (Message)
            </button>
          </div>
        </form>

        {sent && (
          <p role="status" className="mt-4 text-sm text-emerald-700">
            Your seagull is airborne! I’ll reply soon.
          </p>
        )}
      </div>
    </section>
  );
}
