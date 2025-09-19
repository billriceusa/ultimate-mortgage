import Link from 'next/link'
import { Button } from './ui/Button'

export function ContactPrompt() {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions? We’re here to help.</h3>
            <p className="text-gray-600">Talk to a friendly loan expert or start your application in minutes.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-md border-2 border-secondary-500 text-secondary-600 bg-white font-semibold hover:bg-secondary-500 hover:text-white hover:shadow-md hover:-translate-y-0.5 active:bg-secondary-600 active:border-secondary-600 active:translate-y-0 focus:ring-secondary-500 text-center">
              Talk to an expert
            </Link>
            <Link href="/apply" className="btn btn-md bg-primary-500 text-white font-semibold shadow-md hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 active:bg-primary-700 active:translate-y-0 focus:ring-primary-500 text-center">
              Start application
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


