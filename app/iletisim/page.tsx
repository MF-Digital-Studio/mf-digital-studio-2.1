"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FooterSection } from "@/components/footer-section"
import { ArrowRight, MessageCircle, Mail, Instagram, Clock, Target, Map, CheckCircle2, ChevronDown, Phone } from "lucide-react"
import { WHATSAPP_URL, CONTACT_EMAIL, INSTAGRAM_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_LINK } from "@/lib/constants"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-white/20 selection:text-white font-sans overflow-hidden">
      <ContactHero />
      <MainContactSection />
      <AlternativeContactCards />
      <FooterSection />
    </main>
  )
}

function ContactHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-syne font-[800] leading-[1.1] tracking-tight"
          >
            <span className="block text-white text-[clamp(2.5rem,6vw,5.5rem)]">Birlikte dijitalde</span>
            <span className="block text-[#a1a1aa] text-[clamp(2.5rem,6vw,5.5rem)]">büyüyecek bir şey</span>
            <span className="block text-white text-[clamp(2.5rem,6vw,5.5rem)]">inşa edelim.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-[#a1a1aa] max-w-[600px] text-[17px] md:text-[19px] leading-[1.6] font-medium mt-2"
          >
            Web sitesi, e-ticaret, SEO veya sosyal medya için markanıza özel bir yol haritası çıkaralım. Kısa bir keşif görüşmesiyle başlayalım.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          >
            <button 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-syne font-bold text-[15px] hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
            >
              Projeye Başlayalım
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-syne font-bold text-[15px] hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
            >
              WhatsApp'tan Yaz
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MainContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const infoCards = [
    {
      icon: <Phone className="w-6 h-6 text-[#a1a1aa]" />,
      title: "Hızlı İletişim",
      desc: (
        <a href={CONTACT_PHONE_LINK} className="hover:text-white transition-colors">
          {CONTACT_PHONE_DISPLAY}
        </a>
      )
    },
    {
      icon: <Clock className="w-6 h-6 text-[#a1a1aa]" />,
      title: "24 Saat İçinde Dönüş",
      desc: "Mesajınızı aldıktan sonra en kısa sürede size ulaşırız."
    },
    {
      icon: <Target className="w-6 h-6 text-[#a1a1aa]" />,
      title: "Stratejik Keşif",
      desc: "İlk görüşmede hedeflerinizi, kitlenizi ve ihtiyaçlarınızı netleştiririz."
    },
    {
      icon: <Map className="w-6 h-6 text-[#a1a1aa]" />,
      title: "Net Yol Haritası",
      desc: "Projeniz için uygulanabilir bir dijital büyüme planı oluştururuz."
    }
  ]

  return (
    <section id="contact-form" className="py-[100px] border-t border-white/5 relative z-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="text-[#a1a1aa] text-[12px] font-bold uppercase tracking-[0.2em] mb-4">İLETİŞİME GEÇ</span>
            <h2 className="font-syne text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.1] mb-6">
              Markanız için doğru dijital adımı birlikte netleştirelim.
            </h2>
            <p className="text-[#a1a1aa] text-[17px] leading-[1.6] mb-12 max-w-[480px]">
              Bize projenizden bahsedin. İhtiyacınızı analiz edip size en uygun web, e-ticaret, SEO veya sosyal medya stratejisini çıkaralım.
            </p>

            <div className="flex flex-col gap-8">
              {infoCards.map((card, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-syne font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-[#a1a1aa] text-[15px] leading-[1.6] max-w-[320px]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group">
              {/* Subtle hover glow on the card itself */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[400px] py-12"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-syne font-bold text-white mb-3">Talebiniz Alındı</h3>
                    <p className="text-[#a1a1aa] max-w-[300px]">
                      Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors font-syne text-[14px]"
                    >
                      Yeni Bir Mesaj Gönder
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] text-[#a1a1aa] uppercase tracking-wider font-semibold px-1">Ad Soyad *</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-white/50 focus:bg-white/[0.07] transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] text-[#a1a1aa] uppercase tracking-wider font-semibold px-1">Marka / İşletme *</label>
                        <input required type="text" placeholder="Şirketiniz" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-white/50 focus:bg-white/[0.07] transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] text-[#a1a1aa] uppercase tracking-wider font-semibold px-1">E-posta *</label>
                        <input required type="email" placeholder="ornek@sirket.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-white/50 focus:bg-white/[0.07] transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] text-[#a1a1aa] uppercase tracking-wider font-semibold px-1">Telefon / WhatsApp</label>
                        <input type="tel" placeholder="+90 (___) ___ __ __" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-white/50 focus:bg-white/[0.07] transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] text-[#a1a1aa] uppercase tracking-wider font-semibold px-1">Hizmet Seçimi</label>
                      <div className="relative">
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-white/50 focus:bg-white/[0.07] transition-all appearance-none cursor-pointer">
                          <option value="web" className="bg-[#0a0a0a] text-white">Web Sitesi</option>
                          <option value="ecom" className="bg-[#0a0a0a] text-white">E-Ticaret</option>
                          <option value="seo" className="bg-[#0a0a0a] text-white">SEO</option>
                          <option value="social" className="bg-[#0a0a0a] text-white">Sosyal Medya</option>
                          <option value="admin" className="bg-[#0a0a0a] text-white">Yönetim Panelleri</option>
                          <option value="other" className="bg-[#0a0a0a] text-white">Diğer</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] text-[#a1a1aa] uppercase tracking-wider font-semibold px-1">Proje Detayı / Mesaj *</label>
                      <textarea required placeholder="Bize biraz hedeflerinizden ve projenizin detaylarından bahsedin..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-white/50 focus:bg-white/[0.07] transition-all resize-none" />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-4 mt-2 bg-white text-black rounded-xl font-syne font-bold text-[16px] hover:bg-white/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          Keşif Görüşmesi Talep Et
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[12px] text-[#a1a1aa] mt-2">Bilgileriniz üçüncü taraflarla paylaşılmaz.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function AlternativeContactCards() {
  const cards = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      desc: "Daha hızlı dönüş için bize WhatsApp üzerinden yazabilirsiniz.",
      link: WHATSAPP_URL,
      color: "hover:border-white/50 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      desc: "Proje detaylarınızı mail olarak iletin, birlikte değerlendirelim.",
      link: `mailto:${CONTACT_EMAIL}`,
      color: "hover:border-white/50 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      desc: "Çalışmalarımızı ve güncellemelerimizi Instagram'dan takip edin.",
      link: INSTAGRAM_URL,
      color: "hover:border-white/50 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
    }
  ]

  return (
    <section className="pt-20 pb-32 bg-background relative z-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.a
              key={idx}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className={`flex flex-col items-center text-center p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 group ${card.color}`}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{card.title}</h3>
              <p className="text-[#a1a1aa] text-[15px] leading-[1.6]">{card.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

