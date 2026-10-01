"use client";

import { Mail, Layers } from "lucide-react";
import Marquee from "./marquee";

export default function CTASection() {
  return (
    <div className="w-full bg-black">
      {/* Top Marquee */}
      <div className=" top-0 z-50">
        <Marquee />
      </div>

      {/* CTA Section */}
      <section className="relative  bg-black overflow-hidden flex items-center justify-center">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black leading-none text-white">
            Mari Membangun Sesuatu yang
            <br />
            <span className="text-gray-300">Luar Biasa Bersama</span>
          </h1>

          <p className="text-gray-400 mt-10 text-lg leading-8 max-w-2xl mx-auto">
            Terbuka untuk kolaborasi strategis dalam pengembangan sistem
            berbasis AI dan rekayasa full stack yang skalabel. Mari kita
            transformasikan ide ambisius menjadi solusi siap produksi.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-14">
            <button className="bg-white text-black rounded-full px-10 py-5 flex items-center gap-3 font-semibold transition duration-300 hover:scale-105">
              <Mail size={20} />
              Hire Me
            </button>

            <div className="relative inline-flex rounded-full p-[1px] overflow-hidden group">
              {/* Animated border */}
              <div
                className="
      absolute inset-[-100%]
      bg-[conic-gradient(from_90deg,transparent,white,transparent,white,transparent)]
      animate-[spin_4s_linear_infinite]
    "
              />

              <a
                href="/pdf/Onkar_Pawar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
      relative z-10
      inline-flex items-center gap-3
      rounded-full
      bg-[#09090b]
      px-7 py-4
      text-sm font-semibold
      text-white
      transition-all duration-500
      hover:bg-white
      hover:text-black
    "
              >
                <span
                  className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        bg-white/[0.07]
        transition-all duration-500
        group-hover:bg-black/10
      "
                >
                  <Layers
                    size={18}
                    strokeWidth={1.7}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </span>

                <span>View My Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
