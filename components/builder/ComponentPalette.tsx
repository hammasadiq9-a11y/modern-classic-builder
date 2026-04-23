'use client'

const components = [
  { type: 'heading', label: 'Heading', icon: 'H1' },
  { type: 'text', label: 'Text', icon: 'T' },
  { type: 'button', label: 'Button', icon: '⬜' },
  { type: 'image', label: 'Image', icon: '🖼' },
  { type: 'divider', label: 'Divider', icon: '—' },
  { type: 'spacer', label: 'Spacer', icon: '↕' },
]

export default function ComponentPalette({ onAdd }: { onAdd: (type: string) => void }) {
  return (
    <div className="w-64 h-full border-r border-border bg-surface flex flex-col overflow-y-auto">
      
      {/* Header */}
      <div className="p-4 border-b border-border">
        <p className="text-accent text-xs font-bold tracking-widest">COMPONENTS</p>
      </div>

      {/* Component List */}
      <div className="p-4 flex flex-col gap-2">
        {components.map((component) => (
          <button
            key={component.type}
            onClick={() => onAdd(component.type)}
            className="flex items-center gap-3 p-3 border border-border hover:border-accent hover:text-accent text-foreground transition-colors text-left group"
          >
            <span className="w-8 h-8 bg-background border border-border flex items-center justify-center text-sm group-hover:border-accent group-hover:text-accent transition-colors">
              {component.icon}
            </span>
            <span className="text-sm font-medium">{component.label}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-border">
        <p className="text-muted text-xs text-center">Click to add components</p>
      </div>

    </div>
  )
}