import { Button } from '@/components/ui/button'

export default function SecondPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#020116] to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto rounded-lg p-8 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div
            // variant="outline"
            className="bg-blue-600/20 border-blue-400 text-blue-300 px-4 py-1"
          >
            ✓ CERTIFIED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Unlock Your Testing Potential
          </h1>
          <p className="text-blue-200/80 text-lg max-w-md mx-auto">
            Experience real-time insights for better decision-making.
          </p>
        </div>

        {/* Insights Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-700/50 rounded-lg aspect-square flex items-center justify-center">
            <div className="w-32 h-32 bg-slate-600/50 rounded"></div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-600/20 text-purple-300 px-3 py-1">Insights</div>
            <h2 className="text-3xl font-bold text-white">
              Harness the Power of Multivariate Testing
            </h2>
            <p className="text-blue-200/70 leading-relaxed">
              Our advanced multivariate testing analysis can be used to create and test multiple
              variations simultaneously. This means you can identify the most effective elements of
              your campaigns faster than ever.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
              Learn More
            </Button>
          </div>
        </div>

        {/* Winners Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:order-1">
            <div className="bg-green-600/20 border-green-400 text-green-300 px-3 py-1">Winners</div>
            <h2 className="text-3xl font-bold text-white">
              Smart Traffic Allocation with Bandit Approach
            </h2>
            <p className="text-blue-200/70 leading-relaxed">
              Utilize our multi-armed bandit approach to direct traffic towards the winning
              variations. This ensures you maximize your conversion rates efficiently.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
              Learn More
            </Button>
          </div>
          <div className="bg-slate-700/50 rounded-lg aspect-square flex items-center justify-center md:order-2">
            <div className="w-32 h-32 bg-slate-600/50 rounded"></div>
          </div>
        </div>

        {/* Affordable Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-700/50 rounded-lg aspect-square flex items-center justify-center">
            <div className="w-32 h-32 bg-slate-600/50 rounded"></div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-600/20 border-blue-400 text-blue-300 px-3 py-1">Affordable</div>
            <h2 className="text-3xl font-bold text-white">Flexible Plans to Fit Your Needs</h2>
            <p className="text-blue-200/70 leading-relaxed">
              Our plans start from just $79 per month, making powerful testing accessible to
              everyone. Plus, enjoy premium support to guide you through every step.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
