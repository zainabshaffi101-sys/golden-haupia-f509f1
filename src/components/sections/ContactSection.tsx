import { Mail, Linkedin, MapPin, Calendar, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32" style={{ backgroundColor: "#F7F4EB" }}>
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #8C5369 30%, #8C5369 70%, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#8C5369" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8C5369" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-5" style={{ color: "#4A1E2F" }}>
            Let's Create Better Systems
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#2B2527", opacity: 0.75 }}>
            Ready to spend less time managing operations and more time growing your business? Let's connect.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <div
            className="relative rounded-2xl p-8 sm:p-10"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 4px 24px rgba(74,30,47,0.07)" }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl"
              style={{ borderTop: "2px solid #4A1E2F", borderLeft: "2px solid #4A1E2F" }}
            />

            <form action="" method="POST" className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: "#4A1E2F" }}>
                  Full Name <span style={{ color: "#8C5369" }}>*</span>
                </label>
                <input
                  id="contact-name" name="name" type="text" required placeholder="Your name"
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none"
                  style={{ border: "1.5px solid #D9CECE", backgroundColor: "#F7F4EB", color: "#2B2527" }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#4A1E2F";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(74,30,47,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#D9CECE";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-2" style={{ color: "#4A1E2F" }}>
                  Email Address <span style={{ color: "#8C5369" }}>*</span>
                </label>
                <input
                  id="contact-email" name="email" type="email" required placeholder="you@company.com"
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none"
                  style={{ border: "1.5px solid #D9CECE", backgroundColor: "#F7F4EB", color: "#2B2527" }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#4A1E2F";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(74,30,47,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#D9CECE";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="contact-company" className="block text-sm font-semibold mb-2" style={{ color: "#4A1E2F" }}>
                  Company / Business Name
                </label>
                <input
                  id="contact-company" name="company" type="text" placeholder="Your company (optional)"
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none"
                  style={{ border: "1.5px solid #D9CECE", backgroundColor: "#F7F4EB", color: "#2B2527" }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#4A1E2F";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(74,30,47,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#D9CECE";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: "#4A1E2F" }}>
                  How can I help? <span style={{ color: "#8C5369" }}>*</span>
                </label>
                <textarea
                  id="contact-message" name="message" rows={5} required
                  placeholder="Tell me about your business challenges, goals, or what you'd like to improve..."
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 outline-none resize-none"
                  style={{ border: "1.5px solid #D9CECE", backgroundColor: "#F7F4EB", color: "#2B2527" }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#4A1E2F";
                    (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(74,30,47,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#D9CECE";
                    (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg px-6 py-4 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{ backgroundColor: "#4A1E2F", color: "#F7F4EB" }}
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
              style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #D9CECE", boxShadow: "0 2px 10px rgba(74,30,47,0.05)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#4A1E2F" }}>
                <Mail className="w-4.5 h-4.5" style={{ color: "#F7F4EB" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#8C5369" }}>Email</p>
                <a href="mailto:zainab@example.com" className="text-sm font-medium transition-colors duration-150 hover:underline" style={{ color: "#4A1E2F" }}>
                  zainab@example.com
                </a>
              </div>
            </div>

            {/* LinkedIn card */}
            <div
              className="flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#DDD5C8", border: "1.5px solid #4A1E2F", boxShadow: "0 4px 16px rgba(74,30,47,0.18)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#4A1E2F" }}>
                <Linkedin className="w-4.5 h-4.5" style={{ color: "#8C5369" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#8C5369" }}>LinkedIn</p>
                <a href="https://linkedin.com/in/zainabshaffi" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-opacity duration-150 hover:opacity-75" style={{ color: "#4A1E2F" }}>
                  linkedin.com/in/zainabshaffi
                </a>
              </div>
            </div>

            {/* Location card */}
            <div
              className="flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #D9CECE", boxShadow: "0 2px 10px rgba(74,30,47,0.05)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#4A1E2F" }}>
                <MapPin className="w-4.5 h-4.5" style={{ color: "#F7F4EB" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#8C5369" }}>Location</p>
                <p className="text-sm font-medium" style={{ color: "#4A1E2F" }}>Available Worldwide</p>
                <p className="text-xs mt-0.5" style={{ color: "#2B2527", opacity: 0.6 }}>Remote</p>
              </div>
            </div>

            {/* Calendly CTA */}
            <a
              href="#"
              className="group flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4A1E2F", boxShadow: "0 6px 20px rgba(74,30,47,0.22)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(140,83,105,0.25)" }}>
                <Calendar className="w-4.5 h-4.5" style={{ color: "#8C5369" }} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>Schedule a Call</p>
                <p className="text-sm font-bold" style={{ color: "#FFFFFF" }}>Book a Discovery Call</p>
              </div>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                style={{ backgroundColor: "#8C5369" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="#F7F4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* Response time note */}
            <div className="flex items-center gap-2.5 px-2 py-1">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#8C5369" }} />
              <p className="text-xs" style={{ color: "#2B2527", opacity: 0.6 }}>Typically responds within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
