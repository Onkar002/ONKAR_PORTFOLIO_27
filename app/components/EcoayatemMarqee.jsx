"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
  SiGithub,
  SiFigma,
  SiFramer,
  SiGreensock,
  SiMysql,
  SiLinux,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function EcoSystemMarquee() {
  const stack = [
    // =========================
    // FRONTEND DEVELOPMENT
    // =========================
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#FFFFFF",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "#7952B3",
    },

    // =========================
    // WEB DEVELOPMENT
    // =========================
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#FFFFFF",
    },
    {
      name: "REST API",
      icon: SiPostman,
      color: "#FF6C37",
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "#646CFF",
    },

    // =========================
    // DATABASE
    // =========================
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
    },

    // =========================
    // UI / ANIMATION
    // =========================
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "#FFFFFF",
    },
    {
      name: "GSAP",
      icon: SiGreensock,
      color: "#88CE02",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
    },

    // =========================
    // DEVELOPMENT TOOLS
    // =========================
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "#FFFFFF",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      color: "#007ACC",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
    },

    // =========================
    // BACKEND / SERVER
    // =========================
    {
      name: "PHP",
      icon: FaPhp,
      color: "#777BB4",
    },

    // =========================
    // ENVIRONMENT
    // =========================
    {
      name: "Linux",
      icon: SiLinux,
      color: "#FCC624",
    },
  ];

  // Duplicate data for seamless infinite scrolling
  const row1 = [...stack, ...stack];
  const row2 = [...stack, ...stack];

  // =========================
  // MARQUEE ITEM
  // =========================
  const Item = ({ item }) => {
    const Icon = item.icon;

    return (
      <div className="group flex items-center gap-4 min-w-max px-8 md:px-10">
        <Icon
          size={48}
          color={item.color}
          className="transition-all duration-300 group-hover:scale-110"
        />

        <span className="text-2xl md:text-3xl font-semibold text-zinc-400 whitespace-nowrap transition-colors duration-300 group-hover:text-white">
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-10">
      {/* =========================
          SECTION HEADER
      ========================= */}
      <div className="mx-auto max-w-7xl px-6">
        <h4 className="mb-16 text-xl font-bold uppercase tracking-[6px] text-zinc-500 md:mb-20">
          Tech Stack & Ecosystem
        </h4>
      </div>

      {/* =========================
          LEFT MOVING ROW
      ========================= */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

        <div className="marqueeLeft flex w-max">
          {row1.map((item, index) => (
            <Item key={`left-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* =========================
          RIGHT MOVING ROW
      ========================= */}
      <div className="relative mt-16 overflow-hidden md:mt-20">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

        <div className="marqueeRight flex w-max">
          {row2.map((item, index) => (
            <Item key={`right-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* =========================
          CSS ANIMATION
      ========================= */}
      <style jsx>{`
        .marqueeLeft,
        .marqueeRight {
          width: max-content;
          will-change: transform;
        }

        /* Left → Right content movement */
        .marqueeLeft {
          animation: marqueeLeft 35s linear infinite;
        }

        /* Right → Left content movement */
        .marqueeRight {
          animation: marqueeRight 35s linear infinite;
        }

        /* Pause animation on hover */
        .marqueeLeft:hover,
        .marqueeRight:hover {
          animation-play-state: paused;
        }

        /* =========================
           LEFT ANIMATION
        ========================= */
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================
           RIGHT ANIMATION
        ========================= */
        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        /* =========================
           TABLET
        ========================= */
        @media (max-width: 1024px) {
          .marqueeLeft,
          .marqueeRight {
            animation-duration: 28s;
          }
        }

        /* =========================
           MOBILE
        ========================= */
        @media (max-width: 768px) {
          .marqueeLeft,
          .marqueeRight {
            animation-duration: 22s;
          }

          .marqueeLeft span,
          .marqueeRight span {
            font-size: 20px;
          }

          .marqueeLeft svg,
          .marqueeRight svg {
            width: 36px;
            height: 36px;
          }

          .marqueeLeft > div,
          .marqueeRight > div {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */
        @media (max-width: 480px) {
          .marqueeLeft,
          .marqueeRight {
            animation-duration: 18s;
          }

          .marqueeLeft span,
          .marqueeRight span {
            font-size: 18px;
          }

          .marqueeLeft svg,
          .marqueeRight svg {
            width: 32px;
            height: 32px;
          }
        }

        /* =========================
           REDUCE MOTION
        ========================= */
        @media (prefers-reduced-motion: reduce) {
          .marqueeLeft,
          .marqueeRight {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}