import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: 'Michael Johnson',
      title: 'Senior Loan Officer',
      nmls: 'NMLS #234567',
      location: 'Columbus, OH',
      specialties: ['First-Time Buyers', 'VA Loans', 'Conventional'],
      phone: '(614) 555-0101',
      email: 'mjohnson@ultimatemortgage.com',
      image: '/img/getty-images-liEDybMUFio-unsplash.jpg'
    },
    {
      name: 'Sarah Davis',
      title: 'Mortgage Specialist',
      nmls: 'NMLS #345678',
      location: 'Cincinnati, OH',
      specialties: ['FHA Loans', 'Refinancing', 'Investment Properties'],
      phone: '(513) 555-0102',
      email: 'sdavis@ultimatemortgage.com',
      image: '/img/getty-images-Y2QYb2SN7yA-unsplash.jpg'
    },
    {
      name: 'David Chen',
      title: 'Construction Loan Specialist',
      nmls: 'NMLS #456789',
      location: 'Cleveland, OH',
      specialties: ['Construction Loans', 'Renovation Loans', 'Jumbo Loans'],
      phone: '(216) 555-0103',
      email: 'dchen@ultimatemortgage.com',
      image: '/img/getty-images-3Lkj_NkKIQQ-unsplash.jpg'
    },
    {
      name: 'Jennifer Wilson',
      title: 'DSCR Loan Expert',
      nmls: 'NMLS #567890',
      location: 'Akron, OH',
      specialties: ['DSCR Loans', 'Investment Properties', 'Bank Statement Loans'],
      phone: '(330) 555-0104',
      email: 'jwilson@ultimatemortgage.com',
      image: '/img/stephanie-berbec-PL5KCJPl_G8-unsplash.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-ui-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-ui-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-h1 font-display text-text-primary mb-6">
              Our Expert Team
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Meet our licensed mortgage professionals dedicated to helping you achieve your homeownership goals.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-ui-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-ui-bg rounded-lg border border-ui-border p-8 card-hover">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 relative rounded-lg overflow-hidden">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-text-primary mb-2">
                        {member.name}
                      </h3>
                      <p className="text-text-secondary mb-1">{member.title}</p>
                      <p className="text-small text-text-muted mb-2">{member.nmls}</p>
                      <p className="text-text-secondary mb-4">{member.location}</p>
                      
                      <div className="mb-4">
                        <p className="text-small font-semibold text-text-primary mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="bg-ui-surfaceAlt text-text-secondary px-3 py-1 rounded-full text-small"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-text-secondary">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-small">{member.phone}</span>
                        </div>
                        <div className="flex items-center text-text-secondary">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-small">{member.email}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="primary" size="medium" className="flex-1">
                          Contact {member.name.split(' ')[0]}
                        </Button>
                        <Button variant="secondary" size="medium" className="flex-1">
                          Get My Rate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-ui-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-display text-text-primary mb-4">
                Why Choose Ultimate Mortgage
              </h2>
              <p className="text-text-secondary">
                We work for you, not the bank. Here's what sets us apart.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-onPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Lightning-Fast Process</h3>
                    <p className="text-text-secondary">Get pre-approved in minutes, not days. Our streamlined process saves you time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-onPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Expert Guidance</h3>
                    <p className="text-text-secondary">Licensed professionals with years of experience guide you through every step.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-onPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Competitive Rates</h3>
                    <p className="text-text-secondary">Access to multiple lenders means we find you the best rates and terms available.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-onPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Transparent Process</h3>
                    <p className="text-text-secondary">No hidden fees or surprises. You'll know exactly what to expect from day one.</p>
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
              Ready to work with our team?
            </h2>
            <p className="text-text-secondary mb-8">
              Connect with one of our mortgage experts today and experience the Ultimate difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Get Started Today
              </Button>
              <Button variant="secondary" size="large">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
