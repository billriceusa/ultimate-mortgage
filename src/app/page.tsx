import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { RateProofRow } from '@/components/RateProofRow'
import { GoalsSelector } from '@/components/GoalsSelector'
import { HowItWorks } from '@/components/HowItWorks'
import { LearningCenter } from '@/components/LearningCenter'
import { ContactPrompt } from '@/components/ContactPrompt'
import { CalculatorPreview } from '@/components/CalculatorPreview'
import { ValueProps } from '@/components/ValueProps'
import { CredibilityStrip } from '@/components/CredibilityStrip'
import { GuideDownload } from '@/components/GuideDownload'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <RateProofRow />
        <GoalsSelector />
        <HowItWorks />
        <LearningCenter />
        <CalculatorPreview />
        <ValueProps />
        <CredibilityStrip />
        <GuideDownload />
        <ContactPrompt />
      </main>
      <Footer />
    </div>
  )
}
