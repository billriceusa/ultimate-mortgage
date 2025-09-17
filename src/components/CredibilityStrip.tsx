import Image from 'next/image'

export function CredibilityStrip() {
  const credibilityMarkers = [
    { name: 'Trustpilot', rating: '4.8', count: '2,500+ reviews', icon: '⭐' },
    { name: 'Google', rating: '4.9', count: '4,300+ reviews', icon: '⭐' },
    { name: 'Zillow', rating: '4.9', count: '9,200+ reviews', icon: '⭐' },
    { name: 'Bankrate', rating: '5.0', count: '3,100+ reviews', icon: '⭐' },
  ]

  const testimonials = [
    {
      text: "Ultimate Mortgage made our first home purchase so easy. Our loan officer was available whenever we had questions, and we closed in just 18 days!",
      author: "Sarah & Mike Johnson",
      location: "Austin, TX",
      image: '/img/getty-images-3Lkj_NkKIQQ-unsplash.jpg'
    },
    {
      text: "I refinanced with Ultimate Mortgage and saved $400 per month. The process was transparent and stress-free from start to finish.",
      author: "David Chen",
      location: "Denver, CO", 
      image: '/img/stephanie-berbec-PL5KCJPl_G8-unsplash.jpg'
    }
  ]

  return (
    <section className="py-16 bg-ui-surface border-t border-ui-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display text-text-primary mb-4">
            What our customers say
          </h2>
          <p className="text-text-secondary">
            Real stories from real families who found their perfect mortgage with us
          </p>
        </div>
        
        {/* Customer Reviews */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ui-bg rounded-lg border border-ui-border p-8">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`Customer photo - ${testimonial.author}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-text-muted text-small">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Review Stats */}
        <div className="border-t border-ui-border pt-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-yellow-500 text-3xl">⭐⭐⭐⭐⭐</span>
              <span className="text-2xl font-bold text-text-primary">15,000+ Five-Star Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credibilityMarkers.map((marker, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{marker.icon}</div>
                <div className="font-bold text-brand-primary text-xl mb-1">
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
        </div>
      </div>
    </section>
  )
}
