import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-primary text-ui-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-sans font-bold text-brand-primary">
                Ultimate
              </div>
              <div className="text-2xl font-sans font-bold text-ui-bg ml-1">
                Mortgage Brokers
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Making homeownership accessible with transparent pricing and expert guidance.
            </p>
            <div className="space-y-3">
              <div className="text-lg font-semibold text-ui-bg">24/7 Support</div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 (614) 361-7558</p>
                <p>✉️ info@ultimatemortgage.com</p>
              </div>
              <div className="text-sm text-gray-300 pt-2">
                <p><strong>Office:</strong></p>
                <p>3 Easton Oval, Suite 235</p>
                <p>Columbus, OH 43219</p>
              </div>
            </div>
          </div>
          
          {/* Loan Products */}
          <div>
            <h4 className="font-semibold mb-4">Loan Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/loan-programs/conventional" className="text-gray-300 hover:text-ui-bg transition-colors">Conventional Loan</Link></li>
              <li><Link href="/loan-programs/fha" className="text-gray-300 hover:text-ui-bg transition-colors">FHA Loan</Link></li>
              <li><Link href="/loan-programs/va" className="text-gray-300 hover:text-ui-bg transition-colors">VA Loan</Link></li>
              <li><Link href="/loan-programs/jumbo" className="text-gray-300 hover:text-ui-bg transition-colors">Jumbo Loan</Link></li>
              <li><Link href="/loan-programs/dscr" className="text-gray-300 hover:text-ui-bg transition-colors">DSCR Loan</Link></li>
              <li><Link href="/loan-programs/bank-statement" className="text-gray-300 hover:text-ui-bg transition-colors">Bank Statement Loan</Link></li>
              <li><Link href="/loan-programs/construction" className="text-gray-300 hover:text-ui-bg transition-colors">Construction Loan</Link></li>
            </ul>
          </div>
          
          {/* Resource Center */}
          <div>
            <h4 className="font-semibold mb-4">Resource Center</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/calculators/payment" className="text-gray-300 hover:text-ui-bg transition-colors">Mortgage Payment Calculator</Link></li>
              <li><Link href="/calculators/affordability" className="text-gray-300 hover:text-ui-bg transition-colors">Affordability Calculator</Link></li>
              <li><Link href="/calculators/refinance" className="text-gray-300 hover:text-ui-bg transition-colors">Refinance Calculator</Link></li>
              <li><Link href="/calculators/dscr" className="text-gray-300 hover:text-ui-bg transition-colors">DSCR Calculator</Link></li>
              <li><Link href="/rates" className="text-gray-300 hover:text-ui-bg transition-colors">Current Rates</Link></li>
              <li><Link href="/our-team" className="text-gray-300 hover:text-ui-bg transition-colors">Our Team</Link></li>
              <li><Link href="/locations" className="text-gray-300 hover:text-ui-bg transition-colors">Locations</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Compliance Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center text-xs font-bold">
                  NMLS
                </div>
                <span className="text-sm text-gray-300">NMLS # 2619461</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center text-xs font-bold">
                  EHL
                </div>
                <span className="text-sm text-gray-300">Equal Housing Lender</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-300">
              © {currentYear} Ultimate Mortgage Brokers. All rights reserved.
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              For licensing information, go to: <a href="https://www.nmlsconsumeraccess.org" className="text-gray-300 hover:text-ui-bg underline">www.nmlsconsumeraccess.org</a>
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply. Equal Housing Opportunity.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Connecticut – MORTGAGE BROKER ONLY, NOT A MORTGAGE LENDER OR MORTGAGE CORRESPONDENT LENDER.
            </p>
            
            <div className="flex flex-wrap gap-4 text-xs pt-4 border-t border-gray-700">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms-of-use" className="text-gray-400 hover:text-gray-300">Terms of Use</Link>
              <Link href="/licensing" className="text-gray-400 hover:text-gray-300">Licensing</Link>
              <Link href="/disclosures" className="text-gray-400 hover:text-gray-300">Disclosures</Link>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              Created by Complete Mortgage Marketing
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
