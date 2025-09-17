export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-primary text-ui-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Ultimate Mortgage</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A better way to your best mortgage. Transparent pricing, fast approvals, 
              and human loan experts to guide you home.
            </p>
            <div className="space-y-2 text-small text-gray-300">
              <p>📞 (555) 123-LOAN</p>
              <p>✉️ info@ultimatemortgage.com</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-small">
              <li><a href="/rates" className="text-gray-300 hover:text-ui-bg transition-colors">Current Rates</a></li>
              <li><a href="/calculator" className="text-gray-300 hover:text-ui-bg transition-colors">Calculator</a></li>
              <li><a href="/loan-programs" className="text-gray-300 hover:text-ui-bg transition-colors">Loan Programs</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-ui-bg transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-ui-bg transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Loan Programs */}
          <div>
            <h4 className="font-semibold mb-4">Loan Programs</h4>
            <ul className="space-y-2 text-small">
              <li><a href="/conventional" className="text-gray-300 hover:text-ui-bg transition-colors">Conventional</a></li>
              <li><a href="/fha" className="text-gray-300 hover:text-ui-bg transition-colors">FHA</a></li>
              <li><a href="/va" className="text-gray-300 hover:text-ui-bg transition-colors">VA</a></li>
              <li><a href="/usda" className="text-gray-300 hover:text-ui-bg transition-colors">USDA</a></li>
              <li><a href="/jumbo" className="text-gray-300 hover:text-ui-bg transition-colors">Jumbo</a></li>
            </ul>
          </div>
        </div>
        
        {/* Compliance Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-ui-bg text-text-primary rounded flex items-center justify-center text-xs font-bold">
                  NMLS
                </div>
                <span className="text-small text-gray-300">ID: 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-ui-bg text-text-primary rounded flex items-center justify-center text-xs font-bold">
                  EHL
                </div>
                <span className="text-small text-gray-300">Equal Housing Lender</span>
              </div>
            </div>
            
            <div className="text-small text-gray-300">
              © {currentYear} Ultimate Mortgage. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong>Important Disclosures:</strong> Estimates only. Not a commitment to lend. 
              Conditions, restrictions, and credit approval apply. Rates subject to change without notice. 
              All loans subject to underwriting approval. Equal Housing Opportunity. 
              Licensed by the Department of Financial Protection and Innovation under the California 
              Residential Mortgage Lending Act.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
              <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
              <a href="/disclosures" className="text-gray-400 hover:text-gray-300">Disclosures</a>
              <a href="/licensing" className="text-gray-400 hover:text-gray-300">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
