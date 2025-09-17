'use client'

import Image from 'next/image'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative bg-ui-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-h1 font-display text-text-primary leading-tight">
                A better way to your best mortgage
              </h1>
              <p className="text-body text-text-secondary max-w-lg">
                Transparent pricing. Fast approvals. Human loan experts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large">
                Get my payment
              </Button>
              <Button variant="secondary" size="large">
                Talk to a loan expert
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-small text-text-muted">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-state-success rounded-full mr-2"></div>
                No impact to credit score
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-state-success rounded-full mr-2"></div>
                Takes 2 minutes
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[16/9] relative rounded-md overflow-hidden">
              <Image
                src="/img/getty-images-UJan77XrT6Q-unsplash.jpg"
                alt="Couple sharing pizza on the floor of their new home with boxes around them"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
