"use client"

import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

const keywords = [
  { text: "Web Design", top: "25%", left: "20%" },
  { text: "E-Commerce", top: "65%", left: "15%" },
  { text: "SEO", top: "20%", left: "75%" },
  { text: "Strategy", top: "75%", left: "80%" },
  { text: "Social Media", top: "45%", left: "85%", hiddenMobile: true },
  { text: "Growth", top: "50%", left: "15%", hiddenMobile: true },
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Layer 1: Original Content
  const originalOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [1, 1, 0, 0])
  const originalY = useTransform(scrollYProgress, [0, 0.45, 1], [0, -120, -120])
  const originalScale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.94, 0.94])
  const originalPointerEvents = useTransform(scrollYProgress, (val) => val > 0.45 ? "none" : "auto")

  // Layer 2: Transition Content
  const transitionOpacity = useTransform(scrollYProgress, [0, 0.38, 0.62, 1], [0, 0, 1, 1])
  const transitionY = useTransform(scrollYProgress, [0.38, 0.62], [80, 0])
  const transitionScale = useTransform(scrollYProgress, [0.38, 0.62], [0.96, 1])

  // Signal Layer (Background lines, dots, keywords)
  const signalLayerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [0, 1, 1, 0])

  const [isHovering, setIsHovering] = useState(false)
  const [btnTranslate, setBtnTranslate] = useState({ x: 0, y: 0 })

  const handleBtnMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4
    setBtnTranslate({ x, y })
  }
  
  const handleBtnLeave = () => {
    setBtnTranslate({ x: 0, y: 0 })
    setIsHovering(false)
  }

  return (
    <section 
      ref={containerRef} 
      className="relative h-[160vh] min-h-[800px] bg-background text-foreground"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Signal Layer (Background) */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: prefersReducedMotion ? 0 : signalLayerOpacity }}
        >
          {/* Horizontal lines */}
          <div className="absolute top-[15%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
          <div className="absolute top-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent hidden md:block" />
          <div className="absolute top-[45%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute top-[60%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-[75%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent hidden md:block" />
          <div className="absolute top-[85%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

          {/* Glowing dots */}
          {!prefersReducedMotion && (
            <>
              <motion.div 
                className="absolute top-[30%] -left-4 w-1 h-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] hidden md:block"
                animate={{ x: ["0vw", "100vw"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-[60%] -left-4 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]"
                animate={{ x: ["0vw", "100vw"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
              />
              <motion.div 
                className="absolute top-[15%] -left-4 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
                animate={{ x: ["0vw", "100vw"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
              />
            </>
          )}

          {/* Floating keywords */}
          <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto">
            {keywords.map((kw, i) => (
              <motion.div
                key={kw.text}
                className={`absolute text-white/20 text-xs md:text-sm tracking-[0.2em] uppercase font-light ${kw.hiddenMobile ? 'hidden md:block' : ''}`}
                style={{ top: kw.top, left: kw.left, x: "-50%", y: "-50%" }}
                initial={prefersReducedMotion ? {} : { y: "-50%", opacity: 0.5 }}
                animate={prefersReducedMotion ? {} : { 
                  y: ["-50%", "calc(-50% - 15px)", "-50%"],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 8 + i * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {kw.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Layer 1: Original Content */}
        <motion.div 
          className="absolute z-20 flex flex-col items-center justify-center w-full px-4 text-center inset-0 pointer-events-auto"
          style={{ 
            opacity: prefersReducedMotion ? 1 : originalOpacity, 
            y: prefersReducedMotion ? 0 : originalY,
            scale: prefersReducedMotion ? 1 : originalScale,
            pointerEvents: originalPointerEvents as any
          }}
        >
          <h1 className="text-center text-6xl font-black leading-[0.85] tracking-tight sm:text-8xl md:text-9xl lg:text-[11rem]">
            <motion.span 
              className="block"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Markanı
            </motion.span>
            <motion.span 
              className="block"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              Dijitalde
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              Parlat!
            </motion.span>
          </h1>

          <motion.p 
            className="mx-auto mt-8 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg md:text-xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            Markanızı dijital dünyada öne çıkaracak yenilikçi çözümler sunuyoruz. Birlikte geleceği şekillendirelim.
          </motion.p>

          <motion.div 
            className="mt-12"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.96 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          >
            <Link
              href="/iletisim"
              onMouseMove={handleBtnMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleBtnLeave}
              style={{ 
                transform: `translate3d(${btnTranslate.x}px, ${btnTranslate.y}px, 0)`,
                transition: isHovering ? 'none' : 'transform 0.3s ease-out'
              }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-colors duration-300 sm:text-lg"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: isHovering ? "scale(1.4)" : "scale(0)",
                  opacity: isHovering ? 1 : 0,
                  borderRadius: "9999px",
                }}
              />
              <span className="relative z-10">Projeye Başlayalım</span>
              <span
                className="relative z-10 transition-transform duration-250 ease-out"
                style={{ transform: isHovering ? "translateX(6px)" : "translateX(0)" }}
              >
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Layer 2: Transition Content */}
        <motion.div
          className="absolute z-30 flex items-center justify-center w-full px-4 text-center inset-0 pointer-events-none"
          style={{ 
            opacity: prefersReducedMotion ? 0 : transitionOpacity,
            y: prefersReducedMotion ? 0 : transitionY,
            scale: prefersReducedMotion ? 1 : transitionScale
          }}
        >
          <h2 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90 leading-tight">
            Strateji, tasarım ve teknolojiyle dijital varlığınızı büyütüyoruz.
          </h2>
        </motion.div>

      </div>
    </section>
  )
}
