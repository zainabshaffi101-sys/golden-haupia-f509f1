import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import CredibilitySection from '@/components/sections/CredibilitySection'
import AboutSection from '@/components/sections/AboutSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import ResultsSection from '@/components/sections/ResultsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ToolsSection from '@/components/sections/ToolsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PersonalBrandSection from '@/components/sections/PersonalBrandSection'
import ContactSection from '@/components/sections/ContactSection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function Footer() {
  return (
    <footer style={{ backgroundColor: '#DDD5C8' }} className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-1" style={{ color: '#4A1E2F' }}>Zainab Shaffi</div>
            <div style={{ color: '#8C5369' }} className="text-sm font-medium mb-3">
              Operations &amp; Executive Support Specialist
            </div>
            <p style={{ color: 'rgba(43,37,39,0.6)' }} className="text-sm leading-relaxed">
              Helping leaders create clarity, efficiency, and sustainable growth through better systems and execution.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3" style={{ color: '#2B2527' }}>Quick Links</div>
            <ul className="space-y-2">
              {[['About', '#about'], ['Expertise', '#expertise'], ['Projects', '#projects'], ['Process', '#process'], ['Contact', '#contact']].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(43,37,39,0.6)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#4A1E2F'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(43,37,39,0.6)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3" style={{ color: '#2B2527' }}>Connect</div>
            <ul className="space-y-2">
              <li>
                <a href="mailto:zainabshaffi101@gmail.com" className="text-sm transition-colors" style={{ color: 'rgba(43,37,39,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#4A1E2F'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(43,37,39,0.6)'}>
                  zainabshaffi101@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zainab-adejoke-shaffi-1479ba35a" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: 'rgba(43,37,39,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#4A1E2F'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(43,37,39,0.6)'}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://calendar.app.google/MQziGAszQY8wVMqp9" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: 'rgba(43,37,39,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#4A1E2F'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(43,37,39,0.6)'}>
                  Book a Discovery Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2" style={{ borderTop: '1px solid rgba(74,30,47,0.2)' }}>
          <p className="text-sm" style={{ color: 'rgba(43,37,39,0.4)' }}>© 2024 Zainab Shaffi. All rights reserved.</p>
          <p style={{ color: '#8C5369' }} className="text-sm italic">"Great systems create great results."</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F4EB' }}>
      <Navigation />
      <main>
        <HeroSection />
        <CredibilitySection />
        <AboutSection />
        <ExpertiseSection />
        <ResultsSection />
        <ProjectsSection />
        <ToolsSection />
        <TestimonialsSection />
        <ProcessSection />
        <PersonalBrandSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
