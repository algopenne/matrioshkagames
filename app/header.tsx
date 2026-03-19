'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { STUDIO_INFO } from './data'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex items-center justify-between"
    >
      <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase hover:scale-105 transition-transform origin-left">
        {STUDIO_INFO.name}
      </Link>

      <nav className="flex items-center gap-6 md:gap-12 text-sm md:text-lg font-bold uppercase tracking-widest text-white/90">
        <Link href="#games" className="hover:text-white transition-colors">Games</Link>
        <Link href="#merch" className="hover:text-white transition-colors hidden sm:block">Merch</Link>
        <Link href="#press" className="hover:text-white transition-colors hidden sm:block">Press</Link>
        <Link href="#about" className="hover:text-white transition-colors hidden sm:block">About</Link>
      </nav>
    </motion.header>
  )
}
