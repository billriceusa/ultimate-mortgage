import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { RateProofRow } from '@/components/RateProofRow'
import { CalculatorPreview } from '@/components/CalculatorPreview'
import { ValueProps } from '@/components/ValueProps'
import { CredibilityStrip } from '@/components/CredibilityStrip'
import { GuideDownload } from '@/components/GuideDownload'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ui-bg">
      <Header />
      <main>
        <Hero />
        <RateProofRow />
        <CalculatorPreview />
        <ValueProps />
        <CredibilityStrip />
        <GuideDownload />
      </main>
      <Footer />
    </div>
  )
}
