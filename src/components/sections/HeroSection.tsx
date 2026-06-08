import { Calendar, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel */}
      <div
        className="relative flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-24 lg:w-[55%] z-10"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        {/* Geometric decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large circle top-right of left panel */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
            style={{ backgroundColor: "#163B6D" }}
          />
          {/* Medium circle bottom-left */}
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10"
            style={{ backgroundColor: "#163B6D" }}
          />
          {/* Diagonal lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Gold accent bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full opacity-60"
            style={{ backgroundColor: "#D4A017" }}
          />
          {/* Small gold dot cluster */}
          <div
            className="absolute bottom-40 right-16 w-2 h-2 rounded-full opacity-40"
            style={{ backgroundColor: "#D4A017" }}
          />
          <div
            className="absolute bottom-36 right-24 w-1.5 h-1.5 rounded-full opacity-30"
            style={{ backgroundColor: "#D4A017" }}
          />
          <div
            className="absolute bottom-44 right-20 w-1 h-1 rounded-full opacity-20"
            style={{ backgroundColor: "#D4A017" }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-xl"
          style={{
            animation: "heroFadeIn 0.8s ease-out both",
          }}
        >
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-px w-8 flex-shrink-0"
              style={{ backgroundColor: "#D4A017" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#D4A017" }}
            >
              Operations &amp; Executive Support Specialist
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mb-6"
            style={{
              color: "#FFFFFF",
              animation: "heroFadeIn 0.8s ease-out 0.15s both",
            }}
          >
            Helping Founders and Executives{" "}
            <span style={{ color: "#D4A017" }}>Create More Time</span> Through
            Better Systems and Operational Excellence
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{
              color: "rgba(255,255,255,0.75)",
              animation: "heroFadeIn 0.8s ease-out 0.3s both",
            }}
          >
            I partner with busy professionals to streamline operations, organize
            priorities, and implement systems that improve productivity, reduce
            bottlenecks, and support sustainable business growth.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              animation: "heroFadeIn 0.8s ease-out 0.45s both",
            }}
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              style={{
                backgroundColor: "#D4A017",
                color: "#0B1F3A",
              }}
            >
              <Calendar className="w-4 h-4" />
              Book a Discovery Call
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                color: "#FFFFFF",
                border: "2px solid rgba(255,255,255,0.4)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
              }}
            >
              View My Portfolio
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Social proof / trust badges */}
          <div
            className="mt-12 pt-8 flex items-center gap-6"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              animation: "heroFadeIn 0.8s ease-out 0.6s both",
            }}
          >
            <div className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: "#D4A017" }}
              >
                5+
              </p>
              <p
                className="text-xs uppercase tracking-wide mt-0.5"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Years Experience
              </p>
            </div>
            <div
              className="w-px h-10 self-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            />
            <div className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: "#D4A017" }}
              >
                50+
              </p>
              <p
                className="text-xs uppercase tracking-wide mt-0.5"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Clients Served
              </p>
            </div>
            <div
              className="w-px h-10 self-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            />
            <div className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: "#D4A017" }}
              >
                100%
              </p>
              <p
                className="text-xs uppercase tracking-wide mt-0.5"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Remote-Ready
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="relative flex items-center justify-center lg:w-[45%] min-h-[480px] lg:min-h-0 py-16 lg:py-0"
        style={{ backgroundColor: "#F7F8FA" }}
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: "#163B6D" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "#D4A017" }}
          />
        </div>

        {/* Portrait container */}
        <div
          className="relative z-10 w-72 sm:w-80 lg:w-[340px] xl:w-[380px]"
          style={{
            animation: "heroSlideIn 0.9s ease-out 0.2s both",
          }}
        >
          {/* Decorative frame accent */}
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
            style={{
              border: "2px solid #D4A017",
              opacity: 0.35,
              borderRadius: "1rem",
            }}
          />
          {/* Gold corner accent */}
          <div
            className="absolute -top-2 -left-2 w-8 h-8 rounded-tl-xl"
            style={{
              borderTop: "3px solid #D4A017",
              borderLeft: "3px solid #D4A017",
            }}
          />
          <div
            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-br-xl"
            style={{
              borderBottom: "3px solid #D4A017",
              borderRight: "3px solid #D4A017",
            }}
          />

          {/* Portrait image */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              boxShadow:
                "0 25px 60px rgba(11,31,58,0.18), 0 8px 20px rgba(11,31,58,0.12)",
            }}
          >
            <img
              src="/headshot-on-white.jpg"
              alt="Zainab Shaffi — Operations &amp; Executive Support Specialist"
              className="w-full h-auto block object-cover object-top"
              style={{ aspectRatio: "3/4", objectFit: "cover" }}
            />
            {/* Subtle overlay gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,31,58,0.15), transparent)",
              }}
            />
          </div>

          {/* Floating name card */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl text-center whitespace-nowrap"
            style={{
              backgroundColor: "#0B1F3A",
              boxShadow: "0 8px 24px rgba(11,31,58,0.25)",
            }}
          >
            <p
              className="text-sm font-bold tracking-wide"
              style={{ color: "#FFFFFF" }}
            >
              Zainab Shaffi
            </p>
            <p
              className="text-xs mt-0.5 font-medium"
              style={{ color: "#D4A017" }}
            >
              Operations Specialist
            </p>
          </div>
        </div>
      </div>

      {/* Animation keyframes injected via style tag */}
      <style>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroSlideIn {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
