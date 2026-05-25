export function ClaimAntiAbuse() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Anti-Abuse Measures</h2>
          
          <div className="bg-card/50 border border-border/50 rounded-xl p-8 space-y-6">
            <p className="text-lg text-muted-foreground">
              To maintain fairness and integrity:
            </p>
            
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span><strong>Wallet Clustering and Sybil Detection Mechanisms</strong> will be employed to identify and exclude coordinated accounts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span><strong>Suspicious or Inorganic Activity</strong> may result in disqualification from the airdrop.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span><strong>Wash Trading, Self-transfers, and Spam Transactions</strong> will not be rewarded.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
