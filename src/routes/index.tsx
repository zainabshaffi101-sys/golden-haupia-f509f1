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
    <footer style={{ backgroundColor: '#0B1F3A' }} className="text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-1">Zainab Shaffi</div>
            <div style={{ color: '#D4A017' }} className="text-sm font-medium mb-3">Operations & Executive Support Specialist</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping leaders create clarity, efficiency, and sustainable growth through better systems and execution.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-gray-200">Quick Links</div>
            <ul className="space-y-2">
              {[['About', '#about'], ['Expertise', '#expertise'], ['Projects', '#projects'], ['Process', '#process'], ['Contact', '#contact']].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-gray-200">Connect</div>
            <ul className="space-y-2">
              <li><a href="mailto:zainabshaffi101@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">zainabshaffi101@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/zainab-adejoke-shaffi-1479ba35a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a></li>
          <li><a href="https://calendar.app.google/wGTfkEAtLUwzgZuS9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Book a Discovery Call</a></li>
        </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-sm">© 2024 Zainab Shaffi. All rights reserved.</p>
          <p style={{ color: '#D4A017' }} className="text-sm italic">"Great systems create great results."</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen">
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
