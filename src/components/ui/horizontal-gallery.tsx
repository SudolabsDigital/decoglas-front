"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Torre Residencial Lima",
    category: "Fachada Integral",
    location: "San Isidro",
    img: "/assets/services/fachada-integral.png",
    id: "01"
  },
  {
    title: "Casa de Playa Asia",
    category: "Mamparas Alta Gama",
    location: "Cañete",
    img: "/assets/services/mampara-2.jpg",
    id: "02"
  },
  {
    title: "Oficinas Prime",
    category: "Divisiones Acústicas",
    location: "Miraflores",
    img: "/assets/services/mampara-3.jpg",
    id: "03"
  },
  {
    title: "Penthouse Golf",
    category: "Techos Vidrio",
    location: "San Isidro",
    img: "/assets/services/techo-policarbonato.png",
    id: "04"
  },
]

export function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Desktop transforms
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <>
      {/* DESKTOP VERSION (Horizontal Scroll) */}
      <section ref={targetRef} className="hidden lg:block relative h-[300vh] bg-foreground text-background">
        <div className="sticky top-0 left-0 h-screen w-full flex items-center overflow-hidden">
          
          <motion.div style={{ opacity }} className="absolute top-12 left-12 z-20 mix-blend-difference">
             <span className="font-mono text-xs uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full text-white">
                Galería de Proyectos
             </span>
          </motion.div>

          <motion.div style={{ x }} className="flex gap-0 h-full">
            
            {/* Intro Slide */}
            <div className="flex h-full w-screen flex-shrink-0 flex-col justify-center p-24 bg-foreground relative border-r border-white/10">
               <div className="max-w-3xl">
                 <h2 className="text-[8vw] font-bold text-white leading-[0.85] tracking-tighter mb-8">
                    OBRA <br/> <span className="text-gray-600">SELECTA</span>
                 </h2>
                 <p className="text-gray-400 text-xl max-w-md font-light leading-relaxed">
                    Una colección curada de intervenciones donde la precisión técnica se encuentra con la estética pura.
                 </p>
               </div>
               <div className="absolute bottom-12 right-12 animate-pulse text-white">
                  <span className="font-mono text-xs uppercase text-gray-500">Scroll para explorar &rarr;</span>
               </div>
            </div>

            {/* Project Cards */}
            {projects.map((project, i) => (
              <div key={i} className="relative h-full w-[80vw] flex-shrink-0 group overflow-hidden border-r border-white/10 bg-gray-900">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 flex flex-col justify-between p-12 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                   <div className="flex justify-between items-start">
                      <span className="text-9xl font-bold text-white/10 font-mono">{project.id}</span>
                      <span className="font-mono text-xs uppercase border border-white/20 px-2 py-1 text-white/60">{project.location}</span>
                   </div>
                   <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-accent text-sm font-mono uppercase tracking-widest mb-2">{project.category}</p>
                      <h3 className="text-5xl md:text-7xl text-white font-bold leading-none">{project.title}</h3>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE VERSION (Vertical Stack) */}
      <section className="block lg:hidden bg-foreground text-white py-24 px-4">
         <div className="mb-12">
            <h2 className="text-5xl font-bold tracking-tighter mb-4">Proyectos</h2>
            <p className="text-gray-400 max-w-xs">Selección de obras recientes de alto impacto.</p>
         </div>
         
         <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
               <div key={i} className="relative h-[60vh] w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-active:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-6">
                     <div className="flex justify-between w-full">
                        <span className="text-4xl font-bold text-white/20 font-mono">{project.id}</span>
                        <span className="bg-black/30 backdrop-blur-md px-2 py-1 rounded text-xs text-white/80 font-mono">{project.location}</span>
                     </div>
                     
                     <div>
                        <p className="text-accent text-xs font-mono uppercase tracking-widest mb-2">{project.category}</p>
                        <h3 className="text-3xl font-bold leading-none">{project.title}</h3>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
    </>
  )
}
