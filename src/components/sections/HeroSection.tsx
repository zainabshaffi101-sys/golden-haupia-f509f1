import { Calendar, ChevronRight, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2+", label: "Years Experience", detail: "Ops & EA work" },
  { value: "15+", label: "Clients Served", detail: "Across industries" },
  { value: "30%", label: "Admin Reduced", detail: "On average" },
];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouse);
    return () => section?.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-8px) rotate(0.5deg); }
          66%       { transform: translateY(-4px) rotate(-0.5deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -300% center; }
          100% { background-position: 300% center; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.08); opacity: 0.9; }
        }
        @keyframes slideInBadge {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderTrace {
          0%   { clip-path: inset(0 100% 100% 0); }
          25%  { clip-path: inset(0 0 100% 0); }
          50%  { clip-path: inset(0 0 0 0); }
          75%  { clip-path: inset(100% 0 0 0); }
          100% { clip-path: inset(0 100% 100% 0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(6px); opacity: 1; }
        }

        .h-fade-1 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.05s; opacity: 0; }
        .h-fade-2 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.2s; opacity: 0; }
        .h-fade-3 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.35s; opacity: 0; }
        .h-fade-4 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.5s; opacity: 0; }
        .h-fade-5 { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.65s; opacity: 0; }
        .h-img    { animation: fadeRight 1s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.25s; opacity: 0; }
        .h-float  { animation: floatSlow 7s ease-in-out infinite; }
        .h-breathe { animation: breathe 4s ease-in-out infinite; }
        .h-scroll-bounce { animation: scrollBounce 2s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #6B2737 0%, #D4A0A8 35%, #FAF8F5 50%, #D4A0A8 65%, #6B2737 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        .cta-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(107,39,55,0.35); }
        .cta-primary:hover::before { opacity: 1; }
        .cta-primary:active { transform: translateY(-1px); }

        .cta-secondary {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .cta-secondary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(107,39,55,0.05);
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .cta-secondary:hover { transform: translateY(-2px); border-color: rgba(107,39,55,0.6) !important; }
        .cta-secondary:hover::after { opacity: 1; }

        .stat-card {
          transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .stat-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 32px rgba(107,39,55,0.15);
        }

        .photo-frame {
          transition: transform 0.1s ease-out;
        }

        .badge-dot {
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
        style={{ backgroundColor: "#FAF8F5" }}
      >
        {/* ── Ambient background orbs (parallax) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(201,160,160,0.22), transparent 68%)",
              transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
              transition: "transform 0.6s ease-out",
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(107,39,55,0.14), transparent 68%)",
              transform: `translate(${mousePos.x * 16}px, ${mousePos.y * 16}px)`,
              transition: "transform 0.8s ease-out",
            }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(237,232,220,0.5), transparent 70%)",
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: "transform 1s ease-out",
            }}
          />
        </div>

        {/* ── LEFT: Text Content ── */}
        <div className="relative flex flex-col justify-center px-8 py-24 lg:px-16 xl:px-24 lg:w-[55%] z-10">

          {/* Eyebrow badge */}
          <div className="h-fade-1 inline-flex items-center gap-2 mb-8 w-fit">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                backgroundColor: "rgba(107,39,55,0.08)",
                color: "#6B2737",
                border: "1px solid rgba(107,39,55,0.18)",
              }}
            >
              <span className="badge-dot w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: "#6B2737" }} />
              Operations &amp; Executive Support Specialist
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="h-fade-2 mb-5 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.1rem, 4.8vw, 3.8rem)",
              color: "#2C1A1F",
              letterSpacing: "-0.02em",
            }}
          >
            You're Working{" "}
            <em className="shimmer-text not-italic font-bold">in</em>{" "}
            the Business.
            <br className="hidden sm:block" />
            <span style={{ color: "#6B2737" }}>Let's Get You Back{" "}
              <span style={{ fontStyle: "italic" }}>to Leading It.</span>
            </span>
          </h1>

          {/* Elegant rule */}
          <div className="h-fade-3 flex items-center gap-3 mb-7">
            <div className="h-[1.5px] w-12 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
            <div className="h-[1px] w-16" style={{ backgroundColor: "rgba(201,160,160,0.35)" }} />
          </div>

          {/* Subheadline */}
          <p
            className="h-fade-3 text-base sm:text-lg mb-10 max-w-[520px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(44,26,31,0.68)",
              lineHeight: "1.85",
              fontWeight: 400,
            }}
          >
            I help founders and executives eliminate operational bottlenecks,
            reduce admin workload by up to{" "}
            <strong style={{ color: "#6B2737", fontWeight: 600 }}>30%</strong>, and reclaim{" "}
            <strong style={{ color: "#6B2737", fontWeight: 600 }}>15+ hours weekly</strong>{" "}
            through structured workflows and reliable executive support.
          </p>

          {/* CTA Buttons */}
          <div className="h-fade-4 flex flex-col sm:flex-row gap-3.5 mb-14">
            <a
              href="https://calendar.app.google/MQziGAszQY8wVMqp9"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm"
              style={{ backgroundColor: "#6B2737", color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              Book a Discovery Call
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </a>

            <a
              href="#projects"
              className="cta-secondary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm"
              style={{
                color: "#6B2737",
                border: "1.5px solid rgba(107,39,55,0.3)",
                backgroundColor: "transparent",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              View My Work
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>

          {/* Stats row */}
          <div className="h-fade-5 grid grid-cols-3 gap-3 max-w-[420px]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card rounded-2xl py-5 px-3 text-center"
                style={{
                  backgroundColor: hovered === i ? "rgba(237,232,220,0.9)" : "rgba(201,160,160,0.1)",
                  border: `1px solid ${hovered === i ? "rgba(107,39,55,0.2)" : "rgba(201,160,160,0.22)"}`,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <p
                  className="text-2xl sm:text-3xl font-bold mb-0.5 leading-none"
                  style={{ color: "#6B2737", fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[9px] uppercase tracking-[0.12em] mt-1"
                  style={{ color: "rgba(44,26,31,0.5)", fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="h-fade-5 flex items-center gap-2 mt-12 opacity-40">
            <ArrowDown className="w-3.5 h-3.5 h-scroll-bounce" style={{ color: "#6B2737" }} />
            <span className="text-[11px] uppercase tracking-[0.15em]" style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}>
              Scroll to explore
            </span>
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div className="relative flex items-center justify-center lg:w-[45%] min-h-[520px] lg:min-h-0 py-16 lg:py-0 z-10">

          {/* Soft sand background blob */}
          <div
            className="absolute inset-8 rounded-[40px] h-breathe"
            style={{ background: "linear-gradient(145deg, #EDE8DC 0%, rgba(201,160,160,0.35) 100%)" }}
          />

          {/* Photo frame */}
          <div
            className="h-img h-float photo-frame relative z-10 w-64 sm:w-72 lg:w-[290px] xl:w-[320px]"
            style={{
              transform: `perspective(800px) rotateY(${mousePos.x * -4}deg) rotateX(${mousePos.y * 2}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Decorative corner brackets */}
            <div
              className="absolute -top-4 -left-4 w-10 h-10"
              style={{ borderTop: "2px solid #6B2737", borderLeft: "2px solid #6B2737", borderRadius: "4px 0 0 0" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-10 h-10"
              style={{ borderBottom: "2px solid #6B2737", borderRight: "2px solid #6B2737", borderRadius: "0 0 4px 0" }}
            />
            {/* Ghost offset frame */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
              style={{ border: "1px solid rgba(201,160,160,0.35)" }}
            />

            {/* Image container */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ boxShadow: "0 32px 80px rgba(107,39,55,0.22), 0 8px 24px rgba(107,39,55,0.1)" }}
            >
              <img
                src="/headshot-1.png"
                alt="Zainab Shaffi — Operations & Executive Support Specialist"
                className="w-full h-auto block object-cover object-top"
                style={{ aspectRatio: "3/4" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: "linear-gradient(to top, rgba(107,39,55,0.15), transparent)" }}
              />
            </div>

            {/* Floating name card */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl text-center whitespace-nowrap"
              style={{ backgroundColor: "#6B2737", boxShadow: "0 10px 32px rgba(107,39,55,0.32)" }}
            >
              <p
                className="text-sm font-bold"
                style={{ color: "#FAF8F5", fontFamily: "'Playfair Display', serif" }}
              >
                Zainab Shaffi
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.15em] mt-0.5"
                style={{ color: "rgba(250,248,245,0.65)", fontFamily: "'Inter', sans-serif" }}
              >
                Operations Specialist
              </p>
            </div>

            {/* Floating stat badge */}
            <div
              className="absolute -top-5 -right-5 px-3.5 py-2.5 rounded-2xl text-center"
              style={{
                backgroundColor: "#EDE8DC",
                boxShadow: "0 6px 20px rgba(107,39,55,0.14)",
                border: "1px solid rgba(201,160,160,0.4)",
              }}
            >
              <p
                className="text-xl font-bold leading-none"
                style={{ color: "#6B2737", fontFamily: "'Playfair Display', serif" }}
              >
                15+
              </p>
              <p
                className="text-[9px] uppercase tracking-wide mt-1"
                style={{ color: "rgba(44,26,31,0.55)", fontFamily: "'Inter', sans-serif" }}
              >
                Hours saved
              </p>
            </div>

            {/* Second floating chip */}
            <div
              className="absolute -left-8 top-1/3 px-3 py-2 rounded-xl"
              style={{
                backgroundColor: "rgba(107,39,55,0.08)",
                border: "1px solid rgba(107,39,55,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}
              >
                ✦ Remote-Ready
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
