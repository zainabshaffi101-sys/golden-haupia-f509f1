import { Mail, Linkedin, MapPin, Calendar, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #D4A017 30%, #D4A017 70%, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#D4A017" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#D4A017" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-5" style={{ color: "#0B1F3A" }}>
            Let's Create Better Systems
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#1F2937", opacity: 0.75 }}>
            Ready to spend less time managing operations and more time growing your business? Let's connect.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <div
            className="relative rounded-2xl p-8 sm:p-10"
            style={{
              backgroundColor: "#F7F8FA",
              boxShadow: "0 4px 24px rgba(11,31,58,0.07)",
            }}
          >
            {/* Gold corner accent */}
            <div
              className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl"
              style={{ borderTop: "2px solid #D4A017", borderLeft: "2px solid #D4A017" }}
            />

            <form action="" method="POST" className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#0B1F3A" }}
                >
                  Full Name <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    color: "#1F2937",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#163B6D";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(22,59,109,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#E5E7EB";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#0B1F3A" }}
                >
                  Email Address <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    color: "#1F2937",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#163B6D";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(22,59,109,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#E5E7EB";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#0B1F3A" }}
                >
                  Company / Business Name
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Your company (optional)"
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    color: "#1F2937",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#163B6D";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(22,59,109,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#E5E7EB";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#0B1F3A" }}
                >
                  How can I help? <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your business challenges, goals, or what you'd like to improve..."
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none resize-none"
                  style={{
                    border: "1.5px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    color: "#1F2937",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#163B6D";
                    (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(22,59,109,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#E5E7EB";
                    (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg px-6 py-4 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{
                  backgroundColor: "#D4A017",
                  color: "#0B1F3A",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Email card */}
            <div
              className="flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#F7F8FA",
                border: "1.5px solid #E5E7EB",
                boxShadow: "0 2px 10px rgba(11,31,58,0.05)",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#0B1F3A" }}
              >
                <Mail className="w-4.5 h-4.5" style={{ color: "#D4A017" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#D4A017" }}>
                  Email
                </p>
                <a
                  href="mailto:zainab@example.com"
                  className="text-sm font-medium transition-colors duration-150 hover:underline"
                  style={{ color: "#0B1F3A" }}
                >
                  zainab@example.com
                </a>
              </div>
            </div>

            {/* LinkedIn card */}
            <div
              className="flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#0B1F3A",
                border: "1.5px solid #163B6D",
                boxShadow: "0 4px 16px rgba(11,31,58,0.18)",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#163B6D" }}
              >
                <Linkedin className="w-4.5 h-4.5" style={{ color: "#D4A017" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#D4A017" }}>
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/zainabshaffi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-opacity duration-150 hover:opacity-75"
                  style={{ color: "#FFFFFF" }}
                >
                  linkedin.com/in/zainabshaffi
                </a>
              </div>
            </div>

            {/* Location card */}
            <div
              className="flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#F7F8FA",
                border: "1.5px solid #E5E7EB",
                boxShadow: "0 2px 10px rgba(11,31,58,0.05)",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#0B1F3A" }}
              >
                <MapPin className="w-4.5 h-4.5" style={{ color: "#D4A017" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#D4A017" }}>
                  Location
                </p>
                <p className="text-sm font-medium" style={{ color: "#0B1F3A" }}>
                  Available Worldwide
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#1F2937", opacity: 0.6 }}>
                  Remote
                </p>
              </div>
            </div>

            {/* Calendly CTA */}
            <a
              href="#"
              className="group flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                backgroundColor: "#163B6D",
                boxShadow: "0 6px 20px rgba(11,31,58,0.22)",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(212,160,23,0.15)" }}
              >
                <Calendar className="w-4.5 h-4.5" style={{ color: "#D4A017" }} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Schedule a Call
                </p>
                <p className="text-sm font-bold" style={{ color: "#FFFFFF" }}>
                  Book a Discovery Call
                </p>
              </div>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                style={{ backgroundColor: "#D4A017" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* Response time note */}
            <div className="flex items-center gap-2.5 px-2 py-1">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#D4A017" }} />
              <p className="text-xs" style={{ color: "#1F2937", opacity: 0.6 }}>
                Typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
