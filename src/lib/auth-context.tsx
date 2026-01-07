"use client";

import React, { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "./auth-client";

interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  plan: "free" | "basic" | "standard" | "premium";
  credits: number;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user: User | null = session?.user ? {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name || session.user.email.split("@")[0],
    image: session.user.image || undefined,
    plan: (session.user as any).plan || "free",
    credits: (session.user as any).credits || 100,
  } : null;

  const login = async (email: string, password: string) => {
    const result = await authClient.signIn.email({
      email,
      password,
    });
    
    if (result.error) {
      throw new Error(result.error.message);
    }
    
    router.push("/dashboard");
  };

  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  const register = async (name: string, email: string, password: string) => {
    const result = await authClient.signUp.email({
      email,
      password,
      name,
    });
    
    if (result.error) {
      throw new Error(result.error.message);
    }
    
    router.push("/dashboard");
  };

  const logout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  const forgotPassword = async (email: string) => {
    const result = await authClient.forgetPassword({
      email,
      redirectTo: "/reset-password",
    });
    
    if (result.error) {
      throw new Error(result.error.message);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoggedIn: !!session?.user, 
        isLoading: isPending, 
        login, 
        loginWithGoogle,
        register, 
        logout,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};