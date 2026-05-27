"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

type Service = {
  id: string
  title: string
  shortDesc: string
  benefits: string[]
  provides: string
  cta: string
}

const services: Service[] = [
  {
    id: "01",
    title: "Web Tasarım & Geliştirme",
    shortDesc:
      "Markanız için hızlı, mobil uyumlu ve güven veren web siteleri tasarlayıp geliştiriyoruz.",
    benefits: ["Kurumsal web sitesi", "Mobil uyumlu arayüz", "Dönüşüm odaklı yapı"],
    provides:
      "İşletmenizin dijitalde daha profesyonel görünmesini, kullanıcıların size daha kolay güvenmesini ve iletişime geçme oranlarının artmasını sağlar.",
    cta: "Web sitesi projesi başlat",
  },
  {
    id: "02",
    title: "E-Ticaret Sistemleri",
    shortDesc:
      "Ürünlerinizi dijitalde daha profesyonel sunmanızı ve satış sürecinizi yönetmenizi sağlayan e-ticaret altyapıları kuruyoruz.",
    benefits: ["Ürün ve kategori yapısı", "Sepet ve ödeme akışı", "Mobil alışveriş deneyimi"],
    provides:
      "Ürünlerinizi sadece sergilemekle kalmaz; kullanıcıyı ürün keşfinden satın alma adımına kadar daha net ve güven veren bir akışta yönlendirir.",
    cta: "E-ticaret projesi konuşalım",
  },
  {
    id: "03",
    title: "SEO & İçerik Stratejisi",
    shortDesc:
      "Web sitenizin Google’da daha görünür olması için teknik SEO, içerik yapısı ve sayfa optimizasyonlarını birlikte ele alıyoruz.",
    benefits: ["Teknik SEO temeli", "Anahtar kelime yapısı", "İçerik ve blog stratejisi"],
    provides:
      "Markanızın sadece reklamla değil, organik aramalarla da bulunmasını destekler. Uzun vadede daha sürdürülebilir bir dijital görünürlük oluşturur.",
    cta: "SEO stratejisi çıkaralım",
  },
  {
    id: "04",
    title: "Sosyal Medya Yönetimi",
    shortDesc:
      "Markanızın sosyal medyada daha tutarlı, profesyonel ve hedef kitlenize uygun görünmesi için içerik ve yönetim süreçlerini planlıyoruz.",
    benefits: ["İçerik planlama", "Görsel dil oluşturma", "Marka iletişimi"],
    provides:
      "Sosyal medya hesaplarınızın rastgele paylaşımlar yerine daha planlı, tutarlı ve marka algısını güçlendiren bir yapıya kavuşmasını sağlar.",
    cta: "Sosyal medya planı oluşturalım",
  },
  {
    id: "05",
    title: "Yönetim Panelleri",
    shortDesc:
      "İçerik, ürün, sipariş, müşteri veya operasyon süreçlerinizi tek yerden yönetebileceğiniz özel paneller geliştiriyoruz.",
    benefits: ["Admin panel geliştirme", "İçerik yönetimi", "Operasyon takibi"],
    provides:
      "İş süreçlerinizi dağınık araçlardan kurtarıp tek merkezden yönetilebilir hale getirir. Böylece operasyonel hız, kontrol ve verimlilik artar.",
    cta: "Panel ihtiyacını konuşalım",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="hizmetler" ref={ref} className="relative bg-zinc-50 px-4 py-32 md:px-6 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500"
            >
              HİZMETLERİMİZ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl lg:text-5xl"
            >
              Markanız için çalışan dijital sistemler kuruyoruz.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-md text-pretty leading-relaxed text-zinc-600 md:text-lg"
          >
            Web sitesi, e-ticaret, SEO, sosyal medya ve yönetim paneli çözümleriyle markanızın
            dijitalde daha güvenilir, ölçülebilir ve dönüşüm odaklı çalışmasını sağlıyoruz.
          </motion.p>
        </div>

        {isMobile ? (
          // Mobile Accordion View
          <div className="flex flex-col border-t border-zinc-200">
            {services.map((service, index) => {
              const isActive = activeService === index
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={service.id}
                  className="border-b border-zinc-200"
                >
                  <button
                    onClick={() => setActiveService(isActive ? -1 : index)}
                    className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm transition-colors ${
                          isActive ? "text-zinc-900" : "text-zinc-400"
                        }`}
                      >
                        {service.id}
                      </span>
                      <h3
                        className={`text-xl font-medium transition-colors ${
                          isActive ? "text-zinc-900" : "text-zinc-500"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${isActive ? "text-zinc-900" : "text-zinc-400"}`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2">
                          <p className="mb-6 text-lg leading-relaxed text-zinc-600">
                            {service.shortDesc}
                          </p>
                          <div className="mb-6">
                            <ul className="flex flex-col gap-3">
                              {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-700">
                                  <div className="mt-2 h-[2px] w-4 shrink-0 bg-zinc-300" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mb-8 rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
                            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-900">
                              Bu hizmet ne sağlar?
                            </h4>
                            <p className="text-sm leading-relaxed text-zinc-600">
                              {service.provides}
                            </p>
                          </div>
                          <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600"
                          >
                            {service.cta}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        ) : (
          // Desktop 2-Column View
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] lg:gap-20">
            {/* Left Column: List */}
            <div className="flex flex-col border-t border-zinc-200">
              {services.map((service, index) => {
                const isActive = activeService === index
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={service.id}
                  >
                    <button
                      onMouseEnter={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                      className={`group flex w-full items-center gap-8 border-b border-zinc-200 py-8 text-left transition-all duration-500 hover:pl-4 focus:outline-none ${
                        isActive ? "pl-4" : ""
                      }`}
                      aria-expanded={isActive}
                    >
                      <span
                        className={`font-mono text-lg transition-colors duration-500 ${
                          isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                        }`}
                      >
                        {service.id}
                      </span>
                      <h3
                        className={`text-3xl font-medium transition-colors duration-500 lg:text-4xl ${
                          isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                        }`}
                      >
                        {service.title}
                      </h3>
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Column: Detail Panel */}
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm lg:p-10"
                >
                  <h3 className="mb-4 text-2xl font-semibold text-zinc-900">
                    {services[activeService]?.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-zinc-600">
                    {services[activeService]?.shortDesc}
                  </p>

                  <div className="mb-8">
                    <ul className="flex flex-col gap-4">
                      {services[activeService]?.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-700">
                          <div className="mt-2.5 h-[1px] w-6 shrink-0 bg-zinc-300" />
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10 rounded-xl border border-zinc-100 bg-zinc-50 p-6">
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-900">
                      Bu hizmet ne sağlar?
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {services[activeService]?.provides}
                    </p>
                  </div>

                  <Link
                    href="/iletisim"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-zinc-600"
                  >
                    {services[activeService]?.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
