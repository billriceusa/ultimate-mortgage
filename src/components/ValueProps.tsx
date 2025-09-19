import Image from 'next/image'

export function ValueProps() {
  const valueProps = [
    {
      title: 'Transparent pricing',
      description: 'No hidden fees or surprises. See all costs upfront before you commit.',
      image: '/img/getty-images-3Lkj_NkKIQQ-unsplash.jpg',
      alt: 'Parents and two kids looking at a laptop on a sofa at home'
    },
    {
      title: 'Fast approvals',
      description: 'Get pre-approved in minutes, not days. Close faster with our streamlined process.',
      image: '/img/getty-images-liEDybMUFio-unsplash.jpg',
      alt: 'Father and daughter sitting on the floor reading while moving boxes sit nearby'
    },
    {
      title: 'Close with confidence',
      description: 'Expert loan officers guide you through every step to closing day.',
      image: '/img/stephanie-berbec-PL5KCJPl_G8-unsplash.jpg',
      alt: 'Couple reviewing loan documents together on a couch at home'
    },
    {
      title: 'Human expertise',
      description: '24/7 support from real people who understand your unique situation.',
      image: '/img/getty-images-Y2QYb2SN7yA-unsplash.jpg',
      alt: 'Child drawing at the kitchen table while a parent cooks'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold text-gray-900 mb-4">
            Why choose Ultimate Mortgage
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We're different from other lenders. Here's how we make your mortgage experience better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center group">
              <div className="aspect-square relative rounded-md overflow-hidden mb-6 card-hover">
                <Image
                  src={prop.image}
                  alt={prop.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-600">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
