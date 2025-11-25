'use client'

export default function FinalCTA() {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-cyan opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-accent-cyan font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 text-shadow leading-tight">
            Ready to Uplift Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed">
            Stop waiting on slow banks. Get the capital you need to grow, today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#how-it-works"
              className="group relative bg-accent-cyan text-gray-900 font-bold text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-xl button-hover shadow-2xl w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">APPLY FOR YOUR LOAN NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <button className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-xl button-hover shadow-2xl w-full sm:w-auto hover:bg-white/20 transition-all duration-300">
              CONTACT US
            </button>
          </div>
          
          {/* Trust Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-secondary text-sm md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No obligation</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24-hour decision</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure & confidential</span>
            </div>
          </div>
          
          {/* Additional Trust Badge */}
          <div className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
            <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white font-medium text-sm md:text-base">Same-Day Approval Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
