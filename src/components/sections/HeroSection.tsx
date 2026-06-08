import { Calendar, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel — Soft Taupe */}
      <div
        className="relative flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-24 lg:w-[55%] z-10"
        style={{ backgroundColor: "#DDD5C8" }}
      >
        {/* Geometric decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "#4A1E2F" }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: "#4A1E2F" }} />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8C5369" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute top-0 left-0 w-1 h-full opacity-40" style={{ backgroundColor: "#4A1E2F" }} />
          <div className="absolute bottom-40 right-16 w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: "#8C5369" }} />
          <div className="absolute bottom-36 right-24 w-1.5 h-1.5 rounded-full opacity-20" style={{ backgroundColor: "#8C5369" }} />
          <div className="absolute bottom-44 right-20 w-1 h-1 rounded-full opacity-15" style={{ backgroundColor: "#8C5369" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl" style={{ animation: "heroFadeIn 0.8s ease-out both" }}>
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#8C5369" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8C5369" }}>
              Operations &amp; Executive Support Specialist
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mb-6"
            style={{ color: "#4A1E2F", animation: "heroFadeIn 0.8s ease-out 0.15s both" }}
          >
            You're Working in the Business.{" "}
            <span style={{ color: "#8C5369" }}>Let's Get You Back to Leading It.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: "rgba(43,37,39,0.75)", animation: "heroFadeIn 0.8s ease-out 0.3s both" }}
          >
            I partner I help founders and executives eliminate operational bottlenecks,
            reduce administrative workload by up to 30%,
            and reclaim 15+ hours weekly through structured workflows and reliable executive support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4" style={{ animation: "heroFadeIn 0.8s ease-out 0.45s both" }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              style={{ backgroundColor: "#4A1E2F", color: "#F7F4EB" }}
            >
              <Calendar className="w-4 h-4" />
              Book a Discovery Call
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{ color: "#4A1E2F", border: "2px solid rgba(74,30,47,0.4)", backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,30,47,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(74,30,47,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(74,30,47,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              }}
            >
              View My Portfolio
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-12 pt-8 flex items-center gap-6"
            style={{ borderTop: "1px solid rgba(74,30,47,0.15)", animation: "heroFadeIn 0.8s ease-out 0.6s both" }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#4A1E2F" }}>2+</p>
              <p className="text-xs uppercase tracking-wide mt-0.5" style={{ color: "rgba(43,37,39,0.5)" }}>Years Experience</p>
            </div>
            <div className="w-px h-10 self-center" style={{ backgroundColor: "rgba(74,30,47,0.15)" }} />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#4A1E2F" }}>15+</p>
              <p className="text-xs uppercase tracking-wide mt-0.5" style={{ color: "rgba(43,37,39,0.5)" }}>Clients Served</p>
            </div>
            <div className="w-px h-10 self-center" style={{ backgroundColor: "rgba(74,30,47,0.15)" }} />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "#4A1E2F" }}>100%</p>
              <p className="text-xs uppercase tracking-wide mt-0.5" style={{ color: "rgba(43,37,39,0.5)" }}>Remote-Ready</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="relative flex items-center justify-center lg:w-[45%] min-h-[480px] lg:min-h-0 py-16 lg:py-0"
        style={{ backgroundColor: "#F7F4EB" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: "#8C5369" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: "#4A1E2F" }} />
        </div>

        <div className="relative z-10 w-72 sm:w-80 lg:w-[340px] xl:w-[380px]" style={{ animation: "heroSlideIn 0.9s ease-out 0.2s both" }}>
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl" style={{ border: "2px solid #8C5369", opacity: 0.35, borderRadius: "1rem" }} />
          <div className="absolute -top-2 -left-2 w-8 h-8 rounded-tl-xl" style={{ borderTop: "3px solid #4A1E2F", borderLeft: "3px solid #4A1E2F" }} />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-br-xl" style={{ borderBottom: "3px solid #4A1E2F", borderRight: "3px solid #4A1E2F" }} />

          <div className="relative overflow-hidden rounded-2xl" style={{ boxShadow: "0 25px 60px rgba(74,30,47,0.18), 0 8px 20px rgba(74,30,47,0.12)" }}>
            <img
              src="/headshot-on-white.jpg"
              alt="Zainab Shaffi — Operations &amp; Executive Support Specialist"
              className="w-full h-auto block object-cover object-top"
              style={{ aspectRatio: "3/4", objectFit: "cover" }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(74,30,47,0.15), transparent)" }} />
          </div>

          {/* Floating name card */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl text-center whitespace-nowrap"
            style={{ backgroundColor: "#DDD5C8", boxShadow: "0 8px 24px rgba(74,30,47,0.15)", border: "1px solid rgba(74,30,47,0.12)" }}
          >
            <p className="text-sm font-bold tracking-wide" style={{ color: "#4A1E2F" }}>Zainab Shaffi</p>
            <p className="text-xs mt-0.5 font-medium" style={{ color: "#8C5369" }}>Operations Specialist</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
