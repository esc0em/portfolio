import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

/**
 * Hook for parallax effect on scroll
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [speed])

  return ref
}

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeIn(options?: {
  delay?: number
  duration?: number
  y?: number
}) {
  const { delay = 0, duration = 1, y = 50 } = options || {}
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.set(element, { opacity: 0, y })

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      animation.kill()
    }
  }, [delay, duration, y])

  return ref
}

/**
 * Hook for text reveal animation
 */
export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Split text into words
    const text = element.textContent || ''
    const words = text.split(' ')
    element.innerHTML = words
      .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
      .join(' ')

    const spans = element.querySelectorAll('span > span')

    gsap.set(spans, { y: '100%' })

    const animation = gsap.to(spans, {
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      animation.kill()
    }
  }, [])

  return ref
}

/**
 * Hook for staggered children animation
 */
export function useStaggerChildren(options?: {
  stagger?: number
  duration?: number
  y?: number
}) {
  const { stagger = 0.1, duration = 0.8, y = 30 } = options || {}
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const children = element.children

    gsap.set(children, { opacity: 0, y })

    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      animation.kill()
    }
  }, [stagger, duration, y])

  return ref
}

/**
 * Hook for horizontal scroll section
 */
export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const scrollSection = scrollRef.current
    if (!container || !scrollSection) return

    const scrollWidth = scrollSection.scrollWidth - window.innerWidth

    const animation = gsap.to(scrollSection, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    return () => {
      animation.kill()
    }
  }, [])

  return { containerRef, scrollRef }
}

/**
 * Initialize GSAP defaults
 */
export function initGsap() {
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  })

  // Refresh ScrollTrigger on resize
  ScrollTrigger.config({
    ignoreMobileResize: true,
  })
}

export default useParallax
