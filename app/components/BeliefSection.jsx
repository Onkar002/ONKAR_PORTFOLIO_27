"use client";

export default function BeliefSection() {
  return (
    <section
      id="belief"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "clamp(16px, 2vw, 24px) clamp(16px, 2vw, 24px)",
        }}
      />

      {/* ================= RESPONSIVE BORDER ================= */}
      <div className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-6 lg:inset-8 border border-red-600/40" />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1800px]
          px-6
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
          py-16
          sm:py-20
          md:py-24
          lg:py-28
          xl:py-32
        "
      >
        {/* ================= TOP ROW ================= */}
        <div
          className="
            flex
            flex-col
            items-start
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
            mb-14
            sm:mb-16
            md:mb-20
            lg:mb-24
          "
        >
          {/* Label */}
          <p
            className="
              uppercase
              tracking-[4px]
              sm:tracking-[5px]
              md:tracking-[6px]
              font-semibold
              text-xs
              sm:text-sm
              text-red-500
            "
          >
            I BELIEVE
          </p>

          {/* Description */}
          <p
            className="
              uppercase
              tracking-[2px]
              sm:tracking-[3px]
              md:tracking-[4px]
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              text-gray-500
            "
          >
            Building Modern Web Experiences
          </p>
        </div>

        {/* ================= MAIN HEADING ================= */}
        <div className="relative">
          {/* LEFT QUOTE */}
          <span
            className="
              pointer-events-none
              absolute
              -left-3
              sm:-left-5
              md:-left-6
              lg:-left-10
              -top-5
              sm:-top-8
              lg:-top-12
              select-none
              font-bold
              leading-none
              text-gray-800
              text-[70px]
              sm:text-[90px]
              md:text-[110px]
              lg:text-[140px]
              xl:text-[170px]
            "
          >
            "
          </span>

          {/* RIGHT QUOTE */}
          <span
            className="
              pointer-events-none
              absolute
              right-0
              -bottom-10
              sm:-bottom-14
              md:-bottom-16
              lg:-bottom-20
              select-none
              font-bold
              leading-none
              text-gray-800
              text-[70px]
              sm:text-[90px]
              md:text-[110px]
              lg:text-[140px]
              xl:text-[170px]
            "
          >
            "
          </span>

          {/* HEADING */}
          <h1
            className="
              relative
              z-10
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.04em]
            "
          >
            {/* FIRST LINE */}

            <span
              className="
                block
                text-[11vw]
                sm:text-[9vw]
                md:text-[8vw]
                lg:text-[7vw]
                xl:text-[6.5vw]
                2xl:text-[6rem]
              "
            >
              <span className="text-white">
                BUILD EXPERIENCES...
              </span>{" "}
              <span className="text-gray-500">
                CREATE IMPACT...
              </span>
            </span>

            {/* SECOND LINE */}

            <span
              className="
                mt-4
                sm:mt-5
                md:mt-6
                block
                text-[11vw]
                sm:text-[9vw]
                md:text-[8vw]
                lg:text-[7vw]
                xl:text-[6.5vw]
                2xl:text-[6rem]
              "
            >
              <span className="text-white">
                BUILD
              </span>{" "}
              <span
                className="
                  italic
                  font-light
                  normal-case
                  text-gray-300
                "
              >
                SOLUTIONS...
              </span>
            </span>
          </h1>
        </div>

        {/* ================= DIVIDER ================= */}
        <div
          className="
            my-14
            sm:my-16
            md:my-20
            lg:my-24
            border-t
            border-white/10
          "
        />

        {/* ================= BOTTOM GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            sm:gap-14
            md:gap-16
            lg:grid-cols-3
            lg:gap-12
            xl:gap-20
            2xl:gap-28
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div>
            <p
              className="
                max-w-xl
                text-lg
                sm:text-xl
                md:text-2xl
                leading-relaxed
                text-gray-300
              "
            >
              I build modern, scalable web applications that
              combine clean code,{" "}
              <span className="font-serif italic text-white">
                responsive design,
              </span>{" "}
              and exceptional user experiences.
            </p>
          </div>

          {/* ================= CENTER COLUMN ================= */}
          <div>
            <h3
              className="
                mb-6
                sm:mb-7
                md:mb-8
                text-lg
                sm:text-xl
                uppercase
                tracking-[2px]
                sm:tracking-[3px]
                font-bold
              "
            >
              Scope & Platform
            </h3>

            {/* Divider */}
            <div className="mb-6 sm:mb-8 h-px w-full bg-white/10" />

            <p
              className="
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                sm:leading-8
                text-gray-400
              "
            >
              Focused on modern frontend development,
              responsive user interfaces, REST API integration,
              reusable components, performance optimization,
              and scalable web applications.
            </p>

            <p
              className="
                mt-6
                sm:mt-8
                text-sm
                sm:text-base
                italic
                text-red-500
              "
            >
              Connecting intelligence with real-world software.
            </p>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div
            className="
              hidden
              lg:block
              self-end
            "
          >
            <div className="flex flex-col items-end gap-5">
              <span className="h-px w-24 bg-red-600/60" />

              <p
                className="
                  max-w-[220px]
                  text-right
                  text-xs
                  uppercase
                  tracking-[3px]
                  leading-6
                  text-gray-600
                "
              >
                Design.
                <br />
                Develop.
                <br />
                Deliver.
              </p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE BOTTOM ================= */}
        <div className="mt-14 flex lg:hidden items-center gap-4">
          <div className="h-px flex-1 bg-red-600/40" />

          <span
            className="
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[3px]
              text-gray-600
              whitespace-nowrap
            "
          >
            Design · Develop · Deliver
          </span>
        </div>
      </div>
    </section>
  );
}