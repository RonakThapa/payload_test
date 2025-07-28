import { GridBackground } from '@/app/custom_components/GridBackground'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
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

      <GridBackground />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[700px] bg-gradient-radial from-purple-500/50 via-purple-500/30 to-transparent rounded-t-full blur-[60px]" />
    </div>
  )
}
