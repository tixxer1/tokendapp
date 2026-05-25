import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ClaimHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-border/50 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder-logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm text-foreground">DAPPS</span>
            <span className="font-bold text-xs text-foreground">ONLINE</span>
          </div>
        </Link>
        <Link href="/connect-wallet">
          <Button variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary/10">
            Connect
          </Button>
        </Link>
      </div>
    </header>
  )
}
