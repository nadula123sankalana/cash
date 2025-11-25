'use client'

import EligibilityForm from './EligibilityForm'

export default function Hero() {
  return (
    <section className="gradient-primary min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-cyan opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow leading-tight">
              Fuel Your Growth.
              <br />
              <span className="text-accent-cyan">Funding in 24 Hours.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-text-secondary leading-relaxed">
              Get the fast, flexible capital you need to seize opportunities, manage cash flow, and take your business to the next level.
            </p>
            <button className="bg-accent-cyan text-gray-900 font-bold text-lg px-8 py-4 rounded-lg button-hover shadow-2xl">
              APPLY NOW & GET A DECISION
            </button>
          </div>
          
          {/* Right Content - Form */}
          <div className="lg:block">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </section>
  )
}

