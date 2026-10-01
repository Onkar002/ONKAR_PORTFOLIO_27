"use client";

import { useState } from "react";
import {
  Search,
  Award,
  Trophy,
  Medal,
  FileBadge,
} from "lucide-react";

const floatingCards = [
  {
    title: "Introduction to Data Analytics",
    rotate: "-8deg",
    top: "10%",
    left: "5%",
  },
  {
    title: "Google UX Certificate",
    rotate: "10deg",
    top: "5%",
    right: "10%",
  },
  {
    title: "Frontend Development",
    rotate: "-5deg",
    bottom: "15%",
    left: "8%",
  },
  {
    title: "Programming in C",
    rotate: "8deg",
    bottom: "20%",
    right: "8%",
  },
  {
    title: "Machine Learning",
    rotate: "-10deg",
    top: "0%",
    left: "40%",
  },
  {
    title: "Python Bootcamp",
    rotate: "5deg",
    bottom: "5%",
    left: "40%",
  },
];

export default function Achievement() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,#222_0%,#111_35%,#000_100%)]" />

      {/* ================= HERO ================= */}

      <section className="relative h-screen overflow-hidden flex items-center justify-center">

        {/* Floating Cards */}

        {floatingCards.map((card, index) => (
          <div
            key={index}
            style={{
              top: card.top,
              bottom: card.bottom,
              left: card.left,
              right: card.right,
              transform: `rotate(${card.rotate})`,
            }}
            className="absolute w-56 h-36 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-5 animate-pulse"
          >
            <div className="flex items-center gap-2 mb-3">
              <Award size={18} />
              <span className="text-xs uppercase text-gray-300">
                Certificate
              </span>
            </div>

            <h3 className="font-semibold text-lg leading-snug">
              {card.title}
            </h3>

            <p className="mt-3 text-xs text-gray-400">
              Achievement
            </p>
          </div>
        ))}

        {/* Center */}

        <div className="text-center max-w-3xl px-6">

          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            Portfolio
          </span>

          <h1 className="text-6xl md:text-8xl font-black mt-6 leading-none">
            Certificates
            <br />
            <span className="text-gray-400">
              & Awards
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            A curated collection of certifications,
            professional achievements, competitions,
            and continuous learning milestones.
          </p>

          {/* Search */}

          <div className="mt-12 max-w-xl mx-auto">

            <div className="flex items-center bg-white/10 rounded-full px-6 py-4 border border-white/10">

              <Search className="text-gray-400" />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search achievements..."
                className="bg-transparent outline-none flex-1 px-4"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="max-w-7xl mx-auto px-5 pb-20">

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}

          <aside className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold mb-5 text-lg">
                Categories
              </h3>

              <div className="space-y-3">

                <button className="w-full rounded-xl bg-white text-black py-3">
                  All Entries
                </button>

                <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10">
                  Certifications
                </button>

                <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10">
                  Awards
                </button>

                <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10">
                  Competitions
                </button>

              </div>

            </div>

            {/* Stats */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold mb-6">
                Statistics
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-5xl font-black">
                    32
                  </p>
                  <span className="text-gray-400">
                    Certifications
                  </span>
                </div>

                <div>
                  <p className="text-5xl font-black">
                    8
                  </p>
                  <span className="text-gray-400">
                    Awards
                  </span>
                </div>

                <div>
                  <p className="text-5xl font-black">
                    12
                  </p>
                  <span className="text-gray-400">
                    Competitions
                  </span>
                </div>

              </div>

            </div>

          </aside>

          {/* Grid */}

          <div className="lg:col-span-3">

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {Array.from({ length: 12 }).map((_, i) => (

                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6 hover:-translate-y-2 transition duration-300 hover:border-white/30"
                >

                  <div className="flex justify-between">

                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
                      Certificate
                    </span>

                    <FileBadge size={18} />

                  </div>

                  <div className="mt-8">

                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                      {i % 3 === 0 && <Award />}
                      {i % 3 === 1 && <Trophy />}
                      {i % 3 === 2 && <Medal />}

                    </div>

                    <h2 className="text-xl font-bold mt-6">
                      Achievement #{i + 1}
                    </h2>

                    <p className="text-gray-400 mt-3 text-sm">
                      Professional certification from an
                      internationally recognized platform.
                    </p>

                    <div className="mt-6 flex justify-between text-sm text-gray-500">

                      <span>Coursera</span>

                      <span>2025</span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}