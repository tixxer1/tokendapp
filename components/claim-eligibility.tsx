export function ClaimEligibility() {
  const criteria = [
    {
      title: "Transaction Frequency",
      description: "Users who perform transactions over time will receive higher weighting compared to sporadic activity.",
    },
    {
      title: "Wallet Activity Consistency",
      description: "Continuous usage across multiple time periods (days/months) will be prioritized over burst activity.",
    },
    {
      title: "Wallet Balance Strength",
      description: "Wallets maintaining a healthy and stable balance are scored accordingly.",
    },
    {
      title: "Interaction Diversity",
      description: "Engagement across different types of transactions (transfers, smart contract interactions, swaps, etc.) contributes positively.",
    },
    {
      title: "Ecosystem Participation",
      description: "Early adopters and users actively engaging with supported dApps and ecosystem partners may receive additional consideration.",
    },
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">Eligibility Criteria</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Participants will be evaluated using a combination of the following factors:
            </p>
          </div>

          <div className="space-y-6">
            {criteria.map((item, index) => (
              <div key={index} className="group">
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all hover:bg-card">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/20 text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
