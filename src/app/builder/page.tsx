'use client'

import { useState } from 'react'
import ComponentPalette from '../../../components/builder/ComponentPalette'
import Canvas from '../../../components/builder/Canvas'
import PropertiesPanel from '../../../components/builder/PropertiesPanel'

export type ComponentType = {
  id: string
  type: string
  content: string
  styles: {
    color: string
    fontSize: string
    fontWeight: string
    textAlign: string
    backgroundColor: string
    padding: string
    borderRadius: string
  }
}

export default function BuilderPage() {
  const [components, setComponents] = useState<ComponentType[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedComponent = components.find(c => c.id === selectedId) || null

  const addComponent = (type: string) => {
    const newComponent: ComponentType = {
      id: Date.now().toString(),
      type,
      content: type === 'heading' ? 'Your Heading Here' 
        : type === 'text' ? 'Your text content here. Click to edit.'
        : type === 'button' ? 'Click Me'
        : type === 'image' ? 'https://placehold.co/600x400'
        : 'New Component',
      styles: {
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        backgroundColor: 'transparent',
        padding: '16px',
        borderRadius: '0px',
      }
    }
    setComponents(prev => [...prev, newComponent])
    setSelectedId(newComponent.id)
  }

  const updateComponent = (id: string, updates: Partial<ComponentType>) => {
    setComponents(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c))
  }

  const deleteComponent = (id: string) => {
    setComponents(prev => prev.filter(c => c.id !== id))
    setSelectedId(null)
  }

  const moveComponent = (id: string, direction: 'up' | 'down') => {
    const index = components.findIndex(c => c.id === id)
    if (direction === 'up' && index === 0) return
    if (direction === 'down' && index === components.length - 1) return
    const newComponents = [...components]
    const swapIndex = direction === 'up' ? index - 1 : index + 1
    ;[newComponents[index], newComponents[swapIndex]] = [newComponents[swapIndex], newComponents[index]]
    setComponents(newComponents)
  }

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <ComponentPalette onAdd={addComponent} />
      <Canvas
        components={components}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onDelete={deleteComponent}
        onMove={moveComponent}
      />
      <PropertiesPanel
        component={selectedComponent}
        onUpdate={updateComponent}
      />
    </div>
  )
}