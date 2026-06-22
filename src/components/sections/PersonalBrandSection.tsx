import { useEffect, useRef, useState } from "react";
import { Zap, Globe, Bot, BookOpen, GraduationCap, Heart } from "lucide-react";

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

const interests = [
  {
    icon: Zap,
    title: "Productivity Obsessive",
    description: "Always testing new frameworks, tools, and methods to work smarter. If there's a better way, I want to find it.",
  },
  {
    icon: Globe,
    title: "Remote Work Advocate",
    description: "I've built my career around the belief that great work happens anywhere when systems are strong.",
  },
  {
    icon: Bot,
    title: "AI Tools Explorer",
    description: "Staying ahead of the curve on AI tools that can automate the repetitive and amplify the strategic.",
  },
  {
    icon: BookOpen,
    title: "Business Systems Nerd",
    description: "I read business books the way others read novels. Understanding how businesses work is endlessly fascinating to me.",
  },
  {
    icon: GraduationCap,
    title: "Lifelong Learner",
    description: "Certifications, courses, webinars — I'm always adding to my toolkit and expanding what I can bring to the table.",
  },
  {
    icon: Heart,
    title: "Driven by Impact",
    description: "The best part of my work isn't the systems — it's seeing what leaders accomplish when the operational weight is lifted.",
  },
];

export default function PersonalBrandSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes brandUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .brand-reveal { opacity: 0; }
        .brand-reveal.in { animation: brandUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .brand-card {
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .brand-card:hover {
          transform: translateY(-6px);
          background-color: #FFFFFF !important;
          box-shadow: 0 16px 40px rgba(107,39,55,0.12), 0 2px 8px rgba(107,39,55,0.05) !important;
        }
        .brand-card:hover .brand-icon {
          background: linear-gradient(135deg, #6B2737, #C9A0A0) !important;
          color: #FAF8F5 !important;
        }
        .brand-icon {
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .brand-card:hover .brand-icon { transform: scale(1.1); }

        .brand-card:hover .brand-corner {
          opacity: 1 !important;
        }
        .brand-corner {
          transition: opacity 0.25s ease;
        }
      `}</style>

      <section id="beyond" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

          {/* Header */}
          <div className={`brand-reveal ${inView ? "in" : ""} mb-14 max-w-2xl`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                The Person Behind the Systems
              </span>
            </div>
            <h2 className="leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2C1A1F", letterSpacing: "-0.02em" }}>
              Beyond{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Work</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed"
              style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif" }}>
              Operations is more than a job — it's how I think. Here's what drives me beyond the work.
            </p>
          </div>

          {/* 3×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interests.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`brand-reveal ${inView ? "in" : ""} brand-card relative rounded-2xl p-6`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(201,160,160,0.2)",
                  boxShadow: "0 2px 10px rgba(107,39,55,0.04)",
                  animationDelay: `${0.1 + i * 0.08}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="brand-icon inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                  style={{ backgroundColor: "rgba(201,160,160,0.15)", color: "#6B2737" }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold mb-2 leading-snug"
                  style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}>
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed"
                  style={{ color: "rgba(44,26,31,0.62)", fontFamily: "'Inter', sans-serif" }}>
                  {description}
                </p>

                {/* Corner accent on hover */}
                <div
                  className="brand-corner absolute top-0 right-0 w-6 h-6 opacity-0 rounded-tr-2xl"
                  style={{ borderTop: "2px solid #C9A0A0", borderRight: "2px solid #C9A0A0" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
