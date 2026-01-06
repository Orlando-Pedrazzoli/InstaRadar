"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { Eye, EyeOff, Mail, Lock, Github, Chrome } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(email);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-zinc-500">Sign in to your account to continue</p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
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

            <div className="space-y-2">
              <div className="flex items-center justify-between pl-1">
                <label className="text-sm font-medium text-zinc-400">Password</label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-primary/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-zinc-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <label htmlFor="remember" className="text-sm text-zinc-400 cursor-pointer select-none">
                Remember me
              </label>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-primary hover:opacity-90 rounded-xl text-white font-bold"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#08080c] px-4 text-zinc-500 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl h-12 gap-2">
              <Chrome className="h-5 w-5" />
              Google
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl h-12 gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>

        <p className="text-center mt-8 text-zinc-500">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
