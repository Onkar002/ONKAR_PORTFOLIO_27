"use client";

import { useEffect, useRef, useState } from "react";

import { FaBuilding, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const items = [
    "jayshankarsevamandal",
    "cfiindia",
    "kekulbizserv",
    "sanvi softech solutions",
    "AMITY ENGINEERS",
    "Shreedatta Power",
    "Nadhabhram dosoo ",
    "ehstpl ",
    "cocunity chutney",
    "Abhay Ayurved Panchkarma",
    "Kothathane Ayuradhe ",
    "Ehstpl Application",
  ];

  const [selected, setSelected] = useState(8);

  const wheelRef = useRef(null);
  const startY = useRef(0);

  const handleWheel = (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      setSelected((prev) => Math.min(prev + 1, items.length - 1));
    } else {
      setSelected((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    const el = wheelRef.current;

    if (!el) return;

    el.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const onPointerDown = (e) => {
    startY.current = e.clientY;
  };

  const onPointerMove = (e) => {
    if (!startY.current) return;

    const diff = e.clientY - startY.current;

    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        setSelected((prev) => Math.max(prev - 1, 0));
      } else {
        setSelected((prev) => Math.min(prev + 1, items.length - 1));
      }

      startY.current = e.clientY;
    }
  };

  const onPointerUp = () => {
    startY.current = 0;
  };

  const experienceData = [
  {
    company: "Sanvi Softech Solutions",
    duration: "1 yr 4 mos",
    type: "On-site",
    logo:
      "https://ui-avatars.com/api/?name=Sanvi&background=111827&color=fff",
    jobs: [
      {
        role: "React Web Developer",
        employment: "Full-time",
        duration: "Nov 2025 - Present · 10 mos",
        location: "Ambegaon, Maharashtra, India",
        skills:
          "HTML5 • CSS3 • JavaScript • Bootstrap • React.js • Tailwind CSS",
      },
      {
        role: "Frontend Developer",
        employment: "Internship",
        duration: "May 2025 - Oct 2025 · 6 mos",
        location: "Ambegaon, Pune",
        skills:
          "HTML5 • Front-End Development • JavaScript ",
      },
    ],
  },
  {
    company: "SevenMentor Pvt Ltd",
    duration: "1 yr 6 mos",
    type: "On-site",
    logo:
      "https://ui-avatars.com/api/?name=SM&background=f97316&color=fff",
    jobs: [
      {
        role: "Frontend Web Developer",
        employment: "Full-time",
        duration: "Jul 2023 - Dec 2024 · 1 yr 6 mos",
        location: "Pune District, Maharashtra",
        description:
          "Worked on HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS and WordPress projects.",
        skills:
          "Tailwind CSS • WordPress • HTML5 • CSS3 • JavaScript • Bootstrap",
      },
    ],
  },
  {
    company: "Quick Heal Foundation",
    duration: "5 mos",
    type: "Internship",
    logo:
      "https://ui-avatars.com/api/?name=QH&background=ea580c&color=fff",
    jobs: [
      {
        role: "Cyber Security Warrior",
        employment: "Internship",
        duration: "Oct 2022 - Feb 2023 · 5 mos",
        location: "Pune",
        skills:
          "Presentation Skills • Public Speaking • Cyber Security",
      },
    ],
  },
];


  return (
    <>
      {/* Marquee */}
      <section className="bg-black overflow-hidden py-20">
        <div className="relative flex overflow-hidden">
          <div className="marquee flex whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <h1
                  className="
                    font-black
                    uppercase
                    text-[#2f2f2f]
                    leading-none
                    tracking-[-0.08em]
                    text-[60px]
                    sm:text-[90px]
                    md:text-[120px]
                    lg:text-[160px]
                    xl:text-[200px]
                    2xl:text-[240px]
                    mr-20
                  "
                >
                  • EXPRANCE 
                </h1>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Wheel */}
      <main className="relative h-screen bg-[#0e0c14] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1d1a28,transparent_55%)]" />

        {/* Left Blur */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black/40 to-transparent z-10" />

        {/* Wheel */}
        <div
          ref={wheelRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="absolute left-10 top-0 h-full w-[340px] cursor-grab select-none"
        >
          {items.map((item, index) => {
            const diff = index - selected;

            const translateY = diff * 70;
            const rotate = diff * 7;
            const x = Math.abs(diff) * -8;
            const opacity = Math.max(1 - Math.abs(diff) * 0.23, 0.05);
            const blur = Math.abs(diff) * 1.8;
            const scale = diff === 0 ? 1 : 0.9;

            return (
              <div
                key={item}
                onClick={() => setSelected(index)}
                className="absolute top-1/2 left-20 transition-all duration-500 ease-out whitespace-nowrap cursor-pointer"
                style={{
                  transform: `translate(${x}px, calc(${translateY}px - 50%)) rotate(${rotate}deg) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
              >
                <span
                  className={`transition-all duration-500 ${
                    diff === 0
                      ? "text-white font-medium"
                      : "text-gray-500 font-light"
                  }`}
                  style={{
                    fontSize: diff === 0 ? "56px" : "44px",
                  }}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Content */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 text-white">
          <h1 className="text-6xl font-bold mb-6">
            {items[selected]}
          </h1>

          <p className="text-gray-400 max-w-md leading-8">
            This is a modern curved option wheel built using React and Tailwind
            CSS. Scroll using your mouse wheel, drag vertically, or click any
            option to select it.
          </p>
        </div>
      </main>

          <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-14">

          {experienceData.map((company, index) => (
            <div
              key={index}
              className="flex gap-5"
            >
              {/* Logo */}

              <div className="w-16 h-16 rounded-lg overflow-hidden border bg-white shadow">
                <img
                  src={company.logo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right */}

              <div className="flex-1">

                <h3 className="text-2xl font-semibold">
                  {company.company}
                </h3>

                <p className="text-gray-500 mb-8">
                  {company.duration} • {company.type}
                </p>

                <div className="relative ml-3">

                  {company.jobs.map((job, i) => (
                    <div
                      key={i}
                      className="relative pl-10 pb-12"
                    >
                      {/* Line */}

                      {i !== company.jobs.length - 1 && (
                        <div className="absolute left-[8px] top-4 h-full w-[2px] bg-gray-300"></div>
                      )}

                      {/* Dot */}

                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-white shadow"></div>

                      <h4 className="text-xl font-semibold">
                        {job.role}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-1">

                        <span className="flex items-center gap-2">
                          <FaBriefcase />
                          {job.employment}
                        </span>

                        <span>
                          {job.duration}
                        </span>

                      </div>

                      <div className="flex items-center gap-2 mt-2 text-gray-500">

                        <FaMapMarkerAlt />

                        <span>{job.location}</span>

                      </div>

                      {job.description && (
                        <p className="mt-4 text-gray-700 leading-7">
                          {job.description}
                        </p>
                      )}

                      <div className="mt-4 inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">

                        {job.skills}

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>

    </>
  );
}