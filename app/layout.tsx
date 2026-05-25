import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dapps Online | Claim Your Free Crypto Tokens',
  description: 'Effortless solutions for all your wallet related issues. Connect, claim, and manage your crypto with Dapps Online.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" style={{ fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" }}>
      <body className="font-sans antialiased" style={{ fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
