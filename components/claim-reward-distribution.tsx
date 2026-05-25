export function ClaimRewardDistribution() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Reward Distribution</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>Tokens will be distributed proportionally based on each wallet&apos;s Activity Score.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>Higher Activity Scores indicate greater participation and consistency, resulting in greater allocations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>A minimum activity threshold may be required to qualify.</span>
              </li>
            </ul>
          </div>

          {/* Right decorative element */}
          <div className="hidden md:block relative h-96">
            <svg
              className="w-full h-full opacity-20"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="rgba(34, 197, 94, 0.5)" strokeWidth="1">
                {[...Array(15)].map((_, i) => (
                  <path
                    key={i}
                    d={`M 50 ${50 + i * 20} Q 150 ${100 + i * 20}, 350 ${50 + i * 20}`}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
