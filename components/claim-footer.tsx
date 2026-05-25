import Link from "next/link"

export function ClaimFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-bold text-primary-foreground text-sm">T</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm text-foreground">DAPPS</span>
                <span className="font-bold text-xs text-foreground">ONLINE</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Effortless solutions for all your wallet related issues.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="https://twitter.com" target="_blank" className="hover:text-foreground transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg" target="_blank" className="hover:text-foreground transition-colors">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Dapps Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
