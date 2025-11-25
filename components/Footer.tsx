'use client'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Top tier - Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-white/20">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-heading font-bold">Uplyft Capital</h3>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            <a href="#" className="hover:text-accent-cyan transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-accent-cyan transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-accent-cyan transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-accent-cyan transition-colors">Testimonials</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">About</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">Contact</a>
          </nav>
        </div>
        
        {/* Bottom tier - Contact & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <div className="mb-4 md:mb-0">
            <p>Email: info@uplyftcapital.com</p>
            <p>Phone: 1-800-UPlyft (1-800-875-938)</p>
          </div>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Uplyft Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

