'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'
import { WalletCard } from '@/components/wallet-card'
import { ClaimHeader } from '@/components/claim-header'
import { WalletConnectionModal } from '@/components/wallet-connection-modal'

const WALLETS = [
  {
    name: 'Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/walle-9KvhGknfASU5VVgxTJDaAyJSP3I6gL.jpg',
  },
  {
    name: 'Phantom',
    image: '/phantom.svg',
  },
  {
    name: 'SafePal',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safepal-j7oY79F75yg4vqfnt2K8dtXvizxj8q.jpg',
  },
  {
    name: 'Trust Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trust_wallet-dzg3c6WU08AEf4D0NdbnOTQAQAKngT.jpg',
  },
  {
    name: 'Valora',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/valora-w4d9CPuiB5YgWvNAuVYCu0Ybu32qRL.jpg',
  },
  {
    name: 'Trustee Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trustee_wallet-PYvt6rBDrzfAXzTlHJkR57EvvusNqF.jpg',
  },
  {
    name: 'Via Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/via_wallet-TMrrpEB6fzWQH0LMXGlh1YWXpvTbJs.jpg',
  },
  {
    name: 'Token Pocket',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/token_pocket-43QNEXoDp238VvfHnUtr1UtKqTxWn9.jpg',
  },
  {
    name: 'Wallet.io',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallet_io-X3UBeXVPt3TA23MNdLIhTs3vGmRs09.jpg',
  },
  {
    name: 'Trust Vault',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trust_vault-nFdQwhiWkyTQGDFRKwAhqX942LlOMi.jpg',
  },
  {
    name: 'Unstoppable Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unstoppable_wallet-GlgWrKZo7qJS59BRgLBucprB8yLw2D.jpg',
  },
  {
    name: 'Talken Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/talken_wallet-hFSOGJMJ90mRbmsb68bVNYFK6s4kKM.jpg',
  },
  {
    name: 'Tokenary',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tokenary-jEXFGE9F3plQ8S5BkVXocNu7GnHU7P.jpg',
  },
  {
    name: 'XinFin',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xinfin-yehOHBq1gZfM5PPHDwkIP9ApgvWP1x.jpg',
  },
  {
    name: 'Walleth',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/walleth-3pmlH25AcI5JLUDmBCgEtHJQvUVdJJ.jpg',
  },
  {
    name: 'Tongue Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tongue_wallet-mPKBS40mRzv4290FpsGqjTCoDdsvg6.jpg',
  },
  {
    name: 'O3 Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o3_wallet-TOX1lYGP8WVG5N2sAY14g3ki9odZDC.jpg',
  },
  {
    name: 'Rainbow',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rainbow-UHi1JV10LMbvkagMObX2KzbCOZgxiD.jpg',
  },
  {
    name: 'Exodus',
    image: '/Exodus.png',
  },
  {
    name: 'Ledger Live',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ledger_live-zAQlSW017R6orBke0Aq6c081UpCHRC.jpg',
  },
  {
    name: 'Keyring Pro',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keyring_pro-hwGwFG6yDjDVybW5XbT6I972VSNzuG.jpg',
  },
  {
    name: 'KyberSwap',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kyberswap-o7ZRJkKyTDm8lKGi2vmVEr2B2lt4dQ.jpg',
  },
  {
    name: 'OwnBit',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ownbit-iSCDguo3Yx9oGNOzQh9Y0hNgSyAlNj.jpg',
  },
  {
    name: 'RWallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwallet-rTfsouqmh79Z9Mu9cGceIrRNtij9vV.jpg',
  },
  {
    name: 'Klever',
    image: '/kleaver.png',
  },
  {
    name: 'MetaMask',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metamask-QZfSyR2u8DTQLCv8J9WBQAWOtC7wE2.jpg',
  },
  {
    name: 'PlasmaPay',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plasmapay-wTBgNHbXEClX3ePMA0HMOo3GMuUhX6.jpg',
  },
  {
    name: 'MyKey',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mykey-Y3IE86yAgp34GgUDFwTaIVYDLQMf0J.jpg',
  },
  {
    name: 'Polkadot',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/polkadot.jpg-95msHIpZ6XSB5SFSzSxsjjuiE9T0KE.png',
  },
  {
    name: 'Math Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/math_wallet-dHMe8wB6Gf8StSNaUsOeMo1veeikEJ.jpg',
  },
  {
    name: 'Nash',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nash-ZlQWXwOGTT50M9IT5pq0pdVM8r6jnZ.jpg',
  },
  {
    name: 'Polygon',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/polygon-EF6fiiPLCSQaO0NhskXET9fosQSoql.jpg',
  },
  {
    name: 'Jade Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jade_wallet-xvE4ntAPIaPcEoH2cNB1kB05pR68EC.jpg',
  },
  {
    name: 'Midas Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/midas_wallet-F2KEqerTdhCysHArcvCXNRJolRkz8P.jpg',
  },
  {
    name: 'GridPlus',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gridplus-FUpovXkFe5qSgAJzb2x3AJtta0fvaN.jpg',
  },
  {
    name: 'Huobi',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/huobi-xNzWaRPi8nzGFHN42KXmt9RjlTu6wI.jpg',
  },
  {
    name: 'Cool Wallet S',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cool_wallet_s-3Z3DR7eRDURMQgyTT8WW36DH9vzKTP.jpg',
  },
  {
    name: 'Infinito',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infinito-a5uYCG6syyuwnZFLfK1KknmULx4en7.jpg',
  },
  {
    name: 'Flare Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flare_wallet-BfGQWXBY0LDst6nU9Uw0o1jGP1f2TN.jpg',
  },
  {
    name: 'imToken',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imtoken-fwZYUjotkcw7AYpdUCt4rjtB3g609L.jpg',
  },
  {
    name: 'Crypto.com',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crypto-kRadinfoEpcCXeULpvZtsjQ0KcPQyP.jpg',
  },
  {
    name: 'IoTeX',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iotex.jpg-zwqsOskZFvhoiLzjOMNG2jHDUknrnS.png',
  },
  {
    name: 'Guarda Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guarda_wallet-1zeWA1V7Mv4mwpZ9XA0OTqmiZ80Rrj.jpg',
  },
  {
    name: 'Encrypted Ink',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/encrypted_ink-Ef8BicHWfb7WOuqoJbvUgANQJuImiZ.jpg',
  },
  {
    name: 'Dharma',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dharma-wgdmAHqLhoPaSRNDTXI267X6JPZo7z.jpg',
  },
  {
    name: 'HashKey Me',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hashkey_me-IRPSaMvsE7sXN2BhEFQmL2M5tPWeLX.jpg',
  },
  {
    name: 'Dok Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dok_wallet-YdflXdSlSUkI3JmxgCC3lHpvp511Q9.jpg',
  },
  {
    name: 'EasyPocket',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/easypocket-976VYW8Zql1C8TIbbyKTkJkQEKTnBz.jpg',
  },
  {
    name: 'HaloDeFi Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/halodefi_wallet-bx2I540P1G7GMN4jNxA2meP0QAjlKo.jpg',
  },
  {
    name: 'Flint',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flint-3BNg0C0taUmtu4lWSM0NxCaA8JfP2U.jpg',
  },
  {
    name: 'BitKeep',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bitkeep-9FD1eQWUDd5DMgI3GwevZs8BAnplYA.jpg',
  },
  {
    name: 'Bridge Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bridge_wallet-9qNWWSuVtsUag0Yew5QA1J71cDcqQe.jpg',
  },
  {
    name: 'At Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/at_wallet-VIf4GDNHPbtxbfTtDxt4sk5KXU0YJj.jpg',
  },
  {
    name: 'Coinus',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coinus-kcuwiYUGFeiBiDyFvgTjifuC8AdwQL.jpg',
  },
  {
    name: 'Coin98',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coin98-NFKbgCtuW0hNSbtDhTujADhbtm8F59.jpg',
  },
  {
    name: 'Compound',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compound-CteULUPv7PXU8I7wj87lVeGBfsuzf3.jpg',
  },
  {
    name: 'BitPay',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bitpay-LPzMqBP5jweFJyvLMG0wdt9fqsasJP.jpg',
  },
  {
    name: 'Argent',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/argent-sK1KsWoaUccJ9qhbTTZbLSOfsNDwMy.jpg',
  },
  {
    name: 'Coinomi',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coinomi-ES1ppfobNw9zcrXr2fs74AChde1qiz.jpg',
  },
  {
    name: '1inch',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1inch-mxwwILjlB24xCmbM6NoUqN28XrYoB3.jpg',
  },
  {
    name: 'aToken Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atoken_wallet-yTo0fPQ69xPHR8fOeGzMkKnZPVFZsd.jpg',
  },
  {
    name: 'Celo Wallet',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/celo_wallet-axQhRK4X55rd2qFXampSmLba5kjh9o.jpg',
  },
  {
    name: 'Atomic',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atomic-EFczrHdgXdTAPTsW7ra1PZsKUg2hX5.jpg',
  },
]

export default function ConnectWalletPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)

  const filteredWallets = useMemo(() => {
    return WALLETS.filter((wallet) =>
      wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const walletData = selectedWallet 
    ? WALLETS.find(w => w.name === selectedWallet)
    : null

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col pt-20">
        <ClaimHeader />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search wallets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-primary/20 focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Wallets Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => setSelectedWallet(wallet.name)}
                className="cursor-pointer"
              >
                <WalletCard {...wallet} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredWallets.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">No wallets found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search query
                </p>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Showing {filteredWallets.length} of {WALLETS.length} wallets
          </div>
        </main>

        {/* Footer Info */}
        <div className="border-t border-primary/10 bg-background/50 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
            <p>Select a wallet to connect and claim your airdrop</p>
          </div>
        </div>
      </div>

      {/* Wallet Connection Modal */}
      {walletData && (
        <WalletConnectionModal
          isOpen={selectedWallet !== null}
          onClose={() => setSelectedWallet(null)}
          walletName={walletData.name}
          walletImage={walletData.image}
        />
      )}
    </div>
  )
}
