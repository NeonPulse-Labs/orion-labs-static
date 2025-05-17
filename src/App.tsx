import { useState, useRef } from 'react';
import type { ReactNode } from 'react';

// Define section types for type safety
type SectionName = 'home' | 'vision' | 'about' | 'contact';

interface NavLinkProps {
  section: SectionName;
  targetRef: React.RefObject<HTMLDivElement>;
  children: ReactNode;
}

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionName>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const homeRef = useRef<HTMLDivElement>(null!);
  const visionRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: SectionName) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  };
  
  // Navigation link component with active state
  const NavLink = ({ section, targetRef, children }: NavLinkProps) => {
    return (
      <button 
        onClick={() => scrollToSection(targetRef, section)}
        className={`relative px-3 py-2 transition-all duration-300 hover:text-blue-400 ${
          activeSection === section ? 'text-blue-400' : 'text-gray-300'
        }`}
      >
        {children}
        {activeSection === section && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
        )}
      </button>
    );
  };
  
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="sticky top-0 z-10 w-screen backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg
              className="w-10 h-10 text-blue-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
              <line x1="9.69" y1="8" x2="21.17" y2="8" />
              <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
              <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
              <line x1="14.31" y1="16" x2="2.83" y2="16" />
              <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
            </svg>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Orion Labs
            </span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink section="home" targetRef={homeRef}>Home</NavLink>
            <NavLink section="vision" targetRef={visionRef}>Vision</NavLink>
            <NavLink section="about" targetRef={aboutRef}>About</NavLink>
            <NavLink section="contact" targetRef={contactRef}>Contact</NavLink>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden w-full px-4 py-3 bg-gray-800 flex flex-col space-y-2">
            <button onClick={() => scrollToSection(homeRef, 'home')} className="py-2 hover:text-blue-400 text-left">Home</button>
            <button onClick={() => scrollToSection(visionRef, 'vision')} className="py-2 hover:text-blue-400 text-left">Vision</button>
            <button onClick={() => scrollToSection(aboutRef, 'about')} className="py-2 hover:text-blue-400 text-left">About</button>
            <button onClick={() => scrollToSection(contactRef, 'contact')} className="py-2 hover:text-blue-400 text-left">Contact</button>
          </nav>
        )}
      </header>
      
      <main className="flex-grow w-screen">
        {/* Home Section */}
        <div ref={homeRef} className="w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Predictive <span className="text-blue-400">Logistics</span> for Tomorrow
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mb-10">
                We are redefining logistics with AI-powered predictive technologies that 
                streamline operations and empower organizations to move faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection(contactRef, 'contact')}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection(visionRef, 'vision')}
                  className="px-6 py-3 bg-transparent border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision Section with styled container */}
        <div ref={visionRef} className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">
              <p className="text-lg text-gray-300">
                At Orion Labs, we aim to be the leader in predictive logistics, using cutting-edge 
                software to enhance visibility, optimize resource allocation, and transform supply 
                chain operations. Our vision is to create a world where logistics networks can be 
                established on-demand, with all required documentation automatically predicted and 
                prepared before you even know you need it.
              </p>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <div ref={aboutRef} className="w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Predictive Technology</h3>
                <p className="text-gray-300">
                  Our AI models anticipate documentation requirements before they arise, 
                  saving time and reducing errors in logistics operations.
                </p>
              </div>
              
              <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ad Hoc Networks</h3>
                <p className="text-gray-300">
                  Create and visualize logistics networks on demand, enabling rapid response to 
                  changing market conditions and opportunities.
                </p>
              </div>
              
              <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Paperwork</h3>
                <p className="text-gray-300">
                  Eliminate manual form-filling with smart prediction algorithms that prepare 
                  documents with contextual awareness.
                </p>
              </div>
              
              <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                <p className="text-gray-300">
                  Monitor your entire logistics operation with powerful dashboards that provide 
                  actionable insights and visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div ref={contactRef} className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-300 mb-6">
                    Reach out to us for inquiries, partnerships, or further information about how 
                    Orion Labs can transform your logistics operations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300">contact@orion-labs.io</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">1620 Red Bud Lane, Round Rock, TX 78664</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                  <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                  <p className="text-gray-300 mb-4">
                    Leave your details and we'll get back to you soon.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <span className="block text-sm font-medium text-gray-300 mb-1">Name</span>
                        <span className="text-xs text-gray-400">Required</span>
                      </div>
                      <div className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md">
                        Enter your name
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span className="block text-sm font-medium text-gray-300 mb-1">Email</span>
                        <span className="text-xs text-gray-400">Required</span>
                      </div>
                      <div className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md">
                        Enter your email
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span className="block text-sm font-medium text-gray-300 mb-1">Message</span>
                        <span className="text-xs text-gray-400">Required</span>
                      </div>
                      <div className="w-full px-4 py-2 h-24 bg-gray-700 border border-gray-600 rounded-md">
                        Type your message here...
                      </div>
                    </div>
                    <button 
                      className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Send Message
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      This is a demo form. In a real implementation, you would connect this to a backend service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-screen bg-gray-900 border-t border-gray-800 py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg
                className="w-8 h-8 text-blue-400 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
              </svg>
              <span className="font-bold text-lg">Orion Labs</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; 2025 Orion Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;