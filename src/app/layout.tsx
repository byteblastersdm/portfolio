import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import { Toaster } from 'react-hot-toast'
import NextTopLoader from 'nextjs-toploader'
import Footer from '@/components/shared/Footer'
import Chatbot from '@/components/ui/Chatbot'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saddam Irake | Full Stack Developer & AI Automation Expert',
  description: "Portfolio of Saddam Irake, a passionate Full Stack Developer with 4.5+ years of experience specializing in the PERN stack, Next.js, AWS, and AI Automation.",
  keywords: ['Saddam Irake', 'Full Stack Developer', 'PERN Stack', 'React', 'Next.js', 'Node.js', 'Software Engineer', 'AI Automation', 'Pune Developer'],
  authors: [{ name: 'Saddam Irake' }],
  creator: 'Saddam Irake',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saddam-irake.vercel.app',
    title: 'Saddam Irake | Full Stack Developer',
    description: 'Explore the portfolio of Saddam Irake, featuring high-impact solutions across SaaS, FinTech, and AI automation.',
    siteName: 'Saddam Irake Portfolio',
    images: [
      {
        url: '/character.svg',
        width: 800,
        height: 600,
        alt: 'Saddam Irake Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saddam Irake | Full Stack Developer',
    description: 'Portfolio of Saddam Irake, specializing in the PERN stack and AI Automation.',
    images: ['/character.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.className} bg-[#0f1115] text-white`}>
        <NextTopLoader
          color='#6366f1'
          showSpinner={false}
        />
        <Toaster position="top-center" toastOptions={{
          duration: 3000,
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        }} />
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  )
}
