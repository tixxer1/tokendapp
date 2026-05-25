"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-border/50 bg-card/90 backdrop-blur-xl px-8 py-4 shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/placeholder-logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm text-foreground tracking-wide">DAPPS</span>
              <span className="font-bold text-xs text-muted-foreground tracking-wider">ONLINE</span>
            </div>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/claim">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-7 py-2 font-semibold">
                Claim Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl p-6">
            <div className="flex flex-col gap-4">
              <Link href="/claim">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  Claim Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
