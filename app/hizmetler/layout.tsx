import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hizmetler | Web Tasarım, E-Ticaret, SEO ve Yönetim Panelleri | MF Digital Studio',
  description: 'MF Digital Studio’nun web tasarım, e-ticaret, SEO, sosyal medya yönetimi ve yönetim paneli geliştirme hizmetlerini keşfedin.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
