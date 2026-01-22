"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Soluciones", href: "#services" },
  { name: "Contacto", href: "#footer" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
       {/* Floating Toggle Button - Always visible top-right */}
       <div className="lg:hidden fixed top-6 right-6 z-[60]">
          <button 
             onClick={() => setOpen(!open)}
             className="w-12 h-12 bg-background/80 backdrop-blur-md text-foreground rounded-full flex items-center justify-center shadow-2xl border border-border/40 active:scale-95 transition-transform"
             aria-label="Menu"
          >
             {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
       </div>

       {/* Full Screen Menu Overlay */}
       <AnimatePresence>
          {open && (
             <motion.div
                initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 bg-[#050505] z-50 flex flex-col justify-center p-8 text-white"
             >
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none" />
                
                <nav className="flex flex-col gap-6 relative z-10">
                   {navItems.map((item, i) => (
                      <motion.a 
                         key={item.name}
                         href={item.href}
                         onClick={() => setOpen(false)}
                         initial={{ x: 50, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ delay: i * 0.1 }}
                         className="text-5xl font-bold tracking-tighter hover:text-accent transition-colors"
                      >
                         {item.name}
                      </motion.a>
                   ))}
                   
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                     className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4"
                   >
                      <Link href="/login" className="text-xl text-gray-400">Iniciar Sesión</Link>
                      <Link href="/register" className="text-xl text-accent font-bold">Crear Cuenta →</Link>
                   </motion.div>
                </nav>
             </motion.div>
          )}
       </AnimatePresence>
    </>
  )
}