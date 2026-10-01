"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Sun,
  Moon,
  Trophy,
  Send,
  Briefcase,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState("");
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const aboutMenuRef = useRef(null);

  /* =====================================================
     LOAD SAVED THEME
  ===================================================== */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  /* =====================================================
     APPLY THEME
  ===================================================== */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");

      localStorage.setItem("theme", "dark");

      document.body.style.backgroundColor = "#050505";
      document.body.style.color = "#ffffff";
    } else {
      root.classList.remove("dark");
      root.classList.add("light");

      localStorage.setItem("theme", "light");

      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#111111";
    }
  }, [darkMode]);

  /* =====================================================
     CLOCK
  ===================================================== */

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      let hours = now.getHours();

      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours || 12;

      setTime(
        `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
     CLOSE ABOUT MENU - OUTSIDE CLICK
  ===================================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(event.target)
      ) {
        setShowAboutMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowAboutMenu(false);
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU ON DESKTOP
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
     TOGGLE THEME
  ===================================================== */

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  /* =====================================================
     TOGGLE ABOUT MENU
  ===================================================== */

  const toggleAboutMenu = () => {
    setShowAboutMenu((prev) => !prev);
  };

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMobileMenu = () => {
    setOpen(false);
    setShowAboutMenu(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 md:top-6 left-0 right-0 z-50 px-3 sm:px-4 md:px-5">
      <div className="w-full max-w-7xl mx-auto">

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <nav
          className={`
            w-full
            min-h-[64px]
            sm:min-h-[70px]
            md:h-20
            rounded-2xl
            sm:rounded-3xl
            md:rounded-full
            px-4
            sm:px-5
            md:px-6
            lg:px-8
            flex
            items-center
            justify-between
            gap-3
            relative
            border
            backdrop-blur-2xl
            shadow-2xl
            transition-all
            duration-500

            ${
              darkMode
                ? `
                  bg-black/70
                  border-white/10
                  text-white
                `
                : `
                  bg-white/80
                  border-black/10
                  text-black
                `
            }
          `}
        >

          {/* =====================================================
              CLOCK
          ===================================================== */}

          <div
            className={`
              flex-shrink-0
              font-black
              tracking-[1px]
              sm:tracking-[2px]
              md:tracking-[3px]
              text-sm
              xs:text-base
              sm:text-lg
              md:text-2xl
              lg:text-3xl
              whitespace-nowrap
              transition-colors
              duration-300

              ${darkMode ? "text-white" : "text-black"}
            `}
          >
            {time}
          </div>

          {/* =====================================================
              DESKTOP MENU
          ===================================================== */}

          <div
            className="
              hidden
              md:flex
              items-center
              justify-center
              gap-4
              lg:gap-7
              xl:gap-10
              flex-1
            "
          >

            {/* HOME */}

            <Link
              href="/"
              className={`
                px-5
                lg:px-7
                py-2.5
                lg:py-3
                rounded-full
                text-sm
                lg:text-base
                transition-all
                duration-300
                whitespace-nowrap

                ${
                  darkMode
                    ? `
                      bg-neutral-800
                      text-white
                      hover:bg-neutral-700
                    `
                    : `
                      bg-neutral-200
                      text-black
                      hover:bg-neutral-300
                    `
                }
              `}
            >
              Home
            </Link>

            {/* =====================================================
                ABOUT DROPDOWN
            ===================================================== */}

            <div
              ref={aboutMenuRef}
              className="relative"
              onMouseEnter={() => setShowAboutMenu(true)}
              onMouseLeave={() => setShowAboutMenu(false)}
            >
              <button
                type="button"
                onClick={toggleAboutMenu}
                className={`
                  flex
                  items-center
                  gap-1.5
                  lg:gap-2
                  text-sm
                  lg:text-base
                  transition-colors
                  duration-300
                  whitespace-nowrap
                  py-3

                  ${
                    darkMode
                      ? "text-white hover:text-cyan-400"
                      : "text-black hover:text-cyan-600"
                  }
                `}
              >
                About

                <ChevronDown
                  size={17}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      showAboutMenu
                        ? "rotate-180"
                        : "rotate-0"
                    }
                  `}
                />
              </button>

              {/* =====================================================
                  DESKTOP ABOUT DROPDOWN
              ===================================================== */}

              <div
                className={`
                  absolute
                  top-[calc(100%+12px)]
                  left-1/2
                  -translate-x-1/2
                  transition-all
                  duration-300

                  ${
                    showAboutMenu
                      ? "opacity-100 translate-y-0 visible pointer-events-auto"
                      : "opacity-0 -translate-y-3 invisible pointer-events-none"
                  }
                `}
              >
                <div
                  className={`
                    backdrop-blur-2xl
                    border
                    rounded-[28px]
                    sm:rounded-[35px]
                    p-4
                    sm:p-5
                    md:p-6
                    shadow-2xl
                    flex
                    gap-3
                    sm:gap-5
                    md:gap-6

                    ${
                      darkMode
                        ? `
                          bg-[#1b1b1b]/95
                          border-white/10
                        `
                        : `
                          bg-white/95
                          border-black/10
                        `
                    }
                  `}
                >
                  <DockIcon
                    href="/achievement"
                    icon={<Trophy size={24} />}
                    label="Achievement"
                    darkMode={darkMode}
                    onClick={() => setShowAboutMenu(false)}
                  />

                  <DockIcon
                    href="/journey"
                    icon={<Send size={24} />}
                    label="Journey"
                    darkMode={darkMode}
                    onClick={() => setShowAboutMenu(false)}
                  />

                  <DockIcon
                    href="/experience"
                    icon={<Briefcase size={24} />}
                    label="Experience"
                    darkMode={darkMode}
                    onClick={() => setShowAboutMenu(false)}
                  />
                </div>
              </div>
            </div>

            {/* CONTACT */}

            <Link
              href="/contact"
              className={`
                inline-flex
                items-center
                justify-center
                w-[90px]
                lg:w-[110px]
                h-[42px]
                lg:h-[46px]
                rounded-full
                text-sm
                lg:text-base
                font-medium
                transition-all
                duration-300
                hover:scale-105
                whitespace-nowrap

                ${
                  darkMode
                    ? `
                      bg-neutral-800
                      text-white
                      hover:bg-cyan-900
                    `
                    : `
                      bg-neutral-200
                      text-black
                      hover:bg-cyan-100
                    `
                }
              `}
            >
              Contact
            </Link>
          </div>

          {/* =====================================================
              RIGHT ICONS DESKTOP
          ===================================================== */}

          <div
            className="
              hidden
              md:flex
              items-center
              justify-end
              gap-2
              lg:gap-3
              flex-shrink-0
            "
          >

            <IconButton
              ariaLabel="Search"
              darkMode={darkMode}
            >
              <Search size={17} />
            </IconButton>

            <IconButton
              ariaLabel="Language"
              darkMode={darkMode}
            >
              <Globe size={17} />
            </IconButton>

            {/* THEME TOGGLE */}

            <IconButton
              ariaLabel={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              onClick={toggleTheme}
              darkMode={darkMode}
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </IconButton>

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => {
              setOpen((prev) => !prev);
              setShowAboutMenu(false);
            }}
            className={`
              md:hidden
              flex-shrink-0
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              border
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              active:scale-95

              ${
                darkMode
                  ? `
                    bg-white/10
                    border-white/10
                    text-white
                    hover:bg-white/20
                  `
                  : `
                    bg-black/5
                    border-black/10
                    text-black
                    hover:bg-black/10
                  `
              }
            `}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </nav>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300

            ${
              open
                ? "max-h-[700px] opacity-100 mt-3"
                : "max-h-0 opacity-0 mt-0"
            }
          `}
        >
          <div
            className={`
              rounded-3xl
              p-5
              sm:p-6
              border
              shadow-2xl
              backdrop-blur-2xl
              transition-all
              duration-500

              ${
                darkMode
                  ? `
                    bg-black/80
                    border-white/10
                  `
                  : `
                    bg-white/90
                    border-black/10
                  `
              }
            `}
          >

            <div className="flex flex-col gap-2">

              {/* HOME */}

              <MobileLink
                href="/"
                label="Home"
                darkMode={darkMode}
                onClick={closeMobileMenu}
              />

              {/* =====================================================
                  MOBILE ABOUT
              ===================================================== */}

              <div>
                <button
                  type="button"
                  onClick={toggleAboutMenu}
                  className={`
                    w-full
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3.5
                    rounded-2xl
                    text-left
                    transition-all

                    ${
                      darkMode
                        ? `
                          text-white
                          hover:bg-white/10
                        `
                        : `
                          text-black
                          hover:bg-black/5
                        `
                    }
                  `}
                >
                  <span>About</span>

                  <ChevronDown
                    size={18}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        showAboutMenu
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* MOBILE ABOUT SUBMENU */}

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      showAboutMenu
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div
                    className={`
                      ml-3
                      mt-2
                      pl-3
                      border-l
                      flex
                      flex-col
                      gap-1

                      ${
                        darkMode
                          ? "border-white/10"
                          : "border-black/10"
                      }
                    `}
                  >

                    <MobileSubLink
                      href="/achievement"
                      icon={<Trophy size={17} />}
                      label="Achievement"
                      darkMode={darkMode}
                      onClick={closeMobileMenu}
                    />

                    <MobileSubLink
                      href="/journey"
                      icon={<Send size={17} />}
                      label="Journey"
                      darkMode={darkMode}
                      onClick={closeMobileMenu}
                    />

                    <MobileSubLink
                      href="/experience"
                      icon={<Briefcase size={17} />}
                      label="Experience"
                      darkMode={darkMode}
                      onClick={closeMobileMenu}
                    />

                  </div>
                </div>
              </div>

              {/* CONTACT */}

              <MobileLink
                href="/contact"
                label="Contact"
                darkMode={darkMode}
                onClick={closeMobileMenu}
              />

              {/* =====================================================
                  MOBILE ICONS
              ===================================================== */}

              <div
                className={`
                  flex
                  items-center
                  gap-3
                  pt-4
                  mt-2
                  border-t

                  ${
                    darkMode
                      ? "border-white/10"
                      : "border-black/10"
                  }
                `}
              >

                <IconButton
                  ariaLabel="Search"
                  darkMode={darkMode}
                >
                  <Search size={18} />
                </IconButton>

                <IconButton
                  ariaLabel="Language"
                  darkMode={darkMode}
                >
                  <Globe size={18} />
                </IconButton>

                {/* MOBILE THEME TOGGLE */}

                <IconButton
                  ariaLabel={
                    darkMode
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  onClick={toggleTheme}
                  darkMode={darkMode}
                >
                  {darkMode ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </IconButton>

              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =====================================================
   ICON BUTTON
===================================================== */

function IconButton({
  children,
  onClick,
  ariaLabel,
  darkMode,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        h-10
        w-10
        sm:h-11
        sm:w-11
        rounded-full
        flex
        items-center
        justify-center
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        flex-shrink-0
        border

        ${
          darkMode
            ? `
              bg-white/5
              border-white/10
              text-white
              hover:bg-white/10
            `
            : `
              bg-black/5
              border-black/10
              text-black
              hover:bg-black/10
            `
        }
      `}
    >
      {children}
    </button>
  );
}

/* =====================================================
   DESKTOP DOCK ICON
===================================================== */

function DockIcon({
  icon,
  label,
  href,
  onClick,
  darkMode,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={label}
      className="relative group block"
    >

      {/* TOOLTIP */}

      <span
        className={`
          absolute
          -top-10
          sm:-top-11
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-lg
          px-2.5
          sm:px-3
          py-1
          text-[10px]
          sm:text-xs
          font-semibold
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
          z-20

          ${
            darkMode
              ? "bg-white text-black"
              : "bg-black text-white"
          }
        `}
      >
        {label}
      </span>

      {/* ICON */}

      <span
        className={`
          w-14
          h-14
          sm:w-16
          sm:h-16
          md:w-20
          md:h-20
          rounded-2xl
          md:rounded-3xl
          border
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:-translate-y-2

          ${
            darkMode
              ? `
                bg-white/10
                border-white/10
                text-white
                hover:bg-cyan-500/20
              `
              : `
                bg-black/5
                border-black/10
                text-black
                hover:bg-cyan-500/10
              `
          }
        `}
      >
        {icon}
      </span>

    </Link>
  );
}

/* =====================================================
   MOBILE LINK
===================================================== */

function MobileLink({
  href,
  label,
  onClick,
  darkMode,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        w-full
        px-4
        py-3.5
        rounded-2xl
        transition-all
        duration-200
        text-sm
        sm:text-base

        ${
          darkMode
            ? `
              text-white
              hover:bg-white/10
            `
            : `
              text-black
              hover:bg-black/5
            `
        }
      `}
    >
      {label}
    </Link>
  );
}

/* =====================================================
   MOBILE SUB LINK
===================================================== */

function MobileSubLink({
  href,
  icon,
  label,
  onClick,
  darkMode,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex
        items-center
        gap-3
        px-3
        py-3
        rounded-xl
        transition-all
        duration-200
        text-sm

        ${
          darkMode
            ? `
              text-white/80
              hover:text-white
              hover:bg-white/10
            `
            : `
              text-black/70
              hover:text-black
              hover:bg-black/5
            `
        }
      `}
    >
      <span className="text-cyan-400">
        {icon}
      </span>

      <span>{label}</span>
    </Link>
  );
}