'use client'

import Image from 'next/image'
import { useState } from 'react'
import { WalletConnectionModal } from './wallet-connection-modal'

interface WalletCardProps {
  name: string
  image: string
}

export function WalletCard({ name, image }: WalletCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConnect = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleConnect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
      >
        <div className={`
          relative flex flex-col items-center justify-center gap-4 p-6
          rounded-2xl border transition-all duration-300
          ${isHovered 
            ? 'border-primary bg-primary/10 shadow-2xl shadow-primary/40 scale-110 backdrop-blur-md' 
            : 'border-primary/20 bg-background/40 backdrop-blur-sm hover:border-primary/50'
          }
        `}>
          {/* Glow effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 opacity-60 blur-2xl -z-10" />
          )}

          {/* Wallet Image */}
          <div className={`relative w-14 h-14 flex items-center justify-center rounded-full border p-2 transition-all duration-300 ${
            isHovered
              ? 'bg-gradient-to-br from-primary/40 to-primary/20 border-primary shadow-lg shadow-primary/50'
              : 'bg-gradient-to-br from-primary/15 to-primary/5 border-primary/30'
          }`}>
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="object-contain rounded-full"
              priority
            />
          </div>

          {/* Wallet Name */}
          <h3 className="text-sm font-semibold text-foreground text-center max-w-xs">
            {name}
          </h3>

          {/* Button text on hover */}
          {isHovered && (
            <span className="text-xs font-medium text-primary animate-fade-in">
              Click to Connect
            </span>
          )}
        </div>
      </button>

      {/* Connection Modal */}
      <WalletConnectionModal
        isOpen={isModalOpen}
        walletName={name}
        walletImage={image}
        onClose={handleCloseModal}
      />
    </>
  )
}
