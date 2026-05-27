"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, X } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Bir projeye nasıl başlayabiliriz?",
    answer:
      "Bize e-posta veya iletişim formu aracılığıyla ulaşmanız yeterli. Kısa bir keşif görüşmesi ayarlayarak ihtiyaçlarınızı dinliyor, size özel bir yol haritası sunuyoruz.",
  },
  {
    question: "Proje teslim süreleri ne kadar?",
    answer:
      "Projenin kapsamına göre değişmekle birlikte, kurumsal web siteleri için ortalama 1-2 hafta, e-ticaret projeleri için 3-4 hafta öngörüyoruz. Başlamadan önce net bir zaman çizelgesi paylaşıyoruz.",
  },
  {
    question: "Fiyatlandırma nasıl işliyor?",
    answer:
      "Her proje kendine özgü olduğu için sabit bir fiyat listemiz yok. Projenizin gereksinimlerini öğrendikten sonra şeffaf ve detaylı bir teklif hazırlıyoruz.",
  },
  {
    question: "Proje tesliminden sonra destek veriyor musunuz?",
    answer:
      "Evet. Tüm projelerimizde teslim sonrası destek sağlıyoruz. Uzun vadeli bakım ve destek paketlerimiz de mevcut.",
  },
  {
    question: "Hangi sektörlere hizmet veriyorsunuz?",
    answer:
      "Perakende, teknoloji, sağlık, eğitim, mimarlık ve daha pek çok sektörde deneyimimiz var. Sektörden bağımsız olarak dijital hedeflerinize ulaşmanıza yardımcı olabiliriz.",
  },
  {
    question: "Sosyal medya yönetiminde içerikleri siz mi üretiyorsunuz?",
    answer:
      "Evet, içerik stratejisinden tasarıma ve yayınlamaya kadar tüm süreci yönetiyoruz. Markanızın sesini ve görsel kimliğini en iyi şekilde yansıtmak için sizinle yakın çalışıyoruz.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section ref={ref} className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="font-syne mb-4 text-[12px] uppercase tracking-[0.2em] text-zinc-500">
            SSS
          </span>
          <h2 className="font-syne text-4xl font-bold text-zinc-900 md:text-5xl lg:text-6xl">
            Aklınızdaki Sorular
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            En çok merak edilen sorulara yanıt verdik.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-[760px]"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border-b border-zinc-200 py-6 first:pt-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <h3 className="font-syne text-[16px] font-semibold text-zinc-900">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-accent bg-accent text-black"
                        : "border-zinc-300 bg-white text-zinc-900 group-hover:border-zinc-400"
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
                      <p className="pb-4 pt-4 text-[15px] leading-[1.8] text-zinc-600">
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
