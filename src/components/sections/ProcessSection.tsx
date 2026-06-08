import { Map, Search, TrendingUp, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    Icon: Search,
    description:
      "We start with a deep-dive conversation to understand your current operations, biggest pain points, and the outcomes you're looking for. No assumptions — just listening.",
  },
  {
    number: "02",
    title: "Planning",
    Icon: Map,
    description:
      "I analyze what I've learned and design a clear roadmap. This includes prioritized quick wins, longer-term system improvements, and how we'll measure success.",
  },
  {
    number: "03",
    title: "Implementation",
    Icon: Wrench,
    description:
      "This is where the real work happens. I build systems, create documentation, set up tools, and begin executing with full accountability for delivery.",
  },
  {
    number: "04",
    title: "Optimization",
    Icon: TrendingUp,
    description:
      "Great systems don't stay static. I monitor, refine, and improve — ensuring our work continues to generate value as your business evolves.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#F7F4EB" }}
    >
      {/* Faint grid texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="process-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#4A1E2F"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" opacity="0.04" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div
            className="h-px w-8 flex-shrink-0"
            style={{ backgroundColor: "#8C5369" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#8C5369" }}
          >
            The Process
          </span>
          <div
            className="h-px w-8 flex-shrink-0"
            style={{ backgroundColor: "#8C5369" }}
          />
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center leading-tight tracking-tight mb-20 max-w-xl mx-auto"
          style={{ color: "#4A1E2F" }}
        >
          How We Work{" "}
          <span style={{ color: "#8C5369" }}>Together</span>
        </h2>

        {/* ── Desktop timeline ── */}
        <div className="hidden md:block relative">
          {/* Connecting mauve line — sits behind the step nodes */}
          <div className="absolute top-[3.25rem] left-0 right-0 flex items-center px-[calc(12.5%+0.5rem)] pointer-events-none">
            <div
              className="flex-1 h-px"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #8C5369 60%, transparent 100%)",
                opacity: 0.55,
              }}
            />
          </div>
          {/* Segments between each step */}
          <div
            className="absolute top-[3.25rem] left-0 right-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="relative mx-auto"
              style={{ maxWidth: "100%" }}
            >
              {/* Full-width mauve dashed connector */}
              <svg
                className="absolute top-0 left-0 right-0 w-full overflow-visible"
                height="2"
                aria-hidden="true"
              >
                <line
                  x1="12.5%"
                  y1="1"
                  x2="87.5%"
                  y2="1"
                  stroke="#8C5369"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>

          {/* Steps row */}
          <div className="grid grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <DesktopStep key={i} {...step} index={i} />
            ))}
          </div>
        </div>

        {/* ── Mobile stacked layout ── */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <MobileStep key={i} {...step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes processReveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .process-step {
          animation: processReveal 0.65s ease-out both;
        }
        .process-step-card:hover .process-icon-ring {
          background-color: #4A1E2F;
          transform: scale(1.08);
        }
        .process-step-card:hover .process-icon-ring svg {
          color: #8C5369;
        }
        .process-icon-ring {
          transition: background-color 0.25s ease, transform 0.25s ease;
        }
      `}</style>
    </section>
  );
}

/* ── Desktop step card ── */
function DesktopStep({
  number,
  title,
  Icon,
  description,
  index,
}: {
  number: string;
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  index: number;
}) {
  return (
    <div
      className="process-step process-step-card flex flex-col items-center text-center cursor-default"
      style={{ animationDelay: `${0.1 + index * 0.13}s` }}
    >
      {/* Number bubble + icon cluster */}
      <div className="relative mb-6 flex flex-col items-center">
        {/* Mauve numbered circle */}
        <div
          className="w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center font-bold text-sm tracking-wider z-10 relative"
          style={{
            backgroundColor: "#8C5369",
            color: "#FFFFFF",
            boxShadow: "0 4px 14px rgba(140,83,105,0.35)",
          }}
        >
          {number}
        </div>
        {/* Icon ring below the number bubble */}
        <div
          className="process-icon-ring mt-4 w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: "rgba(140,83,105,0.08)",
          }}
        >
          <Icon size={22} className="text-[#8C5369]" />
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-base font-bold mb-3 tracking-tight"
        style={{ color: "#4A1E2F" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "#2B2527" }}
      >
        {description}
      </p>
    </div>
  );
}

/* ── Mobile step row ── */
function MobileStep({
  number,
  title,
  Icon,
  description,
  index,
  isLast,
}: {
  number: string;
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <div
      className="process-step flex gap-5"
      style={{ animationDelay: `${0.08 + index * 0.12}s` }}
    >
      {/* Left column: number + vertical line */}
      <div className="flex flex-col items-center">
        {/* Number bubble */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10"
          style={{
            backgroundColor: "#8C5369",
            color: "#FFFFFF",
            boxShadow: "0 3px 10px rgba(140,83,105,0.3)",
          }}
        >
          {number}
        </div>
        {/* Connector line */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(140,83,105,0.5) 0%, rgba(140,83,105,0.1) 100%)",
              minHeight: "2.5rem",
            }}
          />
        )}
      </div>

      {/* Right column: content */}
      <div className="pb-10 flex-1">
        {/* Icon + title row */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(140,83,105,0.08)" }}
          >
            <Icon size={17} className="text-[#8C5369]" />
          </div>
          <h3
            className="text-base font-bold tracking-tight"
            style={{ color: "#4A1E2F" }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#2B2527" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
