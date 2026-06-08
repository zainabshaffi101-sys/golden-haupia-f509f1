import { Zap, Globe, Bot, BookOpen, GraduationCap, Heart } from "lucide-react";

const interests = [
  {
    icon: Zap,
    title: "Productivity Obsessive",
    description:
      "Always testing new frameworks, tools, and methods to work smarter. If there's a better way, I want to find it.",
  },
  {
    icon: Globe,
    title: "Remote Work Advocate",
    description:
      "I've built my career around the belief that great work happens anywhere when systems are strong.",
  },
  {
    icon: Bot,
    title: "AI Tools Explorer",
    description:
      "Staying ahead of the curve on AI tools that can automate the repetitive and amplify the strategic.",
  },
  {
    icon: BookOpen,
    title: "Business Systems Nerd",
    description:
      "I read business books the way others read novels. Understanding how businesses work is endlessly fascinating to me.",
  },
  {
    icon: GraduationCap,
    title: "Lifelong Learner",
    description:
      "Certifications, courses, webinars — I'm always adding to my toolkit and expanding what I can bring to the table.",
  },
  {
    icon: Heart,
    title: "Driven by Impact",
    description:
      "The best part of my work isn't the systems — it's seeing what leaders accomplish when the operational weight is lifted.",
  },
];

export default function PersonalBrandSection() {
  return (
    <section
      id="beyond"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#4A1E2F" }}
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large faint circle top-right */}
        <div
          className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full"
          style={{ backgroundColor: "#5E2840", opacity: 0.25 }}
        />
        {/* Smaller circle bottom-left */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
          style={{ backgroundColor: "#5E2840", opacity: 0.18 }}
        />
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="beyond-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8C5369" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#beyond-grid)" />
        </svg>
        {/* Mauve accent bar left edge */}
        <div
          className="absolute top-0 left-0 w-1 h-full opacity-40"
          style={{ backgroundColor: "#8C5369" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#8C5369" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#8C5369" }}
            >
              The Person Behind the Systems
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-5"
            style={{ color: "#FFFFFF" }}
          >
            Beyond Work
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Operations is more than a job — it's how I think. Here's what drives me beyond the work.
          </p>
        </div>

        {/* 3x2 interest grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#5E2840",
                boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px rgba(140,83,105,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.18)";
              }}
            >
              {/* Icon container */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(140,83,105,0.12)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "#8C5369" }} />
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold mb-2 leading-snug"
                style={{ color: "#FFFFFF" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {description}
              </p>

              {/* Subtle mauve corner accent on hover */}
              <div
                className="absolute top-0 right-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-tr-xl"
                style={{
                  borderTop: "2px solid #8C5369",
                  borderRight: "2px solid #8C5369",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
