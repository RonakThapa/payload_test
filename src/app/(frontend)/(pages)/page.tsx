import { GridBackground } from '@/app/custom_components/GridBackground'
import PricingPage from '@/app/custom_components/PricingPage'
import SecondPage from '@/app/custom_components/SecondPage'
import ThirdPage from '@/app/custom_components/ThirdPage'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#020116] to-slate-900 text-white overflow-hidden relative">
        {/* Background gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-[#020116]" /> */}

        {/* Curved background element */}
        <div className="absolute bottom-0 left-0 right-0 h-96">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-purple-600/30 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold">MUTlab</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
            Join Waitlist
          </Button>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <span className="text-sm text-gray-300">Affordable Price With Best Results</span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mb-6">
            Optimize Your Testing with <span className="block">Advanced Strategies</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Unlock the power of data-driven decisions with our cutting-edge AI&ML testing software.
            Experience faster results through our innovative Multi-Variate Testing and Multi-Armed
            Bandit Approach.
          </p>

          {/* CTA Button */}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg mb-20">
            Join Waitlist
          </Button>

          {/* Trusted by Companies */}
          <div className="w-full max-w-4xl">
            <p className="text-gray-400 mb-8 text-lg">Trusted by Companies</p>

            <div className="flex items-center justify-center gap-12 md:gap-16 opacity-60">
              {/* Company logos - using placeholder text since we can't see the exact logos clearly */}
              <div className="text-gray-400 text-xl font-semibold">alace.ai</div>
              <div className="text-gray-400 text-xl font-semibold">mohq</div>
              <div className="text-gray-400 text-xl font-semibold">CIO</div>
              <div className="text-gray-400 text-xl font-semibold">alace.ai</div>
              <div className="text-gray-400 text-xl font-semibold">mohq</div>
            </div>
          </div>
        </main>

        <GridBackground />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[700px] bg-gradient-radial from-purple-500/50 via-purple-500/30 to-transparent rounded-t-full blur-[60px]" />
      </div>
      <SecondPage />
      <ThirdPage />
      <PricingPage />
    </div>
  )
}
