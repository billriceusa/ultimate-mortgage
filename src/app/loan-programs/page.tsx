import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function LoanProgramsPage() {
  const traditionalLoans = [
    {
      name: 'Conventional Loan',
      description: 'Flexible terms with competitive rates for borrowers with good credit.',
      features: ['Down payments as low as 3%', 'No mortgage insurance with 20% down', 'Loan amounts up to $766,550'],
      href: '/loan-programs/conventional'
    },
    {
      name: 'FHA Loan',
      description: 'Government-backed loans with lower down payment requirements.',
      features: ['Down payments as low as 3.5%', 'Credit scores as low as 580', 'Assumable loans'],
      href: '/loan-programs/fha'
    },
    {
      name: 'VA Loan',
      description: 'Exclusive benefits for eligible veterans and active military.',
      features: ['No down payment required', 'No private mortgage insurance', 'Competitive interest rates'],
      href: '/loan-programs/va'
    },
    {
      name: 'Jumbo Loan',
      description: 'Financing for luxury homes exceeding conventional loan limits.',
      features: ['Loan amounts above $766,550', 'Competitive rates for large loans', 'Flexible underwriting'],
      href: '/loan-programs/jumbo'
    }
  ]

  const specialtyLoans = [
    {
      name: 'DSCR Loan',
      description: 'Debt Service Coverage Ratio loans for investment properties.',
      features: ['No personal income verification', 'Based on rental income', 'For investment properties'],
      href: '/loan-programs/dscr'
    },
    {
      name: 'Bank Statement Loan',
      description: 'Alternative income documentation for self-employed borrowers.',
      features: ['Bank statements instead of tax returns', 'Self-employed friendly', 'Flexible income calculation'],
      href: '/loan-programs/bank-statement'
    },
    {
      name: 'Construction Loan',
      description: 'Financing for building your dream home from the ground up.',
      features: ['One-time close construction loans', 'Interest-only during construction', 'Convert to permanent loan'],
      href: '/loan-programs/construction'
    },
    {
      name: 'Renovation Loan',
      description: 'Finance both the purchase and renovation costs in one loan.',
      features: ['FHA 203(k) and conventional options', 'Include renovation costs', 'One closing process'],
      href: '/loan-programs/renovation'
    }
  ]

  return (
    <div className="min-h-screen bg-ui-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-ui-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1 font-display text-text-primary mb-6">
                Loan Programs
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Compare current rates across different loan programs. Find the perfect mortgage solution for your unique situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large">
                  Get Your Rate Quote
                </Button>
                <Button variant="secondary" size="large">
                  Talk to a Loan Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Loans */}
        <section className="py-16 bg-ui-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Traditional Loan Programs
              </h2>
              <p className="text-text-secondary">
                Popular loan options for most homebuyers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {traditionalLoans.map((loan) => (
                <div key={loan.name} className="bg-ui-bg rounded-lg border border-ui-border p-8 card-hover">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">
                    {loan.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {loan.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-text-secondary">
                        <div className="w-2 h-2 bg-state-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={loan.href}>
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Loans */}
        <section className="py-16 bg-ui-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Specialty Loan Programs
              </h2>
              <p className="text-text-secondary">
                Unique solutions for specific situations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {specialtyLoans.map((loan) => (
                <div key={loan.name} className="bg-ui-surface rounded-lg border border-ui-border p-8 card-hover">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">
                    {loan.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {loan.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-text-secondary">
                        <div className="w-2 h-2 bg-state-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={loan.href}>
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-ui-surfaceAlt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-h2 font-display text-text-primary mb-4">
              Ready to get started?
            </h2>
            <p className="text-text-secondary mb-8">
              Get personalized loan recommendations and rates in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Apply Now
              </Button>
              <Button variant="secondary" size="large">
                Calculate Payment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
