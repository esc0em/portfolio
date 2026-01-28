import { Variants } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
}

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
}

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
}

// Scale in with spring
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15
    }
  }
}

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    }
  }
}

// Fast stagger for grids
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05, 
      delayChildren: 0.1 
    }
  }
}

// Card hover effect
export const cardHover: Variants = {
  rest: { 
    y: 0, 
    scale: 1,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" 
  },
  hover: { 
    y: -8, 
    scale: 1.02,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.35)",
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 20
    }
  }
}

// Button hover effect
export const buttonHover: Variants = {
  rest: { 
    scale: 1 
  },
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400,
      damping: 15
    }
  },
  tap: { 
    scale: 0.95 
  }
}

// Nav link hover
export const navLinkHover: Variants = {
  rest: { 
    scale: 1,
    opacity: 0.7
  },
  hover: { 
    scale: 1.05,
    opacity: 1,
    transition: { 
      duration: 0.2 
    }
  }
}

// Blob floating animation
export const blobFloat: Variants = {
  animate: {
    x: [0, 100, 0],
    y: [0, -50, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Blob floating animation - alternate
export const blobFloatAlt: Variants = {
  animate: {
    x: [0, -80, 0],
    y: [0, 60, 0],
    scale: [1, 0.9, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Scroll indicator bounce
export const scrollIndicator: Variants = {
  animate: {
    y: [0, 10, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Text reveal character by character
export const textReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
}

export const charReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4 
    }
  }
}

// Modal animations
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

export const modalContent: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 }
  }
}

// Slide in menu
export const slideInMenu: Variants = {
  hidden: { 
    x: "100%", 
    opacity: 0 
  },
  show: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    x: "100%", 
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

// ═══════════════════════════════════════════════════════════════
// TRANSITION PRESETS
// ═══════════════════════════════════════════════════════════════

export const transitions = {
  spring: { type: "spring", stiffness: 300, damping: 25 },
  smooth: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  fast: { duration: 0.2, ease: "easeOut" },
  slow: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
}

// ═══════════════════════════════════════════════════════════════
// VIEWPORT SETTINGS
// ═══════════════════════════════════════════════════════════════

export const viewportOnce = {
  once: true,
  amount: 0.2
}

export const viewportRepeat = {
  once: false,
  amount: 0.3
}
