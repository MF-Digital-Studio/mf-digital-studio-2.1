"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FooterSection } from "@/components/footer-section"
import { Lightbulb, ShieldCheck, Users, Plus, X } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen selection:bg-green-500 selection:text-white font-sans">
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <AboutFaqSection />
      <TeamSection />
      <div className="dark">
        <FooterSection />
      </div>
    </main>
  )
}

function AboutHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-white overflow-hidden pt-24 pb-16">
      {/* large ghost circle outline */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[600px] h-[600px] rounded-full border border-black/5 z-0 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col gap-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-syne font-[800] leading-[1.1] tracking-tight"
          >
            <span className="block text-black text-[clamp(3rem,7vw,6rem)]">Dijitali</span>
            <span className="block text-[#0a0a0a] text-[clamp(3rem,7vw,6rem)]">Şekillendiriyoruz</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-[#666] max-w-[480px] text-[17px] leading-[1.8] font-medium"
          >
            2026'dan bu yana markaların dijital dünyada güçlü bir iz bırakmasına yardımcı oluyoruz. Yaratıcılık, strateji ve teknolojiyi bir araya getiriyoruz.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <div className="border border-black/10 rounded-full px-5 py-2 text-[13px] font-syne font-semibold">10+ Proje</div>
            <div className="border border-black/10 rounded-full px-5 py-2 text-[13px] font-syne font-semibold">1+ Yıl</div>
            <div className="border border-black/10 rounded-full px-5 py-2 text-[13px] font-syne font-semibold">10+ Müşteri</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="bg-white py-[120px] border-b border-black/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <span className="text-green-500 text-xs font-bold uppercase tracking-widest">HİKAYEMİZ</span>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-black">Neden Varız?</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6 text-[#333] text-[17px] leading-[1.8]"
          >
            <p>
              MF Digital Studio, dijital dönüşümün sadece bir trend değil, bir zorunluluk olduğuna inanan bir ekip tarafından kuruldu. Amacımız; markaları sıradan dijital varlıklardan, gerçekten etkili ve akılda kalıcı deneyimlere dönüştürmek.
            </p>
            <p>
              Her projede teknik mükemmeliyeti yaratıcı vizyon ile buluşturuyoruz. Müşterilerimizin başarısını kendi başarımız olarak görüyoruz.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    {
      num: "01",
      icon: <Lightbulb className="w-8 h-8 text-green-500" />,
      title: "Yaratıcılık",
      desc: "Kalıpların dışında düşünür, her markaya özgün bir dijital kimlik inşa ederiz."
    },
    {
      num: "02",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      title: "Kalite",
      desc: "Her piksel, her satır kod en yüksek standartlarda teslim edilir. Ortalama işler yapmayız."
    },
    {
      num: "03",
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Ortaklık",
      desc: "Müşterilerimizi sadece iş ortağı olarak değil, uzun vadeli bir yolculuk arkadaşı olarak görürüz."
    }
  ]

  return (
    <section className="bg-white py-[120px]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <span className="text-green-500 text-xs font-bold uppercase tracking-widest">DEĞERLERİMİZ</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-black">Bizi Biz Yapan</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="text-[64px] font-syne font-[800] text-black/5 leading-none mb-4">{v.num}</div>
              <div className="mb-6">{v.icon}</div>
              <h3 className="font-syne text-xl font-bold text-black mb-3">{v.title}</h3>
              <p className="text-[#666] text-[14px] leading-[1.7]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    {
      name: "Faruk Özgü",
      role: "Ortak Kurucu",
      bio: "Tasarım, teknik geliştirme ve ürün mimarisi odaklı kurucu. Web siteleri, e-ticaret altyapıları ve kullanıcı deneyimi tasarımı konularında uzmanlaşmıştır."
    },
    {
      name: "Muratcan Salih",
      role: "Ortak Kurucu",
      bio: "Marka iletişimi, müşteri ilişkileri ve stratejik ortaklıklar odaklı kurucu. Sosyal medya stratejisi ve marka anlaşmaları konularında deneyimlidir."
    }
  ]

  return (
    <section className="bg-white py-[120px] border-t border-black/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <span className="text-green-500 text-xs font-bold uppercase tracking-widest">EKİBİMİZ</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-black">Arkasındaki İnsanlar</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="flex flex-col group w-full md:w-1/3 max-w-[360px]"
            >
              <div className="w-full aspect-square md:h-[320px] rounded-2xl mb-6 bg-gradient-to-br from-zinc-800 to-zinc-950 overflow-hidden" />
              <h3 className="font-syne text-lg font-bold text-black mb-1">{member.name}</h3>
              <p className="text-green-500 text-[13px] uppercase tracking-[0.1em] font-medium mb-3">{member.role}</p>
              <p className="text-[#666] text-[13px] leading-[1.8] line-clamp-2 mb-4">{member.bio}</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <a href="#" className="text-black/40 hover:text-green-500 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: "Web sitesi yaptırmak küçük işletmeler için mantıklı mı?",
      answer: "Evet. Küçük işletmeler için web sitesi, dijitalde güven oluşturmanın en hızlı yoludur. Sosyal medya tek başına yeterli olmaz; web sitesi işletmenizi daha profesyonel gösterir, müşterilerinizin sizi 7/24 bulabilmesini sağlar ve uzun vadede en karlı dijital yatırımlardan biridir."
    },
    {
      question: "Instagram hesabım varken neden ayrıca web sitesine ihtiyaç duyayım?",
      answer: "Instagram algoritmaları değişir, hesaplar kısıtlanabilir ya da askıya alınabilir. Web siteniz ise tamamen size aittir. Bunun yanı sıra web sitesi; Google'da bulunabilirlik, detaylı ürün/hizmet tanıtımı ve profesyonel iletişim formu gibi Instagram'ın sunamadığı avantajlar sağlar."
    },
    {
      question: "Web sitesi müşteriye gerçekten güven verir mi?",
      answer: "Kesinlikle. Araştırmalar, kullanıcıların büyük çoğunluğunun web sitesi olmayan bir işletmeye güvenmekte zorlandığını gösteriyor. Profesyonel bir web sitesi; referanslar, sertifikalar ve iletişim bilgileriyle birlikte güçlü bir ilk izlenim bırakır."
    },
    {
      question: "Bir web sitesi ortalama ne kadar sürede yayına alınır?",
      answer: "Kurumsal bir web sitesi için ortalama 3-4 hafta, e-ticaret projeleri için 5-7 hafta öngörüyoruz. Kapsamı daha küçük olan landing page projelerini ise 7-10 iş günü içinde teslim edebiliyoruz. Her proje öncesinde net bir zaman çizelgesi paylaşıyoruz."
    },
    {
      question: "QR menü veya yönetim paneli sonradan eklenebilir mi?",
      answer: "Evet. Projelerimizi modüler yapıda geliştiriyoruz; yani web sitenize ileride QR menü, rezervasyon sistemi, yönetim paneli veya stok takip gibi özellikler eklemek mümkün. Başlangıçta ihtiyacınız olmayanlar için ek ödeme yapmanıza gerek yok."
    },
    {
      question: "Web sitesi mobil uyumlu olmak zorunda mı?",
      answer: "Evet, bu artık bir tercih değil zorunluluk. Türkiye'deki web trafiğinin büyük çoğunluğu mobil cihazlardan geliyor. Google da mobil uyumlu siteleri sıralamada öncelikli tutuyor. Tüm projelerimiz mobil öncelikli yaklaşımla geliştirilir."
    },
    {
      question: "Google'da çıkmak için sadece web sitesi yeterli mi?",
      answer: "Web sitesi iyi bir başlangıç noktasıdır ancak tek başına yeterli değildir. Google'da üst sıralara çıkmak için teknik SEO, içerik stratejisi ve düzenli optimizasyon gerekir. Bu nedenle web sitesi projelerimize temel SEO altyapısını dahil ediyor, devamında aylık SEO hizmetleri de sunuyoruz."
    },
    {
      question: "Yapay zeka ve arama motorları işletmemi nasıl bulur?",
      answer: "Arama motorları ve yapay zeka araçları (ChatGPT, Gemini vb.) web sitenizi tarayarak işletmeniz hakkında bilgi toplar. Yapılandırılmış veri (schema markup), hızlı yükleme süresi ve kaliteli içerik; hem Google sıralamanızı hem de yapay zeka araçlarında görünürlüğünüzü doğrudan etkiler. Bu altyapıyı projelerimizde standart olarak kuruyoruz."
    },
    {
      question: "Web sitesi yaptırırken nelere dikkat etmeliyim?",
      answer: "En sık yapılan hatalar şunlardır: sadece fiyata odaklanmak, portföy incelememek, revizyon ve destek haklarını sözleşmede netleştirmemek. İyi bir web sitesi ucuz olmaz, ama iyi bir yatırım da olmak zorunda değildir. Şeffaf fiyatlandırma ve net teslimat koşulları sunuyoruz."
    },
    {
      question: "Uygun fiyatlı bir web sitesi ile profesyonel bir site arasındaki fark nedir?",
      answer: "Şablon tabanlı ucuz siteler hızlı kurulur ama özelleştirme imkânı kısıtlıdır, yavaş yüklenebilir ve SEO açısından zayıf kalabilir. Profesyonel siteler ise markanıza özel tasarlanır, hızlı ve güvenli çalışır, arama motorlarına göre optimize edilir ve ileride büyüyebilecek bir altyapıya sahiptir."
    },
    {
      question: "Web sitesi yaptırdıktan sonra müşteri gelmesi garanti mi?",
      answer: "Web sitesi tek başına müşteri getirmez; bir araçtır. Bu aracı doğru kullananlar — SEO, içerik ve dijital pazarlama ile destekleyenler — somut sonuçlar alır. Bu yüzden sadece site yapmıyor, dijital büyüme stratejisi de sunuyoruz."
    },
    {
      question: "MF Digital Studio'nun sahipleri kimlerdir?",
      answer: "MF Digital Studio, Faruk Özgü ve Muratcan Salih tarafından 2026 yılında kurulmuştur. Faruk; tasarım, teknik geliştirme ve ürün mimarisi alanlarında uzmanlaşırken, Muratcan marka iletişimi, müşteri ilişkileri ve stratejik ortaklıklar konularında deneyim sahibidir."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="bg-white py-[120px]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center gap-4"
        >
          <span className="font-syne text-[12px] font-bold uppercase tracking-[0.2em] text-green-500">
            SSS
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-black">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-[#666] text-lg font-medium">
            Dijital projeler hakkında merak edilenler.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-[760px]"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border-b border-[rgba(0,0,0,0.08)] py-6 first:pt-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <h3 className="font-syne text-[16px] font-semibold text-black">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-[rgba(0,0,0,0.12)] bg-transparent text-black group-hover:border-black/30"
                    }`}
                  >
                    {isOpen ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 pt-4 text-[15px] leading-[1.8] text-[#666]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
