import UploadButton from "@/components/UploadButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ======================== NAV ======================== */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 bg-[#060606]/70 backdrop-blur-xl border-b border-white/[0.03]">
        <span className="text-sm font-medium tracking-[0.15em] uppercase text-[#888]">
          stop<span className="text-[#ff2020] font-bold">killing</span>plants
        </span>
        <UploadButton className="btn-glow px-6 py-2.5 rounded-full text-xs">
          <span className="flex items-center gap-2">
            Upload Photo
          </span>
        </UploadButton>
      </nav>

      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(255,32,32,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,197,94,0.03)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Top label */}
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="accent-line" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#555]">
              Plant care, finally personalized
            </span>
          </div>

          {/* Main headline — left aligned for editorial feel */}
          <h1 className="hero-title mb-8 md:mb-10">
            Stop
            <br />
            <span className="kill-word">killing</span>
            <br />
            <span className="text-[#888]">your</span>
            <br />
            plants<span className="text-[#ff2020]">.</span>
          </h1>

          {/* Subheadline — serif italic contrast */}
          <div className="max-w-lg ml-0 md:ml-4 mb-12">
            <p className="font-serif text-2xl md:text-3xl text-[#999] leading-snug">
              Upload a photo.<br />
              Get a care plan in <span className="text-white">10 seconds</span>.
            </p>
          </div>

          {/* CTA cluster */}
          <div className="flex flex-col sm:flex-row items-start gap-5 ml-0 md:ml-4">
            <UploadButton className="btn-glow px-10 py-4 rounded-full text-sm">
              <span className="flex items-center gap-3">
                Upload Plant Photo
              </span>
            </UploadButton>
            <div className="flex flex-col gap-1">
              <span className="text-[#555] text-xs tracking-wide">No account required.</span>
              <span className="text-[#333] text-xs">Free. Takes 10 seconds.</span>
            </div>
          </div>

          {/* Trust line */}
          <p className="mt-20 md:mt-28 text-[#333] text-xs tracking-[0.15em] uppercase">
            Used by 137 plant parents who were tired of guessing
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3 text-[#333]">
          <div className="w-px h-12 bg-gradient-to-b from-[#333] to-transparent" />
          <span className="text-[10px] tracking-[0.3em] uppercase -rotate-90 origin-left translate-x-3">Scroll</span>
        </div>
      </section>

      {/* ======================== MARQUEE BREAK ======================== */}
      <div className="border-y border-white/[0.03] py-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center">
              {[
                "overwatering",
                "yellow leaves",
                "not enough light",
                "root rot",
                "dying slowly",
                "brown tips",
                "leggy growth",
                "drooping",
              ].map((word) => (
                <span key={`${i}-${word}`} className="mx-8 text-sm text-[#222] font-medium tracking-wide uppercase">
                  {word} <span className="text-[#ff2020]/30 mx-4">/</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ======================== PROBLEM ======================== */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Staggered headline */}
          <div className="mb-20 md:mb-28">
            <p className="text-xs tracking-[0.3em] uppercase text-[#ff2020] mb-6 flex items-center gap-4">
              <span className="accent-line" />
              The problem
            </p>
            <h2 className="section-title">
              You&apos;re not bad<br />
              at plants.
            </h2>
            <p className="font-serif text-3xl md:text-5xl italic text-[#444] mt-4 md:mt-6">
              You&apos;re just guessing.
            </p>
          </div>

          {/* Asymmetric question layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-20">
            {[
              { q: "Am I overwatering?", span: "md:col-span-5" },
              { q: "Why are the leaves yellow?", span: "md:col-span-7" },
              { q: "Is this enough light?", span: "md:col-span-4" },
              { q: "Do I need fertilizer?", span: "md:col-span-4" },
              { q: "Why did it look fine yesterday??", span: "md:col-span-4" },
            ].map(({ q, span }) => (
              <div key={q} className={`problem-card rounded-2xl px-7 py-6 ${span}`}>
                <span className="text-[#ff2020]/50 text-xs font-mono mr-3">?</span>
                <span className="text-[#777] text-sm">{q}</span>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="max-w-xl">
            <p className="text-lg text-[#555] leading-relaxed">
              Most plant advice online is generic.
            </p>
            <p className="text-lg font-semibold text-white mt-3 flex items-center gap-3">
              <span className="accent-line" />
              Your apartment isn&apos;t.
            </p>
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== HOW IT WORKS ======================== */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#555] mb-6 flex items-center gap-4">
            <span className="accent-line" />
            How it works
          </p>
          <h2 className="section-title mb-24 md:mb-32">
            Three steps.<br />
            <span className="font-serif italic text-[#444]">That&apos;s it.</span>
          </h2>

          <div className="space-y-20 md:space-y-0 md:grid md:grid-cols-3 md:gap-16">
            {[
              {
                num: "01",
                title: "Upload a photo",
                desc: "We identify your plant instantly. No searching, no guessing.",
              },
              {
                num: "02",
                title: "We check real guides",
                desc: "Trusted sources, summarized. Not Reddit threads from 2014.",
              },
              {
                num: "03",
                title: "Get your care plan",
                desc: "Watering, light, soil, fertilizer. Adjusted to your season.",
              },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="step-number">{step.num}</div>
                <h3 className="text-lg font-semibold mt-3 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Ghost text */}
          <div className="mt-20 md:mt-32 overflow-hidden">
            <p className="ghost-text">no more guessing</p>
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== WHAT YOU GET ======================== */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-end md:justify-between mb-20">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#22c55e] mb-6 flex items-center gap-4">
                <span className="accent-line !bg-[#22c55e]" />
                What you get
              </p>
              <h2 className="section-title">
                Everything your<br />
                <span className="font-serif italic text-[#22c55e]">plant needs.</span>
              </h2>
            </div>
            <p className="text-[#444] text-sm mt-6 md:mt-0 max-w-xs">
              Personalized to your plant, your climate, your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                label: "Light",
                title: "Light guidance",
                desc: "Exact placement recommendations for your specific space.",
              },
              {
                label: "Water",
                title: "Smart watering",
                desc: "Not \"once a week.\" Based on your climate and plant type.",
              },
              {
                label: "Soil",
                title: "Soil + fertilizer",
                desc: "When, what type, and how much. No more guessing ratios.",
              },
              {
                label: "Alerts",
                title: "Watering reminders",
                desc: "We notify you when it's actually time. Not on a generic schedule.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="problem-card rounded-2xl p-8 md:p-10 group"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#333] group-hover:text-[#22c55e] transition-colors">
                  {feature.label}
                </span>
                <h3 className="font-semibold text-xl mt-4 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== SOCIAL PROOF ======================== */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="md:grid md:grid-cols-12 md:gap-12">
            {/* Left side — label */}
            <div className="md:col-span-4 mb-12 md:mb-0">
              <p className="text-xs tracking-[0.3em] uppercase text-[#22c55e] mb-6 flex items-center gap-4">
                <span className="accent-line !bg-[#22c55e]" />
                Testimonials
              </p>
              <p className="font-serif text-3xl md:text-4xl italic text-[#444] leading-snug">
                Early users<br />say&hellip;
              </p>
              <p className="text-[#333] text-sm mt-8 tracking-wide">
                Over 300 plants analyzed this week.
              </p>
            </div>

            {/* Right side — quotes */}
            <div className="md:col-span-8 space-y-5">
              {[
                {
                  quote: "I didn't realize I was overwatering everything.",
                  author: "First-time plant owner",
                },
                {
                  quote: "This is way easier than Googling 10 different sites.",
                  author: "Busy professional, 6 plants",
                },
              ].map(({ quote, author }) => (
                <div
                  key={quote}
                  className="problem-card rounded-2xl p-8 md:p-10 relative"
                >
                  <span className="quote-mark">&ldquo;</span>
                  <p className="font-serif text-xl md:text-2xl italic text-[#bbb] leading-relaxed pt-6 pl-2">
                    {quote}
                  </p>
                  <p className="text-[#333] text-xs tracking-[0.15em] uppercase mt-6">{author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== WHO IT'S FOR ======================== */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-start md:justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#555] mb-6 flex items-center gap-4">
                <span className="accent-line" />
                Who it&apos;s for
              </p>
              <h2 className="section-title">
                Built for<br />
                <span className="font-serif italic text-[#555]">real people.</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-16">
            {[
              "Apartment plant owners",
              "Complete beginners",
              "Fiddle leaf fig killers",
              "Busy professionals",
              "The plant-anxious",
            ].map((tag) => (
              <span
                key={tag}
                className="tag-pill relative px-6 py-3.5 rounded-full text-[#888] text-sm cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-serif italic text-[#333] text-lg max-w-md">
            If you have 30+ plants and a humidity-controlled greenhouse,
            this probably isn&apos;t for you.
          </p>
        </div>
      </section>

      <div className="red-divider" />

      {/* ======================== FINAL CTA ======================== */}
      <section className="py-32 md:py-44 px-6 md:px-10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,197,94,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="section-title mb-6">
            Your plants<br />
            <span className="font-serif italic text-[#22c55e]">deserve better.</span>
          </h2>
          <p className="font-serif italic text-xl text-[#444] mb-12">
            Stop guessing. Upload a photo and get your care plan in 10 seconds.
          </p>

          <UploadButton className="btn-glow btn-green px-14 py-5 rounded-full text-sm mx-auto">
            <span className="flex items-center gap-3">
              Try It Free
            </span>
          </UploadButton>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer className="border-t border-white/[0.03] py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#333]">
          <span className="font-serif italic">
            Built by someone who killed a succulent.
          </span>
          <span className="text-sm font-medium tracking-[0.15em] uppercase text-[#444]">
            stop<span className="text-[#ff2020]">killing</span>plants<span className="text-[#333] font-normal">.xyz</span>
          </span>
          <span>
            Privacy-friendly. We don&apos;t sell your data.
          </span>
        </div>
      </footer>
    </main>
  );
}
