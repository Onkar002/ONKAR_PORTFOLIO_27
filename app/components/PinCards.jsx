"use client";


export default function PinCards() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      {/* ================= Hero Image ================= */}

      {/* ================= Content ================= */}

      <section className="relative z-10 bg-black min-h-screen px-[8vw]">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Building
              <br />
              Scalable
              <br />
              Systems Where
              <br />
              <span className="italic font-light">Intelligence</span>
              <br />
              Meets Engineering.
            </h1>
          </div>

          <div className="flex lg:justify-end">
            <p className="max-w-xl text-zinc-400 leading-9 text-xl">
              I'm a Frontend Developer focused on building modern, responsive,
              and high-performance web applications using React.js, Next.js,
              JavaScript, and Tailwind CSS.
              <br />
              <br />I combine thoughtful design, clean architecture, and
              optimized performance to create user-centric digital experiences
              that are scalable, accessible, and production-ready.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
