export function CredibilityStrip() {
  const credibilityMarkers = [
    { name: 'Google Reviews', rating: '4.9/5', count: '2,000+' },
    { name: 'Zillow Premier Agent', rating: '5.0/5', count: '500+' },
    { name: 'Trustpilot', rating: '4.8/5', count: '1,200+' },
    { name: 'BBB', rating: 'A+', count: 'Accredited' },
  ]

  const pressLogos = [
    'Forbes',
    'Wall Street Journal',
    'USA Today',
    'CNN',
  ]

  return (
    <section className="py-16 bg-ui-surface border-t border-ui-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h3 font-display text-text-primary mb-4">
            Trusted by thousands of homeowners
          </h2>
          <p className="text-text-secondary">
            See why customers choose us for their mortgage needs
          </p>
        </div>
        
        {/* Reviews */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {credibilityMarkers.map((marker, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-brand-primary mb-1">
                {marker.rating}
              </div>
              <div className="font-semibold text-text-primary mb-1">
                {marker.name}
              </div>
              <div className="text-small text-text-muted">
                {marker.count}
              </div>
            </div>
          ))}
        </div>
        
        {/* Press logos */}
        <div className="border-t border-ui-border pt-12">
          <div className="text-center mb-8">
            <p className="text-small text-text-muted uppercase tracking-wide">
              As featured in
            </p>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {pressLogos.map((logo, index) => (
              <div key={index} className="text-lg font-semibold text-text-secondary">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
