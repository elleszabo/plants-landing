export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ======================== NAV ======================== */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <span className="text-lg font-black tracking-tight">
          theai.<span className="text-[#22c55e]">garden</span>
        </span>
        <button className="btn-glow px-5 py-2 rounded-lg text-sm">
          Upload Photo
        </button>
      </nav>

      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        {/* Background red radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,32,32,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[#22c55e] text-sm font-bold tracking-[0.3em] uppercase mb-8">
            theai.garden
          </p>

          <h1 className="hero-title mb-6">
            Stop{" "}
            <span className="kill-word">killing</span>
            <br />
            your plants.
          </h1>

          <p className="text-xl md:text-2xl text-[#888] max-w-xl mx-auto mb-10 font-light">
            Upload a photo. Get a care plan in 10 seconds.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="btn-glow px-10 py-4 rounded-xl text-lg flex items-center gap-3">
              <span className="text-2xl">📷</span>
              Upload Plant Photo
            </button>
            <p className="text-[#888] text-sm">
              No account required.
            </p>
          </div>

          <p className="mt-16 text-[#555] text-xs tracking-wide">
            Used by 137 plant parents who were tired of guessing.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#555] to-transparent" />
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== PROBLEM ======================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">
            You&apos;re not bad at plants.
          </h2>
          <p className="text-center text-2xl md:text-3xl font-bold text-[#888] mb-16">
            You&apos;re just <span className="text-[#ff2020]">guessing</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {[
              "Am I overwatering?",
              "Why are the leaves yellow?",
              "Is this enough light?",
              "Do I need fertilizer?",
              "Why did it look fine yesterday??",
            ].map((q) => (
              <div key={q} className="problem-card rounded-xl px-6 py-5">
                <span className="text-[#ff2020] mr-2 font-bold">?</span>
                <span className="text-[#ccc]">{q}</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-lg mx-auto">
            <p className="text-lg text-[#888]">
              Most plant advice online is generic.
            </p>
            <p className="text-lg text-white font-bold mt-2">
              Your apartment isn&apos;t.
            </p>
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== HOW IT WORKS ======================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-20">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Upload a photo",
                desc: "We identify your plant instantly.",
              },
              {
                num: "02",
                title: "We check real plant guides",
                desc: "We look up trusted sources and summarize them.",
              },
              {
                num: "03",
                title: "Get a personalized care plan",
                desc: "Watering schedule, light needs, soil type — adjusted to your season.",
              },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="step-number">{step.num}</div>
                <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-[#888] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="text-2xl font-bold">That&apos;s it.</p>
            <p className="text-[#888] mt-2">No more guessing.</p>
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== WHAT YOU GET ======================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-16">
            What you get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "☀️",
                title: "Light guidance",
                desc: "Exact placement recommendations.",
              },
              {
                icon: "💧",
                title: "Smart watering schedule",
                desc: "Not \"once a week.\" Based on your climate and plant type.",
              },
              {
                icon: "🌱",
                title: "Soil + fertilizer tips",
                desc: "When and how much.",
              },
              {
                icon: "🔔",
                title: "Watering reminders",
                desc: "We notify you when it's actually time.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="problem-card rounded-xl p-8 flex gap-5"
              >
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-[#888]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== SOCIAL PROOF ======================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#22c55e] text-sm font-bold tracking-[0.2em] uppercase mb-6">
            Early users say
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "I didn't realize I was overwatering everything.",
              "This is way easier than Googling 10 different sites.",
            ].map((quote) => (
              <div
                key={quote}
                className="problem-card rounded-xl p-8 text-left"
              >
                <p className="text-lg text-[#ccc] italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#555] text-sm tracking-wide">
            Over 300 plants analyzed this week.
          </p>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== WHO IT'S FOR ======================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-12">
            Who it&apos;s for
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Apartment plant owners",
              "Beginners",
              "People who've killed a fiddle leaf fig",
              "Busy professionals",
              "Anyone tired of plant anxiety",
            ].map((tag) => (
              <span
                key={tag}
                className="px-5 py-3 rounded-full border border-[#333] text-[#ccc] text-sm hover:border-[#22c55e] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[#555] text-sm italic max-w-md mx-auto">
            If you have 30+ plants and a humidity-controlled greenhouse, this
            probably isn&apos;t for you.
          </p>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== FINAL CTA ======================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Your plants deserve better.
          </h2>
          <p className="text-xl text-[#888] mb-4">
            Stop guessing.
          </p>
          <p className="text-[#888] mb-10">
            Upload a photo and get your care plan in 10 seconds.
          </p>

          <button className="btn-glow btn-green px-12 py-5 rounded-xl text-xl flex items-center gap-3 mx-auto">
            <span className="text-2xl">📷</span>
            Try It Free
          </button>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#555]">
          <span>
            Built by someone who killed a succulent.
          </span>
          <span className="text-base font-black text-[#888]">
            theai.<span className="text-[#22c55e]">garden</span>
          </span>
          <span>
            Privacy-friendly. We don&apos;t sell your data.
          </span>
        </div>
      </footer>
    </main>
  );
}
