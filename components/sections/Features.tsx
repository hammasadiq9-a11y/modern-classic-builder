'use client'

import { motion } from 'framer-motion'

const features = [
  {
    number: '01',
    title: 'Drag & Drop Canvas',
    description: 'Build visually by dragging components onto your canvas. Edit properties in real-time with instant preview.',
  },
  {
    number: '02',
    title: 'AI SEO Auditor',
    description: 'Automatically generate meta tags, alt-text, and Schema.org markup. Get a health score with actionable recommendations.',
  },
  {
    number: '03',
    title: 'AI Copy Assistant',
    description: 'Generate compelling headlines, descriptions and CTAs powered by Claude AI. Never stare at a blank page again.',
  },
  {
    number: '04',
    title: 'GSAP Animations',
    description: 'Add professional animations with one click. Magnetic buttons, parallax scroll, fade-ins and more.',
  },
  {
    number: '05',
    title: 'Code Export',
    description: 'Export your website as a clean Next.js 14 project with Tailwind CSS, TypeScript and animations included.',
  },
  {
    number: '06',
    title: 'One-Click Deploy',
    description: 'Deploy instantly to Vercel or Netlify. Custom domain, automatic SSL and CDN included.',
  },
]

export default function Features() {
  return (
    <section className="bg-background py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-accent text-sm font-bold tracking-widest mb-4">FEATURES</p>
          <h2 className="text-foreground max-w-2xl">
            Everything you need to build{' '}
            <span className="text-accent">premium websites</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 hover:bg-surface transition-colors group"
            >
              <p className="text-accent text-sm font-bold mb-4">{feature.number}</p>
              <h3 className="text-foreground text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}