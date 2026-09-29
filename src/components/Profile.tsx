import React from 'react';

export default function Profile() {
  const skills = ['Next.js', 'Supabase', 'Tailwind CSS', 'JavaScript'];

  return (
    <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto text-slate-100 overflow-hidden font-sans">

      {/* 🔥 Background Glow */}
      <div className="pointer-events-none absolute top-1/2 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10">

        {/* 🔥 Heading */}
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full mb-3">
            Profile
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tentang{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
        </div>

        {/* 🔥 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                Arya Dev
              </h3>

              <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fullstack Developer
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Saya adalah seorang developer yang fokus membangun aplikasi modern,
              cepat, dan memiliki pengalaman pengguna yang baik. Saya senang
              memecahkan masalah dan mengubah ide menjadi produk nyata.
            </p>

            {/* 🔥 Skills */}
            <div className="pt-4">
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-4">
                Keahlian & Teknologi
              </h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-slate-200 backdrop-blur-md hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/40 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 transition-all duration-300 overflow-hidden">

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">

                {/* Avatar */}
                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-2 border-slate-900">

                    {/* 🔥 OPTIONAL: Ganti ini nanti pakai foto lo */}
                    <span className="text-slate-400 text-sm">Foto</span>

                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-white">Arya Dev</h4>
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Fullstack Developer
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
