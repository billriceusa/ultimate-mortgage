'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const loanPrograms = [
    { name: 'Conventional Loan', href: '/loan-programs/conventional' },
    { name: 'FHA Loan', href: '/loan-programs/fha' },
    { name: 'VA Loan', href: '/loan-programs/va' },
    { name: 'Jumbo Loan', href: '/loan-programs/jumbo' },
    { name: 'DSCR Loan', href: '/loan-programs/dscr' },
    { name: 'Bank Statement Loan', href: '/loan-programs/bank-statement' },
    { name: 'Construction Loan', href: '/loan-programs/construction' },
    { name: 'Renovation Loan', href: '/loan-programs/renovation' },
  ]

  const calculators = [
    { name: 'Mortgage Payment Calculator', href: '/calculators/payment' },
    { name: 'Affordability Calculator', href: '/calculators/affordability' },
    { name: 'Refinance Calculator', href: '/calculators/refinance' },
    { name: 'DSCR Calculator', href: '/calculators/dscr' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Trust Bar */}
      <div className="bg-gray-50Alt py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">15,000+ Five-Star Reviews</span>
            </div>
            <div className="hidden md:block text-gray-500">|</div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-gray-600">"Exceptional service"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-sans font-bold text-brand-primary">
                Ultimate
              </div>
              <div className="text-2xl font-sans font-bold text-gray-900 ml-1">
                Mortgage
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Loan Programs Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-brand-primary transition-colors">
                Loan Programs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-50 shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {loanPrograms.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-600 hover:text-brand-primary hover:bg-gray-50Alt transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/our-team" className="text-gray-900 hover:text-brand-primary transition-colors">
              Our Team
            </Link>
            
            <Link href="/locations" className="text-gray-900 hover:text-brand-primary transition-colors">
              Locations
            </Link>

            <Link href="/rates" className="text-gray-900 hover:text-brand-primary transition-colors">
              Rates
            </Link>

            {/* Calculators Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-brand-primary transition-colors">
                Calculators
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-gray-50 shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {calculators.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-600 hover:text-brand-primary hover:bg-gray-50Alt transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/resources" className="text-gray-900 hover:text-brand-primary transition-colors">
              Resources
            </Link>
          </div>

          {/* Right Side CTAs */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">24/7: 1-800-555-0123</span>
              </div>
              <Button variant="secondary" size="md">
                Talk to a loan expert
              </Button>
            </div>
            <Button variant="primary" size="md">
              Apply Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <div>
                <div className="font-semibold text-gray-900 mb-2">Loan Programs</div>
                <div className="pl-4 space-y-2">
                  {loanPrograms.slice(0, 4).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-600 hover:text-brand-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/our-team" className="block text-gray-900 hover:text-brand-primary transition-colors">
                Our Team
              </Link>
              <Link href="/locations" className="block text-gray-900 hover:text-brand-primary transition-colors">
                Locations
              </Link>
              <Link href="/rates" className="block text-gray-900 hover:text-brand-primary transition-colors">
                Rates
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full">
                    Talk to a loan expert
                  </Button>
                  <Button variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
