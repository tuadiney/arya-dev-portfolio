import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export interface Project {
  id: string | number;
  title: string;
  slug: string;
  description: string;
  category: string;
  role: string | null;
  github_url: string | null;
  demo_url: string | null;
  problem: string | null;
  solution: string | null;
  challenges: string | null;
  status: string | null;
  created_at: string;
}

export default async function ProjectsPage() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    const supabase = await createClient();
    const { data, error: fetchError } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      error = fetchError.message;
    } else {
      projects = data ?? [];
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Terjadi kesalahan saat mengambil data.';
  }

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden font-sans">
      <div className="pointer-events-none absolute -top-56 -left-56 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 -right-56 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-56 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Portfolio Showcase
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400/90 leading-relaxed max-w-2xl mx-auto">
            Kumpulan proyek terbaik yang telah saya kembangkan menggunakan teknologi web modern dan arsitektur terkini.
          </p>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-12 p-5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center backdrop-blur-md">
            Gagal memuat data: {error}
          </div>
        )}

        {!error && projects.length === 0 && (
          <div className="text-center text-slate-500 text-lg py-20">
            Belum ada project yang tersedia.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-[#0c1120]/60 backdrop-blur-xl rounded-2xl border border-white/[0.06] hover:border-blue-500/20 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-purple-500/[0.07] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-5 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h2>

                  <p className="text-slate-400/80 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-1">
                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-300 active:scale-[0.97]"
                    >
                      View Detail
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 active:scale-[0.97]"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}

                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 active:scale-[0.97]"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
