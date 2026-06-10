"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      // Active section tracking
      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');

        .nav-link-hover {
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1.5px;
          background-color: #6B2737;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link-hover:hover::after,
        .nav-link-hover.active::after {
          transform: scaleX(1);
        }
        .nav-link-hover:hover,
        .nav-link-hover.active {
          color: #6B2737 !important;
        }

        .nav-cta {
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(107,39,55,0.28);
        }
        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:active { transform: translateY(0); }

        .mobile-link {
          transition: all 0.18s ease;
          border-radius: 10px;
        }
        .mobile-link:hover {
          background-color: rgba(237,232,220,0.8);
          color: #6B2737 !important;
          padding-left: 20px;
        }

        .mobile-drawer {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-backdrop {
          transition: opacity 0.3s ease;
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(250,248,245,0.96)" : "#FAF8F5",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled
            ? "0 1px 0 rgba(107,39,55,0.08), 0 4px 24px rgba(107,39,55,0.06)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex-shrink-0 group"
            >
              <span
                className="block text-base font-bold leading-tight tracking-tight transition-opacity duration-150 group-hover:opacity-75"
                style={{ color: "#6B2737", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Zainab Shaffi
              </span>
              <span
                className="block text-[9px] font-semibold uppercase tracking-[0.2em] leading-tight mt-0.5"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
              >
                Operations Specialist
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`nav-link-hover px-4 py-2 text-sm font-medium ${activeSection === href.replace("#", "") ? "active" : ""}`}
                  style={{ color: "#2B2527", fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="https://calendar.app.google/MQziGAszQY8wVMqp9"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: "#6B2737", color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}
              >
                <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                Book a Call
              </a>

              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: isMobileOpen ? "#EDE8DC" : "transparent",
                  color: "#6B2737",
                }}
                onClick={() => setIsMobileOpen((v) => !v)}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent line on scroll */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-300"
          style={{
            background: "linear-gradient(to right, transparent, rgba(201,160,160,0.5) 30%, rgba(201,160,160,0.5) 70%, transparent)",
            opacity: isScrolled ? 1 : 0,
          }}
        />
      </nav>

      {/* Mobile backdrop */}
      <div
        className="nav-backdrop fixed inset-0 z-40 lg:hidden pointer-events-none"
        style={{ opacity: isMobileOpen ? 1 : 0, backgroundColor: "rgba(44,26,31,0.4)" }}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className="mobile-drawer fixed top-0 right-0 h-full z-50 lg:hidden w-72 max-w-[85vw] flex flex-col pointer-events-auto"
        style={{
          backgroundColor: "#FAF8F5",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: isMobileOpen ? "-12px 0 40px rgba(107,39,55,0.14)" : "none",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(201,160,160,0.25)" }}
        >
          <div>
            <span
              className="block text-base font-bold"
              style={{ color: "#6B2737", fontFamily: "'Playfair Display', serif" }}
            >
              Zainab Shaffi
            </span>
            <span
              className="block text-[9px] font-semibold uppercase tracking-[0.2em] mt-0.5"
              style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
            >
              Operations Specialist
            </span>
          </div>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-lg"
            style={{ color: "#6B2737", backgroundColor: "rgba(107,39,55,0.07)" }}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className="mobile-link flex items-center justify-between px-4 py-3.5 text-sm font-semibold"
              style={{
                color: activeSection === href.replace("#", "") ? "#6B2737" : "#2B2527",
                backgroundColor: activeSection === href.replace("#", "") ? "rgba(237,232,220,0.7)" : "transparent",
                fontFamily: "'Inter', sans-serif",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <span>{label}</span>
              {activeSection === href.replace("#", "") && (
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#6B2737" }} />
              )}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 py-6" style={{ borderTop: "1px solid rgba(201,160,160,0.25)" }}>
          <a
            href="https://calendar.app.google/MQziGAszQY8wVMqp9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#6B2737", color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}
          >
            <Calendar className="w-4 h-4" />
            Book a Discovery Call
          </a>
          <p
            className="text-center text-xs mt-3"
            style={{ color: "rgba(44,26,31,0.4)", fontFamily: "'Inter', sans-serif" }}
          >
            Free 30-minute call
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 lg:h-[70px]" />
    </>
  );
}
