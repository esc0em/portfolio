import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface UseSmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
  orientation?: 'vertical' | 'horizontal'
  smoothWheel?: boolean
  wheelMultiplier?: number
  touchMultiplier?: number
}

/**
 * Hook for Lenis smooth scroll
 */
export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: options.duration ?? 1.2,
      easing: options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: options.orientation ?? 'vertical',
      smoothWheel: options.smoothWheel ?? true,
      wheelMultiplier: options.wheelMultiplier ?? 1,
      touchMultiplier: options.touchMultiplier ?? 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [
    options.duration,
    options.easing,
    options.orientation,
    options.smoothWheel,
    options.wheelMultiplier,
    options.touchMultiplier,
  ])

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: { offset?: number; duration?: number; immediate?: boolean }
  ) => {
    lenisRef.current?.scrollTo(target, options)
  }

  const stop = () => {
    lenisRef.current?.stop()
  }

  const start = () => {
    lenisRef.current?.start()
  }

  return {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
  }
}

export default useSmoothScroll
