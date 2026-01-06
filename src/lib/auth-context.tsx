"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
  plan: "free" | "basic" | "standard" | "premium";
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  register: (name: string, email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check local storage for mock session
    const storedUser = localStorage.getItem("mock_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    // Mock login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: "1",
      email,
      name: email.split("@")[0],
      plan: "free",
    };
    setUser(mockUser);
    localStorage.setItem("mock_user", JSON.stringify(mockUser));
    setIsLoading(false);
    router.push("/dashboard");
  };

  const register = async (name: string, email: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: "1",
      email,
      name,
      plan: "free",
    };
    setUser(mockUser);
    localStorage.setItem("mock_user", JSON.stringify(mockUser));
    setIsLoading(false);
    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mock_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, isLoading, login, register, logout }}>
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
