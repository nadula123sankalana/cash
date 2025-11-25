'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Top tier - Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-12 border-b border-white/20">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-heading font-bold mb-2 bg-gradient-to-r from-white to-accent-cyan bg-clip-text text-transparent">
              Uplyft Capital
            </h3>
            <p className="text-text-secondary text-sm mt-2 max-w-xs">
              Empowering businesses with fast, flexible funding solutions.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 md:gap-8 text-sm">
            <a href="#" className="hover:text-accent-cyan transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#how-it-works" className="hover:text-accent-cyan transition-colors duration-300 font-medium">
              How It Works
            </a>
            <a href="#benefits" className="hover:text-accent-cyan transition-colors duration-300 font-medium">
              Why Choose Us
            </a>
            <a href="#testimonials" className="hover:text-accent-cyan transition-colors duration-300 font-medium">
              Testimonials
            </a>
            <a href="#" className="hover:text-accent-cyan transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#" className="hover:text-accent-cyan transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>
        </div>
        
        {/* Bottom tier - Contact & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-text-secondary">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@uplyftcapital.com" className="hover:text-accent-cyan transition-colors">
                info@uplyftcapital.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:1800875938" className="hover:text-accent-cyan transition-colors">
                1-800-UPlyft (1-800-875-938)
              </a>
            </div>
          </div>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Uplyft Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
