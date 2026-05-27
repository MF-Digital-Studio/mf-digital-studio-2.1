import { Fragment } from "react"

const ITEMS = [
  "Web Siteleri",
  "E-Ticaret",
  "Yönetim Panelleri",
  "SEO",
  "Sosyal Medya Yönetimi",
  "Marka Kimliği",
  "Dijital Pazarlama",
  "UI / UX Tasarım",
]

export function MarqueeSection() {
  // Repeat the items list to ensure enough content for seamless scrolling
  const repeatedItems = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="relative flex h-14 w-full items-center overflow-hidden border-y border-white/[0.08] bg-black">
      <div className="animate-marquee flex w-max items-center">
        {/* We output the repeated items twice to guarantee smooth 50% translation loop */}
        {[0, 1].map((iteration) => (
          <div key={iteration} className="flex shrink-0 items-center justify-around">
            {repeatedItems.map((item, index) => (
              <Fragment key={`${iteration}-${index}`}>
                <span className="font-syne mx-6 text-sm uppercase tracking-[0.15em] text-white whitespace-nowrap">
                  {item}
                </span>
                <span className="text-[10px] text-accent">✦</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
