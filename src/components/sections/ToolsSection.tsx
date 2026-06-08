type CircleBg = "wine" | "mauve" | "accent";

interface Tool {
  initial: string;
  name: string;
  category: string;
  circleBg: CircleBg;
  darkText?: boolean;
}

const tools: Tool[] = [
  {
    initial: "N",
    name: "Notion",
    category: "Knowledge Management",
    circleBg: "wine",
  },
  {
    initial: "C",
    name: "ClickUp",
    category: "Project Management",
    circleBg: "wine",
  },
  {
    initial: "A",
    name: "Asana",
    category: "Task Management",
    circleBg: "wine",
  },
  {
    initial: "S",
    name: "Slack",
    category: "Communication",
    circleBg: "wine",
  },
  {
    initial: "Z",
    name: "Zoom",
    category: "Video Conferencing",
    circleBg: "wine",
  },
  {
    initial: "C",
    name: "Calendly",
    category: "Scheduling",
    circleBg: "mauve",
  },
  {
    initial: "G",
    name: "Google Workspace",
    category: "Productivity Suite",
    circleBg: "wine",
  },
  {
    initial: "M",
    name: "Microsoft Office",
    category: "Document Suite",
    circleBg: "wine",
  },
  {
    initial: "T",
    name: "Trello",
    category: "Visual Planning",
    circleBg: "mauve",
  },
  {
    initial: "L",
    name: "Loom",
    category: "Video Documentation",
    circleBg: "mauve",
  },
  {
    initial: "Z",
    name: "Zapier",
    category: "Automation",
    circleBg: "mauve",
  },
  {
    initial: "AI",
    name: "ChatGPT / AI Tools",
    category: "AI Assistance",
    circleBg: "accent",
    darkText: true,
  },
];

const circleBgStyles: Record<CircleBg, React.CSSProperties> = {
  wine: { backgroundColor: "#4A1E2F", color: "#FFFFFF" },
  mauve: { backgroundColor: "#8C5369", color: "#FFFFFF" },
  accent: { backgroundColor: "#8C5369", color: "#FFFFFF" },
};

function ToolCard({ tool }: { tool: Tool }) {
  const circleStyle = circleBgStyles[tool.circleBg];

  return (
    <div
      className="group flex flex-col items-center text-center bg-white rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        border: "1px solid rgba(74,30,47,0.08)",
        boxShadow:
          "0 1px 6px rgba(74,30,47,0.05), 0 0 1px rgba(74,30,47,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 24px rgba(74,30,47,0.1), 0 0 1px rgba(74,30,47,0.07)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(74,30,47,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 6px rgba(74,30,47,0.05), 0 0 1px rgba(74,30,47,0.04)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(74,30,47,0.08)";
      }}
    >
      {/* Initial circle */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={circleStyle}
      >
        <span
          className="font-bold leading-none select-none"
          style={{
            fontSize: tool.initial.length > 1 ? "0.65rem" : "1rem",
            letterSpacing: tool.initial.length > 1 ? "0.03em" : undefined,
            fontFamily: "'Georgia', 'Times New Roman', serif",
          }}
        >
          {tool.initial}
        </span>
      </div>

      {/* Tool name */}
      <p
        className="text-sm font-bold leading-snug mb-1"
        style={{
          color: "#4A1E2F",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {tool.name}
      </p>

      {/* Category */}
      <p
        className="text-xs leading-snug"
        style={{ color: "#6B7280" }}
      >
        {tool.category}
      </p>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="py-20 px-6"
      style={{ backgroundColor: "#F7F4EB" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#8C5369" }}
          >
            Tools &amp; Platforms
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{
              color: "#4A1E2F",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-0.02em",
            }}
          >
            My Digital Workspace
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

        {/* Tools grid: 2 cols mobile → 3 tablet → 4 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolCard key={`${tool.name}-${tool.initial}`} tool={tool} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="mt-10 text-center text-sm italic"
          style={{ color: "#6B7280" }}
        >
          And continuously learning new tools to stay ahead of the curve.
        </p>
      </div>
    </section>
  );
}
