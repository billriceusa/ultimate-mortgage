import Link from 'next/link'

export function LearningCenter() {
  const links = [
    { title: 'Mortgage basics', href: '/resources/mortgage-basics' },
    { title: 'How to get approved', href: '/resources/how-to-get-approved' },
    { title: 'Steps to buying a home', href: '/resources/steps-to-buying' },
    { title: 'Refinancing explained', href: '/resources/refinancing-explained' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-display-md font-bold text-gray-900 mb-3">Learning Center</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Clear, friendly guides to help you make confident decisions.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="card card-hover p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{l.title}</h3>
              <p className="text-sm text-secondary-600">Read guide →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



