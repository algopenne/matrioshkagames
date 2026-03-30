'use client'
import { STUDIO_INFO, SOCIAL_LINKS } from './data'
import { ArrowUpIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="w-full min-h-screen flex flex-col justify-between bg-zinc-950 text-white relative overflow-hidden py-12 px-8 border-t border-zinc-900 border-opacity-50">
      
      {/* Massive Background Text Effect for Premium Feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none flex justify-center items-center">
        <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
          {STUDIO_INFO.name}
        </h2>
      </div>

      {/* Main Contact Content vertically and horizontally centered */}
      <div className="flex-1 w-full flex flex-col justify-center items-center z-10 relative">
        <h3 className="text-zinc-500 uppercase tracking-[0.3em] font-bold text-sm md:text-lg mb-4 md:mb-8 text-center">
          Got a project in mind?
        </h3>
        
        <div className="flex flex-col items-center mb-16">
          <a 
            href={`mailto:${STUDIO_INFO.contactEmail}`} 
            className="text-6xl md:text-[8vw] font-black tracking-tighter text-white hover:opacity-80 transition-opacity uppercase leading-[0.9] text-center relative group"
          >
            Let&apos;s Talk
            <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-2 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
          </a>
          <a 
            href={`mailto:${STUDIO_INFO.contactEmail}`} 
            className="mt-6 md:mt-10 text-lg md:text-2xl font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors"
          >
            {STUDIO_INFO.contactEmail}
          </a>
        </div>

        {/* Social Links structured neatly underneath */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl font-bold uppercase tracking-widest text-zinc-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright anchoring the design */}
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs md:text-sm font-semibold uppercase tracking-widest z-10 relative mt-auto pt-8 border-t border-zinc-900/50 gap-6">
        <span className="md:w-1/3 text-center md:text-left">© {new Date().getFullYear()} {STUDIO_INFO.name}</span>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="md:w-1/3 flex items-center justify-center gap-2 hover:text-emerald-500 hover:scale-105 transition-all duration-300 cursor-pointer group font-bold text-zinc-400"
        >
          Back To Top
          <ArrowUpIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>

        <span className="md:w-1/3 text-center md:text-right">All rights reserved.</span>
      </div>
    </footer>
  )
}
