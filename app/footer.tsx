'use client'
import { STUDIO_INFO, SOCIAL_LINKS } from './data'

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-24 px-8 border-t border-zinc-900 border-opacity-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            {STUDIO_INFO.name}
          </h2>
          <a href={`mailto:${STUDIO_INFO.contactEmail}`} className="text-zinc-500 hover:text-white transition-colors text-lg md:text-xl font-medium tracking-wide">
            {STUDIO_INFO.contactEmail}
          </a>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <h3 className="text-zinc-600 uppercase tracking-widest font-bold text-sm mb-2">Connect</h3>
          <nav className="flex flex-col gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold uppercase tracking-wide hover:ml-2 transition-all hover:text-blue-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-900 flex justify-between text-zinc-600 text-sm font-semibold uppercase tracking-widest">
        <span>© {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved.</span>
      </div>
    </footer>
  )
}
