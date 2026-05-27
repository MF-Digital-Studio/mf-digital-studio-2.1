"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/constants"

const navLinks = [
  { name: "Hizmetler", href: "/hizmetler", num: "01" },
  { name: "Projeler", href: "/projeler", num: "02" },
  { name: "Hakkımızda", href: "/hakkimizda", num: "03" },
  { name: "Blog", href: "/blog", num: "04" },
  { name: "İletişim", href: "/iletisim", num: "05" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Use the path to determine if we are on a light page.
  const isLightPage = pathname === "/projeler" || pathname.startsWith("/projeler/") || pathname === "/hakkimizda" || pathname === "/blog" || pathname.startsWith("/blog/")
  const isLightMode = isLightPage && !isScrolled
  const isLightHeaderScrolled = isLightPage && isScrolled

  const logoTextColor = isLightMode || isLightHeaderScrolled ? "text-zinc-900" : "text-foreground"
  const logoDotColor = isLightMode || isLightHeaderScrolled ? "text-zinc-400" : "text-muted-foreground"
  
  // Clean pill button colors based on theme
  const menuBtnBorder = isLightMode || isLightHeaderScrolled ? "border-black/10 hover:border-black/30" : "border-white/10 hover:border-white/30"
  const menuBtnBg = isLightMode || isLightHeaderScrolled ? "bg-black/5 hover:bg-black/10 text-black" : "bg-white/5 hover:bg-white/10 text-white"

  // Handle scroll behavior (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* Standard Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible && !isMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? isLightPage 
              ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-4"
              : "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`font-syne text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity flex items-center ${logoTextColor}`}
          >
            MF<span className={`ml-0.5 text-3xl leading-none ${logoDotColor}`}>.</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Menüyü Aç"
            aria-expanded={isMenuOpen}
            className={`flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all backdrop-blur-md ${menuBtnBorder} ${menuBtnBg}`}
          >
            <span className="text-sm font-bold tracking-wide">MENÜ</span>
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </motion.header>

      {/* Cinematic Full-Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#030303] text-white overflow-y-auto overflow-x-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar inside Overlay */}
            <div className="container mx-auto max-w-7xl px-4 md:px-6 py-6 flex items-center justify-between shrink-0">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-syne text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity flex items-center text-white"
              >
                MF<span className="ml-0.5 text-3xl leading-none text-white/60">.</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Menüyü Kapat"
                className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all text-white group"
              >
                <span className="text-sm font-bold tracking-wide">KAPAT</span>
                <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 container mx-auto max-w-7xl px-4 md:px-6 flex flex-col justify-center py-12 md:py-0">
              <nav className="flex flex-col gap-4 md:gap-8 max-w-5xl">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center gap-6 md:gap-12 w-fit"
                    >
                      <span className="text-sm md:text-lg font-bold tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">
                        {link.num}
                      </span>
                      <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-white/80 group-hover:text-white group-hover:translate-x-4 md:group-hover:translate-x-8 transition-all duration-500 ease-out flex items-center gap-6">
                        {link.name}
                        <ArrowRight className="w-8 h-8 md:w-16 md:h-16 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-white/40 hidden md:block" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer / Info Block */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="container mx-auto max-w-7xl px-4 md:px-6 pb-12 pt-12 md:pt-0 shrink-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10 text-sm">
                <div>
                  <h4 className="font-bold tracking-widest text-white/40 uppercase mb-4 text-xs">Stüdyo</h4>
                  <p className="text-white/80 font-medium">MF Digital Studio<br/>İstanbul, Türkiye</p>
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-white/40 uppercase mb-4 text-xs">İletişim</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 font-medium hover:text-white transition-colors block mb-1">{CONTACT_EMAIL}</a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/80 font-medium hover:text-white transition-colors">WhatsApp</a>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-bold tracking-widest text-white/40 uppercase mb-4 text-xs">Hakkımızda</h4>
                  <p className="text-white/80 font-medium max-w-sm leading-relaxed">
                    Premium web tasarım, e-ticaret çözümleri, SEO ve dijital büyüme stratejileri ile markanızı geleceğe taşıyoruz.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
