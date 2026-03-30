'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { GAMES, STUDIO_INFO } from './data'
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react'

const TRANSITION_SECTION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/* Fallback abstract background if no video, using a subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80 z-10" />
          {/* Studio sizzle reel video */}
          <video
            src="/sizzle.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl"
          >
            {STUDIO_INFO.description}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl md:text-3xl text-zinc-300 font-light"
          >
            {STUDIO_INFO.tagline}
          </motion.p>
        </div>

        {/* Scroll down indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white hover:text-white/70 transition-colors cursor-pointer"
          aria-label="Scroll down to games"
        >
          <ChevronDownIcon className="w-16 h-16" />
        </motion.button>
      </section>

      {/* Games Horizontal Bands */}
      <section id="games" className="w-full">
        {GAMES.map((game, index) => (
          <motion.a
            key={game.id}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...TRANSITION_SECTION, delay: 0.1 }}
            className={`group relative flex flex-col md:flex-row w-full min-h-[50vh] md:min-h-[40vh] items-stretch justify-between overflow-hidden ${game.color}`}
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

            {/* Text Content */}
            <div className="relative z-20 w-full md:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center">
              <h2
                className="text-5xl md:text-8xl font-extrabold uppercase tracking-tight text-white mb-4 group-hover:scale-105 transition-transform duration-500 origin-left hyphens-auto break-words"
                lang="en"
              >
                {game.title}
              </h2>
              <p className="text-xl md:text-3xl font-medium text-white/90 mb-8 max-w-xl">
                {game.tagline}
              </p>

              <div className="flex items-center gap-4 text-white font-bold text-lg md:text-xl group/btn">
                <span className="bg-black text-white px-6 py-3 rounded-full uppercase tracking-wider group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-300">
                  {game.releaseDate === 'Available Now' ? 'Play Now' : 'Learn More'}
                </span>
                <ArrowRightIcon className="w-8 h-8 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            {/* Media / Image */}
            <div className="relative z-0 w-full md:w-1/2 h-[40vh] md:h-auto overflow-hidden shrink-0">
              <img
                src={game.imageUrl}
                alt={`${game.title} background`}
                className="absolute inset-0 w-full h-full object-cover origin-center md:origin-right group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient fade to blend video into the solid color on desktop */}
              {/* <div className="hidden md:block absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black/40 to-transparent" /> */}
            </div>
          </motion.a>
        ))}
      </section>
    </main>
  )
}
