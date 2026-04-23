'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          Modern<span className="text-accent">Classic</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-muted hover:text-foreground transition-colors text-sm">
            Home
          </Link>
          <Link href="/dashboard" className="text-muted hover:text-foreground transition-colors text-sm">
            Dashboard
          </Link>
          <Link href="/pricing" className="text-muted hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/builder" className="bg-accent text-background font-bold px-6 py-2 text-sm hover:bg-accent-dark transition-colors">
            Open Builder
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-muted hover:text-foreground transition-colors text-sm">
            Home
          </Link>
          <Link href="/dashboard" className="text-muted hover:text-foreground transition-colors text-sm">
            Dashboard
          </Link>
          <Link href="/pricing" className="text-muted hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/builder" className="bg-accent text-background font-bold px-6 py-2 text-sm text-center hover:bg-accent-dark transition-colors">
            Open Builder
          </Link>
        </div>
      )}

    </nav>
  )
}