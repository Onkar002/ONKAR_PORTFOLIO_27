"use client";

const techStack = [
  "REACT",
  "•",
  "NEXT.JS",
  "•",
  "TYPESCRIPT",
  "•",
  "TAILWIND",
  "•",
  "REACT",
  "•",
  "NODE.JS",
  "•",
  "THREE.JS",
  "•",
];

const roles = [
  "FULL STACK DEVELOPER",
  "•",
  "SYSTEM ARCHITECTURE",
  "•",
  "CREATIVE DEVELOPER",
  "•",
  "UI/UX DESIGN",
  "•",
  "RESPONSIVE DESIGN",
  "•",
];

function MarqueeStrip({
  items,
  reverse = false,
  duration = "22s",
  rotate = "8deg",
  dark = false,
}) {
  const list = [...items, ...items, ...items, ...items];

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[190%] overflow-hidden"
      style={{
        transform: `translateX(-50%) rotate(${rotate})`,
      }}
    >
      <div
        className={`
          flex whitespace-nowrap
          ${dark ? "bg-[#141414]/95" : "bg-black/95"}
          border-y border-white/10
          py-5
        `}
      >
        <div
          className={`flex shrink-0 ${
            reverse ? "marqueeReverse" : "marquee"
          }`}
          style={{
            "--speed": duration,
          }}
        >
          {list.map((text, i) => (
            <span
              key={i}
              className={`mx-5 text-[22px] md:text-[30px] font-bold uppercase tracking-wide ${
                text === "•"
                  ? "text-neutral-500"
                  : "text-neutral-200"
              }`}
            >
              {text}
            </span>
          ))}
        </div>

        <div
          className={`flex shrink-0 ${
            reverse ? "marqueeReverse" : "marquee"
          }`}
          style={{
            "--speed": duration,
          }}
        >
          {list.map((text, i) => (
            <span
              key={i}
              className={`mx-5 text-[22px] md:text-[30px] font-bold uppercase tracking-wide ${
                text === "•"
                  ? "text-neutral-500"
                  : "text-neutral-200"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* Upper */}
      <div className="absolute top-[10%] w-[200%]">
        <MarqueeStrip
          items={techStack}
          duration="18s"
          rotate="8deg"
          dark
        />
      </div>

      {/* Lower */}
      <div className="absolute top-[90%] w-[200%]">
        <MarqueeStrip
          items={roles}
          reverse
          duration="24s"
          rotate="-8deg"
        />
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee var(--speed) linear infinite;
          will-change: transform;
        }

        .marqueeReverse {
          animation: marqueeReverse var(--speed) linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-100%, 0, 0);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translate3d(-100%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}