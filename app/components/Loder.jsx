"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./loader.css";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const nameRef = useRef(null);
  const shortRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (
      !loaderRef.current ||
      !nameRef.current ||
      !shortRef.current ||
      !progressRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: 100,
        duration: 4,
        ease: "power2.inOut",
        snap: { value: 1 },

        onUpdate: () => {
          if (progressRef.current) {
            progressRef.current.textContent = `${counter.value}%`;
          }
        },

        onComplete: () => {
          const fullSplit = new SplitType(nameRef.current, {
            types: "lines",
          });

          fullSplit.lines.forEach((line) => {
            gsap.to(line, {
              yPercent: -120,
              duration: 1,
              ease: "power4.inOut",
            });
          });

          gsap.to(shortRef.current, {
            opacity: 1,
            duration: 0.2,
          });

          const shortSplit = new SplitType(shortRef.current, {
            types: "lines",
          });

          shortSplit.lines.forEach((line) => {
            gsap.fromTo(
              line,
              { yPercent: 120 },
              {
                yPercent: 0,
                duration: 1,
                ease: "power4.inOut",
              }
            );
          });

          const progressSplit = new SplitType(progressRef.current, {
            types: "lines",
          });

          progressSplit.lines.forEach((line) => {
            gsap.to(line, {
              yPercent: -120,
              duration: 1,
              ease: "power4.inOut",
            });
          });

          gsap.to(loaderRef.current, {
            scale: 0.92,
            borderRadius: 25,
            duration: 0.5,
            delay: 0.8,
            ease: "power2.inOut",
          });

          gsap.to(loaderRef.current, {
            x: "-100%",
            duration: 0.6,
            delay: 1.6,
            ease: "power2.inOut",
            onComplete: () => {
              onComplete?.();
            },
          });

          return () => {
            fullSplit.revert();
            shortSplit.revert();
            progressSplit.revert();
          };
        },
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="grain"></div>

      <div className="center">
        <h1 ref={nameRef} className="name">
          DEVLOPER
        </h1>
       

        <h1 ref={shortRef} className="short">
          Call me Giats
        </h1>
      </div>
      
     

      <h1 ref={progressRef} className="progress">
        0%
      </h1>
    </div>
  );
}