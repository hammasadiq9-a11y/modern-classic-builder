'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-background py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-surface border border-border p-16 relative overflow-hidden">
          
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-bold tracking-widest mb-6"
            >
              GET STARTED TODAY
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-foreground mb-6"
            >
              Ready to build your
              <br />
              <span className="text-accent">dream website?</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted text-lg max-w-xl mx-auto mb-10"
            >
              Join thousands of creators building stunning websites 
              with Modern Classic Builder. No code required.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/builder"
                className="bg-accent text-background font-bold px-10 py-4 text-lg hover:bg-accent-dark transition-colors w-full sm:w-auto text-center"
              >
                Start Building Free
              </Link>
              <Link
                href="/pricing"
                className="border border-border text-foreground font-bold px-10 py-4 text-lg hover:border-accent hover:text-accent transition-colors w-full sm:w-auto text-center"
              >
                See Pricing
              </Link>
            </motion.div>

            {/* Fine print */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted text-sm mt-6"
            >
              No credit card required · Free plan available · Cancel anytime
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  )
}