import { STUDIO_INFO } from '../data'
import { ArrowRightIcon } from 'lucide-react'

export const metadata = {
  title: 'Careers | ' + STUDIO_INFO.name,
  description: 'Join the team at ' + STUDIO_INFO.name
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 w-full flex flex-col items-center selection:bg-emerald-500 selection:text-white">
      <div className="max-w-4xl w-full flex flex-col gap-16">
        
        {/* Current State: No Openings */}
        <section className="flex flex-col gap-6 pb-12 text-center items-center">
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight leading-none hyphens-auto break-words" lang="en">
            Careers
          </h1>
          <p className="text-zinc-400 max-w-2xl text-xl mt-4 font-light">
            There are currently no open positions. Please check back later!
          </p>
        </section>

        {/* 
        ============================================================
        Previous Posting (Commented Out)
        ============================================================
        
        // Header Section
        <section className="flex flex-col gap-6 border-b border-white/20 pb-12">
          <p className="font-[family-name:var(--font-mono)] text-emerald-500 uppercase tracking-widest text-sm font-bold">
            Open Role
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight leading-none hyphens-auto break-words" lang="en">
            Game Studio Intern
          </h1>
          <a 
            href={`mailto:${STUDIO_INFO.contactEmail}?subject=Application:%20Internship`}
            className="group mt-6 inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full uppercase tracking-widest font-bold text-lg hover:bg-emerald-500 hover:text-white transition-colors duration-300 w-fit"
          >
            Apply Now
            <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </section>

        // Content Section
        <section className="flex flex-col gap-12 text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Join Our Team
            </h2>
            <p className="max-w-3xl">
              Matrioshka Games is looking for passionate, driven interns to join our development team. You will have the unique opportunity to gain crucial hands-on experience, bringing a fresh outlook and creative problem-solving skills to active game projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            // Responsibilities
            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                What You'll Do
              </h3>
              <ul className="text-base text-zinc-400 space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Collaborate closely with our core team to design, build, and polish gameplay systems.</li>
                <li>Take on high-level responsibilities solving real-world development challenges.</li>
                <li>Help optimize, debug, and playtest our titles before they hit the market.</li>
              </ul>
            </div>
            
            // Qualifications
            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                What We're Looking For
              </h3>
              <ul className="text-base text-zinc-400 space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>A deep passion for video games and an eagerness to learn complex toolsets.</li>
                <li>Exceptional problem-solving skills and a highly creative mindset.</li>
                <li>Strong communication and the ability to thrive in a fast-paced environment.</li>
              </ul>
            </div>
          </div>
        </section>

        // Bottom CTA
        <section className="mt-8 border-t border-white/20 pt-16 pb-8 flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white max-w-2xl">
            Ready to Build Games?
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg mb-2">
            Send us an email with your resume, portfolio, and a brief introduction about why you want to join Matrioshka Games.
          </p>
          <a 
            href={`mailto:${STUDIO_INFO.contactEmail}?subject=Application:%20Internship`}
             className="group mt-2 inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full uppercase tracking-widest font-bold text-xl hover:bg-emerald-500 hover:text-white transition-colors duration-300"
          >
            Apply Now
            <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </a>
        </section>
        */}

      </div>
    </main>
  )
}
