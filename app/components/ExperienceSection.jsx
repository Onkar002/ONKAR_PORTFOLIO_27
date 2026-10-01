"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Circle,
  ChevronRight,
  MapPin,
  ArrowUpRight,
  Terminal,
  Briefcase,
  GraduationCap,
  Sparkles,
  Database,
  Layers3,
  Zap,
  Code2,
  Cpu,
  GitBranch,
  Command,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const technologies = [
  { name: "React.js", color: "cyan" },
  { name: "Next.js", color: "violet" },
  { name: "JavaScript", color: "amber" },
  { name: "Tailwind CSS", color: "cyan" },
  { name: "Node.js", color: "emerald" },
  { name: "MongoDB", color: "emerald" },
];

const careerStats = [
  {
    number: "1.5+",
    label: "Years Experience",
    icon: Zap,
    accent: "cyan",
  },
  {
    number: "06+",
    label: "Core Technologies",
    icon: Layers3,
    accent: "violet",
  },
  {
    number: "∞",
    label: "Learning Mode",
    icon: Sparkles,
    accent: "emerald",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ExperienceTerminal() {
  return (
    <section
      id="experience"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#02040a]
        px-5
        py-24
        text-white
        sm:px-8
        md:px-12
        lg:px-20
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/[0.05]
          blur-[160px]
        "
      />

      {/* Violet glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[0%]
          top-[30%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/[0.04]
          blur-[180px]
        "
      />

      {/* Emerald glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-emerald-500/[0.03]
          blur-[160px]
        "
      />

      {/* Noise overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.015]
          [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 max-w-4xl sm:mb-20"
        >
          {/* Section label */}
          <div className="mb-6 flex items-center gap-3">
            <div className="relative h-px w-12 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-violet-400
                "
              />
            </div>

            <span
              className="
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-cyan-300/70
              "
            >
              ~/career
            </span>

            <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-zinc-600
              "
            >
              experience.log
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-5xl
              font-medium
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            My
            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              journey.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-zinc-400
              sm:text-base
              sm:leading-8
            "
          >
            A look into my professional journey, education and
            continuous growth as a frontend developer.
          </p>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">

          {/* =================================================
              PROFILE CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            {/* Outer glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-[2.5rem]
                bg-gradient-to-br
                from-cyan-500/[0.08]
                via-transparent
                to-violet-500/[0.08]
                opacity-60
                blur-3xl
                transition-all
                duration-1000
                group-hover:opacity-100
              "
            />

            {/* Image card */}
            <div
              className="
                relative
                h-full
                min-h-[520px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.08]
                bg-[#050b15]
                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                sm:min-h-[600px]
                lg:min-h-[720px]
              "
            >
              {/* Image */}
              <Image
                src="/exprence_profile.png"
                alt="Frontend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="
                  object-cover
                  object-center
                  grayscale-[30%]
                  transition-all
                  duration-1000
                  group-hover:scale-[1.05]
                  group-hover:grayscale-0
                "
              />

              {/* Image gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-[#02040a]/20
                  via-transparent
                  to-[#02040a]
                "
              />

              {/* Cyan side glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-1/2
                  w-1/2
                  bg-cyan-400/[0.06]
                  blur-[120px]
                "
              />

              {/* Violet side glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-1/2
                  w-1/2
                  bg-violet-500/[0.06]
                  blur-[120px]
                "
              />

              {/* Inner border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  rounded-[1.65rem]
                  border
                  border-white/[0.08]
                "
              />

              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="
                  absolute
                  left-6
                  top-6
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-[#02040a]/80
                  px-3.5
                  py-2
                  shadow-[0_0_40px_rgba(52,211,153,0.08)]
                  backdrop-blur-2xl
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_12px_rgba(52,211,153,1)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-emerald-300
                  "
                >
                  Available
                </span>
              </motion.div>

              {/* Image content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  sm:p-8
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-6 bg-cyan-400" />

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-cyan-300
                    "
                  >
                    Frontend Developer
                  </p>
                </div>

                <h3
                  className="
                    text-2xl
                    font-medium
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Building digital
                  <br />

                  <span className="text-zinc-300">
                    experiences.
                  </span>
                </h3>

                {/* Location */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-zinc-400
                  "
                >
                  <MapPin
                    size={13}
                    className="text-cyan-400"
                  />

                  <span>
                    Pune, Maharashtra
                  </span>
                </div>
              </div>

              {/* Floating arrow */}
              <div
                className="
                  absolute
                  bottom-7
                  right-7
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-[#02040a]/80
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  group-hover:border-cyan-400/50
                  group-hover:bg-cyan-400
                  group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
                "
              >
                <ArrowUpRight
                  size={18}
                  className="
                    text-cyan-300
                    transition-colors
                    duration-500
                    group-hover:text-black
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex flex-col gap-6">

            {/* =================================================
                PREMIUM TERMINAL
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-cyan-400/10
                bg-[#030810]
                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                transition-all
                duration-700
                hover:border-cyan-400/25
                hover:shadow-[0_40px_120px_rgba(34,211,238,0.06)]
              "
            >
              {/* Terminal header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  bg-gradient-to-r
                  from-cyan-500/[0.06]
                  via-blue-500/[0.03]
                  to-violet-500/[0.06]
                  px-5
                  py-4
                  sm:px-6
                "
              >
                <div className="flex items-center gap-2">
                  <Circle
                    size={10}
                    fill="currentColor"
                    className="text-red-400/80"
                  />
                  <Circle
                    size={10}
                    fill="currentColor"
                    className="text-yellow-400/80"
                  />
                  <Circle
                    size={10}
                    fill="currentColor"
                    className="text-emerald-400/80"
                  />

                  <span
                    className="
                      ml-3
                      hidden
                      font-mono
                      text-[10px]
                      font-medium
                      tracking-wider
                      text-cyan-300/60
                      sm:block
                    "
                  >
                    experience.log
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Command size={13} className="text-zinc-600" />
                  <Terminal
                    size={15}
                    className="text-cyan-400/60"
                  />
                </div>
              </div>

              {/* Terminal body */}
              <div
                className="
                  overflow-x-auto
                  bg-gradient-to-br
                  from-[#050f1a]
                  via-[#040810]
                  to-[#0a0614]
                  p-6
                  font-mono
                  text-[11px]
                  leading-7
                  sm:p-8
                  sm:text-xs
                  sm:leading-8
                "
              >
                {/* Command */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-400">
                    $
                  </span>
                  <span className="text-cyan-300">
                    cat
                  </span>
                  <span className="text-violet-300">
                    experience.json
                  </span>
                </div>

                {/* JSON */}
                <div className="mt-5 text-violet-400">
                  {"{"}
                </div>

                {/* role */}
                <div className="pl-5">
                  <span className="text-blue-400">
                    "role"
                  </span>
                  <span className="text-zinc-600">
                    :
                  </span>{" "}
                  <span className="text-emerald-300">
                    "React.js Developer"
                  </span>
                  <span className="text-zinc-600">
                    ,
                  </span>
                </div>

                {/* company */}
                <div className="pl-5">
                  <span className="text-blue-400">
                    "company"
                  </span>
                  <span className="text-zinc-600">
                    :
                  </span>{" "}
                  <span className="text-amber-300">
                    "Sanvi Softech Solutions"
                  </span>
                  <span className="text-zinc-600">
                    ,
                  </span>
                </div>

                {/* location */}
                <div className="pl-5">
                  <span className="text-blue-400">
                    "location"
                  </span>
                  <span className="text-zinc-600">
                    :
                  </span>{" "}
                  <span className="text-orange-300">
                    "Pune, India"
                  </span>
                  <span className="text-zinc-600">
                    ,
                  </span>
                </div>

                {/* period */}
                <div className="pl-5">
                  <span className="text-blue-400">
                    "period"
                  </span>
                  <span className="text-zinc-600">
                    :
                  </span>{" "}
                  <span className="text-pink-300">
                    "2025 - Present"
                  </span>
                  <span className="text-zinc-600">
                    ,
                  </span>
                </div>

                {/* focus */}
                <div className="pl-5">
                  <span className="text-blue-400">
                    "focus"
                  </span>
                  <span className="text-zinc-600">
                    :
                  </span>{" "}
                  <span className="text-cyan-300">
                    "Frontend Development"
                  </span>
                </div>

                <div className="mt-1 text-violet-400">
                  {"}"}
                </div>

                {/* Divider */}
                <div
                  className="
                    my-6
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400/20
                    to-transparent
                  "
                />

                {/* Second command */}
                <div className="flex items-center gap-2">
                  <ChevronRight
                    size={14}
                    className="text-violet-400"
                  />
                  <span className="text-violet-300">
                    npm
                  </span>
                  <span className="text-cyan-300">
                    run
                  </span>
                  <span className="text-pink-300">
                    career
                  </span>
                </div>

                {/* Output */}
                <div
                  className="
                    mt-4
                    space-y-1.5
                    border-l
                    border-cyan-400/15
                    pl-4
                  "
                >
                  {/* BCA */}
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-emerald-400">
                      ✓
                    </span>
                    <span className="text-zinc-500">
                      BCA
                    </span>
                    <span className="text-emerald-300/80">
                      completed
                    </span>
                  </div>

                  {/* Training */}
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-emerald-400">
                      ✓
                    </span>
                    <span className="text-zinc-500">
                      Frontend training
                    </span>
                    <span className="text-emerald-300/80">
                      completed
                    </span>
                  </div>

                  {/* MCA */}
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-emerald-400">
                      ✓
                    </span>
                    <span className="text-zinc-500">
                      MCA
                    </span>
                    <span className="text-emerald-300/80">
                      completed
                    </span>
                  </div>

                  {/* React */}
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-cyan-400">
                      ✓
                    </span>
                    <span className="text-zinc-300">
                      React Developer
                    </span>
                    <span className="text-cyan-300/80">
                      active
                    </span>
                  </div>

                  {/* Current */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="animate-pulse font-bold text-violet-400">
                      ▊
                    </span>
                    <span className="text-violet-300/80">
                      Currently building...
                    </span>
                    <span className="animate-pulse text-pink-400">
                      _
                    </span>
                  </div>
                </div>

                {/* Status bar */}
                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    border-t
                    border-white/[0.05]
                    pt-5
                  "
                >
                  {/* Online */}
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-2
                        w-2
                        animate-pulse
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_12px_rgba(52,211,153,0.9)]
                      "
                    />
                    <span className="text-[10px] uppercase tracking-widest text-emerald-300/60">
                      System Online
                    </span>
                  </div>

                  {/* React */}
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                    <span className="text-[10px] uppercase tracking-widest text-cyan-300/60">
                      React
                    </span>
                  </div>

                  {/* Next */}
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                    <span className="text-[10px] uppercase tracking-widest text-violet-300/60">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                EXPERIENCE META
            ================================================== */}

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="
                  group
                  rounded-[1.5rem]
                  border
                  border-cyan-400/[0.08]
                  bg-gradient-to-br
                  from-cyan-500/[0.04]
                  to-transparent
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-cyan-400/20
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.06)]
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/15
                      bg-cyan-400/[0.06]
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/30
                      group-hover:bg-cyan-400/[0.1]
                    "
                  >
                    <Briefcase
                      size={18}
                      className="text-cyan-400"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/40">
                    Current
                  </span>
                </div>

                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Role
                </p>
                <h4 className="mt-2 text-lg font-medium text-white">
                  React.js Developer
                </h4>
                <p className="mt-1 text-xs text-zinc-500">
                  Sanvi Softech Solutions
                </p>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="
                  group
                  rounded-[1.5rem]
                  border
                  border-violet-400/[0.08]
                  bg-gradient-to-br
                  from-violet-500/[0.04]
                  to-transparent
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-violet-400/20
                  hover:shadow-[0_20px_60px_rgba(167,139,250,0.06)]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/15
                    bg-violet-400/[0.06]
                    transition-all
                    duration-300
                    group-hover:border-violet-400/30
                    group-hover:bg-violet-400/[0.1]
                  "
                >
                  <GraduationCap
                    size={18}
                    className="text-violet-400"
                  />
                </div>

                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Education
                </p>
                <h4 className="mt-2 text-lg font-medium text-white">
                  MCA
                </h4>
                <p className="mt-1 text-xs text-zinc-500">
                  SPPU · 2024 — 2026
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =================================================
            STATS
        ================================================== */}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {careerStats.map(({ number, label, icon: Icon, accent }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group
                rounded-[1.5rem]
                border
                border-white/[0.06]
                bg-[#050b15]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                ${
                  accent === "cyan"
                    ? "hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.05)]"
                    : accent === "violet"
                    ? "hover:border-violet-400/20 hover:shadow-[0_20px_60px_rgba(167,139,250,0.05)]"
                    : "hover:border-emerald-400/20 hover:shadow-[0_20px_60px_rgba(52,211,153,0.05)]"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    transition-all
                    duration-300
                    ${
                      accent === "cyan"
                        ? "border-cyan-400/15 bg-cyan-400/[0.05] group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.1]"
                        : accent === "violet"
                        ? "border-violet-400/15 bg-violet-400/[0.05] group-hover:border-violet-400/30 group-hover:bg-violet-400/[0.1]"
                        : "border-emerald-400/15 bg-emerald-400/[0.05] group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.1]"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={
                      accent === "cyan"
                        ? "text-cyan-400"
                        : accent === "violet"
                        ? "text-violet-400"
                        : "text-emerald-400"
                    }
                  />
                </div>

                <span
                  className="
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {number}
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                "
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =================================================
            TECHNOLOGY STACK
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-6
            rounded-[2rem]
            border
            border-white/[0.06]
            bg-gradient-to-br
            from-[#050b15]
            via-[#030810]
            to-[#0a0614]
            p-6
            shadow-[0_40px_100px_rgba(0,0,0,0.4)]
            sm:p-8
          "
        >
          {/* Header */}
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <div className="flex items-center gap-2">
                <Database
                  size={14}
                  className="text-cyan-400"
                />
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-cyan-300/50
                  "
                >
                  Core Stack
                </p>
              </div>

              <h3 className="mt-2 text-xl font-medium text-white">
                Technologies I work with
              </h3>
            </div>

            <span
              className="
                self-start
                rounded-full
                border
                border-violet-400/[0.08]
                bg-violet-400/[0.03]
                px-3
                py-1.5
                font-mono
                text-[10px]
                text-violet-300/50
                sm:self-auto
              "
            >
              stack.json
            </span>
          </div>

          {/* Technology pills */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {technologies.map((tech, index) => {
              const colorMap = {
                cyan: {
                  dot: "bg-cyan-400",
                  shadow: "group-hover/pill:shadow-[0_0_8px_rgba(34,211,238,0.8)]",
                  hoverBorder: "hover:border-cyan-400/25",
                  hoverBg: "hover:bg-cyan-400/[0.06]",
                  hoverText: "hover:text-cyan-300",
                },
                violet: {
                  dot: "bg-violet-400",
                  shadow: "group-hover/pill:shadow-[0_0_8px_rgba(167,139,250,0.8)]",
                  hoverBorder: "hover:border-violet-400/25",
                  hoverBg: "hover:bg-violet-400/[0.06]",
                  hoverText: "hover:text-violet-300",
                },
                emerald: {
                  dot: "bg-emerald-400",
                  shadow: "group-hover/pill:shadow-[0_0_8px_rgba(52,211,153,0.8)]",
                  hoverBorder: "hover:border-emerald-400/25",
                  hoverBg: "hover:bg-emerald-400/[0.06]",
                  hoverText: "hover:text-emerald-300",
                },
                amber: {
                  dot: "bg-amber-400",
                  shadow: "group-hover/pill:shadow-[0_0_8px_rgba(251,191,36,0.8)]",
                  hoverBorder: "hover:border-amber-400/25",
                  hoverBg: "hover:bg-amber-400/[0.06]",
                  hoverText: "hover:text-amber-300",
                },
              };

              const colors = colorMap[tech.color] || colorMap.cyan;

              return (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    group/pill
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    px-4
                    py-2
                    text-xs
                    text-zinc-400
                    transition-all
                    duration-300
                    ${colors.hoverBorder}
                    ${colors.hoverBg}
                    ${colors.hoverText}
                    hover:-translate-y-0.5
                  `}
                >
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${colors.dot}
                      ${colors.shadow}
                    `}
                  />
                  {tech.name}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        {/* =================================================
            FOOTER LINE
        ================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,0.9)]
              "
            />
            <span
              className="
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-emerald-300/50
              "
            >
              System Status: Building
            </span>
          </div>

          <span
            className="
              font-mono
              text-[10px]
              tracking-[0.15em]
              text-zinc-600
            "
          >
            2021 — PRESENT
          </span>
        </div>
      </div>
    </section>
  );
}