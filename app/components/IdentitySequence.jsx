"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function IdentitySequence() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();

        const totalScroll = wrapper.offsetHeight - window.innerHeight;

        if (totalScroll <= 0) {
          ticking = false;
          return;
        }

        const progress = Math.min(
          1,
          Math.max(0, -rect.top / totalScroll)
        );

        /*
         * Calculate the actual horizontal distance.
         * This is more reliable than using a fixed 300vw.
         */
        const maxTranslate =
          track.scrollWidth - window.innerWidth;

        const translateX = progress * Math.max(0, maxTranslate);

        track.style.transform = `translate3d(-${translateX}px, 0, 0)`;

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* =====================================================
          HORIZONTAL SCROLL SECTION
      ====================================================== */}

      <div
        ref={wrapperRef}
        className="relative"
        style={{
          height: "300vh",
        }}
      >
        {/* Sticky viewport */}

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Horizontal Track */}

          <div
            ref={trackRef}
            className="flex h-screen"
            style={{
              width: "300vw",
              willChange: "transform",
            }}
          >
            {/* =================================================
                SLIDE 1 — FRONTEND DEVELOPER
            ================================================== */}

            <section
              className="
                relative
                flex
                h-screen
                w-screen
                shrink-0
                items-center
                justify-center
                bg-[#0d0d0d]
                px-5
                sm:px-8
                md:px-10
              "
            >
              {/* Background glow */}

              <div className="pointer-events-none absolute inset-0">
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[250px]
                    w-[250px]
                    sm:h-[350px]
                    sm:w-[350px]
                    md:h-[500px]
                    md:w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-lime-400/5
                    blur-[100px]
                  "
                />
              </div>

              {/* Content */}

              <div className="relative z-10 w-full text-center">
                <p
                  className="
                    mb-5
                    sm:mb-6
                    md:mb-8
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    uppercase
                    tracking-[4px]
                    sm:tracking-[6px]
                    md:tracking-[8px]
                    text-gray-500
                  "
                >
                  Creative Developer
                </p>

                <h1
                  className="
                    font-black
                    uppercase
                    leading-[0.85]
                    tracking-[-0.04em]
                    text-white
                    text-[15vw]
                    sm:text-[13vw]
                    md:text-[11vw]
                    lg:text-[9vw]
                  "
                >
                  FRONTEND
                </h1>

                <h1
                  className="
                    mt-2
                    sm:mt-3
                    md:mt-4
                    font-black
                    uppercase
                    leading-[0.85]
                    tracking-[-0.04em]
                    text-white
                    text-[15vw]
                    sm:text-[13vw]
                    md:text-[11vw]
                    lg:text-[9vw]
                  "
                >
                  DEVELOPER
                </h1>

                {/* Scroll indicator */}

                <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        uppercase
                        tracking-[3px]
                        text-gray-500
                      "
                    >
                      Scroll
                    </span>

                    <ArrowDown
                      className="
                        h-7
                        w-7
                        sm:h-8
                        sm:w-8
                        md:h-10
                        md:w-10
                        animate-bounce
                        text-lime-400
                      "
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                SLIDE 2 — ABOUT ME
            ================================================== */}

            <section
              className="
                relative
                flex
                h-screen
                w-screen
                shrink-0
                items-center
                justify-center
                bg-[#18181b]
                px-5
                sm:px-8
                md:px-10
              "
            >
              {/* Main button */}

              <div className="flex flex-col items-center">
                <button
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    sm:flex-row
                    sm:gap-5
                  "
                >
                  {/* Text */}

                  <div
                    className="
                      rounded-full
                      bg-lime-400
                      px-7
                      py-4
                      sm:px-8
                      sm:py-4
                      md:px-10
                      md:py-5
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-semibold
                      text-black
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    About Me
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      sm:h-16
                      sm:w-16
                      md:h-20
                      md:w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-lime-400
                      text-black
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-6
                        w-6
                        sm:h-7
                        sm:w-7
                        md:h-[34px]
                        md:w-[34px]
                      "
                    />
                  </div>
                </button>
              </div>

              {/* Bottom scroll indicator */}

              <div
                className="
                  absolute
                  bottom-6
                  left-5
                  sm:left-8
                  md:left-10
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-gray-500
                "
              >
                <ArrowDown
                  className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                />

                <span>Scroll →</span>
              </div>

              {/* Slide number */}

              <span
                className="
                  absolute
                  right-5
                  top-6
                  sm:right-8
                  md:right-10
                  text-[10px]
                  sm:text-xs
                  tracking-[3px]
                  text-gray-600
                "
              >
                02 / 03
              </span>
            </section>

            {/* =================================================
                SLIDE 3 — CONTACT
            ================================================== */}

            <section
              className="
                relative
                flex
                h-screen
                w-screen
                shrink-0
                items-center
                justify-center
                bg-black
                px-5
                sm:px-8
                md:px-10
              "
            >
              {/* Content */}

              <div className="relative z-10 w-full max-w-5xl text-center">
                <p
                  className="
                    mb-5
                    sm:mb-6
                    md:mb-8
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    uppercase
                    tracking-[4px]
                    sm:tracking-[6px]
                    text-gray-500
                  "
                >
                  Let's Create Something
                </p>

                <h2
                  className="
                    font-black
                    uppercase
                    leading-[0.9]
                    tracking-[-0.04em]
                    text-white
                    text-[13vw]
                    sm:text-[11vw]
                    md:text-[9vw]
                    lg:text-[7vw]
                  "
                >
                  LET'S WORK
                </h2>

                <h2
                  className="
                    mt-2
                    sm:mt-3
                    md:mt-4
                    font-black
                    uppercase
                    leading-[0.9]
                    tracking-[-0.04em]
                    text-gray-500
                    text-[13vw]
                    sm:text-[11vw]
                    md:text-[9vw]
                    lg:text-[7vw]
                  "
                >
                  TOGETHER
                </h2>

                {/* Contact button */}

                <div className="mt-8 sm:mt-10 md:mt-12">
                  <button
                    className="
                      rounded-full
                      bg-lime-400
                      px-7
                      py-4
                      sm:px-9
                      sm:py-4
                      md:px-10
                      md:py-5
                      text-base
                      sm:text-lg
                      md:text-2xl
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-lime-300
                    "
                  >
                    Contact Me
                  </button>
                </div>
              </div>

              {/* Slide number */}

              <span
                className="
                  absolute
                  right-5
                  top-6
                  sm:right-8
                  md:right-10
                  text-[10px]
                  sm:text-xs
                  tracking-[3px]
                  text-gray-600
                "
              >
                03 / 03
              </span>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}