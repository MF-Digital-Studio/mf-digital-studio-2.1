"use client"

import { motion } from "framer-motion"
import { FooterSection } from "@/components/footer-section"

export function PrivacyPolicyClient({ sections }: { sections: Array<{num: string, title: string, content: string}> }) {
  return (
    <main className="bg-white text-black min-h-screen selection:bg-green-500 selection:text-white font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar-track {
          background: #f5f5f5 !important;
        }
        * {
          scrollbar-color: #22c55e #f5f5f5 !important;
        }
      `}} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-green-500 text-xs font-bold uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
              YASAL
            </span>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-[800] text-black">
              Gizlilik Politikası
            </h1>
            <p className="text-[#666] font-medium mt-2">
              Son güncelleme: Ocak 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[120px] px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-[760px]">
          <div className="flex flex-col gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${index !== 0 ? "pt-12 border-t border-[rgba(0,0,0,0.06)]" : ""}`}
              >
                <span className="text-green-500 font-syne text-[12px] uppercase tracking-[0.2em] font-bold mb-4">
                  {section.num}
                </span>
                <h2 className="font-syne text-[22px] font-[700] text-black mb-4">
                  {section.title}
                </h2>
                <div className="text-[#555] text-[16px] leading-[1.9] whitespace-pre-wrap">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="dark">
        <FooterSection hideCta={true} />
      </div>
    </main>
  )
}
