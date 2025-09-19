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
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-display-md font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-gray-600">
            Real stories from real families who found their perfect mortgage with us
          </p>
        </div>

        {/* Review platform badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10" role="list" aria-label="Review platforms">
          {credibilityMarkers.map((m) => (
            <div key={m.name} role="listitem" className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-full bg-white text-sm text-gray-700">
              <svg className="w-4 h-4 text-secondary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">{m.name}</span>
              <span className="text-gray-500">{m.rating}</span>
              <span className="sr-only">{m.count}</span>
            </div>
          ))}
        </div>
        
        {/* Customer Reviews */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-gray-200 text-gray-700 text-xs font-medium">
                  <svg className="w-3.5 h-3.5 text-secondary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span>5.0 Rating</span>
                </div>
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
                  <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Happy Customers</div>
              <div className="text-xs text-gray-500">5-star reviews</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$2.5B+</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Loans Funded</div>
              <div className="text-xs text-gray-500">Since 2019</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15 min</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Avg. Approval</div>
              <div className="text-xs text-gray-500">Digital process</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">A+</div>
              <div className="text-sm font-medium text-gray-900 mb-1">BBB Rating</div>
              <div className="text-xs text-gray-500">Accredited business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
