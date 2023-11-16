import Header from '@/components/Header'
import Menu from '@/components/Header/Menu'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CreateContextProvider from '@/context'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'layout title',
  openGraph: {
    title: "site title OG"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CreateContextProvider>
          <Header>
            <Menu/>
          </Header>
          <div className="app-container px-2">
            {children}
          </div>
        </CreateContextProvider>
        </body>
    </html>
  )
}
