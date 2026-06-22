const differentiators = [
  {
    title: "Strategic Partner, Not Task-Taker",
    body: "I look at the bigger picture and help identify where operational friction is costing you time and growth.",
  },
  {
    title: "Systems Thinker",
    body: "Every solution I implement is designed to be repeatable, scalable, and easy to hand off.",
  },
  {
    title: "Proactive Operator",
    body: "I anticipate needs before they become problems, keeping things moving without being asked.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: "#F7F4EB" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#8C5369" }}
            >
              About Zainab
            </p>

            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
              style={{
                color: "#4A1E2F",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                letterSpacing: "-0.02em",
              }}
            >
              Behind the Systems
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12" style={{ backgroundColor: "#8C5369" }} />
              <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#8C5369" }} />
            </div>

            <div className="space-y-5">
              {[
                "Organization isn't just a skill — it's a philosophy. I believe that when operations run smoothly, leaders can focus on what truly matters: growing their business, serving their clients, and leading their teams with clarity.",
                "I specialize in helping founders, executives, and consultants cut through operational chaos. Whether it's untangling a packed calendar, building repeatable workflows, or creating documentation that actually gets used — I bring structure to complexity.",
                "My approach is strategic, not transactional. I don't just complete tasks. I identify root causes, design better systems, and become a trusted partner in how your business operates day to day.",
              ].map((paragraph, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-base"
                  style={{
                    color: "#2B2527",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    lineHeight: "1.8",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="flex flex-col justify-start">
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                backgroundColor: "#4A1E2F",
                boxShadow: "0 20px 60px rgba(74,30,47,0.18), 0 4px 16px rgba(74,30,47,0.1)",
              }}
            >
              <img
                src="/headshot-2.PNG"
                alt="Zainab Shaffi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

              <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                style={{ opacity: 0.35 }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="14" stroke="#8C5369" strokeWidth="1.5" fill="none" />
                  <path d="M10 56c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="#8C5369" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
                <span
                  className="mt-4 text-xs tracking-widest uppercase"
                  style={{ color: "#8C5369", fontFamily: "'Georgia', serif" }}
                >
                  Zainab Shaffi
                </span>
              </div>

              {/* Bottom accent strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: "#8C5369" }} />
            </div>
          </div>
        </div>

        {/* What Makes Me Different */}
        <div className="mt-20">
          <div className="mb-10">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#8C5369" }}
            >
              Differentiators
            </p>
            <h3
              className="text-2xl sm:text-3xl font-bold"
              style={{
                color: "#4A1E2F",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                letterSpacing: "-0.02em",
              }}
            >
              What Makes Me Different
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 1px 4px rgba(74,30,47,0.06)",
                  borderLeft: "3px solid #4A1E2F",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(74,30,47,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(74,30,47,0.06)";
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="#8C5369" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4
                    className="font-bold text-base leading-snug"
                    style={{ color: "#4A1E2F", fontFamily: "'Georgia', 'Times New Roman', serif" }}
                  >
                    {item.title}
                  </h4>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#2B2527", lineHeight: "1.75", fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
