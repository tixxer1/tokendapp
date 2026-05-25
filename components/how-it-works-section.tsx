import { Wallet, CheckCircle, Gift } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Wallet,
      title: "Connect Wallet",
      description: "Connect your MetaMask, Trust Wallet, or any Web3 compatible wallet to get started."
    },
    {
      number: "02",
      icon: CheckCircle,
      title: "Verify Eligibility",
      description: "Our system automatically checks your wallet eligibility based on on-chain activity."
    },
    {
      number: "03",
      icon: Gift,
      title: "Claim Tokens",
      description: "Click claim and receive your tokens instantly. It's that simple!"
    }
  ]

  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Claim in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Getting your free tokens has never been easier. Follow these simple steps to claim your airdrop.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="relative text-center group">
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 mb-6 group-hover:border-primary/50 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
