export default function FAQ() {
  const faqs = [
    {
      q: "How long does credentialing take?",
      a: "It varies by payer, but most applications take 60 to 120 days from submission to approval. We submit promptly and follow up so nothing stalls on our end.",
    },
    {
      q: "What documents will you need from me?",
      a: "Typically your license, malpractice insurance, NPI, resume or work history, and your CAQH profile. We give you a clear checklist up front so nothing slows things down.",
    },
    {
      q: "Do you guarantee I'll be accepted?",
      a: "No one can guarantee acceptance, since the final decision is the payer's. What we guarantee is a complete, accurate, on-time application and persistent follow-up.",
    },
    {
      q: "What is CAQH?",
      a: "CAQH stands for The Council for Affordable Quality Healthcare. CAQH is a centralized database most payers use to verify provider information. We set up and maintain your profile, which is free to use but time-consuming to keep current.",
    },
    {
      q: "How does your pricing work?",
      a: "We charge a flat fee per package, so you know the full cost up front with no per-payer surprises. See our packages for details.",
    },
    {
      q: "What happens after my application is submitted?",
      a: "We track its status, respond to any payer requests for more information, and follow up regularly until you're paneled and ready to bill.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">
          Frequently asked questions
        </h1>
        <div className="mt-12 space-y-8">
          {faqs.map((item) => (
            <div key={item.q}>
              <h2 className="text-lg font-semibold text-slate-900">{item.q}</h2>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}