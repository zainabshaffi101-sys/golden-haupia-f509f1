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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(11,31,58,0.10), 0 1px 0 rgba(11,31,58,0.06)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo / Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex-shrink-0 group"
            >
              <span
                className="block text-base font-bold leading-tight tracking-tight transition-opacity duration-150 group-hover:opacity-80"
                style={{ color: "#0B1F3A" }}
              >
                Zainab Shaffi
              </span>
              <span
                className="block text-[10px] font-semibold uppercase tracking-[0.18em] leading-tight"
                style={{ color: "#D4A017" }}
              >
                Operations Specialist
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium group transition-colors duration-150"
                  style={{ color: "#1F2937" }}
                >
                  <span className="relative">
                    {label}
                    {/* Gold underline on hover */}
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"
                      style={{ backgroundColor: "#D4A017" }}
                    />
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop CTA + Mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* Book a Call button — desktop */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                style={{
                  backgroundColor: "#0B1F3A",
                  color: "#FFFFFF",
                }}
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Call
              </a>

              {/* Hamburger — mobile only */}
              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
                style={{
                  backgroundColor: isMobileOpen ? "#F7F8FA" : "transparent",
                  color: "#0B1F3A",
                }}
                onClick={() => setIsMobileOpen((v) => !v)}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Thin gold progress line at bottom of nav */}
        {isScrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-40"
            style={{ backgroundColor: "#D4A017" }}
          />
        )}
      </nav>

      {/* Mobile menu drawer */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300 pointer-events-none"
        style={{ opacity: isMobileOpen ? 1 : 0 }}
        aria-hidden={!isMobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(11,31,58,0.45)" }}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className="absolute top-0 right-0 h-full w-72 max-w-[85vw] flex flex-col transition-transform duration-300 pointer-events-auto"
          style={{
            backgroundColor: "#FFFFFF",
            transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
            boxShadow: "-8px 0 32px rgba(11,31,58,0.12)",
          }}
        >
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div>
              <span
                className="block text-sm font-bold leading-tight"
                style={{ color: "#0B1F3A" }}
              >
                Zainab Shaffi
              </span>
              <span
                className="block text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#D4A017" }}
              >
                Operations Specialist
              </span>
            </div>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-150"
              style={{ color: "#1F2937" }}
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className="flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-150"
                style={{ color: "#1F2937" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F8FA";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0B1F3A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1F2937";
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA at bottom of mobile panel */}
          <div className="px-6 py-6 border-t" style={{ borderColor: "#E5E7EB" }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#0B1F3A",
                color: "#FFFFFF",
              }}
            >
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind sticky nav */}
      <div className="h-16 lg:h-[68px]" />
    </>
  );
}
