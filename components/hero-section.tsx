"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-grid-move"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/15 blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight text-foreground max-w-3xl mx-auto tracking-tight">
          Effortless Solutions for All Your Wallet Related Issues
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed font-normal">
          Facing wallet related issues? From lost keys to stuck transactions, we&apos;ve got you covered. Your DeFi journey made simple and secure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/claim">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-bold group shadow-lg">
              Claim Airdrop
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/connect-wallet">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-bold group shadow-lg">
              Resolve Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
