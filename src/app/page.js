export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl font-bold tracking-tight max-w-3xl">
          Insurance paneling handled, so you can focus on patients
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Credex takes the paperwork, payer portals, and follow-up off your plate, getting your practice credentialed and ready to bill.
        </p>
        <a href="/contact" className="mt-10 rounded-lg bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition">
          Get Started
        </a>
      </section>
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Credentialing shouldn't cost you months</h2>
          <p className="mt-6 text-lg text-gray-600">
            Getting on insurance panels means endless paperwork, confusing payer
            portals, and constant follow-up. Every week you're not credentialed
            is a week you can't bill those patients. Credex handles the whole
            process so you start seeing reimbursements sooner.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">How it works</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            <div className="text-center">
              <div className="text-blue-600 text-4xl font-bold">1</div>
              <h3 className="mt-4 font-semibold">Consultation</h3>
              <p className="mt-2 text-gray-600">
                We learn about your practice and which payers you need.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl font-bold">2</div>
              <h3 className="mt-4 font-semibold">Document gathering</h3>
              <p className="mt-2 text-gray-600">
                We collect and organize everything each payer requires.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl font-bold">3</div>
              <h3 className="mt-4 font-semibold">Submission</h3>
              <p className="mt-2 text-gray-600">
                We submit your applications across all your chosen payers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl font-bold">4</div>
              <h3 className="mt-4 font-semibold">Follow-up</h3>
              <p className="mt-2 text-gray-600">
                We track status and chase down approvals until you're paneled.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Packages</h2>
          <p className="mt-4 text-center text-gray-600">
            Flat-fee pricing, no surprises. One price for the whole process.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-2 text-gray-600">
                Get credentialed with the major payers in your region.
              </p>
              <ul className="mt-6 space-y-2 text-gray-600 flex-1">
                <li>Up to 5 payers</li>
                <li>CAQH setup and management</li>
                <li>Full application submission</li>
                <li>Status tracking and follow-up</li>
              </ul>
              <a href="/contact" className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium text-center hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>

            <div className="rounded-2xl bg-white border-2 border-blue-600 p-8 flex flex-col">
              <h3 className="text-xl font-semibold">Complete</h3>
              <p className="mt-2 text-gray-600">
                Broader coverage for practices that need more panels.
              </p>
              <ul className="mt-6 space-y-2 text-gray-600 flex-1">
                <li>Up to 10 payers</li>
                <li>CAQH setup and management</li>
                <li>Full application submission</li>
                <li>Priority status tracking and follow-up</li>
              </ul>
              <a href="/contact" className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium text-center hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-semibold">Maintenance</h3>
              <p className="mt-2 text-gray-600">
                Ongoing management once you're credentialed.
              </p>
              <ul className="mt-6 space-y-2 text-gray-600 flex-1">
                <li>Re-credentialing and renewals</li>
                <li>CAQH attestation upkeep</li>
                <li>Payer updates and changes</li>
                <li>Monthly or annual billing</li>
              </ul>
              <a href="/contact" className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium text-center hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}