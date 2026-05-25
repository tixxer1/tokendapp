import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ClaimOverview() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Wave Pattern SVG */}
      <svg
        className="absolute right-0 top-0 h-full opacity-20 pointer-events-none"
        width="600"
        height="800"
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" fill="none">
          {[...Array(20)].map((_, i) => (
            <path
              key={i}
              d={`M ${100 + i * 20} 0 Q ${200 + i * 20} 100, ${100 + i * 20} 200`}
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </g>
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Claim Free Airdrop</h1>
              <h2 className="text-2xl font-semibold text-primary mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Nexus Airdrop is designed to reward genuine ecosystem participants based on on-chain activities and engagement metrics. Rather than incentivizing one-time actions, this program prioritizes users who demonstrate sustained and meaningful interaction with their wallets and the broader blockchain ecosystem.
              </p>
            </div>

            <Link href="/connect-wallet">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold group">
                Claim Airdrop
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Stats */}
          <div className="hidden md:flex flex-col justify-center items-end space-y-8">
            <div className="text-right">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground text-lg">Integrated Wallets</p>
            </div>
            <div className="w-px h-16 bg-primary/30" />
            <div className="text-right">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">$5.7M+</div>
              <p className="text-muted-foreground text-lg">Claimed Rewards</p>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="md:hidden grid grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Integrated Wallets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$5.7M+</div>
              <p className="text-muted-foreground">Claimed Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
