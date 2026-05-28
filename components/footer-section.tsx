"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_LINK, WHATSAPP_URL } from "@/lib/constants"
import { Logo } from "@/components/logo"
export function FooterSection({ hideCta = false }: { hideCta?: boolean } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer
      id="iletisim"
      ref={ref}
      className="relative bg-background px-4 pb-8 pt-32 md:px-6"
    >
      {/* Top border gradient */}
      <div className="absolute left-1/2 top-0 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* CTA Section */}
        {!hideCta && (
          <div
          className="relative z-10 mb-24 min-h-[60vh] flex flex-col items-center justify-center text-center !opacity-100 !visible !transform-none"
          style={{
            opacity: 1,
            visibility: "visible",
            transform: "none",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance text-4xl font-bold text-foreground md:text-6xl lg:text-7xl"
          >
            Projenizi Hayata
            <br />
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Geçirelim
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-lg text-pretty text-lg text-muted-foreground"
          >
            Dijital hedeflerinizi gerçekleştirmek için bizimle iletişime geçin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative mt-12 w-full px-4 sm:px-0"
          >
            {/* Subtle glow underneath the buttons */}
            <div className="absolute left-1/2 top-[70%] -z-10 h-24 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[100px] bg-accent/8 blur-2xl" />

            {/* Label */}
            <span className="mb-5 block text-center text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
              Hemen başlayalım
            </span>

            {/* Button Container */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 w-full">
              {/* Button 1 — İletişime Geç */}
              <a
                href="#iletisim"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-[100px] bg-white px-[36px] py-[16px] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:bg-accent text-black"
              >
                <span className="font-syne text-[15px] font-bold">
                  İletişime Geç
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Button 2 — WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-[100px] border-[1.5px] border-white/25 bg-transparent px-[36px] py-[16px] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/5"
              >
                {/* Inline SVG WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white transition-colors duration-300 group-hover:text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-syne text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-[#25D366]">
                  WhatsApp
                </span>
              </a>
            </div>
          </motion.div>
          </div>
        )}

        {/* Footer content */}
        <div className={`grid gap-12 border-border md:grid-cols-3 ${!hideCta ? 'border-t pt-12' : ''}`}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Logo variant="white" className="h-10 md:h-12 mb-6" />
            <p className="text-pretty text-muted-foreground">
              Dijital dünyada markanızı öne çıkaracak yenilikçi çözümler sunuyoruz.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              İletişim
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                İstanbul, Türkiye
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={CONTACT_PHONE_LINK} className="hover:text-foreground transition-colors">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Hizmetler", href: "/hizmetler" },
                { name: "Hakkımızda", href: "/#hakkimizda" },
                { name: "Projeler", href: "/projeler" },
                { name: "Blog", href: "/#blog" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row"
        >
          <p>© 2026 MF Digital Studio. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/gizlilik-politikasi" className="transition-colors hover:text-foreground">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="transition-colors hover:text-foreground">
              Kullanım Şartları
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("mf-open-cookie-preferences"));
              }}
              className="transition-colors hover:text-foreground text-left"
            >
              Çerez Tercihleri
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
