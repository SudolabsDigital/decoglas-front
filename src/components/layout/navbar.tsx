"use client"

import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#footer" },
]

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500 will-change-transform",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "container mx-auto px-6 transition-all duration-500 flex items-center justify-between",
        isScrolled 
          ? "bg-background/60 backdrop-blur-xl border border-border/40 shadow-sm py-3 rounded-full max-w-5xl supports-[backdrop-filter]:bg-background/40" 
          : "bg-transparent py-0"
      )}>
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 font-bold text-2xl text-foreground tracking-tighter">
          <span className="text-accent">Deco</span>glass
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Auth Actions - Desktop Only */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Ingresar
          </Link>
          <Link 
            href="/register" 
            className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all active:scale-95"
          >
            Empezar
          </Link>
        </div>

        {/* Mobile Placeholder (Empty, as we use MobileMenu component for controls) */}
        <div className="md:hidden w-8" /> 
      </div>
    </motion.header>
  )
}

