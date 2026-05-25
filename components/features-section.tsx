import { Wallet, Lock, Rocket, Gift, Globe, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Wallet,
      title: "Connect & Claim",
      description: "Simply connect your wallet and claim your tokens in one click. No complex steps required."
    },
    {
      icon: Lock,
      title: "Secure & Audited",
      description: "Our smart contracts are fully audited by leading security firms. Your assets are always safe."
    },
    {
      icon: Rocket,
      title: "Instant Distribution",
      description: "Tokens are distributed instantly to your wallet. No waiting periods or delays."
    },
    {
      icon: Gift,
      title: "100% Free",
      description: "No purchase necessary. Claim your tokens completely free during the airdrop period."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available worldwide. Anyone with a compatible wallet can participate in the airdrop."
    },
    {
      icon: Clock,
      title: "Limited Time",
      description: "The airdrop is time-limited. Don't miss your chance to claim your share."
    }
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            The Future of Token Distribution
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Experience the most seamless and secure airdrop platform built on cutting-edge blockchain technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
