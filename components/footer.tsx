import Link from "next/link"
import { Twitter, Github, MessageCircle, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-bold text-primary-foreground text-sm">T</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm text-foreground">DAPPS</span>
                <span className="font-bold text-xs text-foreground">ONLINE</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Effortless solutions for all your wallet related issues.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#tokenomics" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tokenomics</Link></li>
              <li><Link href="#roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Whitepaper</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Audit Report</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Smart Contract</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Send className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Dapps Online. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
