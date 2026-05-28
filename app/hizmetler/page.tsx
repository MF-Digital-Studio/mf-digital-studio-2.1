"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle2, Target, PenTool, Code, TrendingUp, ShoppingCart, Search, Share2, LayoutDashboard } from "lucide-react"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"
import Image from "next/image"

const servicesData = [
  {
    title: "Web Tasarım & Geliştirme",
    description: "Markanızın dijital vitrini için hızlı, modern ve dönüşüm odaklı web siteleri geliştiriyoruz.",
    bullets: [
      "Kurumsal web sitesi",
      "Landing page",
      "Responsive arayüz",
      "Performans optimizasyonu",
      "UI/UX iyileştirme",
      "Teknik bakım"
    ],
    icon: Code,
    image: "/services/web-design-mockup.svg",
    alt: "Web design and development conceptual mockup",
    ctaText: "Projeyi konuşalım"
  },
  {
    title: "E-Ticaret Sistemleri",
    description: "Satış sürecinizi kolaylaştıran, güven veren ve ölçeklenebilir e-ticaret deneyimleri tasarlıyoruz.",
    bullets: [
      "Ürün sayfası kurgusu",
      "Sepet ve ödeme deneyimi",
      "Shopify / WooCommerce yapıları",
      "Dönüşüm optimizasyonu",
      "Kampanya alanları",
      "Yönetilebilir altyapı"
    ],
    icon: ShoppingCart,
    image: "/services/ecommerce-mockup.svg",
    alt: "E-commerce systems conceptual mockup",
    ctaText: "E-Ticaret projesi konuşalım"
  },
  {
    title: "SEO & İçerik Stratejisi",
    description: "Arama motorlarında görünürlüğünüzü artırmak için teknik, içerik ve strateji tarafını birlikte ele alıyoruz.",
    bullets: [
      "Teknik SEO analizi",
      "Sayfa içi SEO",
      "Anahtar kelime stratejisi",
      "İçerik mimarisi",
      "Performans iyileştirme",
      "Raporlama"
    ],
    icon: Search,
    image: "/services/seo-mockup.svg",
    alt: "SEO and content strategy conceptual mockup",
    ctaText: "SEO stratejisi konuşalım"
  },
  {
    title: "Sosyal Medya Yönetimi",
    description: "Markanızın dijital iletişimini daha tutarlı, güçlü ve hedef odaklı hale getiriyoruz.",
    bullets: [
      "İçerik planı",
      "Görsel konsept",
      "Post ve story tasarımları",
      "Marka dili",
      "Kampanya iletişimi",
      "Performans takibi"
    ],
    icon: Share2,
    image: "/services/social-media-mockup.svg",
    alt: "Social media management conceptual mockup",
    ctaText: "Sosyal medya yönetimi konuşalım"
  },
  {
    title: "Yönetim Panelleri",
    description: "İçerik, ürün, sipariş, müşteri veya operasyon süreçlerinizi tek merkezden yönetebileceğiniz özel yönetim panelleri geliştiriyoruz.",
    detail: "İşletmelerin günlük operasyonlarında kullandığı dağınık araçları tek bir dijital kontrol merkezinde topluyoruz. Ürün yönetimi, içerik güncelleme, sipariş takibi, müşteri yönetimi, kullanıcı rolleri ve raporlama gibi ihtiyaçlara özel admin paneller geliştirerek süreçlerinizi daha hızlı, kontrollü ve ölçülebilir hale getiriyoruz.",
    bullets: [
      "Özel admin panel geliştirme",
      "İçerik, ürün ve sipariş yönetimi",
      "Kullanıcı rolleri ve yetkilendirme",
      "Operasyon takibi ve raporlama",
      "İşletmeye özel modül yapısı"
    ],
    icon: LayoutDashboard,
    image: "/services/admin-panel-mockup.svg",
    alt: "Admin panel conceptual mockup",
    ctaText: "Yönetim paneli projesi konuşalım",
    slug: "yonetim-panelleri",
    category: "Dijital Sistemler"
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <ServicesHero />
      <CoreServices />
      <ServiceSystem />
      <EngagementModels />
      <FooterSection />
    </main>
  )
}

function ServicesHero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20">
      {/* Background elements similar to homepage */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-[60%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-[1px] w-8 bg-muted-foreground/50" />
          HİZMETLERİMİZ
          <span className="h-[1px] w-8 bg-muted-foreground/50" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Dijital büyüme için ihtiyacınız olan <span className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">her şey.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Web tasarım, e-ticaret, SEO ve sosyal medya yönetimini tek bir stratejik sistem altında birleştiriyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/#iletisim"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-transform hover:scale-105"
          >
            <span>Projeye Başlayalım</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#hizmet-detay"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-white/10 hover:border-white/20"
          >
            Süreci İncele
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function CoreServices() {
  return (
    <section id="hizmet-detay" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-6 lg:gap-10">
          {servicesData.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service, index }: { service: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-white/10 lg:flex-row lg:items-center md:p-12 lg:p-16"
    >
      {/* Number Background */}
      <div className="absolute -right-4 -top-8 text-[120px] font-black leading-none text-white/[0.02] transition-colors group-hover:text-white/[0.04] md:-top-12 md:text-[180px] pointer-events-none select-none">
        0{index + 1}
      </div>

      <div className="relative z-10 flex-1 lg:w-1/2">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white">{service.title}</h2>
        <p className="max-w-md text-lg text-muted-foreground">{service.description}</p>
        {service.detail && <p className="mt-4 max-w-md text-base text-zinc-400">{service.detail}</p>}
        
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-md lg:max-w-none">
          {service.bullets.map((bullet: string, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm text-zinc-300">{bullet}</span>
            </div>
          ))}
        </div>

        <Link href="/iletisim" className="mt-10 flex items-center gap-2 text-sm font-medium text-white transition-opacity md:opacity-0 md:group-hover:opacity-100 cursor-pointer w-fit">
          <span>{service.ctaText || "Detayları keşfet"}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative z-10 w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
        <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.alt || service.title}
              fill
              className="object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-white/5" />
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ServiceSystem() {
  const pillars = [
    { title: "Strateji", desc: "Markanızın hedeflerini analiz eder ve uzun vadeli bir yol haritası çizeriz.", icon: Target },
    { title: "Tasarım", desc: "Kullanıcı deneyimini merkeze alan, modern ve etkileyici arayüzler tasarlarız.", icon: PenTool },
    { title: "Geliştirme", desc: "En güncel teknolojilerle, hızlı ve ölçeklenebilir altyapılar kurarız.", icon: Code },
    { title: "Büyüme", desc: "Sürekli optimizasyon ve pazarlama ile dijital varlığınızı büyütürüz.", icon: TrendingUp },
  ]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-5xl text-white"
          >
            Tek tek hizmetler değil, birlikte çalışan bir dijital sistem.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground md:text-xl"
          >
            Her projede tasarım, teknoloji, içerik ve büyüme tarafını aynı hedefe bağlarız. Böylece yalnızca görünen bir site değil, markanız için çalışan bir dijital yapı kurarız.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 relative" ref={ref}>
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col gap-6"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-sm transition-transform hover:scale-105">
                <pillar.icon className="h-10 w-10 text-white/80" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EngagementModels() {
  const packages = [
    {
      title: "Başlangıç",
      desc: "Dijital varlığını profesyonel bir zemine taşımak isteyen markalar için.",
      features: [
        "Kurumsal Kimlik Analizi",
        "Modern Web Tasarım",
        "Temel SEO Optimizasyonu",
        "Responsive Altyapı",
      ]
    },
    {
      title: "Büyüme",
      desc: "Mevcut dijital yapısını iyileştirmek ve büyütmek isteyen markalar için.",
      features: [
        "Kapsamlı UX/UI İyileştirme",
        "Performans ve Hız Optimizasyonu",
        "Gelişmiş SEO & İçerik Stratejisi",
        "Dönüşüm Odaklı Yaklaşım",
        "Düzenli Raporlama"
      ],
      highlight: true
    },
    {
      title: "Özel Proje",
      desc: "Markaya özel web, e-ticaret veya kampanya odaklı projeler için.",
      features: [
        "Özel E-Ticaret/Web Altyapısı",
        "Gelişmiş Entegrasyonlar",
        "Özel Animasyon & Etkileşimler",
        "Kapsamlı Sosyal Medya & SEO",
        "Öncelikli Destek"
      ]
    }
  ]

  return (
    <section className="py-24 md:py-32 border-t border-white/5 relative bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            İhtiyacınıza göre esnek çalışma modelleri.
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`flex flex-col rounded-3xl p-8 md:p-10 transition-all hover:-translate-y-1 ${
                pkg.highlight 
                  ? "bg-white/[0.05] border border-white/20 shadow-2xl shadow-white/5" 
                  : "bg-white/[0.02] border border-white/5"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{pkg.title}</h3>
              <p className="text-zinc-400 mb-8 min-h-[60px]">{pkg.desc}</p>
              <ul className="mb-12 flex-1 space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#iletisim"
                className={`flex w-full items-center justify-center rounded-full py-4 text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Görüşme Planla
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
