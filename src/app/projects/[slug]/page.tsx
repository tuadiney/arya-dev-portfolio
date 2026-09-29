import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden font-sans">
      <div className="pointer-events-none absolute -top-56 -left-56 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 -right-56 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-56 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Projects
        </Link>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              {project.status && (
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.status}
                </span>
              )}
              {project.role && (
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {project.role}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-400/90 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 active:scale-[0.97]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Github
              </a>
            )}

            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-300 active:scale-[0.97]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>

          <div className="grid gap-5">
            {project.problem && (
              <div className="group relative bg-[#0c1120]/60 backdrop-blur-xl rounded-2xl border border-white/[0.06] p-6 sm:p-8 hover:border-red-500/10 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-transparent rounded-2xl pointer-events-none" />
                <h2 className="relative text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-red-400 shadow-lg shadow-red-400/30" />
                  Problem
                </h2>
                <p className="relative text-slate-400/90 leading-relaxed whitespace-pre-wrap">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="group relative bg-[#0c1120]/60 backdrop-blur-xl rounded-2xl border border-white/[0.06] p-6 sm:p-8 hover:border-emerald-500/10 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-transparent rounded-2xl pointer-events-none" />
                <h2 className="relative text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30" />
                  Solution
                </h2>
                <p className="relative text-slate-400/90 leading-relaxed whitespace-pre-wrap">{project.solution}</p>
              </div>
            )}

            {project.challenges && (
              <div className="group relative bg-[#0c1120]/60 backdrop-blur-xl rounded-2xl border border-white/[0.06] p-6 sm:p-8 hover:border-amber-500/10 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-transparent rounded-2xl pointer-events-none" />
                <h2 className="relative text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400/30" />
                  Challenges
                </h2>
                <p className="relative text-slate-400/90 leading-relaxed whitespace-pre-wrap">{project.challenges}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
