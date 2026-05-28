export default function WhoWeServe() {
  const specialties = [
    {
      title: "Behavioral Health",
      desc: "Therapists, counselors, psychologists, and social workers getting on commercial and Medicaid panels.",
    },
    {
      title: "Family Medicine",
      desc: "Primary care providers credentialing across major payers and government programs.",
    },
    {
      title: "Physical Therapy",
      desc: "PT, OT, and rehab providers paneling with the payers their patients use.",
    },
    {
      title: "Chiropractic",
      desc: "Chiropractors handling payer enrollment and re-credentialing.",
    },
    {
      title: "Specialty & Group Practices",
      desc: "Multi-provider groups that need credentialing managed at scale.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">Who we serve</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Credentialing isn't specialty-specific. If you bill insurance, we can
          get you paneled. Here are the kinds of practices we work with.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}