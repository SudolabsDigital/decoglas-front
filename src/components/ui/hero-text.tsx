"use client"

import { motion } from "framer-motion"

export function HeroText() {
  const words = "Transformamos Espacios con Vidrio y Aluminio".split(" ")

  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center md:text-left max-w-5xl mx-auto md:mx-0 leading-[1.15] py-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className={`inline-block mr-3 ${
            ["Vidrio", "Aluminio"].includes(word) ? "text-gradient" : "text-primary"
          }`}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}