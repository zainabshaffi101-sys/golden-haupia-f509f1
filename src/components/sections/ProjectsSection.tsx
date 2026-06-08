const projects = [
  {
    number: "01",
    title: "Executive Calendar Optimization",
    category: "Executive Support",
    overview:
      "A comprehensive overhaul of an executive's scheduling system to eliminate chaos and create strategic time blocks.",
    challenge:
      "The executive was reactive to every meeting request, resulting in a fragmented schedule with no time for deep strategic work.",
    approach:
      "Audited existing calendar patterns, identified time wasters, established priority frameworks and booking rules.",
    solution:
      "Implemented a tiered meeting system, created Calendly booking flows with proper buffer time, and established weekly planning rituals.",
    outcome:
      "40% more protected time for strategic work, zero double-bookings, and a predictable weekly rhythm.",
    tags: ["Calendar Management", "Executive Support", "Systems"],
  },
  {
    number: "02",
    title: "Client Onboarding Workflow System",
    category: "Operations",
    overview:
      "Designed and implemented a repeatable onboarding process for a growing consulting firm serving multiple clients simultaneously.",
    challenge:
      "Each new client engagement started differently, causing inconsistency, missed steps, and a poor initial experience.",
    approach:
      "Mapped the existing ad-hoc process, identified gaps, and designed a standardized flow with clear owner assignments.",
    solution:
      "Built a multi-stage onboarding workflow in ClickUp with automated task creation, templated communications, and progress tracking.",
    outcome:
      "Consistent client experience, 60% faster onboarding, and zero dropped balls during handoffs.",
    tags: ["ClickUp", "Process Design", "Operations"],
  },
  {
    number: "03",
    title: "Operations Documentation System",
    category: "Documentation",
    overview:
      "Created a comprehensive internal knowledge base for a founder-led business preparing to scale its team.",
    challenge:
      "All operational knowledge lived in the founder's head, making delegation impossible and creating a single point of failure.",
    approach:
      "Conducted process discovery sessions, documented every repeatable task, and organized into a searchable knowledge base.",
    solution:
      "Built a Notion-based operations hub with SOPs, video walkthroughs, onboarding guides, and a decision-making framework.",
    outcome:
      "Founder successfully delegated 15+ recurring tasks and hired two team members with confidence.",
    tags: ["Notion", "Documentation", "SOPs"],
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        border: "1px solid rgba(11,31,58,0.1)",
        boxShadow:
          "0 2px 12px rgba(11,31,58,0.06), 0 0 1px rgba(11,31,58,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(11,31,58,0.12), 0 0 1px rgba(11,31,58,0.08)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(11,31,58,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 12px rgba(11,31,58,0.06), 0 0 1px rgba(11,31,58,0.04)";
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(11,31,58,0.1)";
      }}
    >
      {/* Gold top accent bar */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: "#D4A017" }}
      />

      <div className="p-8 lg:p-10">
        {/* Header row: number + category badge */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <span
            className="text-5xl font-black leading-none select-none"
            style={{
              color: "#D4A017",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              opacity: 0.85,
              letterSpacing: "-0.03em",
            }}
          >
            {project.number}
          </span>
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] shrink-0"
            style={{
              backgroundColor: "#0B1F3A",
              color: "#FFFFFF",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl lg:text-2xl font-bold leading-snug mb-4"
          style={{
            color: "#0B1F3A",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>

        {/* Overview */}
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "#4B5563" }}
        >
          {project.overview}
        </p>

        {/* Case study breakdown — 2-col grid on wide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {/* Challenge */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: "#F7F8FA" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.14em] mb-2"
              style={{ color: "#D4A017" }}
            >
              Challenge
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              {project.challenge}
            </p>
          </div>

          {/* Approach */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: "#F7F8FA" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.14em] mb-2"
              style={{ color: "#D4A017" }}
            >
              Approach
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              {project.approach}
            </p>
          </div>

          {/* Solution — spans full width */}
          <div
            className="sm:col-span-2 rounded-xl p-5"
            style={{ backgroundColor: "#F7F8FA" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.14em] mb-2"
              style={{ color: "#D4A017" }}
            >
              Solution
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Outcome callout */}
        <div
          className="rounded-xl px-6 py-4 mb-7 flex items-start gap-3"
          style={{
            backgroundColor: "#0B1F3A",
          }}
        >
          {/* Left accent */}
          <div
            className="w-0.5 h-full self-stretch rounded-full shrink-0 mt-0.5"
            style={{ backgroundColor: "#D4A017", minHeight: "1rem" }}
          />
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.14em] mb-1"
              style={{ color: "#D4A017" }}
            >
              Outcome
            </p>
            <p
              className="text-sm leading-relaxed font-medium"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: "rgba(212,160,23,0.1)",
                color: "#0B1F3A",
                border: "1px solid rgba(212,160,23,0.3)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#D4A017" }}
          >
            Featured Projects
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{
              color: "#0B1F3A",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Selected Work
          </h2>
          {/* Decorative rule */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#D4A017", opacity: 0.5 }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#D4A017" }}
            />
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#D4A017", opacity: 0.5 }}
            />
          </div>
        </div>

        {/* Project cards — stacked full-width */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
