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
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-text-secondary">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4">
              <a 
                href="https://www.uplyftcapital.com/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-cyan transition-colors"
              >
                Terms and Conditions
              </a>
              <a 
                href="https://www.uplyftcapital.com/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-cyan transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <p className="text-center">
              © {new Date().getFullYear()} Uplyft Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
