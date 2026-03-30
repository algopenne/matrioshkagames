'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { STUDIO_INFO } from './data'

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex items-center justify-between"
    >
      <Link href="/" className="hover:scale-105 transition-transform origin-left flex items-center">
        <img
          src="/matrioshka-logo.png"
          alt={STUDIO_INFO.name}
          className="h-8 md:h-12 w-auto object-contain"
        />
      </Link>

      <nav className="flex items-center gap-6 md:gap-12 text-sm md:text-lg font-bold uppercase tracking-widest text-white/90">
        <a
          href="/#contact"
          className="hover:text-white transition-colors cursor-pointer"
        >
          Contact
        </a>
        <a
          href="/#games"
          className="hover:text-white transition-colors hidden sm:block cursor-pointer"
        >
          Games
        </a>
        <Link
          href="/careers"
          className="hover:text-emerald-500 transition-colors cursor-pointer text-emerald-400"
        >
          Careers
        </Link>
      </nav>
    </motion.header>
  )
}
