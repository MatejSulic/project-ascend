import type { Metadata } from 'next'
import { Syne, Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import './styles/loader.css'
import './styles/cursor.css'
import './styles/nav.css'
import './styles/common.css'
import './styles/floating-logos.css'
import './styles/hero.css'
import './styles/how-it-works.css'
import './styles/services.css'
import './styles/why-us.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/footer.css'
import Cursor from '@/components/Cursor'
import LoadingScreen from '@/components/LoadingScreen'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  style: ['normal', 'italic'],
  weight: ['300', '400'],
})

export const metadata: Metadata = {
  title: 'Project Ascend — Matěj Šulič',
  description: 'Moderní weby s AI workflow. Rychleji než agentura, levněji než čekáte — dodání za 5–10 dní.',
  metadataBase: new URL('https://projectascend.cz'),
  openGraph: {
    title: 'Project Ascend — Matěj Šulič',
    description: 'Moderní weby s AI workflow. Rychleji než agentura, levněji než čekáte — dodání za 5–10 dní.',
    url: 'https://projectascend.cz',
    siteName: 'Project Ascend',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Ascend — Matěj Šulič',
    description: 'Moderní weby s AI workflow. Rychleji než agentura, levněji než čekáte — dodání za 5–10 dní.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${syne.variable} ${bebasNeue.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
