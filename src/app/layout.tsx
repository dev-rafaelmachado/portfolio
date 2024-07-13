/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Lato, Open_Sans } from 'next/font/google'

import './globals.css'
import { WrapperProvider } from '@/contexts/WrapperProvider'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})
const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rafael Portfolio',
  description: "Rafael's portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${lato.className} ${openSans.className}`}>
        <WrapperProvider>{children}</WrapperProvider>
      </body>
    </html>
  )
}
