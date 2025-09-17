import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'

export default function RatesPage() {
  const todaysRates = [
    { 
      product: '30-Year Fixed', 
      rate: '6.875%', 
      apr: '7.125%', 
      payment: '$2,847',
      popular: true 
    },
    { 
      product: '15-Year Fixed', 
      rate: '6.375%', 
      apr: '6.625%', 
      payment: '$3,421',
      popular: false 
    },
    { 
      product: 'FHA 30-Year', 
      rate: '6.625%', 
      apr: '7.875%', 
      payment: '$2,756',
      popular: false 
    },
    { 
      product: 'VA 30-Year', 
      rate: '6.500%', 
      apr: '6.750%', 
      payment: '$2,695',
      popular: false 
    },
    { 
      product: '5/1 ARM', 
      rate: '5.875%', 
      apr: '7.250%', 
      payment: '$2,543',
      popular: false 
    },
    { 
      product: 'Jumbo 30-Year', 
      rate: '7.125%', 
      apr: '7.375%', 
      payment: '$2,984',
      popular: false 
    },
  ]

  return (
    <div className="min-h-screen bg-ui-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-ui-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-h1 font-display text-text-primary mb-6">
              Today's Mortgage Rates
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Compare current rates across different loan programs. Rates updated daily.
            </p>
            <Button variant="primary" size="large">
              Get Your Personalized Rate
            </Button>
          </div>
        </section>

        {/* Rates Table */}
        <section className="py-16 bg-ui-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todaysRates.map((rate, index) => (
                <div
                  key={index}
                  className={`relative bg-ui-bg rounded-lg border p-6 card-hover ${
                    rate.popular ? 'border-brand-primary ring-2 ring-brand-primary ring-opacity-20' : 'border-ui-border'
                  }`}
                >
                  {rate.popular && (
                    <div className="absolute -top-3 left-4">
                      <span className="bg-brand-primary text-brand-onPrimary px-3 py-1 rounded-full text-small font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    {rate.product}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Rate</span>
                      <span className="text-2xl font-bold text-brand-primary">
                        {rate.rate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">APR</span>
                      <span className="font-semibold text-text-primary">
                        {rate.apr}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-ui-border">
                      <span className="text-text-muted">Monthly Payment*</span>
                      <span className="font-semibold text-text-primary">
                        {rate.payment}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="secondary" className="w-full mt-6">
                    Get This Rate
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-small text-text-muted">
                *Based on $400,000 loan amount with 20% down payment
              </p>
              <button className="text-text-link hover:underline text-small mt-2">
                Assumptions & APR details
              </button>
            </div>
          </div>
        </section>

        {/* Rate Factors */}
        <section className="py-16 bg-ui-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Factors That Affect Your Rate
              </h2>
              <p className="text-text-secondary">
                Your actual rate may vary based on these key factors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-onPrimary font-bold text-small">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Credit Score</h3>
                    <p className="text-text-secondary">Higher credit scores typically qualify for better rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-onPrimary font-bold text-small">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Down Payment</h3>
                    <p className="text-text-secondary">Larger down payments often result in lower interest rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-onPrimary font-bold text-small">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Loan Term</h3>
                    <p className="text-text-secondary">Shorter loan terms typically have lower interest rates.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-onPrimary font-bold text-small">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Debt-to-Income Ratio</h3>
                    <p className="text-text-secondary">Lower DTI ratios demonstrate better ability to repay.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-onPrimary font-bold text-small">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Property Type</h3>
                    <p className="text-text-secondary">Primary residences typically get the best rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-onPrimary font-bold text-small">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Market Conditions</h3>
                    <p className="text-text-secondary">Economic factors influence overall rate environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-ui-surfaceAlt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-h2 font-display text-text-primary mb-4">
              Get Your Actual Rate
            </h2>
            <p className="text-text-secondary mb-8">
              Rates shown are estimates. Get your personalized rate based on your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Get Pre-Approved Now
              </Button>
              <Button variant="secondary" size="large">
                Calculate My Payment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
