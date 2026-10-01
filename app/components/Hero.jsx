"use client";

import { Bot, Zap } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import AvailabilityBar from "../components/AvailabilityBar.jsx";

/* ---------- Config ---------- */

const SOCIALS = {
  linkedin: { label: "LinkedIn", href: "#", Icon: FaLinkedin },
  github: { label: "GitHub", href: "#", Icon: FaGithub },
  instagram: { label: "Instagram", href: "#", Icon: FaInstagram },
  whatsapp: { label: "WhatsApp", href: "#", Icon: FaWhatsapp },
};

const RESUME_URL = "/resume.pdf";

const BIG_TEXT_SIZE =
  "text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8rem]";

const BIG_ICON_SIZE =
  "shrink-0 w-[8vw] h-[8vw] sm:w-[7vw] sm:h-[7vw] md:w-[6vw] md:h-[6vw] lg:w-[5.5vw] lg:h-[5.5vw] xl:w-[5vw] xl:h-[5vw] max-w-[95px] max-h-[95px]";

/* ---------- Small components ---------- */

// Big heading text with a moving shine
function Shine({ children }) {
  return (
    <span className={`shine-text inline-block pb-[0.08em] ${BIG_TEXT_SIZE}`}>
      {children}
    </span>
  );
}

// Small text with the same moving shine
function ShineSmall({ as: Tag = "p", className = "", children }) {
  return <Tag className={`shine-small ${className}`}>{children}</Tag>;
}

// Single social icon
function SocialIcon({ name, size = 28, className = "" }) {
  const { label, href, Icon } = SOCIALS[name];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-gray-300 transition duration-300 hover:text-white hover:scale-110 ${className}`}
    >
      <Icon size={size} />
    </a>
  );
}

/* ---------- Hero ---------- */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black text-white pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Shine animation styles */}
      <style>{`
        .shine-text,
        .shine-small {
          background-image: linear-gradient(
            110deg,
            #374151 0%,
            #ffffff 35%,
            #ffffff 45%,
            #777777 50%,
            #ffffff 55%,
            #374151 100%
          );
          background-size: 250% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: shine-move 4s linear infinite;
        }

        .shine-small {
          background-size: 300% 100%;
          animation-duration: 6s;
        }

        @keyframes shine-move {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .shine-text,
          .shine-small { animation: none; background-position: 0 0; }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#111,transparent_35%),radial-gradient(circle_at_bottom_right,#1a1a1a,transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Desktop: top-left intro */}
        <div className="hidden lg:block absolute left-10 xl:left-40 top-10 max-w-[230px]">
          <ShineSmall className="uppercase tracking-[4px] xl:tracking-[5px] text-xs xl:text-sm leading-6 font-medium">
            Hi, I&apos;m Onkar Pawar.
            <br />
            Frontend Developer
            <br />
            Building Fast Modern
            <br />
            User-Centric Experiences.
          </ShineSmall>
        </div>

        {/* Desktop: right text */}
        <div className="hidden lg:block absolute right-10 xl:right-20 bottom-36 max-w-[270px] text-right">
          <ShineSmall className="uppercase tracking-[3px] text-xs xl:text-sm leading-6 font-medium">
            Open to all forms of collaboration, regardless of location and
            language.
          </ShineSmall>
        </div>

        {/* HERO CENTER */}
        <div className="relative flex min-h-[62vh] sm:min-h-[65vh] lg:min-h-[72vh] items-center justify-center">
          {/* Desktop social icons placed around the heading */}
          {/* LinkedIn: top-left of "WEB & UI" */}
          <SocialIcon
            name="linkedin"
            size={30}
            className="hidden lg:block absolute z-20 left-[22%] top-[6%]"
          />
          {/* GitHub: right of "WEB & UI" */}
          <SocialIcon
            name="github"
            size={30}
            className="hidden lg:block absolute z-20 right-[22%] top-[20%]"
          />
          {/* Instagram: right side, above the collaboration text */}
          <SocialIcon
            name="instagram"
            size={30}
            className="hidden lg:block absolute z-20 right-[4%] top-[62%]"
          />
          {/* WhatsApp: bottom-left, under "DEV" */}
          <SocialIcon
            name="whatsapp"
            size={30}
            className="hidden lg:block absolute z-20 left-[14%] bottom-[2%]"
          />

          <div className="w-full">
            <h1 className="font-black uppercase leading-[0.85] tracking-[-0.04em] text-center">
              {/* WEB & UI */}
              <span className="block">
                <Shine>WEB &amp; UI</Shine>
              </span>

              {/* FRONT ⚡ END */}
              <span className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                <Shine>FRONT</Shine>
                <Zap
                  className={`${BIG_ICON_SIZE} text-sky-400`}
                  strokeWidth={2.5}
                />
                <Shine>END</Shine>
              </span>

              {/* DEV 🤖 ELOPER */}
              <span className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                <Shine>DEV</Shine>
                <Bot
                  className={`${BIG_ICON_SIZE} text-yellow-400`}
                  strokeWidth={2.2}
                />
                <Shine>ELOPER</Shine>
              </span>
            </h1>

            {/* Mobile intro */}
            <div className="mt-8 block lg:hidden text-center">
              <ShineSmall className="mx-auto max-w-md uppercase tracking-[3px] text-[10px] sm:text-xs leading-5 font-medium">
                Hi, I&apos;m Onkar Pawar — Frontend Developer Building Fast,
                Modern &amp; User-Centric Web Experiences.
              </ShineSmall>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pb-10 sm:pb-12 lg:pb-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
            {/* Line */}
            <div className="flex-1 border-t border-white/15" />

            <div className="flex items-center justify-between lg:justify-end gap-5">
              {/* Location */}
              <ShineSmall className="uppercase tracking-[3px] sm:tracking-[5px] text-[9px] sm:text-xs font-semibold whitespace-nowrap">
                India, MH — 2026
              </ShineSmall>

              {/* Resume button */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
                className="group flex items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 hover:w-52 sm:hover:w-60 w-14 h-14 sm:w-16 sm:h-16"
              >
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:mr-3 font-bold uppercase tracking-[1px] text-xs sm:text-sm">
                  View Resume
                </span>

                <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 group-hover:translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14m0 0l6-6m-6 6l-6-6"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile social */}
          <div className="flex lg:hidden justify-center gap-8 mt-8">
            {Object.keys(SOCIALS).map((key) => (
              <SocialIcon key={key} name={key} size={24} />
            ))}
          </div>

          {/* Mobile collaboration */}
          <div className="block lg:hidden mt-6 text-center">
            <ShineSmall className="mx-auto max-w-sm uppercase tracking-[2px] text-[10px] sm:text-xs leading-5">
              Open to collaboration regardless of location and language.
            </ShineSmall>
          </div>
        </div>
      </div>

      {/* Availability Bar */}
      <AvailabilityBar />
    </section>
  );
}