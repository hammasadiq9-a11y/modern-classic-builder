import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade in from bottom
export const fadeInUp = (element: string | Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.6, delay, ease: 'power2.out' }
  )
}

// Fade in from left
export const fadeInLeft = (element: string | Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -40 },
    { opacity: 1, x: 0, duration: 0.6, delay, ease: 'power2.out' }
  )
}

// Scale in
export const scaleIn = (element: string | Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.5, delay, ease: 'back.out(1.7)' }
  )
}

// Stagger children
export const staggerIn = (parent: string | Element, children: string) => {
  gsap.fromTo(
    `${parent} ${children}`,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
  )
}

// Magnetic button effect
export const magneticEffect = (element: HTMLElement) => {
  element.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(element, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
  })
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
  })
}

// Scroll triggered fade in
export const scrollFadeIn = (element: string | Element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

// Text reveal animation
export const textReveal = (element: string | Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: '100%' },
    { opacity: 1, y: '0%', duration: 0.8, delay, ease: 'power4.out' }
  )
}