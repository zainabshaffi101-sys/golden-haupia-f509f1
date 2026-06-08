const testimonials = [
  {
    quote:
      "Zainab transformed the way our operations run. Before working with her, we were constantly putting out fires. Now we have systems, clarity, and actually feel like a real business.",
    name: "Sarah M.",
    title: "Founder, Consulting Agency",
  },
  {
    quote:
      "I've worked with many executive assistants, but Zainab operates at a completely different level. She anticipates needs, solves problems proactively, and truly understands the big picture.",
    name: "David R.",
    title: "CEO, Tech Startup",
  },
  {
    quote:
      "The documentation system Zainab built for us was a game changer. We went from complete chaos to having everything organized and delegatable within weeks.",
    name: "Marcus T.",
    title: "Operations Director",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Subtle background accent — faint diagonal rule top-right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-16 -right-16 opacity-[0.035]"
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="210" cy="210" r="209.5" stroke="#D4A017" />
          <circle cx="210" cy="210" r="160" stroke="#D4A017" />
          <circle cx="210" cy="210" r="110" stroke="#D4A017" />
        </svg>
        <svg
          className="absolute -bottom-12 -left-12 opacity-[0.03]"
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="160" cy="160" r="159.5" stroke="#0B1F3A" />
          <circle cx="160" cy="160" r="110" stroke="#0B1F3A" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div
            className="h-px w-8 flex-shrink-0"
            style={{ backgroundColor: "#D4A017" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D4A017" }}
          >
            Testimonials
          </span>
          <div
            className="h-px w-8 flex-shrink-0"
            style={{ backgroundColor: "#D4A017" }}
          />
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center leading-tight tracking-tight mb-16 max-w-2xl mx-auto"
          style={{ color: "#0B1F3A" }}
        >
          Kind Words From People{" "}
          <span style={{ color: "#163B6D" }}>I've Worked With</span>
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonialsReveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .testimonial-card {
          animation: testimonialsReveal 0.6s ease-out both;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(11,31,58,0.10);
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  title,
  index,
}: {
  quote: string;
  name: string;
  title: string;
  index: number;
}) {
  return (
    <div
      className="testimonial-card relative flex flex-col rounded-2xl p-8 transition-all duration-300"
      style={{
        backgroundColor: "#F7F8FA",
        animationDelay: `${0.1 + index * 0.12}s`,
        boxShadow: "0 2px 16px rgba(11,31,58,0.05)",
      }}
    >
      {/* Gold opening quotation mark */}
      <div
        className="mb-4 leading-none select-none"
        aria-hidden="true"
        style={{
          fontSize: "5rem",
          lineHeight: "1",
          color: "#D4A017",
          fontFamily: "Georgia, 'Times New Roman', serif",
          marginTop: "-0.5rem",
          marginLeft: "-0.25rem",
          opacity: 0.85,
        }}
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p
        className="text-base leading-relaxed flex-1"
        style={{ color: "#1F2937" }}
      >
        {quote}
      </p>

      {/* Divider */}
      <div
        className="my-6 h-px"
        style={{ backgroundColor: "rgba(11,31,58,0.08)" }}
      />

      {/* Attribution */}
      <div className="flex items-center gap-3">
        {/* Monogram avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: "#0B1F3A", color: "#D4A017" }}
          aria-hidden="true"
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: "#0B1F3A" }}>
            {name}
          </p>
          <p
            className="text-xs mt-0.5 font-medium"
            style={{ color: "rgba(11,31,58,0.45)" }}
          >
            {title}
          </p>
        </div>
      </div>

      {/* Subtle gold left-border accent */}
      <div
        className="absolute left-0 top-8 bottom-8 w-0.5 rounded-full"
        style={{ backgroundColor: "#D4A017", opacity: 0.5 }}
        aria-hidden="true"
      />
    </div>
  );
}
