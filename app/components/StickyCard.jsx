"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function StickyCard({
  imgUrl = "/profilei27.png",
}) {
  const vertMargin = 10;

  const container = useRef(null);

  const [maxScrollY, setMaxScrollY] = useState(Infinity);

  const filter = useMotionValue(0);
  const negateFilter = useTransform(filter, (v) => -v);

  const { scrollY } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useMotionValue(1);

  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      let animationValue = 1;

      if (value > maxScrollY) {
        animationValue = Math.max(
          0,
          1 - (value - maxScrollY) / 1000
        );
      }

      scale.set(animationValue);
      filter.set((1 - animationValue) * 20);
    });

    return () => unsubscribe();
  }, [scrollY, maxScrollY, scale, filter]);

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView, scrollY]);

  return (
    <motion.div
      ref={container}
      className="sticky w-full max-w-6xl mx-auto overflow-hidden rounded-[40px] bg-neutral-200"
      style={{
        top: `${vertMargin}vh`,
        height: `${100 - vertMargin * 2}vh`,
        scale,
        rotate: filter,
      }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          rotate: negateFilter,
        }}
      >
        <Image
          src={imgUrl}
          alt="Sticky Card"
          fill
          className="object-cover scale-125"
          priority
        />
      </motion.div>
    </motion.div>
  );
}