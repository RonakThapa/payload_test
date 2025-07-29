import { TestTube, Headphones, Bot, BookOpen, DollarSign } from 'lucide-react'

export default function ThirdPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="bg-gray-700/50 border-gray-600 text-gray-300 px-4 py-2">⚡ Optimize</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Maximize Your Testing Potential
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience powerful multivariate testing like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Testing Card */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <TestTube className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-purple-400 text-sm font-medium">Testing</p>
              <h3 className="text-white text-xl font-semibold">
                Unlock the Power of Multivariate Testing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Create multiple variations and optimize your results simultaneously with our
                advanced testing features.
              </p>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-purple-400 text-sm font-medium">Support</p>
              <h3 className="text-white text-xl font-semibold">
                Premium Support for Our Customers
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reach our expert team via phone, chat, or email.
              </p>
            </div>
          </div>

          {/* Assistance Card */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-purple-400 text-sm font-medium">Assistance</p>
              <h3 className="text-white text-xl font-semibold">
                Smart Traffic Allocation with Bandit Approach
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Let our system find the best variations for you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Knowledge Base Card */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xl font-semibold">Comprehensive Knowledge Base</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explore our extensive resources to enhance your testing experience and resolve any
                queries.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xl font-semibold">Affordable Plans Starting at $79</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get started with our budget-friendly pricing options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
