import { Button } from "@/components/ui/button"
import { ArrowRight, Timer } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-card" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.2),transparent_50%)]" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:py-24 md:px-16 text-center">
            {/* Timer Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-8">
              <Timer className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Don&apos;t Miss Your Chance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
              The airdrop ends in 14 days. Claim your tokens now before it&apos;s too late. 
              Join 150,000+ participants who have already claimed their share.
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-4 mb-10">
              {[
                { value: "14", label: "Days" },
                { value: "08", label: "Hours" },
                { value: "32", label: "Minutes" },
                { value: "17", label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card border border-border flex items-center justify-center mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Link href="/claim">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-6 text-lg font-semibold group">
                Claim Airdrop
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
