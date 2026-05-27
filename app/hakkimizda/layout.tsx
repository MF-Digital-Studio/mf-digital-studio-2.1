import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'MF Digital Studio’nun web tasarım, e-ticaret, SEO ve dijital büyüme odağında markalar için nasıl çalışan sistemler kurduğunu keşfedin.',
  alternates: {
    canonical: '/hakkimizda',
  },
}

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
