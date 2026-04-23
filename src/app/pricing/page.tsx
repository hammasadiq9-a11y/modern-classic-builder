'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out Modern Classic Builder',
    features: [
      '3 projects',
      '50+ components',
      'Code export',
      'Community support',
    ],
    cta: 'Get Started Free',
    href: '/builder',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For serious creators and freelancers',
    features: [
      'Unlimited projects',
      'All components',
      'AI SEO Auditor',
      'AI Copy Assistant',
      'AI Image Generator',
      'GSAP Animations',
      'Priority support',
      'Custom domain',
    ],
    cta: 'Start Pro Plan',
    href: '/builder',
    highlighted: true,
  },
  {
    name: 'Agency',
    price: '$49',
    period: 'per month',
    description: 'For teams and agencies building at scale',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'White label exports',
      'Client management',
      'Advanced analytics',
      'Dedicated support',
    ],
    cta: 'Start Agency Plan',
    href: '/builder',
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-bold tracking-widest mb-4"
          >
            PRICING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground mb-4"
          >
            Simple, transparent
            <br />
            <span className="text-accent">pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Start free, upgrade when you need more power.
            No hidden fees, cancel anytime.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 flex flex-col ${
                plan.highlighted 
                  ? 'bg-accent' 
                  : 'bg-background hover:bg-surface transition-colors'
              }`}
            >
              {/* Plan name */}
              <p className={`text-sm font-bold tracking-widest mb-2 ${
                plan.highlighted ? 'text-background' : 'text-accent'
              }`}>
                {plan.name.toUpperCase()}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className={`text-5xl font-bold ${
                  plan.highlighted ? 'text-background' : 'text-foreground'
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${
                  plan.highlighted ? 'text-background/70' : 'text-muted'
                }`}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm mb-8 ${
                plan.highlighted ? 'text-background/80' : 'text-muted'
              }`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className={`text-sm flex items-center gap-2 ${
                    plan.highlighted ? 'text-background' : 'text-foreground'
                  }`}>
                    <span className={`text-lg ${
                      plan.highlighted ? 'text-background' : 'text-accent'
                    }`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`font-bold px-8 py-4 text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-background text-accent hover:bg-surface'
                    : 'border border-border text-foreground hover:border-accent hover:text-accent'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}