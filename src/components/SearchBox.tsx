"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBoxProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (value: string) => void;
  size?: 'default' | 'large';
  className?: string;
}

export function SearchBox({ 
  placeholder = "Enter Instagram username...", 
  buttonText = "Search", 
  onSearch,
  size = 'default',
  className = ""
}: SearchBoxProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onSearch) {
      onSearch(value.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className={`relative flex items-center gap-2 bg-[#12121a] rounded-xl border border-white/10 ${size === 'large' ? 'p-3' : 'p-2'}`}>
          <div className="flex items-center gap-2 flex-1 px-4">
            <Search className={`text-zinc-500 ${size === 'large' ? 'h-6 w-6' : 'h-5 w-5'}`} />
            <Input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`flex-1 bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-zinc-500 ${size === 'large' ? 'text-lg h-12' : 'text-base h-10'}`}
            />
          </div>
          <Button 
            type="submit" 
            className={`bg-gradient-primary hover:opacity-90 text-white font-semibold ${size === 'large' ? 'px-8 py-6 text-lg rounded-xl' : 'px-6 py-5 rounded-lg'}`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}
