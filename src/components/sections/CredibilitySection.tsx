export default function CredibilitySection() {
  const metrics = [
    { value: "100+", label: "Tasks Coordinated" },
    { value: "50+", label: "Meetings Managed" },
    { value: "10+", label: "Platforms Mastered" },
    { value: "100%", label: "Deadline Delivery" },
  ];

  return (
    <section
      id="credibility"
      style={{ backgroundColor: "#F7F4EB" }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#8C5369" }}
          >
            By the Numbers
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{
              color: "#4A1E2F",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Trusted to Keep Things Moving
          </h2>
          {/* Decorative rule */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#8C5369", opacity: 0.5 }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#8C5369" }}
            />
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#8C5369", opacity: 0.5 }}
            />
          </div>
        </div>

        {/* Metric cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 2px 8px rgba(74,30,47,0.07), 0 0 1px rgba(74,30,47,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 24px rgba(74,30,47,0.12), 0 0 1px rgba(74,30,47,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 8px rgba(74,30,47,0.07), 0 0 1px rgba(74,30,47,0.05)";
              }}
            >
              {/* Mauve accent line on top */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: "#8C5369" }}
              />

              <div className="px-8 py-9 flex flex-col items-center text-center">
                {/* Metric value */}
                <span
                  className="block text-5xl font-black leading-none mb-3 tabular-nums transition-colors duration-300"
                  style={{
                    color: "#4A1E2F",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {metric.value}
                </span>

                {/* Thin separator */}
                <div
                  className="w-8 h-px mb-3 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: "#8C5369" }}
                />

                {/* Label */}
                <span
                  className="text-sm font-medium tracking-wide uppercase"
                  style={{
                    color: "#2B2527",
                    letterSpacing: "0.08em",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                  }}
                >
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
