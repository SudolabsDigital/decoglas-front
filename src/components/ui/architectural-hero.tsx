"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ArchitecturalHero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-between p-6 md:p-12">
      
      {/* Background Image Parallax */}
      <motion.div 
        style={{ scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
        <Image 
          src="/assets/services/mampara-3.jpg" 
          alt="Architecture Background" 
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Top Bar */}
      <div className="relative z-20 flex justify-between items-start text-white mix-blend-difference">
         <span className="text-sm font-mono tracking-widest uppercase">Decoglass ©2026</span>
         <span className="text-sm font-mono tracking-widest uppercase text-right">Lima, PE <br/> 12°S 77°W</span>
      </div>

      {/* Main Title - Sticky & Fading */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20"
      >
        <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-bold text-white tracking-tighter drop-shadow-xl break-words hyphens-auto">
          ESTRUCTURA <br/>
          & TRANSPARENCIA
        </h1>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="relative z-20 flex justify-end text-white mix-blend-difference">
         <div className="flex items-center gap-4 animate-bounce">
            <span className="text-xs font-mono uppercase">Scroll to explore</span>
            <div className="w-px h-12 bg-white" />
         </div>
      </div>

    </div>
  )
}
