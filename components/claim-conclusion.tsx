import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ClaimConclusion() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Conclusion</h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            The Activity-Based Airdrop aligns incentives between the network and its users by leveraging consistency, authenticity, and genuine participation metrics. This ensures that token rewards meaningfully engage wallets actively using the ecosystem to maximize their eligibility.
          </p>

          <p className="text-2xl font-semibold text-primary">
            Stay active. Stay consistent. Get rewarded.
          </p>

          <Link href="/connect-wallet">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold group">
              Claim Airdrop
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
