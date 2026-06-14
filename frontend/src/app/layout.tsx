import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'ZENA AI - Your AI Health Companion',
  description: 'Get trusted health information, symptom guidance, medical report analysis, and healthcare support anytime.',
  keywords: 'AI health, medical assistant, symptom checker, health companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
