"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Lightbulb, PenTool, Rocket } from "lucide-react"

type Step = {
  id: string
  title: string
  description: string
  icon: typeof MessageSquare
}

const steps: Step[] = [
  {
    id: "01",
    title: "Keşif",
    description: "Projenizi, hedef kitlenizi ve dijital hedeflerinizi derinlemesine anlıyoruz.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "Strateji",
    description: "Veriye dayalı bir yol haritası ve yaratıcı konsept geliştiriyoruz.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Tasarım & Geliştirme",
    description: "Modern teknolojiler ve özgün tasarımla projenizi hayata geçiriyoruz.",
    icon: PenTool,
  },
  {
    id: "04",
    title: "Lansman & Destek",
    description: "Projenizi yayına alıyor, performansını izliyor ve yanınızda olmaya devam ediyoruz.",
    icon: Rocket,
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-background py-[120px]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[80px] flex flex-col items-center text-center"
        >
          <span className="font-syne mb-4 text-[12px] uppercase tracking-[0.2em] text-accent">
            SÜRECİMİZ
          </span>
          <h2 className="font-syne text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Fikirden <span className="text-accent">Gerçeğe</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Her projede izlediğimiz adım adım sürecimiz.
          </p>
        </motion.div>

        {/* Desktop Layout - Horizontal */}
        <div className="relative hidden md:block">
          {/* Timeline Line */}
          <div className="absolute top-[80px] left-0 right-0 h-[1px] bg-white/10">
            {/* Animated Dot */}
            <div className="absolute top-[-3px] left-0 h-[7px] w-[7px] rounded-full bg-accent animate-timeline-dot" />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                  className="group relative flex flex-col items-start cursor-default"
                >
                  {/* Ghost Number */}
                  <div className="absolute -top-10 -left-4 font-syne text-[80px] font-extrabold text-white/5 transition-opacity duration-350 ease-out group-hover:text-white/10 select-none z-0">
                    {step.id}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="relative z-10 mt-[60px] flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background transition-transform duration-350 ease-out group-hover:scale-110 shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-8">
                    <h3 className="font-syne text-[18px] font-bold text-white transition-colors duration-350 ease-out group-hover:text-accent">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="relative flex flex-col gap-10 md:hidden">
          {/* Vertical Dashed Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[1px] border-l border-dashed border-white/20" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                className="group relative flex items-start gap-6"
              >
                {/* Icon Circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-background transition-transform duration-350 ease-out group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex flex-col pt-1">
                  <span className="mb-1 text-[12px] font-bold text-white/20">
                    ADIM {step.id}
                  </span>
                  <h3 className="font-syne text-[18px] font-bold text-white transition-colors duration-350 ease-out group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
