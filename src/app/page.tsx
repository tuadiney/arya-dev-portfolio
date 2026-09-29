import React from 'react';
import Link from 'next/link';
import Profile from '@/components/Profile';

// Interface Data Dummy Project
export interface FeaturedProject {
  id: string | number;
  title: string;
  description: string;
  category: string;
  image?: string;
  githubUrl: string;
  detailUrl: string;
  tags?: string[];
}

// Dummy Data Array (Dapat diganti dengan Supabase nanti)
const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Modern',
    description: 'Platform toko online berperforma tinggi dengan sistem pembayaran real-time, manajemen produk, dan analitik penjualan.',
    category: 'Fullstack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    detailUrl: '/projects',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
  },
  {
    id: '2',
    title: 'AI Productivity Hub',
    description: 'Aplikasi manajemen tugas cerdas yang mengintegrasikan AI untuk pengelompokan otomatis dan ringkasan pekerjaan harian.',
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    detailUrl: '/projects',
    tags: ['React', 'OpenAI API', 'Tailwind CSS'],
  },
  {
    id: '3',
    title: 'Crypto & Web3 Dashboard',
    description: 'Dashboard pemantauan aset kripto real-time dengan grafik interaktif, analisis portofolio, dan notifikasi pergerakan harga.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    detailUrl: '/projects',
    tags: ['Next.js', 'Chart.js', 'Tailwind'],
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden font-sans">
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Welcome to my portfolio
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">
            Arya Dev
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 max-w-2xl">
          Fullstack Developer & Problem Solver
        </p>

        <p className="text-base sm:text-lg text-slate-400/90 leading-relaxed max-w-2xl mb-10">
          Saya merancang dan membangun aplikasi web modern berperforma tinggi dengan fokus pada pengalaman pengguna yang luar biasa, arsitektur kode yang bersih, dan solusi terukur.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-300 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:border-white/[0.15] backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* 2. PROFILE SECTION */}
      <section className="relative border-t border-white/[0.06]">
        <Profile />
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Beberapa karya unggulan yang memperlihatkan keahlian teknis dan pendekatan desain saya.
          </p>
        </div>

        {/* 3 Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/[0.06] hover:border-blue-500/30 shadow-md hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              {project.image && (
                <div className="relative w-full h-48 bg-slate-800/60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-blue-300 border border-blue-500/30 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {!project.image && (
                    <div className="mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {project.category}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href={project.detailUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>View Detail</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white border border-slate-700/60 hover:border-slate-600 backdrop-blur-md transition-all duration-200 active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-white/[0.08] backdrop-blur-xl p-10 sm:p-16 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s build something <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                amazing together
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Punya ide proyek menarik atau ingin berkolaborasi? Mari wujudkan solusi digital berkualitas tinggi secara bersama-sama.
            </p>
            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300 active:scale-[0.98]"
              >
                <span>See All Projects</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] text-center sm:flex sm:items-center sm:justify-between">
        <div className="text-slate-300 font-semibold text-lg mb-4 sm:mb-0">
          Arya<span className="text-blue-400">.dev</span>
        </div>
        <div className="text-slate-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Arya Dev. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
