"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";

/* ===================== EDIT YOUR LINKS HERE ===================== */

const EMAIL = "your@email.com";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const aboutLinks = [
  { label: "About me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
];

const socialLinks = [
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
];

const marquee = [
  "OPEN TO OPPORTUNITIES",
  "FRONTEND DEVELOPER",
  "REACT.JS",
  "NEXT.JS",
  "UI / UX",
  "CREATIVE CODING",
  "GSAP",
  "TAILWIND CSS",
];

const linkClass =
  "text-2xl sm:text-3xl font-semibold transition-colors duration-300 hover:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function FooterPage() {
  const router = useRouter();
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#030507] text-white">
        {/* ===================== MARQUEE ===================== */}

        <div className="overflow-hidden border-y border-white/10 py-4 md:py-5">
          <div className="marquee">
            <div className="marquee-content">
              {Array.from({ length: 8 }).map((_, repeat) =>
                marquee.map((item, index) => (
                  <div
                    key={`${repeat}-${index}`}
                    className="flex items-center shrink-0 whitespace-nowrap px-5 md:px-8 uppercase tracking-[3px] md:tracking-[4px] text-white/70 text-xs sm:text-sm md:text-base"
                  >
                    <span>{item}</span>
                    <span className="ml-5 md:ml-8 text-white/30 text-lg md:text-xl">
                      ✦
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* ===================== CLOSE ===================== */}

        <button
          onClick={handleClose}
          aria-label="Close"
          className="fixed top-20 right-4 sm:top-24 sm:right-6 md:absolute md:top-10 md:right-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300 z-50"
        >
          <X className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* ===================== CONTENT ===================== */}

        <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-16 md:pt-24 pb-14 md:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 sm:gap-x-10 sm:gap-y-14 xl:gap-16">
            {/* Links */}
            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-6 md:mb-8">
                Links
              </h5>

              <nav className="space-y-4 md:space-y-5">
                {pageLinks.map((item) => (
                  <div key={item.label}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </div>
                ))}

                {/* About with dropdown */}
                <div>
                  <button
                    type="button"
                    onClick={() => setAboutOpen((v) => !v)}
                    aria-expanded={aboutOpen}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className={linkClass}>About</span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      aboutOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 border-l border-white/15 pl-4">
                        {aboutLinks.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="text-lg text-white/60 hover:text-white transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-6 md:mb-8">
                Social
              </h5>

              <div className="space-y-4 md:space-y-5">
                {socialLinks.map((item) => {
                  const isMail = item.href.startsWith("mailto:");
                  return (
                    <div key={item.label}>
                      <a
                        href={item.href}
                        {...(isMail
                          ? {}
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className={`${linkClass} inline-flex items-center gap-2 group`}
                      >
                        {item.label}
                        <ArrowUpRight className="w-5 h-5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-6 md:mb-8">
                Location
              </h5>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Pune,Maharashtra,India"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-400 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-semibold">
                  Pune, Maharashtra
                </p>
                <p className="text-2xl sm:text-3xl font-semibold mt-3 md:mt-4">
                  India
                </p>
              </a>
            </div>

            {/* Version */}
            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-6 md:mb-8">
                Version
              </h5>

              <p className="text-2xl sm:text-3xl font-semibold">
                2026 © Edition
              </p>
            </div>
          </div>
        </div>

        {/* ===================== BIG TITLE ===================== */}

        <div className="relative w-full overflow-hidden pointer-events-none mt-6 md:mt-10">
          <h1 className="whitespace-nowrap uppercase font-black leading-[0.85] text-white tracking-[-0.06em] pl-3 sm:pl-4 text-[26vw] xl:text-[360px]">
            ONKAR
          </h1>
        </div>
      </section>

      {/* ===================== MARQUEE CSS ===================== */}

      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}