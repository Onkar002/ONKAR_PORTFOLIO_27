"use client";

import { motion } from "framer-motion";

export const timeline = [
  {
    year: "2026",
    title: "Frontend React Developer",
    company: "Sanvi Softech Solutions",
    date: "May 2025 - Present",
    description:
      "Working as a Frontend React Developer, building modern, responsive, and high-performance web applications using React.js, Next.js, Tailwind CSS, and REST APIs.",
    points: [
      "Develop responsive web applications using React.js & Next.js",
      "Build reusable UI components with Tailwind CSS",
      "Integrate REST APIs and dynamic data",
      "Optimize SEO, accessibility, and website performance",
      "Collaborate with Git and Agile development teams",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
      "Git",
    ],
    images: [
      "/journey/project1.webp",
      "/journey/project2.webp",
    ],
  },

  {
    year: "2025",
    title: "Master of Computer Applications (MCA)",
    company: "Pune",
    date: "2025",
    description:
      "Completed Master of Computer Applications with specialization in software development, web technologies, and modern application development.",
    points: [
      "Advanced Web Development",
      "Software Engineering",
      "Database Management",
      "Cloud Computing",
      "Project Development",
    ],
    skills: [
      "React.js",
      "Java",
      "SQL",
      "Software Engineering",
      "Problem Solving",
    ],
  },

  {
    year: "2024",
    title: "Full Stack Web Developer Intern",
    company: "SevenMentor Pvt. Ltd., Pune",
    date: "Jan 2025 - Apr 2025",
    description:
      "Completed Full Stack Web Development internship by building responsive websites, dashboards, and backend-integrated applications.",
    points: [
      "Developed responsive business websites",
      "Built Admin Dashboard",
      "Integrated PHP & MySQL",
      "Worked with Bootstrap & JavaScript",
      "Debugged and optimized applications",
    ],
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    images: [
      "/journey/project3.webp",
      "/journey/project4.webp",
    ],
  },

  {
    year: "2021 - 2023",
    title: "Quick Heal Foundation Scholar",
    company: "Quick Heal Foundation",
    date: "2021 - 2023",
    description:
      "Received academic support and skill development opportunities under the Quick Heal Foundation scholarship program throughout the BCA journey.",
    points: [
      "Scholarship Support",
      "Technical Skill Development",
      "Career Guidance",
      "Professional Training",
    ],
    skills: [
      "Professional Development",
      "Communication",
      "Technical Skills",
    ],
  },

  {
    year: "2021",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Satara",
    date: "2021 - 2025",
    description:
      "Completed Bachelor of Computer Applications with a strong foundation in programming, web development, databases, and software engineering.",
    points: [
      "Web Development",
      "Java Programming",
      "Database Management",
      "Software Engineering",
      "Computer Networks",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "SQL",
    ],
  },

  {
    year: "2020",
    title: "Higher Secondary (12th)",
    company: "Aundh",
    date: "2020",
    description:
      "Completed Higher Secondary Education (12th) under Maharashtra State Board.",
    points: [
      "Computer Science",
      "Mathematics",
      "English",
      "Science",
    ],
    skills: [
      "Computer Science",
      "Mathematics",
      "Science",
    ],
  },

  {
    year: "2019",
    title: "Higher Secondary (11th)",
    company: "Aundh",
    date: "2019",
    description:
      "Completed 11th standard under Maharashtra State Board with Computer Science stream.",
    points: [
      "Computer Science",
      "Mathematics",
      "English",
      "Science",
    ],
    skills: [
      "Computer Science",
      "Mathematics",
    ],
  },

  {
    year: "2018",
    title: "Secondary School Certificate (SSC)",
    company: "Vaduj",
    date: "2018",
    description:
      "Successfully completed SSC (10th) under Maharashtra State Board with a strong academic foundation.",
    points: [
      "SSC",
      "Science",
      "Mathematics",
      "English",
    ],
    skills: [
      "SSC",
      "Science",
      "Mathematics",
    ],
  },
];

export default function Journey() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black px-5 sm:min-h-screen">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">

          {/* Green Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-emerald-400/10
              blur-[120px]
              sm:h-[500px]
              sm:w-[500px]
              sm:blur-[150px]
              lg:h-[700px]
              lg:w-[700px]
              lg:blur-[180px]
            "
          />

          {/* Radial Background */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(100,255,150,0.07),transparent_65%)]
            "
          />

          {/* Bottom Gradient */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-64
              w-full
              bg-gradient-to-t
              from-black
              to-transparent
            "
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex w-full flex-col items-center px-4 text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mb-6
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-emerald-400
              sm:text-xs
              sm:tracking-[0.5em]
            "
          >
            My Professional Journey
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              select-none
              text-[64px]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.08em]
              text-white

              sm:text-[100px]
              md:text-[150px]
              lg:text-[210px]
              xl:text-[250px]
              2xl:text-[290px]
            "
          >
            journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              mt-10
              max-w-[850px]
              text-[9px]
              uppercase
              leading-[2]
              tracking-[0.25em]
              text-gray-400

              sm:text-[10px]
              sm:tracking-[0.35em]

              md:text-xs
              md:tracking-[0.45em]

              lg:text-sm
            "
          >
            Merging Technical Precision With Creative Vision.
            <br />

            <span className="hidden sm:inline">
              A Curated Timeline Of My Professional Journey, From
              <br />
              Foundational Code To Modern Web Solutions.
            </span>

            <span className="sm:hidden">
              <br />
              A Curated Timeline Of My
              <br />
              Professional Journey.
            </span>
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="
            absolute
            bottom-8
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-3
          "
        >
          <span className="text-[9px] uppercase tracking-[4px] text-zinc-600">
            Scroll
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-emerald-400 to-transparent" />
        </motion.div>
      </section>

      {/* =====================================================
          CHANGELOG HEADER
      ===================================================== */}
      <section
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          pb-20
          pt-24

          sm:px-6
          sm:pb-24
          sm:pt-32

          lg:pb-28
          lg:pt-40
        "
      >
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-6
            flex
            items-center
            gap-3
            text-xs
            font-medium
            uppercase
            tracking-[4px]
            text-emerald-400
          "
        >
          <span className="h-px w-8 bg-emerald-400" />
          Experience & Education
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            max-w-6xl
            text-5xl
            font-black
            leading-[0.95]
            tracking-[-3px]

            sm:text-6xl
            sm:tracking-[-4px]

            md:text-7xl

            lg:text-[100px]
            lg:tracking-[-6px]

            xl:text-[115px]
          "
        >
          Changelog
          <br />

          <span
            className="
              bg-gradient-to-b
              from-white
              via-zinc-400
              to-zinc-700
              bg-clip-text
              text-transparent
            "
          >
            from my journey
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="
            mt-8
            max-w-2xl
            text-base
            leading-7
            text-zinc-500

            sm:mt-10
            sm:text-lg
            sm:leading-8

            lg:text-xl
            lg:leading-9
          "
        >
          A timeline of roles, responsibilities, education, and professional
          growth across my journey in software and web development.
        </motion.p>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}
      <section
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          pb-24

          sm:px-6
          sm:pb-32

          lg:pb-48
        "
      >

        {/* =================================================
            DESKTOP CENTER LINE
        ================================================= */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            top-0
            hidden
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-zinc-800
            to-transparent

            lg:block
          "
        />

        {/* =================================================
            MOBILE LEFT LINE
        ================================================= */}
        <div
          className="
            absolute
            bottom-0
            left-[20px]
            top-0
            w-px
            bg-gradient-to-b
            from-transparent
            via-zinc-800
            to-transparent

            sm:left-[24px]

            lg:hidden
          "
        />

        {/* =================================================
            TIMELINE ITEMS
        ================================================= */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article
                key={`${item.year}-${item.title}`}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  lg:grid
                  lg:grid-cols-2
                  lg:gap-16
                "
              >

                {/* =================================================
                    TIMELINE DOT - DESKTOP
                ================================================= */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-12
                    z-20
                    hidden
                    -translate-x-1/2

                    lg:flex
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-black
                      bg-emerald-400
                      shadow-[0_0_25px_rgba(52,211,153,0.45)]
                    "
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  </div>
                </div>

                {/* =================================================
                    TIMELINE DOT - MOBILE
                ================================================= */}
                <div
                  className="
                    absolute
                    left-[20px]
                    top-8
                    z-20
                    flex
                    -translate-x-1/2

                    sm:left-[24px]

                    lg:hidden
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-black
                      bg-emerald-400
                      shadow-[0_0_18px_rgba(52,211,153,0.5)]
                    "
                  />
                </div>

                {/* =================================================
                    YEAR
                ================================================= */}
                <div
                  className={`
                    hidden
                    lg:block
                    ${
                      isLeft
                        ? "pr-16 text-right"
                        : "order-2 pl-16 text-left"
                    }
                  `}
                >
                  <span
                    className="
                      text-[80px]
                      font-black
                      leading-none
                      tracking-[-5px]
                      text-zinc-800
                      transition-colors
                      duration-500
                      hover:text-zinc-700

                      xl:text-[100px]
                    "
                  >
                    {item.year}
                  </span>
                </div>

                {/* =================================================
                    CARD
                ================================================= */}
                <div
                  className={`
                    ${
                      isLeft
                        ? "lg:pr-16"
                        : "lg:order-2 lg:pl-16"
                    }

                    pl-12

                    sm:pl-14

                    lg:pl-0
                  `}
                >

                  {/* Mobile Year */}
                  <div className="mb-5 lg:hidden">
                    <span
                      className="
                        text-5xl
                        font-black
                        tracking-[-3px]
                        text-zinc-800

                        sm:text-6xl
                      "
                    >
                      {item.year}
                    </span>
                  </div>

                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-zinc-900
                      bg-zinc-950
                      p-5
                      shadow-2xl
                      transition-all
                      duration-500

                      sm:rounded-[28px]
                      sm:p-7

                      md:p-8

                      lg:rounded-[32px]
                      lg:p-9

                      hover:border-zinc-700
                    "
                  >

                    {/* Card Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-emerald-400/5
                        blur-[70px]
                        transition-all
                        duration-700
                        group-hover:bg-emerald-400/10
                      "
                    />

                    {/* Top Line */}
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-zinc-700
                        to-transparent
                      "
                    />

                    {/* Date */}
                    <div className="relative z-10">
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-zinc-800
                          bg-zinc-900/80
                          px-3
                          py-2
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[2px]
                          text-zinc-500

                          sm:px-4
                          sm:text-[10px]
                        "
                      >
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        relative
                        z-10
                        mt-6
                        text-2xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-white

                        sm:text-3xl

                        md:text-4xl
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Company */}
                    <h4
                      className="
                        relative
                        z-10
                        mt-3
                        text-base
                        font-medium
                        text-emerald-400

                        sm:text-lg
                      "
                    >
                      {item.company}
                    </h4>

                    {/* Description */}
                    <p
                      className="
                        relative
                        z-10
                        mt-5
                        text-sm
                        leading-7
                        text-zinc-500

                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {item.description}
                    </p>

                    {/* Divider */}
                    <div className="my-7 h-px bg-zinc-900" />

                    {/* Points */}
                    <div className="relative z-10">
                      <p
                        className="
                          mb-4
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[3px]
                          text-zinc-600
                        "
                      >
                        Responsibilities
                      </p>

                      <ul className="space-y-3">
                        {item.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              leading-6
                              text-zinc-400

                              sm:text-[15px]
                            "
                          >
                            <span
                              className="
                                mt-2
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-emerald-400
                                shadow-[0_0_10px_rgba(52,211,153,0.5)]
                              "
                            />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="relative z-10 mt-8">
                      <p
                        className="
                          mb-4
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[3px]
                          text-zinc-600
                        "
                      >
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="
                              rounded-full
                              border
                              border-zinc-800
                              bg-zinc-900/80
                              px-3
                              py-2
                              text-[11px]
                              font-medium
                              text-zinc-400
                              transition-all
                              duration-300

                              sm:px-4
                              sm:text-xs

                              hover:border-emerald-400/30
                              hover:bg-emerald-400/5
                              hover:text-emerald-300
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Images */}
                    {item.images && item.images.length > 0 && (
                      <div className="relative z-10 mt-8 grid grid-cols-2 gap-3">
                        {item.images.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className="
                              group/image
                              relative
                              aspect-video
                              overflow-hidden
                              rounded-2xl
                              border
                              border-zinc-900
                              bg-zinc-900
                            "
                          >
                            <img
                              src={image}
                              alt={`${item.title} project ${
                                imageIndex + 1
                              }`}
                              className="
                                h-full
                                w-full
                                object-cover
                                opacity-60
                                grayscale
                                transition-all
                                duration-500

                                group-hover/image:scale-105
                                group-hover/image:opacity-100
                                group-hover/image:grayscale-0
                              "
                            />

                            <div
                              className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/60
                                via-transparent
                                to-transparent
                              "
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          END SECTION
      ===================================================== */}
      <section className="relative overflow-hidden border-t border-zinc-900 bg-black px-5 py-24 sm:py-32">

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[4px] text-emerald-400">
            The Journey Continues
          </p>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-2px]
              text-white

              sm:text-5xl

              md:text-6xl
            "
          >
            Building. Learning.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-zinc-400
                via-white
                to-zinc-600
                bg-clip-text
                text-transparent
              "
            >
              Growing.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Every project, technology, and experience adds another chapter
            to the journey of becoming a better developer.
          </p>
        </motion.div>
      </section>
    </main>
  );
}