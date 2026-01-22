"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Inicio", number: "00" },
  { id: "about", label: "Manifiesto", number: "01" },
  { id: "projects", label: "Proyectos", number: "02" },
  { id: "services", label: "Soluciones", number: "03" },
  { id: "why-us", label: "Garantía", number: "04" },
  { id: "testimonials", label: "Voces", number: "05" },
  { id: "footer", label: "Contacto", number: "06" },
]

export function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8 items-end mix-blend-difference">
      {sections.map((section) => {
        const isActive = activeSection === section.id
        
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group flex items-center gap-6 focus:outline-none"
          >
            {/* Section Name Label */}
            <div className="relative h-4 flex items-center overflow-hidden">
               <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.span
                      key="active-label"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white"
                    >
                      {section.label}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="inactive-label"
                      className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors"
                    >
                      {/* En estado inactivo podemos mostrar solo el número o nada */}
                    </motion.span>
                  )}
               </AnimatePresence>
            </div>

            {/* Indicator Container */}
            <div className="flex items-center gap-4">
               {/* Number */}
               <span className={cn(
                  "font-mono text-xs transition-all duration-500",
                  isActive ? "text-accent font-bold scale-125" : "text-white/30 group-hover:text-white/80"
               )}>
                  {section.number}
               </span>

               {/* Geometric Dot */}
               <div className="relative flex items-center justify-center">
                  <div className={cn(
                    "w-1 h-1 rounded-full transition-all duration-500",
                    isActive ? "bg-accent scale-[3] shadow-[0_0_10px_rgba(220,38,38,0.8)]" : "bg-white/40 group-hover:bg-white"
                  )} />
               </div>
            </div>
          </button>
        )
      })}

      {/* Vertical Axis Line */}
      <div className="absolute right-0.5 top-0 bottom-0 w-px bg-white/10 -z-10" />
    </div>
  )
}
