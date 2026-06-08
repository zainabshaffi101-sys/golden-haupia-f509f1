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
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#D4A017" }}
            >
              About Zainab
            </p>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
              style={{
                color: "#0B1F3A",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                letterSpacing: "-0.02em",
              }}
            >
              Behind the Systems
            </h2>

            {/* Decorative rule */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-px w-12"
                style={{ backgroundColor: "#D4A017" }}
              />
              <div
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#D4A017" }}
              />
            </div>

            {/* Story paragraphs */}
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
                    color: "#1F2937",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    lineHeight: "1.8",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="flex flex-col justify-start">
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                backgroundColor: "#163B6D",
                boxShadow:
                  "0 20px 60px rgba(11,31,58,0.18), 0 4px 16px rgba(11,31,58,0.1)",
              }}
            >
              <img
                src="/headshot-on-white.jpg"
                alt="Zainab Shaffi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Graceful fallback when image is absent
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Overlay shown when image is missing or as a subtle tint */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                style={{ opacity: 0.35 }}
              >
                {/* Decorative monogram / placeholder visual */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="24"
                    r="14"
                    stroke="#D4A017"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M10 56c0-12.15 9.85-22 22-22s22 9.85 22 22"
                    stroke="#D4A017"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span
                  className="mt-4 text-xs tracking-widest uppercase"
                  style={{ color: "#D4A017", fontFamily: "'Georgia', serif" }}
                >
                  Zainab Shaffi
                </span>
              </div>

              {/* Bottom gold accent strip */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: "#D4A017" }}
              />
            </div>
          </div>
        </div>

        {/* What Makes Me Different — full-width below */}
        <div className="mt-20">
          {/* Sub-section heading */}
          <div className="mb-10">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#D4A017" }}
            >
              Differentiators
            </p>
            <h3
              className="text-2xl sm:text-3xl font-bold"
              style={{
                color: "#0B1F3A",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                letterSpacing: "-0.02em",
              }}
            >
              What Makes Me Different
            </h3>
          </div>

          {/* Differentiator list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#F7F8FA",
                  boxShadow: "0 1px 4px rgba(11,31,58,0.06)",
                  borderLeft: "3px solid #D4A017",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 6px 20px rgba(11,31,58,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 1px 4px rgba(11,31,58,0.06)";
                }}
              >
                {/* Gold bullet */}
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M2 8h12M10 4l4 4-4 4"
                      stroke="#D4A017"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4
                    className="font-bold text-base leading-snug"
                    style={{
                      color: "#0B1F3A",
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                  >
                    {item.title}
                  </h4>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#1F2937",
                    lineHeight: "1.75",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                  }}
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
