import { useEffect, useRef, useState } from "react";
import { Map, Search, TrendingUp, Wrench } from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    Icon: Search,
    description: "We start with a deep-dive conversation to understand your current operations, biggest pain points, and the outcomes you're looking for. No assumptions — just listening.",
  },
  {
    number: "02",
    title: "Planning",
    Icon: Map,
    description: "I analyze what I've learned and design a clear roadmap. This includes prioritized quick wins, longer-term system improvements, and how we'll measure success.",
  },
  {
    number: "03",
    title: "Implementation",
    Icon: Wrench,
    description: "This is where the real work happens. I build systems, create documentation, set up tools, and begin executing with full accountability for delivery.",
  },
  {
    number: "04",
    title: "Optimization",
    Icon: TrendingUp,
    description: "Great systems don't stay static. I monitor, refine, and improve — ensuring our work continues to generate value as your business evolves.",
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes processUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proc-reveal { opacity: 0; }
        .proc-reveal.in { animation: processUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .proc-card {
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .proc-card:hover {
          transform: translateY(-5px);
          background-color: #FFFFFF !important;
          box-shadow: 0 16px 40px rgba(107,39,55,0.12) !important;
        }
        .proc-card:hover .proc-icon {
          background: linear-gradient(135deg, #6B2737, #C9A0A0) !important;
          color: #FAF8F5 !important;
        }
        .proc-icon {
          transition: background 0.25s ease, color 0.25s ease;
        }
      `}</style>

      <section id="process" className="relative py-24 lg:py-32 px-6 overflow-hidden" style={{ backgroundColor: "#EDE8DC" }}>
        {/* Subtle grid texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="process-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6B2737" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#process-grid)" opacity="0.04" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <div className={`proc-reveal ${inView ? "in" : ""} text-center mb-20`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                The Process
              </span>
              <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
            </div>
            <h2 className="leading-tight max-w-xl mx-auto"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2C1A1F", letterSpacing: "-0.02em" }}>
              How We Work{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Together</span>
            </h2>
          </div>

          {/* ── Desktop timeline ── */}
          <div className="hidden md:block relative">
            {/* Dashed connector line */}
            <div className="absolute top-[3.25rem] left-0 right-0 pointer-events-none px-[12.5%]">
              <svg className="w-full overflow-visible" height="2">
                <line x1="0" y1="1" x2="100%" y2="1"
                  stroke="#C9A0A0" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.6" />
              </svg>
            </div>

            <div className="grid grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`proc-reveal ${inView ? "in" : ""} proc-card flex flex-col items-center text-center rounded-2xl p-6 cursor-default`}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(201,160,160,0.2)",
                    boxShadow: "0 2px 8px rgba(107,39,55,0.04)",
                    animationDelay: `${0.1 + i * 0.13}s`,
                  }}
                >
                  {/* Number bubble */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm tracking-wider mb-5 z-10 relative flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #6B2737, #C9A0A0)", color: "#FAF8F5", boxShadow: "0 4px 14px rgba(107,39,55,0.3)", fontFamily: "'Inter', sans-serif" }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="proc-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,160,160,0.15)", color: "#6B2737" }}>
                    <step.Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-3"
                    style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed"
                    style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif" }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile stacked ── */}
          <div className="md:hidden flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.title} className={`proc-reveal ${inView ? "in" : ""} flex gap-5`}
                style={{ animationDelay: `${0.08 + i * 0.12}s` }}>
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10"
                    style={{ background: "linear-gradient(135deg, #6B2737, #C9A0A0)", color: "#FAF8F5", boxShadow: "0 3px 10px rgba(107,39,55,0.3)", fontFamily: "'Inter', sans-serif" }}>
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px mt-2"
                      style={{ background: "linear-gradient(to bottom, rgba(201,160,160,0.5), rgba(201,160,160,0.1))", minHeight: "2.5rem" }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(201,160,160,0.15)", color: "#6B2737" }}>
                      <step.Icon size={17} />
                    </div>
                    <h3 className="text-base font-bold"
                      style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
