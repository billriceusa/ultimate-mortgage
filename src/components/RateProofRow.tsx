export function RateProofRow() {
  const rateCards = [
    { product: '30-yr Fixed', rate: '6.875%', apr: '7.125%' },
    { product: 'FHA 30-yr', rate: '6.625%', apr: '7.450%' },
    { product: 'VA 30-yr', rate: '6.750%', apr: '6.890%' },
    { product: '15-yr Fixed', rate: '6.375%', apr: '6.625%' },
  ]

  return (
    <section className="py-16 bg-ui-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display text-text-primary mb-4">
            Today's rates
          </h2>
          <p className="text-body text-text-secondary">
            See what you could qualify for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {rateCards.map((card, index) => (
            <div
              key={index}
              className="bg-ui-surface border border-ui-border rounded-md p-6 card-hover"
            >
              <h3 className="font-semibold text-text-primary mb-3">
                {card.product}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-muted">Rate:</span>
                  <span className="font-semibold text-brand-primary">
                    {card.rate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">APR:</span>
                  <span className="font-semibold">
                    {card.apr}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#assumptions" 
            className="text-text-link hover:underline text-small"
          >
            Assumptions & APR details
          </a>
        </div>
      </div>
    </section>
  )
}
