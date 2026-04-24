'use client'

import Image from 'next/image'

type ComponentStyles = {
  color: string
  fontSize: string
  fontWeight: string
  textAlign: string
  backgroundColor: string
  padding: string
  borderRadius: string
}

type ComponentType = {
  id: string
  type: string
  content: string
  styles: ComponentStyles
}

type CanvasProps = {
  components: ComponentType[]
  selectedId: string | null
  onSelect: (id: string) => void
  onDelete: (id: string) => void
  onMove: (id: string, direction: 'up' | 'down') => void
}

export default function Canvas({ components, selectedId, onSelect, onDelete, onMove }: CanvasProps) {
  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden">
      
      {/* Toolbar */}
      <div className="h-12 border-b border-border bg-surface flex items-center px-4 gap-4">
        <p className="text-muted text-xs font-bold tracking-widest">CANVAS</p>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-muted text-xs">{components.length} components</span>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-y-auto p-8 bg-background">
        <div className="max-w-3xl mx-auto min-h-full">
          
          {components.length === 0 ? (
            <div className="h-96 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4">
              <p className="text-accent text-4xl">+</p>
              <p className="text-muted text-sm">Click components on the left to add them</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {components.map((component) => (
                <div
                  key={component.id}
                  onClick={() => onSelect(component.id)}
                  className={`relative group border-2 cursor-pointer transition-colors ${
                    selectedId === component.id
                      ? 'border-accent'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  {/* Component Controls */}
                  <div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 z-10">
                    <button
                      onClick={(e) => { e.stopPropagation(); onMove(component.id, 'up') }}
                      className="w-6 h-6 bg-surface border border-border text-muted hover:text-accent text-xs flex items-center justify-center"
                    >
                      ↑
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onMove(component.id, 'down') }}
                      className="w-6 h-6 bg-surface border border-border text-muted hover:text-accent text-xs flex items-center justify-center"
                    >
                      ↓
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onDelete(component.id) }}
                      className="w-6 h-6 bg-surface border border-border text-muted hover:text-red-400 text-xs flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Component Render */}
                  <div style={{
                    color: component.styles.color,
                    fontSize: component.styles.fontSize,
                    fontWeight: component.styles.fontWeight,
                    textAlign: component.styles.textAlign as 'left' | 'center' | 'right',
                    backgroundColor: component.styles.backgroundColor,
                    padding: component.styles.padding,
                    borderRadius: component.styles.borderRadius,
                  }}>
                    {component.type === 'heading' && (
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {component.content}
                      </h2>
                    )}
                    {component.type === 'text' && (
                      <p>{component.content}</p>
                    )}
                    {component.type === 'button' && (
                      <button className="bg-accent text-background font-bold px-6 py-3 hover:bg-accent-dark transition-colors">
                        {component.content}
                      </button>
                    )}
                    {component.type === 'image' && (
                      <div className="relative w-full h-64">
                        <Image
                          src={component.content}
                          alt="Component"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {component.type === 'divider' && (
                      <hr className="border-border" />
                    )}
                    {component.type === 'spacer' && (
                      <div className="h-16 border border-dashed border-border flex items-center justify-center">
                        <span className="text-muted text-xs">Spacer</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}