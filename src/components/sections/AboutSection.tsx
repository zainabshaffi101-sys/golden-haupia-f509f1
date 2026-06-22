import { useEffect, useRef, useState } from "react";

const differentiators = [
  {
    icon: "✦",
    title: "Strategic Partner, Not Task-Taker",
    body: "I look at the bigger picture and help identify where operational friction is costing you time and growth.",
  },
  {
    icon: "◈",
    title: "Systems Thinker",
    body: "Every solution I implement is designed to be repeatable, scalable, and easy to hand off.",
  },
  {
    icon: "◎",
    title: "Proactive Operator",
    body: "I anticipate needs before they become problems, keeping things moving without being asked.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function AboutSection() {
  const { ref: sectionRef, inView } = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .about-text-reveal { opacity: 0; }
        .about-text-reveal.in { animation: revealLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .about-img-reveal { opacity: 0; }
        .about-img-reveal.in { animation: revealRight 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .about-card-reveal { opacity: 0; }
        .about-card-reveal.in { animation: revealUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }

        .diff-card {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .diff-card:hover {
          transform: translateY(-6px);
        }

        .about-img-wrapper {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .about-img-wrapper:hover {
          transform: scale(1.02);
        }

        .pill-tag {
          transition: all 0.2s ease;
        }
        .pill-tag:hover {
          background-color: rgba(107,39,55,0.12) !important;
          color: #6B2737 !important;
        }
      `}</style>

      <section
        id="about"
        className="py-28 px-6"
        style={{ backgroundColor: "#FAF8F5" }}
      >
        <div className="max-w-6xl mx-auto" ref={sectionRef}>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT: Text */}
            <div className={`about-text-reveal ${inView ? "in" : ""}`} style={{ animationDelay: "0.05s" }}>

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1.5px] w-8" style={{ backgroundColor: "#C9A0A0" }} />
                <p
                  className="text-xs font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
                >
                  About Zainab
                </p>
              </div>

              <h2
                className="leading-[1.15] mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "#2C1A1F",
                  letterSpacing: "-0.02em",
                }}
              >
                Behind the{" "}
                <span style={{ color: "#6B2737", fontStyle: "italic" }}>Systems</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  "Organization isn't just a skill — it's a philosophy. I believe that when operations run smoothly, leaders can focus on what truly matters: growing their business, serving their clients, and leading their teams with clarity.",
                  "I specialize in helping founders, executives, and consultants cut through operational chaos. Whether it's untangling a packed calendar, building repeatable workflows, or creating documentation that actually gets used — I bring structure to complexity.",
                  "My approach is strategic, not transactional. I don't just complete tasks. I identify root causes, design better systems, and become a trusted partner in how your business operates day to day.",
                ].map((paragraph, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-base"
                    style={{
                      color: "rgba(44,26,31,0.72)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.85",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Calendar Management", "Notion Systems", "Airtable", "Inbox Zero", "SOPs", "Executive Support", "Google Workspace", "Project Coordination"].map((tag) => (
                  <span
                    key={tag}
                    className="pill-tag px-3.5 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(201,160,160,0.15)",
                      color: "#2B2527",
                      border: "1px solid rgba(201,160,160,0.3)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini CTA */}
              <a
                href="https://calendar.app.google/MQziGAszQY8wVMqp9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}
              >
                <span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>
                  Let's work together
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* RIGHT: Photo */}
            <div className={`about-img-reveal ${inView ? "in" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="relative">

                {/* Background decorative block */}
                <div
                  className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl"
                  style={{ backgroundColor: "rgba(201,160,160,0.2)", border: "1px solid rgba(201,160,160,0.25)" }}
                />

                {/* Photo */}
                <div
                  className="about-img-wrapper relative rounded-3xl overflow-hidden"
                  style={{
                    aspectRatio: "4/5",
                    boxShadow: "0 24px 64px rgba(107,39,55,0.18), 0 6px 20px rgba(107,39,55,0.1)",
                  }}
                >
                  <img
                    src="/headshot-2.jpg"
                    alt="Zainab Shaffi"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) parent.style.background = "linear-gradient(145deg, #EDE8DC, #C9A0A0)";
                    }}
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(107,39,55,0.18) 0%, transparent 50%)" }}
                  />
                </div>

                {/* Floating availability badge */}
                <div
                  className="absolute -top-4 -left-4 px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: "#FAF8F5",
                    boxShadow: "0 6px 24px rgba(107,39,55,0.12)",
                    border: "1px solid rgba(201,160,160,0.3)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#5A9B6A", boxShadow: "0 0 6px rgba(90,155,106,0.6)" }}
                    />
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#2B2527", fontFamily: "'Inter', sans-serif" }}
                    >
                      Available for new clients
                    </span>
                  </div>
                </div>

                {/* Location badge */}
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: "#6B2737",
                    boxShadow: "0 6px 20px rgba(107,39,55,0.25)",
                  }}
                >
                  <p className="text-xs font-semibold" style={{ color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}>
                    🌍 Remote · Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-20 h-[1px]"
            style={{ background: "linear-gradient(to right, transparent, rgba(201,160,160,0.4) 30%, rgba(201,160,160,0.4) 70%, transparent)" }}
          />

          {/* What Makes Me Different */}
          <div>
            <div className={`about-text-reveal ${inView ? "in" : ""} text-center mb-14`} style={{ animationDelay: "0.3s" }}>
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
              >
                Differentiators
              </p>
              <h3
                className="leading-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  color: "#2C1A1F",
                  letterSpacing: "-0.02em",
                }}
              >
                What Makes Me{" "}
                <span style={{ color: "#6B2737", fontStyle: "italic" }}>Different</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((item, i) => (
                <div
                  key={i}
                  className={`diff-card about-card-reveal ${inView ? "in" : ""} rounded-2xl p-8`}
                  style={{
                    animationDelay: `${0.4 + i * 0.12}s`,
                    backgroundColor: hoveredCard === i ? "#EDE8DC" : "#FFFFFF",
                    border: `1px solid ${hoveredCard === i ? "rgba(107,39,55,0.2)" : "rgba(201,160,160,0.2)"}`,
                    boxShadow: hoveredCard === i
                      ? "0 16px 40px rgba(107,39,55,0.12)"
                      : "0 2px 8px rgba(107,39,55,0.05)",
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 flex-shrink-0"
                    style={{
                      backgroundColor: hoveredCard === i ? "rgba(107,39,55,0.12)" : "rgba(201,160,160,0.15)",
                      color: "#6B2737",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h4
                    className="font-bold text-base mb-3 leading-snug"
                    style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}
                  >
                    {item.body}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-6 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: "#C9A0A0",
                      width: hoveredCard === i ? "100%" : "32px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
