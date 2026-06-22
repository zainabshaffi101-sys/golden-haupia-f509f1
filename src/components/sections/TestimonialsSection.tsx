import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: "01",
    role: "Operations Manager",
    company: "Digital Marketing Agency",
    quote: "I highly recommend Zainab to anyone looking for a reliable and proactive Virtual Assistant. She has an incredible ability to bring order to busy schedules and complex workflows. Her professionalism, attention to detail, and positive attitude make her a valuable asset to any team.",
  },
  {
    id: "02",
    role: "Founder",
    company: "Online Coaching Business",
    quote: "Zainab is the kind of person every founder hopes to have in their corner. She is organized, dependable, and always willing to go the extra mile. Working with her gave me peace of mind knowing that important details were being handled with care.",
  },
  {
    id: "03",
    role: "Project Coordinator",
    company: "Creative Agency",
    quote: "I've had the pleasure of working with Zainab and can confidently say she is one of the most dependable professionals I've met. She communicates clearly, stays on top of responsibilities, and consistently delivers quality work. Any organization would benefit from having her on their team.",
  },
  {
    id: "04",
    role: "Financial Manager",
    company: "Energy Services",
    quote: "Working with Zainab has been an absolute pleasure. She brings a rare combination of professionalism, efficiency, and genuine care to her work. Her ability to stay organized, anticipate needs, and handle responsibilities with minimal supervision significantly improved our day-to-day operations.",
  },
  {
    id: "05",
    role: "Tech Founder",
    company: "B2B SaaS",
    quote: "Zainab is someone I recommend without hesitation. She is thoughtful, resourceful, and highly organized. Beyond her technical skills, she brings a level of dedication and professionalism that makes working with her both productive and enjoyable.",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (index === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 250);
  };

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const resetAuto = (index: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    goTo(index);
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const current = testimonials[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,600;1,700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes quoteIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .testi-reveal { opacity: 0; }
        .testi-reveal.in { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .quote-animate {
          animation: quoteIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .quote-fade {
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .testi-dot {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .testi-dot:hover { transform: scale(1.2); }

        .testi-card-mini {
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .testi-card-mini:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(107,39,55,0.12) !important;
        }

        .nav-arrow {
          transition: all 0.2s ease;
        }
        .nav-arrow:hover {
          background-color: #6B2737 !important;
          color: #FAF8F5 !important;
        }
      `}</style>

      <section
        id="testimonials"
        className="py-28 lg:py-36"
        style={{ backgroundColor: "#FAF8F5" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

          {/* Header */}
          <div className={`testi-reveal ${inView ? "in" : ""} text-center mb-16`} style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1.5px] w-8" style={{ backgroundColor: "#C9A0A0" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                Client Love
              </p>
              <div className="h-[1.5px] w-8" style={{ backgroundColor: "#C9A0A0" }} />
            </div>
            <h2
              className="leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "#2C1A1F",
                letterSpacing: "-0.02em",
              }}
            >
              What My Clients{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Say</span>
            </h2>
          </div>

          {/* Main testimonial card */}
          <div
            className={`testi-reveal ${inView ? "in" : ""} relative rounded-3xl p-10 sm:p-14 mb-8`}
            style={{
              animationDelay: "0.18s",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 40px rgba(107,39,55,0.08), 0 1px 4px rgba(107,39,55,0.04)",
              border: "1px solid rgba(201,160,160,0.2)",
            }}
          >
            {/* Large decorative quote mark */}
            <div
              className="absolute top-8 right-10 text-8xl leading-none select-none pointer-events-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "rgba(201,160,160,0.2)",
                lineHeight: 1,
              }}
            >
              "
            </div>

            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-12 h-12"
              style={{ borderTop: "2px solid #6B2737", borderLeft: "2px solid #6B2737", borderRadius: "12px 0 0 0" }}
            />

            <div className={animating ? "quote-fade" : "quote-animate"}>
              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#C9A0A0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1.5l2.06 4.18 4.61.67-3.34 3.25.79 4.6L9 11.77l-4.12 2.23.79-4.6L2.33 6.35l4.61-.67L9 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#2C1A1F",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                "{current.quote}"
              </blockquote>

              {/* Client info */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{ backgroundColor: "rgba(107,39,55,0.1)", color: "#6B2737", fontFamily: "'Playfair Display', serif" }}
                >
                  {current.id}
                </div>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}
                  >
                    Client {current.id}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
                  >
                    {current.role} · {current.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Nav arrows */}
            <div className="absolute bottom-10 right-10 flex gap-2">
              <button
                onClick={() => resetAuto((active - 1 + testimonials.length) % testimonials.length)}
                className="nav-arrow w-9 h-9 rounded-full flex items-center justify-center"
                style={{ border: "1.5px solid rgba(201,160,160,0.4)", color: "#6B2737", backgroundColor: "transparent" }}
                aria-label="Previous testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => resetAuto((active + 1) % testimonials.length)}
                className="nav-arrow w-9 h-9 rounded-full flex items-center justify-center"
                style={{ border: "1.5px solid rgba(201,160,160,0.4)", color: "#6B2737", backgroundColor: "transparent" }}
                aria-label="Next testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className={`testi-reveal ${inView ? "in" : ""} flex justify-center gap-2 mb-10`} style={{ animationDelay: "0.28s" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => resetAuto(i)}
                className="testi-dot rounded-full"
                style={{
                  width: active === i ? "28px" : "8px",
                  height: "8px",
                  backgroundColor: active === i ? "#6B2737" : "rgba(201,160,160,0.4)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Mini cards row */}
          <div
            className={`testi-reveal ${inView ? "in" : ""} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3`}
            style={{ animationDelay: "0.38s" }}
          >
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => resetAuto(i)}
                className="testi-card-mini text-left rounded-2xl p-4"
                style={{
                  backgroundColor: active === i ? "#EDE8DC" : "#FFFFFF",
                  border: `1px solid ${active === i ? "rgba(107,39,55,0.25)" : "rgba(201,160,160,0.2)"}`,
                  boxShadow: active === i
                    ? "0 4px 16px rgba(107,39,55,0.1)"
                    : "0 1px 4px rgba(107,39,55,0.04)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3"
                  style={{
                    backgroundColor: active === i ? "rgba(107,39,55,0.15)" : "rgba(201,160,160,0.15)",
                    color: "#6B2737",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {t.id}
                </div>
                <p
                  className="text-[11px] font-semibold leading-tight"
                  style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}
                >
                  Client {t.id}
                </p>
                <p
                  className="text-[10px] mt-0.5 leading-tight"
                  style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
                >
                  {t.role}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
