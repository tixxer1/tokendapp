"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "What is NexusAirdrop?",
      answer: "NexusAirdrop is a token distribution event where eligible wallet holders can claim free tokens. Our goal is to distribute tokens fairly to active blockchain participants and build a strong community."
    },
    {
      question: "How do I participate in the airdrop?",
      answer: "Simply connect your Web3 wallet (MetaMask, Trust Wallet, etc.), verify your eligibility, and click the claim button. The process takes less than a minute."
    },
    {
      question: "Is there any cost to participate?",
      answer: "No, the airdrop is completely free. You only need to pay a small gas fee for the blockchain transaction when claiming your tokens."
    },
    {
      question: "What wallets are supported?",
      answer: "We support all major Web3 wallets including MetaMask, Trust Wallet, Coinbase Wallet, WalletConnect compatible wallets, and more."
    },
    {
      question: "When will I receive my tokens?",
      answer: "Tokens are distributed instantly upon claiming. As soon as the transaction is confirmed on the blockchain, your tokens will appear in your wallet."
    },
    {
      question: "How many tokens can I claim?",
      answer: "The amount of tokens you can claim depends on your wallet's eligibility score, which is calculated based on your on-chain activity and participation history."
    }
  ]

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
