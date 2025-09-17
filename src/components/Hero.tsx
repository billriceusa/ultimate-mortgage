'use client'

import Image from 'next/image'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative bg-ui-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh] py-20">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-balance">
                Mortgage <span className="text-brand-primary">solutions.</span>
              </h1>
              <p className="text-body-lg text-text-secondary max-w-2xl">
                Lightning-fast application. Dedicated mortgage expert. Get a home loan you'll actually love.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large">
                Explore Your Options →
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-body-sm text-state-success">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No-impact credit check. No commitment.</span>
            </div>
          </div>
          
          {/* Right Side - Pathway Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-ui-surface rounded-lg border border-ui-border p-6 card-hover">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Get cash from your home.</h3>
              <p className="text-body-base text-text-secondary mb-4">Take cash out or get a HELOC to pay for whatever you need.</p>
              <Button variant="secondary" size="medium">
                Get Cash →
              </Button>
            </div>
            
            <div className="bg-ui-surface rounded-lg border border-ui-border p-6 card-hover">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Refinance.</h3>
              <p className="text-body-base text-text-secondary mb-4">Lower your payments and adjust loan terms. We'll find the right fit.</p>
              <Button variant="secondary" size="medium">
                Lower my payment →
              </Button>
            </div>
            
            <div className="bg-ui-surface rounded-lg border border-ui-border p-6 card-hover">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Buy a home.</h3>
              <p className="text-body-base text-text-secondary mb-4">The process is simple. Get the home of your dreams without the hassle.</p>
              <Button variant="secondary" size="medium">
                See if I qualify →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
