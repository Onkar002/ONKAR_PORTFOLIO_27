"use client";

import { motion } from "framer-motion";

const words = [
  "REACT",
  "NEXT.JS",
  "FRONTEND",
  "JAVASCRIPT",
  "TAILWIND",
  "UI",
  "ENGINEER",
  "DEVELOPER",
];

export default function InfiniteTextSection() {
  return (
    <section className="relative w-full h-screen bg-[#18181B] overflow-hidden flex items-center">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
      >
        {[...words, ...words].map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-12"
          >
            <h1 className="text-[220px] font-black uppercase text-white leading-none">
              {item}
            </h1>

            <div className="mx-16 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-[#D8FF33] flex items-center justify-center">
                <div
                  className="w-16 h-16 bg-[#18181B]"
                  style={{
                    clipPath:
                      "path('M32 0 C44 16 48 20 64 32 C48 44 44 48 32 64 C20 48 16 44 0 32 C16 20 20 16 32 0')",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}