"use client"

import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  fullWidth?: boolean
}

export function FadeIn({ 
  children, 
  className, 
  delay = 0, 
  direction = "up",
  fullWidth = false
}: FadeInProps) {
  
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      filter: "blur(8px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        delay: delay, 
        type: "spring", 
        stiffness: 100,
        damping: 20 
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={cn(fullWidth ? "w-full" : "", className)}
    >
      {children}
    </motion.div>
  )
}
