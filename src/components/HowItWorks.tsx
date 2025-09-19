export function HowItWorks() {
  const steps = [
    { title: '1. Get pre‑approved', description: 'Tell us about your goals. Get a clear budget in minutes.' },
    { title: '2. Lock your rate', description: "Shop confidently. We'll help you choose the right loan." },
    { title: '3. Underwrite fast', description: 'Upload docs securely. We keep you updated at every step.' },
    { title: '4. Close with confidence', description: 'Sign and get your keys. We’re here even after closing.' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-display-md font-bold text-gray-900 mb-3">How it works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A simple, transparent path from application to closing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



