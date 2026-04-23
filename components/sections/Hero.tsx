'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useMagneticButton } from '../../hooks/useMagneticButton'

export default function Hero() {
  const magneticRef1 = useMagneticButton()
  const magneticRef2 = useMagneticButton()
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.3 }
      )
    }
  }, [])

  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-muted mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full" />
          Awwwards-quality websites, no code required
        </motion.div>

        {/* Headline */}
        <h1 ref={headlineRef} className="text-foreground mb-6 opacity-0">
          Build websites that
          <br />
          <span className="text-accent">win awards</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-xl max-w-2xl mx-auto mb-12"
        >
          Drag, drop, and publish stunning websites with AI-powered tools, 
          GSAP animations, and a premium component library.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/builder">
            <button
              ref={magneticRef1}
              className="bg-accent text-background font-bold px-10 py-4 text-lg hover:bg-accent-dark transition-colors"
            >
              Start Building Free
            </button>
          </Link>
          <Link href="/pricing">
            <button
              ref={magneticRef2}
              className="border border-border text-foreground font-bold px-10 py-4 text-lg hover:border-accent hover:text-accent transition-colors"
            >
              View Pricing
            </button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border"
        >
          <div>
            <p className="text-accent text-4xl font-bold">50+</p>
            <p className="text-muted text-sm mt-1">Premium Components</p>
          </div>
          <div>
            <p className="text-accent text-4xl font-bold">AI</p>
            <p className="text-muted text-sm mt-1">Powered Tools</p>
          </div>
          <div>
            <p className="text-accent text-4xl font-bold">1-Click</p>
            <p className="text-muted text-sm mt-1">Code Export</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}