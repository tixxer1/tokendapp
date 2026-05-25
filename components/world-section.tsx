'use client'

import { useEffect, useState } from 'react'

export function WorldSection() {
  const [dots, setDots] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random dots on the world map
    const generatedDots = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setDots(generatedDots)
  }, [])

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              We Help Users All Over The World
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Our platform reaches people all over the world, we help get restore your wallet immediately
            </p>
          </div>

          {/* Right - World Map Visualization */}
          <div className="relative h-96 md:h-[500px]">
            {/* Background grid pattern representing world */}
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full opacity-40"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Simplified world map dots in grid pattern */}
              <defs>
                <pattern id="worldDots" x="20" y="20" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" className="text-slate-600" />
                </pattern>
              </defs>

              {/* Continents represented as dot patterns */}
              {/* North America */}
              <rect x="100" y="80" width="200" height="200" fill="url(#worldDots)" opacity="0.6" />
              {/* South America */}
              <rect x="180" y="260" width="120" height="150" fill="url(#worldDots)" opacity="0.6" />
              {/* Europe */}
              <rect x="380" y="60" width="150" height="140" fill="url(#worldDots)" opacity="0.6" />
              {/* Africa */}
              <rect x="380" y="180" width="180" height="220" fill="url(#worldDots)" opacity="0.6" />
              {/* Asia */}
              <rect x="520" y="60" width="380" height="280" fill="url(#worldDots)" opacity="0.6" />
              {/* Australia */}
              <rect x="750" y="320" width="100" height="100" fill="url(#worldDots)" opacity="0.6" />
            </svg>

            {/* Glowing dots */}
            <div className="absolute inset-0">
              {dots.map((dot, index) => (
                <div
                  key={index}
                  className="absolute w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/80 animate-pulse"
                  style={{
                    left: `${dot.x}%`,
                    top: `${dot.y}%`,
                    animationDelay: `${dot.delay}s`,
                    boxShadow: '0 0 10px currentColor',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
