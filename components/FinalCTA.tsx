'use client'

export default function FinalCTA() {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-cyan opacity-10 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 text-shadow">
            Ready to Uplift Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed">
            Stop waiting on slow banks. Get the capital you need to grow, today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-accent-cyan text-gray-900 font-bold text-xl px-12 py-5 rounded-lg button-hover shadow-2xl w-full sm:w-auto">
              APPLY FOR YOUR LOAN NOW
            </button>
            <button className="bg-accent-magenta text-white font-bold text-xl px-12 py-5 rounded-lg button-hover shadow-2xl w-full sm:w-auto">
              CONTACT US
            </button>
          </div>
          <p className="text-text-secondary text-sm mt-4 text-center">
            No obligation. Get a decision in 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}

