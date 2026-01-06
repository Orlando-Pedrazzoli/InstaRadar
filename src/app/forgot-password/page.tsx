"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center glow-sm group-hover:glow transition-all">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-zinc-500">
            {isSubmitted 
              ? "Check your email for instructions" 
              : "Enter your email and we'll send you a reset link"}
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 pl-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <Input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-primary/50"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 rounded-xl text-white font-bold"
              >
                {isSubmitting ? "Sending link..." : "Send Reset Link"}
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-zinc-300 mb-8">
                If an account exists for <span className="text-white font-bold">{email}</span>, you will receive a password reset link shortly.
              </p>
              <Button 
                variant="outline" 
                className="w-full h-12 border-white/10 hover:bg-white/5 rounded-xl"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </Button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
