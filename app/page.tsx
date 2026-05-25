"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { WorldSection } from "@/components/world-section"
import { SolEthSection } from "@/components/sol-eth-section"
import { WalletProblemsSection } from "@/components/wallet-problems-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [verified, setVerified] = useState<boolean>(() => {
    try {
      return localStorage.getItem('dapps_verified') === '1'
    } catch (e) {
      return false
    }
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const widgetRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (verified) return
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY
    if (!siteKey) {
      setError('Missing Turnstile site key (NEXT_PUBLIC_TURNSTILE_SITEKEY)')
      return
    }

    const renderWidget = () => {
      const anyWindow: any = window
      if (!anyWindow.turnstile) {
        setError('Turnstile script not available')
        return
      }
      try {
        if (widgetRef.current) {
          widgetIdRef.current = anyWindow.turnstile.render(widgetRef.current, {
            sitekey: siteKey,
            callback: async (token: string) => {
              setLoading(true)
              try {
                const res = await fetch('/api/verify-turnstile', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ token }),
                })
                const data = await res.json()
                if (res.ok && data.success) {
                  setVerified(true)
                  try { localStorage.setItem('dapps_verified','1') } catch(e){}
                } else {
                  setError(data?.error || 'verification_failed')
                }
              } catch (e) {
                setError('verification_error')
              } finally {
                setLoading(false)
              }
            },
          })
        }
      } catch (e) {
        console.error(e)
        setError('turnstile_render_failed')
      }
    }

    const existing = document.getElementById('cf-turnstile-script') as HTMLScriptElement | null
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      s.async = true
      s.defer = true
      s.id = 'cf-turnstile-script'
      s.onload = () => renderWidget()
      s.onerror = () => setError('failed_to_load_turnstile_script')
      document.body.appendChild(s)
    } else {
      renderWidget()
    }

    return () => {
      try {
        const anyWindow: any = window
        if (widgetIdRef.current !== null && anyWindow.turnstile && widgetRef.current) {
          anyWindow.turnstile.reset(widgetIdRef.current)
        }
      } catch (e) {}
    }
  }, [verified])

  if (!verified) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="max-w-md w-full p-6 bg-card border border-primary/30 rounded-xl text-center">
          <h2 className="text-lg font-bold mb-4">Human verification</h2>
          <p className="text-sm text-muted-foreground mb-4">Please complete the quick verification to continue</p>
          <div ref={widgetRef} id="cf-turnstile" className="mx-auto" />
          {loading && <p className="text-sm text-muted-foreground mt-3">Verifying...</p>}
          {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WorldSection />
      <SolEthSection />
      <WalletProblemsSection />
      <Footer />
    </main>
  )
}
