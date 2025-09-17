'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

export function CalculatorPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-16 bg-ui-surfaceAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-ui-surface rounded-md shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-h3 font-display text-text-primary">
                Payment Calculator
              </h3>
              <span className="text-small text-text-muted">
                Estimates only
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  $2,847
                </div>
                <div className="text-text-muted text-small">
                  Monthly Payment (PITI)
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mt-4 text-center text-small">
                <div>
                  <div className="font-semibold">$1,847</div>
                  <div className="text-text-muted">P&I</div>
                </div>
                <div>
                  <div className="font-semibold">$650</div>
                  <div className="text-text-muted">Tax</div>
                </div>
                <div>
                  <div className="font-semibold">$250</div>
                  <div className="text-text-muted">Insurance</div>
                </div>
                <div>
                  <div className="font-semibold">$100</div>
                  <div className="text-text-muted">PMI</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-text-secondary mb-2">
                  Down Payment: 10%
                </label>
                <input
                  type="range"
                  min="0"
                  max="30"
                  defaultValue="10"
                  className="w-full h-2 bg-ui-border rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-text-secondary mb-2">
                  Interest Rate: 6.875%
                </label>
                <input
                  type="range"
                  min="5"
                  max="9"
                  step="0.125"
                  defaultValue="6.875"
                  className="w-full h-2 bg-ui-border rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => setIsModalOpen(true)}
            >
              See full breakdown
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modal placeholder - would implement full modal in production */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-ui-surface rounded-md p-8 max-w-md mx-4">
            <h3 className="text-h3 mb-4">Full Calculator</h3>
            <p className="text-text-secondary mb-6">
              This would open the full MortgageMate calculator embed.
            </p>
            <Button onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
