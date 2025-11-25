'use client'

export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast',
      description: 'Get approved and funded in 24 hours, not weeks. Time is money, and we respect yours.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Flexible Terms',
      description: 'Customized financing solutions that adapt to your business needs, not the other way around.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Transparent Process',
      description: 'No hidden fees, no surprises. Clear terms and honest communication every step of the way.',
    },
  ]

  return (
    <section id="benefits" className="py-24 gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-cyan opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-accent-cyan font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 text-shadow">
            We're Your Growth Partner
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're not just another lender. We're your growth partner.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/20 card-hover"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-cyan/0 to-purple-500/0 group-hover:from-accent-cyan/5 group-hover:to-purple-500/5 transition-all duration-500 -z-10"></div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan to-purple-600 text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 group-hover:text-accent-cyan transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
