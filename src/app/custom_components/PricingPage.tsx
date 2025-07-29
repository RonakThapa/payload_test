'use client'
import React, { useState } from 'react'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <div className="min-h-screen bg-[#0a0a1f] flex flex-col items-center justify-center px-4 py-12">
      {/* Lightning Icon */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-4">Pricing Plans</h1>
      <p className="text-gray-400 mb-8 text-lg">Choose the plan that fits your needs best.</p>

      {/* Billing Toggle */}
      <div className="flex items-center gap-3 mb-12">
        <button
          onClick={() => setBillingPeriod('monthly')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            billingPeriod === 'monthly'
              ? 'bg-purple-600 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingPeriod('yearly')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            billingPeriod === 'yearly'
              ? 'bg-purple-600 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Free Plan */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 h-full flex flex-col">
            {/* Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-purple-400 text-lg font-medium mb-4">Free Forvever Plan</h3>

            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$0</span>
            </div>

            <p className="text-gray-400 text-sm mb-4">Includes:</p>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Up to 5K visitors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">A/B/n testing included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Multi-armed bandit included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Community/Chat support access</span>
              </li>
            </ul>

            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Get started
            </button>
          </div>
        </div>

        {/* Business Plan */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 h-full flex flex-col">
            {/* Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>

            <h3 className="text-indigo-400 text-lg font-medium mb-4">Business Plan</h3>

            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$179</span>
              <span className="text-gray-400 text-2xl">/mo</span>
            </div>

            <p className="text-gray-400 text-sm mb-4">Includes:</p>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Up to 30K visitors / month</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">All Features included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Premium Support - chat/email/call</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Monthly usage fees apply</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Starting at $2.50 per 1K visitors</span>
              </li>
            </ul>

            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Get started
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 h-full flex flex-col">
            {/* Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>

            <h3 className="text-blue-400 text-lg font-medium mb-4">Enterprise Plan</h3>

            <div className="mb-6">
              <span className="text-5xl font-bold text-white">Contact</span>
            </div>

            <p className="text-gray-400 text-sm mb-4">Includes:</p>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Custom solutions available</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Dedicated CRO specialist</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Annual contracts 12 to 24 month</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">Upto 50% Discounts for long-term</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">
                  Usage fees as low as $0.50 per 1K visitors
                </span>
              </li>
            </ul>

            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
