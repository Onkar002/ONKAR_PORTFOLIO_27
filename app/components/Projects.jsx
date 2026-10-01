"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PROJECT_DATA = [
  {
    title: "CFI India",
    image: "/project/pro1.png",
    category: "Community",
    year: "2026",
    description:
      "Designed and developed the official website for the CFI India Christian community.",
  },
  {
    title: "Shree Shankar Maharaj Math",
    image: "/project/pro2.png",
    category: "Religious Organization",
    year: "2025",
    description:
      "Developed the official website for Shree Shankar Maharaj Math showcasing spiritual activities and events.",
  },
  {
    title: "KEKUL Bizserv",
    image: "/project/pro3.png",
    category: "Business Services",
    year: "2025",
    description:
      "Corporate website focused on HR, Payroll and Business Solutions.",
  },
  {
    title: "Shree Datta Power Solutions",
    image: "/project/pro4.png",
    category: "Solar",
    year: "2025",
    description:
      "Professional website for Solar, UPS and Electrical Services.",
  },
  {
    title: "Sanvi Softech Solutions",
    image: "/project/pro5.png",
    category: "Software Development",
    year: "2025",
    description:
      "Corporate website for Software Development, ERP and Cloud Solutions.",
  },
  {
    title: "Mahavir Rakhi Application",
    image: "/project/pro6.jpeg",
    category: "Inventory System",
    year: "2025",
    description:
      "Inventory, Billing and Customer Management Application.",
  },
];

export default function ProjectSlider() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const drag = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const [paused, setPaused] = useState(false);

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;

      if (!slider || paused) return;

      slider.scrollLeft += 1;

      if (
        slider.scrollLeft >=
        slider.scrollWidth - slider.clientWidth
      ) {
        slider.scrollLeft = 0;
      }
    }, 15);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, [paused]);

  const scroll = (dir) => {
    const slider = sliderRef.current;

    slider.scrollBy({
      left: dir === "left" ? -450 : 450,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    drag.current.isDown = true;
    drag.current.startX = e.pageX - sliderRef.current.offsetLeft;
    drag.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!drag.current.isDown) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;

    const walk = (x - drag.current.startX) * 2;

    sliderRef.current.scrollLeft =
      drag.current.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    drag.current.isDown = false;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-end mb-12">

          <div>

            <p className="uppercase tracking-[6px] text-sm text-indigo-500 font-semibold">
              Portfolio
            </p>

            <h2 className="text-5xl text-black mt-3">
              Selected Projects
            </h2>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white shadow-lg bg-indigo-600 text-black transition"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white shadow-lg bg-indigo-600 text-black transition"
            >
              →
            </button>

          </div>

        </div>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto cursor-grab pb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {PROJECT_DATA.map((project, index) => (
            <div
              key={index}
              className="min-w-[420px] rounded-[32px] overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl duration-500 group flex-shrink-0"
            >

              <div className="relative h-[280px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <span className="bg-white/20 backdrop-blur-xl px-4 py-1 rounded-full text-white text-xs">
                    {project.category}
                  </span>

                </div>

                <div className="absolute top-5 right-5 bg-white rounded-full px-4 py-2 font-semibold">
                  {project.year}
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {project.description}
                </p>

                <button className="mt-8 flex items-center gap-3 font-semibold text-indigo-600 group-hover:gap-5 transition-all">

                  View Project

                  <span>→</span>

                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}