'use client'

import EligibilityForm from './EligibilityForm'

export default function Hero() {
  return (
    <section className="gradient-primary min-h-screen flex items-start relative overflow-hidden pt-24">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-cyan opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow leading-tight">
              Fuel Your Growth.
              <br />
              <span className="text-white">Funding in 24 Hours.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
              Get the fast, flexible capital you need to seize opportunities, manage cash flow, and take your business to the next level.
            </p>
            
            {/* Social Proof Section */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Customer Avatars */}
                <div className="flex items-center -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-accent-cyan to-accent-magenta flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xs shadow-lg">
                    +15K
                  </div>
                </div>
                
                {/* Rating & Stats */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-semibold text-sm">5.0</span>
                  </div>
                  
                  <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary text-sm">Trusted by</span>
                    <span className="text-white font-bold text-lg">20,000+</span>
                    <span className="text-text-secondary text-sm">businesses</span>
                  </div>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-medium">Same-Day Approval Available</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Form */}
          <div className="flex justify-center lg:justify-start">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </section>
  )
}

