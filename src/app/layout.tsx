import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Instrument_Serif, Inter } from 'next/font/google'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Footer from '@/components/Footer';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400'
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Alien Marketing",
  description:
    "Marketing agency specializing in digital strategies, creative campaigns, and innovative solutions to help businesses thrive in the digital landscape.",
};

const footerData = {
  footerText: 'Marketing made easy.',

  socialLinks: [
    { href: '#', icon: <Facebook size={18} /> },
    { href: '#', icon: <Twitter size={18} /> },
    { href: '#', icon: <Instagram size={18} /> },
    { href: '#', icon: <Linkedin size={18} /> },
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden bg-[#0a0d04] ${instrumentSerif.className}, ${inter.className}`}
      >
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
