import Link from 'next/link'
import { Button } from './ui/Button'

const goals = [
  {
    title: 'Buy a Home',
    description: 'Get pre‑approved fast and shop with confidence.',
    href: '/loan-programs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Refinance',
    description: 'Lower your payment or tap equity with confidence.',
    href: '/loan-programs?goal=refinance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M20 4l-6 6M4 20l6-6" />
      </svg>
    ),
  },
  {
    title: "Check Rates",
    description: "See today's rates personalized to you.",
    href: '/rates',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3m0 8a4 4 0 100 8 4 4 0 000-8zm0 0h8" />
      </svg>
    ),
  },
  {
    title: 'Tap Into Equity',
    description: 'Explore HELOAN and HELOC options for your needs.',
    href: '/loan-programs/equity',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function GoalsSelector() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-display-md font-bold text-gray-900 mb-3">What's your goal?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose a path to get the right guidance for where you are.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((item) => (
            <Link key={item.title} href={item.href} className="card card-hover p-6 group">
              <div className="w-12 h-12 rounded-full bg-secondary-50 text-secondary-600 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <Button variant="tertiary" className="px-0">Get started →</Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



