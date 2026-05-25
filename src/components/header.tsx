"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Research", href: "/#research" },
    { name: "Publications", href: "/#publications" },
    { name: "Teaching", href: "/#teaching" },
    // { name: "Software", href: "/#software" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-in slide-in-from-top-8 duration-500">
      <header
        className={cn(
          "w-full max-w-4xl rounded-full transition-all duration-300",
          isScrolled ? "glass-card py-2 px-6 shadow-xl" : "bg-background/20 backdrop-blur-sm border border-transparent py-3 px-6"
        )}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="font-semibold text-lg text-foreground hover:text-primary transition-colors heading-font">
            Iago A. Carvalho<span className="text-primary hidden sm:inline">, PhD</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform inline-block"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-primary/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 px-2">
            <nav className="glass-card rounded-2xl py-4 flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}
