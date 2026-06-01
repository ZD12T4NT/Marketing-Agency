import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Instrument_Serif, Inter } from 'next/font/google'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: "Alien Marketing",
  description:
    "Marketing agency specializing in digital strategies, creative campaigns, and innovative solutions to help businesses thrive in the digital landscape.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.className} ${inter.className} overflow-x-hidden bg-[#0a0d04] text-white`}>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
