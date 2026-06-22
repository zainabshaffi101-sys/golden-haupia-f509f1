import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    tab: "Calendar & Time Blocking",
    tool: "Google Calendar",
    title: "Calendar Auditing & Time Blocking: Maximizing Executive Deep Work",
    problem: "The executive's calendar was a reactive mess of back-to-back meetings, overlapping commitments, and zero dedicated focus time. Context-switching was constant, deep work was impossible, and important priorities kept getting pushed.",
    built: "I performed a full calendar audit, eliminated redundant recurring meetings, introduced color-coded time blocking by work type (deep work, admin, communication, personal), and built a weekly template that protected focus hours while still accommodating team collaboration.",
    approach: "Started with a 2-week audit of existing calendar patterns, interviewed the executive about energy levels and peak focus times, then designed a sustainable weekly rhythm around those insights. Implemented buffer time between meetings and created a priority matrix for scheduling decisions.",
    results: "Recovered 12+ hours of deep work time weekly. Reduced back-to-back meetings by 70%. Executive reported significantly lower end-of-day mental fatigue within 2 weeks.",
    images: ["/work-calendar.jpg"],
    testimonial: {
      client: "Client 01",
      role: "Executive Leader · Corporate Services",
      quote: "Zainab transformed my calendar from a source of stress into a tool that actually works for me. I finally have time to think.",
    },
  },
  {
    id: "02",
    tab: "Notion Workspace",
    tool: "Notion",
    title: "Operational Hub: Building a Notion Workspace from Scratch",
    problem: "The team was scattered across emails, spreadsheets, WhatsApp, and sticky notes. There was no single source of truth for tasks, client information, or project status. Things were falling through the cracks weekly.",
    built: "Designed and built a fully custom Notion workspace including a project tracker, client CRM, content calendar, team wiki, and meeting notes database — all interconnected with linked databases and filtered views for each team member.",
    approach: "Mapped all existing workflows before touching Notion. Ran a discovery session to understand how each team member actually works. Built in phases: core structure first, then templates, then automation triggers. Trained the team with video walkthroughs.",
    results: "100% team adoption within 3 weeks. Eliminated 5+ redundant communication threads per day. Project visibility improved — nothing missed in the first month post-launch.",
    images: ["/work-notion.jpg"],
    testimonial: {
      client: "Client 03",
      role: "Operations Director · Tech Startup",
      quote: "We went from organized chaos to actual clarity. The Notion system Zainab built is something the whole team relies on every single day.",
    },
  },
  {
    id: "03",
    tab: "Client Onboarding",
    tool: "Airtable",
    title: "Client Onboarding Tracker Built on Airtable",
    problem: "New client onboarding was inconsistent — some clients got everything, others missed key steps. There was no checklist, no accountability, and the team had to rely on memory and scattered emails to track progress.",
    built: "Built an Airtable-based client onboarding tracker with stage-by-stage pipelines, automated status updates, checklist templates per client type, and a client-facing intake form that auto-populated the database.",
    approach: "Documented the ideal onboarding journey from first contact to fully onboarded. Identified the 3 most common failure points. Built the Airtable base to solve each one with structure, not manual effort. Linked intake form responses to client records automatically.",
    results: "Onboarding time reduced by 40%. Zero missed steps in 60+ client onboardings post-launch. Team confidence in the process went from 4/10 to 9/10.",
    images: ["/work-airtable.jpg"],
    testimonial: {
      client: "Client 04",
      role: "Agency Founder · Creative Services",
      quote: "Our onboarding used to feel embarrassing. Now it's one of the first things new clients compliment us on.",
    },
  },
  {
    id: "04",
    tab: "Gantt Chart",
    tool: "Google Sheets",
    title: "Gantt Chart Infrastructure for Multi-Phase Projects",
    problem: "A multi-phase project with 6 workstreams had no visual timeline. Stakeholders had no idea where things stood, dependencies were invisible, and the project manager was fielding status-update requests all day.",
    built: "Built a dynamic Gantt chart in Google Sheets with conditional formatting, dependency mapping, milestone tracking, and a weekly summary tab that auto-generated a progress snapshot for stakeholder updates.",
    approach: "Started with a stakeholder interview to understand what information they actually needed (not just what they asked for). Mapped all tasks and dependencies first on paper, then built the Sheets infrastructure to reflect them. Added a RAG (Red/Amber/Green) status system for instant visual scanning.",
    results: "Stakeholder update requests dropped by 80% — the chart answered their questions before they asked. Project delivered on time across all 6 workstreams.",
    images: ["/work-gantt.jpg"],
    testimonial: {
      client: "Client 05",
      role: "Project Sponsor · Infrastructure Firm",
      quote: "For the first time on a project this size, I could see everything at a glance. That alone saved hours every week.",
    },
  },
  {
    id: "05",
    tab: "Inbox Management",
    tool: "Gmail",
    title: "Inbox Zero System: Managing a High-Volume Executive Inbox",
    problem: "An executive inbox with 3,000+ unread emails, no labeling system, and no triage process. Critical emails were being missed. The executive was spending 2–3 hours daily in email and still felt behind.",
    built: "Implemented a full Gmail organization system: custom labels, filters, automated sorting rules, priority flags, canned responses for common requests, and a daily triage protocol. Cleared the backlog and maintained inbox zero for 30+ consecutive days.",
    approach: "Started with a 2-hour inbox audit to categorize existing email types. Built the filter and label architecture to match real usage patterns. Created a morning and end-of-day triage routine. Drafted 12 canned response templates for the most frequent email types.",
    results: "Email time reduced from 2–3 hours to 30–40 minutes daily. Zero missed critical emails in the 30 days post-implementation. Executive described it as 'life-changing'.",
    images: ["/work-inbox-1.jpg", "/work-inbox-2.jpg", "/work-inbox-3.jpg"],
    testimonial: {
      client: "Client 02",
      role: "Tech Entrepreneur · E-commerce",
      quote: "I didn't know my inbox could look like this. Zainab turned my biggest daily stressor into something that just... works.",
    },
  },
  {
    id: "06",
    tab: "Data Analysis",
    tool: "Google Sheets",
    title: "Local Infrastructure Data Analysis & Reporting",
    problem: "A regional team had months of raw infrastructure data sitting in disconnected spreadsheets with no analysis, no visualization, and no way to present findings to leadership in a meaningful way.",
    built: "Cleaned and consolidated 6 months of raw data into a single master sheet, built pivot tables and bar charts showing regional performance trends, and created a clean executive summary dashboard and slide-ready visuals.",
    approach: "Started by auditing all existing data sources for consistency and gaps. Standardized naming conventions and date formats across all files. Built the analysis layer with formulas and pivot tables first, then designed visualizations that answered the leadership team's actual questions.",
    results: "First clean data report delivered within 5 days. Leadership made 3 resource allocation decisions in the first week using the new dashboard. Regional director requested monthly recurring analysis.",
    images: ["/work-data.jpg"],
    testimonial: {
      client: "Client 06",
      role: "Regional Director · Public Infrastructure",
      quote: "Zainab took a mountain of raw data and turned it into something we could actually use to make decisions. Invaluable.",
    },
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ProjectsSection() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const switchTab = (i: number) => {
    if (i === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setImgIndex(0);
      setAnimating(false);
    }, 200);
  };

  const project = projects[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .proj-reveal { opacity: 0; }
        .proj-reveal.in { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .proj-content-in { animation: contentIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
        .proj-content-out { opacity: 0; transition: opacity 0.2s ease; }

        .tab-btn {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
          white-space: nowrap;
          cursor: pointer;
        }
        .tab-btn:hover {
          background-color: rgba(237,232,220,0.8) !important;
          color: #6B2737 !important;
        }

        .img-thumb {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .img-thumb:hover { opacity: 1 !important; transform: scale(1.05); }

        .section-block {
          transition: all 0.25s ease;
        }
        .section-block:hover {
          border-color: rgba(107,39,55,0.2) !important;
        }

        .proj-tabs::-webkit-scrollbar { display: none; }
        .proj-tabs { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section
        id="projects"
        className="py-28 lg:py-36"
        style={{ backgroundColor: "#EDE8DC" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

          {/* Header */}
          <div className={`proj-reveal ${inView ? "in" : ""} mb-12`} style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1.5px] w-8" style={{ backgroundColor: "#C9A0A0" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                Featured Work
              </p>
            </div>
            <h2
              className="leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "#2C1A1F",
                letterSpacing: "-0.02em",
              }}
            >
              Real Work,{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Real Results</span>
            </h2>
          </div>

          {/* Tab bar */}
          <div
            className={`proj-reveal ${inView ? "in" : ""} proj-tabs flex gap-2 overflow-x-auto pb-2 mb-8`}
            style={{ animationDelay: "0.15s" }}
          >
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => switchTab(i)}
                className="tab-btn flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  backgroundColor: active === i ? "#6B2737" : "#FFFFFF",
                  color: active === i ? "#FAF8F5" : "#2B2527",
                  border: `1px solid ${active === i ? "#6B2737" : "rgba(201,160,160,0.3)"}`,
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: active === i ? "0 4px 16px rgba(107,39,55,0.25)" : "none",
                }}
              >
                {p.tab}
              </button>
            ))}
          </div>

          {/* Project content */}
          <div
            className={`proj-reveal ${inView ? "in" : ""} rounded-3xl overflow-hidden`}
            style={{
              animationDelay: "0.22s",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 40px rgba(107,39,55,0.08), 0 1px 4px rgba(107,39,55,0.04)",
              border: "1px solid rgba(201,160,160,0.2)",
            }}
          >
            <div className={animating ? "proj-content-out" : "proj-content-in"}>

              {/* Top bar */}
              <div
                className="flex items-center justify-between px-8 py-5"
                style={{ borderBottom: "1px solid rgba(201,160,160,0.2)", backgroundColor: "rgba(250,248,245,0.7)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}
                  >
                    Project {project.id}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "rgba(107,39,55,0.08)", color: "#6B2737", fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.tool}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {["#F5C6C6", "#F5E6C6", "#C6F5D0"].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>

              <div className="p-8 sm:p-10">
                {/* Title */}
                <h3
                  className="mb-10 leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
                    color: "#2C1A1F",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>

                {/* 2-col grid: left = content blocks, right = image + testimonial */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">

                  {/* LEFT: Content blocks */}
                  <div className="space-y-6">

                    {/* Problem */}
                    <div
                      className="section-block rounded-2xl p-6"
                      style={{ backgroundColor: "rgba(250,248,245,0.8)", border: "1px solid rgba(201,160,160,0.18)" }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-base">🔴</span>
                        <h4 className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}>
                          The Problem
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,31,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}>
                        {project.problem}
                      </p>
                    </div>

                    {/* What I built */}
                    <div
                      className="section-block rounded-2xl p-6"
                      style={{ backgroundColor: "rgba(250,248,245,0.8)", border: "1px solid rgba(201,160,160,0.18)" }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-base">🛠</span>
                        <h4 className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}>
                          What I Built
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,31,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}>
                        {project.built}
                      </p>
                    </div>

                    {/* Approach */}
                    <div
                      className="section-block rounded-2xl p-6"
                      style={{ backgroundColor: "rgba(250,248,245,0.8)", border: "1px solid rgba(201,160,160,0.18)" }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-base">🧭</span>
                        <h4 className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}>
                          My Approach
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,31,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}>
                        {project.approach}
                      </p>
                    </div>

                    {/* Results */}
                    <div
                      className="section-block rounded-2xl p-6"
                      style={{ backgroundColor: "rgba(107,39,55,0.05)", border: "1px solid rgba(107,39,55,0.15)" }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-base">✅</span>
                        <h4 className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: "#6B2737", fontFamily: "'Inter', sans-serif" }}>
                          Results
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,31,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}>
                        {project.results}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: Image + testimonial */}
                  <div className="flex flex-col gap-5">

                    {/* Main image */}
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{ aspectRatio: "4/3", backgroundColor: "#EDE8DC" }}
                    >
                      <img
                        src={project.images[imgIndex]}
                        alt={`Work sample for ${project.tab}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.style.display = "flex";
                            parent.style.alignItems = "center";
                            parent.style.justifyContent = "center";
                            parent.innerHTML = `<span style="color:rgba(107,39,55,0.3);font-size:2rem;">📎</span>`;
                          }
                        }}
                      />
                    </div>

                    {/* Thumbnail strip if multiple images */}
                    {project.images.length > 1 && (
                      <div className="flex gap-2">
                        {project.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIndex(i)}
                            className="img-thumb flex-1 rounded-xl overflow-hidden"
                            style={{
                              aspectRatio: "1",
                              opacity: imgIndex === i ? 1 : 0.45,
                              border: imgIndex === i ? "2px solid #6B2737" : "2px solid transparent",
                            }}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Client testimonial */}
                    <div
                      className="rounded-2xl p-5"
                      style={{ backgroundColor: "#EDE8DC", border: "1px solid rgba(201,160,160,0.3)" }}
                    >
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#2C1A1F",
                          fontStyle: "italic",
                          lineHeight: "1.75",
                        }}
                      >
                        "{project.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: "rgba(107,39,55,0.12)", color: "#6B2737", fontFamily: "'Playfair Display', serif" }}
                        >
                          {project.testimonial.client.split(" ")[1]}
                        </div>
                        <div>
                          <p className="text-xs font-bold" style={{ color: "#2C1A1F", fontFamily: "'Inter', sans-serif" }}>
                            {project.testimonial.client}
                          </p>
                          <p className="text-[10px] mt-0.5" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                            {project.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://calendar.app.google/MQziGAszQY8wVMqp9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#6B2737", color: "#FAF8F5", fontFamily: "'Inter', sans-serif" }}
                    >
                      Want results like this?
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
