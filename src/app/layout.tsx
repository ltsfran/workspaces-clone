import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import '@/globals.css'
import TanstackProvider from '@/components/TanstackProvider'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const switzer = localFont({
  src: [
    {
      path: '../fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-switzer'
})

export const metadata: Metadata = {
  title: 'Workspaces',
  description: 'Explore the workspaces of creative individuals. Sent directly to your inbox every Saturday and Sunday.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${switzer.variable}`}>
      <body>
        <TanstackProvider>
          <Header />
          <main className="flex min-h-screen flex-col p-4 md:p-6">
            {children}
          </main>
        </TanstackProvider>
      </body>
    </html>
  )
}
