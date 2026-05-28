"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    practice: "",
    specialty: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now this just logs. We'll wire up real sending next.
    console.log(form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-slate-900">Thanks for reaching out</h1>
          <p className="mt-4 text-gray-600">
            We'll get back to you within one business day.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">Get Started</h1>
        <p className="mt-4 text-gray-600">
          Tell us about your practice and what you need. We'll respond within one
          business day.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block font-medium text-slate-900">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-900">Practice name</label>
            <input
              type="text"
              name="practice"
              value={form.practice}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-900">Specialty</label>
            <input
              type="text"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
              placeholder="e.g. behavioral health, family medicine, dentistry"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-900">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-900">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-900">What do you need?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}