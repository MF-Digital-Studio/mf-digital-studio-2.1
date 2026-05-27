import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogServiceBridge() {
  const services = [
    { title: "Web Tasarım Hizmetleri", href: "/hizmetler#web-tasarim" },
    { title: "SEO Çözümleri", href: "/hizmetler#seo" },
    { title: "E-Ticaret Projeleri", href: "/hizmetler#e-ticaret" },
  ]

  return (
    <section className="py-24 border-t border-zinc-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-zinc-900 tracking-tight max-w-2xl mx-auto">
          Okuduklarınızı markanız için uygulanabilir bir sisteme dönüştürelim.
        </h2>
        <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Web tasarım, SEO, e-ticaret ve sosyal medya süreçlerinde markanız için net bir yol haritası çıkarabiliriz.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex items-center justify-between w-full sm:w-auto gap-4 px-6 py-3 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 hover:shadow-sm transition-all"
            >
              <span className="font-bold tracking-wide text-zinc-700 group-hover:text-black">{service.title}</span>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
