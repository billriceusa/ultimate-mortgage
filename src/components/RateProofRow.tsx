import Link from 'next/link'
import { Button } from './ui/Button'

export function RateProofRow() {
  const rateCards = [
    { product: '30-yr Fixed', rate: '6.875', apr: '7.125' },
    { product: 'FHA 30-yr', rate: '6.625', apr: '7.450' },
    { product: 'VA 30-yr', rate: '6.750', apr: '6.890' },
    { product: '15-yr Fixed', rate: '6.375', apr: '6.625' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Today's rates
          </h2>
          <p className="text-lg text-gray-600">
            See what you could qualify for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rateCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              aria-labelledby={`product-${index}`}
            >
              <div className="text-center">
                <h3 id={`product-${index}`} className="text-lg font-semibold text-gray-900 mb-4">
                  {card.product}
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary-500 mb-1">
                    {card.rate}%
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Rate
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {card.apr}%
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    APR
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">
            *Based on $400,000 loan with 20% down payment
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <Link href="/rates" className="btn btn-md bg-primary-500 text-white font-semibold shadow-md hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary-500">
              See more rates
            </Link>
            <Link href="/rates?quote=custom" className="btn btn-md border-2 border-secondary-500 text-secondary-600 bg-white font-semibold hover:bg-secondary-500 hover:text-white focus:ring-secondary-500">
              Get a custom quote
            </Link>
          </div>
          <div className="mt-4">
            <a 
              href="#assumptions" 
              className="text-secondary-600 hover:text-secondary-700 text-sm font-medium"
            >
              View assumptions & APR details →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
