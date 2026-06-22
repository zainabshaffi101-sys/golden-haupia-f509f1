import { useEffect, useRef, useState } from "react";
import { Calendar, Settings, CheckSquare, Zap, Check } from "lucide-react";

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

type ExpertiseCard = { icon: React.ReactNode; title: string; items: string[]; };

const cards: ExpertiseCard[] = [
  {
    icon: <Calendar className="w-5 h-5" style={{ color: "#FAF8F5" }} />,
    title: "Executive Support",
    items: ["Calendar Management", "Inbox Management", "Travel Coordination", "Meeting Preparation", "Document Preparation", "Stakeholder Communication"],
  },
  {
    icon: <Settings className="w-5 h-5" style={{ color: "#FAF8F5" }} />,
    title: "Operations Management",
    items: ["SOP Development", "Process Documentation", "Workflow Optimization", "Process Improvement", "Systems Architecture", "Operational Analysis"],
  },
  {
    icon: <CheckSquare className="w-5 h-5" style={{ color: "#FAF8F5" }} />,
    title: "Project Coordination",
    items: ["Task Tracking", "Team Collaboration", "Follow-up Systems", "Deadline Management", "Status Reporting", "Cross-functional Coordination"],
  },
  {
    icon: <Zap className="w-5 h-5" style={{ color: "#FAF8F5" }} />,
    title: "Productivity Systems",
    items: ["Notion", "ClickUp", "Asana", "Google Workspace", "Microsoft Office", "Slack", "Zoom", "Calendly"],
  },
];

export default function ExpertiseSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes expertiseUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .exp-reveal { opacity: 0; }
        .exp-reveal.in { animation: expertiseUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .exp-card {
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .exp-card:hover {
          transform: translateY(-6px);
          background-color: #FFFFFF !important;
          box-shadow: 0 16px 40px rgba(107,39,55,0.12), 0 2px 8px rgba(107,39,55,0.05) !important;
        }
        .exp-card:hover .exp-bar { width: 100% !important; }
        .exp-bar { transition: width 0.4s cubic-bezier(0.22,1,0.36,1); }
      `}</style>

      <section id="expertise" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#F9F0F0" }}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10" ref={ref}>

          {/* Header */}
          <div className={`exp-reveal ${inView ? "in" : ""} mb-14`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                What I Do Best
              </span>
            </div>
            <h2 className="leading-tight max-w-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2C1A1F", letterSpacing: "-0.02em" }}>
              Areas of{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Expertise</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`exp-reveal ${inView ? "in" : ""} exp-card relative flex flex-col rounded-2xl overflow-hidden`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(201,160,160,0.2)",
                  boxShadow: "0 2px 10px rgba(107,39,55,0.04)",
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                {/* Top accent bar */}
                <div className="exp-bar h-[3px] w-2/5"
                  style={{ background: "linear-gradient(90deg, #6B2737, #C9A0A0)" }} />

                <div className="p-6 flex flex-col gap-5 flex-1">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #6B2737, #C9A0A0)" }}>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold leading-snug"
                    style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}>
                    {card.title}
                  </h3>

                  {/* Items */}
                  <ul className="flex flex-col gap-2 mt-auto">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#C9A0A0" }} strokeWidth={2.5} />
                        <span className="text-sm leading-snug"
                          style={{ color: "rgba(44,26,31,0.72)", fontFamily: "'Inter', sans-serif" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
