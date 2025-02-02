import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: "Your Smart Fintech Solution",
description: "A seamless platform for quick loans and profitable investments. Secure, transparent, and easy to use.",
}

const cdFont = localFont({
  src: [
    {
      path: '../../public/font/cd.ttf',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={cdFont.className} >{children}</body>
    </html>
  )
}
