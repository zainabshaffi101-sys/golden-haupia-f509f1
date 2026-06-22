import { useEffect, useRef, useState } from "react";

// ── SVG Logos ──────────────────────────────────────────────────────────────
const logos: Record<string, JSX.Element> = {
  Notion: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  ),
  Airtable: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M11.386 3.382L2.123 6.927a.655.655 0 000 1.218l9.263 3.545a2.08 2.08 0 001.472 0l9.263-3.545a.655.655 0 000-1.218l-9.263-3.545a2.08 2.08 0 00-1.472 0zM1.5 10.173v6.046c0 .367.238.694.589.805l8.734 2.743a2.11 2.11 0 001.298 0l8.734-2.743a.843.843 0 00.59-.805v-6.046l-9.324 3.569a2.08 2.08 0 01-1.297 0L1.5 10.173z"/>
    </svg>
  ),
  Trello: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.656 1.343 3 3 3h18c1.656 0 3-1.344 3-3V3c0-1.657-1.344-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .794-.645 1.44-1.44 1.44H15c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z"/>
    </svg>
  ),
  Asana: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.455 13.025a3.273 3.273 0 100 6.546 3.273 3.273 0 000-6.546zm-10.91 0a3.273 3.273 0 100 6.546 3.273 3.273 0 000-6.546zM12 5.454a3.273 3.273 0 100 6.546 3.273 3.273 0 000-6.546z"/>
    </svg>
  ),
  ClickUp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M1.822 16.8L4.63 14.4c1.8 2.016 3.744 2.976 6.048 2.976 2.304 0 4.224-.96 6.048-2.976l2.784 2.4C16.85 19.728 13.906 21.12 10.678 21.12c-3.216 0-6.168-1.392-8.856-4.32zM10.654 2.88L5.62 7.44 3.286 4.896 10.654 0l7.344 4.896-2.328 2.544z"/>
    </svg>
  ),
  "Google Calendar": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M18 3h-1V1h-2v2H9V1H7v2H6C4.9 3 4 3.9 4 5v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H6V9h12v10zM6 7V5h12v2H6zm2 4h4v4H8z"/>
    </svg>
  ),
  Gmail: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
  ),
  "Google Sheets": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h2v2H8zm0-4h2v2H8zm4 4h2v2h-2zm0-4h2v2h-2zm4 4h-2v2h2zm0-4h-2v2h2z"/>
    </svg>
  ),
  "Google Docs": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8zm0-4h8v2H8zm0-4h5v2H8z"/>
    </svg>
  ),
  "Google Drive": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M7.71 3.5L1.15 15l3.43 6 6.56-11.5zm.57 0h9.01l1.72 3H9.99zm9.72.43L22.85 15h-6.86l-4.3-7.5zM1 16.5L4.42 22h15.12L23 16.5z"/>
    </svg>
  ),
  Slack: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/>
    </svg>
  ),
  Zoom: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9 8.5v7l7-3.5-7-3.5zm5.5-.5a.5.5 0 010 1h-7a.5.5 0 010-1h7z"/>
    </svg>
  ),
  Loom: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 12a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-5.5 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
    </svg>
  ),
  "Microsoft Teams": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20.625 6.563a2.813 2.813 0 100-5.626 2.813 2.813 0 000 5.626zM14.25 7.5H9.188A4.688 4.688 0 004.5 12.188v5.624A4.688 4.688 0 009.188 22.5h5.062a4.688 4.688 0 004.688-4.688v-5.624A4.688 4.688 0 0014.25 7.5zM22.5 8.25h-2.438v5.063c0 2.25-.84 4.303-2.218 5.869V21a1.5 1.5 0 001.156 1.463V22.5H22.5a1.5 1.5 0 001.5-1.5v-11.25A1.5 1.5 0 0022.5 8.25z"/>
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm3.36 14.664c-.36.744-1.056 1.176-1.824 1.176-1.032 0-1.848-.816-1.848-1.848 0-.384.12-.744.312-1.056L8.64 11.4c-.384.48-.6 1.08-.6 1.704 0 1.872 1.512 3.384 3.384 3.384.864 0 1.68-.336 2.28-.888l1.656 1.656zM15.6 9.6l-1.656 1.656c-.6-.552-1.416-.888-2.28-.888-.48 0-.936.12-1.344.312l-1.344-1.344c.744-.6 1.68-.96 2.688-.96 1.872 0 3.384 1.512 3.384 3.384 0 .24-.024.48-.072.72L17.4 14.4c.192-.744.288-1.512.288-2.304C17.688 9.216 15.6 6 12 6c-3.6 0-6 3.216-6 6.096 0 .792.096 1.56.288 2.304l2.04-2.04c-.048-.24-.072-.48-.072-.72 0-1.872 1.512-3.384 3.384-3.384.912 0 1.752.36 2.376.96L15.6 9.6z"/>
    </svg>
  ),
  "Notion AI": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933z"/>
    </svg>
  ),
  ChatGPT: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.77.77 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0L4.1 13.484a4.501 4.501 0 01-1.76-5.588zM19.5 12.397l-5.843-3.37 2.019-1.168a.076.076 0 01.072 0l4.719 2.724a4.498 4.498 0 01-.676 8.122V12.77a.79.79 0 00-.291-.373zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L10.027 9.84V7.51a.072.072 0 01.03-.063l4.782-2.761a4.494 4.494 0 016.698 4.687zM8.978 12.85l-2.021-1.164a.08.08 0 01-.038-.057V6.075a4.496 4.496 0 017.375-3.453l-.142.08L9.373 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  ),
  Lark: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 7.5l-3 6-3-3-3 3V9.5h9z"/>
    </svg>
  ),
};

// Brand colors for each tool
const brandColors: Record<string, string> = {
  Notion: "#000000",
  Airtable: "#FCB400",
  Trello: "#0052CC",
  Asana: "#F06A6A",
  ClickUp: "#7B68EE",
  "Google Calendar": "#1A73E8",
  Gmail: "#EA4335",
  "Google Sheets": "#34A853",
  "Google Docs": "#4285F4",
  "Google Drive": "#FBBC04",
  Slack: "#4A154B",
  Zoom: "#2D8CFF",
  Loom: "#625DF5",
  "Microsoft Teams": "#6264A7",
  Canva: "#00C4CC",
  "Notion AI": "#000000",
  ChatGPT: "#10A37F",
  Lark: "#1456F0",
};

const tools = [
  {
    category: "Productivity & Operations",
    items: [
      { name: "Notion", desc: "Workspace & project management" },
      { name: "Airtable", desc: "Database & workflow tracking" },
      { name: "Trello", desc: "Visual task management" },
      { name: "Asana", desc: "Team project coordination" },
      { name: "ClickUp", desc: "All-in-one project ops" },
    ],
  },
  {
    category: "Google Workspace",
    items: [
      { name: "Google Calendar", desc: "Scheduling & time blocking" },
      { name: "Gmail", desc: "Inbox zero & management" },
      { name: "Google Sheets", desc: "Data analysis & reporting" },
      { name: "Google Docs", desc: "Documentation & SOPs" },
      { name: "Google Drive", desc: "File organization" },
    ],
  },
  {
    category: "Communication",
    items: [
      { name: "Slack", desc: "Team communication" },
      { name: "Zoom", desc: "Video meetings & calls" },
      { name: "Loom", desc: "Video walkthroughs" },
      { name: "Microsoft Teams", desc: "Enterprise collaboration" },
    ],
  },
  {
    category: "Design & Docs",
    items: [
      { name: "Canva", desc: "Visual design & branding" },
      { name: "Notion AI", desc: "AI-assisted writing" },
      { name: "ChatGPT", desc: "Research & drafting" },
      { name: "Lark", desc: "Docs & collaboration" },
    ],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ToolsSection() {
  const { ref, inView } = useInView();
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(107,39,55,0.2), 0 0 24px rgba(201,160,160,0.12); }
          50%       { box-shadow: 0 0 22px rgba(107,39,55,0.35), 0 0 44px rgba(201,160,160,0.22); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-4px) scale(1.05); }
        }
        @keyframes shimmerBg {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .tools-reveal { opacity: 0; }
        .tools-reveal.in { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .tool-card {
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .tool-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: inherit;
        }
        .tool-card:hover {
          transform: translateY(-7px) scale(1.03);
          animation: glowPulse 2s ease-in-out infinite;
        }
        .tool-card:hover::before { opacity: 1; }

        .tool-logo {
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .tool-card:hover .tool-logo {
          animation: iconFloat 1.6s ease-in-out infinite;
        }

        .category-filter {
          transition: all 0.2s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .category-filter:hover {
          background-color: rgba(107,39,55,0.08) !important;
          color: #6B2737 !important;
          border-color: rgba(107,39,55,0.3) !important;
        }

        .glow-line {
          background: linear-gradient(90deg, transparent, #C9A0A0, #6B2737, #C9A0A0, transparent);
          background-size: 200% auto;
          animation: shimmerBg 3s linear infinite;
        }
      `}</style>

      <section id="tools" className="py-28 lg:py-36" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

          {/* Header */}
          <div className={`tools-reveal ${inView ? "in" : ""} text-center mb-14`} style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1.5px] w-8" style={{ backgroundColor: "#C9A0A0" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                My Toolkit
              </p>
              <div className="h-[1.5px] w-8" style={{ backgroundColor: "#C9A0A0" }} />
            </div>
            <h2
              className="leading-[1.15] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.9rem, 3.5vw, 3rem)", color: "#2C1A1F", letterSpacing: "-0.02em" }}
            >
              Tools &{" "}
              <span style={{ color: "#6B2737", fontStyle: "italic" }}>Platforms</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(44,26,31,0.6)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}>
              The platforms I work in daily to design systems, manage operations, and deliver results.
            </p>
            <div className="glow-line h-[1.5px] w-32 mx-auto mt-8 rounded-full" />
          </div>

          {/* Category filters */}
          <div className={`tools-reveal ${inView ? "in" : ""} flex flex-wrap justify-center gap-2 mb-12`} style={{ animationDelay: "0.15s" }}>
            <button
              onClick={() => setActiveCategory(null)}
              className="category-filter px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: activeCategory === null ? "#6B2737" : "transparent",
                color: activeCategory === null ? "#FAF8F5" : "#2B2527",
                border: `1px solid ${activeCategory === null ? "#6B2737" : "rgba(201,160,160,0.4)"}`,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              All Tools
            </button>
            {tools.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
                className="category-filter px-4 py-2 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: activeCategory === cat.category ? "#6B2737" : "transparent",
                  color: activeCategory === cat.category ? "#FAF8F5" : "#2B2527",
                  border: `1px solid ${activeCategory === cat.category ? "#6B2737" : "rgba(201,160,160,0.4)"}`,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Tool grid by category */}
          <div className="space-y-10">
            {tools
              .filter((cat) => activeCategory === null || cat.category === activeCategory)
              .map((cat, ci) => (
                <div key={cat.category} className={`tools-reveal ${inView ? "in" : ""}`} style={{ animationDelay: `${0.22 + ci * 0.1}s` }}>
                  {/* Category label */}
                  <div className="flex items-center gap-3 mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#C9A0A0", fontFamily: "'Inter', sans-serif" }}>
                      {cat.category}
                    </p>
                    <div className="flex-1 h-[1px]" style={{ backgroundColor: "rgba(201,160,160,0.25)" }} />
                  </div>

                  {/* Tool cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {cat.items.map((tool) => {
                      const isHovered = hoveredTool === `${cat.category}-${tool.name}`;
                      const color = brandColors[tool.name] || "#6B2737";
                      return (
                        <div
                          key={tool.name}
                          className="tool-card rounded-2xl p-5 text-center"
                          style={{
                            backgroundColor: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.75)",
                            border: `1px solid ${isHovered ? `${color}30` : "rgba(201,160,160,0.2)"}`,
                            boxShadow: isHovered
                              ? `0 14px 36px ${color}22, 0 0 0 1px ${color}18`
                              : "0 2px 8px rgba(107,39,55,0.04)",
                          }}
                          onMouseEnter={() => setHoveredTool(`${cat.category}-${tool.name}`)}
                          onMouseLeave={() => setHoveredTool(null)}
                        >
                          {/* Logo */}
                          <div
                            className="tool-logo w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300"
                            style={{
                              backgroundColor: isHovered ? `${color}15` : "rgba(201,160,160,0.1)",
                              color: isHovered ? color : "#6B2737",
                            }}
                          >
                            {logos[tool.name]}
                          </div>

                          {/* Name */}
                          <p className="text-sm font-bold mb-1 leading-tight transition-colors duration-200"
                            style={{ color: isHovered ? color : "#2C1A1F", fontFamily: "'Inter', sans-serif" }}>
                            {tool.name}
                          </p>

                          {/* Description */}
                          <p className="text-[10px] leading-tight" style={{ color: "rgba(44,26,31,0.5)", fontFamily: "'Inter', sans-serif" }}>
                            {tool.desc}
                          </p>

                          {/* Glow dot */}
                          <div
                            className="w-1.5 h-1.5 rounded-full mx-auto mt-3 transition-all duration-300"
                            style={{
                              backgroundColor: isHovered ? color : "rgba(201,160,160,0.4)",
                              boxShadow: isHovered ? `0 0 8px ${color}99` : "none",
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom note */}
          <div className={`tools-reveal ${inView ? "in" : ""} text-center mt-14`} style={{ animationDelay: "0.5s" }}>
            <p className="text-sm" style={{ color: "rgba(44,26,31,0.45)", fontFamily: "'Inter', sans-serif" }}>
              ✦ Always learning · Fast to adapt to new tools
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
