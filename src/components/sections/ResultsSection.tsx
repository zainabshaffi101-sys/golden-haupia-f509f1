type ResultCard = {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

const results: ResultCard[] = [
  {
    title: "Reduced Scheduling Conflicts",
    challenge:
      "Executive was losing 5+ hours/week to scheduling chaos and double-bookings",
    solution:
      "Implemented a centralized calendar system with clear booking rules and buffer protocols",
    outcome:
      "Eliminated scheduling conflicts and reclaimed hours for deep work",
  },
  {
    title: "Streamlined Onboarding Process",
    challenge:
      "New client onboarding was inconsistent, causing delays and poor first impressions",
    solution:
      "Built a structured onboarding workflow with checklists, templates, and automation triggers",
    outcome: "Reduced onboarding time by 60% and improved client satisfaction",
  },
  {
    title: "Created Scalable Operations Docs",
    challenge:
      "Business lacked documentation, making delegation and scaling nearly impossible",
    solution:
      "Developed a complete operations manual with SOPs, process maps, and training materials",
    outcome:
      "Enabled confident delegation and prepared the business for team growth",
  },
];

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#4A1E2F" }}
    >
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft radial glow top-right */}
        <div
          className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#5E2840" }}
        />
        {/* Bottom-left accent glow */}
        <div
          className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "#8C5369" }}
        />
        {/* Fine grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="results-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#8C5369"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#results-grid)" />
        </svg>
        {/* Vertical mauve rule left edge */}
        <div
          className="absolute top-0 left-0 w-px h-full opacity-20"
          style={{ backgroundColor: "#8C5369" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          className="mb-14 lg:mb-16"
          style={{ animation: "resultsFadeUp 0.7s ease-out both" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8 flex-shrink-0"
              style={{ backgroundColor: "#8C5369" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#8C5369" }}
            >
              Outcomes, Not Activities
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight max-w-lg"
            style={{ color: "#FFFFFF" }}
          >
            Impact{" "}
            <span className="relative inline-block" style={{ color: "#8C5369" }}>
              Beyond
            </span>{" "}
            Tasks
          </h2>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, i) => (
            <div
              key={result.title}
              className="group relative flex flex-col rounded-xl overflow-hidden"
              style={{
                backgroundColor: "#5E2840",
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15)",
                animation: `resultsFadeUp 0.65s ease-out ${0.15 + i * 0.12}s both`,
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 36px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15)";
              }}
            >
              {/* Mauve top accent bar */}
              <div
                className="h-1 w-full flex-shrink-0"
                style={{ backgroundColor: "#8C5369" }}
              />

              <div className="flex flex-col gap-5 p-6 flex-1">
                {/* Card index number + title */}
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold tabular-nums mt-0.5 flex-shrink-0"
                    style={{ color: "rgba(140,83,105,0.55)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-base font-bold leading-snug tracking-tight"
                    style={{ color: "#FFFFFF" }}
                  >
                    {result.title}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                />

                {/* Challenge / Solution / Outcome */}
                <div className="flex flex-col gap-4 flex-1">
                  {/* Challenge */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: "#8C5369" }}
                    >
                      Challenge
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {result.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: "#8C5369" }}
                    >
                      Solution
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {result.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div
                    className="flex flex-col gap-1 mt-auto pt-4"
                    style={{ borderTop: "1px solid rgba(140,83,105,0.2)" }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: "#8C5369" }}
                    >
                      Outcome
                    </span>
                    <p
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: "#FFFFFF" }}
                    >
                      {result.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes resultsFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
