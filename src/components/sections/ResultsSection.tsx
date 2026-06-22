import { useEffect, useRef, useState } from "react";

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

type ResultCard = { title: string; challenge: string; solution: string; outcome: string; };

const results: ResultCard[] = [
  {
    title: "Reduced Scheduling Conflicts",
    challenge: "Executive was losing 5+ hours/week to scheduling chaos and double-bookings",
    solution: "Implemented a centralized calendar system with clear booking rules and buffer protocols",
    outcome: "Eliminated scheduling conflicts and reclaimed hours for deep work",
  },
  {
    title: "Streamlined Onboarding Process",
    challenge: "New client onboarding was inconsistent, causing delays and poor first impressions",
    solution: "Built a structured onboarding workflow with checklists, templates, and automation triggers",
    outcome: "Reduced onboarding time by 60% and improved client satisfaction",
  },
  {
    title: "Created Scalable Operations Docs",
    challenge: "Business lacked documentation, making delegation and scaling nearly impossible",
    solution: "Developed a complete operations manual with SOPs, process maps, and training materials",
    outcome: "Enabled confident delegation and prepared the business for team growth",
  },
];

export default function ResultsSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes resultsUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .res-reveal { opacity: 0; }
        .res-reveal.in { animation: resultsUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .res-card {
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease;
        }
        .res-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(107,39,55,0.12), 0 4px 12px rgba(107,39,55,0.06) !important;
        }
        .res-bar { transition: width 0.4s cubic-bezier(0.22,1,0.36,1); }
        .res-card:hover .res-bar { width: 100% !important; }
      `}</style>

      <section id="results" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#EDE8DC" }}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10" ref={ref}>

          {/* Header */}
          <div className={`res-reveal ${inView ? "in" : ""} mb-14`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                Outcomes, Not Activities
              </span>
            </div>
            <h2 className="leading-tight max-w-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2C1A1F", letterSpacing: "-0.02em" }}>
              Real Work,{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Real Results</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map((result, i) => (
              <div
                key={result.title}
                className={`res-reveal ${inView ? "in" : ""} res-card relative flex flex-col rounded-2xl overflow-hidden`}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(201,160,160,0.25)",
                  boxShadow: "0 2px 12px rgba(107,39,55,0.06)",
                  animationDelay: `${0.15 + i * 0.12}s`,
                }}
              >
                {/* Top accent bar */}
                <div className="res-bar h-[3px] w-2/5"
                  style={{ background: "linear-gradient(90deg, #6B2737, #C9A0A0)" }} />

                <div className="flex flex-col gap-5 p-6 flex-1">
                  {/* Index + title */}
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold tabular-nums mt-0.5 flex-shrink-0"
                      style={{ color: "rgba(201,160,160,0.7)", fontFamily: "'Inter', sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold leading-snug"
                      style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}>
                      {result.title}
                    </h3>
                  </div>

                  <div className="h-px w-full" style={{ backgroundColor: "rgba(201,160,160,0.15)" }} />

                  <div className="flex flex-col gap-4 flex-1">
                    {/* Challenge */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] block mb-1"
                        style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>Challenge</span>
                      <p className="text-sm leading-relaxed"
                        style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif" }}>
                        {result.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] block mb-1"
                        style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>Solution</span>
                      <p className="text-sm leading-relaxed"
                        style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif" }}>
                        {result.solution}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="mt-auto pt-4"
                      style={{ borderTop: "1px solid rgba(201,160,160,0.2)" }}>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] block mb-1"
                        style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}>Outcome</span>
                      <p className="text-sm font-semibold leading-relaxed"
                        style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}>
                        {result.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
