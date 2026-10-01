"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, X, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

import profileimg from "../../public/profileimg.jpeg";

/* ================================================================
   COLOR PALETTE
   ink      #0f1218  -> card background
   surface  #181c26  -> inner cards / buttons
   text     #f3f1ec  -> headings
   muted    #a5acbb  -> body text
   subtle   #727a8b  -> small labels
   accent   #8b9bff  -> tab, highlights, hover states
   live     #4ade80  -> "available" status dot only
================================================================ */

export default function AvailabilityBar() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  /* Show bar only while hero is visible */
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom > 120) {
        setShowBar(true);
      } else {
        setShowBar(false);
        setOpen(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Escape key (only listens while open) */
  useEffect(() => {
    if (!open) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  /* Lock body scroll on mobile while open */
  useEffect(() => {
    if (open && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!showBar) return null;

  return (
    <>
      {/* ================= FLOATING TAB ================= */}
      <div className="fixed left-0 top-1/2 z-[90] -translate-y-1/2">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open availability information"
          aria-expanded={open}
          className="
            group relative flex h-[220px] w-[42px] items-center justify-center
            overflow-visible rounded-r-[22px] border border-l-0 border-[#8b9bff]/40
            bg-white shadow-[0_20px_60px_rgba(139,155,255,0.35)]
            transition-all duration-500 hover:w-[48px]
            sm:h-[260px] sm:w-[44px]
            md:h-[310px] md:w-[46px] md:rounded-r-[26px] md:hover:w-[52px]
          "
        >
          {/* Moving shine */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-r-[22px]">
            <span
              className="
                absolute -left-[100%] top-0 h-full w-[80%] rotate-[15deg]
                bg-gradient-to-r from-transparent via-[#8b9bff]/20 to-transparent
                transition-all duration-1000 group-hover:left-[140%]
              "
            />
          </span>

          {/* Vertical label */}
          <span
            className="
              relative z-10 whitespace-nowrap text-[8px] font-bold uppercase
              tracking-[2.5px] text-[#0f1218]
              sm:text-[9px] sm:tracking-[3px]
              md:text-[10px] md:tracking-[3.5px]
            "
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Available For Opportunity
          </span>

          {/* Arrow button */}
          <span
            className="
              absolute right-[-13px] top-1/2 z-20 flex h-8 w-8 -translate-y-1/2
              items-center justify-center rounded-full border border-[#8b9bff]/50
              bg-[#0f1218] text-[#8b9bff] shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              transition-all duration-500 group-hover:scale-110
              sm:h-9 sm:w-9
              md:right-[-15px] md:h-10 md:w-10
            "
          >
            <ChevronRight
              size={17}
              strokeWidth={1.7}
              className={`transition-transform duration-500 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </span>
        </button>
      </div>

      {/* ================= MOBILE BACKDROP ================= */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`
          fixed inset-0 z-[80] bg-[#05070b]/80 backdrop-blur-xl
          transition-all duration-500 md:hidden
          ${open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}
        `}
      />

      {/* ================= POPUP ================= */}
      <div
        aria-hidden={!open}
        className={`
          fixed z-[85] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          inset-x-3 bottom-3
          md:inset-auto md:left-[58px] md:top-1/2 md:-translate-y-1/2
          lg:left-[72px]
          ${
            open
              ? "visible pointer-events-auto translate-y-0 opacity-100"
              : "invisible pointer-events-none translate-y-10 opacity-0 md:-translate-x-12 md:translate-y-0"
          }
        `}
      >
        {/* MAIN CARD */}
        <div
          className="
            group/card relative mx-auto w-full max-w-[580px]
            max-h-[calc(100dvh-24px)] overflow-y-auto
            rounded-[30px] border border-[#8b9bff]/20 bg-[#0f1218]
            shadow-[0_40px_140px_rgba(0,0,0,0.7)]
            sm:rounded-[34px]
            md:max-h-none md:w-[760px] md:max-w-none md:overflow-hidden md:rounded-[38px]
            lg:w-[900px]
            xl:w-[980px]
          "
        >
          {/* Light effects */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#8b9bff]/[0.12] blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#5b6cff]/[0.08] blur-[110px]" />

          {/* Inner border */}
          <div className="pointer-events-none absolute inset-[1px] z-30 rounded-[29px] border border-white/[0.04] sm:rounded-[33px] md:rounded-[37px]" />

          {/* MOBILE CLOSE */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close availability popup"
            className="
              absolute right-4 top-4 z-40 flex h-10 w-10 items-center justify-center
              rounded-full border border-white/10 bg-[#0f1218]/70 text-[#c7cdda]
              backdrop-blur-xl transition-all duration-300
              hover:rotate-90 hover:bg-[#8b9bff] hover:text-[#0f1218]
              md:hidden
            "
          >
            <X size={17} />
          </button>

          {/* MAIN FLEX */}
          <div className="relative md:flex md:min-h-[500px]">
            {/* DESKTOP IMAGE */}
            <div className="relative hidden overflow-hidden md:block md:w-[300px] md:shrink-0 lg:w-[350px] xl:w-[390px]">
              <Image
                src={profileimg}
                alt="Onkar Pawar Profile"
                fill
                sizes="390px"
                className="object-cover object-center grayscale transition-all duration-1000 group-hover/card:scale-[1.035]"
              />

              {/* Moving shine over the image */}
              <span className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <span
                  className="
                    absolute -left-[100%] top-0 h-full w-[80%] rotate-[15deg]
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    transition-all duration-1000 group-hover/card:left-[140%]
                  "
                />
              </span>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0f1218]/10 to-[#0f1218]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1218]/85 via-transparent to-[#8b9bff]/10" />

              {/* Image frame */}
              <div className="absolute inset-5 rounded-[24px] border border-[#8b9bff]/25" />

              {/* Bottom profile label */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[3px] text-white/70">
                    Based in India
                  </p>
                  <p className="mt-1 text-sm font-medium tracking-wide text-white">
                    Frontend Developer
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#0f1218]/70 px-3 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-60" />
                    <span className="relative h-2 w-2 rounded-full bg-[#4ade80]" />
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[1.5px] text-white">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE IMAGE */}
            <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[250px] md:hidden">
              <Image
                src={profileimg}
                alt="Onkar Pawar Profile"
                fill
                sizes="100vw"
                className="object-cover object-center grayscale"
              />
              {/* FIX: was from-[#ffffff] which faded the image to white */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1218] via-[#0f1218]/10 to-[#8b9bff]/15" />
              <div className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[3px] text-white/80">
                Frontend Developer
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
                relative flex flex-1 flex-col justify-center px-6 pb-7 pt-6
                sm:px-8 sm:pb-8
                md:px-8 md:py-8
                lg:px-10 lg:py-10
              "
            >
              {/* Desktop close */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close availability popup"
                className="
                  absolute right-7 top-7 hidden h-10 w-10 items-center justify-center
                  rounded-full border border-white/10 bg-[#181c26] text-[#a5acbb]
                  transition-all duration-300
                  hover:rotate-90 hover:border-[#8b9bff] hover:bg-[#8b9bff] hover:text-[#0f1218]
                  md:flex
                "
              >
                <X size={17} />
              </button>

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8b9bff]/40 bg-[#8b9bff]/10 text-[#8b9bff]">
                  <Sparkles size={12} />
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8b9bff] sm:text-[10px]">
                  Let&apos;s work together
                </span>
              </div>

              {/* Heading — FIX: added <br /> so it doesn't render "OnkarPawar" */}
              <h2
                className="
                  max-w-[560px] text-[42px] font-semibold leading-[0.95]
                  tracking-[-2.8px] text-[#f3f1ec]
                  sm:text-[50px] md:text-[54px] lg:text-[64px]
                "
              >
                Onkar
                <br />
                <span className="text-[#8b9bff]">
                  Pawar<span className="text-[#f3f1ec]">.</span>
                </span>
              </h2>

              {/* Role */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#8b9bff]/60" />
                <p className="text-sm font-medium tracking-wide text-[#d5d9e3] sm:text-base">
                  React.js / Frontend Developer
                </p>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-[560px] text-[13px] leading-6 text-[#a5acbb] sm:text-sm sm:leading-7 md:mt-7 md:text-[15px]">
                I create modern digital experiences using{" "}
                <span className="text-[#f3f1ec]">React.js</span>,{" "}
                <span className="text-[#f3f1ec]">Next.js</span>,{" "}
                <span className="text-[#f3f1ec]">Tailwind CSS</span> and{" "}
                <span className="text-[#f3f1ec]">JavaScript</span> — with a strong
                focus on clean UI, performance and responsive design.
              </p>

              {/* Availability card */}
              <div
                className="
                  mt-7 flex w-full max-w-[540px] items-center justify-between
                  rounded-2xl border border-[#4ade80]/25 bg-[#4ade80]/[0.06]
                  px-4 py-3.5 backdrop-blur-xl sm:px-5
                "
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10">
                    <span className="h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#f3f1ec]">
                      Currently Available
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#a5acbb]">
                      Open to new opportunities
                    </p>
                  </div>
                </div>

                <ArrowUpRight size={18} className="text-[#4ade80]" />
              </div>

              {/* Divider */}
              <div className="my-7 h-px w-full max-w-[540px] bg-gradient-to-r from-[#8b9bff]/40 via-[#8b9bff]/10 to-transparent" />

              {/* Social */}
              <div>
                <div className="mb-3 flex max-w-[540px] items-center justify-between">
                  <p className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#8c94a6]">
                    Find me online
                  </p>
                  <span className="text-[9px] uppercase tracking-[2px] text-[#727a8b]">
                    04 Channels
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <SocialButton href="https://github.com/onkar002/" label="GitHub">
                    <FaGithub size={17} />
                  </SocialButton>

                  <SocialButton
                    href="https://www.linkedin.com/in/onkar-pawar-791557275/"
                    label="LinkedIn"
                  >
                    <FaLinkedinIn size={16} />
                  </SocialButton>

                  {/* TODO: replace with your real Instagram profile URL */}
                  <SocialButton href="https://www.instagram.com/" label="Instagram">
                    <FaInstagram size={17} />
                  </SocialButton>

                  {/* FIX: wa.me needs the country code (91 for India) */}
                  <SocialButton href="https://wa.me/917218227174" label="WhatsApp">
                    <FaWhatsapp size={17} />
                  </SocialButton>
                </div>
              </div>

              {/* Footer micro text */}
              <div className="mt-7 flex items-center gap-2 text-[9px] uppercase tracking-[2px] text-[#8c94a6]">
                <span className="h-px w-5 bg-[#8b9bff]/50" />
                <span>Available for freelance &amp; full-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================================================================
   SOCIAL BUTTON
================================================================ */

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="
        group relative flex h-11 w-11 items-center justify-center overflow-hidden
        rounded-full border border-white/10 bg-[#181c26] text-[#c7cdda]
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-1 hover:scale-105 hover:border-[#8b9bff] hover:bg-[#8b9bff]
        hover:text-[#0f1218] hover:shadow-[0_15px_40px_rgba(139,155,255,0.35)]
        sm:h-12 sm:w-12
      "
    >
      {/* Hover shine */}
      <span
        className="
          absolute inset-0 -translate-x-full bg-gradient-to-r
          from-transparent via-white/40 to-transparent
          transition-transform duration-700 group-hover:translate-x-full
        "
      />

      {/* Icon */}
      <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">
        {children}
      </span>
    </a>
  );
}