export function StatsSection() {
  const stats = [
    { value: "3,800+", label: "Users Active" },
    { value: "230+", label: "Supported Wallets" },
    { value: "$230M+", label: "Total Transactions" },
  ]

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-base md:text-lg text-primary font-medium">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute h-12 w-px bg-primary/30 ml-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
