'use client'

import { useState } from 'react'
import { ComponentType } from '../../src/app/builder/page'

type PropertiesPanelProps = {
  component: ComponentType | null
  onUpdate: (id: string, updates: Partial<ComponentType>) => void
}

export default function PropertiesPanel({ component, onUpdate }: PropertiesPanelProps) {
  const [aiPrompt, setAiPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const generateAI = async () => {
    if (!component || !aiPrompt) return
    setIsLoading(true)
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt, type: component.type }),
      })
      const data = await response.json()
      if (data.text) {
        onUpdate(component.id, { content: data.text })
        setAiPrompt('')
      }
    } catch (error) {
      console.error('AI error:', error)
    }
    setIsLoading(false)
  }

  if (!component) {
    return (
      <div className="w-64 h-full border-l border-border bg-surface flex flex-col">
        <div className="p-4 border-b border-border">
          <p className="text-accent text-xs font-bold tracking-widest">PROPERTIES</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted text-xs text-center px-4">
            Select a component to edit its properties
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-64 h-full border-l border-border bg-surface flex flex-col overflow-y-auto">
      
      {/* Header */}
      <div className="p-4 border-b border-border">
        <p className="text-accent text-xs font-bold tracking-widest">PROPERTIES</p>
        <p className="text-muted text-xs mt-1 capitalize">{component.type}</p>
      </div>

      <div className="p-4 flex flex-col gap-6">

        {/* AI Copy Assistant */}
        {component.type !== 'divider' && component.type !== 'spacer' && component.type !== 'image' && (
          <div className="flex flex-col gap-2">
            <label className="text-accent text-xs font-bold tracking-widest">✨ AI ASSISTANT</label>
            <textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Describe what you want to write..."
              className="bg-background border border-border text-foreground text-sm p-2 resize-none h-16 focus:border-accent outline-none placeholder:text-muted"
            />
            <button
              onClick={generateAI}
              disabled={isLoading || !aiPrompt}
              className="bg-accent text-background font-bold py-2 text-sm hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Generating...' : 'Generate with AI'}
            </button>
          </div>
        )}

        {/* Content */}
        {component.type !== 'divider' && component.type !== 'spacer' && (
          <div className="flex flex-col gap-2">
            <label className="text-muted text-xs font-bold tracking-widest">CONTENT</label>
            <textarea
              value={component.content}
              onChange={(e) => onUpdate(component.id, { content: e.target.value })}
              className="bg-background border border-border text-foreground text-sm p-2 resize-none h-20 focus:border-accent outline-none"
            />
          </div>
        )}

        {/* Color */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">TEXT COLOR</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={component.styles.color}
              onChange={(e) => onUpdate(component.id, { 
                styles: { ...component.styles, color: e.target.value }
              })}
              className="w-8 h-8 border border-border cursor-pointer bg-background"
            />
            <span className="text-muted text-xs">{component.styles.color}</span>
          </div>
        </div>

        {/* Background Color */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">BACKGROUND</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={component.styles.backgroundColor === 'transparent' ? '#0a0a0a' : component.styles.backgroundColor}
              onChange={(e) => onUpdate(component.id, {
                styles: { ...component.styles, backgroundColor: e.target.value }
              })}
              className="w-8 h-8 border border-border cursor-pointer bg-background"
            />
            <span className="text-muted text-xs">{component.styles.backgroundColor}</span>
          </div>
        </div>

        {/* Font Size */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">FONT SIZE</label>
          <select
            value={component.styles.fontSize}
            onChange={(e) => onUpdate(component.id, {
              styles: { ...component.styles, fontSize: e.target.value }
            })}
            className="bg-background border border-border text-foreground text-sm p-2 focus:border-accent outline-none"
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="48px">48px</option>
          </select>
        </div>

        {/* Font Weight */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">FONT WEIGHT</label>
          <select
            value={component.styles.fontWeight}
            onChange={(e) => onUpdate(component.id, {
              styles: { ...component.styles, fontWeight: e.target.value }
            })}
            className="bg-background border border-border text-foreground text-sm p-2 focus:border-accent outline-none"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
          </select>
        </div>

        {/* Text Align */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">TEXT ALIGN</label>
          <div className="flex gap-1">
            {['left', 'center', 'right'].map((align) => (
              <button
                key={align}
                onClick={() => onUpdate(component.id, {
                  styles: { ...component.styles, textAlign: align }
                })}
                className={`flex-1 py-2 text-xs font-bold border transition-colors ${
                  component.styles.textAlign === align
                    ? 'border-accent text-accent'
                    : 'border-border text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {align.charAt(0).toUpperCase() + align.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Padding */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">PADDING</label>
          <select
            value={component.styles.padding}
            onChange={(e) => onUpdate(component.id, {
              styles: { ...component.styles, padding: e.target.value }
            })}
            className="bg-background border border-border text-foreground text-sm p-2 focus:border-accent outline-none"
          >
            <option value="0px">None</option>
            <option value="8px">Small</option>
            <option value="16px">Medium</option>
            <option value="32px">Large</option>
            <option value="64px">Extra Large</option>
          </select>
        </div>

        {/* Border Radius */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-xs font-bold tracking-widest">BORDER RADIUS</label>
          <select
            value={component.styles.borderRadius}
            onChange={(e) => onUpdate(component.id, {
              styles: { ...component.styles, borderRadius: e.target.value }
            })}
            className="bg-background border border-border text-foreground text-sm p-2 focus:border-accent outline-none"
          >
            <option value="0px">None</option>
            <option value="4px">Small</option>
            <option value="8px">Medium</option>
            <option value="16px">Large</option>
            <option value="9999px">Full</option>
          </select>
        </div>

      </div>
    </div>
  )
}