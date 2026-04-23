'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  { id: 1, name: 'Portfolio Site', status: 'Published', lastEdited: '2 hours ago', pages: 4 },
  { id: 2, name: 'Restaurant Landing', status: 'Draft', lastEdited: '1 day ago', pages: 2 },
  { id: 3, name: 'SaaS Homepage', status: 'Published', lastEdited: '3 days ago', pages: 6 },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent text-sm font-bold tracking-widest mb-2"
            >
              DASHBOARD
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground"
            >
              My Projects
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/builder"
              className="bg-accent text-background font-bold px-8 py-4 hover:bg-accent-dark transition-colors"
            >
              + New Project
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-12">
          {[
            { label: 'Total Projects', value: '3' },
            { label: 'Published', value: '2' },
            { label: 'Total Pages', value: '12' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8"
            >
              <p className="text-muted text-sm mb-2">{stat.label}</p>
              <p className="text-accent text-4xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects List */}
        <div className="border border-border">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border bg-surface">
            <p className="text-muted text-sm font-bold">PROJECT NAME</p>
            <p className="text-muted text-sm font-bold">STATUS</p>
            <p className="text-muted text-sm font-bold">LAST EDITED</p>
            <p className="text-muted text-sm font-bold">PAGES</p>
          </div>

          {/* Projects */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-4 gap-4 px-6 py-5 border-b border-border hover:bg-surface transition-colors group items-center"
            >
              <p className="text-foreground font-bold group-hover:text-accent transition-colors">
                {project.name}
              </p>
              <div>
                <span className={`text-xs font-bold px-3 py-1 ${
                  project.status === 'Published' 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-surface-2 text-muted'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-muted text-sm">{project.lastEdited}</p>
              <div className="flex items-center justify-between">
                <p className="text-muted text-sm">{project.pages} pages</p>
                <Link
                  href="/builder"
                  className="text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Edit →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}