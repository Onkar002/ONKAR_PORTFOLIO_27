"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronUp, ArrowUp } from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  FiSearch,
  FiMail,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";

// ScrollToTop component moved outside
function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 z-50 h-20 w-20 rounded-full bg-white text-black shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp size={34} strokeWidth={2.5} />
    </button>
  );
}

function SocialIcon({ children, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-20 pb-10">
      {/* Scroll Top Button */}
      <ScrollToTop />

      <div className="max-w-7xl mx-auto px-5">
        <div className="rounded-[38px] border border-white/10 bg-[#111111]/95 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,.5)] px-10 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-lg tracking-[3px] font-semibold text-gray-300 uppercase">
              © 2026 All Rights Reserved.
            </div>

            {/* Right */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <SocialIcon href="https://www.linkedin.com/in/onkar-pawar-791557275/">
                <FaLinkedin size={19} />
              </SocialIcon>

              <SocialIcon href="https://github.com/Onkar002">
                <FaGithub size={19} />
              </SocialIcon>

              <SocialIcon href="#">
                <FaInstagram size={19} />
              </SocialIcon>

              <SocialIcon href="#">
                <FiSearch size={19} />
              </SocialIcon>

              

              <SocialIcon href="onkarmpawar2002@gmail.com">
                <FiMail size={19} />
              </SocialIcon>

              <SocialIcon href="#">
                <FiPhone size={19} />
              </SocialIcon>

              <SocialIcon href="#">
                <FiGlobe size={19} />
              </SocialIcon>

              <Link href="/FooterPage">
                <button className="ml-4 rounded-full bg-[#2B2B2B] hover:bg-[#363636] transition px-7 py-4 flex items-center gap-3">
                  <span className="tracking-[2px] text-white font-bold uppercase">
                    Onkar
                  </span>
                  <ChevronUp size={18} className="text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}