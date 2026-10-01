"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  { id: 1, image: "/certificates/cert1.jpg" },
  { id: 2, image: "/certificates/cert2.jpg" },
  { id: 3, image: "/certificates/cert3.jpg" },
  { id: 4, image: "/certificates/cert4.jpg" },
  { id: 5, image: "/certificates/cert5.jpg" },
  { id: 6, image: "/certificates/cert6.png" },
  { id: 7, image: "/certificates/cert7.png" },
  { id: 8, image: "/certificates/cert8.png" },
  { id: 9, image: "/certificates/cert9.png" },
  { id: 10, image: "/certificates/cert10.jpeg" },
   { id: 11, image: "/certificates/cert11.jpeg" },
    { id: 12, image: "/certificates/cert12.jpeg" },
    { id: 13, image: "/certificates/cert13.png" },
     

];
const loopData = [...certificates, ...certificates];
export default function CertificationHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:px-10 lg:px-12">
        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-gray-500 md:text-sm"
        >
          Certifications & Achievements
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-6xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Validating Excellence through Global Standards.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-400 md:text-2xl"
        >
          A collection of my professional certifications in AI, Web
          Development, and Cloud Engineering from industry leaders.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16"
        >
          <button className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200">
            View All Achievements

            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
      <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 h-[850px] overflow-hidden">

          {/* Column 1 */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 22,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-col gap-8"
            >
              {loopData.map((item, index) => (
                <div
                  key={`c1-${index}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full h-auto hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="relative overflow-hidden hidden md:block">
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{
                duration: 24,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-col gap-8"
            >
              {loopData.map((item, index) => (
                <div
                  key={`c2-${index}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full h-auto hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="relative overflow-hidden hidden lg:block">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-col gap-8"
            >
              {loopData.map((item, index) => (
                <div
                  key={`c3-${index}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full h-auto hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
    </section>
    
  );
}