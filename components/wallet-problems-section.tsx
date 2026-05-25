'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function WalletProblemsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready To Solve Your Wallet Problems?
            </h2>

            <Link href="/claim">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-lg font-semibold group w-fit">
                Let's get started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Side - Analytics Chart */}
          <div className="relative h-96 order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm p-6 flex items-center justify-center">
              {/* Simple SVG Chart */}
              <svg className="w-full h-full" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Grid lines */}
                <line x1="50" y1="250" x2="480" y2="250" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="200" x2="480" y2="200" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="150" x2="480" y2="150" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="100" x2="480" y2="100" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="50" x2="480" y2="50" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" strokeDasharray="5,5" />

                {/* Y-axis labels (left) */}
                <text x="35" y="255" fontSize="11" fill="rgba(148, 163, 184, 0.6)" textAnchor="end">$ 400</text>
                <text x="35" y="205" fontSize="11" fill="rgba(148, 163, 184, 0.6)" textAnchor="end">$ 800</text>
                <text x="35" y="155" fontSize="11" fill="rgba(148, 163, 184, 0.6)" textAnchor="end">$ 1,200</text>
                <text x="35" y="105" fontSize="11" fill="rgba(148, 163, 184, 0.6)" textAnchor="end">$ 1,600</text>
                <text x="35" y="55" fontSize="11" fill="rgba(148, 163, 184, 0.6)" textAnchor="end">$ 2,800</text>

                {/* Y-axis labels (right) */}
                <text x="490" y="255" fontSize="11" fill="rgba(148, 163, 184, 0.6)">50%</text>
                <text x="490" y="205" fontSize="11" fill="rgba(148, 163, 184, 0.6)">100%</text>
                <text x="490" y="155" fontSize="11" fill="rgba(148, 163, 184, 0.6)">150%</text>
                <text x="490" y="105" fontSize="11" fill="rgba(148, 163, 184, 0.6)">200%</text>
                <text x="490" y="55" fontSize="11" fill="rgba(148, 163, 184, 0.6)">350%</text>

                {/* ETH Price Line (gray) */}
                <path
                  d="M 50 220 Q 150 210 250 200 Q 350 180 480 160"
                  stroke="rgba(148, 163, 184, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Ratio Line (green) */}
                <path
                  d="M 50 180 Q 150 170 250 140 Q 350 160 480 120"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Boost Ratio Line (yellow) */}
                <path
                  d="M 50 190 Q 150 160 250 130 Q 350 100 480 80"
                  stroke="rgba(251, 191, 36, 0.7)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="3,3"
                />

                {/* Targeted Ratio Line (light gray) */}
                <path
                  d="M 50 200 Q 150 190 250 180 Q 350 170 480 150"
                  stroke="rgba(148, 163, 184, 0.4)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4,4"
                />

                {/* Liquidation Ratio Line */}
                <path
                  d="M 50 210 Q 150 200 250 190 Q 350 185 480 170"
                  stroke="rgba(148, 163, 184, 0.3)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="6,4"
                />

                {/* Data points */}
                <circle cx="250" cy="200" r="3" fill="rgba(251, 191, 36, 0.8)" />
                <text x="250" y="225" fontSize="12" fill="rgba(251, 191, 36, 0.9)" fontWeight="bold" textAnchor="middle">Boost</text>

                {/* Legend */}
                <text x="50" y="290" fontSize="11" fill="#22c55e" fontWeight="bold">■ Ratio</text>
                <text x="150" y="290" fontSize="11" fill="rgba(148, 163, 184, 0.6)" fontWeight="bold">■ ETH price</text>
                <text x="280" y="290" fontSize="11" fill="rgba(251, 191, 36, 0.7)" fontWeight="bold">■ Boost ratio</text>
                <text x="410" y="290" fontSize="11" fill="rgba(148, 163, 184, 0.4)" fontWeight="bold">■ Targeted ratio</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
