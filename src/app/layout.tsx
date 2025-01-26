import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import { Toaster } from 'react-hot-toast'
import NextTopLoader from 'nextjs-toploader'
import Footer from '@/components/shared/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rathin Kumar Gorai',
  description: "Hey, I'm Rathin Kumar Gorai. I'm a software engineer. I write about software engineering, programming, and web development."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
      color='#000000'
      />
      <Toaster position="top-center" toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          }
        }} />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
