import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const metrics = [
  { raw: 100, value: "100+", label: "Tasks Coordinated", icon: "✦" },
  { raw: 50,  value: "50+",  label: "Meetings Managed",  icon: "◈" },
  { raw: 10,  value: "10+",  label: "Platforms Mastered", icon: "⬡" },
  { raw: 100, value: "100%", label: "Deadline Delivery",  icon: "◉" },
];

function MetricCard({ metric, index, active }: { metric: typeof metrics[0]; index: number; active: boolean }) {
  const count = useCountUp(metric.raw, 1400, active);
  const suffix = metric.value.includes("%") ? "%" : "+";
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: hovered ? "#FFFFFF" : "rgba(255,255,255,0.8)",
        border: `1px solid ${hovered ? "rgba(107,39,55,0.2)" : "rgba(201,160,160,0.2)"}`,
        boxShadow: hovered
          ? "0 16px 40px rgba(107,39,55,0.14), 0 0 0 1px rgba(107,39,55,0.06)"
          : "0 2px 12px rgba(107,39,55,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar — animates width on hover */}
      <div
        className="h-[3px] transition-all duration-500"
        style={{
          background: "linear-gradient(90deg, #6B2737, #C9A0A0)",
          width: hovered ? "100%" : "40%",
        }}
      />

      <div className="px-8 py-10 flex flex-col items-center text-center">
        {/* Icon */}
        <span
          className="text-xl mb-4 transition-all duration-300"
          style={{ color: hovered ? "#6B2737" : "#C9A0A0" }}
        >
          {metric.icon}
        </span>

        {/* Animated number */}
        <span
          className="block text-5xl font-black leading-none mb-3 tabular-nums"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#6B2737",
            letterSpacing: "-0.03em",
          }}
        >
          {active ? `${count}${suffix}` : metric.value}
        </span>

        {/* Separator */}
        <div
          className="h-px mb-4 transition-all duration-500 rounded-full"
          style={{
            width: hovered ? "3rem" : "2rem",
            background: "linear-gradient(90deg, #6B2737, #C9A0A0)",
          }}
        />

        {/* Label */}
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(44,26,31,0.6)", fontFamily: "'Inter', sans-serif" }}
        >
          {metric.label}
        </span>
      </div>

      {/* Subtle glow on hover */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(107,39,55,0.05), transparent 70%)" }}
        />
      )}
    </div>
  );
}

export default function CredibilitySection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cred-reveal { opacity: 0; }
        .cred-reveal.in { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>

      <section id="credibility" className="py-24 px-6" style={{ backgroundColor: "#EDE8DC" }}>
        <div className="max-w-6xl mx-auto" ref={ref}>

          {/* Header */}
          <div className={`cred-reveal ${inView ? "in" : ""} text-center mb-14`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#C9A0A0" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                By the Numbers
              </p>
              <div className="h-px w-8" style={{ backgroundColor: "#C9A0A0" }} />
            </div>

            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#2C1A1F",
                letterSpacing: "-0.02em",
              }}
            >
              Trusted to Keep{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Things Moving</span>
            </h2>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`cred-reveal ${inView ? "in" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <MetricCard metric={metric} index={i} active={inView} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
