"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Globe, ShoppingCart, Search, Share2, ArrowUpRight } from "lucide-react"

type Service = {
  icon: typeof Globe
  title: string
  description: string
  glow: string // raw rgb for glow shadow
  border: string // gradient css string
  accent: string // text accent color class
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Geliştirme",
    description:
      "Modern ve performanslı web siteleri ile kullanıcı deneyimini en üst seviyeye taşıyoruz.",
    glow: "79, 70, 229",
    border: "linear-gradient(135deg, rgba(79,70,229,0.9), rgba(67,56,202,0.4) 60%, transparent)",
    accent: "text-[rgb(67,56,202)]",
  },
  {
    icon: ShoppingCart,
    title: "E-ticaret",
    description:
      "Satışlarınızı artıracak, kullanıcı dostu e-ticaret platformları geliştiriyoruz.",
    glow: "126, 34, 206",
    border: "linear-gradient(135deg, rgba(126,34,206,0.9), rgba(107,33,168,0.4) 60%, transparent)",
    accent: "text-[rgb(107,33,168)]",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Arama motorlarında üst sıralara çıkmanızı sağlayacak stratejik SEO çözümleri.",
    glow: "234, 88, 12",
    border: "linear-gradient(135deg, rgba(234,88,12,0.9), rgba(194,65,12,0.4) 60%, transparent)",
    accent: "text-[rgb(194,65,12)]",
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description:
      "Sosyal medyada markanızı büyütecek yaratıcı içerik ve strateji yönetimi.",
    glow: "8, 145, 178",
    border: "linear-gradient(135deg, rgba(8,145,178,0.9), rgba(14,116,144,0.4) 60%, transparent)",
    accent: "text-[rgb(14,116,144)]",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D tilt with springs
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
    const px = (x / rect.width) - 0.5
    const py = (y / rect.height) - 0.5
    ry.set(px * 10)
    rx.set(-py * 10)
  }

  const handleLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1200 }}
      className="group relative cursor-pointer"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full"
      >
        {/* Color-coded glowing gradient border */}
        <div
          aria-hidden
          className="absolute -inset-px rounded-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: service.border,
            filter: "blur(0.5px)",
          }}
        />

        {/* Outer color glow */}
        <div
          aria-hidden
          className="absolute -inset-4 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, rgba(${service.glow}, 0.5), transparent 70%)`,
          }}
        />

        {/* Card body */}
        <div
          className="relative h-full overflow-hidden rounded-2xl bg-white p-8 md:p-10 border border-zinc-100 shadow-sm"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          }}
        >
          {/* Mouse-following spotlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(420px circle at var(--mouse-x) var(--mouse-y), rgba(${service.glow}, 0.12), transparent 45%)`,
            }}
          />

          {/* Pulsing icon */}
          <motion.div
            className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl"
            style={{
              background: `linear-gradient(135deg, rgba(${service.glow}, 0.18), rgba(${service.glow}, 0.04))`,
              border: `1px solid rgba(${service.glow}, 0.25)`,
              boxShadow: `0 0 0 0 rgba(${service.glow}, 0)`,
            }}
            whileHover={{
              boxShadow: `0 0 30px rgba(${service.glow}, 0.55)`,
            }}
          >
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-xl"
              style={{ border: `1px solid rgba(${service.glow}, 0.6)` }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.7, 0], scale: [1, 1.5, 1.7] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <Icon className="relative h-6 w-6" style={{ color: `rgb(${service.glow})` }} />
          </motion.div>

          {/* Content (slightly lifted in 3D) */}
          <div style={{ transform: "translateZ(40px)" }}>
            <h3
              className={`mb-4 text-2xl font-bold text-zinc-900 transition-colors duration-300 md:text-3xl`}
            >
              {service.title}
            </h3>
            <p className="text-pretty leading-relaxed text-zinc-600">
              {service.description}
            </p>
          </div>

          {/* Arrow CTA */}
          <div className="mt-10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
              0{index + 1} / 04
            </span>
            <motion.span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors duration-300 bg-white"
              style={{ transform: "translateZ(20px)" }}
              whileHover={{
                rotate: 45,
                borderColor: `rgb(${service.glow})`,
                color: `rgb(${service.glow})`,
                backgroundColor: "transparent",
              }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const headerProgress = useTransform(useMotionValue(isInView ? 1 : 0), (v) => v)
  void headerProgress

  return (
    <section
      id="hizmetler"
      ref={ref}
      className="relative bg-white px-4 py-32 md:px-6 md:py-40"
    >
      {/* Top divider */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        <div className="absolute -right-32 top-1/2 h-64 w-64 rounded-full bg-black/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-500"
            >
              <span className="mr-3 inline-block h-[1px] w-8 -translate-y-1 bg-zinc-300 align-middle" />
              Hizmetlerimiz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl"
            >
              Dijital Dönüşümünüz
              <br />
              <span className="text-zinc-500">Bizimle Başlasın</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-sm text-pretty text-zinc-600"
          >
            Stratejiden teslimata, markanızı her temas noktasında güçlendiren uçtan uca dijital hizmetler.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
