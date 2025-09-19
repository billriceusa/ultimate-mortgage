'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/Button'
import { Logo } from './ui/Logo'
import { useRouter } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <header className={
      `sticky top-0 z-50 transition-all ${
        isScrolled 
          ? 'bg-white/95 border-b border-gray-200 shadow-sm' 
          : 'bg-white border-b border-gray-200'
      }`
    }>
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Ultimate Mortgage home">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-sm text-gray-600">Call: (614) 361-7558</span>
              <Button variant="secondary" size="md" onClick={() => router.push('/contact')}>
                Talk to Expert
              </Button>
            </div>
            <Button variant="primary" size="md" onClick={() => router.push('/apply')}>
              Apply Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-gray-200" role="navigation" aria-label="Mobile">
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
                  <Button variant="secondary" className="w-full" onClick={() => { setIsMenuOpen(false); router.push('/contact') }}>
                    Talk to a loan expert
                  </Button>
                  <Button variant="primary" className="w-full" onClick={() => { setIsMenuOpen(false); router.push('/apply') }}>
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
