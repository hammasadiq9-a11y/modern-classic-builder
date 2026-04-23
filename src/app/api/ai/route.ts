import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { prompt, type } = await request.json()

    const systemPrompt = type === 'heading' 
      ? 'You are a copywriter. Generate a single powerful, concise heading (max 10 words). Return only the heading text, nothing else.'
      : type === 'text'
      ? 'You are a copywriter. Generate a compelling paragraph (2-3 sentences). Return only the paragraph text, nothing else.'
      : 'You are a copywriter. Generate compelling copy. Return only the text, nothing else.'

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        }
      ],
      system: systemPrompt,
    })

    const content = message.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type')
    }

    return NextResponse.json({ text: content.text })
  } catch (error) {
    console.error('AI error:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}