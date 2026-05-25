'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function SolEthSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative h-full flex items-center justify-center py-12">
            <div className="relative w-full aspect-square max-w-lg flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl -z-10" />
              
              {/* Coins Illustration Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZCBetGlz2ZCttmOXdpKsUhR8mNufOX.png"
                  alt="SOL and ETH coins with parachutes"
                  fill
                  className="object-contain p-4 rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Claim Free SOL and ETH Airdrops
            </h2>

            <div className="space-y-4 text-foreground/70">
              <p>
                At <span className="font-semibold text-foreground">Dapps Online</span>, we make it easy for users to{' '}
                <span className="font-semibold text-foreground">claim verified SOL and ETH airdrops</span> directly through our 
                secure and user-friendly decentralized platform. Our system automatically scans for{' '}
                <span className="font-semibold text-foreground">ongoing and upcoming airdrops</span> from trusted blockchain 
                projects across the Solana and Ethereum networks. You can{' '}
                <span className="font-semibold text-foreground">connect your wallet</span>, verify eligibility, and claim your 
                tokens in just a few clicks — no complicated setups or hidden fees. Stay ahead of the crowd by{' '}
                <span className="font-semibold text-foreground">receiving new airdrop alerts</span>, tracking past claims, and 
                maximizing your earning potential with exclusive token rewards.
              </p>

              <p>
                Whether you're a crypto enthusiast or a new Web3 explorer,{' '}
                <span className="font-semibold text-foreground">Dapps Online</span> helps you unlock opportunities to grow 
                your portfolio with <span className="font-semibold text-foreground">legit and regularly updated airdrops</span>.
              </p>
            </div>

            <Link href="/claim">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-lg font-semibold group w-fit">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
