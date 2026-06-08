import { Calendar, Settings, CheckSquare, Zap, Check } from "lucide-react";

type ExpertiseCard = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

const cards: ExpertiseCard[] = [
  {
    icon: <Calendar className="w-5 h-5" style={{ color: "#0B1F3A" }} />,
    title: "Executive Support",
    items: [
      "Calendar Management",
      "Inbox Management",
      "Travel Coordination",
      "Meeting Preparation",
      "Document Preparation",
      "Stakeholder Communication",
    ],
  },
  {
    icon: <Settings className="w-5 h-5" style={{ color: "#0B1F3A" }} />,
    title: "Operations Management",
    items: [
      "SOP Development",
      "Process Documentation",
      "Workflow Optimization",
      "Process Improvement",
      "Systems Architecture",
      "Operational Analysis",
    ],
  },
  {
    icon: <CheckSquare className="w-5 h-5" style={{ color: "#0B1F3A" }} />,
    title: "Project Coordination",
    items: [
      "Task Tracking",
      "Team Collaboration",
      "Follow-up Systems",
      "Deadline Management",
      "Status Reporting",
      "Cross-functional Coordination",
    ],
  },
  {
    icon: <Zap className="w-5 h-5" style={{ color: "#0B1F3A" }} />,
    title: "Productivity Systems",
    items: [
      "Notion",
      "ClickUp",
      "Asana",
      "Google Workspace",
      "Microsoft Office",
      "Slack",
      "Zoom",
      "Calendly",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#F7F8FA" }}
    >
      {/* Subtle decorative background geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.07] blur-3xl"
          style={{ backgroundColor: "#163B6D" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-[0.07] blur-3xl"
          style={{ backgroundColor: "#D4A017" }}
        />
        {/* Fine dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="expertise-dots"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0B1F3A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#expertise-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          className="mb-14 lg:mb-16"
          style={{ animation: "sectionFadeUp 0.7s ease-out both" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8 flex-shrink-0"
              style={{ backgroundColor: "#D4A017" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#D4A017" }}
            >
              What I Do Best
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight max-w-lg"
            style={{ color: "#0B1F3A" }}
          >
            Areas of{" "}
            <span
              className="relative inline-block"
              style={{ color: "#0B1F3A" }}
            >
              Expertise
              {/* Gold underline accent */}
              <span
                className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: "#D4A017", opacity: 0.7 }}
              />
            </span>
          </h2>
        </div>

        {/* Card grid — 2×2 on md, 4 across on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-xl overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                borderTop: "4px solid #0B1F3A",
                boxShadow:
                  "0 1px 3px rgba(11,31,58,0.06), 0 4px 12px rgba(11,31,58,0.04)",
                animation: `sectionFadeUp 0.6s ease-out ${0.1 + i * 0.1}s both`,
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 28px rgba(11,31,58,0.12), 0 2px 8px rgba(11,31,58,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 3px rgba(11,31,58,0.06), 0 4px 12px rgba(11,31,58,0.04)";
              }}
            >
              <div className="p-6 flex flex-col gap-5 flex-1">
                {/* Icon in gold circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#D4A017" }}
                >
                  {card.icon}
                </div>

                {/* Card title */}
                <h3
                  className="text-base font-bold tracking-tight leading-snug"
                  style={{ color: "#0B1F3A" }}
                >
                  {card.title}
                </h3>

                {/* Items list */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: "#D4A017" }}
                        strokeWidth={2.5}
                      />
                      <span
                        className="text-sm leading-snug"
                        style={{ color: "#1F2937" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle hover glow on border */}
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: "#D4A017" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sectionFadeUp {
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
