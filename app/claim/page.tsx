import { ClaimHeader } from "@/components/claim-header"
import { ClaimOverview } from "@/components/claim-overview"
import { ClaimObjective } from "@/components/claim-objective"
import { ClaimEligibility } from "@/components/claim-eligibility"
import { ClaimRewardDistribution } from "@/components/claim-reward-distribution"
import { ClaimAntiAbuse } from "@/components/claim-anti-abuse"
import { ClaimConclusion } from "@/components/claim-conclusion"
import { ClaimFooter } from "@/components/claim-footer"

export const metadata = {
  title: "Claim Free Airdrop | NexusAirdrop",
  description: "Claim your free airdrop tokens based on your on-chain activity.",
}

export default function ClaimPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClaimHeader />
      <ClaimOverview />
      <ClaimObjective />
      <ClaimEligibility />
      <ClaimRewardDistribution />
      <ClaimAntiAbuse />
      <ClaimConclusion />
      <ClaimFooter />
    </main>
  )
}
