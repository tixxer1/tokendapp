export function TokenomicsSection() {
  const allocations = [
    { label: "Public Airdrop", percentage: 40, color: "bg-primary" },
    { label: "Team & Advisors", percentage: 15, color: "bg-emerald-400" },
    { label: "Liquidity Pool", percentage: 20, color: "bg-green-600" },
    { label: "Development", percentage: 15, color: "bg-teal-500" },
    { label: "Marketing", percentage: 10, color: "bg-lime-400" },
  ]

  return (
    <section id="tokenomics" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Tokenomics
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Fair & Transparent Distribution
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our token allocation is designed to ensure long-term sustainability and community growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Circular Chart */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {allocations.reduce((acc, allocation, index) => {
                  const offset = acc.offset
                  const circumference = 2 * Math.PI * 40
                  const dashLength = (allocation.percentage / 100) * circumference
                  
                  acc.elements.push(
                    <circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeDasharray={`${dashLength} ${circumference}`}
                      strokeDashoffset={-offset}
                      className={allocation.color.replace('bg-', 'text-')}
                    />
                  )
                  
                  acc.offset += dashLength
                  return acc
                }, { elements: [] as JSX.Element[], offset: 0 }).elements}
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">50M</div>
                  <div className="text-sm text-muted-foreground">Total Supply</div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl -z-10" />
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {allocations.map((allocation, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className={`w-4 h-4 rounded-full ${allocation.color}`} />
                <div className="flex-1">
                  <div className="font-medium text-foreground">{allocation.label}</div>
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {allocation.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
