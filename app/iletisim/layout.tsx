import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | MF Digital Studio',
  description: 'Web tasarım, e-ticaret, SEO, sosyal medya yönetimi veya yönetim paneli projeniz için MF Digital Studio ile iletişime geçin.',
  alternates: {
    canonical: '/iletisim',
  },
}

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
