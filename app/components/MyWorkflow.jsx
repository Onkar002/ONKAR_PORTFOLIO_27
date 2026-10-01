"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  PenTool,
  Code2,
  Gauge,
  Rocket,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const workflowData = [
  {
    number: "01",
    title: "Discover",
    label: "Understand",
    description:
      "I start by understanding the problem, business requirements, target users and the experience the product needs to deliver.",
    technologies: ["Research", "Requirements", "User Flow"],
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    label: "Structure",
    description:
      "I define the application structure, component architecture, user flow and development approach before writing the code.",
    technologies: ["Architecture", "Components", "Planning"],
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    label: "Build",
    description:
      "I turn the plan into clean, reusable and responsive interfaces using modern frontend technologies and development practices.",
    technologies: ["React", "Next.js", "Node.js"],
    icon: Code2,
  },
  {
    number: "04",
    title: "Optimize",
    label: "Refine",
    description:
      "I improve performance, responsiveness, accessibility and SEO to make the final experience fast and reliable.",
    technologies: ["Performance", "SEO", "Responsive UI"],
    icon: Gauge,
  },
  {
    number: "05",
    title: "Deploy",
    label: "Launch",
    description:
      "After testing and final checks, I deploy the application and make sure everything works smoothly in production.",
    technologies: ["Git", "Vercel", "Production"],
    icon: Rocket,
  },
];

function WorkflowCard({ item, index }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = item.icon;

  return (
    <div
      ref={cardRef}
      className={`relative flex gap-5 sm:gap-8 lg:gap-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{
        transition: "all 900ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Timeline Node */}
      <div className="relative z-20 flex w-12 shrink-0 justify-center sm:w-14">
        <div
          className="
            relative flex h-12 w-12 items-center justify-center
            rounded-full
            border border-white/50
            bg-[#09090b]
            shadow-[0_0_0_6px_#09090b]
            transition-all duration-500
            group-hover:border-white/30
            sm:h-14 sm:w-14
          "
        >
          {/* Inner glow */}
          <div
            className="
              absolute inset-1 rounded-full
              bg-gradient-to-br
              from-white/[0.10]
              via-white/[0.02]
              to-transparent
            "
          />

          <Icon
            className="relative z-10 text-zinc-400 transition-all duration-500 group-hover:text-white"
            size={20}
            strokeWidth={1.5}
          />

          {/* Small active dot */}
          <span
            className="
              absolute -right-0.5 -top-0.5
              h-2.5 w-2.5 rounded-full
              bg-white
              opacity-0
              shadow-[0_0_15px_rgba(255,255,255,0.8)]
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* Card */}
      <div className="group w-full pb-12 sm:pb-16 lg:pb-20">
        {/* Small heading */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-600">
            {item.number}
          </span>

          <span className="h-px w-8 bg-zinc-800" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
            {item.label}
          </span>
        </div>

        {/* Main Card */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-white/[0.50]
            bg-white/[0.025]
            backdrop-blur-xl
            transition-all duration-500
            hover:-translate-y-1
            hover:border-white/[0.16]
            hover:bg-white/[0.045]
            hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          "
        >
          {/* Card gradient */}
          <div
            className="
              pointer-events-none absolute
              -right-20 -top-20
              h-48 w-48
              rounded-full
              bg-white/[0.035]
              blur-3xl
              transition-all duration-700
              group-hover:bg-white/[0.07]
            "
          />

          {/* Top shine */}
          <div
            className="
              absolute left-0 right-0 top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
              {/* Left */}
              <div className="max-w-2xl">
                <h3
                  className="
                    text-3xl font-medium
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4 max-w-xl
                    text-sm leading-7
                    text-zinc-500
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* Right icon */}
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  transition-all duration-500
                  group-hover:border-white/20
                  group-hover:bg-white
                "
              >
                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-500
                    transition-all duration-500
                    group-hover:text-black
                  "
                />
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border border-white/[0.07]
                    bg-black/20
                    px-3.5 py-2
                    text-[11px]
                    font-medium
                    tracking-wide
                    text-zinc-500
                    transition-all duration-300
                    hover:border-white/20
                    hover:text-white
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyWorkflow() {
  return (
    <section
      id="workflow"
      className="
        relative
        overflow-hidden
        bg-[#09090b]
        px-5 py-24
        sm:px-8 sm:py-28
        md:px-12 md:py-32
        lg:px-20 lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Main ambient glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-[600px] w-[600px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.025]
          blur-[140px]
        "
      />

      {/* Left glow */}
      <div
        className="
          pointer-events-none absolute
          -left-40 top-[40%]
          h-80 w-80
          rounded-full
          bg-white/[0.015]
          blur-[100px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-6xl">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mb-20 max-w-4xl sm:mb-24 md:mb-28 lg:mb-32">
          {/* Label */}
          <div className="mb-7 flex items-center gap-3">
            <div className="relative h-px w-10 overflow-hidden bg-zinc-800">
              <div
                className="
                  absolute inset-y-0 left-0
                  w-1/2
                  bg-white/70
                "
              />
            </div>

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              My Workflow
            </span>

            <Sparkles
              size={13}
              strokeWidth={1.5}
              className="text-zinc-700"
            />
          </div>

          {/* Heading */}
          <h2
            className="
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.055em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[clamp(5rem,9vw,8rem)]
            "
          >
            From idea
            <br />
            <span
              className="
                bg-gradient-to-r
                from-white
                via-zinc-500
                to-zinc-800
                bg-clip-text
                text-transparent
              "
            >
              to production.
            </span>
          </h2>

          {/* Description */}
          <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-start sm:gap-10">
            <div className="h-px w-10 bg-zinc-700 sm:mt-3" />

            <p
              className="
                max-w-2xl
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
                sm:leading-8
              "
            >
              A simple and structured approach to turning ideas into
              fast, scalable and user-friendly digital experiences.
              Every project moves through a clear process — from
              understanding the problem to delivering the final product.
            </p>
          </div>
        </div>

        {/* =================================================
            TIMELINE
        ================================================== */}

        <div className="relative">
          {/* Main timeline */}
          <div
            className="
              absolute
              bottom-20
              left-[24px]
              top-0
              w-px
              bg-gradient-to-b
              from-white/30
              via-white/10
              to-transparent
              sm:left-[28px]
            "
          />

          {/* Animated timeline glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-[22px]
              top-0
              h-36
              w-[5px]
              rounded-full
              bg-gradient-to-b
              from-white/40
              via-white/10
              to-transparent
              blur-[5px]
              sm:left-[26px]
            "
          />

          {/* Timeline items */}
          {workflowData.map((item, index) => (
            <WorkflowCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            relative
            mt-4
            overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-white/[0.02]
          "
        >
          {/* CTA glow */}
          <div
            className="
              pointer-events-none absolute
              right-0 top-1/2
              h-40 w-40
              -translate-y-1/2
              rounded-full
              bg-white/[0.90]
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex flex-col
              gap-6
              p-6
              sm:p-8
              md:flex-row
              md:items-center
              md:justify-between
              md:p-10
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-zinc-600
                "
              >
                Next step
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-medium
                  tracking-tight
                  text-white
                  sm:text-2xl
                "
              >
                Have an idea in mind?
              </h3>
            </div>

            <a
              href="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                border border-white/50
                bg-white
                px-5 py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:bg-zinc-200
                hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]
              "
            >
              Let's build it

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}