import type { Metadata } from 'next'
import { Syne, Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'

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
  description: 'Weby pro řemeslníky — instalatéry, elektrikáře, topenáře.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${syne.variable} ${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
