"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { Eye, EyeOff, Mail, Lock, User, Chrome, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { register, loginWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      toast.error("Please agree to the Terms of Service");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsSubmitting(true);
    try {
      await register(name, email, password);
      toast.success("Account created successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      await loginWithGoogle();
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up with Google.");
      setIsGoogleLoading(false);
    }
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
          <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
          <p className="text-zinc-500">Start tracking Instagram activity for free</p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 pl-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-primary/50"
                  disabled={isSubmitting}
                />
              </div>
            </div>

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
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 pl-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-primary/50"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-xs text-zinc-600 pl-1">At least 8 characters</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 pl-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-primary/50"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="border-zinc-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5" 
              />
              <label htmlFor="terms" className="text-sm text-zinc-400 cursor-pointer select-none leading-tight">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting || !agreeTerms}
              className="w-full h-12 bg-gradient-primary hover:opacity-90 rounded-xl text-white font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#12121a] px-4 text-zinc-500 font-medium">Or continue with</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full border-white/10 hover:bg-white/5 rounded-xl h-12 gap-2"
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Chrome className="h-5 w-5" />
            )}
            Continue with Google
          </Button>
        </div>

        <p className="text-center mt-8 text-zinc-500">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}