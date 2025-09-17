'use client'

import { Button } from './ui/Button'
import Image from 'next/image'

export function GuideDownload() {
  const handleDownload = () => {
    // This would trigger the lead capture form in production
    console.log('Download guide clicked')
  }

  return (
    <section className="py-20 bg-ui-surfaceAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-h2 font-display text-text-primary">
              Free Home Buyer's Guide
            </h2>
            <p className="text-body text-text-secondary">
              Download our comprehensive guide to understand the home buying process, 
              from pre-approval to closing. Get insider tips that could save you thousands.
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-state-success rounded-full mr-3"></div>
                Step-by-step home buying timeline
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-state-success rounded-full mr-3"></div>
                How to improve your credit score quickly
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-state-success rounded-full mr-3"></div>
                Down payment assistance programs
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-state-success rounded-full mr-3"></div>
                Closing costs breakdown and negotiation tips
              </li>
            </ul>
            <Button variant="primary" size="large" onClick={handleDownload}>
              Download Free Guide
            </Button>
            <p className="text-small text-text-muted">
              No spam, ever. We respect your privacy.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-md overflow-hidden">
              <Image
                src="/img/getty-images-inAjzRbByfA-unsplash.jpg"
                alt="Young child playing with a cardboard house by bright windows"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
