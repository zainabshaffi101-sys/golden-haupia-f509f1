import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    tab: "Calendar & Time Blocking",
    tool: "Google Calendar",
    title: "Calendar Auditing & Time Blocking: Maximizing Executive Deep Work",
    problem:
      "The executive's calendar was a reactive mess of back-to-back meetings with no buffer time, overlapping commitments, and zero protected focus blocks. Context-switching was costing 5+ hours per week in lost productivity.",
    built:
      "A structured calendar system using Google Calendar with colour-coded categories, recurring time blocks for deep work, automated buffer zones between meetings, and a weekly review template.",
    approach:
      "Audited 3 months of calendar history to identify patterns. Introduced time-blocking methodology, created a priority matrix for meeting types, and set up delegation rules for recurring requests.",
    result:
      "Reclaimed 5+ hours of deep work per week. Meeting acceptance rate dropped by 40%. Executive reported feeling 'in control of the day' within 2 weeks.",
    images: ["/work-calendar.png"],
    testimonial: {
      text: "I highly recommend Zainab to anyone looking for a reliable and proactive Virtual Assistant. She has an incredible ability to bring order to busy schedules and complex workflows.",
      client: "Client 01",
      role: "Operations Manager · Digital Marketing Agency",
    },
  },
  {
    id: "02",
    tab: "Notion Workspace",
    tool: "Notion",
    title: "Operational Hub: Building a Central Notion Workspace",
    problem:
      "The team was working across 6 different tools with no single source of truth. Projects were tracked in spreadsheets, communications in email threads, and SOPs lived in people's heads.",
    built:
      "A unified Notion workspace with a master project tracker, team wiki, SOPs library, content calendar, and client CRM — all interconnected with relational databases.",
    approach:
      "Ran a systems audit interview with each team member. Mapped existing workflows before digitising them. Built in phases: core structure first, then automations, then team onboarding.",
    result:
      "Onboarding time for new team members reduced from 2 weeks to 3 days. Project visibility increased across the team. Weekly status meetings cut from 60 mins to 20 mins.",
    images: ["/work-notion.png", "/work-notion-2.png"],
    testimonial: {
      text: "Zainab is the kind of person every founder hopes to have in their corner. She is organized, dependable, and always willing to go the extra mile.",
      client: "Client 02",
      role: "Founder · Online Coaching Business",
    },
  },
  {
    id: "03",
    tab: "Client Onboarding Tracker",
    tool: "Airtable",
    title: "Client Onboarding Tracker: From Chaos to Clarity",
    problem:
      "New clients were falling through the cracks. No standardised onboarding process meant different team members handled new clients differently, creating inconsistent experiences and missed steps.",
    built:
      "An Airtable-based client onboarding system with automated status tracking, task assignments by role, email templates triggered at each stage, and a client-facing progress portal.",
    approach:
      "Mapped the ideal onboarding journey end-to-end. Built the database structure, then layered in Airtable automations for notifications and status changes. Trained the team with a recorded walkthrough.",
    result:
      "Client onboarding time reduced by 60%. Zero missed onboarding steps in 3 months post-launch. Client satisfaction scores increased noticeably in follow-up surveys.",
    images: ["/work-airtable.png"],
    testimonial: {
      text: "I've had the pleasure of working with Zainab and can confidently say she is one of the most dependable professionals I've met. She communicates clearly and consistently delivers quality work.",
      client: "Client 03",
      role: "Project Coordinator · Creative Agency",
    },
  },
  {
    id: "04",
    tab: "Gantt Chart Infrastructure",
    tool: "Google Sheets",
    title: "Gantt Chart Infrastructure: Project Visibility at Scale",
    problem:
      "A multi-workstream project had no unified timeline. Dependencies were unclear, deadlines were being missed, and leadership had no real-time view of progress without chasing individual team leads.",
    built:
      "A dynamic Google Sheets Gantt chart with conditional formatting, dependency mapping, progress tracking, and a dashboard summary view for leadership reporting.",
    approach:
      "Gathered project scope and timelines from all team leads. Built the Gantt structure with automated colour changes based on status. Created a weekly update protocol so the sheet stayed current.",
    result:
      "First time the full project team had visibility into cross-team dependencies. Two critical blockers identified within the first week. Project delivered on time — first in 18 months.",
    images: [],
    testimonial: {
      text: "Working with Zainab has been an absolute pleasure. Her ability to stay organized, anticipate needs, and handle responsibilities with minimal supervision significantly improved our operations.",
      client: "Client 04",
      role: "Financial Manager · Energy Services",
    },
  },
  {
    id: "05",
    tab: "Inbox Management",
    tool: "Gmail",
    title: "Inbox Management: From 2,000 Unread to Zero",
    problem:
      "An executive's Gmail inbox had over 2,000 unread emails. Important client messages were buried, response times were averaging 3–5 days, and the executive was spending 3 hours daily just triaging email.",
    built:
      "A full Gmail system overhaul: custom label taxonomy, filters for auto-sorting, priority inbox rules, canned responses for common queries, and a daily 15-minute email protocol.",
    approach:
      "Archived and categorised all existing emails over a focused weekend sprint. Built the filtering and label system. Created a response SOP and handed over with a training session.",
    result:
      "Inbox at zero within 72 hours. Daily email time reduced from 3 hours to 30 minutes. Response time to priority emails dropped to under 4 hours.",
    images: ["/work-inbox-1.jpg", "/work-inbox-2.jpg"],
    testimonial: {
      text: "Zainab is someone I recommend without hesitation. She is thoughtful, resourceful, and highly organized — and brings a level of dedication that makes working with her both productive and enjoyable.",
      client: "Client 05",
      role: "Tech Founder · B2B SaaS",
    },
  },
  {
    id: "06",
    tab: "Data Analysis",
    tool: "Google Sheets",
    title: "Local Infrastructure Data Analysis: Turning Data Into Decisions",
    problem:
      "A regional team had months of infrastructure survey data sitting in disconnected spreadsheets. No one had the capacity to analyse it, and decisions were being made on gut feel rather than evidence.",
    built:
      "A consolidated Google Sheets analysis workbook with pivot tables, data visualisation charts, a summary dashboard, and a written insights report for stakeholder presentation.",
    approach:
      "Cleaned and merged the raw datasets. Applied pivot table analysis to surface patterns. Built charts for each key metric and wrote an executive summary with 5 actionable recommendations.",
    result:
      "Data that had sat untouched for 4 months was transformed into a decision-ready report in 6 days. Two recommendations were actioned within the following quarter.",
    images: ["/work-data.JPG"],
    testimonial: {
      text: "Working with Zainab has been an absolute pleasure. She brings a rare combination of professionalism, efficiency, and genuine care to her work.",
      client: "Client 04",
      role: "Financial Manager · Energy Services",
    },
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 200);
  };

  const project = projects[activeTab];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#8C5369" }}
          >
            Portfolio
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{
              color: "#4A1E2F",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-0.02em",
            }}
          >
            Featured Work
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ backgroundColor: "#8C5369", opacity: 0.4 }} />
            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#8C5369" }} />
            <div className="h-px w-16" style={{ backgroundColor: "#8C5369", opacity: 0.4 }} />
          </div>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-10 justify-center transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleTabChange(i)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: activeTab === i ? "#4A1E2F" : "#EDE8DC",
                color: activeTab === i ? "#FAF8F5" : "#4A1E2F",
                border: activeTab === i ? "2px solid #4A1E2F" : "2px solid transparent",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          style={{ border: "1px solid rgba(140,83,105,0.15)" }}
        >
          {/* Top bar */}
          <div className="h-1 w-full" style={{ backgroundColor: "#8C5369" }} />

          <div className="p-8 lg:p-12">
            {/* Tool badge + title */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: "#F9F0F0", color: "#8C5369" }}
              >
                {project.tool}
              </span>
              <span className="text-xs text-gray-400">Project {project.id}</span>
            </div>

            <h3
              className="text-2xl lg:text-3xl font-bold mb-10 leading-tight"
              style={{
                color: "#4A1E2F",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {project.title}
            </h3>

            {/* Detail grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {[
                { label: "🔴 The Problem", text: project.problem },
                { label: "🔧 What I Built", text: project.built },
                { label: "📋 My Approach", text: project.approach },
                { label: "✅ The Result", text: project.result },
              ].map(({ label, text }) => (
                <div key={label}>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "#8C5369" }}
                  >
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#2B2527" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Images — dynamic layout */}
            {project.images.length > 0 && (
              <div className="mb-10">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "#8C5369" }}
                >
                  📎 Work Sample
                </p>
                <div
                  className={`grid gap-4 ${project.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                >
                  {project.images.map((src, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden bg-gray-100"
                      style={{ border: "1px solid rgba(140,83,105,0.15)" }}
                    >
                      <img
                        src={src}
                        alt={`${project.tab} sample ${i + 1}`}
                        className="w-full h-64 object-cover object-top"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "#F9F0F0", border: "1px solid rgba(140,83,105,0.15)" }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#8C5369" }}
              >
                💬 Client Testimonial
              </p>
              <blockquote
                className="text-sm leading-relaxed italic mb-4"
                style={{ color: "#2B2527" }}
              >
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#4A1E2F" }}>
                  {project.testimonial.client}
                </p>
                <p className="text-xs" style={{ color: "#8C5369" }}>
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
