import { Mail, Linkedin, MapPin, Calendar, Clock, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const inputBase: React.CSSProperties = {
  border: "1.5px solid rgba(201,160,160,0.35)",
  backgroundColor: "#FAF8F5",
  color: "#2B2527",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  borderRadius: "12px",
  padding: "12px 16px",
  width: "100%",
  outline: "none",
  transition: "all 0.2s ease",
};

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold mb-2"
        style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}
      >
        {label} {required && <span style={{ color: "#C9A0A0" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const focusStyle = (name: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === name ? "#6B2737" : "rgba(201,160,160,0.35)",
    boxShadow: focused === name ? "0 0 0 3px rgba(107,39,55,0.1)" : "none",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .contact-reveal { opacity: 0; }
        .contact-reveal.in { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .info-card {
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(107,39,55,0.12) !important;
        }

        .submit-btn {
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(107,39,55,0.3); }
        .submit-btn:hover::before { opacity: 1; }
        .submit-btn:active { transform: translateY(0); }

        .book-card {
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .book-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(107,39,55,0.35) !important;
        }
      `}</style>

      <section
        id="contact"
        className="relative py-28 lg:py-36"
        style={{ backgroundColor: "#EDE8DC" }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,160,160,0.6) 30%, rgba(201,160,160,0.6) 70%, transparent)" }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

          {/* Header */}
          <div className={`contact-reveal ${inView ? "in" : ""} mb-16 max-w-2xl`} style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1.5px] w-8 flex-shrink-0" style={{ backgroundColor: "#C9A0A0" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
              >
                Get In Touch
              </span>
            </div>
            <h2
              className="leading-[1.15] mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
                color: "#2C1A1F",
                letterSpacing: "-0.02em",
              }}
            >
              Let's Create{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Better Systems</span>
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "rgba(44,26,31,0.65)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
            >
              Ready to spend less time managing operations and more time growing your business? Let's connect.
            </p>
          </div>

          {/* Two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">

            {/* LEFT: Form */}
            <div
              className={`contact-reveal ${inView ? "in" : ""} relative rounded-3xl p-8 sm:p-10`}
              style={{
                animationDelay: "0.15s",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 32px rgba(107,39,55,0.08), 0 1px 4px rgba(107,39,55,0.05)",
              }}
            >
              {/* Corner bracket */}
              <div
                className="absolute top-0 left-0 w-10 h-10"
                style={{ borderTop: "2px solid #6B2737", borderLeft: "2px solid #6B2737", borderRadius: "12px 0 0 0" }}
              />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(107,39,55,0.1)" }}
                  >
                    <Send className="w-7 h-7" style={{ color: "#6B2737" }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#2C1A1F", fontFamily: "'Playfair Display', serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: "rgba(44,26,31,0.6)", fontFamily: "'Inter', sans-serif" }}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold underline underline-offset-4"
                    style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field id="contact-name" label="Full Name" required>
                      <input
                        id="contact-name" name="name" type="text" required placeholder="Your name"
                        style={focusStyle("name")}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </Field>
                    <Field id="contact-email" label="Email Address" required>
                      <input
                        id="contact-email" name="email" type="email" required placeholder="you@company.com"
                        style={focusStyle("email")}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </Field>
                  </div>

                  <Field id="contact-company" label="Company / Business Name">
                    <input
                      id="contact-company" name="company" type="text" placeholder="Your company (optional)"
                      style={focusStyle("company")}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                    />
                  </Field>

                  <Field id="contact-service" label="What do you need help with?">
                    <select
                      id="contact-service" name="service"
                      style={focusStyle("service")}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select a service</option>
                      <option>Calendar & Time Management</option>
                      <option>Workflow & Systems Design</option>
                      <option>Inbox & Communication Management</option>
                      <option>Project Coordination</option>
                      <option>Executive / Virtual Assistant Support</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field id="contact-message" label="Tell me more" required>
                    <textarea
                      id="contact-message" name="message" rows={5} required
                      placeholder="Describe your challenges, goals, or what you'd like to improve..."
                      style={{ ...focusStyle("message"), resize: "none" }}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="submit-btn w-full rounded-xl px-6 py-4 text-sm font-bold flex items-center justify-center gap-2.5"
                    style={{ backgroundColor: "#6B2737", color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: Info cards */}
            <div className={`contact-reveal ${inView ? "in" : ""} flex flex-col gap-4`} style={{ animationDelay: "0.28s" }}>

              {/* Email */}
              <a
                href="mailto:zainabshaffi101@gmail.com"
                className="info-card flex items-center gap-4 rounded-2xl p-5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(201,160,160,0.3)",
                  boxShadow: "0 2px 10px rgba(107,39,55,0.05)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(107,39,55,0.08)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#6B2737" }} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>Email</p>
                  <p className="text-sm font-semibold" style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}>zainabshaffi101@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zainab-adejoke-shaffi-1479ba35a"
                target="_blank"
                rel="noopener noreferrer"
                className="info-card flex items-center gap-4 rounded-2xl p-5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(201,160,160,0.3)",
                  boxShadow: "0 2px 10px rgba(107,39,55,0.05)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(107,39,55,0.08)" }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: "#6B2737" }} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>LinkedIn</p>
                  <p className="text-sm font-semibold" style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}>Zainab Adejoke Shaffi</p>
                </div>
              </a>

              {/* Location */}
              <div
                className="info-card flex items-center gap-4 rounded-2xl p-5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(201,160,160,0.3)",
                  boxShadow: "0 2px 10px rgba(107,39,55,0.05)",
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(107,39,55,0.08)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#6B2737" }} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>Location</p>
                  <p className="text-sm font-semibold" style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}>Nigeria · Remote Worldwide</p>
                </div>
              </div>

              {/* Book a Call CTA */}
              <a
                href="https://calendar.app.google/MQziGAszQY8wVMqp9"
                target="_blank"
                rel="noopener noreferrer"
                className="book-card flex items-center gap-4 rounded-2xl p-5"
                style={{
                  backgroundColor: "#6B2737",
                  boxShadow: "0 8px 24px rgba(107,39,55,0.28)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Calendar className="w-5 h-5" style={{ color: "#FAF8F5" }} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5" style={{ color: "rgba(250,248,245,0.55)", fontFamily: "'Inter', sans-serif" }}>Free · 30 minutes</p>
                  <p className="text-sm font-bold" style={{ color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}>Book a Discovery Call</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="rgba(250,248,245,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Response time */}
              <div className="flex items-center gap-2 px-1 mt-1">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C9A0A0" }} />
                <p className="text-xs" style={{ color: "rgba(44,26,31,0.5)", fontFamily: "'Inter', sans-serif" }}>
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
